"use client";

import { useState, useEffect, useCallback } from "react";

interface Props {
  sentences: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypeWriter({
  sentences,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 2200,
}: Props) {
  const [text, setText] = useState("");
  const [sentIdx, setSentIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = sentences[sentIdx];
    if (!deleting) {
      setText(current.slice(0, charIdx + 1));
      setCharIdx((c) => c + 1);
    } else {
      setText(current.slice(0, charIdx));
      setCharIdx((c) => c - 1);
    }
  }, [sentIdx, charIdx, deleting, sentences]);

  useEffect(() => {
    const current = sentences[sentIdx];

    if (!deleting && charIdx >= current.length) {
      const t = setTimeout(() => setDeleting(true), pauseDuration);
      return () => clearTimeout(t);
    }

    if (deleting && charIdx < 0) {
      setDeleting(false);
      setCharIdx(0);
      setSentIdx((s) => (s + 1) % sentences.length);
      const t = setTimeout(() => {}, 300);
      return () => clearTimeout(t);
    }

    const speed = deleting
      ? deletingSpeed
      : typingSpeed + Math.random() * 40;
    const t = setTimeout(tick, speed);
    return () => clearTimeout(t);
  }, [charIdx, deleting, sentIdx, sentences, tick, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span>
      {text}
      <span className="inline-block ml-1 animate-pulse">|</span>
    </span>
  );
}
