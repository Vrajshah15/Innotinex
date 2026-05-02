import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Process } from "@/components/sections/Process";
import { Trust } from "@/components/sections/Trust";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <Process />
        <Trust />
        <ProjectsPreview />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
