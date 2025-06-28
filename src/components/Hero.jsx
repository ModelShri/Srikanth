import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Srikanth</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[915eff]`}>
            I'm a passionate{" "}
            <span className="text-white">
              Full Stack <br className="sm:block hidden" />
              web application Developer.
            </span>
          </p>
        </div>
      </div>
     
      <ComputersCanvas />
   

      <div
        className="absolute xs:bottom-0
      bottom-32 w-full flex justify-center items-center"
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-x-secondary flex justify-center items-start p-2">
            <motion.div
              whileInView={{
                y: [0, 32, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
              className="w-[10px] h-[10px] rounded-full bg-secondary"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
