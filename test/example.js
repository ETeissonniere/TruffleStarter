// Needed for 'should' and 'bignumber'
require('openzeppelin-test-helpers')

const Example = artifacts.require('Example')

contract('Example', accounts => {
  before(async () => {
    this.example = await Example.new()
  })

  it('should be version 42', async () => {
    (await this.example.version()).should.be.bignumber.equal('42')
  })
})
