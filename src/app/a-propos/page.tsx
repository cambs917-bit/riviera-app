import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Marelle Home, votre conciergerie Airbnb sur la Riviera",
  description:
    "Découvrez l'histoire et les engagements de Marelle Home : interlocuteur unique, exigence à chaque séjour, transparence totale. Une conciergerie née sur la Côte d'Azur.",
  alternates: {
    canonical: "https://marelle-home.fr/a-propos",
  },
};

import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

const engagements = [
  {
    num: "01",
    title: "Un interlocuteur unique",
    desc: "Un seul contact, disponible et réactif, qui connaît votre bien par cœur. Suivi fluide, sans intermédiaires, de la mise en ligne jusqu'au reporting mensuel.",
  },
  {
    num: "02",
    title: "Exigence à chaque séjour",
    desc: "Photos professionnelles, accueil hôtelier soigné, pricing adapté et réseau de prestataires locaux — chaque détail est pensé pour que vos voyageurs vivent une expérience mémorable.",
  },
  {
    num: "03",
    title: "Transparence totale",
    desc: "Reporting mensuel détaillé, aucune dépense sans votre accord, résiliation libre avec un préavis de 30 jours. Vous gardez le contrôle — nous gérons.",
  },
];

export default function AProposPage() {
  return (
    <main style={{ background: "var(--color-cream, #F7F3EC)" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "72vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <img
          src="/images/gallery/prop1.jpg"
          alt="Marelle"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(43,38,32,.88) 0%, rgba(43,38,32,.3) 55%, transparent 100%)" }} />
        <div style={{ position: "relative", width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "clamp(80px,10vw,120px) clamp(24px,4vw,52px) clamp(56px,7vw,80px)" }}>
          <RevealOnScroll>
            <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "rgba(176,118,79,.9)", marginBottom: "20px" }}>
              À propos
            </p>
            <h1 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(36px,5vw,66px)", fontWeight: 300, color: "#fff", lineHeight: 1.1, maxWidth: "680px" }}>
              Votre bien, géré comme<br />
              <em style={{ fontStyle: "italic" }}>il le mérite.</em>
            </h1>
            <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "clamp(13px,1.4vw,15px)", fontWeight: 300, color: "rgba(255,255,255,.6)", marginTop: "24px", maxWidth: "520px", lineHeight: 1.7 }}>
              Marelle prend en charge la gestion complète de votre location saisonnière sur la Côte d'Azur — pour que vous perceviez des revenus optimisés, sans contraintes.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── FONDATEUR ── */}
      <section style={{ padding: "clamp(56px,7vw,88px) clamp(24px,4vw,52px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }}>

          <RevealOnScroll>
            <div>
              <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #B0764F)", marginBottom: "20px" }}>
                Notre histoire
              </p>
              <h2 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(28px,3.2vw,42px)", fontWeight: 300, color: "var(--color-navy, #2B2620)", lineHeight: 1.2, marginBottom: "28px" }}>
                Une conciergerie née<br />
                <em style={{ fontStyle: "italic" }}>sur la Riviera.</em>
              </h2>
              <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "13.5px", fontWeight: 300, color: "rgba(43,38,32,.65)", lineHeight: 1.85, marginBottom: "24px" }}>
                Sur la Côte d&apos;Azur, des centaines de biens d&apos;exception restent sous-exploités : annonces sans âme, tarifs figés, voyageurs mal accueillis. Le potentiel est là — la gestion fait défaut.
              </p>
              <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "13.5px", fontWeight: 300, color: "rgba(43,38,32,.65)", lineHeight: 1.85, marginBottom: "32px" }}>
                Marelle est né du choix de faire autrement : sélectionner peu de biens, les connaître en détail, et les gérer avec l&apos;exigence d&apos;un professionnel ancré dans le territoire. Pas un portefeuille à grossir — des partenariats à construire.
              </p>
              {/* Citation fondateur */}
              <blockquote style={{ borderLeft: "2px solid var(--color-gold, #B0764F)", paddingLeft: "20px", margin: "0" }}>
                <p style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(16px,1.8vw,20px)", fontWeight: 300, fontStyle: "italic", color: "var(--color-navy, #2B2620)", lineHeight: 1.7, marginBottom: "12px" }}>
                  &ldquo;Mon engagement est simple : optimiser vos revenus, protéger votre bien, et vous rendre compte de vos performances mois après mois — sans jargon et sans surprise.&rdquo;
                </p>
                <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(43,38,32,.4)" }}>
                  Le Fondateur, Marelle
                </p>
              </blockquote>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <div style={{ position: "relative" }}>
              <img
                src="/images/gallery/prop4.jpg"
                alt="Terrasse vue Riviera"
                style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
              />
              <div style={{ position: "absolute", top: "-10px", left: "-10px", width: "36px", height: "36px", borderTop: "1.5px solid var(--color-gold,#B0764F)", borderLeft: "1.5px solid var(--color-gold,#B0764F)" }} />
              <div style={{ position: "absolute", bottom: "-10px", right: "-10px", width: "36px", height: "36px", borderBottom: "1.5px solid var(--color-gold,#B0764F)", borderRight: "1.5px solid var(--color-gold,#B0764F)" }} />
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* ── ENGAGEMENTS ── */}
      <section style={{ background: "#fff", padding: "clamp(56px,7vw,88px) clamp(24px,4vw,52px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <RevealOnScroll>
            <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #B0764F)", marginBottom: "16px" }}>
              Nos engagements
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(28px,3.2vw,42px)", fontWeight: 300, color: "var(--color-navy, #2B2620)", lineHeight: 1.2, maxWidth: "520px", marginBottom: "40px" }}>
              Trois principes qui définissent<br />notre façon de travailler.
            </h2>
          </RevealOnScroll>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(32px,5vw,56px)" }}>
            {engagements.map((e, i) => (
              <RevealOnScroll key={i} delay={i * 0.12}>
                <div style={{ borderTop: "1px solid rgba(43,38,32,.1)", paddingTop: "28px" }}>
                  <span style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "3px", color: "var(--color-gold, #B0764F)" }}>
                    {e.num}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(18px,2vw,24px)", fontWeight: 400, color: "var(--color-navy, #2B2620)", margin: "14px 0 16px", lineHeight: 1.3 }}>
                    {e.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "13px", fontWeight: 300, color: "rgba(43,38,32,.6)", lineHeight: 1.75 }}>
                    {e.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Contact inline */}
          <RevealOnScroll delay={0.2}>
            <div style={{ marginTop: "64px", paddingTop: "48px", borderTop: "1px solid rgba(43,38,32,.07)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
              <p style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(18px,2vw,24px)", fontWeight: 300, fontStyle: "italic", color: "var(--color-navy, #2B2620)" }}>
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
