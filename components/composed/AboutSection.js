import styles from '../../styles/Home.module.scss';
import { about } from '../../assets/utils/data';

export const AboutSection = () => (
  <article className={ styles.articleAbout }>
    <div>
      <h2>Quién soy</h2>
      <p>{ about.text }</p>
    </div>
  </article>
);
