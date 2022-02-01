import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Result404 from 'src/app/Result/404';
import Loading from 'src/components/Loading/Loading';
import RouteConfig, { IRouterConfig } from '../conifg/routerConfig';

const getRouter = () => {
  return RouteConfig.map((item: IRouterConfig) => {
    return <Route key={item.path} path={item.path} element={item.page} />;
  });
};

const MainRoute = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="*" element={<Result404 />} />
        {getRouter()}
      </Routes>
    </Suspense>
  );
};
export default MainRoute;
