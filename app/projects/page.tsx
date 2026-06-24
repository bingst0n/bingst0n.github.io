import { projects, profile } from "@/content/site";

export default function Projects() {
  return (
    <section className="view">
      <h1 className="pagetitle">Projects</h1>
      <p className="pagenote">
        Public repositories. Descriptions come from each project&apos;s GitHub
        description or README; some have none yet.
      </p>
      <div className="plist">
        {projects.map((p) => (
          <div className="e" key={p.name}>
            <div className="yr">{p.year}</div>
            <div>
              <h3>
                <a href={p.repo} target="_blank" rel="noopener noreferrer">
                  {p.name}
                </a>
                <span className="lang">{p.language}</span>
              </h3>
              {p.description && <p>{p.description}</p>}
              <a className="glink" href={p.repo} target="_blank" rel="noopener noreferrer">
                View code ↗
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="more">
        <a href={profile.contacts.github.href} target="_blank" rel="noopener noreferrer">
          More on GitHub ↗
        </a>
      </p>
    </section>
  );
}
