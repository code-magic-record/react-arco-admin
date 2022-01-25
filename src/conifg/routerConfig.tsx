import React from 'react';
const Weclome = React.lazy(() => import('../app/Welcome'));
const DataScan = React.lazy(() => import('../app/DataScan'));

export interface IRouterConfig {
  path: string;
  text: string;
  page: React.ReactElement;
}

const RouterConfig: IRouterConfig[] = [
  {
    path: '/weclome',
    text: '欢迎',
    page: <Weclome />,
  },
  {
    path: '/data',
    text: '统计总览',
    page: <DataScan />,
  },
];

export default RouterConfig;
