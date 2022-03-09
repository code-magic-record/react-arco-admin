import { Button, Result } from '@arco-design/web-react';
import React from 'react';
import useI18n from 'src/ahooks/useI18n';
import locale from './locales';

const Result404 = () => {
  const { lang, i18n } = useI18n(locale);

  return (
    <div>
      <Result
        status="404"
        subTitle={i18n[lang]['exception.result.404.description']}
        extra={[
          <Button key="again">{i18n[lang]['exception.result.404.retry']}</Button>,
          <Button key="back" type="primary" style={{ marginLeft: '16px' }}>
            {i18n[lang]['exception.result.404.back']}
          </Button>,
        ]}
      />
    </div>
  );
};
export default Result404;
