## 前端三剑客

- [x] HTML
- [x] CSS
- [x] JavaScript

#### HTML5新特性

- 语义化标签，如**header**、**footer**、**nav**、**section**、**aside**等
- 增强型表单，**color**、**date**、**email**、**month**、**tel**、**time**等新增的表单Input输入类型，**placeholder**、**required**、**pattern**、**min**、**max**、**height**、**width**等新增的表单属性
- 音频和视频文件播放的标准，用**audio**元素
- Canvas绘图
- 地理位置，window.navigator.geolocation用于定位用户的位置
- 拖放API
- Web Storage，客户端存储数据的两个对象：**localStorage**  **sessionStorage**
- WebSocket，html5提供的一种在单个TCP连接上进行全双工通讯的协议

#### ES6新特性

- **Default Parameters**（默认参数）

  ```javascript
  const link = function(height = 50, color = 'red, url = 'https://baidu.com'){
  	...
  }
  ```

- **Template Literals**（模板对象）

  ```javascript
  const name = `My name is ${firstname} ${lastname}`
  ```

- **Multi-line Strings**（多行字符串），使用反引号**``**即可解决

- **Destructuring Assignment**（解构赋值）

  ```javascript
  const body = request.body;
  const username = body.username;
  const password = body.password;
  //es6
  const { username, password } = request.body;
  ```

- **Enhanced Object Literals**（增强的对象字变量）

- **Arrow Function**（箭头函数）

- **Promise**

  ```javascript
  //fetch GET 请求
  export function fetchGet(url) {
      return new Promise((resolve, reject) => {
          fetch(url, {
              method: 'GET',
              credentials: 'include',
          }).then(response => {
              if (response.status !== 200) {
                  throw new Error('Fail to get response ' + response.status);
              }
              return response.json();
          }).then(data => {
              resolve(data);
          }).catch(error => {
              reject(error);
          });
      });
  }
  ```

- **Block-Scoped Constructs Let and Const** （块作用域和构造let和const）

- **Classes**

- **Modules**（模块）

## 何谓前端工程

前端工程化就是：**代码模块化、功能组件化，打包、构建、发布自动化、流程化**。

在这个“工程化”概念下，最关注的即是：**如何更高效率、更高质量的为用户输出体验更好、能力更多的页面。** 

**高效率**

- ES6+
- 多端统一
- 接口管理与mocker
- 框架、工具库、组件库

**高质量**

- 开发高质量 
- 线上质量保证 
- 应急-快速回滚能力

**更好的体验**

- 多尺寸适配
- 小程序
- 高性能

**能力更多**

- 复杂交互
- native能力
- 动画、游戏

三大框架的出现既为高交互页面提供了可能性，也提高了整体开发效率与质量。比如围绕高效率与高质量会统一建

设一个前端迭代管理系统，负责工程迭代、构建、发布、回滚。

这几年前端领域的突飞猛进，再站在现在这个时期，看前后端未分离的时期，那段后端兼职js、视觉兼职css的上

古年代，确实不能称前端代码为“工程”，更不太好意思说前端程序员为“工程师”。

## 前端技术革命

#### Ajax

Asynchronous JavaScript and XML（异步 JavaScript 和 XML），2005年2月正式提出。Ajax包括以下几个步骤：

1. 使用原生的**XMLHttpRequest**对象发出HTTP请求；
2. 得到服务器返回的XML(Json)格式的字符串；
3. js解析字符串，并更新页面。

可以看出，Ajax不是什么新的技术，只是对XmlHttpRequest等技术的包装。ajax的深入人心，使得前端js的工作

更加复杂和重要，专业分工越来越细，间接促进了专职的前端开发人员这一角色诞生，在此之前，web开发并不区

分服务端和浏览器端的工作，因此ajax是前端领域的第一次重要事件。

#### Node.js

2009年，node.js（包括**common.js**及**npm**）的出现促进了前端规范化和工程化。它对前端领域的重要意义并不仅仅是让前端可以快速用js写server那么简单，它最大的贡献反而是commonjs、npm以及其便捷开发体验促进的前端工程化。

特点：单线程、非阻塞IO、事件驱动、V8引擎等。

node.js流行以后，基于common.js的模块及npm的包部署和依赖管理成为主流（类似java的maven体系），并诞生了多种基于node.js开发的cli工具辅助前端开发（如grunt、gulp）。而**webpack**的出现，又使得前端代码的部署更加简便，让前端可以类似java war包的形式发布应用（bundle）。

![](/webpack.jpg)

SPA(single-page application)应用是一种特殊的Web应用。它将所有的活动局限于一个Web页面中，仅在该Web页面初始化时加载相应的HTML、JavaScript、CSS。一旦页面加载完成，SPA不会因为用户的操作而进行页面的重新加载或跳转，而是利用JavaScript动态的变换HTML，从而实现UI与用户的交互。

#### 前端框架

MVC框架提出的数据流很理想，用户请求先到达Controller，由Controller调用Model获得数据，然后把数据交给View，但是，在实际框架实现中，总是允许View和Model可以直接通信。每当工程师想要增加一个新的功能时，对代码的修改很容易引入新的bug，因为不同模块之间的依赖关系让系统变得“脆弱而且不可预测”。

服务器端MVC框架往往就是每个请求就只在Controller-Model-View三者之间走一圈，结果就返回给浏览器去渲染或者其他处理了，然后这个请求生命周期的Controller-Model-View就可以回收销毁了，这是一个严格的单向数据流；对于浏览器端MVC框架，存在用户的交互处理，界面渲染出来之后，Model和View依然存在浏览器中，这时候就会诱惑开发者为了简便，让现存的Model和View直接通信。

![mvc](/mvc.png)

**MVVM**是**Model-View-ViewModel**的简写，即模型-视图-视图模型。【模型】指的是后端传递的数据。【视图】指的是所看到的页面。【视图模型】mvvm模式的核心，它是连接View和Model的桥梁。。总结：在MVVM的框架下视图和模型是不能直接通信的。它们通过ViewModel来通信，ViewModel通常要实现一个observer观察者，当数据发生变化，ViewModel能够监听到数据的这种变化，然后通知到对应的视图做自动更新，而当用户操作视图，ViewModel也能监听到视图的变化，然后通知数据做改动，这实际上就实现了数据的双向绑定。并且MVVM中的View 和 ViewModel可以互相通信。

![](/th.jpg)

**一个MVVM框架和jQuery操作DOM相比有什么区别？**
我们先看用jQuery实现的修改两个DOM节点的例子：

```html
<!-- HTML -->
<p>Hello, <span id="name">Bart</span>!</p>
<p>You are <span id="age">12</span>.</p>

Hello, Bart!

You are 12.
```

用jQuery修改name和age节点的内容：

```javascript
var name = 'Homer';
var age = 51;

$('#name').text(name);
$('#age').text(age);
```

如果我们使用MVVM框架来实现同样的功能，我们首先并不关心DOM的结构，而是关心数据如何存储。最简单的数据存储方式是使用JavaScript对象：

```javascript
var person = {
    name: 'Bart',
    age: 12
}
```

我们把变量person看作Model，把HTML某些DOM节点看作View，并假定它们之间被关联起来了。

要把显示的name从Bart改为Homer，把显示的age从12改为51，我们并不操作DOM，而是直接修改JavaScript对象：

```javascript
person.name = 'Homer';
person.age = 51;
```

执行上面的代码，我们惊讶地发现，改变JavaScript对象的状态，会导致DOM结构作出对应的变化！这让我们的关注点从如何操作DOM变成了如何更新JavaScript对象的状态，而操作JavaScript对象比DOM简单多了！

#### 三大MVVM框架

- [x] **Vue**

  Vue框架诞生于2014年，其作者为中国人——尤雨溪，也是新人最容易入手的框架之一，不同于React和Angular,其中文文档也便于大家阅读和学习。

- [x] **React**

  React起源于Facebook的内部项目，因为该公司对市场上所有JavaScript MVC框架，都不满意，就决定自己写一套，用来架设Instagram的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。

- [x] **Angular**

  Angular是谷歌开发的 Web 框架，具有优越的性能和绝佳的跨平台性。通常结合TypeScript开发，也可以使用JavaScript或Dart，提供了无缝升级的过渡方案。于2016年9月正式发布。

总结一下，Ajax使得前端的角色逐渐分离出来，node.js促进了前端的开发模式向传统编程语言靠近（工程化），前端MVVM框架的出现让前端的技术体系逐步成熟和标准化

## 前端的焦虑

如果从整个软件工程来看，这时候我们就会意识到一个惨痛的事实：**前端工程在整个系统工程中的地位太低了**。对于大多数只涉及web页面工程的同学来说，望着这个巨大的软件系统工程，即使有心，似乎也无力。

前端工程在一个软件系统中是处于最上游的（用户入口）。因此，也就没有其他系统需要调取前端系统的服务。在整个软件系统中，前端对接的系统少，所影响的系统也少，工程地位低。不像后端，它既需要为前端提供能力，又需要问中后台、数据层索取能力，也可能需要问其他业务后端索取能力，对接系统很多，工程地位自然也高。

由此又会导致，**前端往往不是产品能否实现的决定性因素**。在软件系统中，需要上游系统调取下游系统服务。换言之，上游依托于下游。这自然而然的导致技术评估从下游开始。到前端评估时，已经是最后一道坎了。而这一道坎，业务方往往是无论如何也得过的。如果坎比较高（交互视觉难以实现），最终也是通过降低交互复杂度与用户体验，来保证产品功能先上。

前端仿佛一直处在焦虑当中。前两年的主要矛盾是**日益爆发的前端新技术同前端程序员学不动之间的矛盾**。而这一两年前端技术栈趋于稳定，轮子相对也少了。加上前端程序员也比较拼，学不动的感觉也随着无数个夜晚的学习而渐渐逝去。

这时候前端又开始了新的焦虑，前端的天花板是不是太低？工资是不是没后端高？前端开发的壁垒在哪里？我认为我们的主要矛盾已经发生了变化，变成了**前端日益增长的工程地位诉求同前端工程局限性之间的矛盾**。

聪明或勤奋，再加上时间的积累，总是能解决“学不动”的问题的。但前端工程地位诉求怕是自身再怎么努力也不一定能解决的。解决当下前端焦虑的办法只能是打破前端工程局限，增加前端工程影响力，拔高其工程地位。最终让**前端人员也能在软件系统工程中当家做主，平等的参与到软件系统建设当中**。

只有前端崛起，前端工程师才能摆脱焦虑，而这不是一两个人的战斗，需要大家一起去努力实现。
