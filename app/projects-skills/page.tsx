import Link from "next/link";

export const metadata = {
  title: "Projects & Skills | Harrison Green",
  description: "Exploring systems — mathematical, musical, and human.",
};

export default function ProjectsSkillsPage() {
  return (
    <>
      {/* Intro */}
      <section className="section">
        <div className="container">
          <h1 className="display" style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
            Exploring systems — mathematical, musical, and human.
          </h1>
          <p className="mono" style={{ maxWidth: '65ch', marginTop: '0.8rem' }}>
            Evidence of work across math, AI/coding, music, and Mandarin.
          </p>
        </div>
      </section>

      {/* Math */}
      <section className="section">
        <div className="container">
          <div>
            <div className="mono" style={{ textTransform: 'uppercase', letterSpacing: '.12em' }}>Discipline</div>
            <h2 style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, marginTop: '.25rem' }}>Mathematics</h2>
            <div className="rule" style={{ marginTop: '.4rem', maxWidth: '320px' }} />
          </div>
          <p className="mono" style={{ opacity: 0.9, marginTop: '0.6rem' }}>
            The language of structure — from geometry to computation.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1.2rem', marginTop: '1rem' }}>
            <div>
              <p style={{ maxWidth: '70ch' }}>
                I study advanced mathematics through Avenues’ self-paced Institute, mentored by Dr. Patrick Galarza. I’m on track
                to complete multivariable calculus by junior year and publish original research in geometric construction.
              </p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: '1fr', gap: '0.9rem' }}>
              <article className="card">
                <h3 style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>Constructing Integer Lengths</h3>
                <p className="mono" style={{ marginTop: '0.35rem' }}>
                  Compass-and-straightedge constructions for integer distances and their algebraic interpretation.
                </p>
                <div className="mono" style={{ marginTop: '.4rem', fontSize: '.9rem', opacity: .85 }}>2025 • Geometry</div>
              </article>
              <article className="card">
                <h3 style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>Forward & Backward Propagation</h3>
                <p className="mono" style={{ marginTop: '0.35rem' }}>
                  A proof-oriented explanation of neural-network calculus.
                </p>
                <div className="mono" style={{ marginTop: '.4rem', fontSize: '.9rem', opacity: .85 }}>2025 • Calculus</div>
              </article>
              <article className="card">
                <h3 style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>Ongoing Research</h3>
                <p className="mono" style={{ marginTop: '0.35rem' }}>
                  Current work in geometric construction methods and discrete structure.
                </p>
                <div className="mono" style={{ marginTop: '.4rem', fontSize: '.9rem', opacity: .85 }}>2025– • Research</div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Coding */}
      <section className="section">
        <div className="container">
          <div>
            <div className="mono" style={{ textTransform: 'uppercase', letterSpacing: '.12em' }}>Discipline</div>
            <h2 style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, marginTop: '.25rem' }}>AI & Coding</h2>
            <div className="rule" style={{ marginTop: '.4rem', maxWidth: '320px' }} />
          </div>
          <p className="mono" style={{ opacity: 0.9, marginTop: '0.6rem' }}>
            Understanding how systems learn — and how we teach them.
          </p>
          <p style={{ maxWidth: '70ch', marginTop: '1rem' }}>
            I build interpretable AI experiments, visualize how models think, and design interactive systems — from neural-net
            demos to custom Minecraft datapacks.
          </p>
          <div className="grid grid-3" style={{ marginTop: '1rem' }}>
            <article className="card">
              <div className="tag">CNN</div>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, marginTop: '0.4rem' }}>CNN on 8×8 Glyphs</h3>
              <p className="mono" style={{ marginTop: '0.35rem' }}>
                A lightweight convolutional network analyzing small, interpretable datasets.
              </p>
              <div className="mono" style={{ marginTop: '.4rem', fontSize: '.9rem', opacity: .85 }}>2025 • Python • PyTorch</div>
              <div style={{ marginTop: '0.6rem', display: 'flex', gap: '.6rem', flexWrap: 'wrap' }}>
                <Link className="btn" href="/projects-skills">Details</Link>
              </div>
            </article>
            <article className="card">
              <div className="tag">Game Design</div>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, marginTop: '0.4rem' }}>Emerald Cleaver Mod</h3>
              <p className="mono" style={{ marginTop: '0.35rem' }}>
                A Minecraft datapack blending design balance, scripting, and player progression.
              </p>
              <div className="mono" style={{ marginTop: '.4rem', fontSize: '.9rem', opacity: .85 }}>2024 • Datapack • Design</div>
              <div style={{ marginTop: '0.6rem', display: 'flex', gap: '.6rem', flexWrap: 'wrap' }}>
                <Link className="btn" href="/projects-skills">View</Link>
              </div>
            </article>
            <article className="card">
              <div className="tag">Web</div>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, marginTop: '0.4rem' }}>This Website</h3>
              <p className="mono" style={{ marginTop: '0.35rem' }}>
                Portfolio built with Next.js and AI-assisted development in Windsurf.
              </p>
              <div className="mono" style={{ marginTop: '.4rem', fontSize: '.9rem', opacity: .85 }}>2025 • Next.js • TypeScript</div>
              <div style={{ marginTop: '0.6rem', display: 'flex', gap: '.6rem', flexWrap: 'wrap' }}>
                <Link className="btn" href="/">Home</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Music */}
      <section className="section" style={{ background: 'var(--brunswick-green)', color: 'var(--tea-green)' }}>
        <div className="container">
          <div>
            <div className="mono" style={{ textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--tea-green)' }}>Discipline</div>
            <h2 style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--tea-green)', marginTop: '.25rem' }}>Music</h2>
            <div className="rule" style={{ marginTop: '.4rem', maxWidth: '320px', background: 'var(--tea-green)' }} />
          </div>
          <p className="mono" style={{ opacity: 0.9, marginTop: '0.6rem', color: 'var(--tea-green)' }}>
            Where structure meets emotion.
          </p>
          <p style={{ maxWidth: '70ch', marginTop: '1rem' }}>
            I compose guitar-based pieces that experiment with modal harmony and algorithmic inspiration, bridging musical
            expression with mathematical logic.
          </p>
          <div className="grid grid-3" style={{ marginTop: '1rem' }}>
            <article className="card" style={{ background: 'color-mix(in srgb, var(--tea-green) 85%, transparent)' }}>
              <div className="tag">EP</div>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, marginTop: '0.4rem' }}>B Phrygian Dominant EP</h3>
              <p className="mono" style={{ marginTop: '0.35rem' }}>A three-track study in mode and tension.</p>
              <div className="mono" style={{ marginTop: '.4rem', fontSize: '.9rem', opacity: .9 }}>2024 • Guitar • Modal</div>
            </article>
            <article className="card" style={{ background: 'color-mix(in srgb, var(--tea-green) 85%, transparent)' }}>
              <div className="tag">Sketches</div>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, marginTop: '0.4rem' }}>Algorithmic Sketches</h3>
              <p className="mono" style={{ marginTop: '0.35rem' }}>Melodies generated via code, refined by hand.</p>
              <div className="mono" style={{ marginTop: '.4rem', fontSize: '.9rem', opacity: .9 }}>2025 • Code • Composition</div>
            </article>
            <article className="card" style={{ background: 'color-mix(in srgb, var(--tea-green) 85%, transparent)' }}>
              <div className="tag">Live</div>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, marginTop: '0.4rem' }}>School Showcase Performance</h3>
              <p className="mono" style={{ marginTop: '0.35rem' }}>Live arrangement exploring contrast between composed and improvised motifs.</p>
              <div className="mono" style={{ marginTop: '.4rem', fontSize: '.9rem', opacity: .9 }}>2024 • Performance</div>
            </article>
          </div>
        </div>
      </section>

      {/* Mandarin */}
      <section className="section" style={{ background: 'var(--sage)' }}>
        <div className="container">
          <div>
            <div className="mono" style={{ textTransform: 'uppercase', letterSpacing: '.12em' }}>Discipline</div>
            <h2 style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, marginTop: '.25rem' }}>Mandarin</h2>
            <div className="rule" style={{ marginTop: '.4rem', maxWidth: '320px' }} />
          </div>
          <p className="mono" style={{ opacity: 0.9, marginTop: '0.6rem' }}>
            Connecting communities through language.
          </p>
          <p style={{ maxWidth: '70ch', marginTop: '1rem' }}>
            Fluent since childhood, I use Mandarin to bridge cultural and educational gaps — from tutoring heritage learners
            to translating AI literacy materials.
          </p>
          <div className="grid grid-3" style={{ marginTop: '1rem' }}>
            <article className="card">
              <div className="tag">Translation</div>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, marginTop: '0.4rem' }}>AI Literacy Translations</h3>
              <p className="mono" style={{ marginTop: '0.35rem' }}>Co-translated beginner guides for Chinese-speaking families.</p>
              <div className="mono" style={{ marginTop: '.4rem', fontSize: '.9rem', opacity: .85 }}>2024 • Community</div>
            </article>
            <article className="card">
              <div className="tag">Notes</div>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, marginTop: '0.4rem' }}>Yunnan Cultural Notes (中英)</h3>
              <p className="mono" style={{ marginTop: '0.35rem' }}>Bilingual reflections on technology and tradition in rural China.</p>
              <div className="mono" style={{ marginTop: '.4rem', fontSize: '.9rem', opacity: .85 }}>2023 • Field Notes</div>
            </article>
            <article className="card">
              <div className="tag">Tutoring</div>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, marginTop: '0.4rem' }}>Heritage Tutoring</h3>
              <p className="mono" style={{ marginTop: '0.35rem' }}>Volunteer sessions improving reading fluency for younger students.</p>
              <div className="mono" style={{ marginTop: '.4rem', fontSize: '.9rem', opacity: .85 }}>2022– • Tutoring</div>
            </article>
          </div>
        </div>
      </section>

      {/* Ending */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ maxWidth: '68ch', marginInline: 'auto' }}>
            Across every field — whether mathematical reasoning, machine intelligence, music, or language — I explore how systems
            carry meaning.
          </p>
          <div style={{ marginTop: '1rem' }}>
            <Link className="btn" href="#">Back to Top</Link>
            <Link className="btn" href="/about" style={{ marginLeft: '.6rem' }}>About Me</Link>
          </div>
        </div>
      </section>
    </>
  );
}
