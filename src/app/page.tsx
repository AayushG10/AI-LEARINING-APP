import Herosection from "../components/Herosection";
import Featurecourse from "../components/Featurecourse";
import Mentor from "../components/Mentor";
import Whychooseus from "../components/Whychooseus";
import Review from "../components/Review";
import Webinar from "../components/Webinar";
import AnimatedTooltipPreview from "../components/AnimatedTooltipPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div>
        <Herosection />
        <Featurecourse />
        <Whychooseus />
    
        <Review />
        <Webinar/>
        <Mentor/>
        <AnimatedTooltipPreview />
      </div>
    </main>
  );
}
