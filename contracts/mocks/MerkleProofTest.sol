// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../lib/MerkleProof.sol";

contract MerkleProofTest{

    function verifyMultiple(bytes32[][] memory proofs, bytes32 root, bytes32 [] memory leaves, uint32 [] memory assetId, uint32 depth, uint32 maxAssets) external view returns (bool) {
        return MerkleProof.verifyMultiple(proofs, root, leaves, assetId, depth, maxAssets);
    }
    function verify(bytes32[] memory proof, bytes32 root, bytes32 leaf, uint32 assetId, uint32 depth, uint32 maxAssets) external view returns (bool) {
        return MerkleProof.verify(proof, root, leaf, assetId, depth, maxAssets);
    }

    function getSequence(uint256 assetId, uint256 depth) external view returns (string memory) {
        return string(MerkleProof.getSequence(assetId, depth));
    }
}
