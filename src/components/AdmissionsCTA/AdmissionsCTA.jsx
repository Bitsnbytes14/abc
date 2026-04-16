import useFadeIn from '../../hooks/useFadeIn';
import './AdmissionsCTA.css';

function AdmissionsCTA() {
  const [ref, isVisible] = useFadeIn();

  const steps = [
    { number: 1, title: 'Visit the School' },
    { number: 2, title: 'Fill the Admission Form' },
    { number: 3, title: 'Confirm Enrollment' }
  ];

  return (
    <section className="admissions-cta section" id="admissions">
      <div className="admissions-content" ref={ref}>
        <h2 className="admissions-heading">Admissions Open for 2025–26</h2>
        <p className="admissions-subtext">
          Come visit the school. Meet our teachers. Enroll your child today.
        </p>
        
        <div className="admissions-steps">
          {steps.map((step) => (
            <div className="admissions-step" key={step.number}>
              <div className="step-circle">{step.number}</div>
              <span className="step-title">{step.title}</span>
            </div>
          ))}
        </div>

        <a href="#contact" className="admissions-btn">Apply Now</a>
      </div>
    </section>
  );
}

export default AdmissionsCTA;