import React, { useEffect, useState } from 'react';
import { Menu } from '@arco-design/web-react';
import {
  IconHome,
  IconCalendar,
  IconDashboard,
  IconDice,
  IconApps,
  IconList,
  IconFile,
  IconCheckCircle,
  IconUser,
  IconExclamationCircle,
} from '@arco-design/web-react/icon';
import { IMenusItem, menuConfig } from '../conifg/menuConfig';
import { useNavigate, useLocation } from 'react-router-dom';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

interface IconsPros {
  [key: string]: React.ReactElement;
}
const icons: IconsPros = {
  IconHome: <IconHome />,
  IconCalendar: <IconCalendar />,
  IconDashboard: <IconDashboard />,
  IconDice: <IconDice />,
  IconApps: <IconApps />,
  IconList: <IconList />,
  IconFile: <IconFile />,
  IconCheckCircle: <IconCheckCircle />,
  IconUser: <IconUser />,
  IconExclamationCircle: <IconExclamationCircle />,
};
const menu: IMenusItem[] = menuConfig.menu;

const getMenu = (menus: IMenusItem[]) => {
  const list = menus.map((item) => {
    if (item.children && item.children.length > 0) {
      return (
        <SubMenu
          selectable
          title={
            <span>
              {item.icon && icons[item.icon]}
              {item.name}
            </span>
          }
          key={item.key}
        >
          {getMenu(item.children)}
        </SubMenu>
      );
    }
    return (
      <MenuItem key={item.path}>
        {/* {icons[item.icon]} */}
        {item.name}
      </MenuItem>
    );
  });
  return list;
};

export const MenuComponent = () => {
  const [selectedKey, setSelectedKey] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    initMenus();
  }, []);

  function initMenus() {
    setSelectedKey(location.pathname);
  }
  const onClickMenuItem = (key: string) => {
    navigate(key);
    setSelectedKey(key);
  };

  return (
    <Menu
      onClickMenuItem={onClickMenuItem}
      defaultOpenKeys={['/' + location.pathname.split('/')[1]]}
      selectedKeys={[selectedKey]}
      style={{ width: '100%' }}
    >
      {getMenu(menu)}
    </Menu>
  );
};
