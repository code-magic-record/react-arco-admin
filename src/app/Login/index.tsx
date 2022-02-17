import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox, Link } from '@arco-design/web-react';

import './index.less';
import Banner from './modules/Banner';
import { IconLock, IconUser } from '@arco-design/web-react/icon';

const classPrefix = 'login';
const FormItem = Form.Item;

export const Login: React.FC = () => {
  const [form] = Form.useForm();
  useEffect(() => {
    // 判断是否登陆
    // const useToken = localStorage.getItem('')
  }, []);

  return (
    <div className={`${classPrefix}`}>
      <div className={`${classPrefix}-logo`}>
        <h1 style={{ margin: 0, marginLeft: '10px' }}>React Arco Admin</h1>
      </div>
      <div className={`${classPrefix}-left`}>
        <Banner />
      </div>
      <div className={`${classPrefix}-right`}>
        <div>
          <div className={`${classPrefix}-right-title`}>登录React Arco Admin</div>
          <Form
            form={form}
            style={{ width: 320 }}
            wrapperCol={{
              span: 24,
            }}
            onValuesChange={(v, vs) => {
              console.log(v, vs);
            }}
            onSubmit={(v) => {
              console.log(v);
            }}
          >
            <FormItem field="name" rules={[{ required: true, message: '用户名不能为空' }]}>
              <Input prefix={<IconUser />} type="text" placeholder="用户名：admin" />
            </FormItem>
            <FormItem field="password" rules={[{ required: true, message: '密码不能为空' }]}>
              <Input.Password prefix={<IconLock />} placeholder="密码：admin" visibilityToggle />
            </FormItem>
            <FormItem>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Checkbox>记住密码</Checkbox>
                <Link>忘记密码</Link>
              </div>
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" long>
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
        <div className={`${classPrefix}-right-footer`}>鄂ICP备18026800号-1</div>
      </div>
    </div>
  );
};
