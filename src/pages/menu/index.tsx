import { MainFrame, SideBar } from '../../components';

const MenuPage = (): JSX.Element => {

  const generate = (count: number, element: (item: number) => JSX.Element): JSX.Element[] | undefined => {
    let elements = new Array<JSX.Element>(count);

    for (let i: number = 0; i < count; i++) {
      elements[i] = element(i + 1);
    }
    return elements;
  }

  return (
    <MainFrame headerTitle="menu" type='contents' footerVisibility='static'>
      <SideBar drawerWidth={240} opened={false} list={
        generate(20, item => <div>{item}</div>)
      } fixedList={
        <>
          <div>a</div>
        </>
      }>
        <div>Hola mundo</div>
      </SideBar>
    </MainFrame>
  );
}

export { MenuPage };
export default MenuPage;

/* Styles */
