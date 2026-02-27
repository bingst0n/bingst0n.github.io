"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedGrid from "@/components/animated-grid";
import FloatingParticles from "@/components/floating-particles";
import TypewriterName from "@/components/typewriter-name";
import ScrollReveal from "@/components/scroll-reveal";

const projects = [
  {
    title: "forward & backward propagation",
    description:
      "mathematical breakdown of modern ann processes, covering relu, softmax, and cross-entropy loss functions.",
    tags: ["2025", "calculus", "pdf"],
    href: "/A_Mathematical_Analysis_of_Forward_and_Backward_Propagation_in_Artificial_Neural_Networks.pdf",
  },
  {
    title: "music theory & math",
    description:
      "a book-style manuscript explaining the structures of music theory from a mathematical perspective.",
    tags: ["2026", "music theory", "manuscript"],
    href: "https://www.overleaf.com/read/fydqjsncjcxy#1da53b",
  },
  {
    title: "cnn literary survey",
    description:
      "a literary survey on modern computer vision through the convolutional neural network.",
    tags: ["2025", "ai", "pdf"],
    href: "/Literary_Survey__Modern_Computer_Vision_Through_the_Convolutional_Neural_Network.pdf",
  },
];

export default function Home() {
  const [typewriterDone, setTypewriterDone] = useState(false);

  return (
    <div className="relative min-h-screen">
      <AnimatedGrid />
      <FloatingParticles />
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Hero */}
        <header className="mb-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <TypewriterName onComplete={() => setTypewriterDone(true)} />
          </motion.div>
          <motion.p
            className="mt-5 text-lg"
            style={{ color: "hsl(150 20% 18% / 0.6)" }}
            initial={{ opacity: 0, x: -60 }}
            animate={typewriterDone ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            avenues: the world school, class of 2029
          </motion.p>
          <motion.p
            className="mt-3 text-lg"
            style={{ color: "hsl(130 22% 33%)" }}
            initial={{ opacity: 0, x: -60 }}
            animate={typewriterDone ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.12, ease: "easeOut" }}
          >
            mathematician{" "}
            <span
              className="inline-block w-1.5 h-1.5 rounded-full mx-2 align-middle"
              style={{ backgroundColor: "hsl(130 22% 33%)" }}
            />{" "}
            musician{" "}
            <span
              className="inline-block w-1.5 h-1.5 rounded-full mx-2 align-middle"
              style={{ backgroundColor: "hsl(130 22% 33%)" }}
            />{" "}
            ai explorer
          </motion.p>
        </header>

        {/* Nav */}
        <motion.nav
          className="flex justify-between mb-16 text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="#projects" className="nav-link">
            projects &amp; skills
          </a>
          <a href="#about" className="nav-link">
            about
          </a>
          <a href="#contact" className="nav-link">
            contact
          </a>
        </motion.nav>

        {/* Intro */}
        <ScrollReveal>
          <section className="mb-16">
            <p
              className="text-base italic mb-2"
              style={{ color: "hsl(150 10% 45%)" }}
            >
              exploring systems — mathematical, musical, and human.
            </p>
            <p className="text-base" style={{ color: "hsl(150 20% 18% / 0.8)" }}>
              evidence of work across math, ai/coding, music and music theory, and
              mandarin chinese.
            </p>
          </section>
        </ScrollReveal>

        {/* Projects */}
        <ScrollReveal>
          <section id="projects" className="mb-16 scroll-mt-24">
            <p
              className="text-xs tracking-widest mb-6"
              style={{ color: "hsl(130 22% 33%)" }}
            >
              discipline
            </p>

            <h2
              className="text-3xl md:text-4xl font-light mb-2"
              style={{ color: "hsl(150 20% 18%)", fontFamily: "'DM Mono', monospace" }}
            >
              mathematics
            </h2>
            <p className="text-base mb-4" style={{ color: "hsl(150 10% 45%)" }}>
              the language of structure, from geometry to computation.
            </p>
            <p
              className="text-base mb-8 leading-relaxed"
              style={{ color: "hsl(150 20% 18% / 0.8)" }}
            >
              i study math through avenues&apos; self-paced institute for advanced
              mathematics, mentored by dr. patrick galarza. i&apos;m on track to
              complete multivariable calculus by junior year, and am working on
              publishing original research!
            </p>

            <div className="grid gap-4">
              {projects.map((project, i) => (
                <ScrollReveal key={project.title} delay={i * 0.1}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card block"
                  >
                    <h3
                      className="text-xl font-normal mb-1"
                      style={{
                        color: "hsl(150 20% 18%)",
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-base mb-3 leading-relaxed"
                      style={{ color: "hsl(150 10% 45%)" }}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          className="tag-pill"
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: tagIndex * 0.05,
                            type: "spring",
                            stiffness: 300,
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* About */}
        <ScrollReveal>
          <section id="about" className="mb-16 scroll-mt-24">
            <h2
              className="text-3xl md:text-4xl font-light mb-1"
              style={{
                color: "hsl(150 20% 18%)",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              harrison r. green
            </h2>
            <p className="text-base mb-6" style={{ color: "hsl(130 22% 33%)" }}>
              mathematician{" "}
              <span
                className="inline-block w-1 h-1 rounded-full mx-1.5 align-middle"
                style={{ backgroundColor: "hsl(130 22% 33%)" }}
              />{" "}
              musician{" "}
              <span
                className="inline-block w-1 h-1 rounded-full mx-1.5 align-middle"
                style={{ backgroundColor: "hsl(130 22% 33%)" }}
              />{" "}
              ai enthusiast{" "}
              <span
                className="inline-block w-1 h-1 rounded-full mx-1.5 align-middle"
                style={{ backgroundColor: "hsl(130 22% 33%)" }}
              />{" "}
              bilingual storyteller
            </p>

            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "hsl(150 20% 18% / 0.8)" }}
            >
              i&apos;m a student at avenues: the world school in new york city.
              i&apos;m passionate about the underlying mathematics of artificial
              intelligence systems, from the calculus of gradient descent to the
              integration of cross-correlation in the convolutional neural network.
              outside of stem, i&apos;m a guitarist exploring the intersections of
              music theory and mathematics, and a fluent mandarin chinese speaker and
              volunteer around the city.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-base">
              <div className="info-card">
                <span className="text-base mr-2">📍</span>
                <span style={{ color: "hsl(150 10% 45%)" }}>location:</span>
                <span
                  className="block mt-1"
                  style={{ color: "hsl(150 20% 18%)" }}
                >
                  new york city
                </span>
              </div>
              <div className="info-card">
                <span className="text-base mr-2">🏫</span>
                <span style={{ color: "hsl(150 10% 45%)" }}>education:</span>
                <span
                  className="block mt-1"
                  style={{ color: "hsl(150 20% 18%)" }}
                >
                  avenues: the world school
                </span>
              </div>
              <div className="info-card">
                <span className="text-base mr-2">📚</span>
                <span style={{ color: "hsl(150 10% 45%)" }}>interests:</span>
                <span
                  className="block mt-1"
                  style={{ color: "hsl(150 20% 18%)" }}
                >
                  math • ai • music • mandarin
                </span>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Contact */}
        <ScrollReveal>
          <section id="contact" className="mb-24 scroll-mt-24">
            <h2
              className="text-3xl md:text-4xl font-light mb-6"
              style={{
                color: "hsl(150 20% 18%)",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              get in touch
            </h2>
            <div className="flex gap-4">
              <a href="mailto:harrisonrgreen@gmail.com" className="ghost-button">
                email
              </a>
              <a
                href="https://github.com/bingst0n"
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-button"
              >
                github
              </a>
            </div>
          </section>
        </ScrollReveal>

        {/* Footer */}
        <footer
          className="text-center text-xs pb-8"
          style={{ color: "hsl(150 10% 45%)" }}
        >
          © 2026 harrison green
        </footer>
      </div>
    </div>
  );
}
