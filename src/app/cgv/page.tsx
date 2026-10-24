import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — Marelle Home",
  description: "Conditions générales de vente de Marelle, conciergerie Airbnb sur la Côte d'Azur.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://marelle-home.fr" },
};

const articles = [
  {
    title: "Préambule — Identité du prestataire",
    content: (
      <>
        <strong style={{ color: "var(--color-navy, #2B2620)" }}>Marelle</strong>{" "}(nom commercial)<br />
        Exploitant : Camille BIONDA SLIMANI — Entrepreneur individuel<br />
        SIREN : 106 204 621 — SIRET : 106 204 621 00010<br />
        Adresse : 27 avenue Jean Médecin, 06000 Nice, France<br />
        Email :{" "}
        <a href="mailto:contact@marelle-home.fr" style={{ color: "var(--color-gold, #B0764F)" }}>
          contact@marelle-home.fr
        </a><br />
        Téléphone :{" "}
        <a href="tel:+33675064828" style={{ color: "var(--color-gold, #B0764F)" }}>
          06 75 06 48 28
        </a><br />
        Régime de TVA : Non assujetti — franchise en base (Art. 293 B du CGI)<br /><br />
        Les présentes CGV sont disponibles en permanence sur le site et peuvent être consultées avant et après la conclusion du contrat. Elles prévaudront sur tout autre document contractuel du Client.
      </>
    ),
  },
  {
    title: "Article 1 — Objet",
    content: <>Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Marelle (ci-après « le Prestataire ») et tout propriétaire (ci-après « le Client ») souhaitant confier la gestion locative saisonnière de son bien immobilier sur la Côte d&apos;Azur. Elles s&apos;appliquent à l&apos;exclusion de toutes autres conditions et prévaudront sur tout autre document du Client.</>,
  },
  {
    title: "Article 2 — Prestation",
    content: (
      <>
        Marelle propose une gestion locative complète incluant : la création et l&apos;optimisation de l&apos;annonce sur les principales plateformes (Airbnb, Booking.com, Vrbo, Abritel), la gestion des réservations et de la communication avec les voyageurs, l&apos;accueil personnalisé (check-in / check-out), l&apos;optimisation dynamique des tarifs, et la coordination des interventions de maintenance courante. Les travaux ou réparations dépassant un montant de 150 € HT seront soumis à validation préalable du Client.<br /><br />
        Le ménage professionnel et la gestion du linge entre chaque séjour sont coordonnés par le Prestataire. Ces frais sont facturés directement au voyageur via les plateformes sous forme de frais de ménage et ne sont en aucun cas déduits des revenus du Client ni inclus dans la commission du Prestataire.
      </>
    ),
  },
  {
    title: "Article 3 — Rémunération",
    content: <>La commission du Prestataire est fixée à <strong style={{ color: "var(--color-navy, #2B2620)" }}>20 % des revenus locatifs effectivement perçus par le Client</strong>, hors frais de ménage facturés aux voyageurs et hors taxes de séjour collectées par les plateformes. Aucun frais fixe, frais de mise en service ou frais d&apos;inscription n&apos;est appliqué. La commission est prélevée mensuellement sur les revenus générés et fait l&apos;objet d&apos;un relevé de compte détaillé transmis au Client. Le Prestataire étant en franchise en base de TVA (Art. 293 B du CGI), la commission s&apos;entend identique HT et TTC : aucune TVA n&apos;est facturée.</>,
  },
  {
    title: "Article 4 — Durée et résiliation",
    content: <>Le contrat est conclu sans engagement de durée minimale. Chacune des parties peut y mettre fin à tout moment par notification écrite (email ou courrier recommandé) avec un préavis de <strong style={{ color: "var(--color-navy, #2B2620)" }}>30 jours</strong>. La résiliation ne peut prendre effet avant la fin des réservations déjà confirmées par les voyageurs, lesquelles devront être honorées.</>,
  },
  {
    title: "Article 5 — Droit de rétractation",
    content: (
      <>
        Conformément aux articles L. 221-18 et suivants du Code de la consommation, tout Client concluant un contrat à distance avec le Prestataire en qualité de consommateur dispose d&apos;un délai de <strong style={{ color: "var(--color-navy, #2B2620)" }}>14 jours</strong> à compter de la conclusion du contrat pour exercer son droit de rétractation, sans avoir à motiver sa décision.<br /><br />
        Toutefois, conformément à l&apos;article L. 221-28 du Code de la consommation, si le Client demande expressément le commencement de la prestation avant l&apos;expiration de ce délai <strong style={{ color: "var(--color-navy, #2B2620)" }}>et renonce expressément à son droit de rétractation</strong>, et que la prestation est entièrement exécutée avant la fin dudit délai, le droit de rétractation est perdu.<br /><br />
        Pour exercer ce droit, le Client peut utiliser le formulaire type ci-après ou notifier sa décision par tout écrit non ambigu (email ou courrier recommandé) adressé à : <strong style={{ color: "var(--color-navy, #2B2620)" }}>contact@marelle-home.fr</strong>.<br /><br />
        <em style={{ color: "rgba(43,38,32,.5)", fontSize: "13px" }}>
          Formulaire type de rétractation (Annexe à l&apos;Art. R. 221-1 du Code de la consommation) — À l&apos;attention de Marelle, contact@marelle-home.fr : Je/Nous vous notifie/notifions ma/notre rétractation du contrat de prestation de gestion locative conclu le [date]. Nom : [___]. Adresse : [___]. Signature (si papier) : [___]. Date : [___].
        </em>
      </>
    ),
  },
  {
    title: "Article 6 — Nature juridique du service",
    content: (
      <>
        Marelle intervient en qualité de <strong style={{ color: "var(--color-navy, #2B2620)" }}>prestataire de services opérationnels</strong> et non de mandataire immobilier. Le Prestataire :<br /><br />
        — ne détient aucun mandat de représentation du Client vis-à-vis des voyageurs ou des plateformes ;<br />
        — ne négocie pas les conditions contractuelles des séjours au nom du Client ;<br />
        — ne signe pas de baux ni aucun acte juridique au nom du Client ;<br />
        — ne perçoit pas les loyers ni aucune somme pour le compte du Client (les fonds sont versés directement par les plateformes au Client) ;<br />
        — n&apos;exerce pas d&apos;activités soumises à la loi n° 70-9 du 2 janvier 1970 dite « loi Hoguet ».<br /><br />
        Les contrats de séjour sont conclus directement entre le Client (en sa qualité d&apos;hôte inscrit sur les plateformes) et les voyageurs. Le Prestataire agit exclusivement comme coordinateur opérationnel sans pouvoir engager le Client.
      </>
    ),
  },
  {
    title: "Article 7 — Responsabilités",
    content: <>Le Prestataire s&apos;engage à apporter tout le soin nécessaire à la gestion du bien et maintient en cours de validité une assurance Responsabilité Civile Professionnelle. En cas de dégât causé par un voyageur, le Prestataire assure le suivi du dossier auprès des plateformes (AirCover Airbnb ou équivalent). La responsabilité du Prestataire ne saurait excéder le montant des commissions perçues sur les 3 derniers mois d&apos;activité, <strong style={{ color: "var(--color-navy, #2B2620)" }}>sauf en cas de faute lourde ou de dol du Prestataire</strong>. Pour les Clients agissant en qualité de consommateurs, cette limitation n&apos;est pas opposable en cas de faute lourde ou de dol.</>,
  },
  {
    title: "Article 8 — Obligations du Client",
    content: (
      <>
        Le Client s&apos;engage à ce que son bien soit conforme à la réglementation applicable, notamment :<br /><br />
        — la déclaration en mairie et l&apos;obtention du numéro d&apos;enregistrement obligatoire (Art. L. 324-1-1 du Code du tourisme) ;<br />
        — le respect de la limite légale de location des résidences principales : <strong style={{ color: "var(--color-navy, #2B2620)" }}>120 jours par an</strong> au niveau national (Art. L. 324-1-1 du Code du tourisme), réduite à <strong style={{ color: "var(--color-navy, #2B2620)" }}>90 jours</strong> dans les communes ayant adopté une délibération en ce sens (loi n° 2024-1039 du 19 novembre 2024) ;<br />
        — l&apos;autorisation de changement d&apos;usage si le bien est une résidence secondaire en zone tendue ;<br />
        — la conformité aux normes électriques, de sécurité incendie et de sécurité des installations ;<br />
        — la fourniture d&apos;un Diagnostic de Performance Énergétique (DPE) valide (obligation applicable aux nouvelles annonces depuis le 1er janvier 2025 dans les communes ayant adopté les dispositions de la loi n° 2024-1039) ;<br />
        — la souscription d&apos;une assurance habitation couvrant expressément la location saisonnière meublée.
      </>
    ),
  },
  {
    title: "Article 9 — Droit applicable et litiges",
    content: (
      <>
        Les présentes CGV sont soumises au droit français. En cas de litige, les parties s&apos;efforceront de trouver une solution amiable avant tout recours judiciaire.<br /><br />
        <strong style={{ color: "var(--color-navy, #2B2620)" }}>Pour les Clients agissant en qualité de consommateurs</strong>, le tribunal compétent sera celui du domicile du consommateur au moment de la conclusion du contrat, conformément aux articles L. 141-5 et R. 631-3 du Code de la consommation.<br /><br />
        <strong style={{ color: "var(--color-navy, #2B2620)" }}>Pour les Clients agissant à titre professionnel</strong>, le tribunal compétent sera celui du ressort du siège social de Marelle.
      </>
    ),
  },
  {
    title: "Article 10 — Médiation de la consommation",
    content: (
      <>
        Conformément aux articles L. 612-1, L. 616-1 et R. 616-1 du Code de la consommation, tout consommateur peut recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d&apos;un litige l&apos;opposant au Prestataire. Le médiateur compétent pour le secteur de la gestion locative et des biens immobiliers saisonniers (secteur K03 de la liste CECMC) est :<br /><br />
        <strong style={{ color: "var(--color-navy, #2B2620)" }}>GIE MEDIMMOCONSO — Médiateur de la consommation</strong><br />
        <a href="https://www.medimmoconso.fr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-gold, #B0764F)" }}>www.medimmoconso.fr</a><br /><br />
        Le recours au médiateur n&apos;est possible qu&apos;après avoir tenté, sans succès, de résoudre le litige directement auprès du Prestataire par une réclamation écrite adressée à <strong style={{ color: "var(--color-navy, #2B2620)" }}>contact@marelle-home.fr</strong>.
      </>
    ),
  },
  {
    title: "Article 11 — Garanties légales",
    content: (
      <>
        <strong style={{ color: "var(--color-navy, #2B2620)" }}>Garantie légale de conformité</strong><br /><br />
        Conformément aux articles L. 217-1 et suivants du Code de la consommation, tout Client agissant en qualité de consommateur bénéficie de la garantie légale de conformité. Le Prestataire s&apos;engage à fournir une prestation conforme à la description figurant aux présentes CGV et au contrat conclu. En cas de défaut de conformité dûment constaté, le Client peut exiger la mise en conformité de la prestation ou, à défaut, une réduction du prix ou la résolution du contrat, dans les conditions prévues aux articles L. 217-9 et suivants du Code de la consommation.<br /><br />
        <strong style={{ color: "var(--color-navy, #2B2620)" }}>Garantie des vices cachés</strong><br /><br />
        Conformément aux articles 1641 et suivants du Code civil, le Prestataire est tenu de la garantie à raison des défauts cachés qui rendraient la prestation impropre à l&apos;usage auquel elle est destinée, ou qui en diminueraient tellement cet usage que le Client ne l&apos;aurait pas acquise, ou n&apos;en aurait donné qu&apos;un moindre prix, s&apos;il les avait connus. Le Client dispose de deux ans à compter de la découverte du vice pour agir, conformément à l&apos;article 1648 du Code civil.<br /><br />
        <strong style={{ color: "var(--color-navy, #2B2620)" }}>Absence de garantie commerciale</strong><br /><br />
        Le Prestataire ne consent aucune garantie commerciale au sens de l&apos;article L. 217-21 du Code de la consommation, en sus des garanties légales ci-dessus. Les présentes dispositions ne privent pas les Clients consommateurs des droits dont ils bénéficient au titre de la législation applicable.
      </>
    ),
  },
];

export default function CGV() {
  return (
    <main style={{ background: "var(--color-cream, #F7F3EC)" }}>

      {/* ── Mini-hero ── */}
      <section style={{ background: "var(--color-navy, #2B2620)", padding: "clamp(100px,12vw,140px) clamp(24px,4vw,52px) clamp(52px,7vw,72px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #B0764F)", marginBottom: "20px" }}>
            Conditions contractuelles
          </p>
          <h1 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(32px,4vw,56px)", fontWeight: 300, fontStyle: "italic", color: "#fff", lineHeight: 1.1 }}>
            Conditions Générales de Vente
          </h1>
          <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(176,118,79,.5)", marginTop: "16px" }}>
            En vigueur au 12 juin 2026
          </p>
        </div>
      </section>

      {/* ── Contenu ── */}
      <section style={{ padding: "clamp(56px,8vw,88px) clamp(24px,4vw,52px)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px" }}>

          {articles.map(({ title, content }) => (
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
            <Link href="/confidentialite" style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(43,38,32,.35)", textDecoration: "none" }}>
              Confidentialité
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
