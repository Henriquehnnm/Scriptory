import type { SUPPORTED_LANGUAGES } from './constants'

export type Language = (typeof SUPPORTED_LANGUAGES)[number]

export interface Script {
  id: string
  title: string
  content: string
  language: Language
  description?: string
  tags: string[]
  createdAt: Date
  updatedAt: Date
}

export type NewScript = Omit<Script, 'id' | 'createdAt' | 'updatedAt'>
