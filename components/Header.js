import { useState } from 'react';
import { useRouter } from 'next/router';
import { OpenButton, CloseButton } from './composed/HeaderButtons';
import { Sidebar } from './composed/Sidebar/Sidebar';
import Link from 'next/link';
import ClickAwayListener from 'react-click-away-listener';

export const Header = () => {
  const router = useRouter();
  const href = router.locale === 'en' ? '/' : '/en';
  const text = router.locale === 'en' ? 'Spanish' : 'Inglés';
  const [open, setOpen] = useState(false);

  return (
    <ClickAwayListener onClickAway={ () => setOpen(false) }>
      <header className="header">
        <div>
          <h3>
            <Link href="/">
              <a>Sarah Schmidt</a>
            </Link>
          </h3>
          <div>
            <Link href={ href }>
              <a>{ text }</a>
            </Link>
            { open ? <CloseButton setOpen={ setOpen } /> : <OpenButton setOpen={ setOpen } /> }
          </div>
        </div>
        <Sidebar open={ open } setOpen={ setOpen } />
      </header>
    </ClickAwayListener>
  )
};
