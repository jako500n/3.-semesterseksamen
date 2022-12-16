// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        komponenter: resolve(__dirname, "src/komponenter.html"),
        design_selv: resolve(__dirname, "src/design_selv.html"),
        gavekort: resolve(__dirname, "src/gavekort.html"),
        indkoebskurv: resolve(__dirname, "src/indkoebskurv.html"),
        om_julie: resolve(__dirname, "src/om_julie.html"),
        shop: resolve(__dirname, "src/shop.html"),
        single_view: resolve(__dirname, "src/single_view.html"),
      },
    },
  },
});
