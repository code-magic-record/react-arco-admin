import en from './en-us';
import zh from './zh-cn';

export type II18n = {
  'en-US': { [k: string]: string };
  'zh-CN': { [k: string]: string };
};
export const i18n: II18n = {
  'en-US': en,
  'zh-CN': zh,
};

export default i18n;
