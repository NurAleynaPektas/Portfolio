import travelMatePortf from "./assets/travelMatePortf.png";
import miniShopPortf from "./assets/miniShopPortf.png";
import cinePortf from "./assets/cinePortf.png";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  return (
    <div className={styles.site}>
      <header className={styles.nav}>
        <a href="#home" className={styles.brand}>
          Nur's Portfolio
        </a>
        <nav className={styles.links} aria-label="Primary">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className={styles.cta}>
          Hire Me
        </a>
      </header>

      {/* HERO */}
      <section id="home" className={styles.hero} aria-label="Hero">
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <h1 className={styles.title}>Nur Aleyna Pektaş</h1>
            <p className={styles.lead}>
              Junior Web Developer — I build fast, accessible web apps using
              <strong> React</strong> &<strong> Node</strong>. I care about
              clean UI and smooth UX.
            </p>
            <div className={styles.actions}>
              <a className={`${styles.projectContact}`} href="#projects">
                View Projects
              </a>
              <a className={`${styles.projectContact} `} href="#contact">
                Contact
              </a>
            </div>
            <ul className={styles.skills} aria-label="Skills">
              {"HTML,CSS,JavaScript,React,Redux,Node.js,JWT,REST"
                .split(",")
                .map((s) => (
                  <li key={s}>{s}</li>
                ))}
            </ul>
          </div>

          <div className={styles.heroRight} aria-hidden>
            <FloatingCard
              className={`${styles.card} ${styles.cardB} ${styles.isFlip}`}
              title="CinePlus"
              subtitle="TMDB API • Trailers"
              img={cinePortf}
              delay={280}
            />
            <FloatingCard
              className={`${styles.card} ${styles.cardC} ${styles.isFlip}`}
              title="Travelmate"
              subtitle="Geoapify • Leaflet"
              img={travelMatePortf}
              delay={420}
            />{" "}
            <FloatingCard
              className={`${styles.card} ${styles.cardA} ${styles.isFlip}`}
              title="TrendPick"
              subtitle="React • Redux • JWT"
              img={miniShopPortf}
              delay={120}
            />
          </div>
        </div>
      </section>

      {/* FEATURED WORK – alt kısımda Live/Code var */}
      <section
        id="projects"
        className={`${styles.section} ${styles.sectionLight} sectionFeatured`}
      >
        <div className={styles.container}>
          <h2 className={styles.h2}>Featured Work</h2>
          <p className={styles.muted}>A few projects I’m proud of.</p>

          <div className={styles.grid}>
            <ProjectCard
              title="CinePlus"
              stack="TMDB API • Trailers"
              live="https://cine-flax.vercel.app/"
              code="https://github.com/NurAleynaPektas/cine"
              img={cinePortf}
            />
            <ProjectCard
              title="TrendPick"
              stack="React • Redux • JWT"
              live="https://mini-shop-lime.vercel.app/"
              code="https://github.com/NurAleynaPektas/miniShop"
              img={miniShopPortf}
            />
            <ProjectCard
              title="Travelmate"
              stack="Geoapify • Leaflet"
              live="https://travelmate-geoapify.vercel.app/"
              code="https://github.com/NurAleynaPektas/travelmate-geoapify"
              img={travelMatePortf}
            />
          </div>
        </div>
      </section>

      <section
        id="about"
        className={`${styles.section} ${styles.sectionMuted}`}
      >
        <div className={styles.container}>
          <h2 className={styles.h2}>About</h2>
          <p className={styles.text}>
            I’m a French passionate and determined junior web developer based in
            Istanbul, with a strong desire to grow and create impactful
            projects. I believe that every challenge is an opportunity to learn,
            and I’m not afraid to step out of my comfort zone to achieve
            results. Skilled in HTML, CSS, JavaScript, and React, I build fast,
            accessible, and user-friendly web applications. I’m also confident
            in backend fundamentals and love bringing ideas to life from concept
            to deployment. In addition to my technical skills, I’m fluent in
            Turkish, speak English at a professional level, and have a solid
            command of French — which allows me to communicate and collaborate
            effectively in multicultural environments. I’m ready to take on
            responsibilities, adapt quickly, and deliver high-quality work. My
            motto:
            <strong> “If I set my mind to it, I will make it happen.” </strong>
            <br />
            <br />
            “Toujours prête à apprendre et à relever de nouveaux défis.”
          </p>
        </div>
      </section>

      <section
        id="contact"
        className={`${styles.section} ${styles.sectionLight}`}
      >
        <div className={styles.container}>
          <h2 className={styles.h2}>Let’s work together</h2>
          <p className={styles.muted}>
            Reach out for opportunities or collaborations.
          </p>
          <div className={styles.contact}>
            <a className={styles.chip} href="mailto:nuraleynaaaa@gmail.com">
              nuraleynaaaa@gmail.com
            </a>
            <a
              className={styles.chip}
              href="https://github.com/NurAleynaPektas"
            >
              GitHub
            </a>
            <a className={styles.chip} href="https://www.linkedin.com/">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerInner}`}>
          <p>© {new Date().getFullYear()} Nur Aleyna Pektaş</p>
          <p>Built with React</p>
        </div>
      </footer>
    </div>
  );
}

function FloatingCard({ className, title, subtitle, img, delay = 0 }) {
  return (
    <div className={className} style={{ animationDelay: `${delay}ms` }}>
      <div className={styles.cardHead}>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardSubtitle}>{subtitle}</div>
      </div>
      <div className={styles.thumb}>
        <img src={img} alt={`${title} preview`} />
      </div>
    </div>
  );
}

function ProjectCard({ title, stack, live, code, img }) {
  return (
    <article className={styles.pcard}>
      <div className={styles.pcardThumb}>
        <img src={img} alt={`${title} preview`} />
      </div>
      <h3 className={styles.pcardTitle}>{title}</h3>
      <p className={styles.pcardStack}>{stack}</p>
      <div className={styles.pcardFooter}>
        <a
          className={`${styles.btn} ${styles.btnWide} ${styles.btnSolid}`}
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open live demo of ${title}`}
        >
          Live
        </a>
        <a
          className={`${styles.btn} ${styles.btnWide} ${styles.btnOutline}`}
          href={code}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open source code of ${title}`}
        >
          Code
        </a>
      </div>
    </article>
  );
}
