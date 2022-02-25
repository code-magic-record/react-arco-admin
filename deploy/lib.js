// 不记录异常 异常由fn 函数自己处理
module.exports = function workflow(arr, fn) {
  return new Promise(((resolve) => {
    // eslint-disable-next-line no-use-before-define
    next();
    function next() {
      if (!arr || arr.length <= 0) {
        resolve();
        return;
      }
      const data = arr.shift();
      // fixed: Maximum call stack size exceeded （arr > 5000 and 直接调用next导致 ）
      setTimeout(() => {
        fn(data, next);
      }, 0);
    }
  }));
};
