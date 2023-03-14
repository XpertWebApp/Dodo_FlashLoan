const { config  }= require("dotenv") ;
config();
require ("@nomiclabs/hardhat-etherscan");
require ("@nomiclabs/hardhat-waffle");
require ("@nomiclabs/hardhat-ethers");
require ("@typechain/hardhat");
require ("@openzeppelin/hardhat-upgrades");
require ("solidity-coverage");

// import "./tasks/accounts";
// import "./tasks/balance";
// import "./tasks/block-number";

/**
 * @type import('hardhat/config').HardhatUserConfig
 * config for github actions only
 */
const configForTest = {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
      },
      {
        version: "0.6.12",
      },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.JSON_RPC_URL,
      },
    },
  },
  mocha: {
    timeout: 200000,
  },
};

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const configLocal = {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
            details: {
              yul: false,
            },
          },
        },
      },
      {
        version: "0.6.12",
      },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        // polygon
        url: process.env.ALCHEMY_POLYGON_RPC_URL,
        blockNumber: 28583600,

        // bsc
        // url: process.env.BSC_RPC_URL,
        // blockNumber: 17988430,
      },
    },
    polygon: {
      url: process.env.ALCHEMY_POLYGON_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.POLYSCAN_APIKEY,
  },
  mocha: {
    timeout: 200000,
  },
};

module.exports = process.env.CI ? configForTest : configLocal;
