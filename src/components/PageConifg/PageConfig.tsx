import React, { useEffect, useState } from 'react';
import { Drawer, Trigger, Select } from '@arco-design/web-react';
import { SketchPicker } from 'react-color';
import { changePageColor } from 'src/utils';
import { useColor } from 'src/ahooks';
import { IconLanguage } from '@arco-design/web-react/icon';
import useI18n from 'src/ahooks/useI18n';
import { ILang } from 'src/utils/GlobalContext';

type IProps = {
  children: React.ReactNode;
};

const { Option } = Select;

const PageConfig: React.FC<IProps> = (props) => {
  const { children } = props;
  const [color, setColor] = useState<string>('');
  const [visible, setVisible] = useState(false);
  const [language, setLanguage] = useState<ILang>('zh-CN');
  const [themeColor, setThemeColor] = useColor();
  const { lang, setLang } = useI18n();
  useEffect(() => {
    setColor(themeColor);
    setLanguage(lang);
  }, [visible]);

  const onOk = () => {
    setVisible(false);
    setThemeColor(color);
    changePageColor(color);
    setLang(language);
  };

  return (
    <div>
      <Drawer
        okText="确认"
        cancelText="取消"
        width={400}
        title={<span>页面基本配置</span>}
        visible={visible}
        onOk={onOk}
        onCancel={() => {
          setVisible(false);
        }}
      >
        <Trigger
          popup={() => (
            <SketchPicker
              color={color}
              onChange={(value) => {
                setColor(value.hex);
              }}
            />
          )}
          mouseEnterDelay={400}
          mouseLeaveDelay={400}
          position="bottom"
        >
          <div style={{ width: '100%', height: '40px', display: 'flex', alignItems: 'center' }}>
            <h4>主题色</h4>
            <div
              style={{ backgroundColor: color, flex: 1, height: '40px', marginLeft: '10px', borderRadius: '5px' }}
            ></div>
            <div style={{ width: '40px', margin: '0 10px' }}>{color}</div>
          </div>
        </Trigger>

        <div className="flex align-items-center" style={{ marginTop: '16px' }}>
          <div>
            <IconLanguage />
            <span>Languages</span>
          </div>
          <Select
            value={language}
            onChange={(v) => setLanguage(v)}
            style={{ width: '140px', marginLeft: '10px' }}
            className="margin-left-10"
          >
            <Option value="zh-CN">中文</Option>
            <Option value="en-US">English</Option>
          </Select>
        </div>
      </Drawer>
      <div onClick={() => setVisible(true)}>{children}</div>
    </div>
  );
};

export default PageConfig;
