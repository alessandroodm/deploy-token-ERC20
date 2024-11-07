require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY],
    }
  }
};

/*
Deploying contracts with the account: 0xdEd624206DF6973b35fa2c91D786Efe6a8d2d0e1
Account balance: 0.836336244751043238
Token address: 0xC09980Be4474D91234f04e17a3AA331D55D46496
*/