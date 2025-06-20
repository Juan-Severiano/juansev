/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios'
import type { GetProjectIdQueryResponse, GetProjectIdPathParams } from '../../types/GetProjectId.ts'
import type { RequestConfig, ResponseErrorConfig, ResponseConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const getProjectIdQueryKey = (id: GetProjectIdPathParams['id']) => [{ url: '/project/:id', params: { id: id } }] as const

export type GetProjectIdQueryKey = ReturnType<typeof getProjectIdQueryKey>

/**
 * @summary Buscar projeto por ID
 * {@link /project/:id}
 */
export async function getProjectId(id: GetProjectIdPathParams['id'], config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetProjectIdQueryResponse, ResponseErrorConfig<Error>, unknown>({ method: 'GET', url: `/project/${id}`, ...requestConfig })
  return res
}

export function getProjectIdQueryOptions(id: GetProjectIdPathParams['id'], config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const queryKey = getProjectIdQueryKey(id)
  return queryOptions<ResponseConfig<GetProjectIdQueryResponse>, ResponseErrorConfig<Error>, ResponseConfig<GetProjectIdQueryResponse>, typeof queryKey>({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return getProjectId(id, config)
    },
  })
}

/**
 * @summary Buscar projeto por ID
 * {@link /project/:id}
 */
export function useGetProjectId<
  TData = ResponseConfig<GetProjectIdQueryResponse>,
  TQueryData = ResponseConfig<GetProjectIdQueryResponse>,
  TQueryKey extends QueryKey = GetProjectIdQueryKey,
>(
  id: GetProjectIdPathParams['id'],
  options: {
    query?: Partial<QueryObserverOptions<ResponseConfig<GetProjectIdQueryResponse>, ResponseErrorConfig<Error>, TData, TQueryData, TQueryKey>> & {
      client?: QueryClient
    }
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getProjectIdQueryKey(id)

  const query = useQuery(
    {
      ...(getProjectIdQueryOptions(id, config) as unknown as QueryObserverOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
    },
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}