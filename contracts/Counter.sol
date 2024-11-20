//SPDX-LicenSe-Identifier:MIT

pragma solidity 0.8.27;

contract Counter {
    uint public counter = 0;

    function Count() external {
        counter++;
    }
}
