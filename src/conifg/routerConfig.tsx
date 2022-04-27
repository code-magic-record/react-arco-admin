import React from 'react';
import Result403 from 'src/app/Exception/403';
import Result404 from 'src/app/Exception/404';
import Result500 from 'src/app/Exception/500';

const Weclome = React.lazy(() => import('../app/Welcome'));
const Workplace = React.lazy(() => import('../app/Dashboard/WorkPlace/WorkPlace'));
const Monitor = React.lazy(() => import('../app/Dashboard/Monitor/Monitor'));
const DataAnalysis = React.lazy(() => import('../app/Visualization/DataAnalysis'));
const MultiDimensionDataAnalysis = React.lazy(() => import('../app/Visualization/MultiDimensionDataAnalysis'));
const Setting = React.lazy(() => import('../app/User/setting'));

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
  {
    path: '/exception/403',
    text: '403',
    page: <Result403 />,
  },
  {
    path: '/exception/404',
    text: '404',
    page: <Result404 />,
  },
  {
    path: '/exception/500',
    text: '500',
    page: <Result500 />,
  },
  {
    path: '/user/setting',
    text: '用户设置',
    page: <Setting />,
  },
];

export default RouterConfig;
