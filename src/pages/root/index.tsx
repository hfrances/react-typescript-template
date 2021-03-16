import { FunctionComponent, Fragment } from 'react';
import Header from './header';
import Footer from './footer';

type RootPageProps = {
  headerTitle: string,
  footerVisible: boolean
}

const RootPage: FunctionComponent<RootPageProps> = ({ headerTitle, footerVisible, children }) => {

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

export default RootPage;
export { RootPage };