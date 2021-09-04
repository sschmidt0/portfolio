import styles from '../styles/NotFound.module.scss';
import Link from 'next/link';

const NotFound = () => (
  <div className={ styles.notFoundContainer }>
    <p>Ooops.... no se ha podido encontrar la página que buscas</p>
    <Link href="/"><a>Haz click aquí para volver al portafolio</a></Link>
  </div>
);

export default NotFound;
