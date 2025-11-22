import "./CardTestimonials.css";

interface TestimonialCardProps {
    text: string;
    name: string;
    role: string;
}

export default function TestimonialCard({ text, name, role }: TestimonialCardProps) {
    return (
        <div className="testimonial-card">
            <div className="stars">★★★★★</div>

            <p className="testimonial-text">"{text}"</p>

            <div className="line"></div>

            <p className="testimonial-name">{name}</p>
            <p className="testimonial-role">{role}</p>
        </div>
    );
}
