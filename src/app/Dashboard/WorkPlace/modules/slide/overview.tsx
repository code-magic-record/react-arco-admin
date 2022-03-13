import React, { ReactNode } from 'react';
import { Card, Divider, Skeleton, Typography, Grid, Link } from '@arco-design/web-react';
import styles from './style/overview.module.less';
import { IconCalendar, IconCaretUp } from '@arco-design/web-react/icon';
import ContentData from './ContentData';

type StatisticItemType = {
  icon?: ReactNode;
  title?: ReactNode;
  count?: ReactNode;
  loading?: boolean;
  unit?: ReactNode;
};

const { Row, Col } = Grid;

function StatisticItem(props: StatisticItemType) {
  const { icon, title, count, loading, unit } = props;
  return (
    <div className={styles.item}>
      <div className={styles.icon}>{icon}</div>
      <div>
        <Skeleton loading={loading} text={{ rows: 2, width: 60 }} animation>
          <div className={styles.title}>{title}</div>
          <div className={styles.count}>
            {count}
            <span className={styles.unit}>{unit}</span>
          </div>
        </Skeleton>
      </div>
    </div>
  );
}

const Overview = () => {
  return (
    <Card bordered={false}>
      <Typography.Title heading={5}>欢迎回来，龙风</Typography.Title>
      <Divider />
      <Row>
        <Col flex={1}>
          <StatisticItem icon={<IconCalendar />} title={'线上总数据'} count={1} unit={'个'} loading={false} />
        </Col>
        <Divider type="vertical" className={styles.divider} />
        <Col flex={1}>
          <StatisticItem icon={<IconCaretUp />} title={'投放中的内容'} count={1} unit={'个'} loading={false} />
        </Col>
        <Divider type="vertical" className={styles.divider} />
        <Col flex={1}>
          <StatisticItem icon={<IconCalendar />} title={'投放中的内容'} count={1} unit={'个'} loading={false} />
        </Col>
        <Divider type="vertical" className={styles.divider} />
        <Col flex={1}>
          <StatisticItem icon={<IconCaretUp />} title={'投放中的内容'} count={1} unit={'个'} loading={false} />
        </Col>
        <Divider />
      </Row>
      <div>
        <div className={styles.ctw}>
          <Typography.Paragraph className={styles['chart-title']}>内容数据</Typography.Paragraph>
          <Link>查看更多</Link>
        </div>
        <ContentData />
      </div>
    </Card>
  );
};

export default Overview;
