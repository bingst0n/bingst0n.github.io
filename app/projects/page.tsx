import projects from "@/content/projects.json";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-white/90">Projects</h1>
      <p className="text-white/70">{projects.intro}</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.items.map((p, i) => (
          <Card key={i} className="bg-white/5 border-white/10 backdrop-blur p-5 text-white/80">
            <h3 className="font-medium text-white/90">{p.title}</h3>
            <p className="text-white/70 mt-1 text-sm">{p.description}</p>
            <Link href={p.link} className="text-blue-300 hover:text-blue-200 mt-3 inline-block text-sm">
              View
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
