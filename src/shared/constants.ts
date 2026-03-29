import languagesConfig from '../../config/languages.json'
import { z } from 'zod'

export const SUPPORTED_LANGUAGES = languagesConfig.supported as readonly string[]

const LanguagesSchema = z.object({
  supported: z.array(z.string()).readonly(),
})

LanguagesSchema.parse(languagesConfig)
