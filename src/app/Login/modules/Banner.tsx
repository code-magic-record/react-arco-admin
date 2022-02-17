import { Carousel } from '@arco-design/web-react';
import React from 'react';

const Banner = () => {
  const list = ['人生在勤，不索何获.', '三十以前，不要怕；三十以后，不要悔。', '真理是永远蒙蔽不了的。'];
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Carousel
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {list.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h3 style={{ color: '#fff' }}>{item}</h3>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
