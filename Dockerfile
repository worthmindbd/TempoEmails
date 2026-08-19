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

# Build arguments for production configuration, SEO, Analytics & AdSense
ARG SITE_URL="https://tempoemails.com"
ARG PUBLIC_SITE_URL="https://tempoemails.com"
ARG PUBLIC_DOMAIN="tempoemails.com"
ARG PUBLIC_GOOGLE_ANALYTICS_ID=""
ARG PUBLIC_GOOGLE_ADSENSE_ID=""
ARG PUBLIC_GOOGLE_ADSENSE_SLOT_ID=""
ARG PUBLIC_GTM_ID=""
ARG PUBLIC_GOOGLE_SITE_VERIFICATION=""
ARG PUBLIC_BING_SITE_VERIFICATION=""
ARG PUBLIC_YANDEX_VERIFICATION=""
ARG PUBLIC_PLAUSIBLE_DOMAIN=""
ARG PUBLIC_UMAMI_WEBSITE_ID=""
ARG PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN=""

ENV SITE_URL=$SITE_URL
ENV PUBLIC_SITE_URL=$PUBLIC_SITE_URL
ENV PUBLIC_DOMAIN=$PUBLIC_DOMAIN
ENV PUBLIC_GOOGLE_ANALYTICS_ID=$PUBLIC_GOOGLE_ANALYTICS_ID
ENV PUBLIC_GOOGLE_ADSENSE_ID=$PUBLIC_GOOGLE_ADSENSE_ID
ENV PUBLIC_GOOGLE_ADSENSE_SLOT_ID=$PUBLIC_GOOGLE_ADSENSE_SLOT_ID
ENV PUBLIC_GTM_ID=$PUBLIC_GTM_ID
ENV PUBLIC_GOOGLE_SITE_VERIFICATION=$PUBLIC_GOOGLE_SITE_VERIFICATION
ENV PUBLIC_BING_SITE_VERIFICATION=$PUBLIC_BING_SITE_VERIFICATION
ENV PUBLIC_YANDEX_VERIFICATION=$PUBLIC_YANDEX_VERIFICATION
ENV PUBLIC_PLAUSIBLE_DOMAIN=$PUBLIC_PLAUSIBLE_DOMAIN
ENV PUBLIC_UMAMI_WEBSITE_ID=$PUBLIC_UMAMI_WEBSITE_ID
ENV PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN=$PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN

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
