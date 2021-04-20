import { FunctionComponent, useRef, useLayoutEffect } from 'react';

/** Shows the footer at the end of the content */
const MAIN_FRAME_FOOTER_VISIBILITY_STATIC = "static";
/** Shows the footer always at the bottom of the window */
const MAIN_FRAME_FOOTER_VISIBILITY_FIXED = "fixed";
/** Hides the footer */
const MAIN_FRAME_FOOTER_VISIBILITY_HIDDEN = "hidden";

export type FooterVisibility = typeof MAIN_FRAME_FOOTER_VISIBILITY_STATIC | typeof MAIN_FRAME_FOOTER_VISIBILITY_FIXED | typeof MAIN_FRAME_FOOTER_VISIBILITY_HIDDEN;

type FooterProps = {
  visibility: FooterVisibility;
  onHeight?: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const isFooterStatic = (visibility: FooterVisibility): boolean => (visibility === MAIN_FRAME_FOOTER_VISIBILITY_STATIC);
const isFooterFixed = (visibility: FooterVisibility): boolean => (visibility === MAIN_FRAME_FOOTER_VISIBILITY_FIXED);
const isFooterVisible = (visibility: FooterVisibility) : boolean => (isFooterStatic(visibility) ||isFooterFixed(visibility));

const Footer: FunctionComponent<FooterProps> = ({ visibility, onHeight }) => {
  const targetRef = useRef<HTMLHeadingElement>(null);


  useLayoutEffect(() => {
    if (onHeight) {
      onHeight(targetRef.current?.offsetHeight);
    }
  }, [onHeight]);

  return (
    (isFooterVisible(visibility)) ?
      <footer className={`app-footer ${isFooterStatic(visibility) ? 'static' : ''}`.trimEnd()} ref={targetRef}>
        <p className="app-footer-component">{process.env.REACT_APP_VERSION}</p>
      </footer>
      : null
  )
}

export default Footer;
export { Footer, isFooterFixed, isFooterStatic, isFooterVisible };