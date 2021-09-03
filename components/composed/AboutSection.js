import { useEffect } from 'react';
import styles from '../../styles/Home.module.scss';
import { about } from '../../assets/utils/data';
import { motion, useAnimation } from "framer-motion";
import { zoomIn } from '../../assets/animations/animations';
import { useInView } from 'react-intersection-observer';
import { ContinueArrow } from './ContinueArrow';

export const AboutSection = () => {
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
    <article className={ styles.articleAbout }>
      <div>
        <h2>Quién soy</h2>
        <motion.p
          initial="initial"
          animate={ controls }
          variants={ zoomIn }
          ref={ ref }
        >
          { about.text }
        </motion.p>
        <ContinueArrow />
      </div>
    </article>
  );
};
