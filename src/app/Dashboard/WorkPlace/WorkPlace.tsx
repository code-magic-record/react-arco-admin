import { Card, Grid } from '@arco-design/web-react';
import React from 'react';
import styles from './index.modules.less';
import ShortCuts from './modules/slide/Shortcuts';

// const classPrefix = 'workpalce';
const { Row, Col } = Grid;

const Workplace = () => {
  return (
    <div className={styles.workplace}>
      <Row style={{ marginBottom: 20, height: '100%' }}>
        {/* 左侧布局 */}
        <Col flex="auto" style={{ height: '100%' }}>
          <Card bordered={false} style={{ width: '100%' }}>
            Card content
          </Card>
          <Row gutter={24} style={{ height: '100%' }}>
            <Col span={8} push={16}>
              <Card bordered={false} style={{ width: '100%' }}>
                Card content
              </Card>
            </Col>
            <Col span={16} pull={8}>
              <Card bordered={false} style={{ width: '100%' }}>
                Card content
              </Card>
            </Col>
          </Row>
        </Col>
        {/* 右侧布局 */}
        <Col flex="350px" style={{ height: '100%', marginLeft: '20px' }}>
          <ShortCuts />
        </Col>
      </Row>
    </div>
  );
};

export default Workplace;
