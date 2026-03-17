"use client";

import { useEffect, useState } from "react";

interface Message {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  type: string;
  message: string;
  status: string;
  createdAt: string;
}

export default function AdminMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selected, setSelected] = useState<Message | null>(null);

  useEffect(() => {
    fetch("/api/messages").then((r) => r.json()).then(setMessages);
  }, []);

  async function updateStatus(id: string, status: string) {
    await fetch("/api/messages", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, status } : m)));
    if (selected?.id === id) setSelected({ ...selected, status });
  }

  return (
    <div>
      <h1 className="text-2xl font-light font-[family-name:var(--font-cormorant)] mb-8">Messages</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
        {/* List */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-4 border-b border-black/5">
            <p className="text-xs text-[var(--color-muted)]">{messages.length} message(s)</p>
          </div>
          <div className="divide-y divide-black/5">
            {messages.map((msg) => (
              <button
                key={msg.id}
                onClick={() => {
                  setSelected(msg);
                  if (msg.status === "new") updateStatus(msg.id, "read");
                }}
                className={`w-full text-left p-4 hover:bg-black/[.02] transition-colors cursor-pointer ${
                  selected?.id === msg.id ? "bg-[var(--color-gold)]/5" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-sm ${msg.status === "new" ? "font-medium" : "font-light"}`}>
                    {msg.firstName} {msg.lastName}
                  </span>
                  <span className={`text-[9px] tracking-wider uppercase px-2 py-0.5 rounded ${
                    msg.status === "new" ? "bg-blue-50 text-blue-600" : msg.status === "read" ? "bg-gray-100 text-gray-500" : "bg-green-50 text-green-600"
                  }`}>
                    {msg.status}
                  </span>
                </div>
                <p className="text-xs text-[var(--color-muted)] truncate">{msg.message}</p>
                <p className="text-[10px] text-[var(--color-muted)]/50 mt-1">
                  {new Date(msg.createdAt).toLocaleDateString("fr-FR")} — {msg.type}
                </p>
              </button>
            ))}
            {messages.length === 0 && (
              <p className="p-6 text-xs text-[var(--color-muted)] text-center">Aucun message</p>
            )}
          </div>
        </div>

        {/* Detail */}
        {selected && (
          <div className="bg-white rounded-lg shadow-sm p-6 h-fit sticky top-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-medium">{selected.firstName} {selected.lastName}</h2>
              <select
                value={selected.status}
                onChange={(e) => updateStatus(selected.id, e.target.value)}
                className="text-xs border border-black/10 rounded px-2 py-1"
              >
                <option value="new">Nouveau</option>
                <option value="read">Lu</option>
                <option value="replied">Répondu</option>
              </select>
            </div>
            <div className="space-y-3 text-xs">
              <div><span className="text-[var(--color-muted)]">Email :</span> <a href={`mailto:${selected.email}`} className="text-[var(--color-gold)]">{selected.email}</a></div>
              {selected.phone && <div><span className="text-[var(--color-muted)]">Tél :</span> {selected.phone}</div>}
              <div><span className="text-[var(--color-muted)]">Type :</span> {selected.type}</div>
              <div><span className="text-[var(--color-muted)]">Date :</span> {new Date(selected.createdAt).toLocaleString("fr-FR")}</div>
              <div className="pt-3 border-t border-black/5">
                <p className="text-sm font-light leading-relaxed whitespace-pre-wrap">{selected.message}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
