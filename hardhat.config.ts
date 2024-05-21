import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ZIRCUIT_PRIVATE_KEY = "YOUR PRIVATE KEY";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
};

module.exports = {
  solidity: "0.8.19",
  networks: {
    zircuit: {
      url: `https://zircuit1.p2pify.com`,
      accounts: [ZIRCUIT_PRIVATE_KEY],
    },
  },
};
