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
    { href: "/#proprio", label: "Propriétaires" },
    { href: "/estimation", label: "Estimation" },
    { href: "/experience-voyageurs", label: "Voyageurs" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[900] flex items-center justify-between px-[clamp(20px,4vw,52px)] transition-all duration-300 border-b ${
          stuck
            ? "bg-white border-black/[.07] py-5"
            : "bg-transparent border-transparent py-7"
        }`}
      >
        <Link href="/" className="flex items-center gap-3 font-[family-name:var(--font-playfair)] text-[13px] font-medium tracking-[3px] uppercase transition-colors duration-200"
          style={{ color: stuck ? "#111" : "#fff" }}>
          <svg className="w-[34px] h-[38px] shrink-0" viewBox="0 0 34 38" xmlns="http://www.w3.org/2000/svg">
            <path stroke={stuck ? "#111" : "#fff"} strokeWidth="1.5" fill="none" d="M17 1 L32 7 L32 20 Q32 32 17 37 Q2 32 2 20 L2 7 Z"/>
            <text x="17" y="22" textAnchor="middle" fill={stuck ? "#111" : "#fff"} style={{ fontFamily: "var(--display)", fontSize: "13px", fontWeight: 500, letterSpacing: "1px" }}>RC</text>
          </svg>
          Riviera Concierge
        </Link>

        <div className="flex items-center gap-7">
          <Link href="/contact"
            style={{ color: stuck ? "#111" : "#fff" }}
            className="hidden sm:inline-block text-[13.5px] font-medium tracking-[2px] uppercase transition-colors duration-200 hover:opacity-70">
            Confier mon bien
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            style={{ color: stuck ? "#111" : "#fff" }}
            className="flex items-center gap-3 text-[13.5px] font-medium tracking-[2px] uppercase cursor-pointer transition-colors duration-200 bg-transparent border-none hover:opacity-70">
            <span className="flex flex-col gap-[5px]">
              <span className={`block w-[18px] h-[1.5px] transition-colors ${stuck ? "bg-[#111]" : "bg-white"}`} />
              <span className={`block w-[12px] h-[1.5px] transition-colors ${stuck ? "bg-[#111]" : "bg-white"}`} />
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
          style={{ background: "var(--color-cream, #F5F0E8)" }}
        >
          {/* ── Header ── */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 40px", borderBottom: "1px solid rgba(12,31,53,.08)" }}>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg width="28" height="32" viewBox="0 0 34 38" xmlns="http://www.w3.org/2000/svg">
                <path stroke="#0C1F35" strokeWidth="1.5" fill="none" d="M17 1 L32 7 L32 20 Q32 32 17 37 Q2 32 2 20 L2 7 Z"/>
                <text x="17" y="22" textAnchor="middle" fill="#0C1F35" style={{ fontFamily: "serif", fontSize: "11px", fontWeight: 500, letterSpacing: "1px" }}>RC</text>
              </svg>
              <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "9.5px", fontWeight: 500, letterSpacing: "3.5px", textTransform: "uppercase", color: "var(--color-navy, #0C1F35)" }}>
                Riviera Concierge
              </span>
            </div>
            {/* Close */}
            <button
              onClick={() => setMenuOpen(false)}
              style={{ display: "flex", alignItems: "center", gap: "8px", background: "none", border: "1px solid rgba(12,31,53,.2)", padding: "7px 16px", cursor: "pointer", color: "rgba(12,31,53,.5)", fontSize: "10px", fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase", transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = "#0C1F35"; e.currentTarget.style.borderColor = "rgba(12,31,53,.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(12,31,53,.5)"; e.currentTarget.style.borderColor = "rgba(12,31,53,.2)"; }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              Fermer
            </button>
          </div>

          {/* ── Navigation ── */}
          <nav style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(32px,5vw,56px) 40px" }}>
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "14px 0", borderBottom: "1px solid rgba(12,31,53,.07)", textDecoration: "none", transition: "padding-left .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.paddingLeft = "8px"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.paddingLeft = "0"; }}
              >
                <span style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "2px", color: "var(--color-gold, #C9A96E)", minWidth: "20px" }}>
                  0{i + 1}
                </span>
                <span style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(24px,3.2vw,36px)", fontWeight: 300, color: "var(--color-navy, #0C1F35)", lineHeight: 1 }}>
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* ── Footer contact ── */}
          <div style={{ padding: "28px 40px", borderTop: "1px solid rgba(12,31,53,.08)", display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(201,169,110,.8)", marginBottom: "4px" }}>
              Nous contacter
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a href="mailto:contact@riviera-concierge.fr"
                style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "12px", fontWeight: 300, color: "rgba(12,31,53,.55)", textDecoration: "none", transition: "color .2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#0C1F35"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(12,31,53,.55)"; }}>
                contact@riviera-concierge.fr
              </a>
              <a href="tel:+33493000000"
                style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "12px", fontWeight: 300, color: "rgba(12,31,53,.55)", textDecoration: "none", transition: "color .2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#0C1F35"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(12,31,53,.55)"; }}>
                +33 (0)4 93 XX XX XX
              </a>
            </div>
            <div style={{ display: "flex", gap: "20px", paddingTop: "4px" }}>
              {[
                { label: "Instagram", d: <><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></> },
                { label: "Facebook", d: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/> },
              ].map(({ label, d }) => (
                <a key={label} href="#" aria-label={label}
                  style={{ color: "rgba(12,31,53,.3)", transition: "color .2s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--color-gold, #C9A96E)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(12,31,53,.3)"; }}>
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
