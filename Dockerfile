# syntax=docker/dockerfile:1

# -----------------------------------------------------------------------------
# Stage 1: Build stage
# -----------------------------------------------------------------------------
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies using package-lock.json for reproducible builds
COPY package.json package-lock.json ./
RUN npm ci

# Copy project files
COPY . .

# Optional build argument for production domain (used for canonical URLs & sitemap)
ARG SITE_URL="https://tempoemails.dev"
ENV SITE_URL=$SITE_URL

# Build static Astro files to /app/dist
RUN npm run build

# -----------------------------------------------------------------------------
# Stage 2: Production NGINX server
# -----------------------------------------------------------------------------
FROM nginx:alpine AS runner

# Remove default NGINX configuration
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy custom NGINX configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 3012 (Set Dokploy container port to 3012)
EXPOSE 3012

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:3012/healthz || exit 1

# Start NGINX in foreground
CMD ["nginx", "-g", "daemon off;"]
