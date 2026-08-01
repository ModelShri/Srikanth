import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbacksCard = ({ index, testimonial, name, designation, company }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.3, 0.75)}
    className="bg-black-200/90 p-8 rounded-3xl sm:w-[340px] w-full border border-white/10 shadow-2xl flex flex-col justify-between hover:border-[#00d8ff]/40 transition-colors"
  >
    <div>
      <span className="text-[#915eff] text-4xl font-serif leading-none block mb-2">“</span>
      <p className="text-white tracking-wider text-[15px] leading-relaxed">
        {testimonial}
      </p>
    </div>

    <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#915eff] to-[#00d8ff] flex items-center justify-center font-bold text-white text-sm shadow-md">
        {name.charAt(0)}
      </div>
      <div className="flex-1 flex flex-col">
        <p className="text-white font-semibold text-[15px]">
          <span className="text-[#00d8ff]">@</span>{name}
        </p>
        <p className="text-secondary text-[12px] mt-0.5">
          {designation} at <span className="text-white-100 font-medium">{company}</span>
        </p>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-16 bg-tertiary/60 rounded-[28px] border border-white/10 shadow-2xl overflow-hidden max-w-7xl mx-auto">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[220px] border-b border-white/10`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say about Srikanth</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-16 pb-14 flex flex-wrap justify-center gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbacksCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
