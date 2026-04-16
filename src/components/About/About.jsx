import useFadeIn from '../../hooks/useFadeIn';
import './About.css';

function About() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section className="about section" id="about">
      <div className="container about-container">
        <div className={`about-content ${isVisible ? 'visible' : ''}`} ref={ref}>
          <h2 className="about-heading">
            Quality Education,<br />
            <span className="about-highlight">Now Closer to Home</span>
          </h2>
          <p className="about-text">
            Parents in Khairai no longer need to send their children to distant cities for quality schooling. ABC Public School brings structured CBSE education, daily discipline, and confident learning directly to the village. Our focus is simple — strong basics, caring teachers, and a safe place to grow.
          </p>
          <a href="#admissions" className="btn-primary">Apply for Admission</a>
        </div>

        <div className={`about-image ${isVisible ? 'visible' : ''}`}>
          <img 
            src="https://picsum.photos/seed/school2/480/380" 
            alt="Students learning in classroom" 
          />
          <div className="about-badge">
            <span>CBSE Affiliated</span>
            <span>Est. 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;