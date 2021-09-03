import { useEffect } from 'react';
import styles from '../../styles/Home.module.scss';
import { Studies } from './Studies';
import { ProfessionalExperience } from './ProfessionalExperience';
import { Languages } from './Languages';
import { motion, useAnimation } from "framer-motion";
import { fadeInUp } from '../../assets/animations/animations';
import { useInView } from 'react-intersection-observer';

export const CvSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
    if (!inView) {
      controls.start('initial');
    }
  }, [controls, inView]);

  return (
    <article className={ styles.articleCV }>
      <h2>Currículum Vitae</h2>
      <div className={ styles.cvContainer }>
        <Studies />
        <motion.div
          className={ styles.cvInnerContainer }
          initial="initial"
          animate={ controls }
          variants={ fadeInUp }
          ref={ ref }
        >
          <ProfessionalExperience />
          <Languages />
        </motion.div>
      </div>
    </article>
  );
};
