import { useLocalStorageState } from 'ahooks'
import { useEffect } from 'react';

export const useTheme = () => {
  const [arcoThem] = useLocalStorageState('arco-theme')
  useEffect(() => {
    if (arcoThem) {
      document.body.setAttribute('arco-theme', 'dark');
    } else {
      document.body.setAttribute('arco-theme', '');
    }
  }, []);
};
