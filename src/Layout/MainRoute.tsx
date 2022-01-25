import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RouteConfig, { IRouterConfig } from '../conifg/routerConfig';

const getRouter = () => {
  return RouteConfig.map((item: IRouterConfig) => {
    return <Route path={item.path} key={item.path} element={item.page} />;
  });
};

const MainRoute = () => {
  return <Routes>{getRouter()}</Routes>;
};
export default MainRoute;
