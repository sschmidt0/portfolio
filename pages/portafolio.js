import { useRouter } from 'next/router';
import Head from 'next/head';
import { ProjectsPortfolio } from '../components/composed/PortfolioComponent/ProjectsPortfolio';
import { Footer } from '../components/Footer';

const Portfolio = () => {
  const router = useRouter();
  const title = router.locale === 'en' ? 'Portfolio' : 'Portafolio';

  return (
    <>
      <Head>
        <title>Sarah Schmidt | { title }</title>
      </Head>
      <section>
        <h1>{ title }</h1>
        <ProjectsPortfolio />
        <Footer />
      </section>
    </>
  );
};

export default Portfolio;
