import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectShowcase from "./components/ProjectShowcase";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  return (
    <main className="portfolio">
      <Navbar />
      <Hero />
      <ProjectShowcase />
      <ProjectCard />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
