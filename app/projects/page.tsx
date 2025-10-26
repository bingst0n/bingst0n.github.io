import projects from "@/content/projects.json";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-white/90">Projects</h1>
        {"intro" in projects && (
          <p className="text-white/70">{(projects as any).intro}</p>
        )}
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-white/90">{projects.mathematics.title}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.mathematics.items.map((m, i: number) => (
            <Card key={i} className="bg-white/5 border-white/10 backdrop-blur p-5 text-white/80">
              <h3 className="font-medium text-white/90">{m.title}</h3>
              <p className="text-white/70 mt-1 text-sm">{m.description}</p>
              <Link href={m.link} className="text-blue-300 hover:text-blue-200 mt-3 inline-block text-sm">
                View
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-white/90">{projects.music.title}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.music.items.map((m, i: number) => (
            <Card key={i} className="bg-white/5 border-white/10 backdrop-blur p-5 text-white/80">
              <h3 className="font-medium text-white/90">{m.title}</h3>
              <p className="text-white/70 mt-1 text-sm">{m.description}</p>
              <Link href={m.link} className="text-blue-300 hover:text-blue-200 mt-3 inline-block text-sm">
                Listen
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-white/90">{projects.mandarin.title}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.mandarin.items.map((m, i: number) => (
            <Card key={i} className="bg-white/5 border-white/10 backdrop-blur p-5 text-white/80">
              <h3 className="font-medium text-white/90">{m.title}</h3>
              <p className="text-white/70 mt-1 text-sm">{m.description}</p>
              <Link href={m.link} className="text-blue-300 hover:text-blue-200 mt-3 inline-block text-sm">
                View
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-white/90">{projects.general.title}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.general.items.map((p, i: number) => (
            <Card key={i} className="bg-white/5 border-white/10 backdrop-blur p-5 text-white/80">
              <h3 className="font-medium text-white/90">{p.title}</h3>
              <p className="text-white/70 mt-1 text-sm">{p.description}</p>
              <Link href={p.link} className="text-blue-300 hover:text-blue-200 mt-3 inline-block text-sm">
                View
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
