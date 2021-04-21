import { FunctionComponent, Fragment, useState, useEffect } from 'react';
import CSS from 'csstype';
import debug from '../../helpers/debug';
import { AlertRectangle } from '../';
import Header from './header';
import { Footer, FooterVisibility as FooterVisibilityType, isFooterFixed, isFooterStatic } from './footer';

/** Content centered in the page */
const MAIN_FRAME_TYPE_FLEX = "flex";
/** Content aligned to top and scroll always visible */
const MAIN_FRAME_TYPE_SCROLLED = "scrolled";
/** Content filled in it container */
const MAIN_FRAME_TYPE_CONTENTS = "contents";

export type FrameType = typeof MAIN_FRAME_TYPE_FLEX | typeof MAIN_FRAME_TYPE_SCROLLED | typeof MAIN_FRAME_TYPE_CONTENTS;
export type FooterVisibility = FooterVisibilityType;

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

  const render = (footerVisibility: FooterVisibility) => {
    let isStatic = isFooterStatic(footerVisibility);
    let frameStyles: CSS.Properties = {
      ['--headerHeight' as any]: `${headerHeight}px`,
      ['--footerHeight' as any]: (isFooterFixed(footerVisibility) ? `${footerHeight}px` : undefined),
      /* Old browsers */
      marginTop: `${headerHeight}px`,
      marginBottom: (isFooterFixed(footerVisibility) ? `${footerHeight}px` : undefined)
    };

    if (isStatic) {
      return (
        // Footer in the main-container.
        <div id="main-container" className={`app-container ${castFrameType(type) ?? ''}`.trimEnd()} style={{ ...frameStyles }}>
          <main className='app-container-aux' style={style}>
            <div className={`app-container-content ${castFrameType(type) ?? ''}`.trimEnd()} style={contentStyle}>
              {children}
            </div>
          </main>
          <Footer visibility={footerVisibility} onHeight={setFooterHeight} />
        </div>
      );
    }
    else {
      return (
        // Footer after the main-container.
        <>
          <main id="main-container" className={`app-container ${castFrameType(type) ?? ''}`.trimEnd()} style={{ ...frameStyles, ...style }}>
            <div className={`app-container-content ${castFrameType(type) ?? ''}`.trimEnd()} style={contentStyle}>
              {children}
            </div>
          </main>
          <Footer visibility={footerVisibility} onHeight={setFooterHeight} />
        </>
      );
    }
  }

  useEffect(() => {
    debug.log("Creating component", "MainFrame");
  }, []);

  return (
    <Fragment>
      <Header title={headerTitle} onHeight={setHeaderHeight} />
      <AlertRectangle style={{ marginTop: headerHeight }} />
      {render(footerVisibility)}
    </Fragment>
  );
}

export default MainFrame;
export { MainFrame };