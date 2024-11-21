import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  locales: {
    "/": {
      lang: "en-US",
      title: "𝖑𝖎𝖆𝖓𝖌𝖈𝖍𝖊𝖓𝖞𝖆𝖓𝖌'𝖘 𝖇𝖑𝖔𝖌",
      description: "Man ! ",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "𝖑𝖎𝖆𝖓𝖌𝖈𝖍𝖊𝖓𝖞𝖆𝖓𝖌'𝖘 𝖇𝖑𝖔𝖌",
      description: "",
    },
  },
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

