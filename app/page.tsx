import Link from "next/link";
import { profile, research, projects } from "@/content/site";

// Featured items shown in the "some things i've worked on…" overview.
const featuredResearch = research.filter((r) => r.featured);
const featuredProjects = projects.filter((p) => p.featured);

export default function Home() {
  return (
    <section className="view">
      <p className="blurb">{profile.blurb}</p>

      <div className="edu">
        <div className="edu-lbl">Education</div>
        {profile.education.map((e) => (
          <div className="edu-item" key={e.school}>
            <b>{e.school}</b> — {e.detail}
          </div>
        ))}
      </div>

      <section className="worked">
        <h2>some things i&apos;ve worked on…</h2>

        {featuredResearch.map((r) => (
          <div className="work" key={r.title}>
            <div className="wmeta">
              <span className="cat">Research</span>
              <span className="wyr">{r.year}</span>
            </div>
            <div>
              <h3>
                <a href={r.pdf} target="_blank" rel="noopener noreferrer">
                  {r.title}
                </a>
              </h3>
              {r.description && <p className="clamp">{r.description}</p>}
            </div>
          </div>
        ))}

        {featuredProjects.map((p) => (
          <div className="work" key={p.name}>
            <div className="wmeta">
              <span className="cat">Project</span>
              <span className="wyr">{p.year}</span>
            </div>
            <div>
              <h3>
                <a href={p.repo} target="_blank" rel="noopener noreferrer">
                  {p.name}
                </a>
              </h3>
              {p.description && <p className="clamp">{p.description}</p>}
            </div>
          </div>
        ))}

        <div className="seeall">
          <Link href="/research">All research →</Link>
          <Link href="/projects">All projects →</Link>
        </div>
      </section>
    </section>
  );
}
