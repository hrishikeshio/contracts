// const { assert } = require('chai');
// const {
//   assertRevert,
// } = require('./helpers/testHelpers');
const merkle = require('@razor-network/merkle');
const ethers = require('ethers');

const MerkleProofTestArtifact = artifacts.require('../contracts/mocks/MerkleProofTest');
let MerkleProof;
let tree = [];
const createMerkle = async (values) => {
  tree = [];
  const leafs = [];
  // Hash all values
  for (let i = 0; i < values.length; i++) {
    leafs.push(ethers.utils.solidityKeccak256(['uint256'], [values[i]]));
  }

  let level = leafs;
  let nextLevel = [];
  let depth = 0;
  tree.push(level);

  while (level.length !== 1) {
    for (let i = 0; i < level.length; i += 2) {
      if (i + 1 < level.length) {
        nextLevel.push(ethers.utils.solidityKeccak256(['bytes32', 'bytes32'], [level[i], level[i + 1]]));
      } else nextLevel.push(level[i]);
    }
    level = nextLevel;
    tree.push(level);
    nextLevel = [];
  }

  tree = tree.reverse();
};

function getProofPath(assetId, excludeParent, compact) {
  const proofPath = [];
  let index = assetId - 1;
  const compactProofPath = [];
  for (let currentLevel = tree.length - 1; currentLevel > 0; currentLevel--) {
    const currentLevelNodes = tree[currentLevel];
    const currentLevelCount = currentLevelNodes.length;
    //console.log('localCurrentlevelNodes', currentLevelNodes);
    // if this is an odd end node to be promoted up, skip to avoid proofs with null values
    if (index === currentLevelCount - 1 && currentLevelCount % 2 === 1) {
      index = Math.floor(index / 2);
      // eslint-disable-next-line no-continue
      continue;
    }

    const nodes = {};
    if (index % 2) { // the index is the right node
      nodes.left = currentLevelNodes[index - 1];
      nodes.right = currentLevelNodes[index];
      compactProofPath.push(nodes.left);
    } else {
      nodes.left = currentLevelNodes[index];
      nodes.right = currentLevelNodes[index + 1];
      compactProofPath.push(nodes.right);
    }

    index = Math.floor(index / 2); // set index to the parent index
    if (!excludeParent) {
      proofPath.push({
        parent: tree[currentLevel - 1][index],
        left: nodes.left,
        right: nodes.right,
      });
    } else {
      proofPath.push({
        left: nodes.left,
        right: nodes.right,
      });
    }
  }
  if (compact) return compactProofPath;
  return proofPath;
}

describe('MerkleProof', function () {
  before('Deployment', async function () {
    MerkleProof = await MerkleProofTestArtifact.new();
  });

  it('Verification', async function () {
    const votes = [100, 200, 300, 400, 500];

    await createMerkle(votes);
    console.log('NewTree');
    console.log(tree);
    const tree1 = merkle('keccak256').sync(votes);

    const proof1 = getProofPath(1, true, true);
    const proof2 = getProofPath(2, true, true);
    const proof3 = getProofPath(3, true, true);
    const proof4 = getProofPath(4, true, true);
    const proof5 = getProofPath(5, true, true);
    //const proof2 = tree1.getProofPath(0, true, true);
    // console.log(tree1.depth());
    // console.log(proof);
    // console.log(proof2);

    console.log(proof3);
    console.log('Positive 000', await MerkleProof.verify(proof1, tree[0][0], ethers.utils.solidityKeccak256(['uint256'], [100]), 1, 3));
    console.log('Negagtive 000', await MerkleProof.verify(proof1, tree[0][0], ethers.utils.solidityKeccak256(['uint256'], [100]), 2, 3));
    console.log('Negative 000', await MerkleProof.verify(proof1, tree[0][0], ethers.utils.solidityKeccak256(['uint256'], [100]), 3, 3));
    console.log('Positive 001', await MerkleProof.verify(proof2, tree[0][0], ethers.utils.solidityKeccak256(['uint256'], [200]), 2, 3));
    console.log('Positive 010', await MerkleProof.verify(proof3, tree[0][0], ethers.utils.solidityKeccak256(['uint256'], [300]), 3, 3));
    console.log('Positive 011', await MerkleProof.verify(proof4, tree[0][0], ethers.utils.solidityKeccak256(['uint256'], [400]), 4, 3));
    console.log('Positive 100', await MerkleProof.verify(proof5, tree[0][0], ethers.utils.solidityKeccak256(['uint256'], [500]), 5, 3));

    console.log(await MerkleProof.getSequence(5, 3));
    // const proof = [];
    // for (let i = 0; i < votes.length; i++) {
    //   proof.push(tree.getProofPath(i, true, true));
    // }

    // // nodes
    // const l0 = ethers.utils.solidityKeccak256(['uint256'], [100]);
    // const l1 = ethers.utils.solidityKeccak256(['uint256'], [200]);
    // const l2 = ethers.utils.solidityKeccak256(['uint256'], [300]);

    // // const l3 = ethers.utils.solidityKeccak256(['uint256'], [400]);
    // // const l4 = ethers.utils.solidityKeccak256(['uint256'], [500]);

    // const m0 = ethers.utils.solidityKeccak256(['bytes32', 'bytes32'], [l0, l1]);
    // // const m2 = ethers.utils.solidityKeccak256(['bytes32', 'bytes32'], [l4, l4]);
    // // const n0 = ethers.utils.solidityKeccak256(['bytes32', 'bytes32'], [m0, m1]);
    // // const n1 = ethers.utils.solidityKeccak256(['bytes32', 'bytes32'], [m2, m2]);

    // const rootCal = ethers.utils.solidityKeccak256(['bytes32', 'bytes32'], [m0, l2]);

    // console.log('Nodes');
    // console.log('l0', l0);
    // console.log('l1', l1);
    // console.log('l2', l2);
    // console.log('m0', m0);
    // console.log('root', rootCal);

    // console.log('Prrofs');

    // console.log(proof[0]);
    // console.log(proof[1]);
    // console.log(proof[2]);
    // // console.log(proof[3]);
    // // console.log(proof[4]);
    // const root = tree.root();
    // console.log(root);
    // console.log(await MerkleProof.verify(proof[0], root, ethers.utils.solidityKeccak256(['uint256'], [100])));
  });
});
