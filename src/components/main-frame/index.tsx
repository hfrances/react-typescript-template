import { FunctionComponent, Fragment, useState, useEffect } from 'react';
import CSS from 'csstype';
import debug from '../../helpers/debug';
import { AlertRectangle } from '../';
import Header from './header';
import { Footer, FooterVisibility, isFooterFixed, isFooterStatic } from './footer';

/** Content centered in the page */
const MAIN_FRAME_TYPE_FLEX = "flex";
/** Content aligned to top and scroll always visible */
const MAIN_FRAME_TYPE_SCROLLED = "scrolled";
/** Content filled in it container */
const MAIN_FRAME_TYPE_CONTENTS = "contents";

export type FrameType = typeof MAIN_FRAME_TYPE_FLEX | typeof MAIN_FRAME_TYPE_SCROLLED | typeof MAIN_FRAME_TYPE_CONTENTS;

type MainFrameProps = {
  headerTitle: string,
  type?: FrameType,
  style?: CSS.Properties,
  contentStyle?: CSS.Properties,
  footerVisibility?: FooterVisibility;
}

const MainFrame: FunctionComponent<MainFrameProps> = ({ headerTitle, type = MAIN_FRAME_TYPE_FLEX, style, contentStyle, footerVisibility = 'fixed', children }) => {
  const [headerHeight, setHeaderHeight] = useState<number>();
  const [footerHeight, setFooterHeight] = useState<number>();

  const castFrameType = (value: FrameType | undefined): (string | undefined) => {
    let rdo: string | undefined;

    if (value === MAIN_FRAME_TYPE_FLEX) {
      rdo = '';
    }
    else {
      rdo = value as (string | undefined);
    }
    return rdo;
  }

  useEffect(() => {
    debug.log("Creating component", "MainFrame");
  }, []);

  return (
    <Fragment>
      <Header title={headerTitle} onHeight={setHeaderHeight} />
      <AlertRectangle style={{ marginTop: headerHeight }} />
      <main id="main-container"
        className={`app-container ${castFrameType(type) ?? ''} ${isFooterStatic(footerVisibility) ? 'static' : ''}`.trimEnd()}
        style={{ marginTop: headerHeight, marginBottom: (isFooterFixed(footerVisibility) ? footerHeight : undefined), ...style }}
      >
        <div className={`app-container-content ${castFrameType(type) ?? ''}`.trimEnd()} style={contentStyle}>
          {children}
        </div>
      </main>
      <Footer visibility={footerVisibility} onHeight={setFooterHeight} />
    </Fragment>
  );
}

export default MainFrame;
export { MainFrame };