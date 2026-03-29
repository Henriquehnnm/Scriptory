import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import type { Language } from '../shared/types'

export const snippetsTable = sqliteTable('snippets_table', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  language: text('language').notNull().default('markdown').$type<Language>(),
  description: text('description'),
  tags: text('tags'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updateAt: integer('update_at', { mode: 'timestamp' }).notNull(),
})
