"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

interface Props {
  images: { src: string; alt: string }[];
}

export default function HoverGallery({ images }: Props) {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-[var(--color-navy)] py-[clamp(72px,10vw,120px)] px-[clamp(20px,4vw,52px)]">
      <div className="max-w-[1200px] mx-auto text-center">
        <RevealOnScroll>
          <span className="eb" style={{ color: "rgba(255,255,255,.25)" }}>Portfolio</span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(28px,3.5vw,44px)] font-light text-white mt-4">
            Nos propriétés d&apos;exception
          </h2>
          <p className="text-xs font-light text-white/30 mt-2">Explorez en déplaçant votre curseur</p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div
            className="relative w-full h-[60vw] max-h-[600px] mt-10 overflow-hidden cursor-none"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width;
              const idx = Math.min(Math.floor(x * images.length), images.length - 1);
              setActive(idx);
            }}
          >
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <p className="font-[family-name:var(--font-cormorant)] text-sm text-white/30 mt-4 tracking-widest">
            {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
