import { FunctionComponent } from 'react';

type FooterProps = {
  visible: boolean;
}

const Footer: FunctionComponent<FooterProps> = ({ visible }) => {

  return (
    (visible) ?
      <footer className="App-footer">
        <p>{process.env.REACT_APP_VERSION}</p>
      </footer>
      : null
  )
}

export default Footer;
export { Footer };