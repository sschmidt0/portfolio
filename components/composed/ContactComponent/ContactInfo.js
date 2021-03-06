import { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from '../../../styles/Contacto.module.scss';
import { motion, useAnimation } from "framer-motion";
import { fadeInUp } from '../../../assets/animations/animations';
import { useInView } from 'react-intersection-observer';
import * as gtag from '../../../lib/gtag';

export const ContactInfo = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const handleLinkClick = (e) => {
    gtag.event({
      action: e.currentTarget.href,
      category: 'Social links',
      label: e.currentTarget.href,
    });
  };

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
    if (!inView) {
      controls.start('initial');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className={ styles.infobox }
      initial="initial"
      animate={ controls }
      variants={ fadeInUp }
      ref={ ref }
    >
      <span>Sarah Schmidt</span>
      <span>sschmidt0@uoc.edu</span>
      <div>
        <a href="https://github.com/sschmidt0" target="_blank" rel="noreferrer" onClick={ (e) => handleLinkClick(e) }><FaGithub /></a>
        <a href="https://www.linkedin.com/in/sschmidt0/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://twitter.com/sschmidt0" target="_blank" rel="noreferrer"><FaTwitter /></a>
      </div>
    </motion.div>
  );
};
