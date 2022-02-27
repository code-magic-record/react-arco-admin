import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Avatar, Button, Dropdown, Menu, Tooltip, Message } from '@arco-design/web-react';
import {
  IconFullscreen,
  IconFullscreenExit,
  IconMoonFill,
  IconPoweroff,
  IconSettings,
  IconSunFill,
  IconLanguage,
} from '@arco-design/web-react/icon';
import { useFullscreen } from 'ahooks';
import { useTheme } from 'src/ahooks';
import PageConfig from 'src/components/PageConifg/PageConfig';
import useLocale from 'src/ahooks/useLocal';
import './index.less';

const classPrefix = 'header';
const Header = () => {
  useTheme();
  const navigate = useNavigate();
  const { lang, i18n, setLang } = useLocale();
  const [them, setThem] = useState('');
  const [fullscreen, { toggleFullscreen }] = useFullscreen(() => document.documentElement);
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

  const changeLanguage = (lang: string) => {
    if (lang === 'zh-CN') {
      Message.info('语言切换至 zh-CN');
      setLang('zh-CN');
    } else {
      Message.info('Language switch to en-US');
      setLang && setLang('en-US');
    }
  };

  const languageList = (
    <Menu onClickMenuItem={changeLanguage} defaultSelectedKeys={[lang]}>
      <Menu.Item key="zh-CN">中文</Menu.Item>
      <Menu.Item key="en">English</Menu.Item>
    </Menu>
  );

  return (
    <div className={classPrefix}>
      <div className={`${classPrefix}-logo`} onClick={goHome}>
        <h1 style={{ margin: 0, marginLeft: '10px' }}>React Arco Admin</h1>
      </div>
      <ul className={`${classPrefix}-ul`}>
        <li>
          <Dropdown droplist={languageList} position="bl">
            <Button shape="circle" size="default">
              <IconLanguage />
            </Button>
          </Dropdown>
        </li>
        <li>
          {them === 'dark' ? (
            <Tooltip position="bottom" content={['header.toggletoLight']}>
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
            <Tooltip position="bottom" content={i18n[lang]['header.toggletoDark']}>
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
        <li>
          <PageConfig>
            <Button shape="circle" size="default" onClick={() => {}}>
              <IconSettings />
            </Button>
          </PageConfig>
        </li>
        <li className={`${classPrefix}-fullscreen`} onClick={fullscreenEvent}>
          {!fullscreen ? (
            <Tooltip position="bottom" trigger="hover" content={i18n[lang]['header.enterFullScreenMode']}>
              <Button shape="circle" size="default">
                <IconFullscreen />
              </Button>
            </Tooltip>
          ) : (
            <Tooltip position="bottom" trigger="hover" content={i18n[lang]['header.leaveFullScreenMode']}>
              <Button shape="circle" size="default">
                <IconFullscreenExit />
              </Button>
            </Tooltip>
          )}
        </li>
        <li className={`${classPrefix}-avatar`}>
          <Dropdown
            trigger="click"
            droplist={
              <Menu theme="light">
                <Menu.Item key="1">
                  <IconSettings />
                  <span>{i18n[lang]['header.userSetting']}</span>
                </Menu.Item>
                <Menu.Item key="2" onClick={loginOut}>
                  <IconPoweroff />
                  <span>{i18n[lang]['header.logout']}</span>
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
  );
};

export default Header;
