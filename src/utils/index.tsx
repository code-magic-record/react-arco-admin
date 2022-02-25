import { generate, getRgbStr } from '@arco-design/color';

export function changePageColor(newColor: string) {
  const newList = generate(newColor, {
    list: true,
  });
  newList.forEach((l: any, index: number) => {
    const rgbStr = getRgbStr(l);
    document.body.style.setProperty(
      `--arcoblue-${index + 1}`,
      rgbStr
    );
  });
}
