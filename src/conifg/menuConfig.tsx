export interface IMenusItem {
  name: string;
  key: string;
  path: string;
  icon: string;
  children?: {
    name: string;
    key: string;
    path: string;
    icon: string;
  }[];
}
interface IMenu {
  menu: IMenusItem[];
}

export const menuConfig: IMenu = {
  menu: [
    {
      name: '欢迎页',
      key: 'home',
      path: '/weclome',
      icon: 'IconHome',
    },
    {
      name: '数据',
      key: 'data',
      path: '/data',
      icon: 'IconHome',
    },
  ],
};
