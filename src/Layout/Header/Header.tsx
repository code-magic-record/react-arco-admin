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
import { useNavigate } from 'react-router-dom';
import { useFullscreen } from 'ahooks';
import { useTheme } from 'src/ahooks';
import React, { useEffect, useState } from 'react';
import PageConfig from 'src/components/PageConifg/PageConfig';
import { useI18n, setLang } from 'use-i18n';
import './index.less';

const classPrefix = 'header';
const Header = () => {
  useTheme();
  const navigate = useNavigate();
  const t = useI18n();
  const [locale, setLocale] = setLang(); // 自动检测浏览器语言
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

  const changeLanguage = (locale: string) => {
    if (locale === 'zh-CN') {
      Message.info('语言切换至 zh-CN');
    } else {
      Message.info('Language switch to en-US');
    }
    setLocale(locale);
  };

  const languageList = (
    <Menu onClickMenuItem={changeLanguage} defaultSelectedKeys={[locale]}>
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
            <Tooltip position="bottom" content={t.header.toggletoLight}>
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
            <Tooltip position="bottom" content={t.header.toggletoDark}>
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
            <Tooltip position="bottom" trigger="hover" content={t.header.enterFullScreenMode}>
              <Button shape="circle" size="default">
                <IconFullscreen />
              </Button>
            </Tooltip>
          ) : (
            <Tooltip position="bottom" trigger="hover" content={t.header.leaveFullScreenMode}>
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
                  <span>{t.header.userSetting}</span>
                </Menu.Item>
                <Menu.Item key="2" onClick={loginOut}>
                  <IconPoweroff />
                  <span>{t.header.logout}</span>
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
