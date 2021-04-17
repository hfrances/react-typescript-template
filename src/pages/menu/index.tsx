import { useEffect } from 'react';
import { MainFrame, NavigationBar } from '../../components'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import debug from '../../helpers/debug';

const MenuPage = (): JSX.Element => {
  const icons = [<InboxIcon />, <MailIcon />];

  const generate = (count: number, element: (item: number) => JSX.Element): JSX.Element[] | undefined => {
    let elements = new Array<JSX.Element>(count);

    for (let i: number = 0; i < count; i++) {
      elements[i] = element(i + 1);
    }
    return elements;
  }

  useEffect(() => {
    debug.log("Creating component", "Menu");
  }, []);

  return (
    <MainFrame headerTitle="Menu" type="contents" contentStyle={{ overflowY: 'auto' }}>
      <NavigationBar drawerWidth={240} list={
        <List>
          {generate(10, item =>
            <ListItem button key={item}>
              <ListItemIcon>{icons[item % icons.length]}</ListItemIcon>
              <ListItemText primary={`menu item ${item}`} />
            </ListItem>
          )}
        </List>
      }>
        {generate(10, item =>
          <div key={`c${item}`}>{`content ${item}`}</div>
        )}
      </NavigationBar>
    </MainFrame>
  );
}

export { MenuPage };
export default MenuPage;

/* Styles */
