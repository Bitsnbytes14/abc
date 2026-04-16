import useFadeIn from '../../hooks/useFadeIn';
import './Hero.css';

function Hero() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section className="hero" id="home">
      <div className="hero-doodles">
        <svg className="doodle doodle-1" viewBox="0 0 100 100" fill="none">
          <path d="M10 50 Q 30 20, 50 50 T 90 50" stroke="var(--color-primary)" strokeWidth="3" fill="none"/>
        </svg>
        <svg className="doodle doodle-2" viewBox="0 0 100 100" fill="none">
          <polygon points="50,10 61,35 90,35 66,50 76,80 50,60 24,80 34,50 10,35 39,35" fill="var(--color-secondary)"/>
        </svg>
        <svg className="doodle doodle-3" viewBox="0 0 100 100" fill="none">
          <path d="M20 80 L 80 20" stroke="var(--color-primary)" strokeWidth="3" strokeDasharray="5,5"/>
        </svg>
        <svg className="doodle doodle-4" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="30" stroke="var(--color-secondary)" strokeWidth="3" fill="none"/>
        </svg>
        <svg className="doodle doodle-5" viewBox="0 0 100 100" fill="none">
          <path d="M20 30 Q 40 10, 60 30 T 80 30" stroke="var(--color-primary)" strokeWidth="3" fill="none"/>
        </svg>
      </div>

      <div className="container hero-container" ref={ref}>
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-heading">
            A Strong Start for<br />
            <span className="hero-highlight">Every Child's Future</span>
          </h1>
          <p className="hero-subtext">
            Quality CBSE education in Khairai Village, Fatehpur — from Nursery to Class 8, right where you live.
          </p>
          <div className="hero-buttons">
            <a href="#programs" className="btn-primary">Explore Programs</a>
            <a href="#contact" className="btn-outline">Visit Campus</a>
          </div>
        </div>

        <div className={`hero-image ${isVisible ? 'visible' : ''}`}>
          <div className="hero-img-frame">
            <img 
              src="https://picsum.photos/seed/school1/500/600" 
              alt="ABC Public School campus" 
            />
          </div>
          <div className="floating-badge badge-1">📚</div>
          <div className="floating-badge badge-2">✏️</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;