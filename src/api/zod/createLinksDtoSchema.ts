/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import { z } from 'zod'

export const createLinksDtoSchema = z.object({
  github: z.string(),
  figma: z.string(),
  publicUrl: z.string(),
})