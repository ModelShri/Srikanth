import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { personalInfo } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-[#050816] overflow-hidden">
      {/* 3D Computer Canvas - full screen background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <ComputersCanvas />
      </div>

      {/* Text content overlay */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10 pointer-events-none`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="pointer-events-auto">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">{personalInfo.name}</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-xl`}>
            Senior{" "}
            <span className="text-[#00d8ff] font-bold">Full Stack .NET Developer</span>{" "}
            &{" "}
            <span className="text-[#915eff] font-bold">React Specialist</span>{" "}
            with 6+ years experience.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs sm:text-sm font-medium">
            <span className="bg-tertiary border border-white/10 px-3 py-1.5 rounded-lg text-white">
              6+ Yrs Exp
            </span>
            <span className="bg-tertiary border border-white/10 px-3 py-1.5 rounded-lg text-white">
              10+ Modules HMIS
            </span>
            <span className="bg-emerald-950/80 border border-emerald-500/50 px-3 py-1.5 rounded-lg text-emerald-400">
              ASP.NET Core + React + SQL
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-[#915eff] to-[#00d8ff] text-white font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-[#915eff]/30 hover:scale-105 transition-all text-xs sm:text-sm"
            >
              🚀 Major Projects
            </a>
            <a
              href="#contact"
              className="bg-tertiary border border-white/20 hover:border-[#00d8ff] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-white/10 transition-all text-xs sm:text-sm"
            >
              ✉️ Contact Srikanth
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 w-full flex justify-center items-center z-10">
        <a href="#about" aria-label="Scroll to About section">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
