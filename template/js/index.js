/*
 * @Author: yaogeng.zhu
 * @Date: 2021-10-08 10:17:01
 * @Last Modified by: yaogeng.zhu
 * @Last Modified time: 2022-08-12 13:04:53
 *  存放一些其他的js脚本
 */
console.log("%c%s","color: red; background: yellow; font-size: 24px;","数据埋点！");

function buriedPoint() {
    const timingInfo = window.performance.timing
    const {domLoading, fetchStart } = timingInfo
    const time = domLoading - fetchStart
    console.log(time + 'ms', '白屏时间')
    console.log(timingInfo, '时间统计数据')
}
buriedPoint()