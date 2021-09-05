import { useRouter } from 'next/router';
import styles from '../../../styles/Portfolio.module.scss';
import { projects, projectsEnglish } from '../../../assets/utils/data';
import { PortfolioItem } from './PortfolioItem';
import { motion } from "framer-motion";
import { stagger } from '../../../assets/animations/animations';

export const ProjectsPortfolio = () => {
  const router = useRouter();
  const data = router.locale === 'en' ? projectsEnglish : projects;

  return (
    <motion.div
      className={ styles.portfolio }
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      variants={ stagger }
    >
      { data.map(project => <PortfolioItem project={ project } key={ project.index } />) }
    </motion.div>
  );
};
