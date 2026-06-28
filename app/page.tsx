import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { WhyAdvanc3D } from "@/components/why-advanc3d";
import { Process } from "@/components/process";
import { Materials } from "@/components/materials";
import { CtaBottom } from "@/components/cta-bottom";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <WhyAdvanc3D />
        <Process />
        <Materials />
        <CtaBottom />
      </main>
      <Footer />
    </>
  );
}
