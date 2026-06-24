import { research } from "@/content/site";

export default function Research() {
  return (
    <section className="view">
      <h1 className="pagetitle">Research &amp; Writing</h1>
      <div className="plist">
        {research.map((r) => (
          <div className="e" key={r.title}>
            <div className="yr">{r.year}</div>
            <div>
              <h3>
                <a href={r.pdf} target="_blank" rel="noopener noreferrer">
                  {r.title}
                </a>
              </h3>
              {r.description && <p>{r.description}</p>}
              <a className="glink" href={r.pdf} target="_blank" rel="noopener noreferrer">
                Read PDF ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
