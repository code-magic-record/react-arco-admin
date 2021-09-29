const REACT_APP = /^REACT_APP_/i; // 防止过滤掉process.evn 下的一些环境变量
function getClientEnvironment(publicUrl = '') {  // PUBLIC_URL --> 公共URL
    const raw = Object.keys(process.env)
        .filter(key => REACT_APP.test(key))
        .reduce(
            (env, key) => {
                env[key] = process.env[key];
                return env;
            },
            {
                NODE_ENV: process.env.NODE_ENV || 'development',
                PUBLIC_URL: publicUrl,
            }
        );
    // 注入环境变量
    const stringified = {
        'process.env': Object.keys(raw).reduce((env, key) => {
            env[key] = JSON.stringify(raw[key]);
            return env;
        }, {}),
    };

    return { raw, stringified };
}

module.exports = getClientEnvironment;
