"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [stuck, setStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/a-propos", label: "À propos" },
    { href: "/estimation", label: "Estimation" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/guide", label: "Réglementation" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[900] flex items-center justify-between transition-all duration-300 border-b ${
          stuck
            ? "bg-white border-black/[.07]"
            : "bg-transparent border-transparent"
        }`}
        style={{ paddingLeft: "clamp(20px,4vw,52px)" }}
      >
        <Link href="/" className="flex items-center" style={{ gap: "12px", textDecoration: "none", paddingTop: stuck ? "20px" : "28px", paddingBottom: stuck ? "20px" : "28px", transition: "padding .3s" }}>
          <span style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(21px,2.2vw,28px)", fontWeight: 500, letterSpacing: "5px", textTransform: "uppercase", color: stuck ? "#2B2620" : "#fff", lineHeight: 1 }}>
            MARELLE
          </span>
          <span style={{ width: "1px", height: "20px", background: stuck ? "rgba(43,38,32,.25)" : "rgba(255,255,255,.4)", display: "inline-block", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "10px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "#B0764F", lineHeight: 1 }}>
            HOME
          </span>
        </Link>

        <div className="flex items-center gap-5">
          <a href="https://neroli-services.fr" target="_blank" rel="noopener noreferrer"
            aria-label="Neroli — conciergerie lifestyle & services de luxe (nouvelle fenêtre)"
            style={{ color: stuck ? "#2B2620" : "#fff", fontSize: "13px", fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase" }}
            className="hidden md:inline-flex items-center gap-1.5 transition-opacity duration-200 hover:opacity-70">
            NEROLI
          </a>
          <Link href="/contact"
            className={`nav-cta ${stuck ? "nav-cta-stuck" : ""} hidden sm:inline-flex items-center text-[11px] font-medium tracking-[2.5px] uppercase whitespace-nowrap`}>
            Confier mon bien
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            style={{ color: stuck ? "#2B2620" : "#fff", paddingRight: "clamp(20px,4vw,52px)" }}
            className="flex items-center gap-3 text-[13.5px] font-medium tracking-[2px] uppercase cursor-pointer transition-colors duration-200 bg-transparent border-none hover:opacity-70">
            <span className="flex flex-col gap-[5px]" aria-hidden="true">
              <span className={`block w-[18px] h-[1.5px] transition-colors ${stuck ? "bg-[#2B2620]" : "bg-white"}`} />
              <span className={`block w-[12px] h-[1.5px] transition-colors ${stuck ? "bg-[#2B2620]" : "bg-white"}`} />
            </span>
            Menu
          </button>
        </div>
      </header>

      {/* ── MENU OVERLAY ── */}
      <div
        className={`fixed inset-0 z-[1000] flex transition-opacity duration-[380ms] ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="flex-1 bg-black/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Panel — slides in from right */}
        <div
          className={`w-full max-w-[520px] flex flex-col transition-transform duration-[420ms] ease-[cubic-bezier(.16,1,.3,1)] ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ background: "var(--color-cream, #F7F3EC)" }}
        >
          {/* ── Header ── */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 40px", borderBottom: "1px solid rgba(43,38,32,.08)" }}>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "17px", fontWeight: 400, letterSpacing: "4px", textTransform: "uppercase", color: "#2B2620", lineHeight: 1 }}>
                MARELLE
              </span>
              <span style={{ width: "1px", height: "16px", background: "rgba(43,38,32,.25)", display: "inline-block", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "2.5px", textTransform: "uppercase", color: "#B0764F", lineHeight: 1 }}>
                HOME
              </span>
            </div>
            {/* Close */}
            <button
              onClick={() => setMenuOpen(false)}
              style={{ display: "flex", alignItems: "center", gap: "8px", background: "none", border: "1px solid rgba(43,38,32,.2)", padding: "7px 16px", cursor: "pointer", color: "rgba(43,38,32,.5)", fontSize: "10px", fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase", transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = "#2B2620"; e.currentTarget.style.borderColor = "rgba(43,38,32,.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(43,38,32,.5)"; e.currentTarget.style.borderColor = "rgba(43,38,32,.2)"; }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              Fermer
            </button>
          </div>

          {/* ── Navigation ── */}
          <nav aria-label="Menu principal" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(32px,5vw,56px) 40px" }}>
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "14px 0", borderBottom: "1px solid rgba(43,38,32,.07)", textDecoration: "none", transition: "padding-left .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.paddingLeft = "8px"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.paddingLeft = "0"; }}
              >
                <span style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "2px", color: "var(--color-gold, #B0764F)", minWidth: "20px" }}>
                  0{i + 1}
                </span>
                <span style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(24px,3.2vw,36px)", fontWeight: 300, color: "var(--color-navy, #2B2620)", lineHeight: 1 }}>
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* ── Partenaire lifestyle ── */}
          <a href="https://neroli-services.fr" target="_blank" rel="noopener noreferrer"
            aria-label="Neroli — conciergerie lifestyle & services de luxe (nouvelle fenêtre)"
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 40px", borderTop: "1px solid rgba(43,38,32,.08)", textDecoration: "none" }}>
            <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(176,118,79,.85)" }}>
                Notre partenaire lifestyle
              </span>
              <span style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "21px", fontWeight: 400, letterSpacing: "3px", textTransform: "uppercase", color: "var(--color-navy, #2B2620)", lineHeight: 1 }}>
                NEROLI
              </span>
            </span>
            <span aria-hidden="true" style={{ color: "var(--color-terracotta, #B0764F)", fontSize: "18px" }}>↗</span>
          </a>

          {/* ── Footer contact ── */}
          <div style={{ padding: "28px 40px", borderTop: "1px solid rgba(43,38,32,.08)", display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(176,118,79,.8)", marginBottom: "4px" }}>
              Nous contacter
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a href="mailto:contact@marelle-home.fr"
                style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "12px", fontWeight: 300, color: "rgba(43,38,32,.55)", textDecoration: "none", transition: "color .2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#2B2620"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(43,38,32,.55)"; }}>
                contact@marelle-home.fr
              </a>
              <a href="tel:+33675064828"
                style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "12px", fontWeight: 300, color: "rgba(43,38,32,.55)", textDecoration: "none", transition: "color .2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#2B2620"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(43,38,32,.55)"; }}>
                06 75 06 48 28
              </a>
            </div>
            <div style={{ display: "flex", gap: "20px", paddingTop: "4px" }}>
              {[
                { label: "Instagram", d: <><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></> },
                { label: "Facebook", d: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/> },
              ].map(({ label, d }) => (
                <a key={label} href="#" aria-label={label}
                  style={{ color: "rgba(43,38,32,.3)", transition: "color .2s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--color-gold, #B0764F)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(43,38,32,.3)"; }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {d}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
