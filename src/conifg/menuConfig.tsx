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
      name: '仪表板',
      key: '/dashboard',
      path: '/dashboard',
      icon: 'IconHome',
      children: [
        {
          name: '工作台',
          key: '/dashboard/workplace',
          path: '/dashboard/workplace',
          icon: 'IconHome',
        },
        {
          name: '实时监控',
          key: '/dashboard/monitor',
          path: '/dashboard/monitor',
          icon: 'IconHome',
        },
      ],
    },
    {
      name: '数据可视化',
      key: '/visualization',
      path: '/visualization',
      icon: 'IconHome',
      children: [
        {
          name: '分析页',
          key: '/visualization/data-analysis',
          path: '/visualization/data-analysis',
          icon: 'IconHome',
        },
        {
          name: '多位数据分析',
          key: '/visualization/multi-dimension-data-analysis',
          path: '/visualization/multi-dimension-data-analysis',
          icon: 'IconHome',
        },
      ],
    },
    {
      name: '列表页',
      key: '/list',
      path: '/list',
      icon: 'IconHome',
      children: [
        {
          name: '查询表格',
          key: '/list/search-table',
          path: '/list/search-table',
          icon: 'IconHome',
        },
        {
          name: '卡片列表',
          key: '/list/card',
          path: '/list/card',
          icon: 'IconHome',
        },
      ],
    },
    {
      name: '详情页',
      key: '/profile',
      path: '/profile',
      icon: 'IconHome',
      children: [
        {
          name: '基础详情页',
          key: '/profile/basic',
          path: '/profile/basic',
          icon: 'IconHome',
        },
      ],
    },
    {
      name: '结果页面',
      key: 'result',
      path: '/result',
      icon: 'IconHome',
      children: [
        {
          name: '成功页',
          key: '/result/success',
          path: '/result/success',
          icon: 'IconHome',
        },
        {
          name: '失败页',
          key: '/result/error',
          path: '/result/error',
          icon: 'IconHome',
        },
      ],
    },
    {
      name: '异常页面',
      key: '/exception',
      path: '/exception',
      icon: 'IconHome',
      children: [
        {
          name: '403',
          key: '/exception/403',
          path: '/exception/403',
          icon: 'IconHome',
        },
        {
          name: '404',
          key: '/exception/404',
          path: '/exception/404',
          icon: 'IconHome',
        },
        {
          name: '500',
          key: '/exception/500',
          path: '/exception/500',
          icon: 'IconHome',
        },
      ],
    },
    {
      name: '个人中心',
      key: '/user',
      path: '/user',
      icon: 'IconHome',
      children: [
        {
          name: '用户信息',
          key: '/user/info',
          path: '/user/info',
          icon: 'IconHome',
        },
        {
          name: '用户设置',
          key: '/user/setting',
          path: '/user/setting',
          icon: 'IconHome',
        },
      ],
    },
  ],
};
