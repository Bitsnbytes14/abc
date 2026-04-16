import useFadeIn from '../../hooks/useFadeIn';
import './About.css';

function About() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section className="about section" id="about">
      <div className="container about-container">
        <div className={`about-content ${isVisible ? 'visible' : ''}`} ref={ref}>
          <h2 className="about-heading">
            Learning Thrives When<br />
            <span className="about-highlight">Stress Is Removed</span>
          </h2>
          <p className="about-text">
            At ABC Public School, we believe education should be a journey of joy and discovery, 
            not stress and pressure. Our child-centered approach focuses on nurturing curiosity, 
            building confidence, and fostering a love for learning that lasts a lifetime. Through 
            innovative teaching methods and a supportive environment, we help every student 
            reach their full potential.
          </p>
          <a href="#admissions" className="btn-primary">Register for Free</a>
        </div>

        <div className={`about-image ${isVisible ? 'visible' : ''}`}>
          <img 
            src="https://picsum.photos/seed/school2/480/380" 
            alt="Students learning in classroom" 
          />
          <div className="about-badge">
            <span>CBSE</span>
            <span>Affiliated</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;