# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

## GitHub Pages deploy

This repository uses a GitHub Action to build the Nuxt site on pushes to `main` and publish the generated static output to the `gh-pages` branch.

To preview locally:

```bash
npm ci
npx nuxi generate
# serve the generated .output/public folder with a static server
npx serve ./.output/public
```

Notes on GitHub Actions permissions:

- The workflow uses the automatically provided `GITHUB_TOKEN` to push the built site to the `gh-pages` branch. The workflow sets `permissions: contents: write` so the token can push. If you have branch protection rules blocking pushes to `gh-pages`, you'll need to allow the `github-actions` app or adjust protection rules so the action can publish.


# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
