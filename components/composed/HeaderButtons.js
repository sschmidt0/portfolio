import { BsList, BsX } from 'react-icons/bs';
import { IconButton } from '@material-ui/core';

export const OpenButton = ({ setOpen }) => (
  <div onClick={ () => setOpen(true) }>
    <IconButton color="inherit" aria-label="abrir menú" component="span">
      <BsList />
    </IconButton>
  </div>
);

export const CloseButton = ({ setOpen }) => (
  <div onClick={ () => setOpen(false) }>
    <IconButton color="inherit" aria-label="abrir menú" component="span">
      <BsX />
    </IconButton>
  </div>
);
