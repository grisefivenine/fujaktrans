import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
  service,
  name,
  email,
  phone,
  fromLocation,
  toLocation,
  fromFloor,
  toFloor,
  rooms,
  loaders,
  message,
  note,
  date,
  website,
  elapsedTime,
} = body;

    if (website) {
      return NextResponse.json(
        { error: "Spam detected" },
        { status: 400 }
      );
    }

    if (elapsedTime && elapsedTime < 3000) {
      return NextResponse.json(
        { error: "Too fast" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.mail.me.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "csabafujak@icloud.com",
      subject: "Új ajánlatkérés - Fuják Trans",
      html: `
  <h2>Új ajánlatkérés</h2>

  <p><b>Szolgáltatás:</b> ${service}</p>

  <hr />

  <p><b>Név:</b> ${name}</p>
  <p><b>Email:</b> ${email}</p>
  <p><b>Telefon:</b> ${phone}</p>

  <hr />

  <p><b>Honnan:</b> ${fromLocation}</p>
  <p><b>Hova:</b> ${toLocation}</p>

  <p><b>Honnan emelet:</b> ${fromFloor}</p>
  <p><b>Hova emelet:</b> ${toFloor}</p>

  <p><b>Szobák:</b> ${rooms}</p>
  <p><b>Rakodók:</b> ${loaders}</p>

  <p><b>Dátum:</b> ${date}</p>

  <hr />

  <p><b>Szállítandó tételek:</b></p>
  <p>${message}</p>

  <p><b>Egyéb megjegyzés:</b></p>
  <p>${note}</p>
`,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}