import { FunctionComponent, Fragment } from 'react';
import Header from './header';
import Footer from './footer';

type MainFrameProps = {
  headerTitle: string,
  footerVisible: boolean
}

const MainFrame: FunctionComponent<MainFrameProps> = ({ headerTitle, footerVisible, children }) => {

  return (
    <Fragment>
      <Header title={headerTitle} />
      <main id="main-container" className="App-container">
        {children}
      </main>
      <Footer visible={footerVisible} />
    </Fragment>
  );
}

export default MainFrame;
export { MainFrame };