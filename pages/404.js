import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/NotFound.module.scss';
import Link from 'next/link';

const NotFound = () => {
  const router = useRouter();
  const text = router.locale === 'en' ? 'the page you are looking for could not be found' : 'no se ha podido encontrar la página que buscas';
  const linkText = router.locale === 'en' ? 'Click here to go back to the portfolio' : 'Haz click aquí para volver al portafolio';

  return (
    <>
      <Head>
        <title>Sarah Schmidt | 404</title>
      </Head>
      <div className={ styles.notFoundContainer }>
        <p>Ooops.... {text}</p>
        <Link href="/"><a>{ linkText }</a></Link>
      </div>
    </>
  );
};

export default NotFound;
