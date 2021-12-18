import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LayoutMain from '../../Layout/Layout';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const flag = false;
    if (flag) {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <LayoutMain />
    </div>
  );
};
