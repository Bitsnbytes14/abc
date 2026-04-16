import useFadeIn from '../../hooks/useFadeIn';
import './Activities.css';

function Activities() {
  const [ref, isVisible] = useFadeIn();

  const activities = [
    { icon: '⚽', title: 'Sports', blurb: 'Basketball, football, cricket & more' },
    { icon: '🎨', title: 'Arts & Crafts', blurb: 'Painting, pottery, and design' },
    { icon: '🎵', title: 'Music & Dance', blurb: 'Classical & contemporary styles' },
    { icon: '🤖', title: 'Robotics Club', blurb: 'Coding and building robots' },
    { icon: '🌿', title: 'Nature Walks', blurb: 'Eco-exploration and sustainability' },
    { icon: '🎭', title: 'Theatre', blurb: 'Drama, acting, and stagecraft' }
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