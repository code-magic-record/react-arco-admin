import { Card, Grid, Link, Radio } from '@arco-design/web-react';
import React, { useState } from 'react';
import ConentChart from '../chart/conentChart';
import { haderList } from '../config';
import styles from './style/content.module.less';

const { Row, Col } = Grid;

const Index = () => {
  const [position, setPosition] = useState(1);
  return (
    <Row gutter={24} className={styles.content}>
      <Col span={12}>
        <Card headerStyle={{ border: 'none' }} bordered={false} title="线上热门内容" extra={<Link>查看更多</Link>}>
          <Radio.Group
            type="button"
            name="position"
            value={position}
            onChange={setPosition}
            style={{ marginBottom: 40 }}
          >
            {haderList.map((item) => (
              <Radio value={item.id} key={item.id}>
                {item.title}
              </Radio>
            ))}
          </Radio.Group>
        </Card>
      </Col>
      <Col span={12}>
        <Card headerStyle={{ border: 'none' }} bordered={false} title="内容类别占比">
          <ConentChart />
        </Card>
      </Col>
    </Row>
  );
};

export default Index;
