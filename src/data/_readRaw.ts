import { drizzle } from 'drizzle-orm/bun-sqlite'
import * as schema from './schema'
import { DB_DIR, DB_PATH, prepareDB } from './database'

export const dataRaw = async () => {
  const sqlite = prepareDB(DB_DIR, DB_PATH)
  const db = drizzle(sqlite, { schema })
  const data = await db.query.snippetsTable.findMany()
  return data
}
