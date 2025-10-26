import contact from "@/content/contact.json";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-white/90">Contact</h1>
      <p className="text-white/70">{contact.intro}</p>
      <Card className="bg-white/5 border-white/10 backdrop-blur p-5 text-white/80">
        <p>
          Email: <a className="text-blue-300 hover:text-blue-200" href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {contact.socials.map((s, i) => (
            <Link key={i} href={s.url} className="rounded-full bg-white/10 px-3 py-1.5 text-white/90 hover:bg-white/15 border border-white/15 text-sm">
              {s.name}
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
}
