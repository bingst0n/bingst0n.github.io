import home from "@/content/home.json";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative isolate">
      {/* Decorative graphics */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/graphics/trig-identity.svg"
          alt=""
          width={260}
          height={260}
          className="absolute top-10 left-6 opacity-25 drift-slow select-none"
          priority={false}
        />
        <Image
          src="/graphics/dl-dw.svg"
          alt=""
          width={220}
          height={220}
          className="absolute top-40 right-8 opacity-25 drift-slowest select-none"
          priority={false}
        />
        <Image
          src="/graphics/treble-clef.svg"
          alt=""
          width={200}
          height={200}
          className="absolute bottom-24 left-10 opacity-25 drift-slower select-none"
          priority={false}
        />
        <Image
          src="/graphics/bilingual-chinese.svg"
          alt=""
          width={240}
          height={240}
          className="absolute bottom-10 right-10 opacity-25 drift-slow select-none"
          priority={false}
        />
        <Image
          src="/graphics/neural-network.svg"
          alt=""
          width={260}
          height={260}
          className="absolute top-1/2 left-1/2 -translate-x-[70%] translate-y-24 opacity-25 drift-slowest select-none"
          priority={false}
        />
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
            <Link href={home.ctaHref} className="inline-flex items-center rounded-full bg-white/10 px-5 py-2.5 text-white/90 hover:bg-white/15 border border-white/15">
              {home.ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
