const { describe, it } = require('mocha')
const { expect } = require('chai')

const base = `${process.env.PWD}`

const util = require(`${base}`)

describe('`util`', function () {
  it('is an `object`', function () {
    expect(typeof util).to.eq('object')
  })
  it('contains 3 keys`', function () {
    expect(Object.keys(util).length).to.eq(3)
  })
})
