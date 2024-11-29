"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[9254],{6262:(e,t)=>{t.A=(e,t)=>{const a=e.__vccOpts||e;for(const[e,n]of t)a[e]=n;return a}},9013:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>l,data:()=>p});var n=a(641);const o=a.p+"assets/img/image-1.fd37c58f.png",i={},l=(0,a(6262).A)(i,[["render",function(e,t){return(0,n.uX)(),(0,n.CE)("div",null,t[0]||(t[0]=[(0,n.Fv)('<h1 id="jvm" tabindex="-1"><a class="header-anchor" href="#jvm"><span>jvm</span></a></h1><h2 id="什么是进程" tabindex="-1"><a class="header-anchor" href="#什么是进程"><span>什么是进程？</span></a></h2><p>根本区别：进程是操作系统资源分配的基本单位，而线程是处理器任务调度和执行的基本单位。 进程就是程序的一次执行过程，是系统运行程序的基本单位，一次进程是动态的，系统运行一个程序即是一个进程从创建，运行到销毁的过程。进程是一个独立的环境，而线程是在进程中执行的一个任务。</p><blockquote><p>在Java 中当我们启动main函数时其实就是运行了一个JVM的进程，而main函数所在的线程就是这个进程中的一个线程， 称为主线程。</p></blockquote><h2 id="什么是线程" tabindex="-1"><a class="header-anchor" href="#什么是线程"><span>什么是线程？</span></a></h2><p>线程是一个比进程更小的执行单位，一个进程在其执行的过程中可以产生多个线程。同类的多个线程共享进程的堆和方法区资源，但是每个线程又有自己的程序计数器，虚拟机栈，和本地方法栈，所以系统在产生一个线程，或是在各个线程间做切换工作时，负担要比进程小得多，因此，线程也被称为轻量级进程。</p><blockquote><p>java就是天生的多线程程序，一个java程序的运行就是main线程和多个其它线程同时运行。</p></blockquote><h2 id="描述一下线程与进程的关系-区别以及优缺点" tabindex="-1"><a class="header-anchor" href="#描述一下线程与进程的关系-区别以及优缺点"><span>描述一下线程与进程的关系，区别以及优缺点？</span></a></h2><p>下图是 Java 内存区域，通过下图我们从 JVM 的角度来说一下线程和进程之间的关系。 <img src="'+o+'" alt="alt text" loading="lazy"> 可以看出：一个进程包含多个线程，多个线程共享进程的堆，方法区（jdk1.8之后的元空间）资源，但是每个线程又有自己的程序计数器，虚拟机栈，本地方法栈。 总结：线程是进程划分成的更小的运行单位。线程和进程最大的不同在于基本上各个进程是相互独立的，而各个线程不一定，因为同一进程中的线程极有可能相互影响。线程开销小，但不利于资源的管理和保护，而进程正相反。</p><h2 id="程序计数器作用" tabindex="-1"><a class="header-anchor" href="#程序计数器作用"><span>程序计数器作用?</span></a></h2><p>程序计数器主要有下面两个作用：</p><ol><li><code>字节码解释器</code>通过改变<code>程序计数器来</code>依次读取指令，从而实现代码的流程控制，如：顺序执行、选择、循环、异常处理。</li><li>在多线程的情况下，<code>程序计数器</code>用于记录当前线程执行的位置，从而当线程被切换回来的时候能够知道该线程上次运行到哪儿了。</li></ol><blockquote><p>需要注意的是，如果执行的是 native 方法，那么程序计数器记录的是 undefined 地址，只有执行的是 Java 代码时程序计数器记录的才是下一条指令的地址。</p></blockquote>',13)]))}]]),p=JSON.parse('{"path":"/zh/posts/%E9%9D%A2%E8%AF%95%E6%B1%82%E8%81%8C/JVM/5.html","title":"jvm","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2023-01-12T00:00:00.000Z","category":["jvm"],"tag":["进程/线程","程序计数器"],"star":false,"sticky":true,"description":"jvm 什么是进程？ 根本区别：进程是操作系统资源分配的基本单位，而线程是处理器任务调度和执行的基本单位。 进程就是程序的一次执行过程，是系统运行程序的基本单位，一次进程是动态的，系统运行一个程序即是一个进程从创建，运行到销毁的过程。进程是一个独立的环境，而线程是在进程中执行的一个任务。 在Java 中当我们启动main函数时其实就是运行了一个JVM的...","head":[["meta",{"property":"og:url","content":"https://lcyp.github.io/blog/zh/blog/zh/posts/%E9%9D%A2%E8%AF%95%E6%B1%82%E8%81%8C/JVM/5.html"}],["meta",{"property":"og:site_name","content":"𝖑𝖎𝖆𝖓𝖌𝖈𝖍𝖊𝖓𝖞𝖆𝖓𝖌\'𝖘 𝖇𝖑𝖔𝖌"}],["meta",{"property":"og:title","content":"jvm"}],["meta",{"property":"og:description","content":"jvm 什么是进程？ 根本区别：进程是操作系统资源分配的基本单位，而线程是处理器任务调度和执行的基本单位。 进程就是程序的一次执行过程，是系统运行程序的基本单位，一次进程是动态的，系统运行一个程序即是一个进程从创建，运行到销毁的过程。进程是一个独立的环境，而线程是在进程中执行的一个任务。 在Java 中当我们启动main函数时其实就是运行了一个JVM的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-29T01:40:40.000Z"}],["meta",{"property":"article:tag","content":"进程/线程"}],["meta",{"property":"article:tag","content":"程序计数器"}],["meta",{"property":"article:published_time","content":"2023-01-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-29T01:40:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"jvm\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-29T01:40:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"梁晨阳\\",\\"url\\":\\"https://lcyp.github.io/blog/zh/\\"}]}"]]},"headers":[{"level":2,"title":"什么是进程？","slug":"什么是进程","link":"#什么是进程","children":[]},{"level":2,"title":"什么是线程？","slug":"什么是线程","link":"#什么是线程","children":[]},{"level":2,"title":"描述一下线程与进程的关系，区别以及优缺点？","slug":"描述一下线程与进程的关系-区别以及优缺点","link":"#描述一下线程与进程的关系-区别以及优缺点","children":[]},{"level":2,"title":"程序计数器作用?","slug":"程序计数器作用","link":"#程序计数器作用","children":[]}],"git":{"createdTime":1731570159000,"updatedTime":1732844440000,"contributors":[{"name":"lcy","email":"2089117474@qq.com","commits":2}]},"readingTime":{"minutes":2.54,"words":762},"filePathRelative":"zh/posts/面试求职/JVM/5.md","localizedDate":"2023年1月12日","excerpt":"\\n<h2>什么是进程？</h2>\\n<p>根本区别：进程是操作系统资源分配的基本单位，而线程是处理器任务调度和执行的基本单位。\\n进程就是程序的一次执行过程，是系统运行程序的基本单位，一次进程是动态的，系统运行一个程序即是一个进程从创建，运行到销毁的过程。进程是一个独立的环境，而线程是在进程中执行的一个任务。</p>\\n<blockquote>\\n<p>在Java 中当我们启动main函数时其实就是运行了一个JVM的进程，而main函数所在的线程就是这个进程中的一个线程，\\n称为主线程。</p>\\n</blockquote>\\n<h2>什么是线程？</h2>\\n<p>线程是一个比进程更小的执行单位，一个进程在其执行的过程中可以产生多个线程。同类的多个线程共享进程的堆和方法区资源，但是每个线程又有自己的程序计数器，虚拟机栈，和本地方法栈，所以系统在产生一个线程，或是在各个线程间做切换工作时，负担要比进程小得多，因此，线程也被称为轻量级进程。</p>","autoDesc":true}')}}]);