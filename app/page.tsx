import home from "@/content/home.json";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative isolate">
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
