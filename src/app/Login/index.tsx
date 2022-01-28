import { Button } from '@arco-design/web-react';
import React from 'react';
import { useForm } from 'react-hook-form';

export const Login: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className='"w-screen h-full flex items-center justify-center'>
      <div className="w-[500px] h-[400px] shadow-md flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="container p-[20px] flex flex-col items-center">
          <input
            className="border-1 w-full border-black	 h-[40px]"
            {...register('firstName')}
            placeholder="请输入账号"
          />
          <input
            className=" border-1  w-full border-black h-[40px] mt-[10px]"
            {...register('firstName')}
            placeholder="请输入密码"
          />
          {/* <input type="submit" /> */}
          <Button className="h-[40px] w-full mt-[10px]" type="primary">
            登录
          </Button>
        </form>
      </div>
    </div>
  );
};
