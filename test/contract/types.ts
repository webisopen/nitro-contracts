import { BigNumber } from '@ethersproject/bignumber'

export type DelayedMsgHeader = {
  kind: number
  sender: string
  blockNumber: number
  timestamp: number
  totalDelayedMessagesRead: number
  baseFee: number
  messageDataHash: string
}

export type DelayedMsg = {
  header: DelayedMsgHeader
  messageData: string
}

export type DelayedMsgDelivered = {
  delayedMessage: DelayedMsg
  delayedAcc: string
  delayedCount: number
}

export type MaxTimeVariation = {
  delaySeconds: number
  futureSeconds: number
  delayBlocks: number
  futureBlocks: number
}

export type ReplenishRate = {
  blocksPerPeriod: number
  secondsPerPeriod: number
  periodBlocks: number
  periodSeconds: number
}

export type DelayConfig = {
  thresholdBlocks: BigNumber
  thresholdSeconds: BigNumber
  maxBufferBlocks: number
  maxBufferSeconds: number
  replenishRate: ReplenishRate
}
