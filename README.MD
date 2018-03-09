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

## 性能优化

1. 如何进行网站性能优化。
 * content 方面：
   1. 减少http请求：合并文件、CSS sprite图、inline Image
   2. 减少DNS查询：DNS查询完成前浏览器不能从这个主机上下载任何文件。方法：DNS缓存、将资源分布到恰当数量的主机名，平衡并行下载和DNS查询。
   3. 避免重定向：避免多余的中间访问
   4. 使用Ajax缓存
   5. 非必须组件延迟加载
   6. 未来所需组件预加载
   7. 减少DOM 元素数量
   8. 将资源放到不同的域名下：流量器同时从一个域下载资源的数目有限，增加域，可以提高并行下载数量
   9. 减少 iframe数量
   10. 杜绝404
   
 * Server方面
    1. 使用CDN
    2. 添加 Expires或者Cache-Control响应头：为了使用缓存
    3. 对组件使用Gzip压缩
    4. 配置ETag：使用缓存
    5. Flush Buffer Early
    6. Ajax使用GET请求
    7. 避免使用空src的img标签
 
 * cookie方面
    1. 减少cookie大小
    2. 引入资源的域名不要包含cookie
    
