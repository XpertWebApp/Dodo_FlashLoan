/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "DODOFlashloan",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DODOFlashloan__factory>;
    getContractFactory(
      name: "DODOProxyIntegrate",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DODOProxyIntegrate__factory>;
    getContractFactory(
      name: "IDODO",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDODO__factory>;
    getContractFactory(
      name: "IDODOProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDODOProxy__factory>;
    getContractFactory(
      name: "IDODOV1Helper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDODOV1Helper__factory>;
    getContractFactory(
      name: "IDODOV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDODOV2__factory>;

    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "DODOFlashloan",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DODOFlashloan>;
    getContractAt(
      name: "DODOProxyIntegrate",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DODOProxyIntegrate>;
    getContractAt(
      name: "IDODO",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDODO>;
    getContractAt(
      name: "IDODOProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDODOProxy>;
    getContractAt(
      name: "IDODOV1Helper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDODOV1Helper>;
    getContractAt(
      name: "IDODOV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDODOV2>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}