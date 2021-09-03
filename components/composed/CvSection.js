import styles from '../../styles/Home.module.scss';
import { Studies } from './Studies';
import { ProfessionalExperience } from './ProfessionalExperience';
import { Languages } from './Languages';

export const CvSection = () => (
  <article className={ styles.articleCV }>
    <h2>Currículum Vitae</h2>
    <div className={ styles.cvContainer }>
      <Studies />
      <div className={ styles.cvInnerContainer }>
        <ProfessionalExperience />
        <Languages />
      </div>
    </div>
  </article>
);
