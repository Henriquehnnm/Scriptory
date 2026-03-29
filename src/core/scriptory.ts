import type { NewScript, Script } from '../shared/types'
import { randomUUID } from 'node:crypto'
import { createDB } from '../data/database'
import { snippetsTable } from '../data/schema'

export const createScript = async (data: NewScript): Promise<Script> => {
  const now = new Date()
  const db = createDB()

  const script: Script = {
    id: randomUUID(),
    ...data,
    createdAt: now,
    updatedAt: now,
  }

  await db.insert(snippetsTable).values({
    ...script,
    tags: JSON.stringify(script.tags),
    createdAt: script.createdAt,
    updateAt: script.updatedAt,
  })

  return script
}
