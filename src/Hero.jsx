// components/Hero.jsx
import "./Hero.css";
import HeroIcons from "./HeroIcons";
import Paragraph from "./Paragraph";

export default function Hero() {
  return (
    <section className="hero-section">
      <h1 className="hero-heading">
        I AM A <HeroIcons type="profile" /> FREELANCE<br />
        DESIGNER <HeroIcons type="work" /> FROM<br />
        SAN FRANCISCO
      </h1>

      <div className="hero-footer">
        <img src="#" alt="doradesign" />
        <img src="#" alt="wave" />
        <img src="#" alt="simula" />
        <Paragraph />
      </div>
    </section>
  );
}
