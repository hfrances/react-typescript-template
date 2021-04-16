import { FunctionComponent, Fragment, useState, useEffect } from 'react';
import CSS from 'csstype';
import debug from '../../helpers/debug';
import { AlertRectangle } from '../';
import Header from './header';
import { Footer, FooterVisibility, isFooterFixed, isFooterStatic } from './footer';

const MAIN_FRAME_CONTENT_SCROLLED = "scrolled";

type MainFrameProps = {
  headerTitle: string,
  contentType?: typeof MAIN_FRAME_CONTENT_SCROLLED | undefined
  contentStyle?: CSS.Properties,
  footerVisibility?: FooterVisibility;
}

const MainFrame: FunctionComponent<MainFrameProps> = ({ headerTitle, contentType, contentStyle, footerVisibility = 'fixed', children }) => {
  const [headerHeight, setHeaderHeight] = useState<number>();
  const [footerHeight, setFooterHeight] = useState<number>();

  useEffect(() => {
    debug.log("Creating component", "MainFrame");
  }, []);

  return (
    <Fragment>
      <Header title={headerTitle} onHeight={setHeaderHeight} />
      <AlertRectangle style={{ marginTop: headerHeight }} />
      <main id="main-container" 
        className={`app-container ${contentType ?? ''} ${isFooterStatic(footerVisibility) ? 'static' : ''}`.trimEnd()} 
        style={{ marginTop: headerHeight, marginBottom: (isFooterFixed(footerVisibility) ? footerHeight : undefined), ...contentStyle }}
      >
        <div className="app-container-content">
          {children}
        </div>
      </main>
      <Footer visibility={footerVisibility} onHeight={setFooterHeight} />
    </Fragment>
  );
}

export default MainFrame;
export { MainFrame };