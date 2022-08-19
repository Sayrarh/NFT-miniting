import { ethers } from "hardhat";

// Contract Address: 0x43F693B5D0545df24DC1Aa4fb73759EBE5AF5a70
// Opensea link: https://testnets.opensea.io/assets/rinkeby/0x43f693b5d0545df24dc1aa4fb73759ebe5af5a70/0


async function main() {

    const NFT = await ethers.getContractAt("INFT", "0x43F693B5D0545df24DC1Aa4fb73759EBE5AF5a70");

    await NFT.safeMint("0x637CcDeBB20f849C0AA1654DEe62B552a058EA87", "ipfs://QmUpgEXndveyDFkXDQW3dp7ZiaSpZ7X9cfK54XwWwhguG9")
   // await NFT.tokenURI(1)

 // const TosinNFT = await ethers.getContractFactory("TosinNFT");
 // const nft = await TosinNFT.deploy();

 // await nft.deployed();
 // console.log("My NFT contract deployed at:", nft.address);



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});