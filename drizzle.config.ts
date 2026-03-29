import { homedir } from 'node:os'
import { join } from 'node:path'

// drizzle.config.ts
import type { Config } from 'drizzle-kit'

export default {
  schema: './src/data/schema.ts',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: join(homedir(), '.local', 'share', 'scriptory', 'db', 'snippets.sqlite'),
  },
} satisfies Config
