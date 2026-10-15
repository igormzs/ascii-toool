import { defineConfig } from 'vite';

export default defineConfig({
  // Served at igor-menezes.com/ascii-tool (the portfolio proxies that path
  // to this deployment). `base` prefixes the asset URLs and `outDir` puts the
  // files at that same path in the deployment, since Vercel serves dist/ as is.
  base: '/ascii-tool/',
  build: { outDir: 'dist/ascii-tool' },
});
