import { useEffect } from 'react';
import { MainFrame } from '../../components'
import { makeStyles, Container, Grid, Drawer } from '@material-ui/core';
import debug from '../../helpers/debug';

const drawerWidth = 240;

const MenuPage = (): JSX.Element => {
  const classes = useStyles();

  useEffect(() => {
    debug.log("Creating component", "Menu");
  }, []);

  return (
    <MainFrame headerTitle="Menu" 
      containerStyle={{ display: 'contents' }} 
      contentStyle={{ marginTop: 'inherit', marginBottom: 'inherit' }}
    >
      <Container style={{ width: '100%' }}>
        <Grid container direction="row">
          <Grid item sm={2}>
            <div>
              Content 1
            </div>
          </Grid>
          <Grid item sm={10}>
            <div>
              Content 2
            </div>
          </Grid>
        </Grid>
      </Container>
    </MainFrame>
  );
}

export { MenuPage };
export default MenuPage;

/* Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    //width: drawerWidth,
    //flexShrink: 0,
  },
  drawerPaper: {
    position: 'inherit',
    width: drawerWidth,
  }
}));