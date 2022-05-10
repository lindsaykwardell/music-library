import { defineConfig } from 'astro/config';
import elmPlugin from "vite-plugin-elm";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [elmPlugin.default()]
  },
  integrations: [tailwind()]
});