import { Courses } from "@/components/Courses";
import { CoreValue } from "@/components/CoreValue";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Participate } from "@/components/Participate";
import { SamplePreview } from "@/components/SamplePreview";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <main>
        <Hero />
        <CoreValue />
        <Features />
        <Courses />
        <SamplePreview />
        <Participate />
      </main>
    </div>
  );
}
