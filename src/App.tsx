import { useEffect } from 'react';
import AppRoutes from './routes';
import debug from './helpers/debug'
import './assets/common.css';

const App = (): JSX.Element => {

  useEffect(() => {
    debug.log("Creating component", "App");
  }, []);

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
