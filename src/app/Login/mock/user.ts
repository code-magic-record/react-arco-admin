import Mock from 'mockjs';
import { uuid } from 'src/utils'
import setupMock from 'src/utils/setupMock';

setupMock({
  setup: () => {
    Mock.mock(new RegExp('/api/user/login'), (params: { body: string }) => {
      console.log(params);
      const { username, password } = JSON.parse(params.body);
      if (!username) {
        return {
          status: 'error',
          msg: '用户名不能为空',
        };
      }
      if (!password) {
        return {
          status: 'error',
          msg: '密码不能为空',
        };
      }
      if (username === 'admin' && password === 'admin') {
        return {
          status: 'ok',
          data: {
            token: uuid(),
          },
        };
      }
      return {
        status: 'error',
        msg: '账号或者密码错误',
      };
    });
  },
});
