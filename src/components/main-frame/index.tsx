import { FunctionComponent, Fragment, useState } from 'react';
import CSS from 'csstype';
import { AlertRectangleStored } from '../';
import Header from './header';
import Footer from './footer';

const MAIN_FRAME_CONTENT_SCROLLED = "scrolled";

type MainFrameProps = {
  headerTitle: string,
  contentType?: typeof MAIN_FRAME_CONTENT_SCROLLED | undefined
  contentStyle?: CSS.Properties,
  footerVisible?: boolean
}

const MainFrame: FunctionComponent<MainFrameProps> = ({ headerTitle, contentType, contentStyle, footerVisible = true, children }) => {
  const [headerHeight, setHeaderHeight] = useState<number>();
  const [footerHeight, setFooterHeight] = useState<number>();


  return (
    <Fragment>
      <Header title={headerTitle} onHeight={setHeaderHeight} />
      <AlertRectangleStored style={{ marginTop: headerHeight }} />
      <main id="main-container" className={`App-container ${contentType ?? ''}`.trimEnd()} style={{ marginTop: headerHeight, marginBottom: footerHeight, ...contentStyle }}>
        {children}
      </main>
      <Footer visible={footerVisible} onHeight={setFooterHeight} />
    </Fragment>
  );
}

export default MainFrame;
export { MainFrame };