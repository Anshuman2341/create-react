import "./HeroIcons.css";
import profile from "./assets/HeroSectionImage1.jpg";
import work from "./assets/HeroSectionImage2.png";

export default function HeroIcons({ type }) {
    const src = type === "profile" ? profile : work;
    return <img src={src} className="hero-icon" alt="icon" />;
}
