/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import { z } from 'zod'

export const createCompanyDtoSchema = z.object({
  name: z.string(),
  description: z.string(),
  startDate: z.string().datetime(),
  endDate: z.string().datetime().optional(),
  responsibleName: z.string(),
  responsibleRole: z.string(),
})