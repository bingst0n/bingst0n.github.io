import home from "@/content/home.json";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative isolate">
      {/* Decorative graphics */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/graphics/pythagoreanidentity.png"
          alt=""
          width={260}
          height={260}
          className="absolute opacity-25 drift-slow select-none glow-soft hidden landscape:block" style={{top: '30vh', left: '1vw', width: 'clamp(120px, 18vw, 280px)', height: 'auto'}}
          priority={false}
        />
        <Image
          src="/graphics/lossexpression.png"
          alt=""
          width={220}
          height={220}
          className="absolute opacity-25 drift-slowest select-none glow-soft hidden landscape:block" style={{top: '37vh', right: '1vw', width: 'clamp(100px, 16vw, 260px)', height: 'auto'}}
          priority={false}
        />
        <Image
          src="/graphics/trebleclef.png"
          alt=""
          width={200}
          height={200}
          className="absolute opacity-25 drift-slower select-none glow-soft hidden landscape:block" style={{bottom: '35vh', left: '1vw', width: 'clamp(100px, 15vw, 240px)', height: 'auto'}}
          priority={false}
        />
        <Image
          src="/graphics/bilingualism.png"
          alt=""
          width={240}
          height={240}
          className="absolute opacity-25 drift-slow select-none glow-soft hidden landscape:block" style={{bottom: '35vh', right: '1vw', width: 'clamp(120px, 18vw, 280px)', height: 'auto'}}
          priority={false}
        />
        <div className="absolute" style={{bottom: '8px', left: '50%', transform: 'translateX(-50%)'}}>
          <Image
            src="/graphics/neuralnetwork.png"
            alt=""
            width={260}
            height={260}
            className="opacity-25 drift-slowest select-none glow-soft"
            style={{width: 'clamp(140px, 20vw, 320px)', height: 'auto'}}
            priority={false}
          />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-[#5bc0be] via-[#6fffe9] to-[#5bc0be] bg-clip-text text-transparent">
              Harrison R. Green
            </span>
          </h1>
          <p className="mt-4 text-white/80 text-lg sm:text-xl">
            {home.heroSubtitle}
          </p>
          {"rolesText" in home && (
            <p className="mt-2 text-white/70">
              {(home as any).rolesText}
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/projects-skills" className="inline-flex items-center rounded-full bg-white/10 px-5 py-2.5 text-white/90 hover:bg-white/15 border border-white/15 transition-colors">
              Projects & Skills
            </Link>
            <Link href="/about" className="inline-flex items-center rounded-full bg-white/10 px-5 py-2.5 text-white/90 hover:bg-white/15 border border-white/15 transition-colors">
              About
            </Link>
            <Link href="/contact" className="inline-flex items-center rounded-full bg-white/10 px-5 py-2.5 text-white/90 hover:bg-white/15 border border-white/15 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
