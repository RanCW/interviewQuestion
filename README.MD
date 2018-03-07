##  前端面试问题整理
###  闭包
```javascript
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000);
}

console.log(new Date, i);
/**
* 输出以下内容
* 2018-03-07T02:14:27.155Z 5
  2018-03-07T02:14:28.155Z 5
  2018-03-07T02:14:28.156Z 5
  2018-03-07T02:14:28.156Z 5
  2018-03-07T02:14:28.156Z 5
  2018-03-07T02:14:28.156Z 5

* */
```
以上代码主要是因为在for循环的过程中，几乎同时创建了5个定时器，因为定时器是任务队列中的宏任务，所以要等执行环境栈中的代码执行完成后才能执行定时器，所以for魂环后面输出5，等一秒后

```javascript
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(new Date, i);
    }, 1000)
  })(i);
}
console.log(new Date, i);
/**
* 2018-03-07T02:53:46.796Z 5
  2018-03-07T02:53:47.796Z 0
  2018-03-07T02:53:47.796Z 1
  2018-03-07T02:53:47.796Z 2
  2018-03-07T02:53:47.796Z 3
  2018-03-07T02:53:47.796Z 4
* */
//或者
var output = function (i) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000);
};

for (var i = 0; i < 5; i++) {
    output(i);  // 这里传过去的 i 值被复制了，按值传递
}

console.log(new Date, i);
/**
* 2018-03-07T02:53:46.796Z 5
  2018-03-07T02:53:47.796Z 0
  2018-03-07T02:53:47.796Z 1
  2018-03-07T02:53:47.796Z 2
  2018-03-07T02:53:47.796Z 3
  2018-03-07T02:53:47.796Z 4
* */
```
```javascript
// 块级作用域
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000);
}

console.log(new Date, i);
```