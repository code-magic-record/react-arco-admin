import { useContext } from 'react';
import i18n, { II18n } from 'src/locales'
import { GlobalContext } from 'src/utils/GlobalContext';

function useI18n(locale: II18n = i18n) {
  const { lang, setLang } = useContext(GlobalContext);
  return {
    lang,
    i18n: locale,
    setLang,
  };
}

export default useI18n;
