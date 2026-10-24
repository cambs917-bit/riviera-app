import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs Marelle Home — 20% de commission, sans frais fixes",
  description:
    "La commission unique de Marelle Home, 20 % des revenus locatifs perçus couvre l'intégralité de la prestation : photographies professionnelles, gestion des réservations, check-in personnalisé, optimisation dynamique des prix. Hors frais de ménage et taxes de séjour. Aucun frais fixe, sans engagement.",
  alternates: {
    canonical: "https://marelle-home.fr/tarifs",
  },
};

import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

const servicesInclus = [
  "Création et optimisation de l'annonce",
  "Photographies professionnelles",
  "Gestion complète des réservations",
  "Communication voyageurs 24h/24, 7j/7",
  "Check-in et check-out personnalisé",
  "Optimisation dynamique des tarifs",
  "Coordination de la maintenance",
  "Accès à notre réseau de prestataires locaux (activités, excursions, services pour voyageurs)",
];

const garanties = [
  {
    num: "01",
    title: "Aucun frais fixe",
    desc: "Notre commission s'applique uniquement sur les revenus locatifs encaissés. Si votre bien ne génère pas de réservation, vous ne payez rien.",
  },
  {
    num: "02",
    title: "Sans engagement de durée",
    desc: "Vous pouvez mettre fin à notre collaboration avec un préavis de 30 jours, sans pénalité. Les réservations déjà confirmées restent honorées jusqu'à leur terme.",
  },
  {
    num: "03",
    title: "Transparence totale",
    desc: "Vous recevez un reporting mensuel détaillé : réservations, revenus, taux d'occupation. Aucune dépense effectuée sans votre accord.",
  },
];

export default function TarifsPage() {
  return (
    <main style={{ background: "var(--color-cream, #F7F3EC)" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "60vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <img
          src="/images/gallery/prop3.jpg"
          alt="Cuisine Riviera"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(43,38,32,.88) 0%, rgba(43,38,32,.35) 55%, transparent 100%)" }} />
        <div style={{ position: "relative", width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "clamp(80px,10vw,120px) clamp(24px,4vw,52px) clamp(52px,7vw,72px)" }}>
          <RevealOnScroll>
            <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "rgba(176,118,79,.9)", marginBottom: "20px" }}>
              Tarifs
            </p>
            <h1 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(36px,5vw,64px)", fontWeight: 300, color: "#fff", lineHeight: 1.1, maxWidth: "640px" }}>
              Une gestion transparente,<br />
              <em style={{ fontStyle: "italic" }}>sans frais fixes.</em>
            </h1>
            <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "clamp(13px,1.4vw,15px)", fontWeight: 300, color: "rgba(255,255,255,.55)", marginTop: "20px", maxWidth: "480px", lineHeight: 1.7 }}>
              Vous ne payez que sur les revenus que nous générons pour vous. C'est aussi simple que ça.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── COMMISSION + SERVICES ── */}
      <section style={{ padding: "clamp(72px,9vw,110px) clamp(24px,4vw,52px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(48px,7vw,96px)", alignItems: "start" }}>

          {/* Gauche : commission */}
          <RevealOnScroll>
            <div>
              <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #B0764F)", marginBottom: "32px" }}>
                Notre commission
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "16px" }}>
                <span style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(72px,10vw,100px)", fontWeight: 300, color: "var(--color-navy, #2B2620)", lineHeight: 1 }}>
                  20
                </span>
                <span style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(36px,5vw,52px)", fontWeight: 300, color: "var(--color-navy, #2B2620)" }}>
                  %
                </span>
              </div>
              <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "13px", fontWeight: 300, color: "rgba(43,38,32,.5)", marginBottom: "4px" }}>
                des revenus locatifs perçus (hors frais de ménage facturés aux voyageurs et hors taxes de séjour)
              </p>
              <div style={{ width: "48px", height: "1px", background: "var(--color-gold, #B0764F)", margin: "28px 0" }} />
              <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "13.5px", fontWeight: 300, color: "rgba(43,38,32,.65)", lineHeight: 1.8, maxWidth: "380px" }}>
                Ce taux unique couvre l'intégralité de notre prestation. Aucun frais de mise en service, aucun supplément pour les prestations listées ci-contre.
              </p>
              <div style={{ marginTop: "40px" }}>
                <Link href="/contact" className="cta-btn-navy">
                  Demander une estimation <span>→</span>
                </Link>
              </div>
            </div>
          </RevealOnScroll>

          {/* Droite : services */}
          <RevealOnScroll delay={0.15}>
            <div>
              <div style={{ background: "#fff", padding: "clamp(32px,4vw,48px)" }}>
                <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #B0764F)", marginBottom: "28px" }}>
                  Inclus dans la commission
                </p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {servicesInclus.map((s, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "13px 0", borderBottom: "1px solid rgba(43,38,32,.06)", fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "13.5px", fontWeight: 300, color: "rgba(43,38,32,.75)" }}>
                      <span style={{ color: "var(--color-gold, #B0764F)", fontSize: "16px", lineHeight: 1, flexShrink: 0 }}>—</span>
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              {/* Frais voyageurs — transparence */}
              <div style={{ marginTop: "16px", padding: "20px 24px", border: "1px solid rgba(43,38,32,.08)", background: "rgba(43,38,32,.02)" }}>
                <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(43,38,32,.4)", marginBottom: "12px" }}>
                  Facturé directement au voyageur
                </p>
                {[
                  "Frais de ménage — ajoutés à l'annonce, ils couvrent l'intégralité du nettoyage et du linge entre chaque séjour.",
                  "Taxe de séjour — collectée par les plateformes et reversée aux communes.",
                ].map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "10px 0", borderBottom: i === 0 ? "1px solid rgba(43,38,32,.06)" : "none", fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "12.5px", fontWeight: 300, color: "rgba(43,38,32,.5)", lineHeight: 1.6 }}>
                    <span style={{ color: "rgba(43,38,32,.25)", fontSize: "14px", lineHeight: 1.6, flexShrink: 0 }}>○</span>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── GARANTIES ── */}
      <section style={{ background: "#fff", padding: "clamp(72px,9vw,110px) clamp(24px,4vw,52px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <RevealOnScroll>
            <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #B0764F)", marginBottom: "16px" }}>
              Nos garanties
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(28px,3.2vw,42px)", fontWeight: 300, color: "var(--color-navy, #2B2620)", lineHeight: 1.2, maxWidth: "520px", marginBottom: "56px" }}>
              Un engagement clair,<br />de notre côté comme du vôtre.
            </h2>
          </RevealOnScroll>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(32px,5vw,56px)" }}>
            {garanties.map((g, i) => (
              <RevealOnScroll key={i} delay={i * 0.12}>
                <div style={{ borderTop: "1px solid rgba(43,38,32,.1)", paddingTop: "28px" }}>
                  <span style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "3px", color: "var(--color-gold, #B0764F)" }}>
                    {g.num}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(18px,2vw,24px)", fontWeight: 400, color: "var(--color-navy, #2B2620)", margin: "14px 0 16px", lineHeight: 1.3 }}>
                    {g.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "13px", fontWeight: 300, color: "rgba(43,38,32,.6)", lineHeight: 1.75 }}>
                    {g.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
