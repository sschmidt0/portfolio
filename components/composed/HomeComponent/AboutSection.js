import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../../styles/Home.module.scss';
import { about } from '../../../assets/utils/data';
import { motion, useAnimation } from "framer-motion";
import { zoomIn } from '../../../assets/animations/animations';
import { useInView } from 'react-intersection-observer';
import { ContinueArrow } from '../ContinueArrow';

export const AboutSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const router = useRouter();
  const title = router.locale === 'en' ? 'Who I am' : 'Quién soy';
  const text = router.locale === 'en' ? about.textEnglish : about.text;

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
    if (!inView) {
      controls.start('initial');
    }
  }, [controls, inView]);

  return (
    <article className={ styles.articleAbout }>
      <div>
        <h2>{ title }</h2>
        <motion.p
          initial="initial"
          animate={ controls }
          variants={ zoomIn }
          ref={ ref }
        >
          { text }
        </motion.p>
        <ContinueArrow />
      </div>
    </article>
  );
};
