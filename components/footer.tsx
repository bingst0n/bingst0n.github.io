import { profile } from "@/content/site";

// Shared footer rendered at the bottom of every page.
export default function Footer() {
  return (
    <footer className="foot">
      <span>© 2026 Harrison R. Green</span>
      <a href={`mailto:${profile.contacts.email}`}>Email</a>
      <a href={profile.contacts.linkedin.href} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <a href={profile.contacts.github.href} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <span className="sp">New York City</span>
    </footer>
  );
}
