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
    <MainFrame headerTitle="Home" contentStyle={{ padding: '20px 0px' }} footerVisible={true}>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Link className="App-link" to="/sample-alerts">Alert samples</Link>
      <Link className="App-link" to="/sample-list?count=15">List samples</Link>
      <Link className="App-link" to="/sample">Service samples</Link>
    </MainFrame>
  );
};

export { HomePage };
export default HomePage;