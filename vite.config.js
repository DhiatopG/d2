import { defineConfig } from 'vite';

// Plugin: converts Vite's injected blocking CSS <link> into a non-blocking preload pattern.
// This runs automatically on every `npm run build`, even as the CSS hash changes.
function nonBlockingCss() {
  return {
    name: 'non-blocking-css',
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/g,
        (_, href) =>
          `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'">` +
          `\n    <noscript><link rel="stylesheet" href="${href}"></noscript>`
      );
    },
  };
}

export default defineConfig({
  plugins: [nonBlockingCss()],
});
