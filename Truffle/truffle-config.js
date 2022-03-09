require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1', // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: '*' // Any network (default: none)
    },
    opera_testnet: {
      provider: () =>
        new HDWalletProvider(
          PRIVATE_KEY,
          `https://rpcapi-tracing.testnet.fantom.network`
        ),
      network_id: 4002, // This network is yours, in the cloud.
      production: false, // Treats this network as if it was a public net. (default: false),
      gas: 700000,
      timeoutBlocks: 200
    },
    opera_mainnet: {
      provider: () =>
        new HDWalletProvider(PRIVATE_KEY, 'https://rpc.ftm.tools/'),
      network_id: 250, // This network is yours, in the cloud.
      gas: 700000,
      timeoutBlocks: 200
    }
  },

  compilers: {
    solc: {
      version: '0.4.25' // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};
