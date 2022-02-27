import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LayoutMain from '../../Layout/Layout';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    if (!userToken) {
      navigate('/login');
    }
  }, []);

  return <LayoutMain />;
};
