import { useEffect } from 'react';
import styles from '../../../styles/Home.module.scss';
import { languages } from '../../../assets/utils/data';
import { motion, useAnimation } from "framer-motion";
import { zoomIn } from '../../../assets/animations/animations';
import { useInView } from 'react-intersection-observer';

export const Languages = () => {
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
    <div className={ styles.languageContainer }>
      <h3>Lenguas</h3>
      <ul>
        {
          languages.map(language => {
            return (
              <li key={ language.id }>
                <span>{ language.language }</span>
                <div>
                  <span></span>
                  <motion.span
                    style={{ width: `${language.percentage}` }}
                    initial="initial"
                    animate={ controls }
                    variants={ zoomIn }
                    ref={ ref }
                  >
                    { language.knowledge }
                  </motion.span>
                </div>
              </li>
            );
          })
        }

      </ul>
    </div>
  );
};


// Languages.getInitialProps = async () => {
//   const data = languages;
//   return { languages: data }
// };
