var Package = require('auto-package')
var object = Package.package

object.name = 'policystat'
object.main = 'lib/index.js'
object.version = '1.0.0'
object.description = 'PolicyStat strings for easy reuse'
Package.github_repo('mightyiam/policystat.js')
object.copyright = require('./').copyrightNotice
object.author = require('mightyiam').authorStr
object.devDependencies = {
  mightyiam: '^1.1.5',
  'auto-package': '^0.1.1',
  standard: '*',
  jasmine: '^2.2.1',
  invalid: '^0.0.2',
  'verb-cli': '^0.4.4'
}
object.scripts = {
    lint: 'standard',
    unit: 'jasmine',
    test: 'npm run lint && npm run unit'
}
object.license = 'MIT'
