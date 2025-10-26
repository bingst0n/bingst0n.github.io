import awards from "@/content/awards.json";
import { Card } from "@/components/ui/card";

export default function AwardsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-white/90">Awards</h1>
      <p className="text-white/70">{awards.intro}</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {awards.items.map((a, i) => (
          <Card key={i} className="bg-[#C7F9CC]/10 border-[#57CC99]/20 backdrop-blur-md p-5 text-white/80 hover:bg-[#C7F9CC]/15 transition-all duration-200">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-white/90">{a.title}</h3>
              {a.year && <span className="text-white/60 text-xs">{a.year}</span>}
            </div>
            <p className="text-white/70 mt-1 text-sm">{a.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
