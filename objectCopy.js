/**
 * Created by ranchengwei on 2018/3/8 0008.
 * 对象的深拷贝和浅拷贝
 */

/**
 * 浅拷贝
 * */
var littleArr=[1,[2,4],3];
var littleObj={name:'小花',age:22};
/**
 * 浅拷贝方法一
 * */
// 数组
var testLA=[].concat(littleArr);
console.log(testLA,littleArr);
testLA[1][0]=0;
console.log(testLA,littleArr);

/**
 * 实现深拷贝的方法一
 * */
var testArr=[[9,8,7],2,3,4,5,6];
var testObj={method:function () {
  console.log('haha');
},name:'小花'};
function copy(parent) {
  let child;
  //判断是数组还是对象
  if(Object.prototype.toString.call(parent)==='[object Array]'){//数组
    child=[];
    for(let index=0;index<parent.length;index++){
      if(Object.prototype.toString.call(parent[index])==='[object Array]' ||Object.prototype.toString.call(parent[index])==='[object Object]'){//数组或对象
        child.push(copy(parent[index]));
      } else {
        child.push(parent[index]);
      }
    }
  }else if(Object.prototype.toString.call(parent)==='[object Object]'){//对象
    child={};
    for(let key in parent){
      if(Object.prototype.toString.call(parent[key])==='[object Array]' ||Object.prototype.toString.call(parent[key])==='[object Object]'){//数组或对象
        child[key]=copy(parent[key]);
      } else {
        child[key]=parent[key];
      }
    }
  }else{
    return parent;
  }
  return child;
}

//测试数组的深拷贝
// var copyArr=copy(testArr);
// console.log(copyArr,testArr);
// testArr[0]='ji';
// console.log(copyArr,testArr);

//测试对象的深拷贝
// var copyObj=copy(testObj);
// console.log(copyObj,testObj);
// copyObj.method='method';
// console.log(copyObj,testObj);
// testObj.method();
