import { useEffect } from 'react';
import AppRoutes from './routes';
import './assets/common.css';
import { AuthorizationHelper } from './helpers';

const App = (): JSX.Element => {

  useEffect(() => {
    AuthorizationHelper.init();
  }, [])

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
