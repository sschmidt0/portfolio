import styles from '../../../styles/Portfolio.module.scss';
import { projects } from '../../../assets/utils/data';
import { PortfolioItem } from './PortfolioItem';

export const ProjectsPortfolio = () => (
  <div className={ styles.portfolio }>
    { projects.map(project => <PortfolioItem project={ project } key={ project.index } />) }
  </div>
);
