export default function Home() {
  return (
    <>
      {/* ── NAV ─────────────────────────────── */}
      <nav>
        <div className="container">
          <div className="logo">
            harrison-green<span className="cursor" />
          </div>
          <ul>
            <li><a href="#work">work</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────── */}
      <header className="hero">
        <div className="container">
          <div className="label">Portfolio · 2026</div>
          <h1>Harrison <em>Green</em></h1>
          <p className="tagline">
            <span className="comment">// mathematician · musician · ai explorer</span>
            <br />
            Studying the math underneath artificial intelligence.
            <br />
            Avenues: The World School, Class of 2029.
          </p>
          <div className="hero-meta">
            <span className="status">open to research collaboration</span>
            <span><strong>LOC:</strong> New York City</span>
            <span><strong>school:</strong> Avenues: The World School</span>
            <span><strong>track:</strong> Multivariable Calculus by junior year</span>
          </div>
        </div>
      </header>

      {/* ── WORK ─────────────────────────────── */}
      <section id="work">
        <div className="container">
          <h2><span className="hash">01 //</span>Selected Work</h2>
          <div className="projects">

            <a
              className="project"
              href="/A_Mathematical_Analysis_of_Forward_and_Backward_Propagation_in_Artificial_Neural_Networks.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="num">/001</div>
              <div>
                <h3>Forward &amp; Backward Propagation</h3>
                <p className="desc">Mathematical breakdown of modern ANN processes, covering ReLU, softmax, and cross-entropy loss functions.</p>
                <div className="tag-row">
                  <span className="tag">calculus</span>
                  <span className="tag">neural networks</span>
                  <span className="tag">pdf</span>
                </div>
              </div>
              <div className="project-meta">
                <div className="year">2025</div>
                <div className="arrow-ico">↗</div>
              </div>
            </a>

            <a
              className="project"
              href="https://www.overleaf.com/read/fydqjsncjcxy#1da53b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="num">/002</div>
              <div>
                <h3>Music Theory &amp; Math</h3>
                <p className="desc">A book-style manuscript explaining the structures of music theory from a mathematical perspective.</p>
                <div className="tag-row">
                  <span className="tag">music theory</span>
                  <span className="tag">algebra</span>
                  <span className="tag">manuscript</span>
                </div>
              </div>
              <div className="project-meta">
                <div className="year">2026</div>
                <div className="arrow-ico">↗</div>
              </div>
            </a>

            <a
              className="project"
              href="/Literary_Survey__Modern_Computer_Vision_Through_the_Convolutional_Neural_Network.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="num">/003</div>
              <div>
                <h3>CNN Literary Survey</h3>
                <p className="desc">A literary survey on modern computer vision through the convolutional neural network.</p>
                <div className="tag-row">
                  <span className="tag">computer vision</span>
                  <span className="tag">ai</span>
                  <span className="tag">pdf</span>
                </div>
              </div>
              <div className="project-meta">
                <div className="year">2025</div>
                <div className="arrow-ico">↗</div>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────── */}
      <section id="about">
        <div className="container">
          <h2><span className="hash">02 //</span>About</h2>
          <div className="about-grid">
            <div className="about-card">
              <dl>
                <dt>name</dt>        <dd>Harrison Green</dd>
                <dt>status</dt>      <dd className="accent">9th grade</dd>
                <dt>school</dt>      <dd>Avenues: The World School</dd>
                <dt>location</dt>    <dd>New York City</dd>
                <dt>math track</dt>  <dd>Institute for Advanced Mathematics</dd>
                <dt>mentor</dt>      <dd>Dr. Patrick Galarza</dd>
                <dt>interests</dt>   <dd>math · ai · music · mandarin</dd>
              </dl>
            </div>
            <div className="about-text">
              <p>
                I&apos;m a student at Avenues: The World School in New York City.
                I&apos;m passionate about the underlying mathematics of artificial intelligence —
                from the calculus of gradient descent to the integration of cross-correlation
                in the convolutional neural network.
              </p>
              <p>
                I study math through Avenues&apos; self-paced Institute for Advanced Mathematics,
                mentored by Dr. Patrick Galarza. I&apos;m on track to complete multivariable calculus
                by junior year, and am working on publishing original research.
              </p>
              <p>
                Outside of math: I&apos;m a guitarist exploring the intersections of music theory
                and mathematics, a fluent Mandarin speaker, and a volunteer around the city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────── */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2><span className="hash">03 //</span>Contact</h2>
          <div className="contact-grid">
            <div>
              <p className="contact-lead">
                If you&apos;re researching something <em>mathematically interesting</em>, I&apos;d love to hear from you.
              </p>
              <p className="contact-sub">
                Open to research collaboration, mentorship, and interesting conversations.
              </p>
            </div>
            <ul className="contact-links">
              <li>
                <span className="key">email</span>
                <a href="mailto:harrisonrgreen@gmail.com">harrisonrgreen@gmail.com</a>
              </li>
              <li>
                <span className="key">github</span>
                <a href="https://github.com/bingst0n" target="_blank" rel="noopener noreferrer">@bingst0n</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────── */}
      <footer>
        <div className="container">
          <span>© 2026 harrison green</span>
          <span>avenues · class of 2029</span>
        </div>
      </footer>
    </>
  );
}
