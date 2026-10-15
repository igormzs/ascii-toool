import { defineConfig } from 'vite';

export default defineConfig({
  // Served at igor-menezes.com/ascii-tool (the portfolio proxies that path
  // to this deployment), so built asset URLs carry this prefix.
  base: '/ascii-tool/',
});
