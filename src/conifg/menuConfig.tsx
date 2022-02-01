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
      name: '仪表板',
      key: '/dashboard',
      path: '/dashboard',
      icon: 'IconDashboard',
      children: [
        {
          name: '工作台',
          key: '/dashboard/workplace',
          path: '/dashboard/workplace',
        },
        {
          name: '实时监控',
          key: '/dashboard/monitor',
          path: '/dashboard/monitor',
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
        },
        {
          name: '多位数据分析',
          key: '/visualization/multi-dimension-data-analysis',
          path: '/visualization/multi-dimension-data-analysis',
        },
      ],
    },
    {
      name: '列表页',
      key: '/list',
      path: '/list',
      icon: 'IconList',
      children: [
        {
          name: '查询表格',
          key: '/list/search-table',
          path: '/list/search-table',
        },
        {
          name: '卡片列表',
          key: '/list/card',
          path: '/list/card',
        },
      ],
    },
    {
      name: '详情页',
      key: '/profile',
      path: '/profile',
      icon: 'IconFile',
      children: [
        {
          name: '基础详情页',
          key: '/profile/basic',
          path: '/profile/basic',
        },
      ],
    },
    {
      name: '结果页面',
      key: '/result',
      path: '/result',
      icon: 'IconCheckCircle',
      children: [
        {
          name: '成功页',
          key: '/result/success',
          path: '/result/success',
        },
        {
          name: '失败页',
          key: '/result/error',
          path: '/result/error',
        },
      ],
    },
    {
      name: '异常页面',
      key: '/exception',
      path: '/exception',
      icon: 'IconExclamationCircle',
      children: [
        {
          name: '403',
          key: '/exception/403',
          path: '/exception/403',
        },
        {
          name: '404',
          key: '/exception/404',
          path: '/exception/404',
        },
        {
          name: '500',
          key: '/exception/500',
          path: '/exception/500',
        },
      ],
    },
    {
      name: '个人中心',
      key: '/user',
      path: '/user',
      icon: 'IconUser',
      children: [
        {
          name: '用户信息',
          key: '/user/info',
          path: '/user/info',
        },
        {
          name: '用户设置',
          key: '/user/setting',
          path: '/user/setting',
        },
      ],
    },
  ],
};
