var HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config()
module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(process.env.ROPSTENMEM, "https://ropsten.infura.io/v3/759e2479e2fa4755b99bb6671745ffae");
      },
      network_id: 3,
      gas: 4500000,
      gasPrice: 10000000000,
    },
    celo: {
      provider: function() {
        return new HDWalletProvider(process.env.CELOKEY, "https://forno.celo.org")
      },
      network_id: 42220,
      gas: 4000000     
    },
    alphajores: {
      provider: function() {
        return new HDWalletProvider(process.env.ALPHAJORESKEY, "https://alfajores-forno.celo-testnet.org")
      },
      network_id: 44787,
      gas: 20000000      
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows: 
  // $ truffle migrate --reset --compile-all
  //
  // db: {
  // enabled: false,
  // host: "127.0.0.1",
  // adapter: {
  //   name: "sqlite",
  //   settings: {
  //     directory: ".db"
  //   }
  // }
  // }
};
