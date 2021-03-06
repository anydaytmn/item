import { config } from './config'
import { Queue, queues, TxsJobData } from '@item-protocol/queues'
import { collectTxs, GetTxFunction } from './collect'
import Debug from 'debug'
import { DataTransaction, IssueTransaction } from '@waves/waves-rest'
import { InvokeScriptTransaction } from '@waves/waves-rest/types'
import { getIssueTxsForPeriod } from './txs/issue'
import { getDataTxsForPeriod } from './txs/data'
import { getInvokeScriptTxsForPeriod } from './txs/invokeScript'
import { getDapps } from './queries/user'

const debug = Debug('observer')

// In
const pollingQueue = queues.pollingQueue
const pollingKey = 'polling'

// Out
const issueTxsQueue = queues.issueTxsQueue
const dataTxsQueue = queues.dataTxsQueue
const invokeTxsQueue = queues.invokeTxsQueue

/**
 * Init process polling queue with repeatable job
 */
export const initProcessPolling = () => {
  pollingQueue.process(pollingKey, processPolling)
}

/**
 * Start repeatable job for polling
 */
export const startPolling = async () => {
  // Duplicate job removal
  await pollingQueue.removeRepeatable(pollingKey, {
    every: config.pollingRepeatEvery,
  })

  // Adding new job with repeating every 5* sec
  await pollingQueue.add(
    pollingKey,
    {},
    {
      repeat: {
        every: config.pollingRepeatEvery,
      },
    },
  )
}

/**
 * Get total completed polls
 */
export const getCompletedCount = async () => {
  return pollingQueue.getCompletedCount()
}

/**
 * Collect and broadcast txs (issues, data, invoke)
 */
const processPolling = async () => {
  try {
    const timeStart = Date.now() - config.fetchOffsetTxs
    const addresses = (await getDapps()).map(dapp => dapp.address)
    const storeAddress = config.dappAddresses.store

    await Promise.all([
      fetchTxs<IssueTransaction>(getIssueTxsForPeriod, issueTxsQueue, addresses, timeStart),
      fetchTxs<DataTransaction>(getDataTxsForPeriod, dataTxsQueue, addresses, timeStart),
      // Listen invoke txs like buy/sell etc.
      fetchTxs<InvokeScriptTransaction>(getInvokeScriptTxsForPeriod, invokeTxsQueue, [storeAddress], timeStart),
    ])
  } catch (err) {
    debug(err.message)
    throw err
  }
}

const fetchTxs = async <Tx>(
  getTxFn: GetTxFunction<Tx>,
  queue: Queue<TxsJobData<Tx>>,
  addresses: string[],
  timeStart: number,
  timeEnd?: number,
) => {
  // Fetch txs for specified addresses
  const txs = await collectTxs<Tx>(getTxFn, addresses, timeStart, timeEnd)

  // Broadcast txs to queue for another service
  await queue.add({ txs, timeStart, timeEnd })
}
