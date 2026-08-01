import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { personalInfo } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState("");

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_2273tmo",
        "template_ahmtnab",
        {
          from_name: form.name,
          to_name: personalInfo.name,
          to_email: personalInfo.email,
          message: form.message,
          email: form.email,
        },
        "FY0C989bKU5ivpht0"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! Your message has been sent successfully. Srikanth will get back to you shortly.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. You can email Srikanth directly at kumarsrikanth050595@gmail.com");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden max-w-7xl mx-auto">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.85] bg-black-100 p-8 rounded-3xl border border-white/10 shadow-2xl"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact Srikanth.</h3>

        {/* Quick Contact Info Badges */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-tertiary p-4 rounded-xl border border-white/10 flex flex-col justify-between">
            <span className="text-xs text-secondary font-mono">Email Address</span>
            <div className="flex items-center justify-between mt-1">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-white text-xs sm:text-sm font-semibold truncate hover:text-[#00d8ff]"
              >
                {personalInfo.email}
              </a>
              <button
                onClick={() => handleCopy(personalInfo.email, "email")}
                className="text-xs text-[#00d8ff] font-bold hover:underline ml-2"
              >
                {copied === "email" ? "Copied! ✓" : "Copy"}
              </button>
            </div>
          </div>

          <div className="bg-tertiary p-4 rounded-xl border border-white/10 flex flex-col justify-between">
            <span className="text-xs text-secondary font-mono">Phone / Mobile</span>
            <div className="flex items-center justify-between mt-1">
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="text-white text-xs sm:text-sm font-semibold hover:text-[#00d8ff]"
              >
                {personalInfo.phone}
              </a>
              <button
                onClick={() => handleCopy(personalInfo.phone, "phone")}
                className="text-xs text-[#00d8ff] font-bold hover:underline ml-2"
              >
                {copied === "phone" ? "Copied! ✓" : "Copy"}
              </button>
            </div>
          </div>

          <div className="bg-tertiary p-4 rounded-xl border border-white/10 flex flex-col justify-between sm:col-span-2">
            <span className="text-xs text-secondary font-mono">Location & Address</span>
            <p className="text-white text-xs sm:text-sm font-semibold mt-1">
              📍 {personalInfo.location}
            </p>
          </div>
        </div>

        {/* Direct Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 text-sm">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              required
              className="bg-tertiary py-3.5 px-5 placeholder:text-secondary text-white rounded-xl border border-white/10 focus:border-[#00d8ff] outline-none font-medium text-sm transition-colors"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 text-sm">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              required
              className="bg-tertiary py-3.5 px-5 placeholder:text-secondary text-white rounded-xl border border-white/10 focus:border-[#00d8ff] outline-none font-medium text-sm transition-colors"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 text-sm">Your Message</span>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can Srikanth help with your project or team?"
              required
              className="bg-tertiary py-3.5 px-5 placeholder:text-secondary text-white rounded-xl border border-white/10 focus:border-[#00d8ff] outline-none font-medium text-sm transition-colors resize-none"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-[#915eff] to-[#00d8ff] py-3.5 px-8 outline-none w-full sm:w-fit text-white font-bold shadow-lg shadow-[#915eff]/30 rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            {loading ? "Sending Message..." : "✉️ Send Message"}
          </button>
        </form>
      </motion.div>

      {/* 3D Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] rounded-3xl overflow-hidden"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
