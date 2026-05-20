import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
  name,
  email,
  phone,
  message,
  website,
  elapsedTime,
} = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.mail.me.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    if (website) {
  return Response.json(
    { error: "Spam detected" },
    { status: 400 }
  );
}

if (elapsedTime < 3000) {
  return Response.json(
    { error: "Too fast" },
    { status: 400 }
  );
}

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "csabafujak@icloud.com",
      subject: "Új ajánlatkérés - Fuják Trans",
      html: `
        <h2>Új üzenet érkezett</h2>

        <p><b>Név:</b> ${body.name}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Telefonszám:</b> ${body.phone}</p>
        <p><b>Üzenet:</b></p>
        <p>${body.message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}