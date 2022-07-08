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
import { useLocation, Link } from 'react-router-dom';
import useI18n from 'src/ahooks/useI18n';
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
  const { lang, i18n } = useI18n();
  const list = menus.map((item) => {
    if (item.children && item.children.length > 0) {
      return (
        <SubMenu
          selectable
          title={
            <span>
              {item.icon && icons[item.icon]}
              {i18n[lang][item.name]}
            </span>
          }
          key={item.key}
        >
          {getMenu(item.children)}
        </SubMenu>
      );
    }
    return <MenuItem key={item.path}>
      <Link to={item.path} style={{display: 'flex', flex: '1'}}>
        {i18n[lang][item.name]}
      </Link>
    </MenuItem>;
  });
  return list;
};

export const MenuComponent = () => {
  const [selectedKey, setSelectedKey] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname)
    initMenus();
  }, [location.pathname]);

  function initMenus() {
    const key = location.pathname.split('/') ? '/' + location.pathname.split('/')[1] : ''
    setOpenKeys([key]);
    setSelectedKey([location.pathname]);
  }
  const onClickMenuItem = (key: string) => {
    setSelectedKey([key]);
  };

  return (
    <Menu
      onClickMenuItem={onClickMenuItem}
      selectedKeys={selectedKey}
      style={{ width: '100%' }}
      onClickSubMenu={(_, openKeys) => {
        setOpenKeys(openKeys);
      }}
      openKeys={openKeys}
    >
      {getMenu(menu)}
    </Menu>
  );
};
