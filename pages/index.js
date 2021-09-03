import styles from '../styles/Home.module.scss';
import { Footer } from '../components/Footer';
import { IntroSection } from '../components/composed/HomeComponent/IntroSection';
import { AboutSection } from '../components/composed/HomeComponent/AboutSection';
import { CvSection } from '../components/composed/HomeComponent/CvSection';

const Home = () => (
  <section className={ styles.homeContainer }>
    <IntroSection />
    <AboutSection />
    <CvSection />
    <Footer />
  </section>
);

export default Home;
