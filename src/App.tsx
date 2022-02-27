import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import enUS from '@arco-design/web-react/es/locale/en-US';
import { ConfigProvider } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import { useTheme } from 'src/ahooks';
import { Login } from './app/Login';
import { Home } from './app/Home';
import Loading from './components/Loading/Loading';
import { TransProvider } from 'use-i18n';
import i18n from './locales';
import './index.less';

const App = () => {
  useTheme();
  return (
    <TransProvider i18n={i18n}>
      <ConfigProvider locale={enUS}>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<Home />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ConfigProvider>
    </TransProvider>
  );
};
export default App;
