import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Result404 from 'src/app/Result/404';
import Loading from 'src/components/Loading/Loading';
import RouteConfig, { IRouterConfig } from '../conifg/routerConfig';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

const LazyLoad = () => {
  useEffect(() => {
    nprogress.start();
    return () => {
      nprogress.done();
    };
  }, []);

  return <Loading />;
};

const getRouter = () => {
  return RouteConfig.map((item: IRouterConfig) => {
    console.log(item, 'xxx')
    return <Route key={item.path} path={item.path} element={item.page} />;
  });
};

const MainRoute = () => {
  return (
    <Suspense fallback={<LazyLoad />}>
      <Routes>
        <Route path="*" element={<Result404 />} />
        {getRouter()}
      </Routes>
    </Suspense>
  );
};
export default MainRoute;
