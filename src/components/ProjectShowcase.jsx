import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { featuredProjects } from "../data/projects";
import "./ProjectShowcase.css";
export default function ProjectShowcase() {
  return (
    <section id="work" className="projects">
      <div className="projects__container">
        {/* Section heading */}
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="projects__eyebrow">SELECTED WORK</span>

            <h2>
              Projects built with
              <span> code & curiosity.</span>
            </h2>
          </div>

          <p>
            A selection of projects where I explored frontend development,
            full-stack applications and modern web experiences.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="projects__list">
          {featuredProjects.map((project, index) => (
            <Project key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Project({ project, index }) {
  const isReverse = index % 2 !== 0;

  return (
    <motion.article
      className={`project ${isReverse ? "project--reverse" : ""}`}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Image side */}
      <motion.a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="project__visual"
        whileHover={{ scale: 0.985 }}
        transition={{ duration: 0.35 }}
        aria-label={`Open ${project.title} live project`}
      >
        <div className="project__number">{project.number}</div>

        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading={index > 1 ? "lazy" : "eager"}
        />

        <div className="project__visualOverlay">
          <span>
            View project
            <FiArrowUpRight />
          </span>
        </div>
      </motion.a>

      {/* Information side */}
      <div className="project__info">
        <span className="project__category">{project.category}</span>

        <h3>{project.title}</h3>

        <p className="project__description">{project.description}</p>

        <div className="project__technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project__links">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Live project
              <FiArrowUpRight />
            </a>
          )}

          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
              Source code
              <FiArrowUpRight />
            </a>
          )}
        </div>

        {/* BarberBook backend links */}
        {project.backend && (
          <div className="project__backend">
            <span>Backend</span>

            <a href={project.backend} target="_blank" rel="noopener noreferrer">
              API
              <FiArrowUpRight />
            </a>

            {project.backendGithub && (
              <a
                href={project.backendGithub}
                target="_blank"
                rel="noopener noreferrer"
              >
                Backend source
                <FiArrowUpRight />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
