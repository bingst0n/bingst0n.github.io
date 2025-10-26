import Link from "next/link";

export const metadata = {
  title: "Projects & Skills | Harrison Green",
  description: "Exploring systems — mathematical, musical, and human.",
};

export default function ProjectsSkillsPage() {
  return (
    <div className="space-y-16">
      {/* Intro */}
      <section className="space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-white/95">
          Exploring systems — mathematical, musical, and human.
        </h1>
        <p className="text-lg text-white/75 max-w-3xl">
          Evidence of work across math, AI/coding, music, and Mandarin.
        </p>
      </section>

      {/* Math */}
      <section className="space-y-6">
        <div>
          <div className="text-xs uppercase tracking-wider text-white/60 mb-1">Discipline</div>
          <h2 className="text-3xl font-bold text-white/95">Mathematics</h2>
          <p className="text-white/70 mt-2">
            The language of structure — from geometry to computation.
          </p>
        </div>
        <p className="text-white/80 max-w-3xl leading-relaxed">
          I study advanced mathematics through Avenues' self-paced Institute, mentored by Dr. Patrick Galarza. I'm on track
          to complete multivariable calculus by junior year and publish original research in geometric construction.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <article className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-5">
            <h3 className="font-semibold text-lg text-white/90">Constructing Integer Lengths</h3>
            <p className="text-white/70 text-sm mt-2">
              Compass-and-straightedge constructions for integer distances and their algebraic interpretation.
            </p>
            <div className="text-xs text-white/60 mt-3">2025 • Geometry</div>
          </article>
          <article className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-5">
            <h3 className="font-semibold text-lg text-white/90">Forward & Backward Propagation</h3>
            <p className="text-white/70 text-sm mt-2">
              A proof-oriented explanation of neural-network calculus.
            </p>
            <div className="text-xs text-white/60 mt-3">2025 • Calculus</div>
          </article>
          <article className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-5">
            <h3 className="font-semibold text-lg text-white/90">Ongoing Research</h3>
            <p className="text-white/70 text-sm mt-2">
              Current work in geometric construction methods and discrete structure.
            </p>
            <div className="text-xs text-white/60 mt-3">2025– • Research</div>
          </article>
        </div>
      </section>

      {/* AI & Coding */}
      <section className="space-y-6">
        <div>
          <div className="text-xs uppercase tracking-wider text-white/60 mb-1">Discipline</div>
          <h2 className="text-3xl font-bold text-white/95">AI & Coding</h2>
          <p className="text-white/70 mt-2">
            Understanding how systems learn — and how we teach them.
          </p>
        </div>
        <p className="text-white/80 max-w-3xl leading-relaxed">
          I build interpretable AI experiments, visualize how models think, and design interactive systems — from neural-net
          demos to custom Minecraft datapacks.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <article className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-5">
            <div className="inline-block text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded mb-3">CNN</div>
            <h3 className="font-semibold text-lg text-white/90">CNN on 8×8 Glyphs</h3>
            <p className="text-white/70 text-sm mt-2">
              A lightweight convolutional network analyzing small, interpretable datasets.
            </p>
            <div className="text-xs text-white/60 mt-3">2025 • Python • PyTorch</div>
          </article>
          <article className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-5">
            <div className="inline-block text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded mb-3">Game Design</div>
            <h3 className="font-semibold text-lg text-white/90">Emerald Cleaver Mod</h3>
            <p className="text-white/70 text-sm mt-2">
              A Minecraft datapack blending design balance, scripting, and player progression.
            </p>
            <div className="text-xs text-white/60 mt-3">2024 • Datapack • Design</div>
          </article>
          <article className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-5">
            <div className="inline-block text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded mb-3">Web</div>
            <h3 className="font-semibold text-lg text-white/90">This Website</h3>
            <p className="text-white/70 text-sm mt-2">
              Portfolio built with Next.js and AI-assisted development in Windsurf.
            </p>
            <div className="text-xs text-white/60 mt-3">2025 • Next.js • TypeScript</div>
          </article>
        </div>
      </section>

      {/* Music */}
      <section className="space-y-6">
        <div>
          <div className="text-xs uppercase tracking-wider text-white/60 mb-1">Discipline</div>
          <h2 className="text-3xl font-bold text-white/95">Music</h2>
          <p className="text-white/70 mt-2">
            Where structure meets emotion.
          </p>
        </div>
        <p className="text-white/80 max-w-3xl leading-relaxed">
          I compose guitar-based pieces that experiment with modal harmony and algorithmic inspiration, bridging musical
          expression with mathematical logic.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <article className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-5">
            <div className="inline-block text-xs px-2 py-1 bg-pink-500/20 text-pink-300 rounded mb-3">EP</div>
            <h3 className="font-semibold text-lg text-white/90">B Phrygian Dominant EP</h3>
            <p className="text-white/70 text-sm mt-2">A three-track study in mode and tension.</p>
            <div className="text-xs text-white/60 mt-3">2024 • Guitar • Modal</div>
          </article>
          <article className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-5">
            <div className="inline-block text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded mb-3">Sketches</div>
            <h3 className="font-semibold text-lg text-white/90">Algorithmic Sketches</h3>
            <p className="text-white/70 text-sm mt-2">Melodies generated via code, refined by hand.</p>
            <div className="text-xs text-white/60 mt-3">2025 • Code • Composition</div>
          </article>
          <article className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-5">
            <div className="inline-block text-xs px-2 py-1 bg-orange-500/20 text-orange-300 rounded mb-3">Live</div>
            <h3 className="font-semibold text-lg text-white/90">School Showcase Performance</h3>
            <p className="text-white/70 text-sm mt-2">Live arrangement exploring contrast between composed and improvised motifs.</p>
            <div className="text-xs text-white/60 mt-3">2024 • Performance</div>
          </article>
        </div>
      </section>

      {/* Mandarin */}
      <section className="space-y-6">
        <div>
          <div className="text-xs uppercase tracking-wider text-white/60 mb-1">Discipline</div>
          <h2 className="text-3xl font-bold text-white/95">Mandarin</h2>
          <p className="text-white/70 mt-2">
            Connecting communities through language.
          </p>
        </div>
        <p className="text-white/80 max-w-3xl leading-relaxed">
          Fluent since childhood, I use Mandarin to bridge cultural and educational gaps — from tutoring heritage learners
          to translating AI literacy materials.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <article className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-5">
            <div className="inline-block text-xs px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded mb-3">Translation</div>
            <h3 className="font-semibold text-lg text-white/90">AI Literacy Translations</h3>
            <p className="text-white/70 text-sm mt-2">Co-translated beginner guides for Chinese-speaking families.</p>
            <div className="text-xs text-white/60 mt-3">2024 • Community</div>
          </article>
          <article className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-5">
            <div className="inline-block text-xs px-2 py-1 bg-red-500/20 text-red-300 rounded mb-3">Notes</div>
            <h3 className="font-semibold text-lg text-white/90">Yunnan Cultural Notes (中英)</h3>
            <p className="text-white/70 text-sm mt-2">Bilingual reflections on technology and tradition in rural China.</p>
            <div className="text-xs text-white/60 mt-3">2023 • Field Notes</div>
          </article>
          <article className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-5">
            <div className="inline-block text-xs px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded mb-3">Tutoring</div>
            <h3 className="font-semibold text-lg text-white/90">Heritage Tutoring</h3>
            <p className="text-white/70 text-sm mt-2">Volunteer sessions improving reading fluency for younger students.</p>
            <div className="text-xs text-white/60 mt-3">2022– • Tutoring</div>
          </article>
        </div>
      </section>

      {/* Ending */}
      <section className="text-center space-y-6 pt-8">
        <p className="text-white/75 max-w-3xl mx-auto">
          Across every field — whether mathematical reasoning, machine intelligence, music, or language — I explore how systems
          carry meaning.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="#" className="text-white/70 hover:text-white/90 hover:underline transition-colors">Back to Top</Link>
          <Link href="/about" className="text-white/70 hover:text-white/90 hover:underline transition-colors">About Me</Link>
        </div>
      </section>
    </div>
  );
}
