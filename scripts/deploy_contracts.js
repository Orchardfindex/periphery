async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Router = await ethers.getContractFactory("UniswapV2Router02");
  const router = await Router.deploy(
    "0xF1502761B3f18aa2472a792aA825bAEC3caC339b", // ropsten factory address
    "0xc778417E063141139Fce010982780140Aa0cD5Ab" // ropsten weth address
  );

  console.log("Router address:", router.address);
}

main().then(() =>
  process.exit(0).catch((error) => {
    console.error(error);
    process.exit(1);
  })
);
