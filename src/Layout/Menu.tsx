import React from 'react';
import { Menu, Message } from '@arco-design/web-react';
import { IconHome, IconCalendar, IconDashboard, IconDice } from '@arco-design/web-react/icon';
import { IMenusItem, menuConfig } from '../conifg/menuConfig';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const icons: any = {
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
      <MenuItem key={item.key}>
        {icons[item.icon]}
        {item.name}
      </MenuItem>
    );
  });
  return list;
};

export const MenuComponent = () => {
  return (
    <Menu
      theme="dark"
      defaultOpenKeys={['1']}
      defaultSelectedKeys={['0_3']}
      onClickMenuItem={(key) => Message.info({ content: `You select ${key}`, showIcon: true })}
      style={{ width: '100%' }}
    >
      {getMenu(menu)}
    </Menu>
  );
};
