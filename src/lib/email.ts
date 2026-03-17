import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  type: string;
  message: string;
}) {
  await transporter.sendMail({
    from: process.env.SMTP_USER || "contact@riviera-concierge.fr",
    to: process.env.CONTACT_EMAIL || "contact@riviera-concierge.fr",
    subject: `Nouveau message de ${data.firstName} ${data.lastName}`,
    html: `
      <h2>Nouveau message de contact</h2>
      <p><strong>Nom:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Téléphone:</strong> ${data.phone || "Non renseigné"}</p>
      <p><strong>Type:</strong> ${data.type}</p>
      <hr>
      <p>${data.message}</p>
    `,
  });
}
