import { generate, getRgbStr } from '@arco-design/color';
import { v4 as uuidv4 } from 'uuid';

/**
 * 修改主题色
 * @param newColor
 */
export function changePageColor(newColor: string) {
  const newList = generate(newColor, {
    list: true,
  });
  newList.forEach((l: string, index: number) => {
    const rgbStr = getRgbStr(l);
    document.body.style.setProperty(`--arcoblue-${index + 1}`, rgbStr);
  });
  document.body.style.setProperty('--theme_color', newColor)
}

export function uuid() {
  return uuidv4();
}
