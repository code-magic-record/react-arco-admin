import { Button } from '@arco-design/web-react';
import { IconSettings } from '@arco-design/web-react/icon';
import React from 'react';
import PageConfig from '../PageConifg/PageConfig'

const Index = () => {
  return (
    <PageConfig>
      <Button type="primary" style={{ position: 'fixed', top: '30%', right: 0 }}>
        <IconSettings />
      </Button>
    </PageConfig>
  );
};

export default Index;
