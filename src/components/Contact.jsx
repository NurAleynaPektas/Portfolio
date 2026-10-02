import { motion } from "framer-motion";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Contact.css";
export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <motion.div
          className="contact__top"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>LET'S CONNECT</span>
          <span className="contact__line" />
          <span>07</span>
        </motion.div>

        <div className="contact__main">
          <motion.div
            className="contact__headline"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="contact__smallText">
              HAVE A PROJECT OR OPPORTUNITY?
            </span>

            <h2>
              LET'S BUILD
              <span>SOMETHING.</span>
            </h2>
          </motion.div>

          <motion.div
            className="contact__side"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >
            <p>
              I'm open to frontend and full-stack opportunities, collaborations
              and interesting web projects.
            </p>

            <a
              href="mailto:nuraleynaaaa@gmail.com"
              className="contact__emailButton"
            >
              <span>
                <FiMail />
                Get in touch
              </span>

              <FiArrowUpRight />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="contact__links"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >
          <a href="mailto:nuraleynaaaa@gmail.com" className="contact__link">
            <div>
              <FiMail />
              <span>Email</span>
            </div>

            <FiArrowUpRight />
          </a>

          <a
            href="https://github.com/NurAleynaPektas"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            <div>
              <FaGithub />
              <span>GitHub</span>
            </div>

            <FiArrowUpRight />
          </a>

          <a
            href="https://www.linkedin.com/in/nur-aleyna-pekta%C5%9F-16b401332/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            <div>
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </div>

            <FiArrowUpRight />
          </a>
        </motion.div>

        <div className="contact__backgroundText" aria-hidden="true">
          HELLO
        </div>
      </div>
    </section>
  );
}
