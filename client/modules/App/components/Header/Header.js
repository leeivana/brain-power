import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

// Import Style
const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: '#2196f3',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  font: {
    fontColor: '#fff',
    color: '#fff !important',
    textDecoration: 'none',
  },
};

export function Header(props, context) {
  const languageNodes = props.intl.enabledLanguages.map(lang => (
    <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>
      {lang}
    </li>
  ));

  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            BrainTendance
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.contextTypes = {
  router: PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
