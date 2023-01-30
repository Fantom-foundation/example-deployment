const hre = require('hardhat');

async function main() {
  // We get the contract to deploy
  const SimpleStorage = await hre.ethers.getContractFactory('SimpleStorage');
  const simpleStorage = await SimpleStorage.deploy();
  
  await simpleStorage.deployed();
  console.log('SimpleStorage deployed to:', simpleStorage.address);
  
  await simpleStorage.deployTransaction.wait(5);

  await hre.run(`verify:verify`, {
    address: simpleStorage.address,
    constructorArguments: []
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
