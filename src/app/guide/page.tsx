import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réglementation Airbnb Côte d'Azur 2026 | Marelle Home",
  description: "Tout ce que vous devez savoir pour louer légalement sur la Côte d'Azur en 2026 : déclaration en mairie, loi Le Meur, résidence principale vs secondaire, SIRET, taxe de séjour et fiscalité.",
  alternates: {
    canonical: "https://marelle-home.fr/guide",
  },
};

const regles = [
  {
    num: "01",
    title: "Déclaration & enregistrement",
    desc: "Toute location de courte durée doit être déclarée en mairie. À Nice, Cannes et Antibes, un numéro d'enregistrement est obligatoire sur toutes vos annonces. La location d'une résidence secondaire requiert en plus une autorisation de changement d'usage — et une compensation immobilière en zone tendue. Un SIRET est alors obligatoire.",
  },
  {
    num: "02",
    title: "Plafonds & loi Le Meur 2024",
    desc: "La résidence principale est limitée à 120 nuits par an. La loi Le Meur donne aux communes le pouvoir d'abaisser ce seuil et d'instaurer des quotas. La résidence secondaire n'a pas de plafond de nuits, mais les démarches sont plus lourdes et le régime fiscal différent (LMP/LMNP selon vos revenus).",
  },
  {
    num: "03",
    title: "Fiscalité & taxe de séjour",
    desc: "Airbnb collecte et reverse automatiquement la taxe de séjour. Vos revenus sont imposables au micro-BIC ou au réel. Depuis 2025 (loi Le Meur), l'abattement micro-BIC est de 30 % pour les meublés non classés (dans la limite de 15 000 € de recettes) et de 50 % pour les meublés classés (étoilés, dans la limite de 77 700 €). L'obtention d'un classement peut donc être très avantageuse sur la Riviera. Au-delà de 15 000 € annuels, une consultation avec un expert-comptable est conseillée.",
  },
];

const checklist = [
  "Numéro d'enregistrement déposé en mairie",
  "Numéro affiché sur toutes les annonces",
  "Autorisation de changement d'usage (résidence secondaire)",
  "Compensation immobilière si zone tendue (résidence secondaire)",
  "Numéro SIRET (résidence secondaire)",
  "Respect du plafond de 120 nuits (résidence principale)",
  "Vérification du règlement de copropriété",
  "DPE valide pour toute nouvelle annonce",
  "Assurance habitation adaptée à la location saisonnière",
];

export default function GuidePage() {
  return (
    <main style={{ background: "var(--color-cream, #F7F3EC)" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "60vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <img
          src="/images/gallery/prop2.jpg"
          alt="Réglementation Airbnb Côte d'Azur"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(43,38,32,.88) 0%, rgba(43,38,32,.35) 55%, transparent 100%)" }} />
        <div style={{ position: "relative", width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "clamp(80px,10vw,120px) clamp(24px,4vw,52px) clamp(52px,7vw,72px)" }}>
          <RevealOnScroll>
            <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "rgba(176,118,79,.9)", marginBottom: "20px" }}>
              Réglementation
            </p>
            <h1 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(36px,5vw,64px)", fontWeight: 300, color: "#fff", lineHeight: 1.1, maxWidth: "640px" }}>
              Louez en règle,<br />
              <em style={{ fontStyle: "italic" }}>sans mauvaises surprises.</em>
            </h1>
            <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "clamp(13px,1.4vw,15px)", fontWeight: 300, color: "rgba(255,255,255,.55)", marginTop: "20px", maxWidth: "500px", lineHeight: 1.7 }}>
              La réglementation des locations saisonnières évolue rapidement. Voici l'essentiel pour louer légalement sur la Côte d'Azur en 2026.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── INTRO + CHECKLIST ── */}
      <section style={{ padding: "clamp(56px,7vw,88px) clamp(24px,4vw,52px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(48px,7vw,96px)", alignItems: "start" }}>

          <RevealOnScroll>
            <div>
              <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #B0764F)", marginBottom: "20px" }}>
                Ce qui a changé
              </p>
              <h2 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(28px,3.2vw,42px)", fontWeight: 300, color: "var(--color-navy, #2B2620)", lineHeight: 1.2, marginBottom: "28px" }}>
                Un cadre légal<br />
                <em style={{ fontStyle: "italic" }}>de plus en plus strict.</em>
              </h2>
              <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "13.5px", fontWeight: 300, color: "rgba(43,38,32,.65)", lineHeight: 1.85, marginBottom: "20px" }}>
                Depuis la loi Le Meur de novembre 2024, les municipalités disposent de nouveaux outils pour encadrer les meublés de tourisme. Sur la Côte d'Azur, plusieurs communes ont déjà durci leurs conditions d'enregistrement, de changement d'usage et de compensation immobilière.
              </p>
              <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "13.5px", fontWeight: 300, color: "rgba(43,38,32,.65)", lineHeight: 1.85 }}>
                Marelle vous accompagne, à titre pratique et informatif, dans les démarches administratives courantes liées à la mise en location de votre bien. Pour toute question juridique ou fiscale complexe, nous vous recommandons de consulter un professionnel habilité.
              </p>
              <div style={{ marginTop: "36px" }}>
                <Link href="/contact" className="cta-btn-navy">
                  Nous vous accompagnons dans vos démarches <span>→</span>
                </Link>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <div style={{ background: "#fff", padding: "clamp(32px,4vw,48px)" }}>
              <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #B0764F)", marginBottom: "28px" }}>
                Checklist avant de publier
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {checklist.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "13px 0", borderBottom: "1px solid rgba(43,38,32,.06)", fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "13.5px", fontWeight: 300, color: "rgba(43,38,32,.75)" }}>
                    <span style={{ color: "var(--color-gold, #B0764F)", fontSize: "16px", lineHeight: 1, flexShrink: 0 }}>—</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* ── 3 OBLIGATIONS CLÉS ── */}
      <section style={{ background: "#fff", padding: "clamp(56px,7vw,88px) clamp(24px,4vw,52px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <RevealOnScroll>
            <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #B0764F)", marginBottom: "16px" }}>
              Les points essentiels
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(28px,3.2vw,42px)", fontWeight: 300, color: "var(--color-navy, #2B2620)", lineHeight: 1.2, maxWidth: "520px", marginBottom: "40px" }}>
              Trois obligations à connaître<br />avant de vous lancer.
            </h2>
          </RevealOnScroll>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(32px,5vw,56px)" }}>
            {regles.map((r, i) => (
              <RevealOnScroll key={i} delay={i * 0.12}>
                <div style={{ borderTop: "1px solid rgba(43,38,32,.1)", paddingTop: "28px" }}>
                  <span style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "3px", color: "var(--color-gold, #B0764F)" }}>
                    {r.num}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(18px,2vw,24px)", fontWeight: 400, color: "var(--color-navy, #2B2620)", margin: "14px 0 16px", lineHeight: 1.3 }}>
                    {r.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "13px", fontWeight: 300, color: "rgba(43,38,32,.6)", lineHeight: 1.75 }}>
                    {r.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={0.2}>
            <div style={{ marginTop: "64px", paddingTop: "48px", borderTop: "1px solid rgba(43,38,32,.07)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
              <p style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(18px,2vw,24px)", fontWeight: 300, fontStyle: "italic", color: "var(--color-navy, #2B2620)" }}>
                Vous voulez vous lancer en toute sérénité ?
              </p>
              <Link href="/contact" className="cta-btn-navy" style={{ whiteSpace: "nowrap" }}>
                Nous contacter <span>→</span>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── IMAGE BANDE ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", height: "clamp(220px,28vw,380px)", overflow: "hidden" }}>
        <img src="/images/gallery/prop4.jpg" alt="Propriété Riviera" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
        <img src="/images/gallery/prop1.jpg" alt="Vue Côte d'Azur" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

    </main>
  );
}
