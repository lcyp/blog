import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/demo/",
  {
    text: "文档",
    icon: "pen-to-square",
    prefix: "/zh/posts/",
    children: [
      {
        text: "java基础知识",
<<<<<<< HEAD
=======
        icon: "pen-to-square",
        prefix: "javaDoc/",
        children: [
          { text: "java集合", icon: "pen-to-square", link: "1" },
          { text: "java面试题", icon: "pen-to-square", link: "2" }
        ],
      },
      {
        text: "苹果",
>>>>>>> 22d0f8ca056de06fa2ea8d8b29b799497d3f1230
        icon: "pen-to-square",
        prefix: "java基础知识/",
        children: [
          { text: "java集合", icon: "pen-to-square", link: "1" },
          { text: "java面试题", icon: "pen-to-square", link: "2" }
        ],
      },
      {
        text: "Spring知识",
        icon: "pen-to-square",
        prefix: "Spring知识/",
        children: [
          { text: "代理", icon: "pen-to-square", link: "1" },
          { text: "反射", icon: "pen-to-square", link: "2" },
          { text: "IOC", icon: "pen-to-square", link: "3" },
          { text: "Bean", icon: "pen-to-square", link: "4" },
        ],
      },
      {
        text: "JVM",
        icon: "pen-to-square",
        prefix: "JVM/",
        children: [
        
          {
            text: "JVM的组成",
            icon: "pen-to-square",
            link: "2",
          },
          {
            text: "JVM的生命周期",
            icon: "pen-to-square",
            link: "1",
          },
          "3",
          "4",
          "5"
        ],
      },

      
      // { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      // { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      // "tomato",
      
    
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
