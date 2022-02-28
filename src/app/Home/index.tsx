import { useLocalStorageState } from 'ahooks';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LayoutMain from '../../Layout/Layout';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [userToken] = useLocalStorageState('userToken');
  useEffect(() => {
    if (!userToken) {
      navigate('/login');
    }
  }, []);

  return <LayoutMain />;
};
