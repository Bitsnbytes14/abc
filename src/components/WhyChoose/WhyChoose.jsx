import useFadeIn from '../../hooks/useFadeIn';
import './WhyChoose.css';

function WhyChoose() {
  const [ref, isVisible] = useFadeIn();

  const features = [
    {
      icon: '👩‍🏫',
      title: 'Caring & Dedicated Teachers',
      description: 'Experienced educators who treat each child like their own'
    },
    {
      icon: '🛡️',
      title: 'Safe and Disciplined Environment',
      description: 'Structured daily routine with focus on character building'
    },
    {
      icon: '📐',
      title: 'Focus on Strong Subject Foundations',
      description: 'Clear concepts in math, science, language, and more'
    },
    {
      icon: '🏡',
      title: 'Quality Education in Your Own Village',
      description: 'No need to travel — world-class learning right at home'
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