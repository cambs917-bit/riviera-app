"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      router.push("/admin");
    } else {
      setError(data.error || "Erreur de connexion");
    }
  }

  return (
    <div className="min-h-screen bg-[var(--color-navy)] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <h1 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-white">
            Riviera <em className="italic text-[var(--color-gold)]">Concierge</em>
          </h1>
          <p className="text-white/40 text-xs mt-2 tracking-widest uppercase">Administration</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 space-y-5">
          {error && (
            <div className="bg-red-50 text-red-600 text-xs p-3 rounded">{error}</div>
          )}

          <div>
            <label className="block text-[10px] font-medium tracking-widest uppercase text-[var(--color-muted)] mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-black/10 px-4 py-3 text-sm font-light focus:outline-none focus:border-[var(--color-gold)]"
              required
            />
          </div>

          <div>
            <label className="block text-[10px] font-medium tracking-widest uppercase text-[var(--color-muted)] mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-black/10 px-4 py-3 text-sm font-light focus:outline-none focus:border-[var(--color-gold)]"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[var(--color-navy)] text-white py-3 text-xs font-medium tracking-widest uppercase hover:bg-[var(--color-gold)] transition-colors disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
}
