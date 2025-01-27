import Herosection from "../components/Herosection";
import Featurecourse from "../components/Featurecourse";

import Image from "next/image";
import Whychooseus from "../components/Whychooseus";
import testimonial from "../components/testimonial";
import Review from "../components/Review";
import Webinar from "../components/Webinar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div>
        <Herosection />
        <Featurecourse />
        <Whychooseus />
    
        <Review />
        <Webinar/>
      </div>
    </main>
  );
}
