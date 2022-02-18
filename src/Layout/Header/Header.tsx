import { Avatar, Button, Dropdown, Layout, Menu, Tooltip } from '@arco-design/web-react';
import {
  IconFullscreen,
  IconFullscreenExit,
  IconMoonFill,
  IconPoweroff,
  IconSettings,
  IconSunFill,
} from '@arco-design/web-react/icon';
import { useNavigate } from 'react-router-dom';
import { useFullscreen } from 'ahooks';
import { useTheme } from 'src/ahooks';
import React, { useEffect, useState } from 'react';
import './index.less';

const classPrefix = 'header';
const Header = () => {
  useTheme();
  const navigate = useNavigate();
  const [them, setThem] = useState('');
  const [fullscreen, { toggleFullscreen }] = useFullscreen(() => document.getElementById('root'));
  const loginOut = () => {
    localStorage.removeItem('userToken');
    navigate('/login');
  };

  useEffect(() => {
    const darkThem = localStorage.getItem('arco-theme');
    if (darkThem) {
      setThem('dark');
    } else {
      setThem('');
    }
  }, []);

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
        <ul className={`${classPrefix}-ul`}>
          <li>
            {them === 'dark' ? (
              <Tooltip position="bottom" content="点击切换为亮色模式">
                <Button
                  shape="circle"
                  size="default"
                  onClick={() => {
                    setThem('');
                    localStorage.removeItem('arco-theme');
                    document.body.setAttribute('arco-theme', '');
                  }}
                >
                  <IconSunFill />
                </Button>
              </Tooltip>
            ) : (
              <Tooltip position="bottom" content="点击进入暗黑模式">
                <Button
                  shape="circle"
                  size="default"
                  onClick={() => {
                    setThem('dark');
                    localStorage.setItem('arco-theme', 'dark');
                    document.body.setAttribute('arco-theme', 'dark');
                  }}
                >
                  <IconMoonFill />
                </Button>
              </Tooltip>
            )}
          </li>
          <li className={`${classPrefix}-fullscreen`} onClick={fullscreenEvent}>
            {!fullscreen ? (
              <Tooltip position="bottom" trigger="hover" content="进入全屏模式">
                <Button shape="circle" size="default">
                  <IconFullscreen />
                </Button>
              </Tooltip>
            ) : (
              <Tooltip position="bottom" trigger="hover" content="退出全屏模式">
                <Button shape="circle" size="default">
                  <IconFullscreenExit />
                </Button>
              </Tooltip>
            )}
          </li>
          <li className={`${classPrefix}-avatar`}>
            <Dropdown
              position="br"
              droplist={
                <Menu>
                  <Menu.Item key="1">
                    <IconSettings />
                    <span>用户设置</span>
                  </Menu.Item>
                  <Menu.Item key="2" onClick={loginOut}>
                    <IconPoweroff />
                    <span>退出登录</span>
                  </Menu.Item>
                </Menu>
              }
            >
              <Avatar autoFixFontSize={false} size={32}>
                <img src="https://avatars.githubusercontent.com/u/42566669?v=4" alt="avatar" />
              </Avatar>
            </Dropdown>
          </li>
        </ul>
      </div>
    </Layout.Header>
  );
};

export default Header;
