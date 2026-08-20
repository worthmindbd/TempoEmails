# syntax=docker/dockerfile:1

# Stage 1: Build
FROM node:22-alpine AS builder
WORKDIR /app

ENV NODE_ENV=production
ENV ASTRO_TELEMETRY_DISABLED=1

COPY package.json package-lock.json* .npmrc* ./
RUN npm ci --include=dev

COPY . .
RUN npm run build

# Stage 2: Runner
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321
ENV ASTRO_TELEMETRY_DISABLED=1

COPY --from=builder /app/package.json /app/package-lock.json* ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/astro.config.mjs ./

EXPOSE 4321

CMD ["npm", "run", "start"]
