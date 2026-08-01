import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services, personalInfo } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, desc, icon }) => (
  <Tilt className="xs:w-[280px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.2, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card group"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-6 px-6 min-h-[290px] flex justify-between items-center flex-col text-center border border-white/5 group-hover:border-[#00d8ff]/50 transition-colors duration-300"
      >
        <div className="w-20 h-20 rounded-2xl bg-white/5 p-3 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>

        <h3 className="text-white text-[18px] font-bold mt-3 leading-snug">
          {title}
        </h3>

        <p className="text-secondary text-[13px] leading-relaxed mt-2">
          {desc}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Professional Summary</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-4xl leading-[30px] space-y-4"
      >
        <p className="text-white-100 bg-tertiary/40 border border-white/10 p-6 rounded-2xl shadow-xl">
          {personalInfo.summary}
        </p>

        {/* Key Competencies & Spoken Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="bg-black-100/60 p-5 rounded-xl border border-white/10">
            <h4 className="text-[#00d8ff] font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
              <span>📍</span> Location & Availability
            </h4>
            <p className="text-sm text-white">{personalInfo.location}</p>
            <p className="text-xs text-secondary mt-1">Open to Bengaluru, Remote & Relocation Opportunities</p>
          </div>

          <div className="bg-black-100/60 p-5 rounded-xl border border-white/10">
            <h4 className="text-[#915eff] font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
              <span>🗣️</span> Spoken Languages
            </h4>
            <div className="flex flex-wrap gap-2">
              {personalInfo.languages.map((lang) => (
                <span
                  key={lang}
                  className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/10"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="mt-14 flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
