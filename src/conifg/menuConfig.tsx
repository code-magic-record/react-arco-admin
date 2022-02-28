export interface IMenusItem {
  name: string;
  key: string;
  path: string;
  icon?: string;
  children?: {
    name: string;
    key: string;
    path: string;
  }[];
}
interface IMenu {
  menu: IMenusItem[];
}

export const menuConfig: IMenu = {
  menu: [
    {
      name: 'menu.dashboard',
      key: '/dashboard',
      path: '/dashboard',
      icon: 'IconDashboard',
      children: [
        {
          name: 'menu.dashboard.workplace',
          key: '/dashboard/workplace',
          path: '/dashboard/workplace',
        },
        {
          name: 'menu.dashboard.monitor',
          key: '/dashboard/monitor',
          path: '/dashboard/monitor',
        },
      ],
    },
    {
      name: 'menu.visualization',
      key: '/visualization',
      path: '/visualization',
      icon: 'IconHome',
      children: [
        {
          name: 'menu.visualization.dataAnalysis',
          key: '/visualization/data-analysis',
          path: '/visualization/data-analysis',
        },
        {
          name: 'menu.visualization.multiDimensionDataAnalysis',
          key: '/visualization/multi-dimension-data-analysis',
          path: '/visualization/multi-dimension-data-analysis',
        },
      ],
    },
    {
      name: 'menu.list',
      key: '/list',
      path: '/list',
      icon: 'IconList',
      children: [
        {
          name: 'menu.list.searchTable',
          key: '/list/search-table',
          path: '/list/search-table',
        },
        {
          name: 'menu.list.cardList',
          key: '/list/card',
          path: '/list/card',
        },
      ],
    },
    {
      name: 'menu.profile',
      key: '/profile',
      path: '/profile',
      icon: 'IconFile',
      children: [
        {
          name: 'menu.profile.basic',
          key: '/profile/basic',
          path: '/profile/basic',
        },
      ],
    },
    {
      name: 'menu.result',
      key: '/result',
      path: '/result',
      icon: 'IconCheckCircle',
      children: [
        {
          name: 'menu.result.success',
          key: '/result/success',
          path: '/result/success',
        },
        {
          name: 'menu.result.error',
          key: '/result/error',
          path: '/result/error',
        },
      ],
    },
    {
      name: 'menu.exception',
      key: '/exception',
      path: '/exception',
      icon: 'IconExclamationCircle',
      children: [
        {
          name: 'menu.exception.403',
          key: '/exception/403',
          path: '/exception/403',
        },
        {
          name: 'menu.exception.404',
          key: '/exception/404',
          path: '/exception/404',
        },
        {
          name: 'menu.exception.500',
          key: '/exception/500',
          path: '/exception/500',
        },
      ],
    },
    {
      name: 'menu.user',
      key: '/user',
      path: '/user',
      icon: 'IconUser',
      children: [
        {
          name: 'menu.user.info',
          key: '/user/info',
          path: '/user/info',
        },
        {
          name: 'menu.user.setting',
          key: '/user/setting',
          path: '/user/setting',
        },
      ],
    },
  ],
};
