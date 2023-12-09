export default {
  head: {
    title: "network-crm",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
    port: 3000,
  },
  ssr: false,
  components: true,

  buildModules: ["@nuxtjs/tailwindcss"],

  modules: ["@nuxtjs/axios", "@nuxtjs/dotenv"],

  build: {},
};
