/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios'
import type { GetProjectIdQueryResponse, GetProjectIdPathParams } from '../../types/GetProjectId.ts'
import type { RequestConfig, ResponseErrorConfig, ResponseConfig } from '@kubb/plugin-client/clients/axios'
import type { InfiniteData, QueryKey, QueryClient, InfiniteQueryObserverOptions, UseInfiniteQueryResult } from '@tanstack/react-query'
import { infiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query'

export const getProjectIdInfiniteQueryKey = (id: GetProjectIdPathParams['id']) => [{ url: '/project/:id', params: { id: id } }] as const

export type GetProjectIdInfiniteQueryKey = ReturnType<typeof getProjectIdInfiniteQueryKey>

/**
 * @summary Buscar projeto por ID
 * {@link /project/:id}
 */
export async function getProjectIdInfinite(id: GetProjectIdPathParams['id'], config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetProjectIdQueryResponse, ResponseErrorConfig<Error>, unknown>({ method: 'GET', url: `/project/${id}`, ...requestConfig })
  return res
}

export function getProjectIdInfiniteQueryOptions(id: GetProjectIdPathParams['id'], config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const queryKey = getProjectIdInfiniteQueryKey(id)
  return infiniteQueryOptions<
    ResponseConfig<GetProjectIdQueryResponse>,
    ResponseErrorConfig<Error>,
    ResponseConfig<GetProjectIdQueryResponse>,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return getProjectIdInfinite(id, config)
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage['nextCursor'],
    getPreviousPageParam: (firstPage) => firstPage['nextCursor'],
  })
}

/**
 * @summary Buscar projeto por ID
 * {@link /project/:id}
 */
export function useGetProjectIdInfinite<
  TData = InfiniteData<ResponseConfig<GetProjectIdQueryResponse>>,
  TQueryData = ResponseConfig<GetProjectIdQueryResponse>,
  TQueryKey extends QueryKey = GetProjectIdInfiniteQueryKey,
>(
  id: GetProjectIdPathParams['id'],
  options: {
    query?: Partial<InfiniteQueryObserverOptions<ResponseConfig<GetProjectIdQueryResponse>, ResponseErrorConfig<Error>, TData, TQueryKey>> & {
      client?: QueryClient
    }
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getProjectIdInfiniteQueryKey(id)

  const query = useInfiniteQuery(
    {
      ...(getProjectIdInfiniteQueryOptions(id, config) as unknown as InfiniteQueryObserverOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<InfiniteQueryObserverOptions, 'queryKey'>),
    },
    queryClient,
  ) as UseInfiniteQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}