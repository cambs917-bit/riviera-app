import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

const engagements = [
  {
    num: "01",
    title: "Un interlocuteur unique",
    desc: "Un seul contact, disponible et réactif, qui connaît votre bien par cœur. Un suivi fluide, sans intermédiaires, de la mise en ligne jusqu'au reporting mensuel.",
  },
  {
    num: "02",
    title: "La qualité avant le volume",
    desc: "Nous travaillons avec un nombre limité de propriétaires pour maintenir un niveau de service élevé sur chaque bien. Votre propriété n'est jamais noyée dans un portefeuille trop large.",
  },
  {
    num: "03",
    title: "Rémunération au résultat",
    desc: "20 % des revenus encaissés, sans frais cachés ni engagement minimum. Plus votre bien performe, plus nous sommes motivés à faire mieux.",
  },
];

export default function AProposPage() {
  return (
    <main style={{ background: "var(--color-cream, #F5F0E8)" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "78vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <img
          src="/images/gallery/prop1.jpg"
          alt="Riviera Concierge"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,31,53,.85) 0%, rgba(12,31,53,.3) 55%, transparent 100%)" }} />
        <div style={{ position: "relative", width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "clamp(80px,10vw,120px) clamp(24px,4vw,52px) clamp(56px,7vw,80px)" }}>
          <RevealOnScroll>
            <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "rgba(201,169,110,.9)", marginBottom: "20px" }}>
              À propos
            </p>
            <h1 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(36px,5vw,66px)", fontWeight: 300, color: "#fff", lineHeight: 1.1, maxWidth: "680px" }}>
              Votre bien, géré comme<br />
              <em style={{ fontStyle: "italic" }}>il le mérite.</em>
            </h1>
            <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "clamp(13px,1.4vw,15px)", fontWeight: 300, color: "rgba(255,255,255,.6)", marginTop: "24px", maxWidth: "520px", lineHeight: 1.7 }}>
              Riviera Concierge prend en charge la gestion complète de votre location saisonnière sur la Côte d'Azur — pour que vous perceviez des revenus optimisés, sans contraintes.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── IMAGE + TEXTE ── */}
      <section style={{ padding: "clamp(72px,9vw,110px) clamp(24px,4vw,52px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }}>
          <RevealOnScroll>
            <div style={{ position: "relative" }}>
              <img
                src="/images/gallery/prop4.jpg"
                alt="Terrasse vue Riviera"
                style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
              />
              <div style={{ position: "absolute", top: "-10px", left: "-10px", width: "36px", height: "36px", borderTop: "1.5px solid var(--color-gold,#C9A96E)", borderLeft: "1.5px solid var(--color-gold,#C9A96E)" }} />
              <div style={{ position: "absolute", bottom: "-10px", right: "-10px", width: "36px", height: "36px", borderBottom: "1.5px solid var(--color-gold,#C9A96E)", borderRight: "1.5px solid var(--color-gold,#C9A96E)" }} />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <div>
              <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #C9A96E)", marginBottom: "20px" }}>
                Notre approche
              </p>
              <h2 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(28px,3.2vw,42px)", fontWeight: 300, color: "var(--color-navy, #0C1F35)", lineHeight: 1.2, marginBottom: "28px" }}>
                Une présence locale,<br />
                <em style={{ fontStyle: "italic" }}>au service de votre rentabilité.</em>
              </h2>
              <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "13.5px", fontWeight: 300, color: "rgba(12,31,53,.65)", lineHeight: 1.8, marginBottom: "18px" }}>
                Basés sur la Côte d'Azur, nous gérons chaque bien avec le même soin qu'un propriétaire attentif. Réactivité, connaissance du marché local et suivi personnalisé font partie de notre engagement au quotidien.
              </p>
              <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "13.5px", fontWeight: 300, color: "rgba(12,31,53,.65)", lineHeight: 1.8 }}>
                Notre réseau de partenaires locaux — prestataires, artisans, services sur mesure — renforce la valeur de chaque séjour. Des voyageurs bien accueillis laissent de meilleures évaluations — et ce sont ces évaluations qui font la différence sur votre taux d'occupation et votre tarif moyen.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── ENGAGEMENTS ── */}
      <section style={{ background: "#fff", padding: "clamp(72px,9vw,110px) clamp(24px,4vw,52px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <RevealOnScroll>
            <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #C9A96E)", marginBottom: "16px" }}>
              Nos engagements
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(28px,3.2vw,42px)", fontWeight: 300, color: "var(--color-navy, #0C1F35)", lineHeight: 1.2, maxWidth: "520px", marginBottom: "56px" }}>
              Trois principes qui définissent<br />notre façon de travailler.
            </h2>
          </RevealOnScroll>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(32px,5vw,56px)" }}>
            {engagements.map((e, i) => (
              <RevealOnScroll key={i} delay={i * 0.12}>
                <div style={{ borderTop: "1px solid rgba(12,31,53,.1)", paddingTop: "28px" }}>
                  <span style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "3px", color: "var(--color-gold, #C9A96E)" }}>
                    {e.num}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(18px,2vw,24px)", fontWeight: 400, color: "var(--color-navy, #0C1F35)", margin: "14px 0 16px", lineHeight: 1.3 }}>
                    {e.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "13px", fontWeight: 300, color: "rgba(12,31,53,.6)", lineHeight: 1.75 }}>
                    {e.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Contact inline */}
          <RevealOnScroll delay={0.2}>
            <div style={{ marginTop: "64px", paddingTop: "48px", borderTop: "1px solid rgba(12,31,53,.07)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
              <p style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(18px,2vw,24px)", fontWeight: 300, fontStyle: "italic", color: "var(--color-navy, #0C1F35)" }}>
                Vous avez un bien à confier ? Parlons-en.
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
        <img src="/images/gallery/prop2.jpg" alt="Chambre" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
        <img src="/images/gallery/prop3.jpg" alt="Cuisine" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

    </main>
  );
}
