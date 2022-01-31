import React from 'react';
// const Weclome = React.lazy(() => import('../app/Welcome'));
// const DataScan = React.lazy(() => import('../app/DataScan'));

const Workplace = React.lazy(() => import('../app/Dashboard/WorkPlace/WorkPlace'));
const Monitor = React.lazy(() => import('../app/Dashboard/Monitor/Monitor'));
export interface IRouterConfig {
  path: string;
  text: string;
  page: React.ReactElement;
}

const RouterConfig: IRouterConfig[] = [
  {
    path: '/dashboard/workplace',
    text: '工作台',
    page: <Workplace />,
  },
  {
    path: '/dashboard/monitor',
    text: '实时监控',
    page: <Monitor />,
  },
];

export default RouterConfig;
