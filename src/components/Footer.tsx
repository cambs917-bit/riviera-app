"use client";
import Link from "next/link";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/estimation", label: "Estimation" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/guide", label: "Réglementation" },
  { href: "/contact", label: "Contact" },
];

const zones = ["Cannes", "Antibes", "Saint-Tropez", "Menton"];

export default function Footer() {
  return (
    <footer style={{ background: "#EAE3D7" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(56px,8vw,96px) clamp(24px,4vw,56px) clamp(32px,4vw,48px)" }}>

        {/* ── TOP GRID ── */}
        <div className="footer-grid" style={{ paddingBottom: "56px", borderBottom: "1px solid rgba(43,38,32,.1)" }}>

          {/* Col 1 — Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "20px", fontWeight: 400, letterSpacing: "4px", textTransform: "uppercase", color: "#2B2620", lineHeight: 1 }}>
                MARELLE
              </span>
              <span style={{ width: "1px", height: "18px", background: "rgba(43,38,32,.2)", display: "inline-block", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "2.5px", textTransform: "uppercase", color: "#B0764F", lineHeight: 1 }}>
                HOME
              </span>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h4 style={{ fontSize: "9px", fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase", color: "#B0764F", marginBottom: "22px" }}>
              Navigation
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {nav.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} style={{ fontSize: "13px", fontWeight: 300, color: "rgba(43,38,32,.5)", transition: "color .2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#2B2620")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(43,38,32,.5)")}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Zones */}
          <div>
            <h4 style={{ fontSize: "9px", fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase", color: "#B0764F", marginBottom: "22px" }}>
              Nos zones
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {zones.map(z => (
                <li key={z} style={{ fontSize: "13px", fontWeight: 300, color: "rgba(43,38,32,.4)" }}>{z}</li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 style={{ fontSize: "9px", fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase", color: "#B0764F", marginBottom: "22px" }}>
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="mailto:contact@marelle-home.fr" style={{ fontSize: "13px", fontWeight: 300, color: "rgba(43,38,32,.5)", transition: "color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#2B2620")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(43,38,32,.5)")}>
                contact@marelle-home.fr
              </a>
              <a href="tel:+33675064828" style={{ fontSize: "13px", fontWeight: 300, color: "rgba(43,38,32,.5)", transition: "color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#2B2620")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(43,38,32,.5)")}>
                06 75 06 48 28
              </a>
              <a href="https://wa.me/33675064828" style={{ fontSize: "13px", fontWeight: 300, color: "rgba(43,38,32,.5)", transition: "color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#2B2620")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(43,38,32,.5)")}>
                WhatsApp
              </a>
              <div style={{ marginTop: "8px" }}>
                <Link href="/contact" style={{
                  display: "inline-block",
                  padding: "9px 20px",
                  border: "1px solid #B0764F",
                  fontSize: "10px", fontWeight: 500,
                  letterSpacing: "1.8px", textTransform: "uppercase",
                  color: "#fff",
                  background: "#B0764F",
                  transition: "all .22s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#955F3C"; e.currentTarget.style.borderColor = "#955F3C"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#B0764F"; e.currentTarget.style.borderColor = "#B0764F"; }}>
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", paddingTop: "28px" }}>
          <p style={{ fontSize: "11px", fontWeight: 300, color: "rgba(43,38,32,.3)", letterSpacing: "0.3px" }}>
            © 2026 Marelle Home — Tous droits réservés
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <>
              <Link href="/mentions-legales" style={{ fontSize: "11px", fontWeight: 300, color: "rgba(43,38,32,.3)", transition: "color .2s", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(43,38,32,.7)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(43,38,32,.3)")}>
                Mentions légales
              </Link>
              <Link href="/confidentialite" style={{ fontSize: "11px", fontWeight: 300, color: "rgba(43,38,32,.3)", transition: "color .2s", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(43,38,32,.7)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(43,38,32,.3)")}>
                Confidentialité
              </Link>
              <Link href="/cgv" style={{ fontSize: "11px", fontWeight: 300, color: "rgba(43,38,32,.3)", transition: "color .2s", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(43,38,32,.7)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(43,38,32,.3)")}>
                CGV
              </Link>
            </>
          </div>
        </div>

      </div>
    </footer>
  );
}
