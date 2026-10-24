"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("rc_cookie_consent");
      if (!consent) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    try { localStorage.setItem("rc_cookie_consent", "accepted"); } catch {}
    try { window.dispatchEvent(new Event("rc-consent-change")); } catch {}
    setVisible(false);
  }

  function refuse() {
    try { localStorage.setItem("rc_cookie_consent", "refused"); } catch {}
    try { window.dispatchEvent(new Event("rc-consent-change")); } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Paramètres cookies"
      style={{
        position: "fixed",
        bottom: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        width: "min(calc(100vw - 32px), 720px)",
        background: "#fff",
        boxShadow: "0 8px 40px rgba(43,38,32,.14)",
        padding: "24px 28px",
        display: "flex",
        alignItems: "center",
        gap: "24px",
        flexWrap: "wrap",
        borderTop: "2px solid var(--color-gold, #B0764F)",
      }}
    >
      <p style={{
        flex: 1,
        minWidth: "220px",
        fontFamily: "var(--font-dm-sans, sans-serif)",
        fontSize: "12.5px",
        fontWeight: 300,
        color: "rgba(43,38,32,.7)",
        lineHeight: 1.65,
        margin: 0,
      }}>
        Ce site utilise des cookies strictement nécessaires à son fonctionnement. Certaines pages affichent des vidéos hébergées sur des serveurs tiers (Pexels / Envato Mixkit) dont le chargement transmet votre adresse IP à ces prestataires. Aucun cookie publicitaire. En cliquant sur « Accepter », vous consentez à ces traitements.{" "}
        <Link href="/confidentialite" style={{ color: "var(--color-gold, #B0764F)", textDecoration: "underline" }}>
          En savoir plus
        </Link>
      </p>

      <div style={{ display: "flex", gap: "12px", flexShrink: 0 }}>
        <button
          onClick={refuse}
          style={{
            padding: "9px 20px",
            border: "1px solid var(--color-navy, #2B2620)",
            background: "transparent",
            fontFamily: "var(--font-josefin, sans-serif)",
            fontSize: "9px",
            fontWeight: 300,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "var(--color-navy, #2B2620)",
            cursor: "pointer",
            transition: "all .2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(43,38,32,.05)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
        >
          Refuser
        </button>
        <button
          onClick={accept}
          style={{
            padding: "9px 20px",
            border: "1px solid var(--color-navy, #2B2620)",
            background: "var(--color-navy, #2B2620)",
            fontFamily: "var(--font-josefin, sans-serif)",
            fontSize: "9px",
            fontWeight: 300,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "#fff",
            cursor: "pointer",
            transition: "all .2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#3A332B"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "var(--color-navy, #2B2620)"; }}
        >
          Accepter
        </button>
      </div>
    </div>
  );
}
