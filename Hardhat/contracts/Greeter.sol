//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.17;

contract Greeter {
    string private greeting;

    constructor(string memory _greeting) {
        // console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    function greet() external view returns (string memory) {
        return greeting;
    }

     function getData() external pure returns (bytes memory) {
        return abi.encodeWithSelector(this.greet.selector);
    }

    function setGreeting(string memory _greeting) public {
        // console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
