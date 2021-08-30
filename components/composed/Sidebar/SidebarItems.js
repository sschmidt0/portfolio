import PropTypes from 'prop-types';
import Link from 'next/link';

export const SidebarItems = ({ setOpen }) => {
  const menuOptions = [
    { text: 'Home', to: '/' },
    { text: 'Portafolio', to: '/portafolio' },
    { text: 'Contacto', to: '/contacto' }
  ];

  return (
    <ul>
      { menuOptions.map((menuItem, index) => (
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
