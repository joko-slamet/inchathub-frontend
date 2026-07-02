import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Omnichannel } from "@/components/sections/omnichannel";
import { AiCrm } from "@/components/sections/ai-crm";
import { Whatsapp } from "@/components/sections/whatsapp";
import { Industries } from "@/components/sections/industries";
import { ClosingCta } from "@/components/sections/closing-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Omnichannel />
        <AiCrm />
        <Whatsapp />
        <Industries />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
