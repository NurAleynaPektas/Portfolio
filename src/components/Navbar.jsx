import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import "./Navbar.css";
export default function Navbar() {
  return (
    <motion.header
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#home" className="navbar__logo" aria-label="Go to home">
        NUR<span>.</span>
      </a>

      <nav className="navbar__links" aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="mailto:nuraleynaaaa@gmail.com" className="navbar__cta">
        Let's talk
        <FiArrowUpRight />
      </a>
    </motion.header>
  );
}
