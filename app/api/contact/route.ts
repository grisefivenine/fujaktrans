import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function readText(value: unknown, maxLength = 4000): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
    .replaceAll("\n", "<br />");
}

function row(label: string, value: string): string {
  if (!value) return "";
  return `<tr><th align="left" style="padding:9px 12px;border-bottom:1px solid #eee;color:#6b6063;font-size:13px;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</th><td style="padding:9px 12px;border-bottom:1px solid #eee;color:#211719;font-size:14px;line-height:1.55">${escapeHtml(value)}</td></tr>`;
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ success: false, error: "Érvénytelen kérés." }, { status: 400 });
    }

    const data = body as Record<string, unknown>;
    const website = readText(data.website, 200);
    const elapsedTime = typeof data.elapsedTime === "number" ? data.elapsedTime : 0;

    // Honeypot: botkitöltés esetén ne küldjünk levelet.
    if (website) return NextResponse.json({ success: true });
    if (elapsedTime > 0 && elapsedTime < 2500) {
      return NextResponse.json({ success: false, error: "Kérjük, próbálja újra." }, { status: 400 });
    }

    const name = readText(data.name, 160);
    const email = readText(data.email, 254);
    const phone = readText(data.phone, 80);
    const service = readText(data.service, 180);

    if (!name || !phone || !email || !service) {
      return NextResponse.json({ success: false, error: "A név, telefonszám, e-mail cím és szolgáltatás megadása kötelező." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, error: "Kérjük, adjon meg érvényes e-mail címet." }, { status: 400 });
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    if (!emailUser || !emailPass) {
      return NextResponse.json({ success: false, error: "Az e-mail szolgáltatás nincs konfigurálva." }, { status: 503 });
    }

    const fields: Array<[string, string]> = [
      ["Szolgáltatás", service],
      ["Név", name],
      ["Cégnév", readText(data.company, 180)],
      ["E-mail", email],
      ["Telefon", phone],
      ["Felvételi cím", readText(data.fromLocation, 500)],
      ["Felvételi emelet", readText(data.fromFloor, 100)],
      ["Felvételi ajtó", readText(data.fromDoor, 80)],
      ["Felvételi lift", readText(data.fromElevator, 100)],
      ["Célállomás", readText(data.toLocation, 500)],
      ["Célállomási emelet", readText(data.toFloor, 100)],
      ["Célállomási ajtó", readText(data.toDoor, 80)],
      ["Célállomási lift", readText(data.toElevator, 100)],
      ["Szobák / ingatlan mérete", readText(data.rooms, 100)],
      ["Rakodók száma", readText(data.loaders, 100)],
      ["Tervezett dátum", readText(data.date, 40)],
      ["Szállítandó tárgyak", readText(data.message, 5000)],
      ["Egyéb megjegyzés", readText(data.note, 5000)],
    ];

    const htmlRows = fields.map(([label, value]) => row(label, value)).filter(Boolean).join("");
    const textBody = fields.filter(([, value]) => value).map(([label, value]) => `${label}:\n${value}`).join("\n\n");

    const transporter = nodemailer.createTransport({
      host: "smtp.mail.me.com",
      port: 587,
      secure: false,
      auth: { user: emailUser, pass: emailPass },
    });

    await transporter.sendMail({
      from: emailUser,
      to: "csabafujak@icloud.com",
      replyTo: email,
      subject: `Új ajánlatkérés – Fuják Trans – ${service}`,
      text: textBody,
      html: `<!doctype html><html lang="hu"><body style="margin:0;padding:24px;background:#f7f3f1;font-family:Arial,Helvetica,sans-serif;color:#211719"><div style="max-width:760px;margin:0 auto;padding:24px;border:1px solid #eee;border-radius:20px;background:#fff"><div style="margin:-24px -24px 20px;padding:20px 24px;border-radius:20px 20px 0 0;background:#160d10;color:#fff"><p style="margin:0 0 6px;color:#ff8753;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase">Fuják Trans</p><h1 style="margin:0;font-size:22px">Új ajánlatkérés</h1></div><table role="presentation" style="width:100%;border-collapse:collapse">${htmlRows}</table></div></body></html>`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "A küldés közben hiba történt." }, { status: 500 });
  }
}
