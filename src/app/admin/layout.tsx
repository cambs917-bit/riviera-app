import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f5f5f3]">
      {/* Admin sidebar */}
      <aside className="fixed top-0 left-0 w-56 h-screen bg-[var(--color-navy)] text-white flex flex-col z-50">
        <div className="p-6 border-b border-white/10">
          <Link href="/" className="font-[family-name:var(--font-cormorant)] text-lg font-light">
            Riviera <em className="italic text-[var(--color-gold)]">Concierge</em>
          </Link>
          <p className="text-[9px] tracking-widest uppercase text-white/30 mt-1">Administration</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <AdminLink href="/admin" label="Dashboard" icon="◉" />
          <AdminLink href="/admin/messages" label="Messages" icon="✉" />
          <AdminLink href="/admin/properties" label="Biens" icon="⌂" />
          <AdminLink href="/admin/bookings" label="Réservations" icon="◈" />
        </nav>

        <div className="p-4 border-t border-white/10">
          <form action="/api/auth" method="DELETE">
            <button className="text-xs text-white/40 hover:text-white transition-colors cursor-pointer">
              Déconnexion
            </button>
          </form>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-56 p-8">
        {children}
      </main>
    </div>
  );
}

function AdminLink({ href, label, icon }: { href: string; label: string; icon: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-3 py-2.5 rounded text-sm font-light text-white/60 hover:text-white hover:bg-white/5 transition-colors"
    >
      <span className="text-base">{icon}</span>
      {label}
    </Link>
  );
}
