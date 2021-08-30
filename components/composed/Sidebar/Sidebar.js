import PropTypes from 'prop-types';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { SidebarItems } from './SidebarItems';

export const Sidebar = ({ open, setOpen }) => (
  <SwitchTransition>
    <CSSTransition
      classNames="menu-show"
      timeout={ 500 }
      in={ open }
      unmountOnExit
    >
      <aside className="menu">
        <SidebarItems setOpen={ setOpen } />
      </aside>
    </CSSTransition>
  </SwitchTransition>
);

Sidebar.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
