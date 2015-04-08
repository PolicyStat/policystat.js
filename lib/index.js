var ps = {}

ps.name = {
  pretty: 'PolicyStat LLC'
}

ps.copyrightNotice = 'Copyright © ' + new Date().getFullYear() + ' ' + ps.name.pretty

ps.openSource = {
  license: {
    pretty: 'BSD 3–Clause',
    spdx: 'BSD-3-Clause'
  }
}

ps.testing = {}
ps.testing.browsers = {}
ps.testing.browsers.zuul = [
  {name: 'ie', version: '8..latest'},
  {name: 'chrome', version: 'latest'},
  {name: 'firefox', version: 'latest'},
  {name: 'safari', version: '6..latest'},
  {name: 'android', version: '4.4..latest'},
  {name: 'iphone', version: 'latest'},
  {name: 'ipad', version: 'latest'}
]

module.exports = ps
