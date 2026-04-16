import useFadeIn from '../../hooks/useFadeIn';
import './Programs.css';

function Programs() {
  const [ref, isVisible] = useFadeIn();

  const programs = [
    {
      icon: '🌱',
      title: 'Foundation Stage',
      description: 'Nursery to UKG — play-based learning, language, and early numeracy',
      bgColor: 'var(--color-primary)'
    },
    {
      icon: '📖',
      title: 'Primary Education',
      description: 'Class 1–5 — strong subject foundations, reading, writing, and arithmetic',
      bgColor: 'var(--color-secondary)'
    },
    {
      icon: '🔬',
      title: 'Middle School',
      description: 'Class 6–8 — critical thinking, science basics, and confidence building',
      bgColor: 'var(--color-primary)'
    }
  ];

  return (
    <section className="programs section" id="academics">
      <div className="container">
        <h2 className="section-title">Our Academic Programs</h2>
        <div className="programs-grid" ref={ref}>
          {programs.map((program, index) => (
            <div 
              className={`program-card ${isVisible ? 'visible' : ''}`}
              key={index}
              style={{ 
                '--card-bg': program.bgColor,
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <span className="program-icon">{program.icon}</span>
              <h3 className="program-title">{program.title}</h3>
              <p className="program-desc">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;