pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";




contract CloudSilver is ERC20 {

    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply
    ) public ERC20(name, symbol) {
        //_mint(msg.sender, initialSupply);
    }

    function mint(address to, uint256 amount) public {
        address owner = 0x03018bD7236BC817905c84D84Fe028e240464201; // ropsten
        //address owner = 0x6f86488A70DE6eb6502530dD634D981Da3f3dbeb; //homenet
        require((msg.sender == owner), "Caller is not a minter");
        _mint(to, amount);
    }
}

