const ip = require('ip')
const chalk = require('chalk')
const divider = chalk.gray('\n-----------------------------------')
const logger = {
  error: (err) => {
    console.error(chalk.red(err))
  },
  appStarted: (port, host, tunnelStarted) => {
    console.log(`Server started ! ${chalk.green('✓')}`)
    if (tunnelStarted) {
      console.log(`Tunnel initialised ${chalk.green('✓')}`)
    }
    console.log(`
            ${chalk.bold('Access URLs:')}${divider}
            Localhost访问: ${chalk.magenta(`${process.env.REACT_APP_SERVER_DOMAIN}:${port}`)}
            本地IP地址访问: ${chalk.magenta(`http://${ip.address()}:${port}`) +
                (tunnelStarted ? `\n    Proxy: ${chalk.magenta(tunnelStarted)}` : '')}
            ${divider}
            ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
        `)
  },
}

module.exports = logger
