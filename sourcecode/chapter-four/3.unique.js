const array = [{
  name:"freemen",
  age:18
},{
  name:"freemen",
  age:18
}];

const result = Array.from(new Set(array));

console.log(`result`, result);

// es6 中实现数组去重的方法是 Array.from 配合 new Set