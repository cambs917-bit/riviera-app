import HeroVideo from "@/components/HeroVideo";
import RevealOnScroll from "@/components/RevealOnScroll";
import TypeWriter from "@/components/TypeWriter";
import Link from "next/link";

const commentCaMarcheSteps = [
  { n: "01", title: "Premier échange", desc: "Échangeons sur votre projet, vos attentes et vos objectifs de rentabilité." },
  { n: "02", title: "Analyse du bien et estimation", desc: "Visite de votre propriété, photos professionnelles et estimation de vos revenus locatifs." },
  { n: "03", title: "Création de l'annonce Airbnb", desc: "Rédaction optimisée, mise en ligne sur les plateformes et stratégie tarifaire personnalisée." },
  { n: "04", title: "Gestion complète des séjours", desc: "Réservations, accueil, ménage, maintenance — on s'occupe de tout, vous percevez vos revenus." },
];

const proprioServices = [
  { n: "01", title: "Création & optimisation de l'annonce", desc: "Photos professionnelles, rédaction soignée et optimisation SEO pour maximiser votre visibilité sur Airbnb." },
  { n: "02", title: "Gestion des réservations", desc: "Traitement des demandes et coordination du planning pour un taux d'occupation optimal toute l'année." },
  { n: "03", title: "Communication voyageurs 24/7", desc: "Notre équipe répond à tous les messages de vos voyageurs, 7j/7, 24h/24, sans interruption." },
  { n: "04", title: "Optimisation dynamique des prix", desc: "Stratégie tarifaire intelligente basée sur la saisonnalité, les événements locaux et la demande." },
  { n: "05", title: "Ménage & gestion du linge", desc: "Nettoyage professionnel entre chaque séjour, fourniture et entretien du linge de qualité." },
  { n: "06", title: "Check-in / Check-out", desc: "Accueil personnalisé et état des lieux entrée/sortie pour votre totale tranquillité." },
  { n: "07", title: "Maintenance & assistance", desc: "Équipe de plombiers, serruriers et électriciens disponibles rapidement pour toute intervention." },
];

const pourquoiItems = [
  { n: "01", title: "Accompagnement personnalisé", desc: "Un interlocuteur dédié qui connaît votre bien et s'adapte à vos besoins. Pas de gestion industrielle." },
  { n: "02", title: "Basés sur la Côte d'Azur", desc: "Nous vivons ici, nous connaissons le terrain. Une équipe locale, réactive et disponible." },
  { n: "03", title: "Aucun frais fixe", desc: "Vous ne payez que sur les revenus générés. Pas de forfait, pas d'engagement — résiliation libre." },
];


const confortItems = [
  { title: "Kits d'accueil soignés", desc: "Café, thé, produits de toilette Rituals et snacks artisanaux sélectionnés.", tag: "Option" },
  { title: "Petit-déjeuner à l'arrivée", desc: "Panier de produits frais : viennoiseries, confitures, fruits et jus pressés.", tag: "Option" },
  { title: "Réapprovisionnement", desc: "Renouvellement des produits essentiels selon la durée et vos préférences.", tag: "Option" },
  { title: "Ménage pour longs séjours", desc: "Entretien quotidien ou hebdomadaire pour les séjours de plus de 5 nuits.", tag: "Option" },
  { title: "Carnet de découvertes", desc: "Un guide personnalisé avec nos meilleures adresses : restaurants, sorties, excursions et lieux incontournables de la Côte d'Azur.", tag: "" },
];

const voyageursPreview = [
  { title: "Transfert aéroport", desc: "Chauffeur privé pour votre arrivée à Nice Côte d'Azur." },
  { title: "Excursions en bateau", desc: "Sorties en mer vers les îles de Lérins, Monaco, Saint-Tropez." },
  { title: "Sport & bien-être", desc: "Cours privés de yoga, pass salle de sport et activités exclusives." },
  { title: "Réseaux partenaires", desc: "Accès à notre réseau exclusif de prestataires locaux sélectionnés sur la Côte d'Azur." },
];

const galleryImages = [
  "/images/gallery/prop1.jpg",
  "/images/gallery/prop2.jpg",
  "/images/gallery/prop3.jpg",
  "/images/gallery/prop4.jpg",
];

export default function HomePage() {
  return (
    <>
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
                <TypeWriter sentences={["Nous valorisons votre bien immobilier.", "Nous maximisons vos revenus locatifs.", "Nous offrons une expérience mémorable à vos voyageurs.", "Nous gérons tout, de A à Z."]} />
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p style={{ marginTop: "8px", fontSize: "clamp(16px,2vw,20px)", color: "var(--color-muted)", fontFamily: "var(--sans)", fontWeight: 300, maxWidth: "600px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.8 }}>
              Une équipe locale passionnée par la Côte d&apos;Azur, dédiée à votre propriété et à vos voyageurs.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3}>
            <div style={{ marginTop: "48px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/a-propos" className="pill pill-gold">À propos</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══ 3. COMMENT ÇA MARCHE ═══ */}
      <section id="comment-ca-marche" className="section" style={{ background: "#fff" }}>
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

      {/* ═══ 4. PROPRIÉTAIRES — GESTION LOCATIVE ═══ */}
      <section id="proprio" className="section warm">
        <div className="wrap">
          <RevealOnScroll>
            <span className="eb">Gestion locative</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="ed-text" style={{ textAlign: "left", maxWidth: "600px" }}>
              Chaque aspect de votre location, maîtrisé.
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

      {/* ═══ 5. POURQUOI NOUS CHOISIR ═══ */}
      <section id="pourquoi" className="section" style={{ background: "#fff" }}>
        <div className="wrap">
          <div className="pourquoi-top">
            <div className="pourquoi-text">
              <RevealOnScroll>
                <span className="eb" style={{ color: "rgba(0,0,0,.25)" }}>Pourquoi nous choisir</span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h2 className="ed-text" style={{ textAlign: "left", maxWidth: "520px" }}>
                  Une conciergerie locale et transparente.
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
                  <div className="pourquoi-stat-num">+31<em>%</em></div>
                  <div className="pourquoi-stat-label">Revenus supplémentaires</div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
          <RevealOnScroll delay={0.3}>
            <div className="why-grid" style={{ marginTop: "64px" }}>
              {pourquoiItems.map((item) => (
                <div key={item.n} className="why-item">
                  <div className="why-n">{item.n}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══ 7. PRESTATIONS HÔTELIÈRES ═══ */}
      <section id="confort" className="section" style={{ background: "#fff" }}>
        <div className="wrap">
          <div className="confort-layout">
            <RevealOnScroll>
              <div className="confort-photo">
                <img src="/images/pool.jpg" alt="Chambre appartement prestige" loading="lazy" />
                <div className="confort-tag">
                  <span className="pill" style={{ background: "rgba(249,248,246,.9)", fontSize: "11px" }}>Services in-stay</span>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div>
                <span className="eb">Services in-stay</span>
                <h2 className="ed-text" style={{ textAlign: "left", fontSize: "clamp(22px,3vw,38px)" }}>
                  Des services soignés dans chaque logement
                </h2>
                <ul className="c-list">
                  {confortItems.map((item, i) => (
                    <li key={i}>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ 8. EXPÉRIENCE VOYAGEURS (aperçu) ═══ */}
      <section id="voyageurs" className="section warm">
        <div className="wrap">
          <RevealOnScroll>
            <span className="eb">Expérience voyageurs</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="ed-text" style={{ textAlign: "left", maxWidth: "580px" }}>
              Une expérience sur mesure pour vos voyageurs
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <div className="voy-grid">
              {voyageursPreview.map((svc, i) => (
                <div key={i} className="voy-item">
                  <span className="voy-ico" />
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3}>
            <div style={{ marginTop: "40px" }}>
              <Link href="/experience-voyageurs" className="pill">Découvrir tous nos services voyageurs</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══ 9. PORTFOLIO ═══ */}
      <section className="section cream">
        <div className="wrap" style={{ textAlign: "center" }}>
          <RevealOnScroll>
            <span className="eb">Portfolio</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <div className="gallery-grid">
              {galleryImages.map((src, i) => (
                <div key={i} className="gallery-cell">
                  <img src={src} alt={`Propriété ${i + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══ 10. FINAL CONVERSION CTA ═══ */}
      <section id="cta-final" style={{ background: "var(--color-cream)", padding: "clamp(72px,9vw,110px) clamp(20px,4vw,52px)", textAlign: "center" }}>
        <div className="wrap" style={{ maxWidth: "640px" }}>

          {/* Eyebrow — Josefin Sans thin, très espacé */}
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

          {/* Subtitle avec lignes horizontales */}
          <RevealOnScroll delay={0.15}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "44px" }}>
              <div style={{ height: "1px", background: "rgba(12,31,53,.2)", flex: 1 }} />
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
              <div style={{ height: "1px", background: "rgba(12,31,53,.2)", flex: 1 }} />
            </div>
          </RevealOnScroll>

          {/* CTA button — rectangle navy border */}
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
