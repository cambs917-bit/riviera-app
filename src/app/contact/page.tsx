"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSent(true);
      form.reset();
    } catch { /* ignore */ }
    setLoading(false);
  }

  const inputStyle = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(12,31,53,.15)",
    padding: "12px 0",
    fontFamily: "var(--font-dm-sans, sans-serif)",
    fontSize: "14px",
    fontWeight: 300,
    color: "var(--color-navy, #0C1F35)",
    outline: "none",
  };

  const labelStyle = {
    display: "block",
    fontFamily: "var(--font-josefin, sans-serif)",
    fontSize: "8.5px",
    fontWeight: 300,
    letterSpacing: "3px",
    textTransform: "uppercase" as const,
    color: "rgba(12,31,53,.45)",
    marginBottom: "10px",
  };

  return (
    <main style={{ background: "var(--color-cream, #F5F0E8)" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "60vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <img
          src="/images/gallery/prop2.jpg"
          alt="Riviera Concierge"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,31,53,.88) 0%, rgba(12,31,53,.35) 55%, transparent 100%)" }} />
        <div style={{ position: "relative", width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "clamp(80px,10vw,120px) clamp(24px,4vw,52px) clamp(52px,7vw,72px)" }}>
          <RevealOnScroll>
            <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9.5px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "rgba(201,169,110,.9)", marginBottom: "20px" }}>
              Contact
            </p>
            <h1 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(36px,5vw,64px)", fontWeight: 300, color: "#fff", lineHeight: 1.1, maxWidth: "600px" }}>
              Parlons de<br />
              <em style={{ fontStyle: "italic" }}>votre projet.</em>
            </h1>
            <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "clamp(13px,1.4vw,15px)", fontWeight: 300, color: "rgba(255,255,255,.55)", marginTop: "20px", maxWidth: "440px", lineHeight: 1.7 }}>
              Propriétaire ou futur voyageur, nous vous répondons sous 24h.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CONTENU ── */}
      <section style={{ padding: "clamp(64px,9vw,100px) clamp(24px,4vw,52px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "clamp(48px,8vw,100px)", alignItems: "start" }}>

          {/* ── Infos contact ── */}
          <RevealOnScroll>
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              <div>
                <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #C9A96E)", marginBottom: "32px" }}>
                  Nos coordonnées
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                  {[
                    { label: "Téléphone", value: "+33 (0)4 93 XX XX XX", href: "tel:+33493000000" },
                    { label: "Email", value: "contact@riviera-concierge.fr", href: "mailto:contact@riviera-concierge.fr" },
                    { label: "Localisation", value: "Côte d'Azur — Nice, Cannes, Antibes, Monaco", href: null },
                  ].map(({ label, value, href }) => (
                    <div key={label} style={{ borderBottom: "1px solid rgba(12,31,53,.07)", paddingBottom: "20px" }}>
                      <div style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(12,31,53,.4)", marginBottom: "8px" }}>
                        {label}
                      </div>
                      {href ? (
                        <a href={href} style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(16px,1.8vw,20px)", fontWeight: 300, color: "var(--color-navy, #0C1F35)", textDecoration: "none" }}>
                          {value}
                        </a>
                      ) : (
                        <p style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "clamp(16px,1.8vw,20px)", fontWeight: 300, color: "var(--color-navy, #0C1F35)" }}>
                          {value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/33600000000"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "12px 20px", border: "1px solid #25D366", color: "#25D366", fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9.5px", fontWeight: 300, letterSpacing: "2.5px", textTransform: "uppercase", textDecoration: "none", alignSelf: "flex-start", transition: "all .2s" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.073 23.927l6.243-1.635A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.518-5.162-1.418l-.37-.22-3.708.972.99-3.613-.242-.373A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                Écrire sur WhatsApp
              </a>
            </div>
          </RevealOnScroll>

          {/* ── Formulaire ── */}
          <RevealOnScroll delay={0.15}>
            <div style={{ background: "#fff", padding: "clamp(36px,5vw,56px)" }}>
              <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "var(--color-gold, #C9A96E)", marginBottom: "32px" }}>
                Votre demande
              </p>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                  <div>
                    <label style={labelStyle}>Prénom</label>
                    <input name="firstName" type="text" placeholder="Jean" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Nom</label>
                    <input name="lastName" type="text" placeholder="Dupont" required style={inputStyle} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input name="email" type="email" placeholder="jean@email.fr" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Téléphone</label>
                    <input name="phone" type="tel" placeholder="+33 6 XX XX XX XX" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Objet</label>
                  <select name="type" required style={{ ...inputStyle, appearance: "none" as const, cursor: "pointer" }}>
                    <option value="" disabled>Sélectionner…</option>
                    <option>Propriétaire — confier mon bien</option>
                    <option>Propriétaire — estimation de revenus</option>
                    <option>Voyageur — question sur un séjour</option>
                    <option>Autre demande</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea name="message" placeholder="Décrivez votre projet ou votre question…" required style={{ ...inputStyle, resize: "none", minHeight: "100px" }} />
                </div>
                <div style={{ paddingTop: "8px", display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                  <button type="submit" disabled={loading} className="cta-btn-navy" style={{ cursor: "pointer", border: "1px solid var(--color-navy, #0C1F35)" }}>
                    {loading ? "Envoi en cours…" : "Envoyer ma demande"}
                  </button>
                  {sent && (
                    <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "13px", fontWeight: 300, fontStyle: "italic", color: "var(--color-gold, #C9A96E)" }}>
                      Message envoyé — nous revenons vers vous sous 24h.
                    </p>
                  )}
                </div>
                <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "11px", fontWeight: 300, color: "rgba(12,31,53,.35)", lineHeight: 1.6 }}>
                  Vos données sont traitées uniquement dans le cadre de votre demande et ne sont jamais transmises à des tiers.
                </p>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </main>
  );
}
