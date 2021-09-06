import Link from 'next/link';
import { useRouter } from 'next/router';

export const SiteLinks = ({ site }) => {
  const router = useRouter();
  const linkCV = router.locale === 'en' ? 'Want more? Check out my CV.' : '¿Ganas de más? Mira mi CV.';
  const linkPortfolio = router.locale === 'en' ? 'Want more? Check out my portfolio.' : '¿Ganas de más? Mira mi portafolio.';
  const linkContact = router.locale === 'en' ? "Or why don't you get in contact with me?" : '¿O por qué no te pones en contacto conmigo?';

  return (
    <div className="siteLinks">
    { site === 'intro' && (
      <>
        <Link href="/portafolio"><a>{ linkPortfolio }</a></Link>
        <Link href="/contacto"><a>{ linkContact }</a></Link>
      </>
    )}
    { site === 'portfolio' && (
      <>
        <Link href="/"><a>{ linkCV }</a></Link>
        <Link href="/contacto"><a>{ linkContact }</a></Link>
      </>
    )}
    { site === 'contact' && (
      <>
        <Link href="/"><a>{ linkCV }</a></Link>
        <Link href="/portafolio"><a>{ linkPortfolio }</a></Link>
      </>
    )}
    </div>
  );
};
