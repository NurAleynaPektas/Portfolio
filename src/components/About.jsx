import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiGit,
} from "react-icons/si";
import "./About.css";

export default function About() {
  const skills = [
    { name: "React", icon: <SiReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <SiGit /> },
  ];

  return (
    <section id="about" className="about">
      <div className="about__container">
        {/* Top label */}
        <motion.div
          className="about__label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>ABOUT ME</span>
          <span className="about__line" />
          <span>06</span>
        </motion.div>

        {/* Main content */}
        <div className="about__main">
          <motion.div
            className="about__headline"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2>
              I turn ideas into
              <span> digital experiences.</span>
            </h2>
          </motion.div>

          <motion.div
            className="about__content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.75,
              delay: 0.15,
            }}
          >
            <div className="about__intro">
              <span className="about__symbol">↳</span>

              <p>
                I'm <strong>Nur Aleyna Pektaş</strong>, a web developer based in
                Istanbul, focused on building modern, responsive and intuitive
                web experiences.
              </p>
            </div>

            <div className="about__description">
              <p>
                I enjoy turning concepts into functional products and creating
                interfaces that feel simple, polished and enjoyable to use.
              </p>

              <p>
                My work spans frontend and full-stack development, with a strong
                focus on React and modern JavaScript technologies.
              </p>
            </div>

            {/* Languages */}
            <motion.div
              className="about__languages"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
            >
              <span className="about__languagesLabel">LANGUAGES</span>

              <div className="about__languagesList">
                <span>French</span>
                <span>English</span>
                <span>Turkish</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          className="about__skills"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <div className="about__skillsLabel">
            <span>CORE STACK</span>
          </div>

          <div className="about__skillsList">
            {skills.map((skill, index) => (
              <motion.div
                className="about__skill"
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
              >
                <span className="about__skillIcon">{skill.icon}</span>

                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Background text */}
        <div className="about__backgroundText" aria-hidden="true">
          ABOUT
        </div>
      </div>
    </section>
  );
}
