// eslint-disable-next-line
/// <reference types="vitest" />
// eslint-disable-next-line
/// <reference types="vite/client" />

import react                  from "@vitejs/plugin-react"
import { resolve }            from "node:path"
import { defineConfig }       from "vite"
import viteCompression        from "vite-plugin-compression"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"

// https://vitejs.dev/config/
export default defineConfig( {
                               base   : "/odin-invidious/",
                               build  : {
                                 rollupOptions: {
                                   input: {
                                     main    : resolve( __dirname,
                                                        "index.html",
                                     ),
                                     notFound: resolve( __dirname, "404.html" ),
                                   },
                                 },
                               },
                               define : {
                                 "process.env": {},
                               },
                               plugins: [ react(),
                                          viteCompression(),
                                          ViteImageOptimizer(),
                               ],
                               test   : {
                                 clearMocks : true,
                                 environment: "jsdom",
                                 globals    : true,
                                 update     : true,
                               },
                             } )
