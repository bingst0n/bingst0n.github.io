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

      {(projects as any).sections.map((section: { title: string; items: { title: string; description: string; link: string }[] }, idx: number) => (
        <section key={idx} className="space-y-4">
          <h2 className="text-xl font-medium text-white/90">{section.title}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {section.items.map((item, i) => (
              <Card key={i} className="bg-[#C7F9CC]/10 border-[#57CC99]/20 backdrop-blur-md p-5 text-white/80 hover:bg-[#C7F9CC]/15 transition-all duration-200">
                <h3 className="font-medium text-white/95">{item.title}</h3>
                <p className="text-white/75 mt-1 text-sm">{item.description}</p>
                <Link href={item.link} className="text-[#57CC99] hover:text-[#80ED99] mt-3 inline-block text-sm transition-colors">
                  View
                </Link>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
