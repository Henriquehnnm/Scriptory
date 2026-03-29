import { getDB } from '../../data/database'
import { snippetsTable } from '../../data/schema'
import { or, like } from 'drizzle-orm'

export const findScript = (term: string) => {
  const db = getDB()
  return db
    .select()
    .from(snippetsTable)
    .where(or(like(snippetsTable.title, `%${term}`), like(snippetsTable.title, `%${term}`)))
    .all()
}

const data = findScript('Git Aliases Úteis')
console.log(data)
