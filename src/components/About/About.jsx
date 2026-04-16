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
            For years, families in Khairai had to send their children to towns far away just for decent schooling. ABC Public School was started with one simple purpose — to bring that same quality of education right here, to our village. We focus on discipline, strong basics, and making every child feel confident in the classroom. We welcome you to visit the school and see the environment yourself.
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