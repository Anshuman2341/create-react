import TestimonialCard from './TestimonialCard';
import './testimonial.css';
import userImg from './assets/Testimonial.png'; // Replace with your actual image

export default function TestimonialSection() {
    const testimonial = {
        image: userImg,
        name: 'Floyd Miles',
        company: 'eBay',
        text: `Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.`
    };

    return (
        <section className="testimonial-section">
            <TestimonialCard {...testimonial} />
            <div className="testimonial-nav">
                <button>←</button>
                <button>→</button>
            </div>
        </section>
    );
}
