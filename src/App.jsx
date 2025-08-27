import NavBar from './components/NavBar' 
import HeroSection from './sections/HeroSection'
import MessageSection from './sections/MessageSection'
import FlavorSection from './sections/FlavorSection'
import NutritionSection from './sections/NutritionSection'
import BenefitSection from './sections/BenefitSection'



import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />

          <BenefitSection />
          <div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;

