import React from "react";
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
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.25, 0.75)}>
      <Tilt
        options={{
          max: 35,
          scale: 1.02,
          speed: 400,
          transition: true,
          perspective: 1000,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border border-white/10 shadow-2xl flex flex-col justify-between h-full group"
      >
        <div>
          <div className="relative w-full h-[220px] rounded-xl overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

            <div className="absolute top-3 right-3 flex gap-2">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer border border-white/20 hover:border-[#00d8ff] transition-colors"
                title="View Source Code / Live App"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-white font-bold text-[20px] leading-tight group-hover:text-[#00d8ff] transition-colors">
              {name}
            </h3>
            <p className="mt-2 text-secondary text-[14px] leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className={`text-[12px] font-mono px-2.5 py-1 rounded-md bg-black-100/80 border border-white/5 ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
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
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[16px] max-w-3xl leading-[28px] text-center mx-auto"
        >
          Explore my core project portfolio including enterprise Hospital Management Information Systems (HMIS), Call Audit Management System with Audio APIs & AG Grid, ASP.NET Core REST APIs, and full stack React/Node.js web applications.
        </motion.p>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
