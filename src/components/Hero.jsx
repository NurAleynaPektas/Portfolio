import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiFileText } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import HeroScene from "./HeroScene";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Three.js Background */}
      <HeroScene />

      <div className="hero__content">
        {/* Availability */}
        <motion.div
          className="hero__status"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <span className="hero__statusDot" />
          OPEN TO FRONTEND & FULL-STACK ROLES
        </motion.div>

        {/* Main title */}
        <div className="hero__titleWrapper">
          <motion.p
            className="hero__intro"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Hi, I'm Nur Aleyna.
          </motion.p>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            FRONTEND
            <span>&</span>
            FULL-STACK
            <strong>DEVELOPER</strong>
          </motion.h1>
        </div>

        {/* Bottom information */}
        <motion.div
          className="hero__bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="hero__description">
            <p>
              I build responsive web applications from polished interfaces to
              full-stack products using React, TypeScript and Node.js.
            </p>

            <div className="hero__actions">
              {/* Projects */}
              <a href="#work" className="hero__primaryBtn">
                Explore my work
                <FiArrowDown />
              </a>

              {/* CV */}
              <a
                href="/public/YeniCVNurAleyna.pdf.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__cvBtn"
              >
                <FiFileText />
                View CV
                <FiArrowUpRight />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/NurAleynaPektas"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__githubBtn"
              >
                <FaGithub />
                GitHub
                <FiArrowUpRight />
              </a>
            </div>
          </div>

          {/* Technologies */}
          <div className="hero__tech">
            <span>React</span>
            <span>TypeScript</span>
            <span>Node.js</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative background text */}
      <div className="hero__backgroundText" aria-hidden="true">
        CREATIVE
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#work"
        className="hero__scroll"
        aria-label="Scroll to projects"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span>SCROLL</span>
        <FiArrowDown />
      </motion.a>
    </section>
  );
}
