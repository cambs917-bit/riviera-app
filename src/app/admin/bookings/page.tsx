"use client";

import { useEffect, useState } from "react";

interface Booking {
  id: string;
  guestName: string;
  guestEmail: string;
  checkIn: string;
  checkOut: string;
  status: string;
  revenue: number;
  property: { id: string; name: string };
}

interface Property {
  id: string;
  name: string;
}

export default function AdminBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ propertyId: "", guestName: "", guestEmail: "", checkIn: "", checkOut: "", revenue: "" });

  useEffect(() => {
    fetch("/api/bookings").then((r) => r.json()).then(setBookings);
    fetch("/api/properties").then((r) => r.json()).then(setProperties);
  }, []);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, revenue: parseFloat(form.revenue) }),
    });
    const booking = await res.json();
    const prop = properties.find((p) => p.id === form.propertyId);
    setBookings([{ ...booking, property: prop || { id: "", name: "" } }, ...bookings]);
    setForm({ propertyId: "", guestName: "", guestEmail: "", checkIn: "", checkOut: "", revenue: "" });
    setShowForm(false);
  }

  async function handleDelete(id: string) {
    await fetch("/api/bookings", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setBookings(bookings.filter((b) => b.id !== id));
  }

  const totalRevenue = bookings.reduce((sum, b) => sum + b.revenue, 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-light font-[family-name:var(--font-cormorant)]">Réservations</h1>
          <p className="text-xs text-[var(--color-muted)] mt-1">Total : {totalRevenue.toLocaleString("fr-FR")} €</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="text-xs font-medium tracking-wider uppercase bg-[var(--color-navy)] text-white px-4 py-2.5 rounded hover:bg-[var(--color-gold)] transition-colors cursor-pointer"
        >
          + Nouvelle réservation
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleAdd} className="bg-white rounded-lg shadow-sm p-6 mb-6 grid grid-cols-2 gap-4">
          <select value={form.propertyId} onChange={(e) => setForm({ ...form, propertyId: e.target.value })} className="border border-black/10 px-4 py-2.5 text-sm font-light focus:outline-none focus:border-[var(--color-gold)]" required>
            <option value="">Sélectionner un bien</option>
            {properties.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
          <input placeholder="Nom du voyageur" value={form.guestName} onChange={(e) => setForm({ ...form, guestName: e.target.value })} className="border border-black/10 px-4 py-2.5 text-sm font-light focus:outline-none focus:border-[var(--color-gold)]" required />
          <input placeholder="Email du voyageur" type="email" value={form.guestEmail} onChange={(e) => setForm({ ...form, guestEmail: e.target.value })} className="border border-black/10 px-4 py-2.5 text-sm font-light focus:outline-none focus:border-[var(--color-gold)]" required />
          <input placeholder="Revenu (€)" type="number" step="0.01" value={form.revenue} onChange={(e) => setForm({ ...form, revenue: e.target.value })} className="border border-black/10 px-4 py-2.5 text-sm font-light focus:outline-none focus:border-[var(--color-gold)]" required />
          <input type="date" value={form.checkIn} onChange={(e) => setForm({ ...form, checkIn: e.target.value })} className="border border-black/10 px-4 py-2.5 text-sm font-light focus:outline-none focus:border-[var(--color-gold)]" required />
          <input type="date" value={form.checkOut} onChange={(e) => setForm({ ...form, checkOut: e.target.value })} className="border border-black/10 px-4 py-2.5 text-sm font-light focus:outline-none focus:border-[var(--color-gold)]" required />
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
              <th className="text-left text-[10px] font-medium tracking-wider uppercase text-[var(--color-muted)] p-4">Voyageur</th>
              <th className="text-left text-[10px] font-medium tracking-wider uppercase text-[var(--color-muted)] p-4">Bien</th>
              <th className="text-left text-[10px] font-medium tracking-wider uppercase text-[var(--color-muted)] p-4">Arrivée</th>
              <th className="text-left text-[10px] font-medium tracking-wider uppercase text-[var(--color-muted)] p-4">Départ</th>
              <th className="text-left text-[10px] font-medium tracking-wider uppercase text-[var(--color-muted)] p-4">Statut</th>
              <th className="text-left text-[10px] font-medium tracking-wider uppercase text-[var(--color-muted)] p-4">Revenu</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5">
            {bookings.map((b) => (
              <tr key={b.id} className="hover:bg-black/[.01]">
                <td className="p-4">
                  <p className="text-sm font-light">{b.guestName}</p>
                  <p className="text-[10px] text-[var(--color-muted)]">{b.guestEmail}</p>
                </td>
                <td className="p-4 text-sm font-light">{b.property.name}</td>
                <td className="p-4 text-sm font-light">{new Date(b.checkIn).toLocaleDateString("fr-FR")}</td>
                <td className="p-4 text-sm font-light">{new Date(b.checkOut).toLocaleDateString("fr-FR")}</td>
                <td className="p-4">
                  <span className={`text-[9px] tracking-wider uppercase px-2 py-0.5 rounded ${
                    b.status === "confirmed" ? "bg-green-50 text-green-600" : b.status === "cancelled" ? "bg-red-50 text-red-600" : "bg-gray-100 text-gray-500"
                  }`}>{b.status}</span>
                </td>
                <td className="p-4 text-sm font-light text-[var(--color-gold)]">{b.revenue.toLocaleString("fr-FR")} €</td>
                <td className="p-4">
                  <button onClick={() => handleDelete(b.id)} className="text-xs text-red-400 hover:text-red-600 cursor-pointer">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {bookings.length === 0 && (
          <p className="p-6 text-xs text-[var(--color-muted)] text-center">Aucune réservation</p>
        )}
      </div>
    </div>
  );
}
