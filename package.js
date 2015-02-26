var auto = require('auto-package')
var content = auto.content

content.name = 'policystat'
content.main = 'lib/index.js'
auto.versionFile()
content.description = 'PolicyStat strings for easy reuse'
auto.githubRepo('mightyiam/policystat.js')
content.copyright = 'Copyright © ' + new Date().getFullYear() + ' PolicyStat LLC'
content.author = require('mightyiam').authorStr
content.devDependencies = {
  mightyiam: '^1.1.5',
  'auto-package': '^0.2.0',
  standard: '*',
  jasmine: '^2.2.1',
  invalid: '^0.0.2',
  'verb-cli': '^0.4.4'
}
content.scripts = {
    lint: 'standard',
    unit: 'jasmine',
    test: 'npm run lint && npm run unit'
}
content.license = 'BSD-3-Clause'
