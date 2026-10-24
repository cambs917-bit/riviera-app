import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — Marelle Home",
  description: "Mentions légales de Marelle, conciergerie Airbnb sur la Côte d'Azur.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://marelle-home.fr" },
};

const sections = [
  {
    title: "Éditeur du site",
    content: (
      <>
        <strong style={{ color: "var(--color-navy, #2B2620)" }}>Marelle</strong>
        {" "}(nom commercial)<br />
        Exploitant : Camille BIONDA SLIMANI<br />
        Forme juridique : Entrepreneur individuel<br />
        SIREN : 106 204 621<br />
        SIRET (établissement principal) : 106 204 621 00010<br />
        Immatriculée au Registre National des Entreprises (RNE)<br />
        Code APE / NAF : 6832A — Administration d&apos;immeubles et autres biens immobiliers<br />
        Régime de TVA : Non assujettie à la TVA — article 293 B du CGI (franchise en base)<br />
        Adresse professionnelle : 27 avenue Jean Médecin, 06000 Nice, France<br />
        Directrice de la publication : Camille BIONDA SLIMANI<br />
        Email :{" "}
        <a href="mailto:contact@marelle-home.fr" style={{ color: "var(--color-gold, #B0764F)" }}>
          contact@marelle-home.fr
        </a><br />
        Téléphone : [à compléter]
      </>
    ),
  },
  {
    title: "Hébergement",
    content: (
      <>
        Ce site est hébergé par :<br /><br />
        <strong style={{ color: "var(--color-navy, #2B2620)" }}>Hostinger International Ltd</strong><br />
        LUMIEL BUILDING, 4e étage, 61 Lordou Vironos<br />
        6023 Larnaca — Chypre<br />
        Serveurs localisés en France (Paris, Union européenne).<br />
        Site web :{" "}
        <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-gold, #B0764F)" }}>
          hostinger.fr
        </a>
      </>
    ),
  },
  {
    title: "Propriété intellectuelle",
    content: (
      <>
        L&apos;ensemble des éléments constitutifs du site (textes, structure, logo, charte graphique) sont la propriété exclusive de Camille BIONDA SLIMANI, exploitant sous le nom commercial Marelle, et sont protégés par le droit d&apos;auteur (articles L. 111-1 et suivants du Code de la propriété intellectuelle). Toute reproduction, représentation, modification ou exploitation, même partielle, sans autorisation écrite préalable est strictement interdite et constitue une contrefaçon sanctionnée par les articles L. 335-2 et suivants du Code de la propriété intellectuelle.<br /><br />
        <strong style={{ color: "var(--color-navy, #2B2620)" }}>Crédits médias tiers</strong><br />
        Certaines vidéos et photographies utilisées à titre illustratif sur ce site sont issues des bibliothèques libres de droits{" "}
        <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-gold, #B0764F)" }}>
          Pexels
        </a>{" "}
        (Canva Pty Ltd, Australie) et{" "}
        <a href="https://mixkit.co" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-gold, #B0764F)" }}>
          Mixkit
        </a>{" "}
        (Envato Pty Ltd, Australie), sous licences autorisant un usage commercial sans attribution obligatoire. Ces contenus restent la propriété de leurs auteurs respectifs.
      </>
    ),
  },
  {
    title: "Liens hypertextes",
    content: (
      <>
        Ce site peut contenir des liens vers des sites tiers. Marelle n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leur disponibilité ou leurs pratiques en matière de protection des données personnelles. La mise en place d&apos;un lien hypertexte vers le présent site requiert l&apos;autorisation préalable et écrite de Marelle.
      </>
    ),
  },
  {
    title: "Responsabilité",
    content: (
      <>
        Les informations publiées sur ce site sont fournies à titre purement indicatif et ne constituent pas un conseil juridique, fiscal ou financier. Marelle s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour régulière des informations diffusées, mais ne saurait garantir leur exhaustivité ni leur parfaite actualité au regard de l&apos;évolution de la réglementation.<br /><br />
        Marelle ne peut être tenu responsable des dommages directs ou indirects résultant de l&apos;accès au site, de son utilisation ou de l&apos;impossibilité d&apos;y accéder, ni des dommages résultant de l&apos;utilisation ou de la confiance accordée aux informations qui y figurent.
      </>
    ),
  },
  {
    title: "Médiation de la consommation",
    content: (
      <>
        Conformément aux articles L. 612-1, L. 616-1 et R. 616-1 du Code de la consommation, Marelle a désigné le médiateur suivant pour le règlement amiable des litiges de consommation :<br /><br />
        <strong style={{ color: "var(--color-navy, #2B2620)" }}>GIE MEDIMMOCONSO — Médiateur de la consommation</strong><br />
        <a href="https://www.medimmoconso.fr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-gold, #B0764F)" }}>
          www.medimmoconso.fr
        </a><br /><br />
        Tout consommateur peut saisir gratuitement ce médiateur en cas de litige non résolu à l&apos;amiable avec Marelle, dans un délai d&apos;un an à compter de sa réclamation écrite adressée au prestataire.
      </>
    ),
  },
  {
    title: "Données personnelles (RGPD)",
    content: (
      <>
        Le traitement des données personnelles collectées via ce site est régi par le Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 (RGPD) et la loi n° 78-17 du 6 janvier 1978 modifiée relative à l&apos;informatique, aux fichiers et aux libertés. Pour toute information sur la collecte, le traitement et vos droits, consultez notre{" "}
        <Link href="/confidentialite" style={{ color: "var(--color-gold, #B0764F)" }}>
          politique de confidentialité
        </Link>.
      </>
    ),
  },
];

export default function MentionsLegales() {
  return (
    <main style={{ background: "var(--color-cream, #F7F3EC)" }}>

      {/* ── Mini-hero ── */}
      <section style={{ background: "var(--color-navy, #2B2620)", padding: "clamp(100px,12vw,140px) clamp(24px,4vw,52px) clamp(52px,7vw,72px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #B0764F)", marginBottom: "20px" }}>
            Informations légales
          </p>
          <h1 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(32px,4vw,56px)", fontWeight: 300, fontStyle: "italic", color: "#fff", lineHeight: 1.1 }}>
            Mentions légales
          </h1>
          <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(176,118,79,.5)", marginTop: "16px" }}>
            En vigueur au 11 juin 2026
          </p>
        </div>
      </section>

      {/* ── Contenu ── */}
      <section style={{ padding: "clamp(56px,8vw,88px) clamp(24px,4vw,52px)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px" }}>

          {sections.map(({ title, content }) => (
            <div key={title}>
              <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #B0764F)", marginBottom: "16px" }}>
                {title}
              </p>
              <div style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "14px", fontWeight: 300, color: "rgba(43,38,32,.65)", lineHeight: 1.85 }}>
                {content}
              </div>
            </div>
          ))}

          {/* Nav bas */}
          <div style={{ paddingTop: "32px", borderTop: "1px solid rgba(43,38,32,.1)", display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <Link href="/" style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "var(--color-gold, #B0764F)", textDecoration: "none" }}>
              ← Accueil
            </Link>
            <Link href="/confidentialite" style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(43,38,32,.35)", textDecoration: "none" }}>
              Confidentialité
            </Link>
            <Link href="/cgv" style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(43,38,32,.35)", textDecoration: "none" }}>
              CGV
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
