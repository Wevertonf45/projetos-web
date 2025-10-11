import './TestimonialCard.css'
import { FaStar } from 'react-icons/fa'

function TestimonialCard({ text, author }) {
    return (
        <div className="testimonial-card">
            <div className="stars">
                {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                ))}
            </div>
            <p className="testimonial-text">"{text}"</p>
            <p className="testimonial-author">— {author}</p>
        </div>
    )
}

export default TestimonialCard
