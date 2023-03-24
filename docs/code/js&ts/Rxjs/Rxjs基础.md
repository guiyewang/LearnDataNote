---
article: false
title: Rxjs基础
order: 1
date: 2023-03-23 16:05:52
---
参考原作者网址：https://zhuanlan.zhihu.com/p/583539989
# 概览
![整体概览](https://pcsdata.baidu.com/thumbnail/ab7aedfcej8594bdb7d41dc5c58347a0?fid=2519193222-16051585-924785488063881&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-9eC1YhIZa691dDliHqSTTzNGCVA%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8811769800559562111&dp-callid=0&time=1679558400&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video)
# 深入理解 RxJS
全面理解一个事物，追溯其历史是一种好的方式，RxJS 的起源需要追溯到响应式编程（RP），后续产生了一系列基于响应式编程范式的语言扩展（Rx，RxJS 就是其中之一），请看历史简谱（左向右延续）。
![](https://pcsdata.baidu.com/thumbnail/1a5856d77o8d69cd3a0fd37e42c5cbfe?fid=2519193222-16051585-234629487524354&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-779jToZi5uCXNTFZ5%2FxvyHi7z9E%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8811809125656663569&dp-callid=0&time=1679558400&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video)
- 何为响应式
>一个例子  
为了避免上来就接触晦涩的概念，先来举个例子：博客平台关注功能。话说你偶然浏览到阿杰的文章，觉得写的很赞，于是你关注了他的博客账号，以便不会错过之后的干货，在以后的日子里阿杰每发布一篇文章博客平台都会给你推送一条消息，提醒你来给他点点赞，假设博客平台没有关注的功能，那么你需要想知道他的最新动态就只能打开他的个人主页查看文章列表来确认，也许稍不留意就会错过他的文章。这个例子出现了粉丝关注博主、博主发布博客、平台自动推送给粉丝消息、给文章点赞，这就形成了响应式闭环，平台在观察到博主粉丝只需要关注一下就能收到博主以后的动态，这就是响应式带来的好处。  
响应式和发布订阅模式比较像。

>为了实现解耦例子：  
当A模块需要B模块消息，则需要B模块引用A模块进行传参。功能改了后A模块取消，则B模块也要跟着进行更改。如果用响应式。A只需要通过“中间然RX”订阅B的RX消息就可以接收到B发的消息。A模块如果消失则B不需要改动。

## 响应式编程
> 概念
> 响应式编程，Reactive Programing，又称反应式编程，简称 RP，是一种以传播数据流（数据流概念戳这里 ）的编程范式。  
> 响应式编程或反应式编程（英语：Reactive programming）是一种面向数据流和变化传播的声明式编程范式。这意味着可以在编程语言中很方便地表达静态或动态的数据流，而相关的计算模型会自动将变化的值通过数据流进行传播。

>优势:
>1. 声明式，方便地表达静态或动态的数据流
>2. 自动化，自动将变化的值通过数据流进行传播
>3. 核心思想：从传统的调用方“拉”数据的思维模式转变为被调用方“推”数据的思维模式。

### JS 异步编程史
> 众所周知，JS 执行环境是单线程的，在事件监听，异步的处理，响应式编程毋庸置疑是其中的一大主力
1. Callback 时代  
回调函数延续至今，JS 的运用高阶函数巧妙地将异步后的逻辑进行托管，以事件驱动的方式来解决异步编程，但它有一个“臭名昭著”的问题：回调嵌套，耦合度高。本来很简单的逻辑但为了控制执行流程却不得不写大量的代码，当时产生了一些知名的库：async、bluebrid，它们封装和处理了嵌套问题，暴露出更为简单好用的 API，额外还可以优雅地处理流程控制相关场景，但所做的只是划分了逻辑，依旧没有解决代码臃肿的问题。
2. Promise 时代
ES6 纳入 Promise 之后可谓一大喜讯，因为它解决了回调嵌套的问题，虽然它只是回调的语法糖，但在处理流程和捕获错误（外层处理）已经非常的优雅了，但它的弊端是：无法监听和打断 Promise 的状态。这意味着一旦声明它会立即执行并修改它的执行状态，这源于它的实现。
3. Generator
Generator 是处于 Promise 和 Async/await 之间的产物，它给我们带来了写异步语法像写同步一般，只需在函数前加 * 修饰，这样就可以在函数内部使用一个 yield 关键字返回结果，类似于 await ，但它也并非完美，不然也不会有后面的 Async/await 了，它的主要问题是流程管理不方便（迭代器模式实现，主动调 next 执行器流转游标）。
4. Async/await
Async/await 是 Generator 语法糖，既保留了语法上的优势，也解决了 Generator 每步要调一下 next 执行器的弊端，是现阶段的最佳方案，就是得吐槽一下 Top-level await 到 ES2022 才出现。

其中 Generator 和 Async/await 在异步编程是以等待的方式处理
5. ReactiveX
ReactiveX，简称 Rx，是基于响应式的扩展，是各种语言实现的一个统称，除了我们所知道的 RxJS，还有 RxJava、http://Rx.NET、RxKotlin、RxPHP.....它最早是由微软提出并引入到 .NET 平台中，随后 ES6 也引入了类似的技术。 
它扩展了观察者模式，以支持数据序列和/或事件，并添加了操作符，允许您以声明的方式将序列组合在一起，同时抽象出诸如低级线程、同步、线程安全、并发数据结构和非阻塞I/O等问题。

### RxJS
RxJS 全称 Reactive Extensions for JavaScript，翻译过来是 Javascript 的响应式扩展，它是一个采用流来处理异步和事件的工具库，简单来说 Rx(JS) = Observables + Operator + Scheduler。
擅长做的事：
- UI 事件：例如鼠标移动、按钮单击......
- 状态管理：例如属性更改、集合更新等事件
- IO 消息事件：服务监听
- 广播/通知：消息总线（Event bus）
- 网络消息/事件：例如 HTTP、- WebSockets API 或其他低延迟中间件  

最大的优势：异步事件的抽象，这意味着可以把很多事统一起来当作一种方式处理，从而让问题变得更简单，同时也降低了学习成本。  
注意：RxJS 擅长做异步的事，不代表不可以做同步或不擅长同步的事。

### RxJS 在 Angular 中的应用
RxJS 在 Angular 中及其重要，很多核心- 模块都是由 RxJS 实现的，比如：
- 响应式表单
- 路由
- HttpClient（封装的 ajax，类似于 - axios）
- async 管道符
- 状态管理
# RxJS 核心概念—— Observables
![](https://pcsdata.baidu.com/thumbnail/4af635694g9e84566bf44ed6c97c82b5?fid=2519193222-16051585-11985613925763&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-jg%2FuHz36waWg5NXICBB2RSJRSLE%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8812291484175452425&dp-callid=0&time=1679558400&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video)
RxJS 中的 Observables 系列是围绕观察者模式来实现的，基本角色：
- Observable：被观察者，用来产生消息/数据。
- Observer：观察者，用来消费消息/数据。
## Observable
Observeable 是观察者模式中的被观察者，它维护一段执行函数，提供了惰性执行的能力（subscribe）。
### 核心函数
- constructor(_subscribe) : 创建 Observeable
- static create(_subscribe)：静态函数创建 Observeable
- pipe()：管道
- subscribe()：执行初始化传入的 _subscribe
> RxJS 中 Observeable 是一等公民，将一切问题都转化为 Observable 去处理。转换的操作符有from 、 fromEvent 、 of 、 timer 等等，更多戳 这里。
注意的是：只有 ObservableInput 或 SubscribableOrPromise 类型的值才可以转化为 Observable。

### 基本使用
![](https://pcsdata.baidu.com/thumbnail/7e398fbd9j9c4764581275b210906b36?fid=2519193222-16051585-448049421592739&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-zNWl48IRi9zM8QVzUtjHMgblPiI%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8812341880221552272&dp-callid=0&time=1679558400&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video)
### Observable 与 Promise
它们关键性的不同点：
|	|Observable	|Promise|
|---|---|---|
|使用场景	|同步、异步均可使用	用 Promise |包裹的多数是异步场景|
|执行时机	|声明式惰性执行，只有在订阅后才会执行	|创建时就立即执行|
|执行次数	|多次调用 subscribe 函数会执行多次	|只有第一次执行，后续都是取值|
|流程控制	|相较于 Promise 有更为全面的操作符	|提供串行、并行的函数|
|错误处理	|subscribe 函数捕获错误	|.catch 捕获|
总的来说，Promise 可读性更优，Observable 从使用场景更为全面。
### 两者的相互转换
在既使用了 RxJS 又引用了用 Promise 封装的库时，两者相互转换是容易碰到的问题，RxJS 提供了两者转换的函数。
### Promise 转 Observable
from 或 fromPromise（弃用） 操作符
```
const observable$ = from(fetch('http://xxx.com/'));
```
Observable 转 Promise
```
const promise = of(42).toPromise();
const errorPromise = throw(new Error('woops')).toPromise();
errorPromise.catch(err=> console.error);
```

### Subscriber/Observer
Subscriber/Observer 是观察者模式中的观察者/消费者，它用来消费/执行 Observable 创建的函数。
### 核心能力

- next （传值）
- error （错误处理）
- complete （完成/终止）

![](https://pic1.zhimg.com/80/v2-f92cfbc57046528faabf6fb0de7c9e90_720w.webp)