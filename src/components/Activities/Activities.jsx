import useFadeIn from '../../hooks/useFadeIn';
import './Activities.css';

function Activities() {
  const [ref, isVisible] = useFadeIn();

  const activities = [
    { icon: '⚽', title: 'Sports & PT', blurb: 'Physical training and outdoor games' },
    { icon: '🎨', title: 'Drawing & Craft', blurb: 'Creative arts and handmade projects' },
    { icon: '💻', title: 'Basic Computer Skills', blurb: 'Introduction to digital literacy' },
    { icon: '🎤', title: 'Cultural Programs', blurb: 'Singing, dancing, and performances' },
    { icon: '📢', title: 'Morning Assembly', blurb: 'Daily prayers, news, and discipline' },
    { icon: '📖', title: 'Hindi & English Reading', blurb: 'Language development and vocabulary' }
  ];

  return (
    <section className="activities section" id="activities">
      <div className="container">
        <h2 className="section-title">Beyond The Classroom</h2>
        <div className="activities-grid" ref={ref}>
          {activities.map((activity, index) => (
            <div 
              className={`activity-card ${isVisible ? 'visible' : ''}`}
              key={index}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <span className="activity-icon">{activity.icon}</span>
              <h3 className="activity-title">{activity.title}</h3>
              <p className="activity-blurb">{activity.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Activities;