import { drizzle } from 'drizzle-orm/bun-sqlite'
import { Database } from 'bun:sqlite'
import * as schema from './schema'
import fs from 'node:fs'
import { join } from 'node:path'
import { homedir } from 'node:os'

export const prepareDB = (dir: string, path: string) => {
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    const db = new Database(path, { create: true })
    return db
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

export const DB_DIR = join(homedir(), '.local', 'share', 'scriptory', 'db')
export const DB_PATH = join(DB_DIR, 'snippets.sqlite')

export const createDB = () => {
  const sqlite = prepareDB(DB_DIR, DB_PATH)
  const db = drizzle(sqlite, { schema })
  sqlite.run(
    ` CREATE TABLE IF NOT EXISTS \`snippets_table\` (
      \`id\` text PRIMARY KEY NOT NULL,
      \`title\` text NOT NULL,
      \`content\` text NOT NULL,
      \`language\` text DEFAULT 'markdown' NOT NULL,
      \`description\` text,
      \`tags\` text,
      \`created_at\` integer NOT NULL,
      \`update_at\` integer NOT NULL
    );
  `,
  )
  return db
}

// TODO - tratar possíveis erros
export const getDB = () => {
  const sqlite = prepareDB(DB_DIR, DB_PATH)
  const db = drizzle(sqlite, { schema })
  return db
}
