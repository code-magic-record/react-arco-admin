import React from 'react';
import Tabs from '../../components/Tabs';
import './index.less';

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
