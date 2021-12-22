import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import enUS from '@arco-design/web-react/es/locale/en-US';
import { ConfigProvider } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import { Login } from './app/Login';
import './index.less';
import { Home } from './app/Home';

const Test = () => {
  return <div>test</div>;
};
const App = () => {
  return (
    <ConfigProvider locale={enUS}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};
export default App;
