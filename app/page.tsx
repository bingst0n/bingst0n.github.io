import Link from "next/link";

export default function Home() {
  return (
    <main aria-labelledby="home-title">
      <section className="section">
        <div className="container">
          <div className="grid-12" style={{ alignItems: 'center' }}>
            <div style={{ gridColumn: 'span 7' }}>
              <div className="mono" style={{ textTransform: 'uppercase', letterSpacing: '.12em' }}>Student — Avenues NYC</div>
              <h1 id="home-title" className="display" style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, marginTop: '.35rem' }}>Harrison Green</h1>
              <p className="mono" style={{ marginTop: '.25rem' }}>Math • AI • Music • Mandarin</p>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
                <Link href="/projects-skills" className="btn">Projects & Skills</Link>
                <Link href="/about" className="btn">About</Link>
              </div>
            </div>
            <div style={{ gridColumn: 'span 5' }}></div>
          </div>
        </div>
      </section>
    </main>
  );
}
