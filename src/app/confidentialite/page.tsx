import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Marelle Home",
  description: "Politique de confidentialité et traitement des données personnelles de Marelle.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://marelle-home.fr" },
};

const s = { color: "var(--color-navy, #2B2620)" } as const;
const g = { color: "var(--color-gold, #B0764F)" } as const;

const sections = [
  /* ── 1 ── */
  {
    title: "Responsable du traitement",
    content: (
      <>
        <strong style={s}>Camille BIONDA SLIMANI</strong><br />
        Entrepreneur individuel — nom commercial : Marelle<br />
        SIREN : 106 204 621<br />
        Adresse : 27 avenue Jean Médecin, 06000 Nice, France<br />
        Email :{" "}
        <a href="mailto:contact@marelle-home.fr" style={g}>
          contact@marelle-home.fr
        </a><br /><br />
        Pour toute demande relative à vos données personnelles, adressez un courrier à l&apos;adresse ci-dessus
        ou un email en précisant « RGPD » dans l&apos;objet.
      </>
    ),
  },

  /* ── 2 ── */
  {
    title: "Données collectées et finalités",
    content: (
      <>
        <strong style={s}>Formulaire de contact</strong><br />
        Données : prénom, nom, adresse email, numéro de téléphone (optionnel), objet de la demande et message.<br />
        Finalité : traiter votre demande de renseignements ou de prestation de gestion locative.<br />
        Caractère obligatoire : la fourniture d&apos;une adresse email valide et d&apos;un message est nécessaire pour traiter votre demande. Sans ces informations, il nous est impossible de vous répondre. Le numéro de téléphone est facultatif (Art. 13.2.e du RGPD).<br /><br />

        <strong style={s}>Simulateur de revenus</strong><br />
        Le simulateur fonctionne entièrement côté navigateur. Aucune donnée personnelle identifiante n&apos;est transmise ni stockée côté serveur lors de l&apos;utilisation du simulateur.<br /><br />

        <strong style={s}>Navigation sur le site (logs techniques)</strong><br />
        Données : adresse IP, navigateur, pages visitées, horodatage — collectés automatiquement par
        l&apos;hébergeur (serveur, journaux du reverse proxy) à des fins de sécurité et de maintenance technique.<br /><br />

        <strong style={s}>Vidéos décoratives</strong><br />
        Les vidéos affichées sur le site sont auto-hébergées sur notre serveur (VPS Hostinger, France). Aucune adresse IP n&apos;est transmise à un prestataire tiers lors de leur lecture.
      </>
    ),
  },

  /* ── 3 ── */
  {
    title: "Bases légales des traitements",
    content: (
      <>
        <strong style={s}>Formulaire de contact</strong> — Article 6.1.b du RGPD
        (mesures précontractuelles prises à la demande de la personne concernée). Vous nous contactez
        pour obtenir des informations sur une prestation : le traitement de votre demande est nécessaire
        à cette relation précontractuelle.<br /><br />

        <strong style={s}>Logs techniques / sécurité</strong> — Article 6.1.f du RGPD
        (intérêt légitime). L&apos;intérêt légitime poursuivi est la maintenance, la sécurité et le bon
        fonctionnement technique du site. Ces journaux sont traités par l&apos;hébergeur (Hostinger International Ltd)
        et ne sont pas exploités par Marelle dans le cours normal des opérations.<br /><br />

        <strong style={s}>Mémorisation du choix cookies</strong> — Traitement strictement nécessaire
        au fonctionnement du service, exempt de consentement (directive ePrivacy, art. 5.3).
      </>
    ),
  },

  /* ── 4 ── */
  {
    title: "Durée de conservation",
    content: (
      <>
        <strong style={s}>Messages de contact</strong> — 3 ans à compter du dernier échange,
        conformément aux recommandations de la CNIL applicables à la gestion des relations avec les
        prospects et clients (référentiel CNIL RG-003).<br /><br />
        <strong style={s}>Logs techniques (hébergeur)</strong> — 30 à 90 jours selon la configuration
        de l&apos;hébergeur.<br /><br />
        <strong style={s}>Choix relatif aux cookies (localStorage)</strong> — Conservé jusqu&apos;à
        effacement manuel des données du navigateur ou réinitialisation de votre choix.
      </>
    ),
  },

  /* ── 5 ── */
  {
    title: "Destinataires et sous-traitants",
    content: (
      <>
        Vos données peuvent être transmises aux prestataires techniques suivants, dans le strict cadre
        de leurs missions :<br /><br />

        <strong style={s}>Hostinger International Ltd (UE — serveurs en France)</strong> — Hébergement du site,
        exécution de l&apos;API de contact et stockage des messages dans une base de données locale (SQLite)
        sur le serveur. Les données sont hébergées au sein de l&apos;Union européenne (datacenter de Paris,
        France) ; aucun transfert hors UE n&apos;est nécessaire pour l&apos;hébergement.{" "}
        <a href="https://www.hostinger.fr/politique-de-confidentialite" target="_blank" rel="noopener noreferrer" style={g}>
          hostinger.fr — confidentialité
        </a><br /><br />

        <strong style={s}>Hostinger (messagerie du domaine, UE)</strong> — Acheminement des notifications
        email du formulaire via le serveur SMTP de la messagerie contact@marelle-home.fr
        (smtp.hostinger.com), au sein de l&apos;Union européenne.{" "}
        <a href="https://www.hostinger.fr/politique-de-confidentialite" target="_blank" rel="noopener noreferrer" style={g}>
          hostinger.fr — confidentialité
        </a><br /><br />

        Aucun de ces prestataires n&apos;utilise vos données à des fins publicitaires pour le compte de
        Marelle.
      </>
    ),
  },

  /* ── 6 ── */
  {
    title: "Transferts hors Union européenne",
    content: (
      <>
        Certains sous-traitants sont établis hors de l&apos;Espace Économique Européen (EEE) :<br /><br />

        <strong style={s}>Hébergement et base de données</strong> — Hébergés exclusivement au sein de l&apos;Union
        européenne (Hostinger, datacenter de Paris, France). Aucun transfert hors UE n&apos;est opéré pour
        l&apos;hébergement du site, l&apos;API de contact ou le stockage des messages.<br /><br />

        Les vidéos décoratives sont auto-hébergées sur notre serveur (VPS Hostinger, France, Union
        européenne). Aucun transfert de données vers des pays tiers n&apos;est opéré pour leur diffusion.
      </>
    ),
  },

  /* ── 7 ── */
  {
    title: "Décisions automatisées et profilage",
    content: (
      <>
        Marelle ne procède à aucune décision automatisée ni à aucun profilage au sens de
        l&apos;article 22 du RGPD. Aucun traitement automatisé ne produit d&apos;effet juridique ou ne vous
        affecte de manière significative.
      </>
    ),
  },

  /* ── 8 ── */
  {
    title: "Vos droits",
    content: (
      <>
        Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants :<br /><br />

        <strong style={s}>Droit d&apos;accès (Art. 15)</strong> — Obtenir confirmation que des données
        vous concernant sont traitées et en obtenir une copie.<br /><br />

        <strong style={s}>Droit de rectification (Art. 16)</strong> — Faire corriger des données
        inexactes ou incomplètes.<br /><br />

        <strong style={s}>Droit à l&apos;effacement (Art. 17)</strong> — Obtenir la suppression de vos
        données dans les conditions prévues par le RGPD.<br /><br />

        <strong style={s}>Droit à la limitation (Art. 18)</strong> — Obtenir la suspension provisoire
        du traitement dans certaines circonstances.<br /><br />

        <strong style={s}>Droit à la portabilité (Art. 20)</strong> — Recevoir vos données dans un
        format structuré et lisible par machine (applicable aux traitements basés sur le consentement
        ou le contrat).<br /><br />

        <strong style={s}>Droit d&apos;opposition (Art. 21)</strong> — Vous opposer à tout moment,
        pour des raisons tenant à votre situation particulière, aux traitements fondés sur
        l&apos;intérêt légitime (Art. 6.1.f). Marelle cessera alors le traitement sauf à
        démontrer des motifs légitimes impérieux ou pour la constatation, l&apos;exercice ou la défense
        de droits en justice.<br /><br />

        <strong style={s}>Droit de retrait du consentement</strong> — Pour les traitements fondés sur
        votre consentement (vidéos tierces), vous pouvez retirer votre consentement à tout moment
        sans que cela remette en cause la licéité des traitements antérieurs.<br /><br />

        Pour exercer l&apos;un de ces droits, adressez votre demande à :{" "}
        <a href="mailto:contact@marelle-home.fr" style={g}>
          contact@marelle-home.fr
        </a>{" "}
        en précisant « RGPD » dans l&apos;objet. Nous nous engageons à répondre dans un délai d&apos;un mois
        (délai pouvant être porté à trois mois pour les demandes complexes).<br /><br />

        Vous disposez également du droit d&apos;introduire une réclamation auprès de la{" "}
        <strong style={s}>Commission Nationale de l&apos;Informatique et des Libertés (CNIL)</strong>{" "}
        :{" "}
        <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" style={g}>
          cnil.fr/fr/plaintes
        </a>.
      </>
    ),
  },

  /* ── 9 ── */
  {
    title: "Cookies et traceurs",
    content: (
      <>
        Ce site n&apos;utilise pas de cookies publicitaires ni de traceurs tiers à des fins de ciblage
        comportemental.<br /><br />

        <strong style={s}>rc_cookie_consent</strong> (traceur fonctionnel, stocké en localStorage){" "}
        — Mémorise votre choix relatif aux cookies (accepté / refusé). Ce traceur est strictement
        nécessaire au fonctionnement de la bannière d&apos;information et est exempt de consentement
        préalable (directive ePrivacy, art. 5.3 ; délibération CNIL n° 2020-091 du 17 septembre 2020). Durée :
        indéfinie jusqu&apos;à effacement manuel.<br /><br />

        <strong style={s}>Polices de caractères</strong> — Les polices utilisées sur ce site sont
        auto-hébergées par le site (servies depuis notre serveur). Aucune requête n&apos;est envoyée à Google Fonts
        lors de votre navigation.<br /><br />

        <strong style={s}>Vidéos décoratives</strong> — Les vidéos sont auto-hébergées sur notre serveur
        (VPS Hostinger, France). Leur lecture ne transmet aucune donnée à un tiers.
      </>
    ),
  },

  /* ── 10 ── */
  {
    title: "Sécurité",
    content: (
      <>
        Ce site est servi exclusivement en HTTPS (TLS 1.2 minimum). Les données transmises via le
        formulaire de contact sont chiffrées en transit (TLS) et stockées dans une base de données
        locale sur notre serveur (VPS Hostinger, France, Union européenne). L&apos;accès aux messages est
        restreint à un espace d&apos;administration protégé par authentification.<br /><br />
        Marelle met en œuvre des mesures techniques et organisationnelles appropriées pour
        protéger vos données contre tout accès non autorisé, perte ou destruction accidentelle,
        conformément à l&apos;article 32 du RGPD.
      </>
    ),
  },

  /* ── 11 ── */
  {
    title: "Modifications de la présente politique",
    content: (
      <>
        La présente politique de confidentialité peut être mise à jour pour tenir compte de l&apos;évolution
        des traitements, de la réglementation ou des recommandations de la CNIL. La date de dernière
        mise à jour est indiquée en bas de page. En cas de modification substantielle affectant vos
        droits, une information vous sera communiquée par tout moyen approprié.
      </>
    ),
  },
];

export default function Confidentialite() {
  return (
    <main style={{ background: "var(--color-cream, #F7F3EC)" }}>

      {/* ── Mini-hero ── */}
      <section style={{ background: "var(--color-navy, #2B2620)", padding: "clamp(100px,12vw,140px) clamp(24px,4vw,52px) clamp(52px,7vw,72px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #B0764F)", marginBottom: "20px" }}>
            Données personnelles
          </p>
          <h1 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(32px,4vw,56px)", fontWeight: 300, fontStyle: "italic", color: "#fff", lineHeight: 1.1 }}>
            Politique de confidentialité
          </h1>
          <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(176,118,79,.5)", marginTop: "16px" }}>
            En vigueur au 12 juin 2026
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
            <Link href="/mentions-legales" style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(43,38,32,.35)", textDecoration: "none" }}>
              Mentions légales
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
