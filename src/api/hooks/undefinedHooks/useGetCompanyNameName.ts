/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios'
import type { GetCompanyNameQueryResponse, GetCompanyNamePathParams } from '../../types/GetCompanyNameName.ts'
import type { RequestConfig, ResponseErrorConfig, ResponseConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const getCompanyNameNameQueryKey = (name: GetCompanyNamePathParams['name']) => [{ url: '/company/name/:name', params: { name: name } }] as const

export type GetCompanyNameNameQueryKey = ReturnType<typeof getCompanyNameNameQueryKey>

/**
 * @summary Buscar empresa por nome
 * {@link /company/name/:name}
 */
export async function getCompanyNameName(name: GetCompanyNamePathParams['name'], config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetCompanyNameQueryResponse, ResponseErrorConfig<Error>, unknown>({ method: 'GET', url: `/company/name/${name}`, ...requestConfig })
  return res
}

export function getCompanyNameNameQueryOptions(name: GetCompanyNamePathParams['name'], config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const queryKey = getCompanyNameNameQueryKey(name)
  return queryOptions<ResponseConfig<GetCompanyNameQueryResponse>, ResponseErrorConfig<Error>, ResponseConfig<GetCompanyNameQueryResponse>, typeof queryKey>({
    enabled: !!name,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return getCompanyNameName(name, config)
    },
  })
}

/**
 * @summary Buscar empresa por nome
 * {@link /company/name/:name}
 */
export function useGetCompanyNameName<
  TData = ResponseConfig<GetCompanyNameQueryResponse>,
  TQueryData = ResponseConfig<GetCompanyNameQueryResponse>,
  TQueryKey extends QueryKey = GetCompanyNameNameQueryKey,
>(
  name: GetCompanyNamePathParams['name'],
  options: {
    query?: Partial<QueryObserverOptions<ResponseConfig<GetCompanyNameQueryResponse>, ResponseErrorConfig<Error>, TData, TQueryData, TQueryKey>> & {
      client?: QueryClient
    }
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getCompanyNameNameQueryKey(name)

  const query = useQuery(
    {
      ...(getCompanyNameNameQueryOptions(name, config) as unknown as QueryObserverOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
    },
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}