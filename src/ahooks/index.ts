import { useLocalStorageState } from 'ahooks';
import { useEffect } from 'react';
import { changePageColor } from 'src/utils'

export const useTheme = () => {
  const [arcoThem] = useLocalStorageState('arco-theme');
  useEffect(() => {
    if (arcoThem) {
      document.body.setAttribute('arco-theme', 'dark');
    } else {
      document.body.setAttribute('arco-theme', '');
    }
  }, []);
};

export const useColor = () => {
  const [arcoThemColor, setArcoThemColor] = useLocalStorageState<string>('arco-theme-color');
  useEffect(() => {
    if (!arcoThemColor) {
      setArcoThemColor('#873bf4')
    }

    changePageColor(arcoThemColor || '#873bf4')
  }, [arcoThemColor]);
  return [arcoThemColor, setArcoThemColor];
};
