import Faq from "@/components/native/Landing/faq";
import Footer from "@/components/native/Landing/footer";
import GalleryComp from "@/components/native/Landing/gallery";
import { HeroSection } from "@/components/native/Landing/hero";
import HowItWorks from "@/components/native/Landing/how-work";
import Navbar from "@/components/native/Navbar/nav-bar";

import GradientBlinds from "@/components/GradientBlinds";

export default function Home() {
  return (
    <>
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <div className="absolute inset-0 -z-1">
          <GradientBlinds
            gradientColors={["#FF9FFC", "#5227FF"]}
            angle={0}
            noise={0.62}
            blindCount={16}
            blindMinWidth={105}
            spotlightRadius={0.5}
            spotlightSoftness={1}
            spotlightOpacity={1}
            mouseDampening={0.15}
            distortAmount={0}
            shineDirection="left"
            mixBlendMode="lighten"
            color1="#FF9FFC"
            color2="#5227FF"
          />
        </div>

        <Navbar />
        <div className=" pt-12  ">
          <HeroSection />
          <GalleryComp />
          <HowItWorks />
          <Faq />
          <Footer />
        </div>
      </div>
    </>
  );
}

// <Navbar />
// <div className=" pt-12 ">
//   <HeroSection />
//   <GalleryComp />

//   <HowItWorks />
//   <Faq />

//   <Footer />
// </div>
