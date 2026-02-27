"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const graphics = [
  { src: "/graphics/pythagoreanidentity.png", top: "14%", left: "4%", size: 360, speed: 0.15 },
  { src: "/graphics/lossexpression.png", top: "5%", right: "3%", size: 320, speed: -0.12 },
  { src: "/graphics/neuralnetwork.png", top: "40%", left: "6%", size: 380, speed: 0.18 },
  { src: "/graphics/trebleclef.png", top: "72%", right: "5%", size: 300, speed: -0.1 },
  { src: "/graphics/bilingualism.png", top: "82%", left: "50%", size: 350, speed: 0.14 },
];

export default function FloatingGraphics() {
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
      {graphics.map((g) => {
        const offset = scrollY * g.speed;
        return (
          <div
            key={g.src}
            className="absolute select-none"
            style={{
              top: g.top,
              left: g.left,
              right: (g as { right?: string }).right,
              width: g.size,
              height: g.size,
              transform: `translateY(${offset}px)`,
              willChange: "transform",
            }}
          >
            <Image
              src={g.src}
              alt=""
              width={g.size}
              height={g.size}
              className="opacity-[0.15] drift-slow"
              style={{ filter: "invert(1)", width: "100%", height: "auto" }}
            />
          </div>
        );
      })}
    </div>
  );
}
