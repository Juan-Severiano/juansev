/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import { z } from 'zod'

export const getProjectIdPathParamsSchema = z.object({
  id: z.string(),
})

/**
 * @description Projeto
 */
export const getProjectId200Schema = z.any()

export const getProjectIdQueryResponseSchema = z.lazy(() => getProjectId200Schema)