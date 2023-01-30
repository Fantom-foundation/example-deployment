const hre = require('hardhat');

async function main() {
  // We get the contract to deploy
  const MultiCall = await hre.ethers.getContractFactory('MultiCall');
  const multiCall = await MultiCall.deploy();
  
  await multiCall.deployed();
  console.log('MultiCall deployed to:', multiCall.address);
  
  await multiCall.deployTransaction.wait(5);

  await hre.run(`verify:verify`, {
    address: multiCall.address,
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
