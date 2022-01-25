import { Spin, SpinProps } from '@arco-design/web-react';
import React from 'react';

const Loading: React.FC<SpinProps> = (props) => {
  return (
    <div>
      <Spin dot {...props}></Spin>
    </div>
  );
};

export default Loading;
