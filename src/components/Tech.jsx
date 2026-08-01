import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Technical Capabilities & Stack
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills & Technologies.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[28px] text-center mx-auto mb-12"
      >
        Interactive 3D representation of my core technical stack spanning Full Stack .NET, React.js, Node.js, MS SQL Server, Cloud Deployment, and AI-powered productivity tools.
      </motion.p>

      {/* 3D Floating Ball Spheres */}
      <div className="flex flex-row flex-wrap justify-center gap-10 max-w-6xl mx-auto">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28 flex flex-col items-center justify-center group"
            key={technology.name}
          >
            <div className="w-24 h-24 relative">
              <BallCanvas icon={technology.icon} />
            </div>
            <span className="text-xs font-semibold text-white mt-1 group-hover:text-[#00d8ff] transition-colors text-center">
              {technology.name}
            </span>
          </div>
        ))}
      </div>

      {/* Detailed Skill Category Badges */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-tertiary p-6 rounded-2xl border border-white/10 shadow-lg">
          <h3 className="text-[#00d8ff] font-bold text-lg mb-3 flex items-center gap-2">
            <span>⚡</span> Backend & Languages
          </h3>
          <ul className="space-y-2 text-sm text-secondary">
            <li className="flex justify-between items-center"><span className="text-white">C# / .NET Core MVC</span> <span className="text-xs text-[#00d8ff]">6+ Yrs</span></li>
            <li className="flex justify-between items-center"><span className="text-white">ASP.NET Web API & Web Forms</span> <span className="text-xs text-[#00d8ff]">6+ Yrs</span></li>
            <li className="flex justify-between items-center"><span className="text-white">Node.js / Express.js</span> <span className="text-xs text-[#00d8ff]">3+ Yrs</span></li>
            <li className="flex justify-between items-center"><span className="text-white">Entity Framework & ADO.NET</span> <span className="text-xs text-[#00d8ff]">6+ Yrs</span></li>
            <li className="flex justify-between items-center"><span className="text-white">RESTful APIs & SignalR</span> <span className="text-xs text-[#00d8ff]">6+ Yrs</span></li>
          </ul>
        </div>

        <div className="bg-tertiary p-6 rounded-2xl border border-white/10 shadow-lg">
          <h3 className="text-[#915eff] font-bold text-lg mb-3 flex items-center gap-2">
            <span>🎨</span> Frontend & Database
          </h3>
          <ul className="space-y-2 text-sm text-secondary">
            <li className="flex justify-between items-center"><span className="text-white">React.js & ES6+ JavaScript</span> <span className="text-xs text-[#915eff]">4+ Yrs</span></li>
            <li className="flex justify-between items-center"><span className="text-white">MS SQL Server (SSMS)</span> <span className="text-xs text-[#915eff]">6+ Yrs</span></li>
            <li className="flex justify-between items-center"><span className="text-white">Tailwind CSS & Bootstrap</span> <span className="text-xs text-[#915eff]">4+ Yrs</span></li>
            <li className="flex justify-between items-center"><span className="text-white">AG Grid & HTML5/CSS3</span> <span className="text-xs text-[#915eff]">4+ Yrs</span></li>
            <li className="flex justify-between items-center"><span className="text-white">Crystal Reports</span> <span className="text-xs text-[#915eff]">5+ Yrs</span></li>
          </ul>
        </div>

        <div className="bg-tertiary p-6 rounded-2xl border border-white/10 shadow-lg">
          <h3 className="text-emerald-400 font-bold text-lg mb-3 flex items-center gap-2">
            <span>☁️</span> Cloud, DevOps & AI
          </h3>
          <ul className="space-y-2 text-sm text-secondary">
            <li className="flex justify-between items-center"><span className="text-white">Microsoft Azure & IIS</span> <span className="text-xs text-emerald-400">Deploy & Support</span></li>
            <li className="flex justify-between items-center"><span className="text-white">Vercel, cPanel & VPS</span> <span className="text-xs text-emerald-400">Web Hosting</span></li>
            <li className="flex justify-between items-center"><span className="text-white">ChatGPT, Claude AI & Cursor</span> <span className="text-xs text-emerald-400">AI Accelerated</span></li>
            <li className="flex justify-between items-center"><span className="text-white">GitHub Copilot & Prompting</span> <span className="text-xs text-emerald-400">Productivity</span></li>
            <li className="flex justify-between items-center"><span className="text-white">Git, Postman & VS Code</span> <span className="text-xs text-emerald-400">Daily Tools</span></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
