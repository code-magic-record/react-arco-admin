import { Button, Result } from '@arco-design/web-react';
import React from 'react';
import useI18n from 'src/ahooks/useI18n';
import locale from './locales';

const Result403 = () => {
  const { i18n, lang } = useI18n(locale);
  return (
    <div>
      <Result
        status="403"
        subTitle={i18n[lang]['exception.result.403.description']}
        extra={
          <Button key="back" type="primary">
            {i18n[lang]['exception.result.403.back']}
          </Button>
        }
      />
    </div>
  );
};
export default Result403;
