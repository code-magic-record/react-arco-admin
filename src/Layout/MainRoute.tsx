import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from 'src/components/Loading/Loading';
import RouteConfig, { IRouterConfig } from '../conifg/routerConfig';
import nprogress from 'nprogress';
import '@/assets/css/nprogress.less';
import Welcome from 'src/app/Welcome'

const LazyLoad = () => {
  useEffect(() => {
    nprogress.configure({ showSpinner: false });
    nprogress.start();
    return () => {
      nprogress.done();
    };
  }, []);

  return <Loading />;
};

const getRouter = () => {
  return RouteConfig.map((item: IRouterConfig) => {
    return <Route key={item.path} path={item.path} element={item.page} />;
  });
};

const MainRoute = () => {
  return (
    <Suspense fallback={<LazyLoad />}>
      <Routes>
        <Route path="*" element={<Welcome />} />
        {getRouter()}
      </Routes>
    </Suspense>
  );
};
export default MainRoute;
