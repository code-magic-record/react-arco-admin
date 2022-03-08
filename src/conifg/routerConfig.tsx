import React from 'react';
const Weclome = React.lazy(() => import('../app/Welcome'));

const Workplace = React.lazy(() => import('../app/Dashboard/WorkPlace/WorkPlace'));
const Monitor = React.lazy(() => import('../app/Dashboard/Monitor/Monitor'));
const DataAnalysis = React.lazy(() => import('../app/Visualization/DataAnalysis'));
const MultiDimensionDataAnalysis = React.lazy(() => import('../app/Visualization/MultiDimensionDataAnalysis'));

export interface IRouterConfig {
  path: string;
  text: string;
  page: React.ReactElement;
}

const RouterConfig: IRouterConfig[] = [
  {
    path: '/weclome',
    text: '欢迎页',
    page: <Weclome />,
  },
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
  {
    path: '/visualization/data-analysis',
    text: '分析页',
    page: <DataAnalysis />,
  },
  {
    path: '/visualization/multi-dimension-data-analysis',
    text: '多位数据分析',
    page: <MultiDimensionDataAnalysis />,
  },
];

export default RouterConfig;
