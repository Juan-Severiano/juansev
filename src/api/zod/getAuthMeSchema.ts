/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import { z } from 'zod'

/**
 * @description Usuário autenticado
 */
export const getAuthMe200Schema = z.any()

export const getAuthMeQueryResponseSchema = z.lazy(() => getAuthMe200Schema)