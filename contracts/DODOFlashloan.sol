/*
    
    SPDX-License-Identifier: Apache-2.0
*/
pragma solidity ^0.8.4;


import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


import "hardhat/console.sol";
import "./IDODO.sol";


contract DODOFlashloan {
    event checkBorrowedAmount(address token, uint256 amount);
    event payBackLoan(address token, uint256 amount);

    function dodoFlashLoan(
        address flashLoanPool, //You will make a flashloan from this DODOV2 pool
        uint256 loanAmount,
        address loanToken
    ) external {
        //Note: The data can be structured with any variables required by your logic. The following code is just an example
        bytes memory data = abi.encode(flashLoanPool, loanToken, loanAmount);
        address flashLoanBase = IDODO(flashLoanPool)._BASE_TOKEN_();
        if (flashLoanBase == loanToken) {
            IDODO(flashLoanPool).flashLoan(loanAmount, 0, address(this), data);
        } else {
            IDODO(flashLoanPool).flashLoan(0, loanAmount, address(this), data);
        }
    }

    //Note: CallBack function executed by DODOV2(DVM) flashLoan pool
    function DVMFlashLoanCall(
        address sender,
        uint256 baseAmount,
        uint256 quoteAmount,
        bytes calldata data
    ) external {
        _flashLoanCallBack(sender, baseAmount, quoteAmount, data);
    }

    //Note: CallBack function executed by DODOV2(DPP) flashLoan pool
    function DPPFlashLoanCall(
        address sender,
        uint256 baseAmount,
        uint256 quoteAmount,
        bytes calldata data
    ) external {
        _flashLoanCallBack(sender, baseAmount, quoteAmount, data);
    }

    //Note: CallBack function executed by DODOV2(DSP) flashLoan pool
    function DSPFlashLoanCall(
        address sender,
        uint256 baseAmount,
        uint256 quoteAmount,
        bytes calldata data
    ) external {
        _flashLoanCallBack(sender, baseAmount, quoteAmount, data);
    }

    function _flashLoanCallBack(
        address sender,
        uint256,
        uint256,
        bytes calldata data
    ) internal {
        (address flashLoanPool, address loanToken, uint256 loanAmount) = abi
            .decode(data, (address, address, uint256));

        require(
            sender == address(this) && msg.sender == flashLoanPool,
            "HANDLE_FLASH_NENIED"
        );
        console.log(IERC20(loanToken).balanceOf(address(this)),"this amount  have to return");

        //Note: Realize your own logic using the token from flashLoan pool.
        require(
            loanAmount == IERC20(loanToken).balanceOf(address(this)),
            "The loanAmount and the current balance should be the same!"
        );
        emit checkBorrowedAmount(loanToken, loanAmount);

        if (loanAmount > 1 ether) {
            console.log("You borrowed", loanAmount / 10**18);
        }

        //Return funds
        IERC20(loanToken).transfer(flashLoanPool, loanAmount);
        emit payBackLoan(loanToken, loanAmount);
        console.log("You successfully returned loan!");
    }
}