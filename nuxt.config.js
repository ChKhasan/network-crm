export default {
  head: {
    title: "JustLink Crm",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
  },

  css: ["ant-design-vue/dist/antd.css", "@/assets/css/main.css"],

  plugins: [
    "@/plugins/antd-ui",
    "~/plugins/axios",
    "~/plugins/axios-instance",
    {
      src: "~plugins/vue-otp-input.js",
      ssr: false,
    },
    {
      src: "~plugins/v-mask.js",
      ssr: false,
    },
    { src: "~plugins/quill-editor.js", ssr: false },
  ],
  server: {
    host: "localhost",
    port: 8000,
  },
  loadingIndicator: {
    name: "folding-cube",
    color: "#1890ff",
    background: "white",
  },
  ssr: false,
  components: true,
  buildModules: ["@nuxtjs/tailwindcss"],

  modules: ["@nuxtjs/axios", "@nuxtjs/dotenv", "nuxt-leaflet"],

  build: {},
};
