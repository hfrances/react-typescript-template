import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { MainFrame } from "../../components"
import debug from '../../helpers/debug';

const NotFoundPage = (): JSX.Element => {
  const { pathname } = useLocation();

  useEffect(() => {
    debug.log("Creating component", "Page not found");
  }, []);

  return (
    <MainFrame headerTitle="Page not found">
      <div>Not found <code>{pathname}</code></div>
    </MainFrame>
  );
}

export { NotFoundPage };
export default NotFoundPage;