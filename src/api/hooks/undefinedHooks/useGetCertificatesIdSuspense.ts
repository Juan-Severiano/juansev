/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios'
import type { GetCertificatesIdQueryResponse, GetCertificatesIdPathParams } from '../../types/GetCertificatesId.ts'
import type { RequestConfig, ResponseErrorConfig, ResponseConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryClient, UseSuspenseQueryOptions, UseSuspenseQueryResult } from '@tanstack/react-query'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

export const getCertificatesIdSuspenseQueryKey = (id: GetCertificatesIdPathParams['id']) => [{ url: '/certificates/:id', params: { id: id } }] as const

export type GetCertificatesIdSuspenseQueryKey = ReturnType<typeof getCertificatesIdSuspenseQueryKey>

/**
 * @summary Buscar certificado por ID
 * {@link /certificates/:id}
 */
export async function getCertificatesIdSuspense(id: GetCertificatesIdPathParams['id'], config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetCertificatesIdQueryResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'GET',
    url: `/certificates/${id}`,
    ...requestConfig,
  })
  return res
}

export function getCertificatesIdSuspenseQueryOptions(id: GetCertificatesIdPathParams['id'], config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const queryKey = getCertificatesIdSuspenseQueryKey(id)
  return queryOptions<
    ResponseConfig<GetCertificatesIdQueryResponse>,
    ResponseErrorConfig<Error>,
    ResponseConfig<GetCertificatesIdQueryResponse>,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return getCertificatesIdSuspense(id, config)
    },
  })
}

/**
 * @summary Buscar certificado por ID
 * {@link /certificates/:id}
 */
export function useGetCertificatesIdSuspense<
  TData = ResponseConfig<GetCertificatesIdQueryResponse>,
  TQueryKey extends QueryKey = GetCertificatesIdSuspenseQueryKey,
>(
  id: GetCertificatesIdPathParams['id'],
  options: {
    query?: Partial<UseSuspenseQueryOptions<ResponseConfig<GetCertificatesIdQueryResponse>, ResponseErrorConfig<Error>, TData, TQueryKey>> & {
      client?: QueryClient
    }
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getCertificatesIdSuspenseQueryKey(id)

  const query = useSuspenseQuery(
    {
      ...(getCertificatesIdSuspenseQueryOptions(id, config) as unknown as UseSuspenseQueryOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<UseSuspenseQueryOptions, 'queryKey'>),
    },
    queryClient,
  ) as UseSuspenseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}