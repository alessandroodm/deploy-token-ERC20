const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const balance = await deployer.provider.getBalance(deployer.address);
  console.log("Account balance:", ethers.formatEther(balance));

  const Melina = await ethers.getContractFactory("Melina");
  const melina = await Melina.deploy();
  await melina.waitForDeployment();

  const contractAddress = await melina.getAddress();
  console.log("Token address:", contractAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
