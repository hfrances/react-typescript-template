import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router';
import { MainFrame } from "../../components"
import debug from '../../helpers/debug';

const NotFoundPage = (): JSX.Element => {
  const { pathname } = useLocation();
  const history = useHistory();

  const goHome = () => {
    history.push('/home');
  }

  useEffect(() => {
    debug.log("Creating component", "Page not found");
  }, []);

  return (
    <MainFrame headerTitle="Page not found">
      <div>Not found '<code>{pathname}</code>'</div>
      <button className="button-link app-link" onClick={() => goHome()}>
        Go Home
      </button>
    </MainFrame>
  );
}

export { NotFoundPage };
export default NotFoundPage;