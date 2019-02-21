pragma solidity 0.4.25;

contract Trust {

    mapping(address => address[]) trustedBy;

    event Trusted(address[]);

    function addTrusted(address trustedClaimHolder) public returns (bool) {
        trustedBy[trustedClaimHolder].push(msg.sender);
        return true;
    }

    function getTrusted(address trustedClaimHolder) public returns (address [] memory) {
        emit Trusted(trustedBy[trustedClaimHolder]);
        return trustedBy[trustedClaimHolder];
    }
}
