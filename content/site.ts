// ─────────────────────────────────────────────────────────────────────────────
//  SITE CONTENT — edit ALL editable text here.
//
//  This is the single source of truth for every word on the site. The pages and
//  components import from this file and loop over the arrays, so you never need to
//  touch the React/HTML to change copy.
//
//  Three exports:
//    • profile  → your name, titles, blurb, education, and contact links
//    • research → the list of papers shown on the Research page
//    • projects → the list of repositories shown on the Projects page
//
//  "featured: true" marks the items that appear in the "some things i've worked
//  on…" overview on the HOME page. Exactly four items are featured.
//
//  File locations (drop new files here, then reference them below):
//    • Portrait photo:  public/portrait.png        → referenced as "/portrait.png"
//    • Résumé PDF:      public/resume.pdf          → referenced as "/resume.pdf"
//    • Paper PDFs:      public/papers/<name>.pdf   → referenced as "/papers/<name>.pdf"
// ─────────────────────────────────────────────────────────────────────────────

// ── YOU: name, titles, blurb, education, contacts ──────────────────────────────
export const profile = {
  name: "Harrison R.", // shown large; the accentWord below is appended in green
  accentWord: "Green", // the part of the name tinted forest-green
  // Each string becomes its own line under the name.
  titleLines: [
    "Student of the mathematics behind modern AI",
    "High School Student in NYC",
  ],
  // The intro paragraph on the home page.
  blurb:
    "Hi, I'm Harrison! I'm a ninth-grade student in New York City, who is fascinated by the mathematics beneath artificial intelligence, from the calculus of gradient descent to the cross-correlation at the heart of convolutional networks. I write expository papers on what I learn, and build projects to put it into practice. Outside of math, I play guitar, and speak Mandarin.",
  // The "Education" block on the home page (one entry per school).
  // Contact links shown in the identity header and footer.
  contacts: {
  //  location: { label: "New York City", href: "https://www.google.com/maps/place/New+York,+NY" },
    email: "harrisonrgreen@gmail.com",
    linkedin: { handle: "harrisonrgreen", href: "https://www.linkedin.com/in/harrisonrgreen" },
    github: { handle: "bingst0n", href: "https://github.com/bingst0n" },
  },
  resume: "/resume.pdf", // path to the résumé PDF in public/
};

// ── RESEARCH & WRITING — one entry per paper ───────────────────────────────────
//  Newest first. Leave description as "" for items that intentionally have none.
//  "pdf" is the file under public/papers/. "featured: true" shows it on home.
export const research = [
  {
    year: "2026",
    title: "Patterns in Large Language Model Reasoning Across Languages",
    description:
      "Modern LLMs are almost always capable of both communication, and reasoning multilingually—that is, reasoning in a multitude of languages—but does the language of reasoning affect the model's performance as a whole? This paper investigates exactly the relationship between reasoning language, and performance.",
    pdf: "/papers/Patterns_in_Large_Language_Model_Reasoning_Across_Languages.pdf",
    featured: true,
  },
  {
    year: "2025",
    title: "Modern Computer Vision Through the Convolutional Neural Network",
    description:
      "Convolutional neural networks (CNNs) are one of the most influential developments in modern machine learning, enabling computers to interpret visual information with extremely high levels of accuracy—this field is called “computer vision”. Their success is formed from the fusion of artificial neural network principles with the mathematical process of convolution (more specifically, cross-correlation), producing systems that efficiently and effectively learn complex spatial features.",
    pdf: "/papers/Modern_Computer_Vision_Through_the_Convolutional_Neural_Network.pdf",
    featured: true,
  },
  {
    year: "2025",
    title: "Modern Computer Vision Through the CNN — Literary Survey",
    description: "", // intentionally has no description
    pdf: "/papers/Literary_Survey__Modern_Computer_Vision_Through_the_Convolutional_Neural_Network.pdf",
    featured: false,
  },
  {
    year: "2025",
    title: "A Mathematical Overview of Forward and Backward Propagation in Artificial Neural Networks",
    description:
      "First formalized in 1943 by Warren McCulloch and Walter Pitts, the artificial neural network (ANN) has served as an integral tool and foundational component to the development of modern artificial intelligence. Modeled after the human brain, these man-made connections of neurons have served as a highly effective basis for modern technological innovation.",
    pdf: "/papers/A_Mathematical_Analysis_of_Forward_and_Backward_Propagation_in_Artificial_Neural_Networks.pdf",
    featured: false,
  },
];

// ── PROJECTS — one entry per repository ────────────────────────────────────────
//  "language" is the badge shown next to the name. Leave description as "" for
//  repos that have none yet. "repo" is the GitHub URL. "featured: true" shows it
//  on home (note: the home blurb for featured items may differ slightly from the
//  full description below — both come from this file).
export const projects = [
  {
    year: "2026",
    name: "bilingualreasoning",
    language: "Python",
    description:
      "A J-Term research project investigating whether constraining a large language model to a single language — English-only or Mandarin-only — during mathematical reasoning produces a measurable accuracy difference, and what language-switching patterns emerge when the model is left to reason without constraint.",
    repo: "https://github.com/bingst0n/bilingualreasoning",
    featured: false,
  },
  {
    year: "2026",
    name: "quant-finance",
    language: "Python",
    description: "Improving data science, ML and finance skills through a quantitative finance AI portfolio.",
    repo: "https://github.com/bingst0n/quant-finance",
    featured: true,
  },
  {
    year: "2026",
    name: "nyuml_fishprediction",
    language: "Python",
    description:
      "A from-scratch implementation of polynomial ridge regression that predicts the weight of a fish from its physical measurements. Built as part of the NYU Machine Learning 2024 course (Session 1, Day 5).",
    repo: "https://github.com/bingst0n/nyuml_fishprediction",
    featured: true,
  },
  {
    year: "2025",
    name: "latexify",
    language: "TypeScript",
    description: "", // intentionally has no description
    repo: "https://github.com/bingst0n/latexify",
    featured: false,
  },
  {
    year: "2026",
    name: "pygame_game",
    language: "Python",
    description: "", // intentionally has no description
    repo: "https://github.com/bingst0n/pygame_game",
    featured: false,
  },
  {
    year: "2026",
    name: "lalpEmailer",
    language: "Python",
    description: "", // intentionally has no description
    repo: "https://github.com/bingst0n/lalpEmailer",
    featured: false,
  },
];
