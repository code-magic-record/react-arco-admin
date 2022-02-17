import { Button } from '@arco-design/web-react';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const Login: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  useEffect(() => {
    // 判断是否登陆
    // const useToken = localStorage.getItem('')
  }, []);

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('firstName')} placeholder="请输入账号" />
          <input {...register('firstName')} placeholder="请输入密码" />
          <Button type="primary">登录</Button>
        </form>
      </div>
    </div>
  );
};
