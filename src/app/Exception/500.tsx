import { Button, Result } from '@arco-design/web-react';
import React from 'react';
import useI18n from 'src/ahooks/useI18n';
import locale from './locales';

const Result500 = () => {
  const { lang, i18n } = useI18n(locale);
  return (
    <div>
      <Result
        status="500"
        subTitle={i18n[lang]['exception.result.500.description']}
        extra={[
          <Button key="again">{i18n[lang]['exception.result.500.retry']}</Button>,
          <Button key="back" type="primary" style={{ marginLeft: '16px' }}>
            {i18n[lang]['exception.result.500.back']}
          </Button>,
        ]}
      />
    </div>
  );
};
export default Result500;
