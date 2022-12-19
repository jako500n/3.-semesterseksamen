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
        betalt: resolve(__dirname, "src/betalt.html"),
        design_selv: resolve(__dirname, "src/design_selv.html"),
        gavekort: resolve(__dirname, "src/gavekort.html"),
        indkoebskurv: resolve(__dirname, "src/indkoebskurv.html"),
        koeb_leveringsmetode: resolve(
          __dirname,
          "src/koeb_leveringsmetode.html"
        ),
        koeb_oplysninger: resolve(__dirname, "src/koeb_oplysninger.html"),
        koebsproces_afhent_01: resolve(
          __dirname,
          "src/koebsproces_afhent_01.html"
        ),
        koebsproces_post_01: resolve(__dirname, "src/koebsproces_post_01.html"),
        komponenter: resolve(__dirname, "src/komponenter.html"),
        om_julie: resolve(__dirname, "src/om_julie.html"),
        shop: resolve(__dirname, "src/shop.html"),
        single_view: resolve(__dirname, "src/single_view.html"),
        sitemap: resolve(__dirname, "src/sitemap.html"),
      },
    },
  },
});
