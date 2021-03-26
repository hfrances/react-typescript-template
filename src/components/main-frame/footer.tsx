import { FunctionComponent, useRef, useLayoutEffect } from 'react';

type FooterProps = {
  visible: boolean;
  onHeight?: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const Footer: FunctionComponent<FooterProps> = ({ visible, onHeight }) => {
  const targetRef = useRef<HTMLHeadingElement>(null);

  
  useLayoutEffect(() => {
    if (onHeight) {
      onHeight(targetRef.current?.offsetHeight);
    }
  }, [onHeight]);

  return (
    (visible) ?
      <footer className="App-footer" ref={targetRef}>
        <p className="App-footer-component">{process.env.REACT_APP_VERSION}</p>
      </footer>
      : null
  )
}

export default Footer;
export { Footer };