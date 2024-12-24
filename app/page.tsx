import Faq from "@/components/native/Landing/faq";
import Footer from "@/components/native/Landing/footer";
import GalleryComp from "@/components/native/Landing/gallery";
import { HeroSection } from "@/components/native/Landing/hero";
import HowItWorks from "@/components/native/Landing/how-work";
import Navbar from "@/components/native/Navbar/nav-bar";
import { DotBackgroundDemo } from "@/components/ui/dot-background";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-black pt-12 ">
        <HeroSection />
        <GalleryComp />
        <DotBackgroundDemo>
          <>
            <HowItWorks />
            <Faq />
          </>
        </DotBackgroundDemo>
        <Footer />
      </div>
    </>
  );
}
