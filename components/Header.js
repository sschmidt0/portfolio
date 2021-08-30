import { useState } from 'react';
import { OpenButton, CloseButton } from './composed/HeaderButtons';
import { Sidebar } from './composed/Sidebar/Sidebar';
import Link from 'next/link';
import ClickAwayListener from 'react-click-away-listener';

export const Header = () => {
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
          { open ? <CloseButton setOpen={ setOpen } /> : <OpenButton setOpen={ setOpen } /> }
        </div>
        <Sidebar open={ open } setOpen={ setOpen } />
      </header>
    </ClickAwayListener>
  )
};
