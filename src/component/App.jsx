import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd-mobile';
import ListComp from './List.jsx';
import './index.less';

const App = (props) => {
  const { test } = props;
  useEffect(() => {
    //
  }, []);
  return (
    <div className="demo">
      <div>xxx</div>
      <Button>测试</Button>
      <div>{test}</div>
      <ListComp />
    </div>
  );
};
App.propTypes = {
  test: PropTypes.string,
};

App.defaultProps = {
  test: '您好喔',
};

export default App;
