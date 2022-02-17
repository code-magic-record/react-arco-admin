import { Carousel } from '@arco-design/web-react';
import React from 'react';

const Banner = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Carousel
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ color: '#fff' }}>我是海报</h1>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
