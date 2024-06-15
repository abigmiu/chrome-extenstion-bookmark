import { openDB } from 'idb'
import type { IRecord } from '~/types/record'

const recordDbVersion1 = 1
const recordDbName = 'record'
const recordStoreName = 'records'
const newestVersion = recordDbVersion1

export async function createRecordDb() {
  const recordDb = await openDB(recordDbName, recordDbVersion1, {
    upgrade(db) {
      db.createObjectStore(recordStoreName, {
        autoIncrement: true,
        keyPath: 'id',
      })
    },
  })

  return recordDb
}

export async function saveRecord(value: IRecord) {
  const recordDb = await openDB(recordDbName, newestVersion)
  recordDb.put(recordStoreName, value)
}
