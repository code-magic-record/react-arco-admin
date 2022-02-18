import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox, Link, Message } from '@arco-design/web-react';
import { IconLock, IconUser } from '@arco-design/web-react/icon';
import { useNavigate } from 'react-router-dom';
import './index.less';
import Banner from './modules/Banner';

const classPrefix = 'login';
const FormItem = Form.Item;

export const Login: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  useEffect(() => {
    // 判断是否登陆
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      navigate('/');
    }
  }, []);

  const onSubmit = () => {
    form.validate((err, values) => {
      if (err) {
        return;
      }
      const { username, password } = values;
      if (username === 'admin' && password === 'admin') {
        // 登录成功
        Message.success('登录成功');
        navigate('/');
        localStorage.setItem('userToken', 'xxxxxxxxx');
      }
    });
  };

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
            initialValues={{
              username: 'admin',
              password: 'admin',
            }}
            onSubmit={onSubmit}
          >
            <FormItem field="username" rules={[{ required: true, message: '用户名不能为空' }]}>
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
            <FormItem>
              <Button type="text" long>
                注册账号
              </Button>
            </FormItem>
          </Form>
        </div>
        <div className={`${classPrefix}-right-footer`}>鄂ICP备18026800号-1</div>
      </div>
    </div>
  );
};
