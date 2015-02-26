/* eslint-env jasmine */

var invalid = require('invalid')
var expectedSchema = {
  name: {
    pretty: String
  },
  copyrightNotice: String,
  openSource: {
    license: {
      name: {
        pretty: String,
        spdx: String
      }
    }
  }
}
var ps = require('../')

describe('PolicyStat', function () {
  it('seems valid', function () {
    var isInvalid = invalid(ps, expectedSchema)
    expect(isInvalid).toBe(false)
  })
})
