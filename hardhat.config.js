require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const ALCHEMY_API = process.env.ALCHEMY_HTTP;
const SECRET = process.env.SECRET;
const ETHERSCAN_API = process.env.ETHERSCAN_API;

module.exports = {
  solidity: {
    version: "0.6.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    ropsten: {
      url: `${ALCHEMY_API}`,
      accounts: [`0x${SECRET}`],
    },
  },
  etherscan: {
    apiKey: `${ETHERSCAN_API}`,
  },
};
