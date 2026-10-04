import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";

const PLACEHOLDER = "{{PRODUCTION_URL}}";

// The public origin, without a trailing slash. Set PRODUCTION_URL in Vercel when the guide
// moves to another domain; the files then add their own path ("/", "/sitemap.xml", "/og.png").
const productionUrl = (process.env.PRODUCTION_URL ?? "https://web-guide-chi.vercel.app").replace(/\/+$/, "");

function files(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? files(path) : [path];
  });
}

/**
 * index.html is rewritten through Vite. robots.txt and sitemap.xml are copied from public/
 * untouched, so they are rewritten after the bundle is written. Any placeholder left anywhere
 * in dist/ after that fails the build, so a literal {{PRODUCTION_URL}} can never ship again.
 */
function productionUrlPlugin(): Plugin {
  let outDir = "dist";
  return {
    name: "production-url",
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    transformIndexHtml(html) {
      return html.split(PLACEHOLDER).join(productionUrl);
    },
    closeBundle() {
      const leftovers: string[] = [];
      for (const path of files(outDir)) {
        const isText = /\.(html|xml|txt|json|webmanifest)$/.test(path);
        let content = readFileSync(path, isText ? "utf8" : "latin1");
        if (isText && content.includes(PLACEHOLDER)) {
          content = content.split(PLACEHOLDER).join(productionUrl);
          writeFileSync(path, content);
        }
        if (content.includes(PLACEHOLDER)) leftovers.push(relative(outDir, path));
      }
      if (leftovers.length) {
        throw new Error(`${PLACEHOLDER} is still in the build output: ${leftovers.join(", ")}`);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), productionUrlPlugin()],
  server: { port: 3000, open: true },
  preview: { port: 3000 },
});
