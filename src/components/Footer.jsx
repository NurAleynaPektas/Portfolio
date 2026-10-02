import { FiArrowUp } from "react-icons/fi";
import "./Footer.css";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <a href="#home" className="footer__logo">
            NUR<span>.</span>
          </a>

          <p>Designed & built by Nur Aleyna Pektaş</p>
        </div>

        <div className="footer__center">
          <span>© {currentYear}</span>
          <span>ISTANBUL · TÜRKİYE</span>
        </div>

        <button
          type="button"
          className="footer__topButton"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <span>BACK TO TOP</span>
          <FiArrowUp />
        </button>
      </div>
    </footer>
  );
}
