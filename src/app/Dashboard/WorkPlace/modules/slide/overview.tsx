import { Card, Divider, Typography } from '@arco-design/web-react';
import React from 'react';

const Overview = () => {
  return (
    <Card bordered={false}>
      <Typography.Title heading={5}>欢迎回来，龙风</Typography.Title>
      <Divider />
    </Card>
  );
};

export default Overview;
