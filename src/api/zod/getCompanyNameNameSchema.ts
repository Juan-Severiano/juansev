/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import { z } from 'zod'

export const getCompanyNamePathParamsSchema = z.object({
  name: z.string(),
})

/**
 * @description Empresa
 */
export const getCompanyName200Schema = z.any()

export const getCompanyNameQueryResponseSchema = z.lazy(() => getCompanyName200Schema)