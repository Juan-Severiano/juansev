/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import { createUserDtoSchema } from './createUserDtoSchema.ts'
import { userSchema } from './userSchema.ts'
import { z } from 'zod'

/**
 * @description Usuário criado
 */
export const postUser200Schema = z.lazy(() => userSchema)

export const postUserMutationRequestSchema = z.lazy(() => createUserDtoSchema)

export const postUserMutationResponseSchema = z.lazy(() => postUser200Schema)