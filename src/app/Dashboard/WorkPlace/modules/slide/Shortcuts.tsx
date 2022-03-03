import { Card, Divider, Link, Typography } from '@arco-design/web-react';
import { IconFile, IconFire, IconMobile, IconSettings, IconStorage } from '@arco-design/web-react/icon';
import React from 'react';
import './style/shortcuts.less';

const classPrefix = 'shortcuts';
const ShortCuts = () => {
  const shortcutList = [
    {
      title: '内容管理',
      key: 'Content Management',
      icon: <IconFile />,
    },
    {
      title: '内容数据',
      key: 'Content Statistic',
      icon: <IconStorage />,
    },
    {
      title: '高级管理',
      key: 'Advanced Management',
      icon: <IconSettings />,
    },
    {
      title: '线上推广',
      key: 'Online Promotion',
      icon: <IconMobile />,
    },
    {
      title: '内容投放',
      key: 'Marketing',
      icon: <IconFire />,
    },
  ];

  const recentShortcuts = [
    {
      title: '内容数据',
      key: 'Content Statistic',
      icon: <IconStorage />,
    },
    {
      title: '内容管理',
      key: 'Content Management',
      icon: <IconFile />,
    },
    {
      title: '高级管理',
      key: 'Advanced Management',
      icon: <IconSettings />,
    },
  ];

  return (
    <Card bordered={false}>
      <div className={`${classPrefix}-header`}>
        <Typography.Title heading={6}>快捷入口</Typography.Title>
        <Link style={{ display: 'flex', alignItems: 'center' }}>查看</Link>
      </div>

      <div className={`${classPrefix}-list`}>
        {shortcutList.map((item) => (
          <div key={item.key} className={`${classPrefix}-item`}>
            <div className={`${classPrefix}-icon`}>{item.icon}</div>
            <div>{item.title}</div>
          </div>
        ))}
      </div>
      <Divider />
      <div className={`${classPrefix}-header`}>
        <Typography.Title heading={6}>最近访问</Typography.Title>
      </div>
      <div className={`${classPrefix}-list`}>
        {recentShortcuts.map((item) => (
          <div key={item.key} className={`${classPrefix}-item`}>
            <div className={`${classPrefix}-icon`}>{item.icon}</div>
            <div>{item.title}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ShortCuts;
