import React, { useState, FunctionComponent, useEffect } from 'react';
import CSS from 'csstype';
import './side-bar.css';

type SideBarProps = {
  drawerWidth?: number;
  list?: React.ReactNode;
  fixedList?: React.ReactNode;
  opened?: boolean;
  onChanged?: (value: boolean) => void;
  style?: CSS.Properties;
}

const SideBar: FunctionComponent<SideBarProps> = ({ drawerWidth, list, fixedList, opened = true, onChanged, style, children }) => {
  const [open, setOpen] = useState<boolean>(opened);

  const handleDrawerClose = () => {
    let value: boolean = !open;

    setOpen(value);
    if (onChanged) {
      onChanged(value);
    }
  }

  useEffect(() => {
    let value = opened;

    setOpen(value);
    if (onChanged && value !== opened) {
      onChanged(value);
    }
  }, [opened]);

  return (
    <div className='side-bar-root' style={style}>
      <nav className={`side-bar-paper ${open ? 'side-bar-drawer-open' : 'side-bar-drawer-close'}`} style={{ width: (open ? drawerWidth : undefined) }}>
        <div className='side-bar-paper-content'>
          {list}
        </div>
        <div className='side-bar-fixed-paper'>
          <div className='side-bar-fixed-paper-content'>
            {fixedList}
          </div>
          <div className={`side-bar-button-region ${open ? 'button-expanded' : 'button-collapsed'}`}>
            <button style={{ ...buttonStyle, backgroundColor: 'transparent', borderWidth: '0' }} onClick={handleDrawerClose}>
              {open ? '<' : '>'}
            </button>
          </div>
        </div>
      </nav>
      <div className='side-bar-container'>
        <div className='side-bar-content'>
          {children}
        </div>
      </div>
    </div>
  );
}

export { SideBar };
export default SideBar;


/* Styles */

const buttonStyle: CSS.Properties = {
  //flex: 'none',
  //position: 'absolute',
  //marginRight: 'auto',
  textDecoration: 'none',
  display: 'inline-block',
  padding: '8px 16px',
  cursor: 'pointer',
}