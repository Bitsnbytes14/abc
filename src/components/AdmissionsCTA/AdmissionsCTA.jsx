import useFadeIn from '../../hooks/useFadeIn';
import './AdmissionsCTA.css';

function AdmissionsCTA() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section className="admissions-cta section" id="admissions">
      <div className="admissions-content" ref={ref}>
        <h2 className="admissions-heading">Admissions Open for 2025–26</h2>
        <p className="admissions-subtext">
          Enroll your child today and give them a strong start — right here in Khairai.
        </p>
        <a href="#contact" className="admissions-btn">Apply Now</a>
      </div>
    </section>
  );
}

export default AdmissionsCTA;