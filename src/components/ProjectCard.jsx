import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { collaborativeProjects } from "../data/projects";
import "./ProjectCard.css";
export default function ProjectCard() {
  return (
    <section className="collab" aria-labelledby="collab-title">
      <div className="collab__container">
        <motion.div
          className="collab__header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="collab__eyebrow">COLLABORATIVE WORK</span>

            <h2 id="collab-title">
              Built together.
              <span> Shipped as a team.</span>
            </h2>
          </div>

          <p>
            Selected projects created in collaborative development environments,
            focusing on teamwork, Git workflows and shared implementation.
          </p>
        </motion.div>

        <div className="collab__grid">
          {collaborativeProjects.map((project, index) => (
            <motion.article
              className="collabCard"
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="collabCard__image"
                aria-label={`Open ${project.title} live project`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                />

                <div className="collabCard__overlay">
                  <span>
                    View project
                    <FiArrowUpRight />
                  </span>
                </div>
              </a>

              <div className="collabCard__content">
                <div className="collabCard__top">
                  <h3>{project.title}</h3>

                  <span className="collabCard__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="collabCard__technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="collabCard__links">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                    <FiArrowUpRight />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
