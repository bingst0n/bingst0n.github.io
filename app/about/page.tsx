import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* Hero: Intro */}
      <section className="space-y-6">
        <div className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white/95">Harrison R. Green</h1>
          <p className="text-lg text-white/75 mt-3">Mathematician • Musician • AI Enthusiast • Bilingual Storyteller</p>
          <p className="text-white/80 mt-6 leading-relaxed max-w-3xl">
            I'm a student at Avenues: The World School in New York City. I explore mathematics, AI, and creative
            expression to understand how systems think and feel. I grew up bilingual in English and Mandarin, and I'm
            fascinated by the ways logic and art reflect each other. When I'm not writing proofs or code, I'm usually
            composing music or designing a new game mechanic.
          </p>
        </div>
      </section>

      {/* Snapshot / Fast Facts */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white/95">Information</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-5">
            <div className="text-sm text-white/60 mb-2">📍 Location</div>
            <div className="text-white/90">New York City</div>
          </div>
          <div className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-5">
            <div className="text-sm text-white/60 mb-2">🏫 Education</div>
            <div className="text-white/90">Avenues: The World School</div>
          </div>
          <div className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-5">
            <div className="text-sm text-white/60 mb-2">📚 Interests</div>
            <div className="text-white/90">Math • AI • Music • Game Design • Language</div>
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white/95">Personal Note</h2>
        <div className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-6">
          <p className="text-white/80 leading-relaxed max-w-3xl">
            I'm driven by curiosity and connection. To me, math and music share the same pulse — patterns that make sense of the
            world. Through language, I try to translate that sense between people.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white/95">Get in Touch</h2>
        <div className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-6">
          <p className="text-white/75 mb-6">Let's collaborate or just talk about ideas.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/15 border border-white/15 transition-colors hover:underline">
              Résumé (PDF)
            </a>
            <a href="mailto:harrison@example.com" className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/15 border border-white/15 transition-colors hover:underline">
              Email
            </a>
            <a href="https://github.com/bingst0n" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/15 border border-white/15 transition-colors hover:underline">
              GitHub
            </a>
            <a href="https://soundcloud.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/15 border border-white/15 transition-colors hover:underline">
              SoundCloud
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
