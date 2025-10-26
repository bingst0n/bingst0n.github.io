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
          className="absolute top-6 left-2 opacity-25 drift-slow select-none glow-soft w-32 sm:w-44 md:w-52 lg:w-64 h-auto"
          priority={false}
        />
        <Image
          src="/graphics/lossexpression.png"
          alt=""
          width={220}
          height={220}
          className="absolute top-20 right-2 opacity-25 drift-slowest select-none glow-soft w-28 sm:w-36 md:w-44 lg:w-52 h-auto hidden sm:block"
          priority={false}
        />
        <Image
          src="/graphics/trebleclef.png"
          alt=""
          width={200}
          height={200}
          className="absolute bottom-32 sm:bottom-20 md:bottom-12 left-2 opacity-25 drift-slower select-none glow-soft w-24 sm:w-32 md:w-40 lg:w-48 h-auto"
          priority={false}
        />
        <Image
          src="/graphics/bilingualism.png"
          alt=""
          width={240}
          height={240}
          className="absolute bottom-32 sm:bottom-16 md:bottom-8 right-2 opacity-25 drift-slow select-none glow-soft w-32 sm:w-40 md:w-48 lg:w-56 h-auto"
          priority={false}
        />
        <Image
          src="/graphics/neuralnetwork.png"
          alt=""
          width={260}
          height={260}
          className="absolute bottom-40 sm:bottom-32 md:bottom-24 lg:bottom-16 left-1/2 -translate-x-1/2 opacity-25 drift-slowest select-none glow-soft w-32 sm:w-40 md:w-48 lg:w-64 h-auto"
          priority={false}
        />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-24 pb-12 sm:pt-32 sm:pb-16">
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
