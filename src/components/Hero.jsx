import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { personalInfo } from "../constants";

const Hero = () => {
  return (
    <section
      style={{ backgroundColor: "#050816", position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}
    >
      {/* 3D Computer Canvas — full section background, rendered first (z-index 0) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <ComputersCanvas />
      </div>

      {/* Text overlay — above canvas (z-index 10) */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        style={{ zIndex: 10, pointerEvents: "none" }}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div style={{ pointerEvents: "auto" }}>
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
            <span
              className="px-3 py-1.5 rounded-lg"
              style={{ background: "#0f2e1f", border: "1px solid #34d399", color: "#34d399" }}
            >
              ASP.NET Core + React + SQL
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm"
              style={{
                background: "linear-gradient(135deg, #915eff, #00d8ff)",
                boxShadow: "0 4px 20px rgba(145,94,255,0.4)",
              }}
            >
              🚀 Major Projects
            </a>
            <a
              href="#contact"
              className="text-white font-semibold px-5 py-2.5 rounded-xl text-xs sm:text-sm"
              style={{ background: "#151030", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              ✉️ Contact Srikanth
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 w-full flex justify-center items-center"
        style={{ zIndex: 10 }}
      >
        <a href="#about" aria-label="Scroll down">
          <div
            className="w-[35px] h-[64px] rounded-3xl flex justify-center items-start p-2"
            style={{ border: "4px solid #aaa6c3" }}
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "#aaa6c3" }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
