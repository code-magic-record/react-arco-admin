import { useContext } from 'react';
import i18n from 'src/locales'
import { GlobalContext } from 'src/utils/GlobalContext';

function useLocale() {
  const { lang, setLang } = useContext(GlobalContext);
  return {
    lang,
    i18n,
    setLang,
  };
}

export default useLocale;
