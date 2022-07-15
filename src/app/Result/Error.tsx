import React from 'react'
import { Result, Button } from '@arco-design/web-react'
import useI18n from 'src/ahooks/useI18n'
import locale from './locales'

const Error = () => {
  const { lang, i18n } = useI18n(locale)
  return (
    <div>
      <Result
        status="error"
        title={i18n[lang]['menu.result.error.title']}
        subTitle={i18n[lang]['menu.result.error.subTitle']}
        extra={[
          <Button key="again" style={{ margin: '0 16px' }}>
            {i18n[lang]['menu.result.error.again']}
          </Button>,
          <Button key="back" type="primary">
            {i18n[lang]['menu.result.error.back']}
          </Button>,
        ]}
      />
    </div>
  )
}

export default Error
