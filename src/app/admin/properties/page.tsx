"use client";

import { useEffect, useState } from "react";

interface Property {
  id: string;
  name: string;
  address: string;
  city: string;
  owner: string;
  status: string;
  createdAt: string;
  bookings: { id: string; revenue: number }[];
}

export default function AdminProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", address: "", city: "", owner: "" });

  useEffect(() => {
    fetch("/api/properties").then((r) => r.json()).then(setProperties);
  }, []);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/properties", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const prop = await res.json();
    setProperties([{ ...prop, bookings: [] }, ...properties]);
    setForm({ name: "", address: "", city: "", owner: "" });
    setShowForm(false);
  }

  async function handleDelete(id: string) {
    await fetch("/api/properties", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setProperties(properties.filter((p) => p.id !== id));
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-light font-[family-name:var(--font-cormorant)]">Biens</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="text-xs font-medium tracking-wider uppercase bg-[var(--color-navy)] text-white px-4 py-2.5 rounded hover:bg-[var(--color-gold)] transition-colors cursor-pointer"
        >
          + Ajouter un bien
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleAdd} className="bg-white rounded-lg shadow-sm p-6 mb-6 grid grid-cols-2 gap-4">
          <input placeholder="Nom du bien" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="border border-black/10 px-4 py-2.5 text-sm font-light focus:outline-none focus:border-[var(--color-gold)]" required />
          <input placeholder="Propriétaire" value={form.owner} onChange={(e) => setForm({ ...form, owner: e.target.value })} className="border border-black/10 px-4 py-2.5 text-sm font-light focus:outline-none focus:border-[var(--color-gold)]" required />
          <input placeholder="Adresse" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="border border-black/10 px-4 py-2.5 text-sm font-light focus:outline-none focus:border-[var(--color-gold)]" required />
          <input placeholder="Ville" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="border border-black/10 px-4 py-2.5 text-sm font-light focus:outline-none focus:border-[var(--color-gold)]" required />
          <div className="col-span-2 flex gap-3">
            <button type="submit" className="text-xs font-medium tracking-wider uppercase bg-[var(--color-gold)] text-white px-6 py-2.5 rounded hover:bg-[var(--color-gold-dark)] transition-colors cursor-pointer">Enregistrer</button>
            <button type="button" onClick={() => setShowForm(false)} className="text-xs text-[var(--color-muted)] cursor-pointer">Annuler</button>
          </div>
        </form>
      )}

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-black/5">
              <th className="text-left text-[10px] font-medium tracking-wider uppercase text-[var(--color-muted)] p-4">Bien</th>
              <th className="text-left text-[10px] font-medium tracking-wider uppercase text-[var(--color-muted)] p-4">Ville</th>
              <th className="text-left text-[10px] font-medium tracking-wider uppercase text-[var(--color-muted)] p-4">Propriétaire</th>
              <th className="text-left text-[10px] font-medium tracking-wider uppercase text-[var(--color-muted)] p-4">Réservations</th>
              <th className="text-left text-[10px] font-medium tracking-wider uppercase text-[var(--color-muted)] p-4">Revenus</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5">
            {properties.map((p) => (
              <tr key={p.id} className="hover:bg-black/[.01]">
                <td className="p-4">
                  <p className="text-sm font-light">{p.name}</p>
                  <p className="text-[10px] text-[var(--color-muted)]">{p.address}</p>
                </td>
                <td className="p-4 text-sm font-light">{p.city}</td>
                <td className="p-4 text-sm font-light">{p.owner}</td>
                <td className="p-4 text-sm font-light">{p.bookings.length}</td>
                <td className="p-4 text-sm font-light text-[var(--color-gold)]">
                  {p.bookings.reduce((sum, b) => sum + b.revenue, 0).toLocaleString("fr-FR")} €
                </td>
                <td className="p-4">
                  <button onClick={() => handleDelete(p.id)} className="text-xs text-red-400 hover:text-red-600 cursor-pointer">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {properties.length === 0 && (
          <p className="p-6 text-xs text-[var(--color-muted)] text-center">Aucun bien enregistré</p>
        )}
      </div>
    </div>
  );
}
