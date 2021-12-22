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
      name: '报销',
      key: 'expense',
      path: '/expense',
      icon: 'IconHome',
    },
    {
      name: '审批',
      key: 'approve',
      path: '/approve',
      icon: 'IconHome',
    },
    {
      name: '对账',
      key: 'reconciliation',
      path: '/reconciliation',
      icon: 'IconHome',
    },
    {
      name: '项目',
      key: 'project',
      path: '/project',
      icon: 'IconHome',
    },
    {
      name: '设置',
      key: 'setting',
      path: '/setting',
      icon: 'IconHome',
    },
  ],
};
