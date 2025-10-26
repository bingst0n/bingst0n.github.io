import Link from "next/link";

export const metadata = {
  title: "Contact | Harrison Green",
  description: "Get in touch with Harrison Green.",
};

export default function ContactPage() {
  return (
    <main aria-labelledby="contact-title">
      <section className="section">
        <div className="container">
          <h1 id="contact-title" className="display" style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
            Contact
          </h1>
          <p className="mono" style={{ marginTop: '.5rem' }}>Let’s collaborate or just talk about ideas.</p>

          <div style={{ marginTop: '1.2rem', display: 'flex', gap: '.8rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a className="btn" href="mailto:harrison@example.com" aria-label="Email Harrison">harrison@example.com</a>
            <a className="btn" href="https://github.com/bingst0n" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              GitHub
            </a>
            <a className="btn" href="https://soundcloud.com/" target="_blank" rel="noopener noreferrer" aria-label="SoundCloud profile">
              SoundCloud
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
