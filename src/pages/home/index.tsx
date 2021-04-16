import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MainFrame } from '../../components';
import debug from '../../helpers/debug';
import logo from '../../assets/logo.svg';

const HomePage = (): JSX.Element => {

  useEffect(() => {
    debug.log("Creating component", "Home");
  }, []);

  return (
    <MainFrame headerTitle="Home" style={{ padding: '20px 0px' }} footerVisibility='fixed'>
      <img src={logo} className="app-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="app-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Link className="app-link" to="/menu">Menu</Link>
      <Link className="app-link" to="/sample-alerts">Alert samples</Link>
      <Link className="app-link" to="/sample-list?count=15">List samples</Link>
      <Link className="app-link" to="/sample">Service samples</Link>
    </MainFrame>
  );
};

export { HomePage };
export default HomePage;