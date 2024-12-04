import Faq from "@/components/native/Landing/faq";
import Footer from "@/components/native/Landing/footer";
import { HeroSection } from "@/components/native/Landing/hero";
import HowItWorks from "@/components/native/Landing/how-work";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <Faq />
      <Footer />
    </>
  );
}
