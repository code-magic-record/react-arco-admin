import React, { useEffect } from 'react';
import { Menu } from '@arco-design/web-react';
import { IconHome, IconCalendar, IconDashboard, IconDice } from '@arco-design/web-react/icon';
import { IMenusItem, menuConfig } from '../conifg/menuConfig';
import { useNavigate, useParams } from 'react-router-dom';
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
};
const menu: IMenusItem[] = menuConfig.menu;

const getMenu = (menus: IMenusItem[]) => {
  const list = menus.map((item) => {
    if (item.children && item.children.length > 0) {
      return (
        <SubMenu
          title={
            <span>
              {icons[item.icon]}
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
        {icons[item.icon]}
        {item.name}
      </MenuItem>
    );
  });
  return list;
};

export const MenuComponent = () => {
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    console.log(navigate);
    console.log(params);
  }, []);
  return (
    <Menu
      theme="dark"
      defaultOpenKeys={['1']}
      defaultSelectedKeys={['0_3']}
      onClickMenuItem={(key) => {
        navigate(key);
      }}
      style={{ width: '100%' }}
    >
      {getMenu(menu)}
    </Menu>
  );
};
