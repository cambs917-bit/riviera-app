"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

const LOCATIONS = [
  { id: "nice", label: "Nice", mult: 1.0 },
  { id: "antibes", label: "Antibes", mult: 1.12 },
  { id: "cannes", label: "Cannes", mult: 1.38 },
  { id: "menton", label: "Menton", mult: 0.84 },
  { id: "monaco", label: "Monaco", mult: 2.1 },
  { id: "saint-tropez", label: "Saint-Tropez", mult: 2.65 },
];

const TYPES = [
  { id: "studio", label: "Studio", sublabel: "jusqu'à 2 pers.", rate: 92 },
  { id: "t2", label: "T2", sublabel: "2–4 pers.", rate: 135 },
  { id: "t3", label: "T3", sublabel: "4–6 pers.", rate: 195 },
  { id: "t4", label: "T4+", sublabel: "6–8 pers.", rate: 290 },
  { id: "villa", label: "Villa", sublabel: "8+ pers.", rate: 520 },
];

const AMENITIES = [
  { id: "sea", label: "Vue mer", bonus: 0.22 },
  { id: "pool", label: "Piscine", bonus: 0.26 },
  { id: "terrace", label: "Terrasse", bonus: 0.09 },
  { id: "parking", label: "Parking", bonus: 0.06 },
  { id: "ac", label: "Climatisation", bonus: 0.05 },
];

const SEASONS = [
  { label: "Haute saison", sub: "Juillet — Août", nights: 62, occ: 0.95, mult: 2.2 },
  { label: "Été étendu", sub: "Juin & Septembre", nights: 61, occ: 0.82, mult: 1.45 },
  { label: "Intersaison", sub: "Avr., Mai & Octobre", nights: 92, occ: 0.60, mult: 1.0 },
  { label: "Basse saison", sub: "Novembre — Mars", nights: 150, occ: 0.38, mult: 0.70 },
];

function fmt(n: number) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}

export default function EstimationPage() {
  const [loc, setLoc] = useState("nice");
  const [type, setType] = useState("t2");
  const [amenities, setAmenities] = useState<string[]>([]);

  const toggleAmenity = (id: string) =>
    setAmenities(prev => prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]);

  const result = useMemo(() => {
    const location = LOCATIONS.find(l => l.id === loc)!;
    const propType = TYPES.find(t => t.id === type)!;
    const amenityBonus = amenities.reduce((sum, id) => {
      const a = AMENITIES.find(a => a.id === id);
      return sum + (a?.bonus ?? 0);
    }, 0);
    const nightlyBase = propType.rate * location.mult * (1 + amenityBonus);

    const seasonRevenues = SEASONS.map(s => ({
      ...s,
      revenue: nightlyBase * s.mult * s.nights * s.occ,
      bookedNights: Math.round(s.nights * s.occ),
    }));

    const grossAnnual = seasonRevenues.reduce((sum, s) => sum + s.revenue, 0);
    const netAnnual = grossAnnual * 0.80;
    const netMonthly = netAnnual / 12;
    const maxSeasonRevenue = Math.max(...seasonRevenues.map(s => s.revenue));

    // Nouveaux indicateurs
    const totalBooked = seasonRevenues.reduce((sum, s) => sum + s.bookedNights, 0);
    const avgOccupancy = Math.round((totalBooked / 365) * 100);
    const peakNightly = Math.round(nightlyBase * SEASONS[0].mult);
    const selfManagedNet = grossAnnual * 0.68; // sans optimisation professionnelle
    const gainVsSelf = netAnnual - selfManagedNet;

    return { nightlyBase, seasonRevenues, grossAnnual, netAnnual, netMonthly, maxSeasonRevenue, avgOccupancy, peakNightly, selfManagedNet, gainVsSelf };
  }, [loc, type, amenities]);

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
    <main style={{ background: "var(--color-cream, #F5F0E8)" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "60vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <video
          autoPlay muted loop playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        >
          <source src="https://assets.mixkit.co/videos/40070/40070-720.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/50176/50176-720.mp4" type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,31,53,.9) 0%, rgba(12,31,53,.35) 60%, transparent 100%)" }} />
        <div style={{ position: "relative", width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "clamp(80px,10vw,120px) clamp(24px,4vw,52px) clamp(52px,7vw,72px)" }}>
          <RevealOnScroll>
            <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "rgba(201,169,110,.9)", marginBottom: "20px" }}>
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
              <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #C9A96E)", marginBottom: "20px" }}>
                Localisation
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {LOCATIONS.map(l => (
                  <button
                    key={l.id}
                    onClick={() => setLoc(l.id)}
                    style={{
                      ...btnBase,
                      border: loc === l.id ? "1px solid var(--color-navy, #0C1F35)" : "1px solid rgba(12,31,53,.15)",
                      background: loc === l.id ? "var(--color-navy, #0C1F35)" : "transparent",
                      color: loc === l.id ? "#fff" : "rgba(12,31,53,.65)",
                    }}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Type de bien */}
            <div>
              <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #C9A96E)", marginBottom: "20px" }}>
                Type de bien
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px" }}>
                {TYPES.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setType(t.id)}
                    style={{
                      padding: "18px 12px",
                      border: type === t.id ? "1px solid var(--color-navy, #0C1F35)" : "1px solid rgba(12,31,53,.12)",
                      background: type === t.id ? "var(--color-navy, #0C1F35)" : "#fff",
                      cursor: "pointer",
                      transition: "all .2s",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "22px", fontWeight: 300, color: type === t.id ? "#fff" : "var(--color-navy, #0C1F35)", lineHeight: 1 }}>
                      {t.label}
                    </div>
                    <div style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "10px", fontWeight: 300, color: type === t.id ? "rgba(255,255,255,.55)" : "rgba(12,31,53,.4)", marginTop: "6px" }}>
                      {t.sublabel}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Équipements */}
            <div>
              <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #C9A96E)", marginBottom: "20px" }}>
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
                        border: active ? "1px solid var(--color-gold, #C9A96E)" : "1px solid rgba(12,31,53,.15)",
                        background: active ? "rgba(201,169,110,.08)" : "transparent",
                        cursor: "pointer",
                        transition: "all .2s",
                        fontFamily: "var(--font-dm-sans, sans-serif)",
                        fontSize: "13px",
                        fontWeight: 300,
                        color: active ? "var(--color-navy, #0C1F35)" : "rgba(12,31,53,.6)",
                      }}
                    >
                      {active && (
                        <span style={{ color: "var(--color-gold, #C9A96E)", fontSize: "11px", fontWeight: 500 }}>✓</span>
                      )}
                      {a.label}
                      <span style={{ fontSize: "11px", color: active ? "var(--color-gold, #C9A96E)" : "rgba(12,31,53,.35)" }}>
                        +{Math.round(a.bonus * 100)}%
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Répartition saisonnière */}
            <div>
              <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #C9A96E)", marginBottom: "28px" }}>
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
                        <div style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "12px", fontWeight: 300, color: isPeak ? "var(--color-gold, #C9A96E)" : "rgba(12,31,53,.45)", textAlign: "center", marginBottom: "6px", whiteSpace: "nowrap" }}>
                          {fmt(s.revenue)}
                        </div>
                        <div style={{
                          width: "100%",
                          height: `${barH}%`,
                          background: isPeak ? "var(--color-gold, #C9A96E)" : "rgba(12,31,53,.1)",
                          transition: "height .5s ease",
                          minHeight: "6px",
                        }} />
                      </div>
                      <div style={{ paddingTop: "10px", textAlign: "center" }}>
                        <div style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "9px", fontWeight: isPeak ? 500 : 300, color: isPeak ? "var(--color-gold, #C9A96E)" : "rgba(12,31,53,.4)", letterSpacing: "0.5px" }}>
                          {s.label.split(' ')[0]}
                        </div>
                        <div style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "9px", fontWeight: 300, color: "rgba(12,31,53,.3)", marginTop: "2px" }}>
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
                  <div key={s.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid rgba(12,31,53,.06)" }}>
                    <div>
                      <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "13px", fontWeight: i === 0 ? 400 : 300, color: "var(--color-navy, #0C1F35)" }}>{s.label}</span>
                      <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "11px", fontWeight: 300, color: "rgba(12,31,53,.35)", marginLeft: "8px" }}>{s.sub}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                      <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "10px", color: "rgba(12,31,53,.35)" }}>{s.bookedNights} nuits</span>
                      <span style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "16px", fontWeight: 300, color: i === 0 ? "var(--color-gold, #C9A96E)" : "var(--color-navy, #0C1F35)", transition: "all .3s", minWidth: "72px", textAlign: "right" }}>
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
                  <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #C9A96E)" }}>
                    Votre estimation
                  </p>
                  <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "11px", fontWeight: 400, color: "var(--color-navy, #0C1F35)" }}>
                    {result.avgOccupancy}% occupé
                  </span>
                </div>
                <div style={{ height: "3px", background: "rgba(12,31,53,.08)", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${result.avgOccupancy}%`, background: "var(--color-navy, #0C1F35)", transition: "width .6s ease" }} />
                </div>
              </div>

              {/* Revenu net — chiffre principal */}
              <div style={{ paddingBottom: "20px", borderBottom: "1px solid rgba(12,31,53,.07)", marginBottom: "20px" }}>
                <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "11px", fontWeight: 300, color: "rgba(12,31,53,.45)", marginBottom: "6px" }}>
                  Revenus nets estimés / an
                </p>
                <div style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(36px,4.5vw,52px)", fontWeight: 300, color: "var(--color-navy, #0C1F35)", lineHeight: 1, transition: "all .3s" }}>
                  {fmt(result.netAnnual)}
                </div>
                <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "11px", fontWeight: 300, color: "rgba(12,31,53,.35)", marginTop: "6px" }}>
                  Après commission Riviera Concierge (20 %)
                </p>
              </div>

              {/* Détails */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingBottom: "20px", borderBottom: "1px solid rgba(12,31,53,.07)", marginBottom: "20px" }}>
                {[
                  { label: "Revenu brut annuel", value: fmt(result.grossAnnual) },
                  { label: "Revenu net / mois", value: fmt(result.netMonthly) },
                  { label: "Tarif moyen / nuit", value: fmt(result.nightlyBase) },
                  { label: "Saison haute / nuit", value: fmt(result.peakNightly) },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "12px", fontWeight: 300, color: "rgba(12,31,53,.5)" }}>
                      {label}
                    </span>
                    <span style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "17px", fontWeight: 300, color: "var(--color-navy, #0C1F35)", transition: "all .3s" }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Comparaison vs gestion seule */}
              <div style={{ background: "rgba(201,169,110,.07)", border: "1px solid rgba(201,169,110,.25)", padding: "16px", marginBottom: "20px" }}>
                <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "var(--color-gold, #C9A96E)", marginBottom: "14px" }}>
                  vs. gestion autonome
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "12px", fontWeight: 300, color: "rgba(12,31,53,.5)" }}>Sans accompagnement</span>
                    <span style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "16px", fontWeight: 300, color: "rgba(12,31,53,.5)", transition: "all .3s" }}>{fmt(result.selfManagedNet)}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "12px", fontWeight: 300, color: "var(--color-navy, #0C1F35)" }}>Avec Riviera Concierge</span>
                    <span style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "16px", fontWeight: 300, color: "var(--color-navy, #0C1F35)", transition: "all .3s" }}>{fmt(result.netAnnual)}</span>
                  </div>
                  <div style={{ height: "1px", background: "rgba(201,169,110,.2)", margin: "2px 0" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "12px", fontWeight: 500, color: "var(--color-navy, #0C1F35)" }}>Gain estimé</span>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                      <span style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "18px", fontWeight: 400, color: "var(--color-gold, #C9A96E)", transition: "all .3s" }}>+{fmt(result.gainVsSelf)}</span>
                      <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "10px", fontWeight: 500, color: "var(--color-gold, #C9A96E)", background: "rgba(201,169,110,.15)", padding: "2px 6px" }}>
                        +{Math.round((result.gainVsSelf / result.selfManagedNet) * 100)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link href="/contact" className="cta-btn-navy" style={{ textAlign: "center", display: "block" }}>
                Obtenir une estimation réelle <span>→</span>
              </Link>
              <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "10.5px", fontWeight: 300, color: "rgba(12,31,53,.3)", textAlign: "center", lineHeight: 1.6, marginTop: "12px" }}>
                Estimation indicative basée sur les moyennes du marché.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
