import SmoothScroll from "./components/SmoothScroll";
import ScrollProgress from "./components/ScrollProgress";
import MouseAura from "./components/MouseAura";
import Hero from "./components/Hero";
import WhyThisMatters from "./components/WhyThisMatters";
import LoadSkills from "./components/LoadSkills";
import ReferenceBoard from "./components/ReferenceBoard";
import AiStackSection from "./components/AiStackSection";
import PingPong from "./components/PingPong";
import BuildPath from "./components/BuildPath";
import VercelDeployGuide from "./components/VercelDeployGuide";
import Proof from "./components/Proof";
import Resources from "./components/Resources";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <MouseAura />
      <a
        href="#why"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:start-2 focus:z-[60] focus:rounded focus:bg-slate-dark focus:px-4 focus:py-2 focus:text-ivory-light"
      >
        דלגו לתוכן
      </a>
      <main>
        <Hero />
        <WhyThisMatters />
        <LoadSkills />
        <ReferenceBoard />
        <AiStackSection />
        <PingPong />
        <BuildPath />
        <VercelDeployGuide />
        <Proof />
        <Resources />
      </main>
      <Footer />
    </>
  );
}
