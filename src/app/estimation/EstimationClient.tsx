"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

/* ─────────────────────────────────────────────────────────────────────────────
   DATA — taux de base par ville × type, profils saisonniers indépendants.
   Sources : AirDNA (2024), Inside Airbnb, données de marché Airbnb / Booking.
   Taux de base = tarif nuit intersaison (hors saison, bien standard, sans bonus).
   ───────────────────────────────────────────────────────────────────────────── */

const LOCATIONS = [
  {
    id: "nice",
    label: "Nice",
    region: "Alpes-Maritimes",
    rates: { studio: 82, t2: 130, t3: 198, t4: 295, villa: 590 },
    seasons: [
      { label: "Haute saison",  sub: "Juillet — Août",          nights: 62,  occ: 0.94, mult: 2.18 },
      { label: "Été étendu",    sub: "Juin & Septembre",         nights: 61,  occ: 0.81, mult: 1.44 },
      { label: "Intersaison",   sub: "Avr., Mai & Octobre",      nights: 92,  occ: 0.58, mult: 1.00 },
      { label: "Basse saison",  sub: "Novembre — Mars",          nights: 150, occ: 0.35, mult: 0.68 },
    ],
  },
  {
    id: "antibes",
    label: "Antibes",
    region: "Alpes-Maritimes",
    rates: { studio: 88, t2: 142, t3: 218, t4: 320, villa: 660 },
    seasons: [
      { label: "Haute saison",  sub: "Juillet — Août",          nights: 62,  occ: 0.93, mult: 2.22 },
      { label: "Été étendu",    sub: "Juin & Septembre",         nights: 61,  occ: 0.80, mult: 1.46 },
      { label: "Intersaison",   sub: "Avr., Mai & Octobre",      nights: 92,  occ: 0.60, mult: 1.00 },
      { label: "Basse saison",  sub: "Novembre — Mars",          nights: 150, occ: 0.34, mult: 0.66 },
    ],
  },
  {
    id: "cannes",
    label: "Cannes",
    region: "Alpes-Maritimes",
    // Intersaison mult > 1 : Festival de Cannes (mai) + Grand Prix automobile
    rates: { studio: 112, t2: 178, t3: 278, t4: 420, villa: 880 },
    seasons: [
      { label: "Haute saison",  sub: "Juillet — Août",          nights: 62,  occ: 0.95, mult: 2.32 },
      { label: "Été étendu",    sub: "Juin & Septembre",         nights: 61,  occ: 0.83, mult: 1.52 },
      { label: "Intersaison",   sub: "Avr., Mai & Octobre",      nights: 92,  occ: 0.64, mult: 1.12 },
      { label: "Basse saison",  sub: "Novembre — Mars",          nights: 150, occ: 0.36, mult: 0.65 },
    ],
  },
  {
    id: "menton",
    label: "Menton",
    region: "Alpes-Maritimes",
    rates: { studio: 70, t2: 108, t3: 162, t4: 240, villa: 480 },
    seasons: [
      { label: "Haute saison",  sub: "Juillet — Août",          nights: 62,  occ: 0.90, mult: 2.00 },
      { label: "Été étendu",    sub: "Juin & Septembre",         nights: 61,  occ: 0.76, mult: 1.35 },
      { label: "Intersaison",   sub: "Avr., Mai & Octobre",      nights: 92,  occ: 0.52, mult: 0.95 },
      { label: "Basse saison",  sub: "Novembre — Mars",          nights: 150, occ: 0.30, mult: 0.62 },
    ],
  },
  {
    id: "saint-tropez",
    label: "Saint-Tropez",
    region: "Var",
    // Marché ultra-saisonnier : juillet-août concentre 65 % du CA annuel.
    rates: { studio: 138, t2: 235, t3: 400, t4: 640, villa: 1400 },
    seasons: [
      { label: "Haute saison",  sub: "Juillet — Août",          nights: 62,  occ: 0.96, mult: 3.08 },
      { label: "Été étendu",    sub: "Juin & Septembre",         nights: 61,  occ: 0.79, mult: 1.82 },
      { label: "Intersaison",   sub: "Avr., Mai & Octobre",      nights: 92,  occ: 0.45, mult: 0.95 },
      { label: "Basse saison",  sub: "Novembre — Mars",          nights: 150, occ: 0.20, mult: 0.55 },
    ],
  },
  {
    id: "villefranche",
    label: "Villefranche",
    region: "Alpes-Maritimes",
    rates: { studio: 92, t2: 150, t3: 232, t4: 348, villa: 730 },
    seasons: [
      { label: "Haute saison",  sub: "Juillet — Août",          nights: 62,  occ: 0.93, mult: 2.18 },
      { label: "Été étendu",    sub: "Juin & Septembre",         nights: 61,  occ: 0.80, mult: 1.46 },
      { label: "Intersaison",   sub: "Avr., Mai & Octobre",      nights: 92,  occ: 0.57, mult: 1.00 },
      { label: "Basse saison",  sub: "Novembre — Mars",          nights: 150, occ: 0.32, mult: 0.65 },
    ],
  },
  {
    id: "juan",
    label: "Juan-les-Pins",
    region: "Alpes-Maritimes",
    rates: { studio: 88, t2: 144, t3: 222, t4: 330, villa: 695 },
    seasons: [
      { label: "Haute saison",  sub: "Juillet — Août",          nights: 62,  occ: 0.94, mult: 2.25 },
      { label: "Été étendu",    sub: "Juin & Septembre",         nights: 61,  occ: 0.82, mult: 1.50 },
      { label: "Intersaison",   sub: "Avr., Mai & Octobre",      nights: 92,  occ: 0.59, mult: 1.00 },
      { label: "Basse saison",  sub: "Novembre — Mars",          nights: 150, occ: 0.33, mult: 0.65 },
    ],
  },
];

const TYPES = [
  { id: "studio", label: "Studio", sublabel: "jusqu'à 2 pers." },
  { id: "t2",     label: "T2",     sublabel: "2–4 pers."        },
  { id: "t3",     label: "T3",     sublabel: "4–6 pers."        },
  { id: "t4",     label: "T4+",    sublabel: "6–8 pers."        },
  { id: "villa",  label: "Villa",  sublabel: "8+ pers."         },
];

const STANDINGS = [
  { id: "standard",  label: "Standard",  sublabel: "Bien correct, équipé",       mult: 1.00 },
  { id: "superieur", label: "Supérieur", sublabel: "Rénové, décoration soignée", mult: 1.25 },
  { id: "prestige",  label: "Prestige",  sublabel: "Exceptionnel, design",       mult: 1.55 },
];

const AMENITIES = [
  { id: "sea",     label: "Vue mer",            bonus: 0.20 },
  { id: "pool",    label: "Piscine",             bonus: 0.22 },
  { id: "beach",   label: "Proche plage <200m", bonus: 0.15 },
  { id: "jacuzzi", label: "Jacuzzi / Spa",       bonus: 0.16 },
  { id: "garden",  label: "Jardin privatif",     bonus: 0.11 },
  { id: "terrace", label: "Grande terrasse",     bonus: 0.09 },
  { id: "parking", label: "Parking",             bonus: 0.06 },
  { id: "ac",      label: "Climatisation",       bonus: 0.05 },
];

function fmt(n: number) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}

export default function EstimationClient() {
  const [loc, setLoc] = useState("nice");
  const [type, setType] = useState("t2");
  const [standingId, setStandingId] = useState("standard");
  const [amenities, setAmenities] = useState<string[]>([]);
  const [leadEmail, setLeadEmail] = useState("");
  const [leadSent, setLeadSent] = useState(false);
  const [leadLoading, setLeadLoading] = useState(false);
  const [leadError, setLeadError] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  const toggleAmenity = (id: string) =>
    setAmenities(prev => prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]);

  async function handleLeadSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!leadEmail) return;
    setLeadLoading(true);
    setLeadError(false);
    const locationLabel = LOCATIONS.find(l => l.id === loc)?.label ?? loc;
    const typeLabel = TYPES.find(t => t.id === type)?.label ?? type;
    const standingLabel = STANDINGS.find(s => s.id === standingId)?.label ?? standingId;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: "",
          lastName: "",
          email: leadEmail,
          phone: "",
          type: "Estimation — reçu par email",
          message: `Estimation simulateur : ${typeLabel} ${standingLabel} à ${locationLabel} — Revenus nets estimés : ${fmt(result.netAnnual)}/an (brut : ${fmt(result.grossAnnual)}).`,
        }),
      });
      if (!res.ok) throw new Error("server error");
      setLeadSent(true);
    } catch {
      setLeadError(true);
    }
    setLeadLoading(false);
  }

  const result = useMemo(() => {
    const location = LOCATIONS.find(l => l.id === loc)!;
    const standing = STANDINGS.find(s => s.id === standingId)!;
    const amenityBonus = amenities.reduce((sum, id) => {
      const a = AMENITIES.find(a => a.id === id);
      return sum + (a?.bonus ?? 0);
    }, 0);

    const rateKey = type as keyof typeof location.rates;
    const baseRate = location.rates[rateKey] ?? location.rates.t2;
    const nightlyBase = baseRate * standing.mult * (1 + amenityBonus);

    const seasonRevenues = location.seasons.map(s => ({
      ...s,
      revenue: nightlyBase * s.mult * s.nights * s.occ,
      bookedNights: Math.round(s.nights * s.occ),
    }));

    const grossAnnual = seasonRevenues.reduce((sum, s) => sum + s.revenue, 0);
    const netAnnual = grossAnnual * 0.80;
    const netMonthly = netAnnual / 12;
    const maxSeasonRevenue = Math.max(...seasonRevenues.map(s => s.revenue));

    const totalBooked = seasonRevenues.reduce((sum, s) => sum + s.bookedNights, 0);
    const avgOccupancy = Math.round((totalBooked / 365) * 100);
    const peakNightly = Math.round(nightlyBase * location.seasons[0].mult);
    const selfManagedNet = grossAnnual * 0.68;
    const gainVsSelf = netAnnual - selfManagedNet;

    return { nightlyBase, seasonRevenues, grossAnnual, netAnnual, netMonthly, maxSeasonRevenue, avgOccupancy, peakNightly, selfManagedNet, gainVsSelf };
  }, [loc, type, standingId, amenities]);

  const btnBase: React.CSSProperties = {
    padding: "10px 20px",
    fontFamily: "var(--font-dm-sans, sans-serif)",
    fontSize: "13px",
    fontWeight: 300,
    cursor: "pointer",
    transition: "all .2s",
    background: "transparent",
  };

  return (
    <main style={{ background: "var(--color-cream, #F7F3EC)" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "60vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <video
          autoPlay muted loop playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        >
          <source src="/videos/estimation-1.mp4" type="video/mp4" />
          <source src="/videos/estimation-2.mp4" type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(43,38,32,.9) 0%, rgba(43,38,32,.35) 60%, transparent 100%)" }} />
        <div style={{ position: "relative", width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "clamp(80px,10vw,120px) clamp(24px,4vw,52px) clamp(52px,7vw,72px)" }}>
          <RevealOnScroll>
            <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "rgba(176,118,79,.9)", marginBottom: "20px" }}>
              Estimation
            </p>
            <h1 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(36px,5vw,64px)", fontWeight: 300, color: "#fff", lineHeight: 1.1, maxWidth: "640px" }}>
              Quel est le potentiel locatif<br />
              <em style={{ fontStyle: "italic" }}>de votre bien ?</em>
            </h1>
            <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "clamp(13px,1.4vw,15px)", fontWeight: 300, color: "rgba(255,255,255,.55)", marginTop: "20px", maxWidth: "500px", lineHeight: 1.7 }}>
              Configurez votre bien en quelques clics. Notre simulateur calcule une estimation réaliste de vos revenus locatifs sur la Côte d&apos;Azur.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── OUTIL ── */}
      <section style={{ padding: "clamp(64px,9vw,96px) clamp(24px,4vw,52px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 360px", gap: "clamp(40px,5vw,72px)", alignItems: "start" }}>

          {/* ── GAUCHE — paramètres ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>

            {/* Localisation */}
            <div>
              <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #B0764F)", marginBottom: "20px" }}>
                Localisation
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {LOCATIONS.map(l => (
                  <button
                    key={l.id}
                    onClick={() => setLoc(l.id)}
                    style={{
                      ...btnBase,
                      border: loc === l.id ? "1px solid var(--color-navy, #2B2620)" : "1px solid rgba(43,38,32,.15)",
                      background: loc === l.id ? "var(--color-navy, #2B2620)" : "transparent",
                      color: loc === l.id ? "#fff" : "rgba(43,38,32,.65)",
                    }}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Type de bien */}
            <div>
              <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #B0764F)", marginBottom: "20px" }}>
                Type de bien
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px" }}>
                {TYPES.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setType(t.id)}
                    style={{
                      padding: "18px 12px",
                      border: type === t.id ? "1px solid var(--color-navy, #2B2620)" : "1px solid rgba(43,38,32,.12)",
                      background: type === t.id ? "var(--color-navy, #2B2620)" : "#fff",
                      cursor: "pointer",
                      transition: "all .2s",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "22px", fontWeight: 300, color: type === t.id ? "#fff" : "var(--color-navy, #2B2620)", lineHeight: 1 }}>
                      {t.label}
                    </div>
                    <div style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "10px", fontWeight: 300, color: type === t.id ? "rgba(255,255,255,.55)" : "rgba(43,38,32,.4)", marginTop: "6px" }}>
                      {t.sublabel}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Standing */}
            <div>
              <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #B0764F)", marginBottom: "20px" }}>
                Standing du bien
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                {STANDINGS.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setStandingId(s.id)}
                    style={{
                      padding: "18px 12px",
                      border: standingId === s.id ? "1px solid var(--color-gold, #B0764F)" : "1px solid rgba(43,38,32,.12)",
                      background: standingId === s.id ? "rgba(176,118,79,.08)" : "#fff",
                      cursor: "pointer",
                      transition: "all .2s",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "18px", fontWeight: 300, color: standingId === s.id ? "var(--color-gold, #B0764F)" : "var(--color-navy, #2B2620)", lineHeight: 1 }}>
                      {s.label}
                    </div>
                    <div style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "10px", fontWeight: 300, color: standingId === s.id ? "rgba(43,38,32,.55)" : "rgba(43,38,32,.4)", marginTop: "6px", lineHeight: 1.4 }}>
                      {s.sublabel}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Équipements */}
            <div>
              <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #B0764F)", marginBottom: "20px" }}>
                Équipements & atouts
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {AMENITIES.map(a => {
                  const active = amenities.includes(a.id);
                  return (
                    <button
                      key={a.id}
                      onClick={() => toggleAmenity(a.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "10px 18px",
                        border: active ? "1px solid var(--color-gold, #B0764F)" : "1px solid rgba(43,38,32,.15)",
                        background: active ? "rgba(176,118,79,.08)" : "transparent",
                        cursor: "pointer",
                        transition: "all .2s",
                        fontFamily: "var(--font-dm-sans, sans-serif)",
                        fontSize: "13px",
                        fontWeight: 300,
                        color: active ? "var(--color-navy, #2B2620)" : "rgba(43,38,32,.6)",
                      }}
                    >
                      {active && (
                        <span style={{ color: "var(--color-gold, #B0764F)", fontSize: "11px", fontWeight: 500 }}>✓</span>
                      )}
                      {a.label}
                      <span style={{ fontSize: "11px", color: active ? "var(--color-gold, #B0764F)" : "rgba(43,38,32,.35)" }}>
                        +{Math.round(a.bonus * 100)}%
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Répartition saisonnière */}
            <div>
              <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #B0764F)", marginBottom: "28px" }}>
                Répartition saisonnière estimée
              </p>

              {/* Bar chart visuel */}
              <div style={{ display: "flex", alignItems: "flex-end", gap: "10px", height: "130px", marginBottom: "28px" }}>
                {result.seasonRevenues.map((s, i) => {
                  const isPeak = i === 0;
                  const barH = Math.max(8, (s.revenue / result.maxSeasonRevenue) * 100);
                  return (
                    <div key={s.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", gap: "0" }}>
                      <div style={{ flex: 1, width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                        <div style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "12px", fontWeight: 300, color: isPeak ? "var(--color-gold, #B0764F)" : "rgba(43,38,32,.45)", textAlign: "center", marginBottom: "6px", whiteSpace: "nowrap" }}>
                          {fmt(s.revenue)}
                        </div>
                        <div style={{
                          width: "100%",
                          height: `${barH}%`,
                          background: isPeak ? "var(--color-gold, #B0764F)" : "rgba(43,38,32,.1)",
                          transition: "height .5s ease",
                          minHeight: "6px",
                        }} />
                      </div>
                      <div style={{ paddingTop: "10px", textAlign: "center" }}>
                        <div style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "9px", fontWeight: isPeak ? 500 : 300, color: isPeak ? "var(--color-gold, #B0764F)" : "rgba(43,38,32,.4)", letterSpacing: "0.5px" }}>
                          {s.label.split(' ')[0]}
                        </div>
                        <div style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "9px", fontWeight: 300, color: "rgba(43,38,32,.3)", marginTop: "2px" }}>
                          {s.bookedNights}n
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Détails compacts */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {result.seasonRevenues.map((s, i) => (
                  <div key={s.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid rgba(43,38,32,.06)" }}>
                    <div>
                      <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "13px", fontWeight: i === 0 ? 400 : 300, color: "var(--color-navy, #2B2620)" }}>{s.label}</span>
                      <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "11px", fontWeight: 300, color: "rgba(43,38,32,.35)", marginLeft: "8px" }}>{s.sub}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                      <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "10px", color: "rgba(43,38,32,.35)" }}>{s.bookedNights} nuits</span>
                      <span style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "16px", fontWeight: 300, color: i === 0 ? "var(--color-gold, #B0764F)" : "var(--color-navy, #2B2620)", transition: "all .3s", minWidth: "72px", textAlign: "right" }}>
                        {fmt(s.revenue)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── DROITE — résultats sticky ── */}
          <div style={{ position: "sticky", top: "100px" }}>
            <div style={{ background: "#fff", padding: "clamp(24px,3.5vw,36px)" }}>

              {/* Header + jauge occupation */}
              <div style={{ marginBottom: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                  <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #B0764F)" }}>
                    Votre estimation
                  </p>
                  <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "11px", fontWeight: 400, color: "var(--color-navy, #2B2620)" }}>
                    {result.avgOccupancy}% occupé
                  </span>
                </div>
                <div style={{ height: "3px", background: "rgba(43,38,32,.08)", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${result.avgOccupancy}%`, background: "var(--color-navy, #2B2620)", transition: "width .6s ease" }} />
                </div>
              </div>

              {/* Revenu net — chiffre principal */}
              <div style={{ paddingBottom: "20px", borderBottom: "1px solid rgba(43,38,32,.07)", marginBottom: "20px" }}>
                <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "11px", fontWeight: 300, color: "rgba(43,38,32,.45)", marginBottom: "6px" }}>
                  Revenus nets estimés / an
                </p>
                <div style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(36px,4.5vw,52px)", fontWeight: 300, color: "var(--color-navy, #2B2620)", lineHeight: 1, transition: "all .3s" }}>
                  {fmt(result.netAnnual)}
                </div>
                <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "11px", fontWeight: 300, color: "rgba(43,38,32,.35)", marginTop: "6px" }}>
                  Après commission Marelle (20 %)
                </p>
              </div>

              {/* Détails */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingBottom: "20px", borderBottom: "1px solid rgba(43,38,32,.07)", marginBottom: "20px" }}>
                {[
                  { label: "Revenu brut annuel",   value: fmt(result.grossAnnual) },
                  { label: "Revenu net / mois",     value: fmt(result.netMonthly)  },
                  { label: "Tarif moyen / nuit",    value: fmt(result.nightlyBase) },
                  { label: "Saison haute / nuit",   value: fmt(result.peakNightly) },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "12px", fontWeight: 300, color: "rgba(43,38,32,.5)" }}>
                      {label}
                    </span>
                    <span style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "17px", fontWeight: 300, color: "var(--color-navy, #2B2620)", transition: "all .3s" }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Comparaison vs gestion seule */}
              <div style={{ background: "rgba(176,118,79,.07)", border: "1px solid rgba(176,118,79,.25)", padding: "16px", marginBottom: "20px" }}>
                <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "var(--color-gold, #B0764F)", marginBottom: "14px" }}>
                  vs. gestion autonome
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "12px", fontWeight: 300, color: "rgba(43,38,32,.5)" }}>Sans accompagnement</span>
                    <span style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "16px", fontWeight: 300, color: "rgba(43,38,32,.5)", transition: "all .3s" }}>{fmt(result.selfManagedNet)}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "12px", fontWeight: 300, color: "var(--color-navy, #2B2620)" }}>Avec Marelle</span>
                    <span style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "16px", fontWeight: 300, color: "var(--color-navy, #2B2620)", transition: "all .3s" }}>{fmt(result.netAnnual)}</span>
                  </div>
                  <div style={{ height: "1px", background: "rgba(176,118,79,.2)", margin: "2px 0" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "12px", fontWeight: 500, color: "var(--color-navy, #2B2620)" }}>Gain estimé</span>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                      <span style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "18px", fontWeight: 400, color: "var(--color-gold, #B0764F)", transition: "all .3s" }}>+{fmt(result.gainVsSelf)}</span>
                      <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "10px", fontWeight: 500, color: "var(--color-gold, #B0764F)", background: "rgba(176,118,79,.15)", padding: "2px 6px" }}>
                        +{Math.round((result.gainVsSelf / result.selfManagedNet) * 100)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Méthodologie */}
              <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "10px", fontWeight: 300, color: "rgba(43,38,32,.28)", lineHeight: 1.55, marginBottom: "16px" }}>
                * La comparaison « sans accompagnement » suppose une gestion autonome générant environ 15–20 % de revenus bruts en moins (tarification moins optimisée, taux d&apos;occupation réduit, annonce moins visible), combiné à une estimation du coût de gestion personnel (temps consacré aux réservations, communications et accueil). Simulation indicative uniquement.
              </p>

              {/* CTA */}
              <Link href="/contact" className="cta-btn-navy" style={{ textAlign: "center", display: "block" }}>
                Obtenir une estimation réelle <span>→</span>
              </Link>
              <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "10.5px", fontWeight: 300, color: "rgba(43,38,32,.3)", textAlign: "center", lineHeight: 1.6, marginTop: "12px" }}>
                Estimation indicative basée sur les moyennes du marché. Les résultats ne constituent pas un engagement contractuel et peuvent varier selon la saisonnalité, l&apos;état du bien et la demande locale.
              </p>

              {/* ── Lead capture email ── */}
              <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid rgba(43,38,32,.07)" }}>
                {leadSent ? (
                  <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "12px", fontWeight: 300, fontStyle: "italic", color: "var(--color-gold, #B0764F)", textAlign: "center", lineHeight: 1.6 }}>
                    Estimation envoyée — vérifiez votre boîte mail.
                  </p>
                ) : leadError ? (
                  <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "12px", fontWeight: 300, fontStyle: "italic", color: "#c0392b", textAlign: "center", lineHeight: 1.6 }}>
                    Erreur d&apos;envoi — réessayez ou contactez-nous directement.
                  </p>
                ) : (
                  <>
                    <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(43,38,32,.4)", marginBottom: "10px" }}>
                      Recevoir cette estimation par email
                    </p>
                    <form onSubmit={handleLeadSubmit} style={{ display: "flex", gap: "8px" }}>
                      <input
                        ref={emailRef}
                        type="email"
                        required
                        placeholder="votre@email.fr"
                        value={leadEmail}
                        onChange={e => setLeadEmail(e.target.value)}
                        style={{
                          flex: 1,
                          background: "transparent",
                          border: "none",
                          borderBottom: "1px solid rgba(43,38,32,.15)",
                          padding: "8px 0",
                          fontFamily: "var(--font-dm-sans, sans-serif)",
                          fontSize: "12px",
                          fontWeight: 300,
                          color: "var(--color-navy, #2B2620)",
                          outline: "none",
                          minWidth: 0,
                        }}
                      />
                      <button
                        type="submit"
                        disabled={leadLoading}
                        style={{
                          padding: "8px 14px",
                          border: "1px solid var(--color-navy, #2B2620)",
                          background: "var(--color-navy, #2B2620)",
                          color: "#fff",
                          fontFamily: "var(--font-josefin, sans-serif)",
                          fontSize: "8.5px",
                          fontWeight: 300,
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          cursor: "pointer",
                          transition: "all .2s",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                        }}
                      >
                        {leadLoading ? "…" : "Envoyer"}
                      </button>
                    </form>
                    <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "10px", fontWeight: 300, color: "rgba(43,38,32,.3)", lineHeight: 1.55, marginTop: "10px" }}>
                      Votre email est utilisé uniquement pour vous envoyer cette estimation.{" "}
                      <Link href="/confidentialite" style={{ color: "var(--color-gold, #B0764F)", textDecoration: "underline" }}>
                        Politique de confidentialité
                      </Link>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
