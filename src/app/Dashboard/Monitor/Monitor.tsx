import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary'

const Monitor = () => {
  const [msg, setMsg] = useState<any>('这是一个正常的组件')
  return (
    <div>
      <ErrorBoundary fallback={<div>组件内部错误</div>}>
        <div onClick={() => {
          setMsg({a: 1})
        }}>{msg}</div>
      </ErrorBoundary>
      <div>其它页面信息xxss11</div>
    </div>
  );
};

export default Monitor;
