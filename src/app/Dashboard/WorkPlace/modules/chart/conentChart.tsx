import React from 'react';
import { DonutChart } from 'bizcharts';
import { haderList } from '../config';

const ConentChart = () => {
  return (
    <div>
      <DonutChart
        data={haderList}
        autoFit
        height={260}
        radius={0.8}
        padding="auto"
        angleField="id"
        colorField="title"
        pieStyle={{ stroke: 'white', lineWidth: 1 }}
      />
    </div>
  );
};

export default ConentChart;
