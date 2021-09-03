import styles from '../../../styles/Portfolio.module.scss';
import { projects } from '../../../assets/utils/data';
import { PortfolioItem } from './PortfolioItem';
import { motion } from "framer-motion";
import { stagger } from '../../../assets/animations/animations';

export const ProjectsPortfolio = () => (
  <motion.div
    className={ styles.portfolio }
    initial="initial"
    animate="animate"
    exit={{ opacity: 0 }}
    variants={ stagger }
  >
    { projects.map(project => <PortfolioItem project={ project } key={ project.index } />) }
  </motion.div>
);
