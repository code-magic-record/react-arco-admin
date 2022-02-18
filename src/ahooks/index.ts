import { useEffect } from 'react';

export const useTheme = () => {
  useEffect(() => {
    const darkThem = localStorage.getItem('arco-theme');
    if (darkThem) {
      document.body.setAttribute('arco-theme', 'dark');
    } else {
      document.body.setAttribute('arco-theme', '');
    }
  }, []);
};
