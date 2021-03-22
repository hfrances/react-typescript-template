import { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import CSS from 'csstype';

type HeaderProps = {
  title: string;
}

const Header: FunctionComponent<HeaderProps> = ({ title }) => {
  const history = useHistory();

  return (
    <header className="App-header">
      <div style={barStyle}>
        <button style={{ ...buttonStyle, backgroundColor:'transparent', borderWidth:'0' }} onClick={() => history.goBack()}>&#8249;</button>
        <p style={titleStyle}>{title}</p>
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
  margin: '10px 10px'
}

const titleStyle: CSS.Properties = {
  flex: '0 1 auto', 
  position: 'absolute', 
  left: '50%', 
  transform: 'translateX(-50%)'
}

const buttonStyle: CSS.Properties = {
  flex: 'none',
  marginRight: 'auto',
  textDecoration: 'none',
  display: 'inline-block',
  padding: '8px 16px',
}

/*
const darkStyle: CSS.Properties = {
  backgroundColor: 'black',
  color: 'white'
}

const lightStyle: CSS.Properties = {
  backgroundColor: '#f1f1f1',
  color: '#000'
}

const previousStyle: CSS.Properties = {
  backgroundColor: '#ddd',
  color: 'black'
}

const nextStyle: CSS.Properties = {
  backgroundColor: '#4CAF50',
  color: 'white'
}

const roundedStyle: CSS.Properties = {
  borderRadius: '50%'
}
*/