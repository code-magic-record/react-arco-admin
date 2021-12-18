import React from 'react';
import enUS from '@arco-design/web-react/es/locale/en-US';
import { ConfigProvider } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import LayoutMain from './Layout/Layout';
import './index.less';

const App = () => {
  return (
    <ConfigProvider locale={enUS}>
      <LayoutMain />
    </ConfigProvider>
  );
};
export default App;
