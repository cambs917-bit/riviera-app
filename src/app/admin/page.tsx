import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export default async function AdminDashboard() {
  await requireAdmin();

  const [messageCount, propertyCount, bookingCount, totalRevenue, recentMessages, recentBookings] = await Promise.all([
    prisma.contactMessage.count(),
    prisma.property.count(),
    prisma.booking.count(),
    prisma.booking.aggregate({ _sum: { revenue: true } }),
    prisma.contactMessage.findMany({ take: 5, orderBy: { createdAt: "desc" } }),
    prisma.booking.findMany({ take: 5, orderBy: { createdAt: "desc" }, include: { property: true } }),
  ]);

  const stats = [
    { label: "Messages", value: messageCount, color: "bg-blue-500" },
    { label: "Biens", value: propertyCount, color: "bg-emerald-500" },
    { label: "Réservations", value: bookingCount, color: "bg-purple-500" },
    { label: "Revenus", value: `${(totalRevenue._sum.revenue || 0).toLocaleString("fr-FR")} €`, color: "bg-[var(--color-gold)]" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-light font-[family-name:var(--font-cormorant)] mb-8">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((s) => (
          <div key={s.label} className="bg-white p-6 rounded-lg shadow-sm">
            <div className={`w-2 h-2 rounded-full ${s.color} mb-3`} />
            <p className="text-2xl font-light">{s.value}</p>
            <p className="text-xs text-[var(--color-muted)] mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent messages */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-sm font-medium mb-4">Messages récents</h2>
          {recentMessages.length === 0 ? (
            <p className="text-xs text-[var(--color-muted)]">Aucun message</p>
          ) : (
            <div className="space-y-3">
              {recentMessages.map((msg) => (
                <div key={msg.id} className="flex items-start justify-between py-2 border-b border-black/5 last:border-0">
                  <div>
                    <p className="text-sm font-light">{msg.firstName} {msg.lastName}</p>
                    <p className="text-xs text-[var(--color-muted)]">{msg.email}</p>
                  </div>
                  <span className={`text-[9px] tracking-wider uppercase px-2 py-0.5 rounded ${
                    msg.status === "new" ? "bg-blue-50 text-blue-600" : msg.status === "read" ? "bg-gray-100 text-gray-500" : "bg-green-50 text-green-600"
                  }`}>
                    {msg.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent bookings */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-sm font-medium mb-4">Réservations récentes</h2>
          {recentBookings.length === 0 ? (
            <p className="text-xs text-[var(--color-muted)]">Aucune réservation</p>
          ) : (
            <div className="space-y-3">
              {recentBookings.map((b) => (
                <div key={b.id} className="flex items-start justify-between py-2 border-b border-black/5 last:border-0">
                  <div>
                    <p className="text-sm font-light">{b.guestName}</p>
                    <p className="text-xs text-[var(--color-muted)]">{b.property.name}</p>
                  </div>
                  <span className="text-sm font-light text-[var(--color-gold)]">{b.revenue.toLocaleString("fr-FR")} €</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
