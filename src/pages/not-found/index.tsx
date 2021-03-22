import { MainFrame } from "../../components"

const NotFoundPage = (): JSX.Element => {
  return (
    <MainFrame headerTitle="Page not found" footerVisible={true}>
      <div>Not found</div>
    </MainFrame>
  );
}

export { NotFoundPage };
export default NotFoundPage;