import{_ as n,Y as s,Z as t,$ as e,a0 as a,a1 as r,a2 as d,D as l}from"./framework-d651fda7.js";const c={},b={href:"https://zhuanlan.zhihu.com/p/583539989",target:"_blank",rel:"noopener noreferrer"},o=d('<h1 id="概览" tabindex="-1"><a class="header-anchor" href="#概览" aria-hidden="true">#</a> 概览</h1><figure><img src="https://pcsdata.baidu.com/thumbnail/ab7aedfcej8594bdb7d41dc5c58347a0?fid=2519193222-16051585-924785488063881&amp;rt=pr&amp;sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-9eC1YhIZa691dDliHqSTTzNGCVA%3D&amp;expires=48h&amp;chkv=0&amp;chkbd=0&amp;chkpc=&amp;dp-logid=8811769800559562111&amp;dp-callid=0&amp;time=1679558400&amp;bus_no=26&amp;size=c1600_u1600&amp;quality=100&amp;vuk=-&amp;ft=video" alt="整体概览" tabindex="0" loading="lazy"><figcaption>整体概览</figcaption></figure><h1 id="深入理解-rxjs" tabindex="-1"><a class="header-anchor" href="#深入理解-rxjs" aria-hidden="true">#</a> 深入理解 RxJS</h1><p>全面理解一个事物，追溯其历史是一种好的方式，RxJS 的起源需要追溯到响应式编程（RP），后续产生了一系列基于响应式编程范式的语言扩展（Rx，RxJS 就是其中之一），请看历史简谱（左向右延续）。 <img src="https://pcsdata.baidu.com/thumbnail/1a5856d77o8d69cd3a0fd37e42c5cbfe?fid=2519193222-16051585-234629487524354&amp;rt=pr&amp;sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-779jToZi5uCXNTFZ5%2FxvyHi7z9E%3D&amp;expires=48h&amp;chkv=0&amp;chkbd=0&amp;chkpc=&amp;dp-logid=8811809125656663569&amp;dp-callid=0&amp;time=1679558400&amp;bus_no=26&amp;size=c1600_u1600&amp;quality=100&amp;vuk=-&amp;ft=video" alt="" loading="lazy"></p><ul><li>何为响应式</li></ul><blockquote><p>一个例子<br> 为了避免上来就接触晦涩的概念，先来举个例子：博客平台关注功能。话说你偶然浏览到阿杰的文章，觉得写的很赞，于是你关注了他的博客账号，以便不会错过之后的干货，在以后的日子里阿杰每发布一篇文章博客平台都会给你推送一条消息，提醒你来给他点点赞，假设博客平台没有关注的功能，那么你需要想知道他的最新动态就只能打开他的个人主页查看文章列表来确认，也许稍不留意就会错过他的文章。这个例子出现了粉丝关注博主、博主发布博客、平台自动推送给粉丝消息、给文章点赞，这就形成了响应式闭环，平台在观察到博主粉丝只需要关注一下就能收到博主以后的动态，这就是响应式带来的好处。<br> 响应式和发布订阅模式比较像。</p></blockquote><blockquote><p>为了实现解耦例子：<br> 当A模块需要B模块消息，则需要B模块引用A模块进行传参。功能改了后A模块取消，则B模块也要跟着进行更改。如果用响应式。A只需要通过“中间然RX”订阅B的RX消息就可以接收到B发的消息。A模块如果消失则B不需要改动。</p></blockquote><h2 id="响应式编程" tabindex="-1"><a class="header-anchor" href="#响应式编程" aria-hidden="true">#</a> 响应式编程</h2><blockquote><p>概念 响应式编程，Reactive Programing，又称反应式编程，简称 RP，是一种以传播数据流（数据流概念戳这里 ）的编程范式。<br> 响应式编程或反应式编程（英语：Reactive programming）是一种面向数据流和变化传播的声明式编程范式。这意味着可以在编程语言中很方便地表达静态或动态的数据流，而相关的计算模型会自动将变化的值通过数据流进行传播。</p></blockquote><blockquote><p>优势:</p><ol><li>声明式，方便地表达静态或动态的数据流</li><li>自动化，自动将变化的值通过数据流进行传播</li><li>核心思想：从传统的调用方“拉”数据的思维模式转变为被调用方“推”数据的思维模式。</li></ol></blockquote><h3 id="js-异步编程史" tabindex="-1"><a class="header-anchor" href="#js-异步编程史" aria-hidden="true">#</a> JS 异步编程史</h3><blockquote><p>众所周知，JS 执行环境是单线程的，在事件监听，异步的处理，响应式编程毋庸置疑是其中的一大主力</p></blockquote><ol><li>Callback 时代<br> 回调函数延续至今，JS 的运用高阶函数巧妙地将异步后的逻辑进行托管，以事件驱动的方式来解决异步编程，但它有一个“臭名昭著”的问题：回调嵌套，耦合度高。本来很简单的逻辑但为了控制执行流程却不得不写大量的代码，当时产生了一些知名的库：async、bluebrid，它们封装和处理了嵌套问题，暴露出更为简单好用的 API，额外还可以优雅地处理流程控制相关场景，但所做的只是划分了逻辑，依旧没有解决代码臃肿的问题。</li><li>Promise 时代 ES6 纳入 Promise 之后可谓一大喜讯，因为它解决了回调嵌套的问题，虽然它只是回调的语法糖，但在处理流程和捕获错误（外层处理）已经非常的优雅了，但它的弊端是：无法监听和打断 Promise 的状态。这意味着一旦声明它会立即执行并修改它的执行状态，这源于它的实现。</li><li>Generator Generator 是处于 Promise 和 Async/await 之间的产物，它给我们带来了写异步语法像写同步一般，只需在函数前加 * 修饰，这样就可以在函数内部使用一个 yield 关键字返回结果，类似于 await ，但它也并非完美，不然也不会有后面的 Async/await 了，它的主要问题是流程管理不方便（迭代器模式实现，主动调 next 执行器流转游标）。</li><li>Async/await Async/await 是 Generator 语法糖，既保留了语法上的优势，也解决了 Generator 每步要调一下 next 执行器的弊端，是现阶段的最佳方案，就是得吐槽一下 Top-level await 到 ES2022 才出现。</li></ol>',13),h={href:"http://Rx.NET",target:"_blank",rel:"noopener noreferrer"},u=d(`<h3 id="rxjs" tabindex="-1"><a class="header-anchor" href="#rxjs" aria-hidden="true">#</a> RxJS</h3><p>RxJS 全称 Reactive Extensions for JavaScript，翻译过来是 Javascript 的响应式扩展，它是一个采用流来处理异步和事件的工具库，简单来说 Rx(JS) = Observables + Operator + Scheduler。 擅长做的事：</p><ul><li>UI 事件：例如鼠标移动、按钮单击......</li><li>状态管理：例如属性更改、集合更新等事件</li><li>IO 消息事件：服务监听</li><li>广播/通知：消息总线（Event bus）</li><li>网络消息/事件：例如 HTTP、- WebSockets API 或其他低延迟中间件</li></ul><p>最大的优势：异步事件的抽象，这意味着可以把很多事统一起来当作一种方式处理，从而让问题变得更简单，同时也降低了学习成本。<br> 注意：RxJS 擅长做异步的事，不代表不可以做同步或不擅长同步的事。</p><h3 id="rxjs-在-angular-中的应用" tabindex="-1"><a class="header-anchor" href="#rxjs-在-angular-中的应用" aria-hidden="true">#</a> RxJS 在 Angular 中的应用</h3><p>RxJS 在 Angular 中及其重要，很多核心- 模块都是由 RxJS 实现的，比如：</p><ul><li>响应式表单</li><li>路由</li><li>HttpClient（封装的 ajax，类似于 - axios）</li><li>async 管道符</li><li>状态管理</li></ul><h1 id="rxjs-核心概念——-observables" tabindex="-1"><a class="header-anchor" href="#rxjs-核心概念——-observables" aria-hidden="true">#</a> RxJS 核心概念—— Observables</h1><p><img src="https://pcsdata.baidu.com/thumbnail/4af635694g9e84566bf44ed6c97c82b5?fid=2519193222-16051585-11985613925763&amp;rt=pr&amp;sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-jg%2FuHz36waWg5NXICBB2RSJRSLE%3D&amp;expires=48h&amp;chkv=0&amp;chkbd=0&amp;chkpc=&amp;dp-logid=8812291484175452425&amp;dp-callid=0&amp;time=1679558400&amp;bus_no=26&amp;size=c1600_u1600&amp;quality=100&amp;vuk=-&amp;ft=video" alt="" loading="lazy"> RxJS 中的 Observables 系列是围绕观察者模式来实现的，基本角色：</p><ul><li>Observable：被观察者，用来产生消息/数据。</li><li>Observer：观察者，用来消费消息/数据。</li></ul><h2 id="observable" tabindex="-1"><a class="header-anchor" href="#observable" aria-hidden="true">#</a> Observable</h2><p>Observeable 是观察者模式中的被观察者，它维护一段执行函数，提供了惰性执行的能力（subscribe）。</p><h3 id="核心函数" tabindex="-1"><a class="header-anchor" href="#核心函数" aria-hidden="true">#</a> 核心函数</h3><ul><li>constructor(_subscribe) : 创建 Observeable</li><li>static create(_subscribe)：静态函数创建 Observeable</li><li>pipe()：管道</li><li>subscribe()：执行初始化传入的 _subscribe</li></ul><blockquote><p>RxJS 中 Observeable 是一等公民，将一切问题都转化为 Observable 去处理。转换的操作符有from 、 fromEvent 、 of 、 timer 等等，更多戳 这里。 注意的是：只有 ObservableInput 或 SubscribableOrPromise 类型的值才可以转化为 Observable。</p></blockquote><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3><figure><img src="https://pcsdata.baidu.com/thumbnail/7e398fbd9j9c4764581275b210906b36?fid=2519193222-16051585-448049421592739&amp;rt=pr&amp;sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-zNWl48IRi9zM8QVzUtjHMgblPiI%3D&amp;expires=48h&amp;chkv=0&amp;chkbd=0&amp;chkpc=&amp;dp-logid=8812341880221552272&amp;dp-callid=0&amp;time=1679558400&amp;bus_no=26&amp;size=c1600_u1600&amp;quality=100&amp;vuk=-&amp;ft=video" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="observable-与-promise" tabindex="-1"><a class="header-anchor" href="#observable-与-promise" aria-hidden="true">#</a> Observable 与 Promise</h3><p>它们关键性的不同点：</p><table><thead><tr><th></th><th>Observable</th><th>Promise</th></tr></thead><tbody><tr><td>使用场景</td><td>同步、异步均可使用 用 Promise</td><td>包裹的多数是异步场景</td></tr><tr><td>执行时机</td><td>声明式惰性执行，只有在订阅后才会执行</td><td>创建时就立即执行</td></tr><tr><td>执行次数</td><td>多次调用 subscribe 函数会执行多次</td><td>只有第一次执行，后续都是取值</td></tr><tr><td>流程控制</td><td>相较于 Promise 有更为全面的操作符</td><td>提供串行、并行的函数</td></tr><tr><td>错误处理</td><td>subscribe 函数捕获错误</td><td>.catch 捕获</td></tr><tr><td>总的来说，Promise 可读性更优，Observable 从使用场景更为全面。</td><td></td><td></td></tr></tbody></table><h3 id="两者的相互转换" tabindex="-1"><a class="header-anchor" href="#两者的相互转换" aria-hidden="true">#</a> 两者的相互转换</h3><p>在既使用了 RxJS 又引用了用 Promise 封装的库时，两者相互转换是容易碰到的问题，RxJS 提供了两者转换的函数。</p><h3 id="promise-转-observable" tabindex="-1"><a class="header-anchor" href="#promise-转-observable" aria-hidden="true">#</a> Promise 转 Observable</h3><p>from 或 fromPromise（弃用） 操作符</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const observable$ = from(fetch(&#39;http://xxx.com/&#39;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Observable 转 Promise</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const promise = of(42).toPromise();
const errorPromise = throw(new Error(&#39;woops&#39;)).toPromise();
errorPromise.catch(err=&gt; console.error);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="subscriber-observer" tabindex="-1"><a class="header-anchor" href="#subscriber-observer" aria-hidden="true">#</a> Subscriber/Observer</h3><p>Subscriber/Observer 是观察者模式中的观察者/消费者，它用来消费/执行 Observable 创建的函数。</p><h3 id="核心能力" tabindex="-1"><a class="header-anchor" href="#核心能力" aria-hidden="true">#</a> 核心能力</h3><ul><li>next （传值）</li><li>error （错误处理）</li><li>complete （完成/终止）</li></ul><p><img src="https://pic1.zhimg.com/80/v2-f92cfbc57046528faabf6fb0de7c9e90_720w.webp" alt="" loading="lazy"> 实现 <img src="https://pic2.zhimg.com/80/v2-1b3de1950586e20b9338db321657af89_720w.webp" alt="" loading="lazy"><img src="https://pic3.zhimg.com/80/v2-f57c6feebb94810b9958c19cf25af21a_720w.webp" alt="" loading="lazy"> 白话描述：</p><ul><li>将 subscribe 传进去一个 next 函数赋给 Observer 的 next 函数。</li><li>将 Observer 传给 Observable 初始化的预加载函数 _subscribe。</li><li>执行 Observable 初始化的预加载函数</li></ul><p>工作流程 <img src="https://pic1.zhimg.com/80/v2-25f1f67abd45d71fd008dabc75dc8f40_720w.webp" alt="" loading="lazy"></p><h3 id="subscription" tabindex="-1"><a class="header-anchor" href="#subscription" aria-hidden="true">#</a> Subscription</h3><p>上面的 Observable 和 Observer 已经完成了观察者模式的核心能力，但是引发的一个问题是，每次执行一个流创建一个 Observable，这可能会创建多个对象（尤其是大量使用操作符时，会创建多个 Observable 对象，这个我们后面再说），此时需要外部去销毁此对象，不然会造成内存泄露。</p><p>为了解决这个问题，所以产生了一个 Subscription 的对象，Subscription 是表示可清理资源的对象，它是由 Observable 执行之后产生的。</p><h3 id="核心能力-1" tabindex="-1"><a class="header-anchor" href="#核心能力-1" aria-hidden="true">#</a> 核心能力</h3><ul><li>unsubcribe （取消订阅）</li><li>add （分组或在取消订阅之前插入一段逻辑）</li></ul><p><img src="https://pic1.zhimg.com/80/v2-7e05bb447aaae64602733dc3e498cf1c_720w.webp" alt="" loading="lazy"> 注意：调用unsubcribe后（包含add传入的其它 Subscription）不会再接收到它们的数据。</p><h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h4><figure><img src="https://pic1.zhimg.com/80/v2-055e64262a57ee9a8a4eab1257995d44_720w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h4><p><img src="https://pic3.zhimg.com/80/v2-7205d8d76d9e8e545c8117ec8a31cd92_720w.webp" alt="" loading="lazy"><img src="https://pic2.zhimg.com/80/v2-b18b745352971376b27da5ad969d6411_720w.webp" alt="" loading="lazy"> 白话描述：</p><ul><li>调用 Observable 的 subscribe 后会添加（add 方法）到 Subscription（这里有个关系 Subscriber 继承了 Subscription） 中，并把 Subscriber（也是 Subscription）返出去。</li><li>调用 Subscription 的 unsubscribe 方法。</li><li>unsubscribe 把该对象置空回收。</li></ul><h4 id="完整工作流程" tabindex="-1"><a class="header-anchor" href="#完整工作流程" aria-hidden="true">#</a> 完整工作流程</h4><figure><img src="https://pic4.zhimg.com/80/v2-25f9f5a1af4e2bc8632e7ad67ef1e667_720w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="subject" tabindex="-1"><a class="header-anchor" href="#subject" aria-hidden="true">#</a> Subject</h4><p>上述的 Observable 归根到底就是一个惰性执行的过程，当遇到以下两种情况就显得偏弱：</p><ul><li>推送多条数据时，需要就要创建多个对象。</li><li>做状态管理或消息通讯，监听数据变化并实时推送。 基于这两个方面，所以产生了 Subject，Subject 是一个特殊的 Observable，更像一个 EventEmitter，它既可以是被观察者/生产者也可以是观察者/消费者。</li></ul><h5 id="优势" tabindex="-1"><a class="header-anchor" href="#优势" aria-hidden="true">#</a> 优势</h5><ul><li>减少开销和提高性能</li><li>数据实时推送</li></ul><h5 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h5><p>消息传递或广播。</p><h5 id="与-observable-的区别" tabindex="-1"><a class="header-anchor" href="#与-observable-的区别" aria-hidden="true">#</a> 与 Observable 的区别</h5><table><thead><tr><th></th><th>Observable</th><th>Subject</th></tr></thead><tbody><tr><td>角色</td><td>生产者（单向）</td><td>生产者、消费者（双向）</td></tr><tr><td>消费策略</td><td>单播</td><td>多播</td></tr><tr><td>流转方式</td><td>内部发送/接收数据</td><td>外部发送/接收数据</td></tr><tr><td>数据特性</td><td>冷数据流</td><td>热数据流</td></tr><tr><td>消费时机</td><td>调用 subscribe</td><td>调用 next</td></tr><tr><td>重点解释一下消费策略和消费时机两块：</td><td></td><td></td></tr></tbody></table><p>冷数据流：可以订阅任意时间的数据流。</p><p>热数据流：只给已订阅的消费者发送消息，定阅之前的消费者，不会收到消息。</p><p>用一个示例来演示： <img src="https://pic2.zhimg.com/80/v2-a504a75e49acfd26b805cd3653a5ce41_720w.webp" alt="" loading="lazy"></p><h5 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理" aria-hidden="true">#</a> 工作原理</h5><figure><img src="https://pic1.zhimg.com/80/v2-7068d98afab99f14e4b9f5abbad74ea0_720w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="源码实现" tabindex="-1"><a class="header-anchor" href="#源码实现" aria-hidden="true">#</a> 源码实现</h4><ul><li>observers 订阅者集合</li><li>_subscribe 添加订阅者</li><li>next 函数将所有订阅者推送相同的数据</li></ul><figure><img src="https://pic2.zhimg.com/80/v2-78b6380ce5271b6019b16f3a676e8f0d_720w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="其他-subject" tabindex="-1"><a class="header-anchor" href="#其他-subject" aria-hidden="true">#</a> 其他 Subject</h4><table><thead><tr><th>种类</th><th>作用</th></tr></thead><tbody><tr><td>BehaviorSubject</td><td>回放数据，如果是订阅前推送的数据，只回放最新的值</td></tr><tr><td>ReplaySubject</td><td>回放数据，初始化设定要缓存多少次的值，然后将这批</td></tr><tr><td>AsyncSubject</td><td>只有调用 complete 后才会推送数据</td></tr></tbody></table><h3 id="操作符-operator" tabindex="-1"><a class="header-anchor" href="#操作符-operator" aria-hidden="true">#</a> 操作符（Operator）</h3><h4 id="理解操作符" tabindex="-1"><a class="header-anchor" href="#理解操作符" aria-hidden="true">#</a> 理解操作符</h4><p>Operator 本质上是一个纯函数 (pure function)，它接收一个 Observable 作为输入，并生成一个新的 Observable 作为输出。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export interface Operator&lt;T, R&gt; {
  call(subscriber: Subscriber&lt;R&gt;, source: any): TeardownLogic;
}
// 等价于
function Operator(subscriber: Subscriber&lt;R&gt;, source: any){}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="遵循的小道" tabindex="-1"><a class="header-anchor" href="#遵循的小道" aria-hidden="true">#</a> 遵循的小道</h4><p>迭代器模式和集合的函数式编程模式以及管道思想（pipeable）</p><h4 id="函数式编程" tabindex="-1"><a class="header-anchor" href="#函数式编程" aria-hidden="true">#</a> 函数式编程</h4><p>操作符的实现以及使用均依照函数式的编程范式，Functional Programing，简称 FP，函数式编程范式，它的思维就是一切用函数表达和解决问题，避免用命令式。 优点：</p>`,74),p=e("li",null,"链式调用/组合开发",-1),v=e("li",null,"简单易写易读（声明式）",-1),m=e("li",null,"可靠性（纯函数不存在依赖）",-1),g=e("li",null,"惰性求值（高阶函数）",-1),f={href:"https://pingcode.com/pages/taOxc8Afhg#%20%E3%80%8A%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B%E3%80%8B",target:"_blank",rel:"noopener noreferrer"},x=d(`<h4 id="pipe" tabindex="-1"><a class="header-anchor" href="#pipe" aria-hidden="true">#</a> pipe</h4><p>管道，用来承载数据流的容器，相信大家一定用过 Lodash 的chain，原生 js 数组，NodeJS 开发者 也许还知道 async/bluebird 的 waterfall，Mongodb 的 pipe，它们都遵循管道思想，最直接的好处是链式调用，还可以用来划分逻辑，在异步的场景中还可以做流程控制（串行、并行、竞速等等）。</p><h4 id="为什么要有操作符" tabindex="-1"><a class="header-anchor" href="#为什么要有操作符" aria-hidden="true">#</a> 为什么要有操作符？</h4><p>遵循符合响应式宣言，单向线性的通讯或传输数据，pipe 可以降低耦合度以便于阅读和维护，把复杂的问题分解成多个简单的问题，最后在组合起来。</p><h4 id="操作符与数据流" tabindex="-1"><a class="header-anchor" href="#操作符与数据流" aria-hidden="true">#</a> 操作符与数据流</h4><p>在 RxJS 的世界解决问题的方式是抽象为数据流，整个闭环是围绕数据流进行的，所以我们再来理解一下数据流：流，可以把数据可以想像成现实中的水流，河流，流有上游、下游每个阶段处理不同的事情，在这过程避免不了要操作流，比如合并、流程控制、频率控制等等，所以操作符就扮演了此角色。</p><p>生命周期：创建流（create、new、创建类操作符）——&gt; 执行流（subscribe） ——&gt; 销毁流（unsubscribe）</p><h4 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h4><figure><img src="https://pic4.zhimg.com/80/v2-8e0ff877cc1cca67f2283285ea5e2333_720w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="工作原理-1" tabindex="-1"><a class="header-anchor" href="#工作原理-1" aria-hidden="true">#</a> 工作原理</h3><p>迭代器模式：当多个操作符时，组合成多个可迭代对象的集合，执行时依次调用 next 函数。 <img src="https://pic1.zhimg.com/80/v2-6841d50dfa86e715e056b4b72489f5cc_720w.webp" alt="" loading="lazy"> 源码实现</p><ul><li>操作符传入 pipe</li><li>pipe 将操作符转换成可迭代的 Array</li><li>subscribe（执行流）时消费操作符逻辑 如图 <img src="https://pic1.zhimg.com/80/v2-1969ec6061d9c1afda762cd3dca38d50_720w.webp" alt="" loading="lazy"> 操作符转换 Array 源码</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export function pipeFromArray(fns: Array&lt;Function&gt;): Function {
    if (fns.length === 0) {
        return (x: any) =&gt; x;
    }

    if (fns.length === 1) {
        return fns[0];
    }

    return (input: any) =&gt; {
        return fns.reduce((prev: any, fn: Function) =&gt; fn(prev), input);
    };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建自定义操作符" tabindex="-1"><a class="header-anchor" href="#创建自定义操作符" aria-hidden="true">#</a> 创建自定义操作符</h3><h4 id="方式一" tabindex="-1"><a class="header-anchor" href="#方式一" aria-hidden="true">#</a> 方式一</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const isEven = () =&gt; {
    return (source: Observable&lt;any&gt;) =&gt; {
        return new Observable&lt;any&gt;(observer =&gt; {
            const subscription = source.subscribe((x) =&gt; {
                observer.next(x % 2 === 0);
                observer.complete();
            })
            return () =&gt; subscription.unsubscribe();
        })
    }
}
new Observable(observer =&gt; {
    observer.next(7);
})
    .pipe(isEven())
    .subscribe(console.log);
// 执行结果：false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方式二-基于-lift" tabindex="-1"><a class="header-anchor" href="#方式二-基于-lift" aria-hidden="true">#</a> 方式二：基于 lift</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const odd = () =&gt; {
    const operator: Operator&lt;any, any&gt; = {
        call(subscriber: Subscriber&lt;any&gt;, source: any) {
            const subscription = source.subscribe((x: any) =&gt; subscriber.next(x % 2 !== 0));
            return () =&gt; {
                subscription.unsubscribe();
            };
        },
    }
    return operator;
}

new Observable(observer =&gt; {
    observer.next(7);
})
    .lift(odd())
    .subscribe(console.log)
// 执行结果 true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lift-源码" tabindex="-1"><a class="header-anchor" href="#lift-源码" aria-hidden="true">#</a> lift 源码</h3><figure><img src="https://pic2.zhimg.com/80/v2-629220e6a807bf139677087aeac4b749_720w.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="阅读弹珠-大理石图" tabindex="-1"><a class="header-anchor" href="#阅读弹珠-大理石图" aria-hidden="true">#</a> 阅读弹珠/大理石图</h3><p>学会阅读弹珠图是快速理解 Rx 操作符的手段之一，有些操作符需要描述时间流逝以及序列，所以弹珠图有很多的标识和符号，如下图。 <img src="https://pic2.zhimg.com/80/v2-f195267ae3bc167442225b11187ebec1_720w.webp" alt="" loading="lazy"> 这里有几个用来理解大理石图的网站：</p>`,22),S={href:"https://rxviz.com/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://rxmarbles.com/",target:"_blank",rel:"noopener noreferrer"},_=d(`<h3 id="学习参考" tabindex="-1"><a class="header-anchor" href="#学习参考" aria-hidden="true">#</a> 学习参考</h3><ul><li>Async.js</li><li>Lodash</li></ul><h2 id="调度器-scheduler" tabindex="-1"><a class="header-anchor" href="#调度器-scheduler" aria-hidden="true">#</a> 调度器（Scheduler）</h2><h3 id="何为调度器" tabindex="-1"><a class="header-anchor" href="#何为调度器" aria-hidden="true">#</a> 何为调度器</h3><p>调度器，Scheduler 用来控制数据推送节奏的，RxJS 有自己的基准时钟和一套的执行规则，来安排多个任务/数据该如何执行。</p><p>官方定义：</p><ul><li>Scheduler 是一种数据结构</li><li>Scheduler 是一个执行环境</li><li>Scheduler 是一个虚拟时钟</li></ul><h4 id="种类-模式" tabindex="-1"><a class="header-anchor" href="#种类-模式" aria-hidden="true">#</a> 种类/模式</h4><table><thead><tr><th>种类</th><th>描述</th></tr></thead><tbody><tr><td>null</td><td>不传递或 null 或 undefined，表示同步执行</td></tr><tr><td>queue</td><td>使用队列的方式执行</td></tr><tr><td>asap</td><td>全称：as soon as possible ，表示尽快执行</td></tr><tr><td>async</td><td>使用 setInterval 的调度。</td></tr></tbody></table><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h4><p>下面我们举例略窥一下各个模式的表现。 null/undefined/sync</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { asapScheduler, asyncScheduler, from } from &#39;rxjs&#39;;
function syncSchedulerMain() {
    console.log(&#39;before&#39;);
    from([1, 2, 3]).subscribe(console.log)
    console.log(&#39;after&#39;);
}
syncSchedulerMain();
// 执行结果：
// before
// 1
// 2
// 3
// after
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>asap</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function asyncSchedulerMain() {
    console.log(&#39;asyncScheduler: before&#39;);
    from([1, 2], asyncScheduler).subscribe(console.log)
    Promise.resolve(&#39;asyncScheduler: promise&#39;).then(console.log);
    console.log(&#39;asyncScheduler: after&#39;);
}
// 执行结果：
// asapScheduler: before
// asapScheduler: after
// 1
// 2
// asapScheduler: promise
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从结果示，from 的数据的输出顺序是在 console.log（同步代码）之后，promise.then 之前的。 async</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function asapSchedulerMain() {
    console.log(&#39;asapScheduler: before&#39;);
    from([1, 2, 3], asapScheduler).subscribe(console.log)
    Promise.resolve(&#39;asapScheduler: promise&#39;).then(console.log);
    console.log(&#39;asapScheduler: after&#39;);
}
// 执行结果：
// asyncScheduler: before
// asyncScheduler: after
// asyncScheduler: promise
// 1
// 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果示，from 数据输出顺序是在 console.log（同步代码）和 Promise.then 之后的。</p><h3 id="工作原理-2" tabindex="-1"><a class="header-anchor" href="#工作原理-2" aria-hidden="true">#</a> 工作原理</h3><p>Scheduler 工作原理可以类比 JS 中的调用栈和事件循环，从实现上 aspa和 async也的确交给事件循环来处理。null /undefined相当于调用栈，aspa相当于事件循环中的微任务，async相当于宏任务，可以肯定的是微任务执行时机的优先级比宏任务要高，所以从执行时机来看 null &gt; aspa &gt; async。queue运行模式根据 delay 的参数来决定，如果是 0，那么就用同步的方式执行，如果大于 0，就以 async 模式执行。 <img src="https://pic4.zhimg.com/80/v2-29ee2457b4da06b91aac53621bb4c167_720w.webp" alt="" loading="lazy"></p><h3 id="使用原则-策略" tabindex="-1"><a class="header-anchor" href="#使用原则-策略" aria-hidden="true">#</a> 使用原则/策略</h3><p>RxJS Scheduler 的原则是：尽量减少并发运行。</p><ul><li>对于返回有限和少量消息的 observable 的操作符，RxJS 不使用调度器，即 null 或 undefined 。</li><li>对于返回潜在大量的或无限数量的消息的操作符，使用 queue 调度器。</li><li>对于使用定时器的操作符，使用 aysnc 调度器。</li></ul><h3 id="支持调度器的操作符" tabindex="-1"><a class="header-anchor" href="#支持调度器的操作符" aria-hidden="true">#</a> 支持调度器的操作符</h3><p>of 、 from 、 timer 、 interval 、 concat 、 merge 、 combineLatest ，更多戳 这里。</p><p>bufferTime 、 debounceTime 、 delay 、 auditTime 、 sampleTime 、 throttleTime 、 timeInterval 、 timeout 、 timeoutWith 、 windowTime 这样时间相关的操作符全部接收调度器作为最后的参数，并且默认的操作是在 Scheduler.async 调度器上。</p><p>OK，关于调度器我们先了解到这里。</p>`,26);function z(w,O){const i=l("ExternalLinkIcon");return s(),t("div",null,[e("p",null,[a("参考原作者网址："),e("a",b,[a("https://zhuanlan.zhihu.com/p/583539989"),r(i)])]),o,e("p",null,[a("其中 Generator 和 Async/await 在异步编程是以等待的方式处理 5. ReactiveX ReactiveX，简称 Rx，是基于响应式的扩展，是各种语言实现的一个统称，除了我们所知道的 RxJS，还有 RxJava、"),e("a",h,[a("http://Rx.NET"),r(i)]),a("、RxKotlin、RxPHP.....它最早是由微软提出并引入到 .NET 平台中，随后 ES6 也引入了类似的技术。 它扩展了观察者模式，以支持数据序列和/或事件，并添加了操作符，允许您以声明的方式将序列组合在一起，同时抽象出诸如低级线程、同步、线程安全、并发数据结构和非阻塞I/O等问题。")]),u,e("ul",null,[p,v,m,g,e("li",null,[a("易于测试 更多详细看这篇 不完全指南["),e("a",f,[a("https://pingcode.com/pages/taOxc8Afhg# 《函数式编程》"),r(i)]),a("]")])]),x,e("ul",null,[e("li",null,[e("a",S,[a("https://rxviz.com/"),r(i)])]),e("li",null,[e("a",y,[a("https://rxmarbles.com/"),r(i)])])]),_])}const k=n(c,[["render",z],["__file","Rxjs基础.html.vue"]]);export{k as default};
