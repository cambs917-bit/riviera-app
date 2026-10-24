"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error ?? "Identifiants invalides");
      }
    } catch {
      setError("Erreur de connexion");
    }
    setLoading(false);
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-navy, #2B2620)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <div style={{ width: "100%", maxWidth: "380px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <svg width="36" height="40" viewBox="0 0 34 38" xmlns="http://www.w3.org/2000/svg" style={{ margin: "0 auto 16px" }}>
            <path stroke="rgba(176,118,79,.8)" strokeWidth="1.5" fill="none" d="M17 1 L32 7 L32 20 Q32 32 17 37 Q2 32 2 20 L2 7 Z"/>
            <text x="17" y="22" textAnchor="middle" fill="rgba(176,118,79,.9)" style={{ fontFamily: "serif", fontSize: "12px", fontWeight: 500 }}>M</text>
          </svg>
          <p style={{ fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9px", fontWeight: 300, letterSpacing: "4px", textTransform: "uppercase", color: "rgba(255,255,255,.4)" }}>
            Administration
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <label style={{ display: "block", fontFamily: "var(--font-josefin, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,.35)", marginBottom: "8px" }}>
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ width: "100%", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", padding: "12px 14px", color: "#fff", fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "13px", fontWeight: 300, outline: "none", boxSizing: "border-box" }}
            />
          </div>
          <div>
            <label style={{ display: "block", fontFamily: "var(--font-josefin, sans-serif)", fontSize: "8.5px", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,.35)", marginBottom: "8px" }}>
              Mot de passe
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ width: "100%", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", padding: "12px 14px", color: "#fff", fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "13px", fontWeight: 300, outline: "none", boxSizing: "border-box" }}
            />
          </div>

          {error && (
            <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "12px", fontWeight: 300, color: "#f87171", textAlign: "center" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{ marginTop: "8px", padding: "13px", border: "1px solid var(--color-gold, #B0764F)", background: "transparent", color: "var(--color-gold, #B0764F)", fontFamily: "var(--font-josefin, sans-serif)", fontSize: "9.5px", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", cursor: "pointer", transition: "all .2s" }}
          >
            {loading ? "Connexion…" : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
}
