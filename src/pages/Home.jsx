import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import About from '../components/About/About';
import FounderMessage from '../components/FounderMessage/FounderMessage';
import Programs from '../components/Programs/Programs';
import Activities from '../components/Activities/Activities';
import Testimonials from '../components/Testimonials/Testimonials';
import WhyChoose from '../components/WhyChoose/WhyChoose';
import AdmissionsCTA from '../components/AdmissionsCTA/AdmissionsCTA';

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Stats />
      <About />
      <FounderMessage />
      <Programs />
      <Activities />
      <Testimonials />
      <WhyChoose />
      <AdmissionsCTA />
    </div>
  );
}

export default Home;