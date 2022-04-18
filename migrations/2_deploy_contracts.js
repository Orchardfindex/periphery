const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, network) {
  let weth;
  const FACTORY_ADDRESS = "0xF1502761B3f18aa2472a792aA825bAEC3caC339b";

  if (network === "mainnet") {
    weth = await WETH.at("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2");
  } else {
    await deployer.deploy(WETH);
    weth = await WETH.deployed();
  }

  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};
// init_code_hash: 1cd2806e450eaaefa12c4fbca3c7ab94b00ba093044508d960d60020a341a45e
// factory mumbai testnet:  0xb2ac98ba816ac540e5a4e3da6c4d7fbd69e196cb
// router mumbai: 0x656cD0AFea42BB096B009644dF6C0E0eF1Bf8E57
// WETH mumbai testnet:  0xFfB4D07fcd078C3E30F1cFbD2492E4eA59f51D32

// init_code_hash: d325580f03a82df1ca59e8c6db00c6c9a9d207d54af9b12bb6ab0cd416a9a2e6
// factory ropsten: 0xF1502761B3f18aa2472a792aA825bAEC3caC339b
// router ropsten: 0xe0690b97B5C68E136cD33f2e80C1455526Ced58E
// WETH ropsten: 0xc778417E063141139Fce010982780140Aa0cD5Ab
