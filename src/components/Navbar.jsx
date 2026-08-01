import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks, personalInfo } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-50 bg-primary/90 backdrop-blur-md border-b border-white/10`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="px-3 py-1.5 rounded-xl bg-gradient-to-tr from-[#915eff] to-[#00d8ff] p-[2px] shadow-lg shadow-[#915eff]/30 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-primary px-2.5 py-1 rounded-[10px] flex items-center justify-center font-black text-white text-sm tracking-wider">
              SHREE
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-white text-[18px] font-bold cursor-pointer flex items-center gap-1">
              SRIKANTH <span className="text-[#00d8ff] font-semibold">| Full Stack Developer</span>
            </p>
            <span className="text-xs text-secondary tracking-wider font-mono">
              6+ Yrs Exp • ASP.NET Core & React
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="list-none flex flex-row gap-8">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-[#00d8ff] font-bold" : "text-secondary"
                } hover:text-white text-[16px] font-medium cursor-pointer transition-colors duration-200`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          <a
            href={personalInfo.githubPortfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#915eff] to-[#5b21b6] text-white font-medium px-4 py-2 rounded-xl text-sm hover:shadow-lg hover:shadow-[#915eff]/40 transition-all duration-300 border border-white/10 flex items-center gap-2"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub Portfolio
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-30 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4 w-full">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-[#00d8ff] font-bold" : "text-secondary"
                  } font-medium cursor-pointer text-[16px] w-full hover:text-white transition-colors`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10 w-full">
                <a
                  href={personalInfo.githubPortfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#00d8ff] font-semibold block text-center"
                >
                  GitHub Portfolio ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
