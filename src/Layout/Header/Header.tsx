import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Button, Dropdown, Menu, Tooltip, Message, Avatar } from '@arco-design/web-react';
import {
  IconFullscreen,
  IconFullscreenExit,
  IconMoonFill,
  IconPoweroff,
  IconSettings,
  IconSunFill,
  IconLanguage,
} from '@arco-design/web-react/icon';
import { useFullscreen, useLocalStorageState } from 'ahooks';
import { useTheme } from 'src/ahooks';
import PageConfig from 'src/components/PageConifg/PageConfig';
import useI18n from 'src/ahooks/useI18n';
import styles from './index.module.less';
import githubSvg from 'src/assets/images/github.svg'

const themeStyle = {
  background: 'var(--theme-color)',
  color: '#fff',
};
const Header = () => {
  useTheme();
  const navigate = useNavigate();
  const { lang, i18n, setLang } = useI18n();
  const [, setLanguage] = useLocalStorageState('language');
  const [arcoThem, setArcoThem] = useLocalStorageState('arco-theme');
  const [them, setThem] = useState('');
  const [fullscreen, { toggleFullscreen }] = useFullscreen(() => document.documentElement);
  const loginOut = () => {
    localStorage.removeItem('userToken');
    navigate('/login');
  };

  useEffect(() => {
    if (arcoThem) {
      setThem('dark');
    } else {
      setThem('');
    }
  }, []);

  const goHome = () => {
    navigate('/weclome');
  };

  const fullscreenEvent = () => {
    toggleFullscreen();
  };

  const changeLanguage = (lang: string) => {
    if (lang === 'zh-CN') {
      Message.info('语言切换至 zh-CN');
      setLang('zh-CN');
      setLanguage('zh-CN');
    } else {
      Message.info('Language switch to en-US');
      setLang('en-US');
      setLanguage('en-US');
    }
  };

  const languageList = (
    <Menu onClickMenuItem={changeLanguage} defaultSelectedKeys={[lang]}>
      <Menu.Item style={lang === 'zh-CN' ? themeStyle : {}} key="zh-CN">
        中文
      </Menu.Item>
      <Menu.Item style={lang === 'en-US' ? themeStyle : {}} key="en-US">
        English
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.header}>
      <div className={styles.logo} onClick={goHome}>
        <h1 style={{ margin: 0, marginLeft: '10px' }}>React Arco Admin</h1>
      </div>
      <ul className={styles.ul}>
        <li>
          <Dropdown trigger="click" droplist={languageList} position="bl">
            <Button shape="circle" size="default">
              <IconLanguage />
            </Button>
          </Dropdown>
        </li>
        <li>
          {them === 'dark' ? (
            <Tooltip position="bottom" content={i18n[lang]['header.toggletoLight']}>
              <Button
                shape="circle"
                size="default"
                onClick={() => {
                  setThem('');
                  setArcoThem(undefined);
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
                  setArcoThem('dark');
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
        <li className={styles.fullscreen} onClick={fullscreenEvent}>
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
        <li>
          <Button shape="circle" size="default" onClick={() => {
            window.open('https://github.com/react-arco-admin', '_blank');
          }}>
            <Avatar size={24}>
              <img src={(githubSvg.toString())}  />
            </Avatar>
          </Button>
        </li>
        <li className={styles.avatar}>
          <Dropdown
            trigger="click"
            droplist={
              <Menu>
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
