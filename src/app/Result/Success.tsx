import React from 'react'
import { Result, Button } from '@arco-design/web-react'
import useI18n from 'src/ahooks/useI18n'
import locale from './locales'

const Success = () => {
  const { lang, i18n } = useI18n(locale)
  return (
    <div>
      <Result
        status="success"
        title={i18n[lang]['menu.result.success.title']}
        subTitle={i18n[lang]['menu.result.success.subTitle']}
        extra={[
          <Button key="again" type="secondary" style={{ margin: '0 16px' }}>
            {i18n[lang]['menu.result.success.again']}
          </Button>,
          <Button key="back" type="primary">
            {i18n[lang]['menu.result.success.back']}
          </Button>,
        ]}
      />
    </div>
  )
}

export default Success
