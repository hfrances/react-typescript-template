import { FunctionComponent, useRef, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CSS from 'csstype';

type HeaderProps = {
  title: string;
  onHeight?: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const Header: FunctionComponent<HeaderProps> = ({ title, onHeight }) => {
  const history = useHistory();
  const targetRef = useRef<HTMLHeadingElement>(null);

  
  useLayoutEffect(() => {
    if (onHeight) {
      onHeight(targetRef.current?.offsetHeight);
    }
  }, []);

  return (
    <header className="App-header" ref={targetRef}>
      <div style={barStyle}>
        <button style={{ ...buttonStyle, backgroundColor: 'transparent', borderWidth: '0' }} onClick={() => history.goBack()}>&#8249;</button>
        <p className="App-header-title" style={titleStyle}>{title}</p>
      </div>
    </header>
  )
}

export default Header;
export { Header };


/* Styles */

const barStyle: CSS.Properties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  position: 'relative',
  alignItems: 'center',
}

const titleStyle: CSS.Properties = {
  flex: '0 1 auto',
  position: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const buttonStyle: CSS.Properties = {
  flex: 'none',
  position: 'absolute',
  marginRight: 'auto',
  textDecoration: 'none',
  display: 'inline-block',
  padding: '8px 16px',
  cursor: 'pointer',
}
