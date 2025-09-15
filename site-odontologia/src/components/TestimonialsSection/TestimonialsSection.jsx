import "./TestimonialsSection.css";

const testimonials = [
  {
    text: "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sequi praesentium atque perspiciatis! Dolorum temporibus placeat ex at magni delectus quae vitae. Incidunt et enim voluptatem tempore assumenda quos magni.",
    author: "Wanda Strom",
  },
  {
    text: "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sequi praesentium atque perspiciatis! Dolorum temporibus placeat ex at magni delectus quae vitae. Incidunt et enim voluptatem tempore assumenda quos magni.",
    author: "Carly Ferris",
  },
  {
    text: "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sequi praesentium atque perspiciatis! Dolorum temporibus placeat ex at magni delectus quae vitae. Incidunt et enim voluptatem tempore assumenda quos magni.",
    author: "Natalia Lowe",
  },
];

function TestimonialsSection() {
  return (
    <section className="testimonials">
      <h2 className="title">Feedback</h2>
      <p className="subtitle">É uma honra para nós atendê-lo!</p>
      <div className="cards">
        {testimonials.map((item, index) => (
          <div key={index} className="card">
            <span className="quote">❝</span>
            <p className="text">{item.text}</p>
            <p className="author">- {item.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection
