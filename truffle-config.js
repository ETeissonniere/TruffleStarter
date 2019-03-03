require('dotenv').config()
const HDWalletProvider = require('truffle-hdwallet-provider')

const mochaGasSettings = {
  reporter: 'eth-gas-reporter',
  reporterOptions: {
    currency: 'USD',
    gasPrice: 3,
  },
}

const mochaArguments = process.env.GAS_REPORTER ? mochaGasSettings : {}

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*', // eslint-disable-line camelcase
    },
    ropsten: {
      provider: () => {
        return new HDWalletProvider(process.env.MNENOMIC, 'https://ropsten.infura.io/v3/' + process.env.INFURA_API_KEY)
      },
      network_id: '3', // eslint-disable-line camelcase
      gas: 4465030,
      gasPrice: 10000000000,
    },
    kovan: {
      provider: () => {
        return new HDWalletProvider(process.env.MNENOMIC, 'https://kovan.infura.io/v3/' + process.env.INFURA_API_KEY)
      },
      network_id: '42', // eslint-disable-line camelcase
      gas: 4465030,
      gasPrice: 10000000000,
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(process.env.MNENOMIC, 'https://rinkeby.infura.io/v3/' + process.env.INFURA_API_KEY)
      },
      network_id: 4, // eslint-disable-line camelcase
      gas: 3000000,
      gasPrice: 10000000000,
    },
    coverage: {
      host: 'localhost',
      network_id: '*', // eslint-disable-line camelcase
      port: 8555,
      gas: 0xffffffffff,
      gasPrice: 0x01,
    },
    // main ethereum network(mainnet)
    main: {
      provider: () => {
        return new HDWalletProvider(process.env.MNENOMIC, 'https://mainnet.infura.io/v3/' + process.env.INFURA_API_KEY)
      },
      network_id: 1, // eslint-disable-line camelcase
      gas: 3000000,
      gasPrice: 10000000000,
    },
  },
  mocha: mochaArguments,
}
