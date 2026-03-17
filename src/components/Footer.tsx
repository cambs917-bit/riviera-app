"use client";
import Link from "next/link";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/#proprio", label: "Propriétaires" },
  { href: "/estimation", label: "Estimation" },
  { href: "/experience-voyageurs", label: "Voyageurs" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

const zones = ["Nice", "Cannes", "Antibes", "Saint-Tropez", "Monaco", "Menton"];

export default function Footer() {
  return (
    <footer style={{ background: "#080F1A" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(56px,8vw,96px) clamp(24px,4vw,56px) clamp(32px,4vw,48px)" }}>

        {/* ── TOP GRID ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: "clamp(32px,5vw,64px)", paddingBottom: "56px", borderBottom: "1px solid rgba(255,255,255,.07)" }}>

          {/* Col 1 — Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "center", justifyContent: "center" }}>
            {/* Logo wordmark — centré */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
              {/* RC shield icon */}
              <svg width="52" height="52" viewBox="0 0 40 40" fill="none">
                <path d="M20 2L4 9v12c0 9 7.2 16.4 16 18 8.8-1.6 16-9 16-18V9L20 2z" stroke="rgba(255,255,255,.55)" strokeWidth="1" fill="none"/>
                <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" style={{ fontFamily: "serif", fontSize: "12px", fill: "rgba(255,255,255,.9)", fontWeight: 400 }}>RC</text>
              </svg>
              <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "11px", fontWeight: 500, letterSpacing: "4px", textTransform: "uppercase", color: "rgba(255,255,255,.7)" }}>
                Riviera Concierge
              </span>
            </div>

            {/* Socials */}
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              {[
                { label: "Instagram", path: <><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></> },
                { label: "Facebook", path: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/> },
                { label: "LinkedIn", path: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></> },
              ].map(({ label, path }) => (
                <a key={label} href="#" aria-label={label} style={{ color: "rgba(255,255,255,.3)", transition: "color .2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--color-gold, #C9A96E)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.3)")}>
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {path}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h4 style={{ fontSize: "9px", fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(201,169,110,.7)", marginBottom: "22px" }}>
              Navigation
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {nav.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} style={{ fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,.42)", transition: "color .2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.42)")}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Zones */}
          <div>
            <h4 style={{ fontSize: "9px", fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(201,169,110,.7)", marginBottom: "22px" }}>
              Nos zones
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {zones.map(z => (
                <li key={z} style={{ fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,.35)" }}>{z}</li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 style={{ fontSize: "9px", fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(201,169,110,.7)", marginBottom: "22px" }}>
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="mailto:contact@riviera-concierge.fr" style={{ fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,.42)", transition: "color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.42)")}>
                contact@riviera-concierge.fr
              </a>
              <a href="tel:+33493000000" style={{ fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,.42)", transition: "color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.42)")}>
                +33 (0)4 93 XX XX XX
              </a>
              <a href="https://wa.me/33600000000" style={{ fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,.42)", transition: "color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.42)")}>
                WhatsApp
              </a>
              <div style={{ marginTop: "8px" }}>
                <Link href="/contact" style={{
                  display: "inline-block",
                  padding: "9px 20px",
                  border: "1px solid rgba(201,169,110,.4)",
                  fontSize: "10px", fontWeight: 500,
                  letterSpacing: "1.8px", textTransform: "uppercase",
                  color: "rgba(201,169,110,.8)",
                  transition: "all .22s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,169,110,.1)"; e.currentTarget.style.borderColor = "rgba(201,169,110,.7)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(201,169,110,.4)"; }}>
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", paddingTop: "28px" }}>
          <p style={{ fontSize: "11px", fontWeight: 300, color: "rgba(255,255,255,.18)", letterSpacing: "0.3px" }}>
            © 2025 Riviera Concierge — Tous droits réservés
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Mentions légales", "Confidentialité", "CGV"].map(l => (
              <a key={l} href="#" style={{ fontSize: "11px", fontWeight: 300, color: "rgba(255,255,255,.18)", transition: "color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,.5)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.18)")}>
                {l}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
