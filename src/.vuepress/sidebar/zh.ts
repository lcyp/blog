import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: [
        {
          text: "Dubbo",
          icon: "/icons/dubbo.png",
          collapsible: true,
          prefix: "Dubbo/",
          children: [
            "1",
            "2",
            "3",
            "4",
          ],
        },
        {
          text: "JVM",
          icon: "/icons/lineicons--vmware.png",
          collapsible: true,
          prefix: "JVM/",
          children: [
            "1",
            "2",
          ],
        },
        {
          text: "Redis",
          icon: "/icons/devicon--redis.png",
          collapsible: true,
          prefix: "Redis/",
          children: [
            "Redis",
          ],
        },
        {
          text: "面试求职",
          icon: "/icons/mynaui--face-id.png",
          prefix: "面试求职/",
          collapsible: true,
          children: [
            {
              text: "java基础知识",
              icon: "/icons/devicon--java.png",
              collapsible: true,
              prefix: "java基础知识/",
              children: [
                "1",
                "2",
              ],
            },
            {
              text: "JVM",
              icon: "/icons/lineicons--vmware.png",
              collapsible: true,
              prefix: "JVM/",
              children: [
                "1",
                "2",
                "3",
                "4",
                "5",
              ],
            },
            {
              text: "MySQL",
              icon: "/icons/logos--mysql.png",
              collapsible: true,
              prefix: "Mysql/",
              children: [
                "1",
              ],
            },
            {
              text: "Redis",
              icon: "/icons/devicon--redis.png",
              collapsible: true,
              prefix: "Redis/",
              children: [
                "1",
              ],
            },
            {
              text: "Spring",
              icon: "/icons/devicon--spring.png",
              collapsible: true,
              prefix: "Spring知识/",
              children: [
                "1",
                "2",
                "3",
                "4",
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
