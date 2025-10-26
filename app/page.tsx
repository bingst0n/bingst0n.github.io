import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="hero">
            <span className="kicker">Harrison Green — Portfolio</span>
            <h1>
              Building at the edge of{" "}
              <span style={{ color: "var(--acc)" }}>math</span>,{" "}
              <span style={{ color: "var(--acc2)" }}>AI</span> &{" "}
              <span style={{ color: "#C7F9CC" }}>music</span>.
            </h1>
            <p style={{ maxWidth: "58ch", marginTop: "1rem" }}>
              I'm a student at Avenues (NYC) exploring research in mathematics and machine learning,
              composing guitar-driven music, and designing playful systems & games.
            </p>
            <div
              style={{
                marginTop: "1.25rem",
                display: "flex",
                gap: "0.8rem",
                flexWrap: "wrap",
              }}
            >
              <Link href="#projects" className="btn">
                See projects
              </Link>
              <Link href="/resume.pdf" className="btn">
                Résumé
              </Link>
              <span className="tag mono">NYC • Mandarin • G9</span>
            </div>
            <div className="slab"></div>
          </div>
        </div>
      </section>

      {/* Quick Links / About Snapshot */}
      <section className="section" style={{ paddingTop: "32px" }}>
        <div className="container">
          <div style={{ display: "grid", gap: "1.2rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            <div className="card">
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.5rem" }}>
                Mathematics
              </h3>
              <p style={{ color: "#0D1B1E", opacity: 0.75, marginBottom: "0.75rem" }}>
                Number theory, combinatorics, and proof techniques. I enjoy problem-solving competitions and writing explainers.
              </p>
              <Link href="/projects" className="btn" style={{ fontSize: "0.9rem", padding: "0.6rem 0.9rem" }}>
                Explore
              </Link>
            </div>

            <div className="card">
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.5rem" }}>
                AI & Coding
              </h3>
              <p style={{ color: "#0D1B1E", opacity: 0.75, marginBottom: "0.75rem" }}>
                CNNs, transformers, and experiments with small-scale ML projects. Python, TypeScript, and Rust.
              </p>
              <Link href="/projects" className="btn" style={{ fontSize: "0.9rem", padding: "0.6rem 0.9rem" }}>
                Explore
              </Link>
            </div>

            <div className="card">
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.5rem" }}>
                Music
              </h3>
              <p style={{ color: "#0D1B1E", opacity: 0.75, marginBottom: "0.75rem" }}>
                Guitar compositions, modal harmony experiments, and algorithmic motif generation.
              </p>
              <Link href="/projects" className="btn" style={{ fontSize: "0.9rem", padding: "0.6rem 0.9rem" }}>
                Listen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="section" style={{ background: "var(--wash)" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "1rem",
              marginBottom: "1.2rem",
            }}
          >
            <h2>Selected Work</h2>
            <span className="mono">Last updated Oct 2025</span>
          </div>

          <div className="grid grid-3">
            <article className="card">
              <div className="tag">AI • Research</div>
              <h3
                style={{
                  margin: "0.6rem 0 0",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.4rem",
                  letterSpacing: "-0.02em",
                }}
              >
                CNNs on 8×8 glyph datasets
              </h3>
              <p style={{ margin: "0.4rem 0 1rem" }}>
                Built a lightweight CNN classifier for low-res generated glyphs; explored failure modes and saliency maps.
              </p>
              <Link href="/projects" className="btn">
                Learn more
              </Link>
            </article>

            <article className="card">
              <div className="tag">Game Design</div>
              <h3
                style={{
                  margin: "0.6rem 0 0",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.4rem",
                }}
              >
                Minecraft mod — Emerald Cleaver
              </h3>
              <p style={{ margin: "0.4rem 0 1rem" }}>
                Custom datapack & UI; balanced crafting loop and added progression quests; 6k+ downloads.
              </p>
              <Link href="/projects" className="btn">
                View project
              </Link>
            </article>

            <article className="card">
              <div className="tag">Music</div>
              <h3
                style={{
                  margin: "0.6rem 0 0",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.4rem",
                }}
              >
                Guitar EP — B Phrygian Dominant
              </h3>
              <p style={{ margin: "0.4rem 0 1rem" }}>
                Three-track EP exploring modal harmony & algorithmic motif generation.
              </p>
              <Link href="/projects" className="btn">
                Listen
              </Link>
            </article>
          </div>

          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <Link href="/projects" className="btn" style={{ fontSize: "1rem" }}>
              View all projects →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
