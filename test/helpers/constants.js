const { BigNumber } = ethers;

const DEFAULT_ADMIN_ROLE_HASH = '0x0000000000000000000000000000000000000000000000000000000000000000';
const ONE_ETHER = BigNumber.from(10).pow(BigNumber.from(18));

const EPOCH_LENGTH = BigNumber.from(1800);
const BASE_DENOMINATOR = BigNumber.from(10000000);
const NUM_BLOCKS = 10;
const NUM_STATES = BigNumber.from(5);
const STATE_LENGTH = BigNumber.from(360);
const GRACE_PERIOD = 8;
const UNSTAKE_LOCK_PERIOD = 1;
const WITHDRAW_LOCK_PERIOD = 1;
const WITHDRAW_INITIATION_PERIOD = 5;
const MATURITIES = [50, 70, 86, 100, 111, 122, 132, 141, 150, 158,
  165, 173, 180, 187, 193, 200, 206, 212, 217, 223,
  229, 234, 239, 244, 250, 254, 259, 264, 269, 273,
  278, 282, 287, 291, 295, 300, 304, 308, 312, 316,
  320, 324, 327, 331, 335, 339, 342, 346, 350, 353,
  357, 360, 364, 367, 370, 374, 377, 380, 384, 387,
  390, 393, 396, 400, 403, 406, 409, 412, 415, 418,
  421, 424, 427, 430, 433, 435, 438, 441, 444, 447,
  450, 452, 455, 458, 460, 463, 466, 469, 471, 474,
  476, 479, 482, 484, 487, 489, 492, 494, 497];

// keccak256("BLOCK_CONFIRMER_ROLE")
const BLOCK_CONFIRMER_ROLE = '0x18797bc7973e1dadee1895be2f1003818e30eae3b0e7a01eb9b2e66f3ea2771f';

// keccak256("COLLECTION_CONFIRMER_ROLE")
const COLLECTION_CONFIRMER_ROLE = '0xa1d2ec18e7ea6241ef0566da3d2bc59cc059592990e56680abdc7031155a0c28';

// keccak256("STAKER_ACTIVITY_UPDATER_ROLE")
const STAKER_ACTIVITY_UPDATER_ROLE = '0x4cd3070aaa07d03ab33731cbabd0cb27eb9e074a9430ad006c96941d71b77ece';

// keccak256("STAKE_MODIFIER_ROLE")
const STAKE_MODIFIER_ROLE = '0xdbaaaff2c3744aa215ebd99971829e1c1b728703a0bf252f96685d29011fc804';

// keccak256("REWARD_MODIFIER_ROLE")
const REWARD_MODIFIER_ROLE = '0xcabcaf259dd9a27f23bd8a92bacd65983c2ebf027c853f89f941715905271a8d';

// keccak256("COLLECTION_MODIFIER_ROLE")
const COLLECTION_MODIFIER_ROLE = '0xa3a75e7cd2b78fcc3ae2046ab93bfa4ac0b87ed7ea56646a312cbcb73eabd294';

// keccak256("VOTE_MODIFIER_ROLE")
const VOTE_MODIFIER_ROLE = '0xca0fffcc0404933256f3ec63d47233fbb05be25fc0eacc2cfb1a2853993fbbe5';

// keccak256("DELEGATOR_MODIFIER_ROLE")
const DELEGATOR_MODIFIER_ROLE = '0x6b7da7a33355c6e035439beb2ac6a052f1558db73f08690b1c9ef5a4e8389597';

// keccak256("REGISTRY_MODIFIER_ROLE")
const REGISTRY_MODIFIER_ROLE = '0xca51085219bef34771da292cb24ee4fcf0ae6bdba1a62c17d1fb7d58be802883';

// keccak256("GOVERNER_ROLE")
const GOVERNER_ROLE = '0x704c992d358ec8f6051d88e5bd9f92457afedcbc3e2d110fcd019b5eda48e52e';

// keccak256("GOVERNANCE_ROLE")
const GOVERNANCE_ROLE = '0x71840dc4906352362b0cdaf79870196c8e42acafade72d5d5a6d59291253ceb1';

// keccak256("PAUSE_ROLE")
const PAUSE_ROLE = '0x139c2898040ef16910dc9f44dc697df79363da767d8bc92f2e310312b816e46d';

// keccak256("SALT_MODIFER_ROLE")
const SALT_MODIFIER_ROLE = '0xf31dda80d37c96a1a0852ace387dda52a75487d7d4eb74895e749ede3e0987b4';

// keccak256("SECRETS_MODIFIER_ROLE")
const SECRETS_MODIFIER_ROLE = '0x46aaf8a125792dfff6db03d74f94fe1acaf55c8cab22f65297c15809c364465c';

// keccak256("DEPTH_MODIFIER_ROLE")
const DEPTH_MODIFIER_ROLE = '0xdec504361dd78243e1ec4f53c4c0ff2daf8da88c57ec66ea0107a0cb80d8bc17';

const ESCAPE_HATCH_ROLE = '0x518d8c39717318f051dfb836a4ebe5b3c34aa2cb7fce26c21a89745422ba8043';

// keccak256("STOKEN_ROLE")
const STOKEN_ROLE = '0xce3e6c780f179d7a08d28e380f7be9c36d990f56515174f8adb6287c543e30dc';

const BURN_ADDRESS = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

module.exports = {
  DEFAULT_ADMIN_ROLE_HASH,
  BLOCK_CONFIRMER_ROLE,
  COLLECTION_CONFIRMER_ROLE,
  STAKER_ACTIVITY_UPDATER_ROLE,
  STAKE_MODIFIER_ROLE,
  SECRETS_MODIFIER_ROLE,
  REWARD_MODIFIER_ROLE,
  COLLECTION_MODIFIER_ROLE,
  VOTE_MODIFIER_ROLE,
  DELEGATOR_MODIFIER_ROLE,
  REGISTRY_MODIFIER_ROLE,
  GOVERNER_ROLE,
  SALT_MODIFIER_ROLE,
  DEPTH_MODIFIER_ROLE,
  BASE_DENOMINATOR,
  GOVERNANCE_ROLE,
  PAUSE_ROLE,
  EPOCH_LENGTH,
  NUM_BLOCKS,
  NUM_STATES,
  ONE_ETHER,
  STATE_LENGTH,
  GRACE_PERIOD,
  UNSTAKE_LOCK_PERIOD,
  WITHDRAW_LOCK_PERIOD,
  WITHDRAW_INITIATION_PERIOD,
  ESCAPE_HATCH_ROLE,
  MATURITIES,
  ZERO_ADDRESS,
  BURN_ADDRESS,
  STOKEN_ROLE,
};
