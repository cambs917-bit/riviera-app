import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Nous contacter — Marelle Home, réponse sous 24h",
  description:
    "Propriétaire ou futur voyageur, contactez Marelle Home. Par email, téléphone ou WhatsApp. Nous vous répondons sous 24h pour toute question sur la gestion locative Airbnb sur la Côte d'Azur.",
  alternates: {
    canonical: "https://marelle-home.fr/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
