import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendContactEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { firstName, lastName, email, phone, type, message } = data;

    if (!firstName || !lastName || !email || !type || !message) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }

    const contact = await prisma.contactMessage.create({
      data: { firstName, lastName, email, phone, type, message },
    });

    // Try sending email (don't fail if SMTP not configured)
    try {
      await sendContactEmail({ firstName, lastName, email, phone, type, message });
    } catch {
      console.log("Email not sent (SMTP not configured)");
    }

    return NextResponse.json({ success: true, id: contact.id });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
