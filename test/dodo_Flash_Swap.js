const { SignerWithAddress } = require("@nomiclabs/hardhat-ethers/signers");
const { expect } = require ("chai");
// const mocha = require('mocha')
// const describe = mocha.describe
// const it = mocha.it
// const assert = require('chai').assert
const { ethers } =require("hardhat");
const IERC20= require("../artifacts/@openzeppelin/contracts/token/ERC20/IERC20.sol/IERC20.json");
// const  IERC20 = require("../../artifacts/@openzeppelin/contracts/token/ERC20/IERC20.sol/IERC20.json");

// const{ dodoV2Pool, erc20Address } =require ("../../constants/addresses");
const { Contract }=require ("@ethersproject/contracts");
// const { getBigNumber } = require ("../utils/index");


const getBigNumber = (amount, decimals = 18) => {
    console.log(ethers.utils.parseUnits(amount.toString(), decimals));
    return ethers.utils.parseUnits(amount.toString(), decimals);
  };
  getBigNumber(1000, 6);

  

describe("dodo flashloan on polygon", () => {
  let Sample;//: DODOFlashloan;
  let owner= SignerWithAddress;
  let addr1=SignerWithAddress;
  let addr2=SignerWithAddress;
  let addrs=SignerWithAddress[0];
  let DAI=Contract;//: Contract;

  const provider = ethers.provider;
  let fixture;

  before(async () => {
    fixture = async () => {
      [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

      const factory = (await ethers.getContractFactory(
        "DODOFlashloan"
      ));
      Sample = await factory.deploy();

      await Sample.deployed();

      DAI = new ethers.Contract(erc20Address.DAI, IERC20.abi, provider);
    };
  });

  beforeEach(async () => {
    await fixture();
  });

  describe("DODO flashloan", async () => {
    it("should execute flashloan", async () => {
      // borrowing 1000 USDC from DODOs WETH/USDC pool
      await expect(
        Sample.dodoFlashLoan(
          "0x5333Eb1E32522F1893B7C9feA3c263807A02d561",
          getBigNumber(1000, 6),
          "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        )
      )
        .emit(Sample, "checkBorrowedAmount")
        .withArgs("0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", getBigNumber(1000, 6))
        .emit(Sample, "payBackLoan")
        .withArgs("0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", getBigNumber(1000, 6));
    });
  });
});