/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import { createCompanyDtoSchema } from './createCompanyDtoSchema.ts'
import { z } from 'zod'

export const patchCompanyIdPathParamsSchema = z.object({
  id: z.string(),
})

/**
 * @description Empresa atualizada
 */
export const patchCompanyId200Schema = z.any()

export const patchCompanyIdMutationRequestSchema = z.lazy(() => createCompanyDtoSchema)

export const patchCompanyIdMutationResponseSchema = z.lazy(() => patchCompanyId200Schema)