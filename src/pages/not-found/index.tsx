import RootPage from "../root"

const NotFoundPage = (): JSX.Element => {
  return (
    <RootPage headerTitle="Page not found" footerVisible={true}>
      <div>Not found</div>
    </RootPage>
  );
}

export default NotFoundPage;
export { NotFoundPage };