import RootPage from '../root';
import logo from '../../assets/logo.svg';

const HomePage = (): JSX.Element => {

  return (
    <RootPage headerTitle="home" footerVisible={true}>
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
    </RootPage>
  );
};

export default HomePage;
export { HomePage };