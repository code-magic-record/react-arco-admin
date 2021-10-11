import React from 'react';
import { TabBar } from 'antd-mobile';
import { useHistory } from 'react-router-dom';
import { AppOutline, MessageOutline, UnorderedListOutline, UserOutline } from 'antd-mobile-icons';

const classPrefix = 'bnq-tabs';
const Tabs = (props) => {
  const { pathname } = props;
  const history = useHistory();

  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/todo',
      title: '我的待办',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/message',
      title: '我的消息',
      icon: <MessageOutline />,
    },
    {
      key: '/personCenter',
      title: '个人中心',
      icon: <UserOutline />,
    },
  ];

  const onChange = (pathname) => {
    history.push({
      pathname,
    });
  };
  return (
    <div className={`${classPrefix}-footer`}>
      <TabBar onChange={onChange} activeKey={pathname}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
};

export default Tabs;
