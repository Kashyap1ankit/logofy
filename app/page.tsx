import Navbar from "@/components/native/Navbar/nav-bar";
import GradientBlinds from "@/components/GradientBlinds";
import NewLandingContent from "@/components/native/Landing/new-landing";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full relative bg-black overflow-hidden selection:bg-purple-500/30">
        <div className="fixed inset-0 z-0">
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

        <div className="relative z-10">
          <Navbar />
          <NewLandingContent />
        </div>
      </div>
    </>
  );
}
