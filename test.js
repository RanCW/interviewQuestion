/**
 * Created by pc100 on 2018/3/7 0007.
 */

/**for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(new Date, i);
  }, 1000);
}

 console.log(new Date, i);
 //输出结果如下
 // 2018-03-07T02:56:56.113Z 5
 // 2018-03-07T02:56:57.113Z 0
 // 2018-03-07T02:56:57.113Z 1
 // 2018-03-07T02:56:57.113Z 2
 // 2018-03-07T02:56:57.113Z 3
 // 2018-03-07T02:56:57.113Z 4
 */

/**for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(new Date, i);
    }, 1000)
  })(i);
}

 console.log(new Date, i);
 */

/**
 var output = function (i) {
  setTimeout(function() {
    console.log(new Date, i);
  }, 1000);
};

 for (var i = 0; i < 5; i++) {
  output(i);  // 这里传过去的 i 值被复制了，按值传递
}

 console.log(new Date, i);
 //输出结果如下
 // 2018-03-07T02:56:56.113Z 5
 // 2018-03-07T02:56:57.113Z 0
 // 2018-03-07T02:56:57.113Z 1
 // 2018-03-07T02:56:57.113Z 2
 // 2018-03-07T02:56:57.113Z 3
 // 2018-03-07T02:56:57.113Z 4
 */
/***for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(new Date, i);
  }, 1000);
}

 console.log(new Date, i);*/


/**
//需求是先输出0，依次每隔一秒输出1>2>3>4>5
for (var i = 0; i < 5; i++) {
  (function (j) {
      setTimeout(function () {
        console.log(new Date, j);
      }, 1000 * j);  // 这里修改 0~4 的定时器时间
    })(i);
}

setTimeout(function () { // 这里增加定时器，超时设置为 5 秒
  console.log(new Date, i);
}, 1000 * i);
 */


/**

//需求是先输出0，依次每隔一秒输出1>2>3>4>5
const tasks = [];
for (var i = 0; i < 5; i++) {   // 这里 i 的声明不能改成 let，如果要改该怎么做？
  ((j) => {
    tasks.push(new Promise((resolve) => {
      setTimeout(() => {
        console.log(new Date, j);
        resolve();  // 这里一定要 resolve，否则代码不会按预期 work
      }, 1000 * j);   // 定时器的超时时间逐步增加
    }));
  })(i);
}

Promise.all(tasks).then(() => {
  setTimeout(() => {
    console.log(new Date, i);
  }, 1000);   // 注意这里只需要把超时设置为 1 秒
});
 */

/**
 *
//需求是先输出0，依次每隔一秒输出1>2>3>4>5
const tasks = []; // 这里存放异步操作的 Promise
const output = (i) => new Promise((resolve) => {
  setTimeout(() => {
    console.log(new Date, i);
    resolve();
  }, 1000 * i);
});

// 生成全部的异步操作
for (var i = 0; i < 5; i++) {
  tasks.push(output(i));
}

// 异步操作完成之后，输出最后的 i
Promise.all(tasks).then(() => {
  setTimeout(() => {
    console.log(new Date, i);
  }, 1000);
});

 * */

/****/
//ES7 来实现 ，需求是先输出0，依次每隔一秒输出1>2>3>4>5
// const sleep = (timeountMS) => new Promise((resolve) => {
//   setTimeout(resolve, timeountMS);
// });
//
// (async () => {  // 声明即执行的 async 函数表达式
//   for (var i = 0; i < 5; i++) {
//     await sleep(1000);
//     console.log(new Date, i);
//   }
//
//   await sleep(1000);
//   console.log(new Date, i);
// })();


