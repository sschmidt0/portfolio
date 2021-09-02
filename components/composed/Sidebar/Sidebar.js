import PropTypes from 'prop-types';
import { SidebarItems } from './SidebarItems';
import { motion } from 'framer-motion';
import { menuOpenClose } from '../../../assets/animations/animations';

export const Sidebar = ({ open, setOpen }) => (
  <motion.aside
    className="menu"
    animate={ open ? "open" : "closed" }
    variants={ menuOpenClose }
  >
    <SidebarItems setOpen={ setOpen } />
  </motion.aside>
);

Sidebar.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
