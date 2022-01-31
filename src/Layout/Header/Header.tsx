import { Avatar, Layout } from '@arco-design/web-react';
import React from 'react';
import './index.less';

const classPrefix = 'header';

const Header = () => {
  return (
    <Layout.Header>
      <div className={classPrefix}>
        <div className={`${classPrefix}-avatar`}>
          <Avatar
            autoFixFontSize={false}
          >
            <img src="https://avatars.githubusercontent.com/u/42566669?v=4" alt="" />
          </Avatar>
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;
