import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { education, achievements } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const EducationAndAchievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Academic Qualifications & Key Milestones
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education & Achievements.
        </h2>
      </motion.div>

      {/* Achievements Counter Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {achievements.map((item, index) => (
          <Tilt key={item.title}>
            <motion.div
              variants={fadeIn("up", "spring", index * 0.2, 0.75)}
              className="bg-tertiary p-6 rounded-2xl border border-white/10 shadow-xl h-full flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#915eff] to-[#00d8ff] flex items-center justify-center text-white text-lg font-bold mb-4 shadow-lg">
                  🏆
                </div>
                <h3 className="text-white font-bold text-lg leading-snug">
                  {item.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mt-2">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* Education Cards */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-2">
          <span>🎓</span> Academic Background
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              variants={fadeIn(index % 2 === 0 ? "right" : "left", "spring", 0.3, 0.75)}
              className="bg-black-100/80 p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group hover:border-[#00d8ff]/50 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#915eff]/20 to-transparent rounded-bl-full pointer-events-none" />

              <span className="text-xs font-semibold text-[#00d8ff] bg-[#00d8ff]/10 border border-[#00d8ff]/30 px-3 py-1 rounded-full uppercase tracking-wider">
                {edu.score}
              </span>

              <h4 className="text-white font-bold text-xl mt-4 leading-tight">
                {edu.degree}
              </h4>
              <p className="text-[#915eff] font-semibold text-sm mt-1">
                {edu.institution}
              </p>
              <p className="text-xs text-secondary mt-1 font-mono">{edu.period}</p>

              <p className="text-slate-300 text-sm leading-relaxed mt-4 pt-4 border-t border-white/10">
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(EducationAndAchievements, "education");
