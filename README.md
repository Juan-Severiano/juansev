# Portfólio Pessoal com Painel Administrativo

Este projeto é um portfólio pessoal construído com Next.js, TypeScript e React Query, apresentando seus projetos, habilidades e certificações. Ele inclui um painel administrativo robusto para gerenciar todo o conteúdo de forma dinâmica.

## Funcionalidades

### Site Público
- **Página Inicial:** Apresenta uma visão geral sobre você, suas habilidades e uma seção de projetos.
- **Seção de Projetos:** Exibe uma lista dos seus projetos com detalhes, links e tecnologias utilizadas.
- **Seção de Habilidades:** Detalha suas competências técnicas e ferramentas que você utiliza.
- **Seção de Certificações:** Mostra suas certificações com links para verificação.
- **Contato:** Formulário ou links diretos para suas redes sociais e email.

### Painel Administrativo (`/master-jedi`)
Um painel completo para gerenciar o conteúdo do portfólio, incluindo operações CRUD (Criar, Ler, Atualizar, Deletar) para:
- **Usuários:** Gerenciamento de contas de acesso ao painel.
- **Certificados:** Adicionar, editar e remover suas certificações.
- **Projetos:** Gerenciar detalhes de projetos, incluindo nome, descrição, links, habilidades e imagens.
- **Empresas:** Gerenciar informações sobre empresas onde você trabalhou ou colaborou.
- **Links:** Gerenciar links associados a projetos (GitHub, Figma, URL Pública).
- **Autenticação:** Sistema de login seguro para acesso ao painel.

## Tecnologias Utilizadas

- **Next.js 15:** Framework React para aplicações web de alto desempenho, com SSR e SSG.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática para maior segurança e manutenibilidade do código.
- **React Query:** Biblioteca poderosa para gerenciamento de estado assíncrono, cache e sincronização de dados com a API.
- **Tailwind CSS:** Framework CSS utilitário para estilização rápida e responsiva.
- **NextAuth.js:** Solução de autenticação flexível para Next.js.
- **Axios:** Cliente HTTP baseado em Promises para fazer requisições à API.

## Primeiros Passos

Para configurar e executar o projeto em sua máquina local, siga estas instruções.

### Pré-requisitos
Certifique-se de ter o Node.js (versão 18 ou superior) e o npm (ou Yarn) instalados.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js) ou [Yarn](https://yarnpkg.com/)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd <NOME_DO_SEU_REPOSITORIO>
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Variáveis de Ambiente:**
    Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes variáveis:
    ```env
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=SEU_SEGREDO_MUITO_FORTE_E_ALEATORIO
    # A API de backend deve estar rodando em http://localhost:3333
    # Se sua API estiver em outro lugar, ajuste a baseURL nos arquivos de serviço em src/api/services/
    ```
    *   `NEXTAUTH_URL`: A URL base da sua aplicação Next.js.
    *   `NEXTAUTH_SECRET`: Uma string secreta longa e aleatória usada para criptografar tokens. Você pode gerar uma com `openssl rand -base64 32`.

### Executando o Servidor de Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

O aplicativo estará acessível em `http://localhost:3000`.

### Construindo para Produção

```bash
npm run build
# ou
yarn build
```

Para iniciar o servidor de produção:

```bash
npm run start
# ou
yarn start
```

## Como Usar

### Site Público
Basta acessar `http://localhost:3000` no seu navegador. A navegação entre as seções (Projetos, Habilidades, Certificações) é feita através do menu superior.

### Painel Administrativo

1.  **Acesso:** Navegue para `http://localhost:3000/master-jedi`.
2.  **Primeiro Admin:** Se esta for a primeira vez que você acessa o painel, você será redirecionado para `http://localhost:3000/master-jedi/first-admin` para criar o primeiro usuário administrador. Preencha os dados e crie a conta.
3.  **Login:** Após criar o primeiro admin (ou se já tiver um), você será redirecionado para a página de login (`http://localhost:3000/login`). Use as credenciais do usuário administrador para entrar.
4.  **Gerenciamento:** Uma vez logado, você terá acesso ao menu lateral para gerenciar Usuários, Certificados, Projetos, Empresas e Links.

## Estrutura do Projeto (Alto Nível)

```
. # Raiz do Projeto
├── public/             # Arquivos estáticos
├── src/
│   ├── api/            # Nova camada de API (services, hooks, types)
│   │   ├── hooks/      # Hooks customizados do React Query
│   │   ├── services/   # Funções de serviço para interagir com a API de backend
│   │   └── types.ts    # Definições de tipos para as entidades da API
│   ├── app/            # Rotas e layouts do Next.js
│   │   ├── (public)/   # Rotas públicas do site
│   │   ├── master-jedi/ # Rotas do painel administrativo
│   │   └── layout.tsx  # Layouts globais
│   ├── assets/         # Ativos como imagens, dados mockados (se houver)
│   ├── components/     # Componentes UI reutilizáveis
│   ├── features/       # Módulos de funcionalidades (ex: home, auth)
│   └── lib/            # Funções utilitárias
├── .env.local          # Variáveis de ambiente (não versionado)
├── package.json        # Dependências e scripts do projeto
└── README.md           # Este arquivo
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.