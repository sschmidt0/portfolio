import { useEffect } from 'react';
import styles from '../../styles/Home.module.scss';
import { MdExpandMore } from 'react-icons/md';
import { motion, useAnimation } from "framer-motion";
import { fadeInUp, moveUpDown } from '../../assets/animations/animations';
import { useInView } from 'react-intersection-observer';

export const ContinueArrow = ({ colorHash, link }) => {
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
    <motion.p
      className={ styles.arrow }
      style={{ color: `${ colorHash }` }}
      initial="initial"
      animate={ controls }
      variants={ moveUpDown }
      ref={ ref }
    >
      <a href={ `#${link}` }>
        <MdExpandMore />
      </a>
    </motion.p>
  )
};
