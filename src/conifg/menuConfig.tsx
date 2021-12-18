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
      name: '首页',
      key: 'home',
      path: '/home',
      icon: 'IconHome',
    },
    {
      name: '数据总览',
      key: 'analysis',
      path: '/newAnalysis',
      icon: 'IconHome',
      children: [
        {
          name: '数据总览(原)',
          key: 'newAnalysis/analysis',
          path: '/newAnalysis/analysis',
          icon: 'IconCalendar',
        },
        {
          name: '商品库存预警',
          key: 'newAnalysis/index',
          path: '/newAnalysis/index',
          icon: 'IconCalendar',
        },
        {
          name: '商品库存宽表',
          key: 'newAnalysis/list',
          path: '/newAnalysis/list',
          icon: 'IconDice',
        },
      ],
    },
  ],
};
