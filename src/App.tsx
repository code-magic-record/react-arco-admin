import React, { Suspense, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import enUS from '@arco-design/web-react/es/locale/en-US';
import zhCN from '@arco-design/web-react/es/locale/zh-CN';
import { ConfigProvider } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import { useTheme } from 'src/ahooks';
import { Login } from './app/Login';
import { Home } from './app/Home';
import Loading from './components/Loading/Loading';
import './index.less';
import { GlobalContext, ILang } from './utils/GlobalContext';

const App = () => {
  useTheme();
  const [lang, setLang] = useState<ILang>('zh-CN'); // 后期做一个本地持久化
  const contextValue = {
    lang,
    setLang,
  };

  const locale = useMemo(() => {
    switch (lang) {
      case 'zh-CN':
        return zhCN;
      case 'en-US':
        return enUS;
      default:
        return zhCN;
    }
  }, [lang]);

  return (
    <ConfigProvider locale={locale}>
      <GlobalContext.Provider value={contextValue}>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<Home />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </GlobalContext.Provider>
    </ConfigProvider>
  );
};
export default App;
