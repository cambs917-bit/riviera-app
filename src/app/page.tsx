import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Marelle Home — Conciergerie Airbnb & Gestion Locative Côte d'Azur" },
  description:
    "Marelle Home, conciergerie Airbnb sur la Côte d'Azur. Gestion complète de votre location saisonnière à Nice, Cannes, Antibes, Saint-Tropez. Commission 20 %, sans frais fixes.",
  alternates: {
    canonical: "https://marelle-home.fr",
  },
};

import HeroVideo from "@/components/HeroVideo";
import RevealOnScroll from "@/components/RevealOnScroll";
import TypeWriter from "@/components/TypeWriter";
import Link from "next/link";
import ScrollVelocity from "@/components/ScrollVelocity";

const commentCaMarcheSteps = [
  { n: "01", title: "Premier échange", desc: "Un premier échange pour découvrir votre bien et définir ensemble vos objectifs." },
  { n: "02", title: "Analyse & estimation", desc: "Visite sur place, photographies professionnelles et projection personnalisée de vos revenus." },
  { n: "03", title: "Mise en valeur & diffusion", desc: "Annonce optimisée, diffusion multi-plateformes et stratégie tarifaire sur mesure." },
  { n: "04", title: "Revenus & sérénité", desc: "Vos revenus, versés chaque mois. Notre équipe veille sur votre bien, jour après jour." },
];

const proprioServices = [
  { n: "01", title: "Création & optimisation de l'annonce", desc: "Photos professionnelles, rédaction soignée et présence optimisée sur toutes les plateformes." },
  { n: "02", title: "Gestion des réservations", desc: "Coordination complète du planning pour un taux d'occupation optimisé, toute l'année." },
  { n: "03", title: "Communication voyageurs 24/7", desc: "Réponse rapide et soignée à chaque message de vos voyageurs, à toute heure." },
  { n: "04", title: "Optimisation dynamique des prix", desc: "Tarification ajustée en temps réel selon la saisonnalité, les événements et la demande." },
  { n: "05", title: "Coordination du ménage", desc: "Organisation du nettoyage professionnel et du linge entre chaque séjour — ces frais sont facturés directement au voyageur via la plateforme, sans impact sur vos revenus." },
  { n: "06", title: "Accueil & maintenance", desc: "Accueil personnalisé à chaque arrivée et intervention rapide pour toute urgence ou maintenance." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Quel est votre taux de commission ?", acceptedAnswer: { "@type": "Answer", text: "Notre commission est de 20 % des revenus locatifs perçus, hors frais de ménage facturés aux voyageurs et hors taxes de séjour. Aucun frais fixe, aucun forfait, aucun frais de démarrage." } },
    { "@type": "Question", name: "Y a-t-il des frais d'inscription ou de mise en service ?", acceptedAnswer: { "@type": "Answer", text: "Non. Vous ne payez rien avant de percevoir vos premiers revenus. Nous prenons en charge la création de l'annonce et les photos professionnelles sans supplément." } },
    { "@type": "Question", name: "Puis-je bloquer des dates pour mon usage personnel ?", acceptedAnswer: { "@type": "Answer", text: "Absolument. Votre calendrier vous appartient. Vous pouvez bloquer des dates à tout moment, sans justification et sans limite." } },
    { "@type": "Question", name: "Sur quelles plateformes publiez-vous mon annonce ?", acceptedAnswer: { "@type": "Answer", text: "Airbnb, Booking.com, Vrbo et Abritel — avec une stratégie de visibilité et de tarification adaptée à chaque plateforme." } },
    { "@type": "Question", name: "Que se passe-t-il en cas de dégât causé par un voyageur ?", acceptedAnswer: { "@type": "Answer", text: "Nous assurons le suivi complet du dossier auprès des plateformes et de leurs garanties. Vous êtes informé à chaque étape." } },
    { "@type": "Question", name: "Comment suivre les performances de mon bien ?", acceptedAnswer: { "@type": "Answer", text: "Vous recevez chaque mois un reporting détaillé : réservations, revenus encaissés, taux d'occupation et dépenses. Transparence totale." } },
    { "@type": "Question", name: "Quel est le préavis pour arrêter la collaboration ?", acceptedAnswer: { "@type": "Answer", text: "Aucun engagement de durée minimale. Vous pouvez mettre fin à la collaboration avec un préavis de 30 jours, sans pénalité. Les réservations déjà confirmées sont honorées jusqu'à leur terme." } },
    { "@type": "Question", name: "Proposez-vous un service de photographie professionnelle ?", acceptedAnswer: { "@type": "Answer", text: "Oui, inclus dans notre commission. Nous organisons une séance photo professionnelle avant la mise en ligne de votre annonce." } }
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ═══ 1. HERO ═══ */}
      <HeroVideo />

      {/* ═══ 2. INTRO ═══ */}
      <section id="intro" className="cream">
        <div className="intro-inner">
          <RevealOnScroll>
            <span className="eb eb-gold" style={{ letterSpacing: "5px" }}>Conciergerie sur mesure</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <div className="intro-type-wrap">
              <p className="intro-type">
                <TypeWriter sentences={["Nous valorisons votre bien immobilier.", "Nous optimisons vos revenus locatifs.", "Nous offrons une expérience mémorable à vos voyageurs.", "Nous prenons soin de chaque détail."]} />
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p style={{ marginTop: "8px", fontSize: "clamp(16px,2vw,20px)", color: "var(--color-muted)", fontFamily: "var(--sans)", fontWeight: 300, maxWidth: "600px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.8 }}>
              Un bien d&apos;exception mérite une gestion à sa hauteur.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3}>
            <div style={{ marginTop: "48px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/a-propos" className="pill pill-gold">À propos</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══ COMMENT ÇA MARCHE ═══ */}
      <section id="comment-ca-marche" className="section warm">
        <div className="wrap">
          <RevealOnScroll>
            <span className="eb eb-gold">Comment ça marche</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="ed-text" style={{ textAlign: "left", maxWidth: "600px" }}>
              De la première prise de contact à vos premiers revenus.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <div className="proprio-grid">
              {commentCaMarcheSteps.map((step) => (
                <div key={step.n} className="pg-item">
                  <span className="pg-num">{step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══ PLATEFORMES ═══ */}
      <section style={{ background: "#fff", borderTop: "1px solid rgba(43,38,32,.06)", borderBottom: "1px solid rgba(43,38,32,.06)", padding: "clamp(18px,2.5vw,28px) 0", overflow: "hidden" }}>
        <ScrollVelocity
          texts={["Airbnb  ·  Booking.com  ·  Vrbo  ·  Abritel  ·  "]}
          velocity={50}
          className=""
          parallaxStyle={{ width: "100%" }}
          scrollerStyle={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "clamp(11px,1.2vw,13px)", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "rgba(43,38,32,.35)" }}
        />
      </section>

      {/* ═══ DRONE VIDEO BREAK ═══ */}
      <section style={{ position: "relative", height: "85vh", overflow: "hidden" }}>
        <video
          autoPlay muted loop playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/videos/hero-luxury.mp4" type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.55) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "16px", textAlign: "center", padding: "0 24px" }}>
          <span style={{ fontFamily: "var(--sans)", fontSize: "11px", fontWeight: 500, letterSpacing: "4px", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>Côte d&apos;Azur</span>
          <h2 style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(36px, 5.5vw, 76px)", color: "#fff", lineHeight: 1.1, maxWidth: "720px" }}>
            Votre bien, révélé dans toute sa valeur.
          </h2>
        </div>
      </section>

      {/* ═══ GESTION LOCATIVE ═══ */}
      <section id="proprio" className="section warm">
        <div className="wrap">
          <RevealOnScroll>
            <span className="eb">Gestion locative</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="ed-text" style={{ textAlign: "left", maxWidth: "600px" }}>
              Tout ce que nous gérons pour vous, au quotidien.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <div className="proprio-grid">
              {proprioServices.map((svc) => (
                <div key={svc.n} className="pg-item">
                  <span className="pg-num">{svc.n}</span>
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══ ENGAGEMENT LOCAL ═══ */}
      <section id="pourquoi" className="section" style={{ background: "#fff" }}>
        <div className="wrap">
          <div className="pourquoi-top">
            <div className="pourquoi-text">
              <RevealOnScroll>
                <span className="eb" style={{ color: "rgba(0,0,0,.25)" }}>Basés sur la Côte d&apos;Azur</span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h2 className="ed-text" style={{ textAlign: "left", maxWidth: "520px" }}>
                  Une expertise locale au service de votre bien.
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.3}>
                <div style={{ marginTop: "48px" }}>
                  <Link href="/estimation" className="pill pill-gold">Estimer mes revenus locatifs</Link>
                </div>
              </RevealOnScroll>
            </div>
            <RevealOnScroll delay={0.2}>
              <div className="pourquoi-frame">
                <img src="/images/hero.jpg" alt="Vue Côte d'Azur" loading="lazy" />
                <div className="pourquoi-frame-tl" />
                <div className="pourquoi-frame-br" />
                <div className="pourquoi-stat">
                  <div className="pourquoi-stat-num">+17<em>%</em></div>
                  <div className="pourquoi-stat-label">de revenus nets en plus (estimé, selon simulation)</div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="section" style={{ background: "#fff" }}>
        <div className="wrap" style={{ maxWidth: "800px" }}>
          <RevealOnScroll>
            <span className="eb eb-gold">Questions fréquentes</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="ed-text" style={{ textAlign: "left", maxWidth: "540px" }}>
              Tout ce que vous souhaitez savoir avant de nous confier votre bien.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <div style={{ marginTop: "48px", display: "flex", flexDirection: "column" }}>
              {[
                { q: "Quel est votre taux de commission ?", a: "Notre commission est de 20 % des revenus locatifs perçus, hors frais de ménage facturés aux voyageurs et hors taxes de séjour. Aucun frais fixe, aucun forfait, aucun frais de démarrage." },
                { q: "Y a-t-il des frais d'inscription ou de mise en service ?", a: "Non. Vous ne payez rien avant de percevoir vos premiers revenus. Nous prenons en charge la création de l'annonce et les photos professionnelles sans supplément." },
                { q: "Puis-je bloquer des dates pour mon usage personnel ?", a: "Absolument. Votre calendrier vous appartient. Vous pouvez bloquer des dates à tout moment, sans justification et sans limite." },
                { q: "Sur quelles plateformes publiez-vous mon annonce ?", a: "Airbnb, Booking.com, Vrbo et Abritel — avec une stratégie de visibilité et de tarification adaptée à chaque plateforme." },
                { q: "Que se passe-t-il en cas de dégât causé par un voyageur ?", a: "Nous assurons le suivi complet du dossier auprès des plateformes et de leurs garanties. Vous êtes informé à chaque étape." },
                { q: "Comment suivre les performances de mon bien ?", a: "Vous recevez chaque mois un reporting détaillé : réservations, revenus encaissés, taux d'occupation et dépenses. Transparence totale." },
                { q: "Quel est le préavis pour arrêter la collaboration ?", a: "Aucun engagement de durée minimale. Vous pouvez mettre fin à la collaboration avec un préavis de 30 jours, sans pénalité. Les réservations déjà confirmées sont honorées jusqu'à leur terme." },
                { q: "Proposez-vous un service de photographie professionnelle ?", a: "Oui, inclus dans notre commission. Nous organisons une séance photo professionnelle avant la mise en ligne de votre annonce." },
              ].map((item, i) => (
                <details key={i} style={{ borderBottom: "1px solid rgba(43,38,32,.08)", padding: "0" }}>
                  <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 0", cursor: "pointer", listStyle: "none", fontFamily: "var(--serif)", fontSize: "clamp(15px,1.6vw,19px)", fontWeight: 400, color: "var(--color-navy, #2B2620)", lineHeight: 1.3 }}>
                    {item.q}
                    <span style={{ fontFamily: "var(--sans)", fontSize: "20px", fontWeight: 200, color: "var(--color-gold, #B0764F)", flexShrink: 0, marginLeft: "16px" }}>+</span>
                  </summary>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "13.5px", fontWeight: 300, color: "rgba(43,38,32,.6)", lineHeight: 1.8, paddingBottom: "22px", maxWidth: "620px" }}>
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══ PARTENAIRE LIFESTYLE — NEROLI ═══ */}
      <section className="sister-banner">
        <div className="sister-inner">
          <RevealOnScroll>
            <div>
              <span className="sister-eb">Notre partenaire lifestyle</span>
              <h2>
                Au-delà du séjour, <em>l&apos;art de vivre la Côte d&apos;Azur</em>.
              </h2>
              <p>
                Neroli est notre partenaire dédié à la conciergerie lifestyle et aux services de luxe sur la Côte d&apos;Azur : voitures d&apos;exception, yachts, jets privés et expériences sur-mesure — pour prolonger chaque séjour de vos voyageurs.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <div className="sister-cta-col">
              <div className="sister-monogram">
                <span className="sister-monogram-badge">N</span>
                <span className="sister-monogram-txt">NEROLI<br />Conciergerie &amp; services de luxe</span>
              </div>
              <a href="https://neroli-services.fr" target="_blank" rel="noopener noreferrer" className="sister-cta" aria-label="Découvrir Neroli (nouvelle fenêtre)">
                Découvrir Neroli
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══ 9. FINAL CONVERSION CTA ═══ */}
      <section id="cta-final" style={{ background: "var(--color-cream)", padding: "clamp(72px,9vw,110px) clamp(20px,4vw,52px)", textAlign: "center" }}>
        <div className="wrap" style={{ maxWidth: "640px" }}>
          <RevealOnScroll>
            <h2 style={{
              fontFamily: "var(--font-josefin), sans-serif",
              fontSize: "clamp(20px,2.8vw,38px)",
              fontWeight: 100,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-navy)",
              marginBottom: "36px",
              lineHeight: 1,
            }}>
              Nous joindre
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "44px" }}>
              <div style={{ height: "1px", background: "rgba(43,38,32,.2)", flex: 1 }} />
              <p style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(14px,1.5vw,20px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--color-navy)",
                lineHeight: 1.5,
                flex: "0 0 auto",
                maxWidth: "420px",
              }}>
                Confiez votre bien, nous faisons le reste.
              </p>
              <div style={{ height: "1px", background: "rgba(43,38,32,.2)", flex: 1 }} />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3}>
            <Link href="/contact" className="cta-btn-navy">
              Prendre contact <span>→</span>
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
