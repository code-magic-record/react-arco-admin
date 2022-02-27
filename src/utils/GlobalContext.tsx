import { createContext } from 'react';

export type ILang = 'zh-CN' | 'en-US'
type IContentProps = {
  lang: ILang;
  setLang: (value: ILang) => void;
};
export const GlobalContext = createContext<IContentProps>({
  lang: 'zh-CN',
  setLang: () => {}
});
