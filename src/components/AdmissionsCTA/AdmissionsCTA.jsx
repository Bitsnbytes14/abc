import useFadeIn from '../../hooks/useFadeIn';
import './AdmissionsCTA.css';

function AdmissionsCTA() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section className="admissions-cta section" id="admissions">
      <div className="admissions-content" ref={ref}>
        <h2 className="admissions-heading">Admissions Open for 2025–26</h2>
        <p className="admissions-subtext">
          Come visit the school. Meet our teachers. Enroll your child today.
        </p>
        <a href="#contact" className="admissions-btn">Apply Now</a>
      </div>
    </section>
  );
}

export default AdmissionsCTA;