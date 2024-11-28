// 鼠标点击事件监听
document.addEventListener("click", (e) => {
    const starCount = 1; // 每次生成的五角星数量
    const stars = [];

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.className = "click-effect-star";

        // 随机生成五角星的大小、散射角度、距离、持续时间等
        const size = Math.random() * 15 + 10; // 随机大小
        const angle = Math.random() * 360; // 随机旋转角度
        const distance = Math.random() * 300 + 100; // 随机散射距离
        const duration = Math.random() * 0.8 + 0.5; // 随机动画持续时间
        const color = `hsl(${Math.random() * 360}, 100%, 70%)`; // 随机颜色

        // 设置五角星的位置、旋转、颜色等
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${e.pageX - size / 2}px`; // 点击位置为中心
        star.style.top = `${e.pageY - size / 2}px`; // 点击位置为中心
        star.style.transform = `rotate(${angle}deg) translate(${distance}px)`;
        star.style.animationDuration = `${duration}s`;
        star.style.background = color;

        document.body.appendChild(star);
        stars.push(star);
    }

    // 动画结束后移除五角星
    setTimeout(() => {
        stars.forEach((star) => star.remove());
    }, 1000); // 动画1秒后移除
});

// 动态样式
const style = document.createElement("style");
style.innerHTML = `
    .click-effect-star {
      position: absolute;
      width: 20px;
      height: 20px;
      pointer-events: none; /* 避免干扰鼠标事件 */
      transform: translate(-50%, -50%);
      background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,0,150,0.6) 50%, rgba(0,0,255,0) 100%);
      clip-path: polygon(
        50% 0%, 
        61% 35%, 
        98% 35%, 
        68% 57%, 
        79% 91%, 
        50% 70%, 
        21% 91%, 
        32% 57%, 
        2% 35%, 
        39% 35%
      ); /* 五角星形状 */
      animation: star-shoot 1s ease-out forwards;
    }

    @keyframes star-shoot {
      0% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
      100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.5) translateY(-200px) rotate(360deg); /* 弹射效果，随机飞向四周 */
      }
    }
  `;
document.head.appendChild(style);
