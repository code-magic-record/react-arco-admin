import { Grid } from '@arco-design/web-react';
import React from 'react';
import styles from './index.module.less';
import Banner from './modules/slide/banner';
import Overview from './modules/slide/overview';
import ShortCuts from './modules/slide/Shortcuts';

const { Row, Col } = Grid;

const Workplace = () => {
  return (
    <div className={styles.workplace}>
      <Row style={{ marginBottom: 20, height: '100%' }}>
        <Col flex="auto">
          <Overview />
        </Col>
        <Col flex="280px" style={{ height: '100%', marginLeft: '20px' }}>
          <ShortCuts />
          <Banner />
        </Col>
      </Row>
    </div>
  );
};

export default Workplace;
