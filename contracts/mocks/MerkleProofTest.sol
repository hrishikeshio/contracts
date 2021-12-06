// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../lib/MerkleProof.sol";

contract MerkleProofTest{
    function verify(bytes32[] memory proof, bytes32 root, bytes32 leaf, uint32 assetId, uint32 depth) external view returns (bool) {
        return MerkleProof.verify(proof, root, leaf, assetId, depth);
    }

    function getSequence(uint256 assetId, uint256 depth) external view returns (string memory) {
        return string(MerkleProof.getSequence(assetId, depth));
    }
}
