import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  canTilt,
}) => {
  // Inner Card Content with modern, cross-browser compatible styles
  const cardContent = (
    <div className="bg-tertiary p-5 xs:p-6 rounded-2xl w-full border border-white/10 shadow-2xl flex flex-col justify-between h-full group hover:border-[#00d8ff]/40 transition-colors duration-300">
      <div>
        {/* Project Thumbnail Image with standard overflow clipping (Safari iOS safe) */}
        <div className="relative w-full h-[200px] xs:h-[220px] rounded-xl overflow-hidden isolation-isolate bg-[#0f0c23]">
          <img
            src={image}
            alt={name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 will-change-transform"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 pointer-events-none" />

          {/* External Action Button (Uses semantic <a> tag to avoid iOS popup blocker) */}
          <div className="absolute top-3 right-3 flex gap-2">
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer border border-white/20 hover:border-[#00d8ff] hover:scale-110 active:scale-95 transition-all shadow-md z-10"
              title="View Source Code / Live App"
              aria-label={`View ${name} source code or live deployment`}
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </a>
          </div>
        </div>

        {/* Project Title and Description */}
        <div className="mt-4">
          <h3 className="text-white font-bold text-[19px] xs:text-[20px] leading-tight group-hover:text-[#00d8ff] transition-colors">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[13.5px] xs:text-[14px] leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Tech Tags */}
      <div className="mt-5 pt-3 border-t border-white/10 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag.name}
            className={`text-[12px] font-mono px-2.5 py-1 rounded-md bg-black-100/90 border border-white/5 break-words ${tag.color}`}
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      variants={fadeIn("up", "spring", (index % 3) * 0.1, 0.6)}
      className="w-full max-w-[390px] sm:max-w-none sm:w-[360px] flex flex-col"
    >
      {canTilt ? (
        <Tilt
          options={{
            max: 20,
            scale: 1.01,
            speed: 400,
            transition: true,
            perspective: 1000,
          }}
          className="w-full h-full flex flex-col"
        >
          {cardContent}
        </Tilt>
      ) : (
        <div className="w-full h-full flex flex-col">{cardContent}</div>
      )}
    </motion.div>
  );
};

const Works = () => {
  const [canTilt, setCanTilt] = useState(false);

  useEffect(() => {
    // Enable 3D tilt exclusively on devices with fine pointer hover (desktop/laptop)
    // Prevents touch-scroll lock, layer clipping, and 3D transform glitches on iOS Safari / mobile
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
      setCanTilt(mediaQuery.matches);

      const handleChange = (e) => setCanTilt(e.matches);
      mediaQuery.addEventListener?.("change", handleChange);
      return () => mediaQuery.removeEventListener?.("change", handleChange);
    }
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Enterprise & Full Stack Deliverables
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Major Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.05, 0.8)}
          className="mt-4 text-secondary text-[16px] max-w-3xl leading-[28px] text-center mx-auto"
        >
          Explore my core project portfolio including enterprise Hospital Management Information Systems (HMIS), Call Audit Management System with Audio APIs & AG Grid, ASP.NET Core REST APIs, and full stack React/Node.js web applications.
        </motion.p>
      </div>

      <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-7 sm:gap-8 max-w-7xl mx-auto w-full">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            canTilt={canTilt}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects", 0.01);
