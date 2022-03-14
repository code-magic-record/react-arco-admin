import React from 'react';
import { animated, useSpring } from 'react-spring';

function ChainExample() {
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: '#ffaaee' },
      { opacity: 0, color: 'rgb(14,26,19)' },
    ],
    from: { opacity: 0, color: 'red' },
  });
  // ...
  return (
    <animated.div style={styles}>
      <h1>Welcome</h1>
    </animated.div>
  );
}

const Welcome = () => {
  return (
    <div>
      <ChainExample />
    </div>
  );
};

export default Welcome;
