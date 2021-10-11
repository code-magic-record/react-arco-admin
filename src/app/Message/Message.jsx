import React from 'react';
import './index.less';
import Tabs from '../../components/Tabs/Tabs';

const classPrefix = 'bnq-message';
const Message = () => {
  return (
    <div className={`${classPrefix}-page`}>
      <div className={`${classPrefix}-container`}>message</div>
      <Tabs pathname="/message" />
    </div>
  );
};

export default Message;
