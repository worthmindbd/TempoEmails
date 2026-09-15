# Deploying TempoEmails on Dokploy (VPS)

This guide walks you through deploying **TempoEmails** to your VPS using [Dokploy](https://dokploy.com) and **Nixpacks**.

Dokploy and its built-in **Traefik** reverse proxy handle build packaging, static serving, and Let's Encrypt SSL certificates automatically.

---

## ⚙️ Environment Variables (`prod.env`)

Refer to [`prod.env`](./prod.env):

| Variable | Description | Example | When needed |
| :--- | :--- | :--- | :--- |
| `SITE_URL` | Canonical public URL (drives redirects, `Astro.site`, canonical/hreflang tags) | `https://tempoemails.com` | **Build time** (baked into static HTML) |
| `PORT` | Port the Node server listens on | `4321` | Runtime |
| `HOST` | Bind address | `0.0.0.0` | Runtime |
| `PUBLIC_GOOGLE_ANALYTICS_ID` | Google Analytics 4 Measurement ID | `G-XXXXXXXXXX` | **Build time** (baked into HTML) |
| `PUBLIC_GOOGLE_ADSENSE_ID` | Google AdSense Publisher ID | `ca-pub-XXXXXXXXXXXXXXXX` | **Build time** (baked into HTML) |

> `PUBLIC_*` variables are baked in at `npm run build` — set them in Dokploy **before** the build runs, not just at runtime.

---

## 🚀 Deployment Steps (Nixpacks)

1. **Log in to your Dokploy Dashboard**.
2. Navigate to your **Project** and click **Create Service** → **Application**.
3. Fill in the details:
   - **Name**: `tempoemails`
   - **Port**: `4321`
4. In the **Provider / Source** tab:
   - Select **GitHub** (or **Git**).
   - Choose your repository and the branch (`main`).
5. In the **Build** tab:
   - **Build Type**: Select **`Nixpacks`**.
6. In the **Environment Variables** tab:
   - Paste the contents of your [`prod.env`](./prod.env) file.
   - Make sure `SITE_URL` matches your public domain (it controls canonical redirects and SEO tags) and that all `PUBLIC_*` values are set **before** the build step.
7. In the **Domains** tab:
   - Click **Add Domain**.
   - **Domain**: `tempoemails.com` (and optionally `www.tempoemails.com`).
   - **Path**: `/`
   - **Port**: `4321`
   - **Certificate**: Select **Let's Encrypt** (automatic SSL).
   - **HTTPS**: Enabled.
8. Click **Deploy**.

Dokploy will automatically build the Astro static site using [`nixpacks.toml`](./nixpacks.toml) and route your domain via Traefik.

---

## 🔄 Automated CI/CD (Auto-Deploy on Git Push)

To enable automatic redeployment whenever you push changes to your repository:

1. In Dokploy, go to your Application's **Deployments** or **General** tab.
2. Copy the **Webhook URL**.
3. In GitHub / GitLab:
   - Go to your repository **Settings** → **Webhooks** → **Add Webhook**.
   - **Payload URL**: Paste your Dokploy Webhook URL.
   - **Content type**: `application/json`.
   - **Events**: Just the `push` event.
4. Save the webhook. Every `git push` will now trigger an automatic zero-downtime rebuild and rollout.
