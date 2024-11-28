import { defineClientConfig } from "vuepress/client";
import { setupSnowFall } from "vuepress-theme-hope/presets/snowFall.js";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import "vuepress-theme-hope/presets/round-blogger-avatar.scss"//剪裁头像为圆形
//import "vuepress-theme-hope/presets/left-blog-info.scss"//将博主信息移动到左侧
import "vuepress-theme-hope/presets/shinning-feature-panel.scss"//为项目主页的特性添加闪光效果
import "vuepress-theme-hope/presets/hr-driving-car.scss"//为所有 hr 元素添加驾驶的车图标
//import "vuepress-theme-hope/presets/hide-navbar-icon.scss" //隐藏导航栏图标。
//import  "vuepress-theme-hope/presets/hide-sidebar-icon.scss" //隐藏侧边栏图标。
import "vuepress-theme-hope/presets/bounce-icon.scss" //鼠标悬停跳动效果

export default defineClientConfig({

  enhance({ app }) {
    //引入点击特效
    import("./public/click-effect.js");
  },

  //下雪
  setup() {
    setupSnowFall();
    setupTransparentNavbar({ type: "homepage" });
    setupRunningTimeFooter(
      new Date("2022-01-01"),
      {
        "/": "Running time: :day days :hour hours :minute minutes :second seconds",
        "/zh/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true,
    );
  },
});
