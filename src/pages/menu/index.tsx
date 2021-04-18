import { useEffect, useState } from 'react';
import { MainFrame, NavigationBar } from '../../components'
import { useTheme, useMediaQuery, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PhotoIcon from '@material-ui/icons/Photo';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import debug from '../../helpers/debug';

const MenuPage = (): JSX.Element => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const icons = [
    <AddShoppingCartIcon />, <InboxIcon />, <MailIcon />,
    <CloudUploadIcon />, <PhotoIcon />, <AccountBalanceIcon />, <AccountTreeIcon />
  ];
  const [opened, setOpened] = useState<boolean | null>(null);

  const generate = (count: number, element: (item: number) => JSX.Element): JSX.Element[] | undefined => {
    let elements = new Array<JSX.Element>(count);

    for (let i: number = 0; i < count; i++) {
      elements[i] = element(i + 1);
    }
    return elements;
  }

  const onOpenChanged = (value: boolean) => {
    debug.log("Menu bar", "opened", value);
  }

  useEffect(() => {
    debug.log("Creating component", "Menu");
  }, []);

  useEffect(() => {
    setOpened(!isSmall);
  }, [isSmall]);

  return (
    <MainFrame headerTitle="Menu" type="contents">
      {opened === null ? null :
        <NavigationBar drawerWidth={240} opened={opened} onChanged={onOpenChanged} list={
          <List>
            {generate(10, item =>
              <ListItem button key={item}>
                <ListItemIcon>{icons[(item - 1) % icons.length]}</ListItemIcon>
                <ListItemText primary={`menu-item-${item}`} />
              </ListItem>
            )}
          </List>
        } fixedList={
          <List>
            <ListItem button>
              <ListItemIcon><AccountCircleIcon /></ListItemIcon>
              <ListItemText primary="Account" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        }>
          {generate(15, item =>
            <div key={`c${item}`}>{`content ${item}`}</div>
          )}
        </NavigationBar>
      }
    </MainFrame>
  );
}

export { MenuPage };
export default MenuPage;

/* Styles */
