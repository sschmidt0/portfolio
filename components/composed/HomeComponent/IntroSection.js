import { useEffect } from 'react';
import styles from '../../../styles/Home.module.scss';
import { DynamicText } from '../DynamicText';
import Image from 'next/image';
import { ContinueArrow } from '../ContinueArrow';
import { motion, useAnimation } from "framer-motion";
import { stagger, zoomIn, fadeInLeft } from '../../../assets/animations/animations';
import { useInView } from 'react-intersection-observer';

export const IntroSection = () => {
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
    <motion.article
      className={ styles.articleIntro }
      initial="initial"
      animate={ controls }
      variants={ stagger }
    >
      <div className={ styles.introContainer }>
        <motion.div
          initial="initial"
          animate={ controls }
          variants={ zoomIn }
          ref={ ref }
        >
          <Image
            src="/sarah-perfil.png"
            layout="fill"
            alt="Foto de perfil de Sarah Schmidt"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate={ controls }
          variants={ fadeInLeft }
          ref={ ref }
        >
          <h2>Sarah Schmidt</h2>
          <h1>Desarrolladora Frontend con React</h1>
          <p>Conocimientos de <DynamicText /></p>
          <ContinueArrow colorHash="#9B51E0" />
        </motion.div>
      </div>
    </motion.article>
  );
};
