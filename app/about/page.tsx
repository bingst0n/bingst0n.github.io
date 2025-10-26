import about from "@/content/about.json";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-white/90">About</h1>
      <Card className="bg-white/5 border-white/10 backdrop-blur p-6 text-white/80">
        <h2 className="text-xl font-medium text-white/90">{about.name}</h2>
        <p className="text-white/70 mt-1">{about.tagline}</p>
        <p className="mt-4 leading-relaxed">{about.bio}</p>
      </Card>
    </div>
  );
}
