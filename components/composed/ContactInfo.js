import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from '../../styles/Contacto.module.scss';

export const ContactInfo = () => (
  <div className={ styles.infobox }>
    <span>Sarah Schmidt</span>
    <span>sschmidt0@uoc.edu</span>
    <div>
      <a href="https://github.com/sschmidt0" target="_blank" rel="noreferrer"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/sschmidt0/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      <a href="https://twitter.com/sschmidt0" target="_blank" rel="noreferrer"><FaTwitter /></a>
    </div>
  </div>
);
