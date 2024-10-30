import { ethers } from 'ethers'

// 90% of Geth's 128KB tx size limit, leaving ~13KB for proving
// This need to be adjusted for Orbit chains
export const maxDataSize = 117964

export const config = {
  rollupConfig: {
    confirmPeriodBlocks: ethers.BigNumber.from('20'),
    extraChallengeTimeBlocks: ethers.BigNumber.from('200'),
    stakeToken: ethers.constants.AddressZero,
    baseStake: ethers.utils.parseEther('1'),
    wasmModuleRoot:
      '0x184884e1eb9fefdc158f6c8ac912bb183bf3cf83f0090317e0bc4ac5860baa39',
    owner: '0x2CEEF25911079f635339f268B8373dD12eE7b994',
    loserStakeEscrow: ethers.constants.AddressZero,
    chainId: ethers.BigNumber.from('3164191'),
    chainConfig:
      '{"chainId":3164191,"homesteadBlock":0,"daoForkBlock":null,"daoForkSupport":true,"eip150Block":0,"eip150Hash":"0x0000000000000000000000000000000000000000000000000000000000000000","eip155Block":0,"eip158Block":0,"byzantiumBlock":0,"constantinopleBlock":0,"petersburgBlock":0,"istanbulBlock":0,"muirGlacierBlock":0,"berlinBlock":0,"londonBlock":0,"clique":{"period":0,"epoch":0},"arbitrum":{"EnableArbOS":true,"AllowDebugPrecompiles":false,"DataAvailabilityCommittee":true,"InitialArbOSVersion":32,"MaxCodeSize":24576,"MaxInitCodeSize":49152,"InitialChainOwner":"0x2CEEF25911079f635339f268B8373dD12eE7b994","GenesisBlockNum":0}}',
    genesisBlockNum: ethers.BigNumber.from('0'),
    sequencerInboxMaxTimeVariation: {
      delayBlocks: ethers.BigNumber.from('5760'),
      futureBlocks: ethers.BigNumber.from('64'),
      delaySeconds: ethers.BigNumber.from('86400'),
      futureSeconds: ethers.BigNumber.from('768'),
    },
  },
  validators: [
    '0x96812Af8a9226b16dc840940bA539FCa8f564Ed8',
    '0xea85C69ab916286621cfFAf7Edec6EdCF479A102',
  ],
  batchPosters: ['0x33e0dC3b44EF68fF70C6eF5fc5B121081dAbdAa7'],
  batchPosterManager: '0x1Fd60fbFad9713c2930eb18Fc06bb2bE08794AC2'
}
