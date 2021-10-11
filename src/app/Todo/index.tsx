import React from 'react';
import Tabs from '../../components/Tabs';
import './index.less';

const classPrefix = 'bnq-todo';
const Todo = () => {
  return (
    <div className={`${classPrefix}-page`}>
      <div className={`${classPrefix}-container`}>Todo页面</div>
      <Tabs pathname="/todo" />
    </div>
  );
};

export default Todo;
