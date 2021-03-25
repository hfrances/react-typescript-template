import { FunctionComponent, Fragment, useState } from 'react';
import CSS from 'csstype';
import { AlertRectangleStored } from '../';
import Header from './header';
import Footer from './footer';

type MainFrameProps = {
  headerTitle: string,
  contentStyle?: CSS.Properties,
  footerVisible?: boolean
}

const MainFrame: FunctionComponent<MainFrameProps> = ({ headerTitle, contentStyle, footerVisible = true, children }) => {
  const [headerHeight, setHeaderHeight] = useState<number>();
  const [footerHeight, setFooterHeight] = useState<number>();

  
  return (
    <Fragment>
      <Header title={headerTitle} onHeight={setHeaderHeight} />
      <main id="main-container" className="App-container" style={{ marginTop: headerHeight, marginBottom: footerHeight, ...contentStyle }}>
        <AlertRectangleStored />
        {children}
      </main>
      <Footer visible={footerVisible} onHeight={setFooterHeight} />
    </Fragment>
  );
}

export default MainFrame;
export { MainFrame };