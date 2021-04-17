import React, { useState, FunctionComponent } from 'react';
import clsx from 'clsx';
import { makeStyles, IconButton, Divider } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

type NavigationBarProps = {
  drawerWidth?: number;
  list?: React.ReactNode;
  style?: React.CSSProperties;
}

const NavigationBar: FunctionComponent<NavigationBarProps> = ({ drawerWidth, list, style, children }) => {
  const classes = useStyles();
  const drawerClasses = makeStyles((theme) => ({
    width: {
      width: drawerWidth
    }
  }))();
  const [open, setOpen] = useState<boolean>(true);

  const handleDrawerClose = () => {
    setOpen(!open)
  }

  return (
    <div className={classes.root}>
      <nav className={`${classes.navBar} ${clsx({
        [classes.drawerOpen]: open, [drawerClasses.width]: open,
        [classes.drawerClose]: !open,
      })}`}>
        <div style={{ overflowY: 'auto', overflowX: 'hidden' }}>
          {list}
        </div>
        <Divider />
        <div className={`${classes.navBarButton} ${clsx({ [classes.drawerButtonOpen]: open, [classes.drawerButtonClose]: !open, })}`}>
          <IconButton onClick={handleDrawerClose}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
      </nav>
      <div className="nav-content" style={{ display: 'grid', overflowY: 'auto', width: 'inherit' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export { NavigationBar };
export default NavigationBar;


/* Styles */

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 'auto',
    justifyContent: 'space-between',
    overflowY: 'inherit',
    width: '100%'
  },
  navBar: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'inherit',
    background: '#E0FFFF',
    color: 'black',
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  navBarButton: {
    display: 'flex',
    flex: 'auto',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  drawerOpen: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8) + 1,
    },
  },
  drawerButtonOpen: {
    justifyContent: 'flex-end',
  },
  drawerButtonClose: {
    justifyContent: 'flex-start',
  }
}));