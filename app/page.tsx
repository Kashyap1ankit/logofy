import Faq from "@/components/native/Landing/faq";
import Footer from "@/components/native/Landing/footer";
import { HeroSection } from "@/components/native/Landing/hero";
import HowItWorks from "@/components/native/Landing/how-work";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Navbar from "@/components/native/Navbar/nav-bar";
import { DotBackgroundDemo } from "@/components/ui/dot-background";

export default function Home() {
  return (
    <>
      <Navbar />
      <AuroraBackground className="pt-20">
        <div className="z-10">
          <HeroSection />
          <DotBackgroundDemo>
            <>
              <HowItWorks />
              <Faq />
            </>
          </DotBackgroundDemo>
          <Footer />
        </div>
      </AuroraBackground>
    </>
  );
}
