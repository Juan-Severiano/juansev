// kubb.config.ts
import { defineConfig } from '@kubb/core'
import { pluginTs } from '@kubb/plugin-ts'
import { pluginOas } from '@kubb/plugin-oas'
import { pluginZod } from '@kubb/plugin-zod'
import { pluginReactQuery } from '@kubb/plugin-react-query'

export default defineConfig({
  input: {
    path: './scheme.json',
  },
  output: {
    path: './src/api',
    clean: true,
  },
  plugins: [
    pluginTs(),
    pluginZod(),
    pluginOas(),
    pluginReactQuery({
      output: {
        path: './hooks',
      },
      group: {
        type: 'tag',
        name: ({ group }) => `${group}Hooks`,
      },
      client: {
        dataReturnType: 'full',
      },
      mutation: {
        methods: ['post', 'put', 'delete'],
      },
      infinite: {
        queryParam: 'next_page',
        initialPageParam: 0,
        cursorParam: 'nextCursor',
      },
      query: {
        methods: ['get'],
        importPath: "@tanstack/react-query"
      },
      suspense: {},
    }),
  ],
})
