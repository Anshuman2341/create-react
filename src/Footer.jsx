import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top marquee */}
      <div className="footer-marquee">
        <span>✷ FLOW ✷ FIGMA ✷ DESIGNER ✷ DEVELOPER </span>
      </div>

      {/* Middle CTA section */}
      <div className="footer-cta">
        <h1 className="footer-heading">LET’S TALK!</h1>
        <a href="mailto:rehanurraihan@gmail.com" className="footer-email">
          anshuman2341@gmail.com <span className="arrow">↗</span>
        </a>
      </div>

      {/* Bottom section */}
      <div className="footer-bottom">
        <p>© Anshuman Singh Sisodia – 2025</p>
        <div className="footer-links">
          <a href="#">Dribbble</a>
          <a href="#">Behance</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
