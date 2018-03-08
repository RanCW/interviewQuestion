/**
 * Created by pc100 on 2018/3/7 0007.
 */
function animal(name) {
  this.name=name;
}
animal.prototype.sayName=function () {
  console.log(`${this.name} from sayName`);
}
function cat(age) {
  this.age=age
}

cat.prototype=new animal('cat');

var test=new cat(1);
console.log(test.age);    //test实例化cat后自身的
console.log(test.name);  //
test.sayName();
console.log(test.toString());