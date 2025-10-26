import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero: Portrait + Intro */}
      <section className="section" style={{ background: 'var(--tea-green)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(220px, 320px) 1fr', gap: '1.4rem', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', borderRadius: '16px', overflow: 'hidden', background: 'color-mix(in srgb, var(--sage) 40%, transparent)' }}>
            {/* Replace src with your actual portrait file when available */}
            <Image src="/portrait.jpg" alt="Harrison Green portrait" fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <h1 className="display" style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}>Harrison Green</h1>
            <p className="mono" style={{ marginTop: '.35rem' }}>Mathematician • Musician • AI Enthusiast • Bilingual Storyteller.</p>
            <p style={{ marginTop: '0.9rem', maxWidth: '70ch' }}>
              I’m a student at Avenues: The World School in New York City. I explore mathematics, AI, and creative
              expression to understand how systems think and feel. I grew up bilingual in English and Mandarin, and I’m
              fascinated by the ways logic and art reflect each other. When I’m not writing proofs or code, I’m usually
              composing music or designing a new game mechanic.
            </p>
          </div>
        </div>
      </section>

      {/* Snapshot / Fast Facts */}
      <section className="section" style={{ background: 'var(--light-green)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          <div className="card">
            <div className="mono" style={{ opacity: 0.8 }}>📍 Location</div>
            <div style={{ marginTop: '.25rem' }}>New York City</div>
          </div>
          <div className="card">
            <div className="mono" style={{ opacity: 0.8 }}>🏫 School</div>
            <div style={{ marginTop: '.25rem' }}>Avenues: The World School</div>
          </div>
          <div className="card">
            <div className="mono" style={{ opacity: 0.8 }}>📚 Interests</div>
            <div style={{ marginTop: '.25rem' }}>Math • AI • Music • Game Design • Language</div>
          </div>
          <div className="card">
            <div className="mono" style={{ opacity: 0.8 }}>🌐 Languages</div>
            <div style={{ marginTop: '.25rem' }}>English & Mandarin</div>
          </div>
          <div className="card">
            <div className="mono" style={{ opacity: 0.8 }}>🎓 Goals</div>
            <div style={{ marginTop: '.25rem' }}>Research + Creative Development at University</div>
          </div>
          <div className="card">
            <div className="mono" style={{ opacity: 0.8 }}>💡 Fun</div>
            <div style={{ marginTop: '.25rem' }}>Loves modal guitar theory, circle geometry, and story-driven games</div>
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="section" style={{ background: 'var(--tea-green)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}>Personal Note</h2>
          <p style={{ marginTop: '0.75rem', maxWidth: '72ch' }}>
            I’m driven by curiosity and connection. To me, math and music share the same pulse — patterns that make sense of the
            world. Through language, I try to translate that sense between people.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section" style={{ background: 'var(--light-green)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <p className="mono">Let’s collaborate or just talk about ideas.</p>
          <div style={{ display: 'flex', gap: '.6rem' }}>
            <a className="btn" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Résumé (PDF)</a>
            <a className="btn" href="mailto:harrison@example.com">Email</a>
            <a className="btn" href="https://github.com/bingst0n" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="btn" href="https://soundcloud.com/" target="_blank" rel="noopener noreferrer">SoundCloud</a>
          </div>
        </div>
      </section>
    </>
  );
}
