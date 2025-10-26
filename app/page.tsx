import home from "@/content/home.json";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative isolate">
      <div className="mx-auto max-w-3xl text-center sm:text-left">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 backdrop-blur shadow-[0_0_1px_rgba(255,255,255,0.2)]">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white/95">
            {home.heroTitle}
          </h1>
          <p className="mt-4 text-white/80 text-lg leading-relaxed">
            {home.heroSubtitle}
          </p>
          <div className="mt-6">
            <Link href={home.ctaHref} className="inline-flex items-center rounded-full bg-white/10 px-5 py-2.5 text-white/90 hover:bg-white/15 border border-white/15">
              {home.ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
