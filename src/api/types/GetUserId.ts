/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { User } from './User.ts'

export type GetUserIdPathParams = {
  /**
   * @type string
   */
  id: string
}

/**
 * @description Usuário
 */
export type GetUserId200 = User

export type GetUserIdQueryResponse = GetUserId200

export type GetUserIdQuery = {
  Response: GetUserId200
  PathParams: GetUserIdPathParams
  Errors: any
}