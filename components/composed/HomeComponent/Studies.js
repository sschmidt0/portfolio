import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { curriculumInfo, curriculumInfoEnglish } from '../../../assets/utils/data';
import styles from '../../../styles/Home.module.scss';
import { motion, useAnimation } from "framer-motion";
import { fadeInUp } from '../../../assets/animations/animations';
import { useInView } from 'react-intersection-observer';

export const Studies = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const router = useRouter();
  const title = router.locale === 'en' ? 'Academic experience and courses' : 'Formación y cursos';
  const studies = router.locale === 'en' ? curriculumInfoEnglish[1].studies : curriculumInfo[1].studies;

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
    if (!inView) {
      controls.start('initial');
    }
  }, [controls, inView]);

  return (
    <motion.section
      className={ `${styles.studiesExperienceContainer} ${styles.cvInnerContainer}` }
      initial="initial"
      animate={ controls }
      variants={ fadeInUp }
      ref={ ref }
    >
      <h3>{ title }</h3>
      <ul>
        {
          studies.map(study => {
            return (
              <li key={ study.id }>
                <h4>{ study.title }</h4>
                <ul className={ styles.centerCompaniesList }>
                  <li>
                    <span>{ study.center }</span> · <span>{ study.years }</span>
                  </li>
                </ul>
                <ul className={ styles.descriptionList }>
                  {
                    study.description.map((studyItem, index) => {
                      return (
                        <li key={ index }>{ studyItem }</li>
                      )
                    })
                  }
                </ul>
              </li>
            );
          })
        }
      </ul>
    </motion.section>
  );
};
