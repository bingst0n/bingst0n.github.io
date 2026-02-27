"use client";

import { useEffect, useRef } from "react";

const AnimatedGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.003;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      const spacing = 40;
      const cols = Math.ceil(w / spacing) + 1;
      const rows = Math.ceil(h / spacing) + 1;

      // vertical lines
      for (let i = 0; i < cols; i++) {
        const x = i * spacing;
        const pulse = Math.sin(time + i * 0.3) * 0.06 + 0.18;
        ctx.strokeStyle = `rgba(74, 103, 65, ${pulse})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      // horizontal lines
      for (let j = 0; j < rows; j++) {
        const y = j * spacing;
        const pulse = Math.sin(time + j * 0.3 + 1) * 0.06 + 0.18;
        ctx.strokeStyle = `rgba(74, 103, 65, ${pulse})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // intersection glows
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const glow = Math.sin(time * 1.5 + i * 0.7 + j * 0.5) * 0.5 + 0.5;
          if (glow > 0.7) {
            const x = i * spacing;
            const y = j * spacing;
            const alpha = (glow - 0.7) * 0.5;
            ctx.fillStyle = `rgba(168, 196, 154, ${alpha})`;
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const observer = new ResizeObserver(resize);
    observer.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default AnimatedGrid;
