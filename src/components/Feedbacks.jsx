import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const getInitials = (name) => {
  if (!name) return "U";
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

const FeedbacksCard = ({ index, testimonial, name, designation, company }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.65)}
    className="bg-gradient-to-b from-[#181335]/95 via-[#120e28]/95 to-[#0b071e]/95 p-6 xs:p-7 sm:p-8 rounded-2xl border border-white/10 shadow-xl hover:border-[#00d8ff]/40 hover:shadow-[0_12px_32px_rgba(0,216,255,0.12)] transition-all duration-300 flex flex-col justify-between group h-full"
  >
    <div>
      {/* Top Card Bar: Quote Icon & 5.0 Star Rating */}
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#915eff]/20 to-[#00d8ff]/20 border border-white/10 flex items-center justify-center text-[#00d8ff] shadow-inner group-hover:scale-110 group-hover:border-[#00d8ff]/30 transition-all duration-300">
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#f59e0b] text-xs font-semibold">
          <span>★★★★★</span>
          <span className="text-[11px] text-amber-300 font-mono">5.0</span>
        </div>
      </div>

      {/* Testimonial Quote */}
      <p className="text-white-100/90 text-[14px] sm:text-[15px] leading-relaxed mt-5 italic tracking-wide">
        "{testimonial}"
      </p>
    </div>

    {/* Client Attribution Footer */}
    <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3.5">
      <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#915eff] to-[#00d8ff] flex items-center justify-center font-bold text-white text-sm shadow-md ring-2 ring-white/10 shrink-0">
        {getInitials(name)}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white font-semibold text-[15px] group-hover:text-[#00d8ff] transition-colors truncate">
          <span className="text-[#00d8ff]">@</span>
          {name}
        </p>
        <p className="text-secondary text-[12px] mt-0.5 font-medium leading-tight truncate">
          {designation} at{" "}
          <span className="text-white-100 font-semibold">{company}</span>
        </p>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What others say about Srikanth
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Testimonials.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.05, 0.8)}
          className="mt-4 text-secondary text-[16px] max-w-2xl leading-[28px] text-center mx-auto"
        >
          Professional endorsements and peer recommendations from leadership and engineering colleagues across enterprise projects.
        </motion.p>
      </div>

      <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto w-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.name}
            className={`w-full flex flex-col ${
              index === 2
                ? "md:col-span-2 md:max-w-md md:mx-auto lg:col-span-1 lg:max-w-none"
                : ""
            }`}
          >
            <FeedbacksCard index={index} {...testimonial} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "testimonials", 0.01);
