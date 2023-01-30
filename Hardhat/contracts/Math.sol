//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.17;

contract SimpleStorage {
    uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }

     function getData() external pure returns (bytes memory) {
        return abi.encodeWithSelector(this.get.selector);
    }
}
