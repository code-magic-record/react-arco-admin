import React, { useState } from 'react';
import { Drawer, Trigger } from '@arco-design/web-react';
import { SketchPicker } from 'react-color';
import { changePageColor } from 'src/utils'
import { useColor } from 'src/ahooks'

type IProps = {
  children: React.ReactNode;
};

const PageConfig: React.FC<IProps> = (props) => {
  const { children } = props;
  const [visible, setVisible] = useState(false);
  const [themeColor, setThemeColor] = useColor();
  return (
    <div>
      <Drawer
        okText="确认"
        cancelText="取消"
        width={400}
        title={<span>页面基本配置</span>}
        visible={visible}
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
      >
        <Trigger
          popup={() => (
            <SketchPicker
              color={themeColor}
              onChange={(value) => {
                setThemeColor(value.hex);
                changePageColor(value.hex)
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
              style={{ backgroundColor: themeColor, flex: 1, height: '40px', marginLeft: '10px', borderRadius: '5px' }}
            ></div>
            <div style={{ width: '40px', margin: '0 10px' }}>{themeColor}</div>
          </div>
        </Trigger>
      </Drawer>
      <div onClick={() => setVisible(true)}>{children}</div>
    </div>
  );
};

export default PageConfig;
