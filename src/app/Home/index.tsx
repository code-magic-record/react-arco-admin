import React from 'react';
import Tabs from '../../components/Tabs';
import './index.less';

const classPrefix = 'bnq-home';
const Home: React.FC = () => {
  return (
    <div className={`${classPrefix}-page`}>
      <div className={`${classPrefix}-container`}>首页</div>
      <Tabs pathname="/home" />
    </div>
  );
};

export default Home;
