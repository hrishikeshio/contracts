// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "hardhat/console.sol";
/**
 * @dev These functions deal with verification of Merkle trees (hash trees),
 */
library MerkleProof {
    /**
     * @dev Returns true if a `leaf` can be proved to be a part of a Merkle tree
     * defined by `root`. For this, a `proof` must be provided, containing
     * sibling hashes on the branch from the leaf to the root of the tree. Each
     * pair of leaves and each pair of pre-images are assumed to be sorted.
     */
    function verify(bytes32[] memory proof, bytes32 root, bytes32 leaf, uint32 assetId, uint32 depth) internal view returns (bool) {
        bytes32 computedHash = leaf;
        bytes memory seq = bytes(getSequence(assetId, depth));
        console.log(string(seq));
        uint256 j = proof.length;
        for (uint256 i = 0; i < proof.length; i++) {
            bytes32 proofElement = proof[i];
            //console.logBytes1(seq[depth - i - 1]);
            j--;
            if(seq.length > j) {
                if (seq[j] == 0x30) {
                    //console.log('Hash(current computed hash + current element of the proof)');
                    computedHash = keccak256(abi.encodePacked(computedHash, proofElement));
                } else {
                    //console.log('Hash(current element of the proof + current computed hash)');
                    computedHash = keccak256(abi.encodePacked(proofElement, computedHash));
                }
            }
        }

        // Check if the computed hash (root) is equal to the provided root
        return computedHash == root;
    }

    function getSequence(uint256 assetId, uint256 depth) internal pure returns (bytes memory)
    {
     
        bytes memory output = new bytes(depth);
        uint256 n = assetId - 1;
        for (uint8 i = 0; i < depth; i++) {
            output[depth - 1 - i] = (n % 2 == 1) ? bytes1("1") : bytes1("0");
            n /= 2;
        }

        //string memory x = string(output);
        // for(uint8 i = 0; i < depth ; i++)
        // {
        //     console.log(uint8(output[i]));
        // }
        return output;
    }
}

// Number to Binary. 
// And how we travese that binary .
// Depth log ? | check if its attack



//      0
//    0
//  0  0   0
 
//  00
//  01
//  1



//       0
//    0      0
//  0  0   0   0


// 00
// 0(second) 1 (first)
// 10
// 11

//          0
//       0         
//    0      0
//  0  0   0   0    0 

// 0,0
// 0.1
// 1.0
// 1.1

//  000
//  001
//  010
//  011
//  1


  