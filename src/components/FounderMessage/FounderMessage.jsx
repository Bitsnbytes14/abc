import useFadeIn from '../../hooks/useFadeIn';
import './FounderMessage.css';

function FounderMessage() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section className="founder-message section" id="founder">
      <div className="founder-card" ref={ref}>
        <div className="container founder-container">
          <div className={`founder-content ${isVisible ? 'visible' : ''}`}>
            <h2 className="founder-heading">A Message From Our Founder</h2>
            <div className="founder-body">
              <p>Starting ABC Public School was a dream — to bring good, honest education to Khairai Village so that no family has to send their child far away just to get a decent schooling.</p>
              <p>For years, that distance was a barrier for many children here. Our goal is simple: give every child in this village a strong foundation, good discipline, and a safe place to grow. Not just textbooks — but values, confidence, and a real chance at the future.</p>
              <p>This school is built with care. We are a small team, we are new, and we are learning alongside our students every day. But our commitment to every child who walks through these doors is absolute.</p>
              <p>We invite you to come visit, meet our teachers, and see the school yourself.</p>
            </div>
            <p className="founder-signature">
              — Founder, ABC Public School<br />
              <span className="founder-location">Khairai Village, Fatehpur</span>
            </p>
          </div>
          
          <div className={`founder-image ${isVisible ? 'visible' : ''}`}>
            <img 
              src="https://picsum.photos/seed/founder/400/500" 
              alt="Founder of ABC Public School" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderMessage;