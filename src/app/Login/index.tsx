import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, Checkbox, Link, Message } from '@arco-design/web-react';
import { IconLock, IconUser } from '@arco-design/web-react/icon';
import { useNavigate } from 'react-router-dom';
import { useLocalStorageState } from 'ahooks';
import Banner from './modules/Banner';
import useI18n from 'src/ahooks/useI18n';
import locales from './locales';
import styles from './index.module.less';
import './mock/user';

type IUserParams = {
  username: string;
  password: string;
};
const FormItem = Form.Item;

export const Login: React.FC = () => {
  const [form] = Form.useForm();
  const { lang, i18n } = useI18n(locales);
  const navigate = useNavigate();
  const [userToken, setUserToken] = useLocalStorageState('userToken');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // 判断是否登陆
    if (userToken) {
      navigate('/weclome');
    }
  }, []);

  const onSubmit = () => {
    form.validate((err, values) => {
      if (err) {
        return;
      }
      const { username, password } = values;
      login({ username, password });
    });
  };

  const login = (params: IUserParams) => {
    setLoading(true);
    axios
      .post('/api/user/login', params)
      .then((res) => {
        const {
          status,
          msg,
          data: { token },
        } = res.data;
        console.log(msg);
        if (status === 'ok') {
          Message.success('登录成功');
          navigate('/weclome');
          setUserToken(token);
        } else {
          Message.error(msg);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={styles.login}>
      <div className={styles.logo}>
        <h1 style={{ margin: 0, marginLeft: '10px' }}>React Arco Admin</h1>
      </div>
      <div className={styles.left}>
        <Banner />
      </div>
      <div className={styles.right}>
        <div>
          <div className={styles.title}>登录React Arco Admin</div>
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
            <FormItem
              field="username"
              rules={[{ required: true, message: `${i18n[lang]['login.username.isNotEmpty']}` }]}
            >
              <Input prefix={<IconUser />} type="text" placeholder="username：admin" />
            </FormItem>
            <FormItem
              field="password"
              rules={[{ required: true, message: `${i18n[lang]['login.password.isNotEmpty']}` }]}
            >
              <Input.Password prefix={<IconLock />} placeholder="password：admin" visibilityToggle />
            </FormItem>
            <FormItem>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Checkbox>{i18n[lang]['login.rememberPassword']}</Checkbox>
                <Link>{i18n[lang]['login.forgetPassword']}</Link>
              </div>
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" long loading={loading}>
                {i18n[lang]['login.login']}
              </Button>
            </FormItem>
            <FormItem>
              <Button type="text" long>
                {i18n[lang]['login.registerAccount']}
              </Button>
            </FormItem>
          </Form>
        </div>
        <div className={styles.footer}>鄂ICP备18026800号-1</div>
      </div>
    </div>
  );
};
