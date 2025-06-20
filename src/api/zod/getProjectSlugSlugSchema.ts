/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import { z } from 'zod'

export const getProjectSlugPathParamsSchema = z.object({
  slug: z.string(),
})

/**
 * @description Projeto
 */
export const getProjectSlug200Schema = z.any()

export const getProjectSlugQueryResponseSchema = z.lazy(() => getProjectSlug200Schema)