import music from "@/content/music.json";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function MusicPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-white/90">Music</h1>
      <p className="text-white/70">{music.intro}</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {music.items.map((m, i) => (
          <Card key={i} className="bg-white/5 border-white/10 backdrop-blur p-5 text-white/80">
            <h3 className="font-medium text-white/90">{m.title}</h3>
            <p className="text-white/70 mt-1 text-sm">{m.description}</p>
            <Link href={m.link} className="text-blue-300 hover:text-blue-200 mt-3 inline-block text-sm">
              View
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
