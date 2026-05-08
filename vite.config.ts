import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import type { Plugin } from 'vite';

// Plugin to serve .md files from public directory
function markdownPlugin(): Plugin {
  return {
    name: 'markdown-static',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // Check if the request is for a .md file
        if (req.url && req.url.endsWith('.md')) {
          const publicPath = join(process.cwd(), 'public', req.url);
          if (existsSync(publicPath)) {
            const content = readFileSync(publicPath, 'utf-8');
            res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
            res.end(content);
            return;
          } else {
            // Return 404 for non-existent .md files instead of falling back to SPA
            res.statusCode = 404;
            res.end('Markdown file not found');
            return;
          }
        }
        next();
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), markdownPlugin()],
  publicDir: 'public',
  // Ensure .md files are treated as static assets
  assetsInclude: ['**/*.md']
})
