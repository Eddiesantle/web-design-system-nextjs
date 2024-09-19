# Install dependencies only when needed
FROM node:18-alpine AS deps

ENV NODE_ENV=production

RUN apk add --no-cache libc6-compat bash
WORKDIR /app

# Instale dependências com base no gerenciador de pacotes preferido
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# YARN
# RUN yarn install --froze-lockfile
# RUN yarn add -D typescript @types/react @types/node

# NPM
RUN npm install && \
    npm cache clean --force

RUN npm install --dev typescript

# Reconstruir o código fonte somente quando necessário
FROM node:18-alpine AS builder
ENV NODE_ENV=production
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules


# COPY src/pages ./src/pages
# COPY src/styles ./src/styles
# COPY src/components ./src/components
# COPY src/assets ./src/assets
# COPY src/context ./src/context
COPY . .

# Next.js coleta dados de telemetria completamente anônimos sobre uso geral.
# Saiba mais aqui: https://nextjs.org/telemetry
# Descomente a linha a seguir caso queira desabilitar a telemetria durante a compilação.
# ENV NEXT_TELEMETRY_DISABLED 1

# YARN
# RUN yarn build

# NPM
# Se estiver usando npm, comente acima e use abaixo
RUN npm run build

# Produção de imagem, copie todos os arquivos e execute em seguida
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Descomente a linha a seguir caso queira desabilitar a telemetria durante o tempo de execução.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Alavanque automaticamente os rastreamentos de saída para reduzir o tamanho da imagem
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
CMD ["node", "server.js"]