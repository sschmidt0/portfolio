import styles from '../styles/Home.module.scss';
import { Footer } from '../components/Footer';
import { IntroSection } from '../components/composed/IntroSection';
import { AboutSection } from '../components/composed/AboutSection';
import { CvSection } from '../components/composed/CvSection';

const Home = () => (
  <section className={ styles.homeContainer }>
    <IntroSection />
    <AboutSection />
    <CvSection />
    <Footer />
  </section>
);

export default Home;
