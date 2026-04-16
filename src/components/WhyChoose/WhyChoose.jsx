import useFadeIn from '../../hooks/useFadeIn';
import './WhyChoose.css';

function WhyChoose() {
  const [ref, isVisible] = useFadeIn();

  const features = [
    {
      icon: '👨‍🏫',
      title: 'Professional Faculty',
      description: 'Experienced teachers with passion for education'
    },
    {
      icon: '🌱',
      title: 'Holistic Development',
      description: 'Focus on academics, sports, and life skills'
    },
    {
      icon: '🛡️',
      title: 'Safe Campus',
      description: '24/7 security with modern infrastructure'
    }
  ];

  return (
    <section className="why-choose section" id="why-choose">
      <div className="container">
        <h2 className="section-title">Why Choose ABC?</h2>
        <div className="why-choose-grid" ref={ref}>
          {features.map((feature, index) => (
            <div 
              className={`why-choose-card ${isVisible ? 'visible' : ''}`}
              key={index}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="why-choose-icon">{feature.icon}</div>
              <h3 className="why-choose-title">{feature.title}</h3>
              <p className="why-choose-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;