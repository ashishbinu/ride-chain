const hre = require("hardhat");

async function main() {
  await hre.run("compile");

  // We get the contract to deploy
  const RideSharingContract = await hre.ethers.getContractFactory(
    "RideSharing"
  );
  const rideSharingContract = await RideSharingContract.deploy();

  await rideSharingContract.deployed();

  console.log("Deployed :", rideSharingContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
