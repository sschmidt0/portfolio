import styles from '../styles/Home.module.scss';
import { DynamicText } from '../components/composed/DynamicText';
import { MdExpandMore } from 'react-icons/md';
import Image from 'next/image';
import { about } from '../assets/utils/data';
import { Footer } from '../components/Footer';
import { Languages } from '../components/composed/Languages';

const Home = () => (
  <section className={ styles.homeContainer }>
    <article className={ styles.articleIntro }>
      <div className={ styles.introContainer }>
        <div>
          <Image
            src="/sarah-perfil.png"
            layout="fill"
            alt="Foto de perfil de Sarah Schmidt"
          />
        </div>
        <div>
          <h2>Sarah Schmidt</h2>
          <h1>Desarrolladora Frontend con React</h1>
          <p>Conocimientos de <DynamicText /></p>
          <p><MdExpandMore /></p>
        </div>
      </div>
    </article>
    <article className={ styles.articleAbout }>
      <div>
        <h2>Quién soy</h2>
        <p>{ about.text }</p>
      </div>
    </article>
    <article className={ styles.articleCV }>
      <h2>Currículum Vitae</h2>
      <Languages />
    </article>
    <Footer />
  </section>
);

export default Home;
