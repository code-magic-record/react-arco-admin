import Mock from 'mockjs';
import setupMock from 'src/utils/setupMock';

setupMock({
  setup: () => {
    Mock.mock(new RegExp('/api/user/login'), () => {
      //
    });
  },
});
