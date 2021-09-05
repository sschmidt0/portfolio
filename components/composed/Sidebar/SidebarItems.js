import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';

export const SidebarItems = ({ setOpen }) => {
  const router = useRouter();
  const menuOptions = [
    { text: 'Home', to: '/' },
    { text: 'Portafolio', to: '/portafolio' },
    { text: 'Contacto', to: '/contacto' }
  ];
  const menuOptionsEnglish = [
    { text: 'Home', to: '/' },
    { text: 'Portfolio', to: '/portafolio' },
    { text: 'Contact', to: '/contacto' }
  ];
  const data = router.locale === 'en' ? menuOptionsEnglish : menuOptions;

  return (
    <ul>
      { data.map((menuItem, index) => (
        <li key={ index }>
          <Link href={ menuItem.to }>
            <a smooth="true" onClick={ () => setOpen(false) }>
              { menuItem.text }
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
};

SidebarItems.propTypes = {
  setOpen: PropTypes.func,
};
