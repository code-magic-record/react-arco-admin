import React, { useEffect } from 'react';
import './index.less';
import Banner from './modules/Banner';

const classPrefix = 'login';

export const Login: React.FC = () => {
  useEffect(() => {
    // 判断是否登陆
    // const useToken = localStorage.getItem('')
  }, []);

  return (
    <div className={`${classPrefix}`}>
      <div className={`${classPrefix}-logo`}>
        <h1 style={{ margin: 0, marginLeft: '10px' }}>React Arco Admin</h1>
      </div>
      <div className={`${classPrefix}-left`}>
        <Banner />
      </div>
      <div className={`${classPrefix}-right`}></div>
    </div>
  );
};
