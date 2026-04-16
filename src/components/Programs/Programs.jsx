import useFadeIn from '../../hooks/useFadeIn';
import './Programs.css';

function Programs() {
  const [ref, isVisible] = useFadeIn();

  const programs = [
    {
      icon: '📖',
      title: 'Primary',
      description: 'Nursery – Gr.5',
      bgColor: 'var(--color-primary)'
    },
    {
      icon: '🔬',
      title: 'Middle School',
      description: 'Gr.6–8',
      bgColor: 'var(--color-secondary)'
    },
    {
      icon: '🎓',
      title: 'Secondary',
      description: 'Gr.9–10',
      bgColor: 'var(--color-primary)'
    },
    {
      icon: '🏅',
      title: 'Senior Secondary',
      description: 'Gr.11–12',
      bgColor: 'var(--color-secondary)'
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