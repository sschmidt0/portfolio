import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  contained: {
    width: '100%',
    textTransform: 'uppercase',
    textDecoration: 'none',

    [theme.breakpoints.up('md')]: {
      width: '200px',
    }
  }
}));

export const SiteButton = ({ text, ...buttonProps }) => {
  const classes = useStyle();

  return <Button
    variant="contained"
    color="secondary"
    className={ classes.contained }
    { ...buttonProps }
  >
    { text }
  </Button>;
};

SiteButton.propTypes = {
  text: PropTypes.string,
};
