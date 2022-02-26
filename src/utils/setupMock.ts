export default (config: { mock?: boolean; setup: () => void }) => {
  // 这个环境可以不用判断，目前都可以
  const { mock = true, setup } = config;
  if (mock === false) {
    return;
  }
  setup();
};
