export interface IRouterConfig {
  path: string;
  text: string;
  page: () => any;
}

const RouterConfig: IRouterConfig[] = [
  {
    path: '/dataScan',
    text: '欢迎',
    page: () => {
      return import('../app/Welcome');
    },
  },
  {
    path: '/newAnalysis/analysis',
    text: '统计总览',
    page: () => {
      return import('../app/DataScan');
    },
  },
];

export default RouterConfig;
