import useFadeIn from '../../hooks/useFadeIn';
import './Stats.css';

function Stats() {
  const [ref, isVisible] = useFadeIn();

  const stats = [
    { number: '100+', label: 'Students' },
    { number: '10', label: 'Dedicated Teachers' },
    { number: 'Est. 2024', label: '' },
    { number: 'CBSE', label: 'Curriculum' }
  ];

  return (
    <section className="stats" id="stats">
      <div className="stats-container" ref={ref}>
        {stats.map((stat, index) => (
          <div 
            className={`stat-item ${isVisible ? 'visible' : ''}`} 
            key={index}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;