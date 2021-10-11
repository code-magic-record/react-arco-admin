import React from 'react';
import './index.less';
import Tabs from '../../components/Tabs';

const classPrefix = 'bnq-personCenter';
const PersonCenter: React.FC = () => {
  return (
    <div className={`${classPrefix}-page`}>
      <div className={`${classPrefix}-container`}>个人中心</div>
      <Tabs pathname="/personCenter" />
    </div>
  );
};

export default PersonCenter;
