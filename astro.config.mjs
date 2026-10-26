import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base = repository && repository !== 'asxuan0813.github.io' ? `/${repository}` : '/';

export default defineConfig({
  site: 'https://asxuan0813.github.io',
  base,
});
