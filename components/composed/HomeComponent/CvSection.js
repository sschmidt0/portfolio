import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../../styles/Home.module.scss';
import { Studies } from './Studies';
import { ProfessionalExperience } from './ProfessionalExperience';
import { Languages } from './Languages';
import { motion, useAnimation } from "framer-motion";
import { fadeInUp } from '../../../assets/animations/animations';
import { useInView } from 'react-intersection-observer';
import { SiteLinks } from '../SiteLinks';

export const CvSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const router = useRouter();
  const title = router.locale === 'en' ? 'Curriculum Vitae' : 'Currículum Vitae';

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
    if (!inView) {
      controls.start('initial');
    }
  }, [controls, inView]);

  return (
    <article className={ styles.articleCV } id="cv">
      <h2>{ title }</h2>
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
      <SiteLinks site="intro" />
    </article>
  );
};
