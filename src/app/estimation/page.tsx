import type { Metadata } from "next";
import EstimationClient from "./EstimationClient";

export const metadata: Metadata = {
  title: "Estimer mes revenus locatifs — Simulateur Marelle Home Côte d'Azur",
  description:
    "Calculez le potentiel locatif de votre bien sur la Côte d'Azur avec Marelle Home. Notre simulateur vous donne une estimation réaliste des revenus par ville : Nice, Cannes, Antibes, Saint-Tropez.",
  alternates: {
    canonical: "https://marelle-home.fr/estimation",
  },
};

export default function EstimationPage() {
  return <EstimationClient />;
}
