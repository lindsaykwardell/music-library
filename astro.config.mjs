import { defineConfig } from "astro/config";
import elmPlugin from "vite-plugin-elm";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [tailwind()],
  vite: {
    plugins: [elmPlugin.default()],
  },
});
