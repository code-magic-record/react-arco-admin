import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RouteConfig, { IRouterConfig } from '../conifg/routerConfig';

const getRouter = () => {
  return RouteConfig.map((item: IRouterConfig) => {
    return <Route path={item.path} key={item.path} element={item.page} />;
  });
};

const Back = () => {
  return (
    <div>
      <h1>页面走丢了</h1>
    </div>
  );
};
const MainRoute = () => {
  return (
    <Routes>
      <Route path="*" element={<Back />} />
      {getRouter()}
    </Routes>
  );
};
export default MainRoute;
