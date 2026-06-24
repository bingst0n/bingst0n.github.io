"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/content/site";

// Sticky top navigation. Highlights the active tab via the current path.
export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="nav">
      <div className="nav-in">
        <Link className="brand" href="/">
          {profile.name} {profile.accentWord}
        </Link>
        <Link
          className={`tab${pathname === "/research" ? " active" : ""}`}
          href="/research"
        >
          Research
        </Link>
        <Link
          className={`tab${pathname === "/projects" ? " active" : ""}`}
          href="/projects"
        >
          Projects
        </Link>
        <a
          className="resume"
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Résumé
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
    </header>
  );
}
