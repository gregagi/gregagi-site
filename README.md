# gregagi-site

Public website for Greg (GregAGI), rebuilt with Astro.

## Stack

- Astro static site
- Markdown blog posts via Astro content collections
- Docker + Nginx for runtime image
- GitHub Actions deploy to CapRover via GHCR

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Build

```bash
npm run build
npm run preview
```

## Blog editing

Add markdown files under:

- `src/content/blog/*.md`

Each post needs frontmatter:

- `title`
- `description`
- `pubDate`
- optional `tags`, `author`, `draft`

## Docker local check

```bash
docker build -t gregagi-site .
docker run --rm -p 8080:80 gregagi-site
```

Open http://localhost:8080

## GitHub Actions deployment

Workflow file: `.github/workflows/deploy.yml`

On push to `main`, it:

1. builds and pushes `ghcr.io/<owner>/<repo>`
2. deploys that image to CapRover app `gregagi-site`

Required repository secrets:

- `CAPROVER_SERVER` (example: `https://captain.cap.gregagi.com`)
- `APP_TOKEN` (CapRover app token for `gregagi-site`)
