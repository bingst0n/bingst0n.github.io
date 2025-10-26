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
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-white/95">
            {home.heroTitle}
          </h1>
          <p className="mt-4 text-white/80 text-lg sm:text-xl">
            {home.heroSubtitle}
          </p>
          {"rolesText" in home && (
            <p className="mt-2 text-white/70">
              {(home as any).rolesText}
            </p>
          )}
          <div className="mt-8">
            <Link href={home.ctaHref} className="inline-flex items-center rounded-full bg-[#57CC99]/20 px-5 py-2.5 text-white/95 hover:bg-[#80ED99]/25 border border-[#57CC99]/30 transition-all duration-150">
              {home.ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
