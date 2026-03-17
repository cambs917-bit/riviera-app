"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

const LOCATIONS = [
  { id: "nice", label: "Nice", mult: 1.0 },
  { id: "antibes", label: "Antibes", mult: 1.1 },
  { id: "cannes", label: "Cannes", mult: 1.3 },
  { id: "menton", label: "Menton", mult: 0.88 },
  { id: "monaco", label: "Monaco", mult: 1.75 },
  { id: "saint-tropez", label: "Saint-Tropez", mult: 1.95 },
];

const TYPES = [
  { id: "studio", label: "Studio", sublabel: "jusqu'à 2 pers.", rate: 85 },
  { id: "t2", label: "T2", sublabel: "2–4 pers.", rate: 120 },
  { id: "t3", label: "T3", sublabel: "4–6 pers.", rate: 170 },
  { id: "t4", label: "T4+", sublabel: "6–8 pers.", rate: 240 },
  { id: "villa", label: "Villa", sublabel: "8+ pers.", rate: 390 },
];

const AMENITIES = [
  { id: "sea", label: "Vue mer", bonus: 0.18 },
  { id: "pool", label: "Piscine", bonus: 0.22 },
  { id: "terrace", label: "Terrasse", bonus: 0.08 },
  { id: "parking", label: "Parking", bonus: 0.06 },
  { id: "ac", label: "Climatisation", bonus: 0.05 },
];

const SEASONS = [
  { label: "Haute saison", sub: "Juillet — Août", nights: 62, occ: 0.92, mult: 1.9 },
  { label: "Été étendu", sub: "Juin & Septembre", nights: 61, occ: 0.80, mult: 1.35 },
  { label: "Intersaison", sub: "Avr., Mai & Octobre", nights: 92, occ: 0.58, mult: 1.0 },
  { label: "Basse saison", sub: "Novembre — Mars", nights: 150, occ: 0.42, mult: 0.75 },
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

    return { nightlyBase, seasonRevenues, grossAnnual, netAnnual, netMonthly, maxSeasonRevenue };
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
        <img
          src="/images/gallery/prop1.jpg"
          alt="Estimation locative Riviera"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
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
              <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #C9A96E)", marginBottom: "24px" }}>
                Répartition saisonnière estimée
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                {result.seasonRevenues.map((s) => (
                  <div key={s.label}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
                      <div>
                        <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "13px", fontWeight: 400, color: "var(--color-navy, #0C1F35)" }}>
                          {s.label}
                        </span>
                        <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "11px", fontWeight: 300, color: "rgba(12,31,53,.4)", marginLeft: "10px" }}>
                          {s.sub} · {s.bookedNights} nuits
                        </span>
                      </div>
                      <span style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "17px", fontWeight: 300, color: "var(--color-navy, #0C1F35)" }}>
                        {fmt(s.revenue)}
                      </span>
                    </div>
                    <div style={{ height: "2px", background: "rgba(12,31,53,.08)", borderRadius: "2px", overflow: "hidden" }}>
                      <div style={{
                        height: "100%",
                        width: `${(s.revenue / result.maxSeasonRevenue) * 100}%`,
                        background: "var(--color-gold, #C9A96E)",
                        transition: "width .5s ease",
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── DROITE — résultats sticky ── */}
          <div style={{ position: "sticky", top: "100px" }}>
            <div style={{ background: "#fff", padding: "clamp(28px,4vw,40px)" }}>
              <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #C9A96E)", marginBottom: "28px" }}>
                Votre estimation
              </p>

              {/* Revenu net — chiffre principal */}
              <div style={{ paddingBottom: "24px", borderBottom: "1px solid rgba(12,31,53,.07)", marginBottom: "24px" }}>
                <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "11px", fontWeight: 300, color: "rgba(12,31,53,.45)", marginBottom: "8px", letterSpacing: "0.3px" }}>
                  Revenus nets estimés / an
                </p>
                <div style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(40px,5vw,56px)", fontWeight: 300, color: "var(--color-navy, #0C1F35)", lineHeight: 1, transition: "all .3s" }}>
                  {fmt(result.netAnnual)}
                </div>
                <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "11px", fontWeight: 300, color: "rgba(12,31,53,.35)", marginTop: "8px" }}>
                  Après commission Riviera Concierge (20 %)
                </p>
              </div>

              {/* Détails */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", paddingBottom: "28px", borderBottom: "1px solid rgba(12,31,53,.07)", marginBottom: "28px" }}>
                {[
                  { label: "Revenu brut annuel", value: fmt(result.grossAnnual) },
                  { label: "Revenu net / mois (moy.)", value: fmt(result.netMonthly) },
                  { label: "Tarif moyen / nuit", value: fmt(result.nightlyBase) },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "12px", fontWeight: 300, color: "rgba(12,31,53,.5)" }}>
                      {label}
                    </span>
                    <span style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "18px", fontWeight: 300, color: "var(--color-navy, #0C1F35)", transition: "all .3s" }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link href="/contact" className="cta-btn-navy" style={{ textAlign: "center", display: "block" }}>
                Obtenir une estimation réelle <span>→</span>
              </Link>
              <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "11px", fontWeight: 300, color: "rgba(12,31,53,.3)", textAlign: "center", lineHeight: 1.6, marginTop: "14px" }}>
                Estimation indicative basée sur les moyennes du marché. Les revenus réels varient selon l&apos;emplacement exact et l&apos;état du bien.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
