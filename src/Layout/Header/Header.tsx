import { Avatar, Dropdown, Layout, Menu } from '@arco-design/web-react';
import { IconFullscreen, IconFullscreenExit, IconPoweroff, IconSettings } from '@arco-design/web-react/icon';
import { useNavigate } from 'react-router-dom';
import { useFullscreen } from 'ahooks';

import React from 'react';
import './index.less';

const classPrefix = 'header';
const Header = () => {
  const navigate = useNavigate();
  const [fullscreen, { toggleFullscreen }] = useFullscreen(() => document.getElementById('root'));
  const loginOut = () => {
    navigate('/login');
  };

  const goHome = () => {
    navigate('/');
  };

  const fullscreenEvent = () => {
    toggleFullscreen();
  };

  return (
    <Layout.Header>
      <div className={classPrefix}>
        <div className={`${classPrefix}-logo`} onClick={goHome}>
          <h1 style={{ margin: 0, marginLeft: '10px' }}>React Arco Admin</h1>
        </div>
        {/* 全屏 */}
        <div className={`${classPrefix}-fullscreen`} onClick={fullscreenEvent}>
          {!fullscreen ? (
            <IconFullscreen style={{ fontSize: '28px' }} />
          ) : (
            <IconFullscreenExit style={{ fontSize: '28px' }} />
          )}
        </div>
        <div className={`${classPrefix}-avatar`}>
          <Dropdown
            position="br"
            droplist={
              <Menu>
                <Menu.Item key="1">
                  <IconSettings />
                  <span className="ml-[5px]">用户设置</span>
                </Menu.Item>
                <Menu.Item key="2" onClick={loginOut}>
                  <IconPoweroff />
                  <span className="ml-[5px]">退出登录</span>
                </Menu.Item>
              </Menu>
            }
          >
            <Avatar autoFixFontSize={false}>
              <img src="https://avatars.githubusercontent.com/u/42566669?v=4" alt="avatar" />
            </Avatar>
          </Dropdown>
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;
