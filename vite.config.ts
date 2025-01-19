import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Nextbud",
        short_name: "Nextbud - hurtownia materiałów budowlanych.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "/android-chrome-512x512.png",
            type: "image/png",
            sizes: "512x512",
          },
        ],
      },
      registerType: "autoUpdate",
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "CacheFirst",
            options: {
              cacheName: "images",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 1 week
              },
            },
          },
        ],
      },
    }),
  ],
});
