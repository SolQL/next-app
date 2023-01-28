//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;


contract Query {

    uint test1;
    uint test2;

    constructor(uint _test1, uint _test2) {
        test1 = _test1;
        test2 = _test2;
    }

    function main() external returns(uint result) {
        result = test1 + test2;
    }

}