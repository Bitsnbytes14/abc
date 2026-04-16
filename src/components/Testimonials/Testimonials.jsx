import { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      quote: "The teachers at ABC go above and beyond. My daughter has flourished here academically and emotionally. The balance between studies and extracurriculars is perfect.",
      name: "Mrs. Priya Sharma",
      relation: "Parent of Aisha, Grade 5"
    },
    {
      quote: "We chose ABC for our son three years ago, and it has been the best decision. The campus is safe, the curriculum is challenging yet supportive, and the community is welcoming.",
      name: "Mr. Rahul Verma",
      relation: "Parent of Arjun, Grade 8"
    },
    {
      quote: "The holistic approach at ABC has helped my child discover talents I never knew she had. From robotics to classical dance, the school nurtures every aspect of growth.",
      name: "Mrs. Anjali Desai",
      relation: "Parent of Krishna, Grade 3"
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, testimonials.length]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Parents Say</h2>
        
        <div 
          className="testimonials-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button className="carousel-btn prev-btn" onClick={goToPrev} aria-label="Previous testimonial">
            ←
          </button>

          <div className="carousel-track">
            {testimonials.map((testimonial, index) => (
              <div 
                className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
                key={index}
              >
                <span className="quote-mark">"</span>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <span className="author-name">{testimonial.name}</span>
                  <span className="author-relation">{testimonial.relation}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next-btn" onClick={goToNext} aria-label="Next testimonial">
            →
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button 
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              key={index}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;