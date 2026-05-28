# NewGen Next.js

Landing page demo built with:

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Swiper.js
- Lucide React

## Local development

```bash
npm install
npm run dev
```

## Environment variables

This app supports runtime override for admin API proxy:

- `IOT_ADMIN_API_ORIGIN` (optional)
- Default value in code: `https://web.iot-platform.io.vn`

## Docker (local)

Build image:

```bash
docker build -t newgen:local .
```

Run container:

```bash
docker run --rm -p 3000:3000 \
  -e IOT_ADMIN_API_ORIGIN=https://web.iot-platform.io.vn \
  newgen:local
```

Open: `http://localhost:3000`

## GHCR image

The GitHub Action publishes to:

- `ghcr.io/nta24/newgen:latest`
- `ghcr.io/nta24/newgen:sha-<short_commit>`

Pull and run:

```bash
docker pull ghcr.io/nta24/newgen:latest
docker run --rm -p 3000:3000 ghcr.io/nta24/newgen:latest
```

## CI publish workflow

Workflow file: `.github/workflows/docker-publish.yml`

- Trigger: push to `main`
- Registry: GHCR (`ghcr.io`)
- Platform: `linux/amd64`
- Tags: `latest` and `sha-*`
- Cache: `type=gha`

If package visibility is not public by default, set it to `Public` once in GitHub Packages.
