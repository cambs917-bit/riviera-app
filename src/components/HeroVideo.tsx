"use client";

import { useEffect, useRef, useState } from "react";
import TypeWriter from "./TypeWriter";

export default function HeroVideo() {
  const heroRef = useRef<HTMLElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const lineTopRef = useRef<HTMLSpanElement>(null);
  const lineBotRef = useRef<HTMLSpanElement>(null);
  const sloganRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const bgImgRef = useRef<HTMLImageElement>(null);
  const [showSlogan, setShowSlogan] = useState(false);
  const progressRef = useRef(0);

  useEffect(() => {
    const hero = heroRef.current;
    const videoWrap = videoWrapRef.current;
    const lineTop = lineTopRef.current;
    const lineBot = lineBotRef.current;
    const hint = hintRef.current;
    const bg = bgRef.current;
    const bgImg = bgImgRef.current;
    if (!hero || !videoWrap || !lineTop || !lineBot || !hint || !bg || !bgImg) return;

    const SMALL_W = 350, SMALL_H = 450, RADIUS = 16;

    function getVP() {
      return { w: window.innerWidth, h: window.innerHeight };
    }

    function applyProgress(p: number) {
      const { w: vpW, h: vpH } = getVP();
      p = Math.max(0, Math.min(1, p));
      const w = SMALL_W + (vpW - SMALL_W) * p;
      const h = SMALL_H + (vpH - SMALL_H) * p;
      const r = RADIUS * (1 - p);
      videoWrap!.style.width = w + "px";
      videoWrap!.style.height = h + "px";
      videoWrap!.style.borderRadius = r + "px";

      const textOp = Math.max(0, 1 - p * 2.5);
      const split = p * vpW * 0.5;
      lineTop!.style.transform = `translateX(${-split}px)`;
      lineTop!.style.opacity = String(textOp);
      lineBot!.style.transform = `translateX(${split}px)`;
      lineBot!.style.opacity = String(textOp);
      // Blur progressif sur l'image uniquement — le gradient reste net pour le contraste du texte blanc
      const blurPx = p * 22;
      bgImg!.style.filter = `blur(${blurPx}px)`;
      bgImg!.style.transform = `scale(${1 + p * 0.07})`; // évite les bords blancs lors du blur
      hint!.style.opacity = String(Math.max(0, 1 - p * 4));
      setShowSlogan(p >= 1);
    }

    function measure() {
      const { h: vpH, w: vpW } = getVP();
      hero!.style.height = vpH + "px";
      hero!.style.width = vpW + "px";
      applyProgress(progressRef.current);
    }
    measure();
    window.addEventListener("resize", measure);

    function onWheel(e: WheelEvent) {
      const heroRect = hero!.getBoundingClientRect();
      const heroVisible = heroRect.top >= -10 && heroRect.top <= 10;
      const p = progressRef.current;
      if (!heroVisible && p >= 1) return;
      if (!heroVisible && p <= 0) return;

      if (p < 1 && e.deltaY > 0 && heroRect.top >= -10) {
        e.preventDefault();
        progressRef.current = Math.max(0, Math.min(1, p + e.deltaY * 0.0008));
        applyProgress(progressRef.current);
        return;
      }
      if (p > 0 && e.deltaY < 0 && window.scrollY <= 5) {
        e.preventDefault();
        progressRef.current = Math.max(0, Math.min(1, p + e.deltaY * 0.0008));
        applyProgress(progressRef.current);
      }
    }
    window.addEventListener("wheel", onWheel, { passive: false });

    let touchY = 0;
    function onTouchStart(e: TouchEvent) { touchY = e.touches[0].clientY; }
    function onTouchMove(e: TouchEvent) {
      const heroRect = hero!.getBoundingClientRect();
      const heroVisible = heroRect.top >= -10 && heroRect.top <= 10;
      const deltaY = touchY - e.touches[0].clientY;
      touchY = e.touches[0].clientY;
      const p = progressRef.current;
      if (p < 1 && deltaY > 0 && heroVisible) {
        e.preventDefault();
        progressRef.current = Math.max(0, Math.min(1, p + deltaY * 0.002));
        applyProgress(progressRef.current);
        return;
      }
      if (p > 0 && deltaY < 0 && window.scrollY <= 5) {
        e.preventDefault();
        progressRef.current = Math.max(0, Math.min(1, p + deltaY * 0.002));
        applyProgress(progressRef.current);
      }
    }
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden flex items-center justify-center bg-black">
      {/* Background image — blur sur l'img uniquement */}
      <div ref={bgRef} className="absolute inset-0 z-0 overflow-hidden">
        <img ref={bgImgRef} src="/images/hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black/45" />
      </div>

      {/* Gradient top permanent — jamais flouté, garantit le blanc de la navbar en toutes circonstances */}
      <div className="absolute inset-x-0 top-0 h-36 z-[8] bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />

      {/* Video */}
      <div ref={videoWrapRef} className="relative z-[2] overflow-hidden flex items-center justify-center" style={{ width: "350px", height: "450px", borderRadius: "16px" }}>
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://videos.pexels.com/video-files/1409899/1409899-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/40" />
      </div>

      {/* Split text */}
      <div className="absolute z-[3] flex flex-col items-center pointer-events-none">
        <span ref={lineTopRef} className="font-[family-name:var(--font-playfair)] text-[clamp(52px,8vw,110px)] font-normal text-white uppercase tracking-[clamp(6px,1.5vw,18px)] leading-[1.1] whitespace-nowrap">
          RIVIERA
        </span>
        <span ref={lineBotRef} className="font-[family-name:var(--font-playfair)] text-[clamp(52px,8vw,110px)] font-normal text-white uppercase tracking-[clamp(6px,1.5vw,18px)] leading-[1.1] whitespace-nowrap">
          CONCIERGE
        </span>
      </div>

      {/* Slogan */}
      <div ref={sloganRef} className={`absolute bottom-[clamp(48px,7vw,88px)] left-[clamp(20px,4vw,52px)] right-[clamp(20px,4vw,52px)] z-[4] flex items-end justify-between gap-5 transition-all duration-600 ${
        showSlogan ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"
      }`}>
        <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(42px,6.5vw,86px)] font-light text-white leading-[1.05] italic max-w-[70%]">
          L&apos;art de sublimer<br />
          <em>
            <TypeWriter sentences={["votre bien.", "chaque séjour.", "vos revenus.", "votre tranquillité."]} />
          </em>
        </h1>
        <div className="flex flex-col items-end gap-4 shrink-0">
          <p className="text-[12.5px] font-light text-white/70 tracking-wider text-right max-w-[260px] leading-[1.7]">
            Conciergerie Airbnb à Nice<br />et sur la Riviera française
          </p>
          <a href="#intro" className="pill pill-light">Découvrir</a>
        </div>
      </div>

      {/* Scroll hint */}
      <div ref={hintRef} className="absolute bottom-7 left-1/2 -translate-x-1/2 z-[5] flex flex-col items-center gap-2">
        <span className="text-[9px] font-medium tracking-[3px] uppercase text-white/40">Scroll</span>
        <span className="text-white/40 animate-bounce">&darr;</span>
      </div>
    </section>
  );
}
