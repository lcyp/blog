import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
     "",
     {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children:[
        {
          text: "Redis",
          icon: "book",
          collapsible: true,
          prefix: "Redis/",
          children:[
            "Redis",
          ],
        },
        {
          text: "面试求职",
          icon: "book",
          prefix: "面试求职/",
          collapsible: true,
          children:[
           {
             text: "java基础知识",
             icon: "book",
             collapsible: true, 
             prefix: "java基础知识/",
             children:[
               "1",
               "2",
             ],
           },
           {
            text: "JVM",
            icon: "book",
            collapsible: true, 
            prefix: "JVM/",
            children:[
              "1",
              "2",
              "3",
              "4",
              "5",
            ],
          },
          ],
        }
      ]
    },
    "intro",
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    // },
  ],
});
