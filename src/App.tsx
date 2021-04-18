import { useEffect } from 'react';
import AppRoutes from './routes';
import { useTheme, useMediaQuery } from '@material-ui/core';
import debug from './helpers/debug'
import './assets/common.css';

const App = (): JSX.Element => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    debug.log("Creating component", "App");
  }, []);

  useEffect(() => {
    debug.log("App", "isSmall", isSmall);
  }, [isSmall]);

  return (
    <div className="app">
      <AppRoutes/>
    </div>
  );
}

export default App;
