"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[6307],{6262:(e,a)=>{a.A=(e,a)=>{const t=e.__vccOpts||e;for(const[e,l]of a)t[e]=l;return t}},5551:(e,a,t)=>{t.r(a),t.d(a,{comp:()=>i,data:()=>p});var l=t(641);const r=t.p+"assets/img/image.53770e2a.png",n=t.p+"assets/img/image-2.565d572d.png",o={},i=(0,t(6262).A)(o,[["render",function(e,a){return(0,l.uX)(),(0,l.CE)("div",null,a[0]||(a[0]=[(0,l.Fv)('<h1 id="jvm组成" tabindex="-1"><a class="header-anchor" href="#jvm组成"><span>JVM组成</span></a></h1><h2 id="_1-什么是程序计数器" tabindex="-1"><a class="header-anchor" href="#_1-什么是程序计数器"><span>1，什么是程序计数器</span></a></h2><p>线程私有的，每个线程一份，内部保存的是字节码的行号。 用于记录正在执行的字节码指令的地址。</p><ol><li><code>字节码解释器</code>通过改变<code>程序计数器</code>来依次读取指令，然后实现代码的流程控制，如：顺序执行、选择、循环、异常处理。</li><li>在多线程的情况下，<code>程序计数器</code>用于记录当前线程执行的位置，从而当线程被切换回来的时候能够知道该线程上次运行到哪儿了。</li></ol><blockquote><p>打印堆栈大小，局部变量的数量和方法的参数： javap -v xx.class <img src="'+r+'" alt="alt text" loading="lazy"></p></blockquote><h2 id="_2-你能给我详细介绍一下堆吗" tabindex="-1"><a class="header-anchor" href="#_2-你能给我详细介绍一下堆吗"><span>2，你能给我详细介绍一下堆吗？？</span></a></h2><p>虚拟机内存中有一个空间叫堆，这个堆中主要存储的是<code>对象的实例还有数组等</code>。内存不够的时候就会抛出Outofmemoryerror异常。。堆中又分成两部分，一部分叫年轻代，另一部分叫老年代，年轻代分成三个区，eden区和两个大小严格相等的survivor幸存者区。老年代中存储的是生命周期长的对象，根据jvm的策略，经过最多15次垃圾收集之后还存活在survivor中的对象就会放到老年代中。jdk1.7的时候还有一个永久代实现的方法区，存储的是类信息，静态变量，常量，编译后的代码。1.8后，为了防止内存溢出，永久代变成到本地内存中的元空间了。</p><blockquote><p>java7中的方法区/永久代 到Java8之后放到了本地内存中，叫元空间： <img src="'+n+'" alt="元空间" loading="lazy"></p></blockquote><h2 id="_3-什么是虚拟机栈" tabindex="-1"><a class="header-anchor" href="#_3-什么是虚拟机栈"><span>3，什么是虚拟机栈？</span></a></h2><p>虚拟机栈是每个线程独有的，是每个线程运行时所需要的内存，是先进后出的。栈内存也是线程安全的。每个栈由多个栈帧frame组成，每个栈帧对应着每次方法调用的时候所占用的内存。正在执行的方法对应的栈帧叫活动栈帧，每个线程只能有一个活动栈帧。当有栈帧来了就会压入栈底，再来就继续压入，方法执行完后就会依次弹栈。栈一般存储局部变量和方法调用。</p><h2 id="_4-垃圾回收是否设计栈内存" tabindex="-1"><a class="header-anchor" href="#_4-垃圾回收是否设计栈内存"><span>4，垃圾回收是否设计栈内存？</span></a></h2><p>垃圾回收主要就是堆内存，当栈帧弹栈以后，栈内存就会释放</p><h2 id="_5-栈内存分配越大越好吗" tabindex="-1"><a class="header-anchor" href="#_5-栈内存分配越大越好吗"><span>5，栈内存分配越大越好吗？</span></a></h2><p>不是的，栈内存默认的内存是1M ，如果机器总内存是512M，那么能活动的线程数是512个 如果把栈内存增大一倍变成2M，那么能活动的线程数就会少一半。就会降低并发效率了。</p><h2 id="_6-方法内的局部变量是否线程安全" tabindex="-1"><a class="header-anchor" href="#_6-方法内的局部变量是否线程安全"><span>6，方法内的局部变量是否线程安全？</span></a></h2><p>这个需要进行判断：要看一个方法内的局部变量是否线程安全，首先要看它是不是可以被多个线程所共享。 被多个线程共享了，就需要考虑线程安全的问题了。<br> 1，如果方法内局部变量没有逃离方法的作用范围，它是线程安全的<br> 2，如果是局部变量引用了对象，并逃离方法的作用范围，需要考虑线程安全。</p><h2 id="_7-什么情况下会导致栈内存溢出" tabindex="-1"><a class="header-anchor" href="#_7-什么情况下会导致栈内存溢出"><span>7，什么情况下会导致栈内存溢出?</span></a></h2><p>栈内存溢出跟栈帧有关。要么栈帧过多了，要么栈帧过大了。比如方法使用递归调用就可能造栈内存溢出。<br> 1，栈帧过多导致栈内存溢出，典型问题：递归调用<br> 2，栈帧过大导致内存溢出</p><h2 id="_8-堆和栈的区别是什么" tabindex="-1"><a class="header-anchor" href="#_8-堆和栈的区别是什么"><span>8，堆和栈的区别是什么?</span></a></h2><p>1，线程方面：堆是线程共有的，栈是线程私有的<br> 2，存储的东西不同：堆是来存储java对象和数组的，栈一般存储局部变量和方法调用的。<br> 3，垃圾回收方面：堆会GC垃圾回收，栈不会<br> 4，内存不足抛出的异常不足，堆抛出outofmemoryError,栈抛出stackoverflowError</p><h2 id="_9-能不能解释一下方法区-元空间" tabindex="-1"><a class="header-anchor" href="#_9-能不能解释一下方法区-元空间"><span>9，能不能解释一下方法区/元空间？</span></a></h2><p>方法区/老年代/元空间存储的是 类信息，静态变量，常量以及编译后的代码<br> ● jdk1.7叫(永久代实现的)方法区 ; jdk1.8叫元空间.<br> ● 1.7的时候放在堆中，1.8后放到本地内存了<br> ● 是各个线程共享的区域，主要存储类的信息和运行时常量池，<br> ● 虚拟机启动的时候创建，关闭的时候释放<br> ● 内存不足抛出异常：outofMemoryError:Metaspace.</p><h2 id="_10-那解释一下运行常量池" tabindex="-1"><a class="header-anchor" href="#_10-那解释一下运行常量池"><span>10，那解释一下运行常量池？</span></a></h2><p>常量池是在字节码文件中记录的，叫Constant pool:可以看作一张表，虚拟机指令根据这张表找到要执行的类名，方法名，方法参数，字面量等信息。 当类被加载的时候常量池就会放到运行时常量池中，并且因为常量池中记录的是符号嘛就是#数字，到运行时常量池就变成了真实地址了。</p><h2 id="_11-了解直接内存吗" tabindex="-1"><a class="header-anchor" href="#_11-了解直接内存吗"><span>11，了解直接内存吗？</span></a></h2><p>直接内存在虚拟机内存中的本地内存中。是虚拟机的系统内存，常见于NIO操作时，用于数据缓冲区。不受jvm内存回收管理。</p>',26)]))}]]),p=JSON.parse('{"path":"/zh/posts/JVM/2.html","title":"JVM组成","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2022-01-06T00:00:00.000Z","category":["jvm","jvm组成"],"tag":["jvm组成","堆","栈"],"star":10,"description":"JVM组成 1，什么是程序计数器 线程私有的，每个线程一份，内部保存的是字节码的行号。 用于记录正在执行的字节码指令的地址。 字节码解释器通过改变程序计数器来依次读取指令，然后实现代码的流程控制，如：顺序执行、选择、循环、异常处理。 在多线程的情况下，程序计数器用于记录当前线程执行的位置，从而当线程被切换回来的时候能够知道该线程上次运行到哪儿了。 打印...","head":[["meta",{"property":"og:url","content":"https://lcyp.github.io/blog/zh/blog/zh/posts/JVM/2.html"}],["meta",{"property":"og:site_name","content":"liangchenyang\'s blog"}],["meta",{"property":"og:title","content":"JVM组成"}],["meta",{"property":"og:description","content":"JVM组成 1，什么是程序计数器 线程私有的，每个线程一份，内部保存的是字节码的行号。 用于记录正在执行的字节码指令的地址。 字节码解释器通过改变程序计数器来依次读取指令，然后实现代码的流程控制，如：顺序执行、选择、循环、异常处理。 在多线程的情况下，程序计数器用于记录当前线程执行的位置，从而当线程被切换回来的时候能够知道该线程上次运行到哪儿了。 打印..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-19T04:38:11.000Z"}],["meta",{"property":"article:tag","content":"jvm组成"}],["meta",{"property":"article:tag","content":"堆"}],["meta",{"property":"article:tag","content":"栈"}],["meta",{"property":"article:published_time","content":"2022-01-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-19T04:38:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM组成\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-19T04:38:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"梁晨阳\\",\\"url\\":\\"https://lcyp.github.io/blog/zh/\\"}]}"]]},"headers":[{"level":2,"title":"1，什么是程序计数器","slug":"_1-什么是程序计数器","link":"#_1-什么是程序计数器","children":[]},{"level":2,"title":"2，你能给我详细介绍一下堆吗？？","slug":"_2-你能给我详细介绍一下堆吗","link":"#_2-你能给我详细介绍一下堆吗","children":[]},{"level":2,"title":"3，什么是虚拟机栈？","slug":"_3-什么是虚拟机栈","link":"#_3-什么是虚拟机栈","children":[]},{"level":2,"title":"4，垃圾回收是否设计栈内存？","slug":"_4-垃圾回收是否设计栈内存","link":"#_4-垃圾回收是否设计栈内存","children":[]},{"level":2,"title":"5，栈内存分配越大越好吗？","slug":"_5-栈内存分配越大越好吗","link":"#_5-栈内存分配越大越好吗","children":[]},{"level":2,"title":"6，方法内的局部变量是否线程安全？","slug":"_6-方法内的局部变量是否线程安全","link":"#_6-方法内的局部变量是否线程安全","children":[]},{"level":2,"title":"7，什么情况下会导致栈内存溢出?","slug":"_7-什么情况下会导致栈内存溢出","link":"#_7-什么情况下会导致栈内存溢出","children":[]},{"level":2,"title":"8，堆和栈的区别是什么?","slug":"_8-堆和栈的区别是什么","link":"#_8-堆和栈的区别是什么","children":[]},{"level":2,"title":"9，能不能解释一下方法区/元空间？","slug":"_9-能不能解释一下方法区-元空间","link":"#_9-能不能解释一下方法区-元空间","children":[]},{"level":2,"title":"10，那解释一下运行常量池？","slug":"_10-那解释一下运行常量池","link":"#_10-那解释一下运行常量池","children":[]},{"level":2,"title":"11，了解直接内存吗？","slug":"_11-了解直接内存吗","link":"#_11-了解直接内存吗","children":[]}],"git":{"createdTime":1731560569000,"updatedTime":1731991091000,"contributors":[{"name":"lcy","email":"2089117474@qq.com","commits":2}]},"readingTime":{"minutes":4.56,"words":1369},"filePathRelative":"zh/posts/JVM/2.md","localizedDate":"2022年1月6日","excerpt":"\\n<h2>1，什么是程序计数器</h2>\\n<p>线程私有的，每个线程一份，内部保存的是字节码的行号。\\n用于记录正在执行的字节码指令的地址。</p>\\n<ol>\\n<li><code>字节码解释器</code>通过改变<code>程序计数器</code>来依次读取指令，然后实现代码的流程控制，如：顺序执行、选择、循环、异常处理。</li>\\n<li>在多线程的情况下，<code>程序计数器</code>用于记录当前线程执行的位置，从而当线程被切换回来的时候能够知道该线程上次运行到哪儿了。</li>\\n</ol>\\n<blockquote>\\n<p>打印堆栈大小，局部变量的数量和方法的参数：\\njavap -v xx.class\\n</p>\\n</blockquote>","autoDesc":true}')}}]);