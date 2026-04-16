import { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      quote: "Pehle humein bachche ko door bhejna padta tha. Ab gaon mein hi acchi padhai ho rahi hai.",
      name: "Ramesh Yadav",
      relation: "Parent (Class 3)"
    },
    {
      quote: "The teachers here are very caring. My daughter has improved so much in just a few months.",
      name: "Sunita Devi",
      relation: "Parent (Nursery)"
    },
    {
      quote: "Good discipline, good teachers. We are happy our child studies here.",
      name: "Manoj Kumar",
      relation: "Parent (Class 6)"
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