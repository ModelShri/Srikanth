import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  EducationAndAchievements,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-[#050816] font-sans antialiased text-white selection:bg-[#00d8ff] selection:text-black min-h-screen">
        <div className="bg-[#050816] bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <EducationAndAchievements />
        <Feedbacks />
        <div className="relative z-0 bg-[#050816]">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
