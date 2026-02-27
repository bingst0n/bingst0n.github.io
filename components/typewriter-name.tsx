"use client";

import { useState, useEffect } from "react";

interface TypewriterNameProps {
  onComplete?: () => void;
}

const TypewriterName = ({ onComplete }: TypewriterNameProps) => {
  const fullText = "harrison\ngreen";
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const tick = () => {
      if (i < fullText.length) {
        setDisplayed(fullText.slice(0, i + 1));
        i++;
        setTimeout(tick, 80);
      } else {
        setDone(true);
        onComplete?.();
      }
    };
    setTimeout(tick, 600);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const lines = displayed.split("\n");

  return (
    <h1 className="font-mono text-7xl md:text-9xl font-normal tracking-tight leading-[0.75]" style={{ color: "hsl(150 20% 18%)" }}>
      {lines[0]}
      {lines.length > 1 && (
        <>
          <br />
          {lines[1]}
        </>
      )}
      <span className={`inline-block w-[3px] h-[0.75em] ml-1 align-baseline ${done ? "animate-cursor-blink" : ""}`} style={{ backgroundColor: "hsl(130 22% 33%)" }} />
    </h1>
  );
};

export default TypewriterName;
