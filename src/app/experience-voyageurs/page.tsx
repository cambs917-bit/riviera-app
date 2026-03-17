import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

const services = [
  {
    num: "01",
    title: "Transfert aéroport aller-retour",
    desc: "Chauffeur privé pour votre arrivée et votre départ depuis l'aéroport Nice Côte d'Azur. Ponctualité garantie, véhicule confortable.",
    badge: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19.5 2.5S18 2 16.5 3.5L13 7 4.8 5.2l-1.4 1.4L9 11l-5 3H2l-1 1 3 2 2 3 1-1v-2l3-5 4.6 5.4z"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Location de voiture",
    desc: "Berlines, cabriolets ou SUV — profitez des routes de la Côte d'Azur à votre rythme. Livraison possible au logement.",
    badge: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v9a2 2 0 01-2 2h-2"/>
        <circle cx="7" cy="17" r="2"/>
        <path d="M9 17h6"/>
        <circle cx="17" cy="17" r="2"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Location bateau & jet ski",
    desc: "Explorez la Méditerranée, rejoignez Monaco ou les îles de Lérins. Embarcations disponibles avec ou sans skipper.",
    badge: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20a2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1"/>
        <path d="M4 18l-1-5h18l-2 5"/>
        <path d="M12 2v9l-4 2"/>
        <path d="M12 13l4-2"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Consigne à bagages",
    desc: "Déposez vos bagages en toute sécurité avant votre check-in ou après votre check-out. Service disponible 7j/7.",
    badge: "−20 %",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    num: "05",
    title: "Pass salle de sport haut de gamme",
    desc: "Accès à une salle premium avec équipements de dernière génération et cours collectifs inclus (yoga, pilates, cardio).",
    badge: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 7v10M6 7v10M3 10h18M3 14h18"/>
        <circle cx="3" cy="10" r="1.5"/>
        <circle cx="3" cy="14" r="1.5"/>
        <circle cx="21" cy="10" r="1.5"/>
        <circle cx="21" cy="14" r="1.5"/>
      </svg>
    ),
  },
  {
    num: "06",
    title: "Cours de yoga privé à domicile",
    desc: "Séance privée avec un professeur certifié, au moment qui vous convient.",
    badge: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="4" r="1.5"/>
        <path d="M12 7v5l-3 3M12 12l3 3M6 15c1.5-1 3-1.5 6-1.5S16.5 14 18 15"/>
        <path d="M5 20c2-2 4-3 7-3s5 1 7 3"/>
      </svg>
    ),
  },
  {
    num: "07",
    title: "Coupon coffee shop partenaire",
    desc: "Profitez d'une remise exclusive dans notre coffee shop partenaire sélectionné pour la qualité de ses produits.",
    badge: "−10 %",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 010 8h-1"/>
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/>
        <line x1="10" y1="1" x2="10" y2="4"/>
        <line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
  },
  {
    num: "08",
    title: "Petit-déjeuner livré chaque matin",
    desc: "Viennoiseries fraîches, fruits, jus pressés et café de spécialité livrés à l'heure de votre choix, directement au logement.",
    badge: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z"/>
      </svg>
    ),
  },
  {
    num: "09",
    title: "Ménage quotidien",
    desc: "Service de nettoyage complet chaque matin pendant votre séjour — linge changé, logement impeccable à votre retour.",
    badge: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18"/>
        <path d="M5 21V7l7-4 7 4v14"/>
        <path d="M9 21v-6h6v6"/>
      </svg>
    ),
  },
  {
    num: "10",
    title: "Recommandations sur mesure",
    desc: "Sélection personnalisée de restaurants, adresses confidentielles, incontournables locaux et expériences authentiques sur la Côte d'Azur.",
    badge: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="3"/>
        <path d="M12 2a8 8 0 018 8c0 5.4-8 14-8 14S4 15.4 4 10a8 8 0 018-8z"/>
      </svg>
    ),
  },
];

export default function ExperienceVoyageursPage() {
  return (
    <main style={{ background: "var(--color-cream, #F5F0E8)" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "70vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <img
          src="/images/gallery/prop4.jpg"
          alt="Expérience voyageurs Riviera"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,31,53,.88) 0%, rgba(12,31,53,.3) 60%, transparent 100%)" }} />
        <div style={{ position: "relative", width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "clamp(80px,10vw,120px) clamp(24px,4vw,52px) clamp(56px,7vw,80px)" }}>
          <RevealOnScroll>
            <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "rgba(201,169,110,.9)", marginBottom: "20px" }}>
              Expérience voyageurs
            </p>
            <h1 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(36px,5vw,66px)", fontWeight: 300, color: "#fff", lineHeight: 1.1, maxWidth: "680px" }}>
              Des services pensés<br />
              <em style={{ fontStyle: "italic" }}>pour chaque séjour.</em>
            </h1>
            <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "clamp(13px,1.4vw,15px)", fontWeight: 300, color: "rgba(255,255,255,.55)", marginTop: "24px", maxWidth: "500px", lineHeight: 1.7 }}>
              De l&apos;arrivée au départ, nous organisons chaque détail pour que votre séjour sur la Côte d&apos;Azur soit inoubliable.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: "clamp(72px,9vw,110px) clamp(24px,4vw,52px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <RevealOnScroll>
            <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #C9A96E)", marginBottom: "16px" }}>
              Nos services
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(28px,3.2vw,42px)", fontWeight: 300, color: "var(--color-navy, #0C1F35)", lineHeight: 1.2, maxWidth: "560px", marginBottom: "56px" }}>
              Tout ce dont vous avez besoin,<br />disponible sur demande.
            </h2>
          </RevealOnScroll>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0" }}>
            {services.map((svc, i) => (
              <RevealOnScroll key={i} delay={(i % 2) * 0.1}>
                <div style={{
                  display: "flex",
                  gap: "24px",
                  padding: "clamp(28px,3.5vw,40px) clamp(20px,3vw,36px)",
                  borderBottom: "1px solid rgba(12,31,53,.07)",
                  borderRight: i % 2 === 0 ? "1px solid rgba(12,31,53,.07)" : "none",
                  alignItems: "flex-start",
                }}>
                  {/* Icon */}
                  <div style={{ flexShrink: 0, width: "48px", height: "48px", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-gold, #C9A96E)" }}>
                    {svc.icon}
                  </div>
                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                      <span style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "8px", fontWeight: 300, letterSpacing: "2px", color: "rgba(12,31,53,.3)" }}>
                        {svc.num}
                      </span>
                      <h3 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(17px,1.8vw,22px)", fontWeight: 400, color: "var(--color-navy, #0C1F35)", lineHeight: 1.2 }}>
                        {svc.title}
                      </h3>
                      {svc.badge && (
                        <span style={{ flexShrink: 0, fontFamily: "var(--font-josefin, sans-serif)", fontSize: "8.5px", fontWeight: 500, letterSpacing: "1.5px", color: "#fff", background: "var(--color-gold, #C9A96E)", padding: "3px 9px" }}>
                          {svc.badge}
                        </span>
                      )}
                    </div>
                    <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "13px", fontWeight: 300, color: "rgba(12,31,53,.6)", lineHeight: 1.75 }}>
                      {svc.desc}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE BANDE ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", height: "clamp(200px,25vw,340px)", overflow: "hidden" }}>
        <img src="/images/gallery/prop2.jpg" alt="Chambre" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
        <img src="/images/gallery/prop3.jpg" alt="Cuisine" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

      {/* ── CTA ── */}
      <section style={{ background: "#fff", padding: "clamp(64px,9vw,96px) clamp(24px,4vw,52px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "32px" }}>
          <div>
            <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #C9A96E)", marginBottom: "16px" }}>
              Organiser votre séjour
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(24px,3vw,38px)", fontWeight: 300, color: "var(--color-navy, #0C1F35)", lineHeight: 1.25, maxWidth: "480px" }}>
              Une question sur nos services ?<br />
              <em style={{ fontStyle: "italic" }}>Nous sommes disponibles 7j/7.</em>
            </h2>
          </div>
          <Link href="/contact" className="cta-btn-navy" style={{ whiteSpace: "nowrap" }}>
            Nous contacter <span>→</span>
          </Link>
        </div>
      </section>

    </main>
  );
}
