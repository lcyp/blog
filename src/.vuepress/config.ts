import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/blog/",

  locales: {
    "/": {
      lang: "en-US",
      title: "liangchenyang's blog",
      description: "Man ! ",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "liangchenyang's blog",
      description: "",
    },
  },
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

