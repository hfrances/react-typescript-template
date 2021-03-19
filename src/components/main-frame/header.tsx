import { FunctionComponent } from 'react';

type HeaderProps = {
  title: string;
}

const Header: FunctionComponent<HeaderProps> = ({ title }) => {

  return (
    <header className="App-header">
      <p>{title}</p>
    </header>
  )
}

export default Header;
export { Header };