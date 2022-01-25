import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DataScan from 'src/app/DataScan';

// import RouteConfig, { IRouterConfig } from '../conifg/routerConfig';
// import Loadable, { LoadingComponentProps } from 'react-loadable';
// import DataScan from '../app/DataScan';
// function Loading(props: LoadingComponentProps) {
//   if (props.isLoading) {
//     if (props.timedOut) {
//       return <div>Loader timed out!</div>;
//     } else if (props.pastDelay) {
//       return <div>Loading...</div>;
//     } else {
//       return null;
//     }
//   } else if (props.error) {
//     return <div>Error! Component failed to load</div>;
//   } else {
//     return null;
//   }
// }

// const getRouter = () => {
//   return RouteConfig.map((item: IRouterConfig) => {
//     return (
//       <Route
//         path={item.path}
//         key={item.path}
//         element={Loadable({
//           loader: item.page,
//           loading: Loading,
//         })}
//       />
//     );
//   });
// };

const MainRoute = () => {
  // return <Routes>{getRouter()}</Routes>;
  return (
    <Routes>
      <Route path="/data" element={DataScan}></Route>
    </Routes>
  );
};
export default MainRoute;
