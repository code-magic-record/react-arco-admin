import React from 'react';
import './index.less';

const classPrefix = 'workpalce';

const Workplace = () => {
  return (
    <div className={`${classPrefix}`}>
      <div className={`${classPrefix}-left`}>
        <div className={`${classPrefix}-left-top`}></div>
        <div className={`${classPrefix}-left-bottom`}></div>
      </div>
      <div className={`${classPrefix}-right`}></div>
    </div>
  );
};

export default Workplace;
