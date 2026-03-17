"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  { n: "01", title: "Création & optimisation d'annonce", desc: "Nous rédigeons des descriptions captivantes, organisons les séances photo professionnelles et optimisons votre positionnement sur toutes les plateformes de réservation.", img1: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80", img2: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80" },
  { n: "02", title: "Gestion des réservations", desc: "Synchronisation des calendriers sur toutes les plateformes, filtrage rigoureux des voyageurs et validation automatique des demandes conformes à vos critères.", img1: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80", img2: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80" },
  { n: "03", title: "Communication voyageurs 24/7", desc: "Réponse rapide aux messages avant, pendant et après le séjour. Gestion des demandes spéciales et suivi en temps réel de la satisfaction.", img1: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80", img2: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=600&q=80" },
  { n: "04", title: "Optimisation des prix", desc: "Tarification dynamique basée sur l'analyse de la demande locale, des événements saisonniers et de la concurrence pour maximiser vos revenus.", img1: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80", img2: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=600&q=80" },
  { n: "05", title: "Ménage & linge", desc: "Nettoyage professionnel entre chaque séjour avec du linge hôtelier de qualité. Contrôle qualité systématique avant chaque arrivée.", img1: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80", img2: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=80" },
  { n: "06", title: "Check-in / Check-out", desc: "Accueil personnalisé des voyageurs avec remise des clés, visite guidée du logement et état des lieux d'entrée et de sortie.", img1: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80", img2: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=600&q=80" },
  { n: "07", title: "Maintenance & assistance", desc: "Équipe de professionnels (plombiers, serruriers, électriciens) disponibles rapidement pour toute intervention sur votre bien.", img1: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=600&q=80", img2: "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80" },
];

export default function ServicesPage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.indexOf(entry.target as HTMLElement);
            if (idx >= 0) setActiveIdx(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    sectionRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-[var(--color-cream)]">
      {/* Hero */}
      <div className="pt-32 pb-16 px-[clamp(20px,4vw,52px)] text-center">
        <span className="text-[10px] font-medium tracking-[4px] uppercase text-[var(--color-gold)]">Services</span>
        <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(32px,4vw,52px)] font-light mt-6 leading-tight">
          Nos expertises
        </h1>
        <p className="text-sm font-light text-[var(--color-muted)] mt-4 max-w-lg mx-auto">
          Une connaissance approfondie du marché et des outils performants au service de votre bien.
        </p>
      </div>

      {/* Two-panel layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] items-start">
        {/* Left: sticky nav */}
        <nav className="hidden lg:flex sticky top-[72px] h-[calc(100vh-72px)] flex-col justify-center px-12 border-r border-black/[.06]">
          <div className="flex flex-col gap-1">
            {services.map((svc, i) => (
              <button
                key={svc.n}
                onClick={() => sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth" })}
                className={`flex items-center gap-3 text-left py-2 transition-all cursor-pointer ${
                  i === activeIdx ? "text-[var(--color-dark)]" : "text-[var(--color-muted)]/50"
                }`}
              >
                <span className={`inline-block w-2 h-2 rounded-full border transition-all ${
                  i === activeIdx ? "border-[var(--color-gold)] bg-[var(--color-gold)]" : "border-[var(--color-muted)]/30"
                }`} />
                <span className="text-sm font-light">{svc.title}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Right: sections */}
        <div>
          {services.map((svc, i) => (
            <section
              key={svc.n}
              ref={(el) => { sectionRefs.current[i] = el; }}
              className={`min-h-screen p-[clamp(40px,5vw,80px)] flex flex-col justify-center ${
                i % 2 === 0 ? "bg-white" : "bg-[var(--color-cream)]"
              }`}
            >
              <span className="font-[family-name:var(--font-cormorant)] text-6xl font-light text-[var(--color-gold)]/20">{svc.n}</span>
              <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(24px,2.5vw,36px)] font-light italic mt-4 mb-6">{svc.title}</h2>
              <p className="text-[clamp(17px,1.6vw,21px)] font-light text-[var(--color-muted)] leading-relaxed max-w-xl mb-10">{svc.desc}</p>
              <div className="grid grid-cols-2 gap-4">
                <img src={svc.img1} alt={svc.title} className="w-full h-[250px] object-cover" loading="lazy" />
                <img src={svc.img2} alt={svc.title} className="w-full h-[250px] object-cover mt-8" loading="lazy" />
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
