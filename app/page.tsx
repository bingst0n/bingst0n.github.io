import home from "@/content/home.json";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section with Floating Images */}
      <section className="relative isolate min-h-[100vh] flex items-center justify-center">
        {/* Decorative graphics - absolutely positioned around hero */}
        <div className="pointer-events-none absolute inset-0 z-0" style={{ height: '100vh' }}>
          <Image
            src="/graphics/pythagoreanidentity.png"
            alt=""
            width={260}
            height={260}
            className="absolute opacity-25 drift-slow select-none glow-soft hidden landscape:block" 
            style={{top: '10vh', left: '15vw', width: 'clamp(120px, 18vw, 280px)', height: 'auto'}}
            priority={false}
          />
          <Image
            src="/graphics/lossexpression.png"
            alt=""
            width={220}
            height={220}
            className="absolute opacity-25 drift-slowest select-none glow-soft hidden landscape:block" 
            style={{top: '12vh', right: '15vw', width: 'clamp(100px, 16vw, 260px)', height: 'auto'}}
            priority={false}
          />
          <Image
            src="/graphics/trebleclef.png"
            alt=""
            width={200}
            height={200}
            className="absolute opacity-25 drift-slower select-none glow-soft hidden landscape:block" 
            style={{bottom: '25vh', left: '2vw', width: 'clamp(100px, 15vw, 240px)', height: 'auto'}}
            priority={false}
          />
          <Image
            src="/graphics/bilingualism.png"
            alt=""
            width={240}
            height={240}
            className="absolute opacity-25 drift-slow select-none glow-soft hidden landscape:block" 
            style={{bottom: '25vh', right: '2vw', width: 'clamp(120px, 18vw, 280px)', height: 'auto'}}
            priority={false}
          />
          <div className="absolute" style={{bottom: '10vh', left: '50%', transform: 'translateX(-50%)'}}>
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

        <div className="mx-auto max-w-4xl px-4 sm:px-6 z-10">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight" style={{ color: '#5bc0be' }}>
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
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a href="#projects" className="inline-flex items-center rounded-full bg-white/10 px-5 py-2.5 text-white/90 hover:bg-white/15 border border-white/15 transition-colors scroll-smooth">
                Projects & Skills
              </a>
              <a href="#about" className="inline-flex items-center rounded-full bg-white/10 px-5 py-2.5 text-white/90 hover:bg-white/15 border border-white/15 transition-colors scroll-smooth">
                About
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full bg-white/10 px-5 py-2.5 text-white/90 hover:bg-white/15 border border-white/15 transition-colors scroll-smooth">
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Skills Section */}
      <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 scroll-mt-8">
        <div className="space-y-16">
          {/* Intro */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-white/95">
              Exploring systems — mathematical, musical, and human.
            </h1>
            <p className="text-lg text-white/75 max-w-3xl">
              Evidence of work across math, AI/coding, music, and Mandarin.
            </p>
          </div>

          {/* Math */}
          <div className="space-y-6">
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
          </div>

          {/* AI & Coding */}
          <div className="space-y-6">
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
          </div>

          {/* Music */}
          <div className="space-y-6">
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
          </div>

          {/* Mandarin */}
          <div className="space-y-6">
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
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 scroll-mt-8">
        <div className="space-y-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white/95">About</h1>
          
          {/* Hero: Intro */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white/95">Harrison R. Green</h2>
              <p className="text-lg text-white/75 mt-3">Mathematician • Musician • AI Enthusiast • Bilingual Storyteller</p>
              <p className="text-white/80 mt-6 leading-relaxed max-w-3xl">
                I'm a student at Avenues: The World School in New York City. I explore mathematics, AI, and creative
                expression to understand how systems think and feel. I grew up bilingual in English and Mandarin, and I'm
                fascinated by the ways logic and art reflect each other. When I'm not writing proofs or code, I'm usually
                composing music or designing a new game mechanic.
              </p>
            </div>
          </div>

          {/* Snapshot / Fast Facts */}
          <div className="space-y-4">
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
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 scroll-mt-8 pb-16">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white/95">Get in Touch</h1>
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
        </div>
      </section>
    </div>
  );
}
