import React from 'react';
import { Chart, Interval } from 'bizcharts';
// 数据源
const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
];
const ContentData = () => {
  return (
    <div>
      <Chart height={320} autoFit data={data}>
        <Interval position="genre*sold" />
      </Chart>
    </div>
  );
};

export default ContentData;
