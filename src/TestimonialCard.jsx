import './testimonial.css';

export default function TestimonialCard({ image, name, company, text }) {
    return (
        <div className="testimonial-card">
            <div className="testimonial-user">
                <img src={image} alt={name} className="testimonial-img" />
                <div>
                    <h3>{name}</h3>
                    <p>{company}</p>
                </div>
            </div>
            <div className="testimonial-content">
                <div className="quote">“</div>
                <p>{text}</p>
            </div>
        </div>
    );
}
