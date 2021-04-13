import { useEffect } from 'react';
import { MainFrame } from "../../components"
import debug from '../../helpers/debug';

const NotFoundPage = (): JSX.Element => {

  useEffect(() => {
    debug.log("Creating component", "Home");
  }, []);

  return (
    <MainFrame headerTitle="Page not found" footerVisible={true}>
      <div>Not found</div>
    </MainFrame>
  );
}

export { NotFoundPage };
export default NotFoundPage;