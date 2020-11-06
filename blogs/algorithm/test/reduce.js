Array.prototype.myReduce = function (fn, initial) {
  if (typeof fn !== 'function') {
    throw new TypeError(`${fn} is not a function`);
  }

  // 数组为空，并且有初始值，报错
  if (this.length === 0 && arguments.length < 2) {
    throw new TypeError('Reduce of empty array with no initial value at Array.reduce')
  }
  const len = this.length;
  let value;
  let i = 0;
  if (initial !== undefined) {
    value = initial;
  } else {
    value = this[0];
    i = 1;
  }

  for (; i < len; i++) {
    value = fn(value, this[i], i, this);
  }

  return value;
}

const reduceTest = [1, 2, 3].myReduce((res, item) => res + item, 4);

function deepClone(obj) {
  // 非引用类型
  if (typeof obj === 'string' || typeof obj === 'number') {
    return obj;
  }

  // 引用类型
  let newObj = {};
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    switch (typeof value) {
      case "function":
        newObj[key] = value.bind(newObj);
        break;
      case "object":
        if (Array.isArray(value)) {
          newObj[key] = value.map(item => deepClone(item));
        } else if (value !== null) {
          newObj[key] = deepClone(value)
        }
        break;
      default:
        newObj[key] = value;
    }
  })
  return newObj;
}

const obj = {
  a: 1,
  b: 'zfh',
  c: undefined,
  d: function () {
    console.log('a function')
  }
};
const deepCloneTest = deepClone(obj);

function curry() {
  let args = Array.prototype.slice.call(arguments);
  let add = function () {
    args.push(...arguments);
    return add;
  }
  add.toString = function () {
    return args.reduce((a, b) => a + b);
  }
  return add;
}

const curryTest1 = curry(1, 2) // 3
const curryTest2 = curry(1, 2)(3) // 6
const curryTest3 = curry(4, 5)(10) // 19

const letterCasePermutation = S => {
  const ans = []
  const backtrack = (str, i) => {
    if (i === S.length) {
      return ans.push(str)
    }

    const curr = S[i];
    if ((curr >= 'A' && curr <= 'Z') || (curr >= 'a' && curr <= 'z')) {  // 大小写字母搜索两次
      const low = str + curr.toLowerCase();
      const high = str + curr.toUpperCase();
      console.log({low, high, curr, i: i + 1});
      backtrack(low, i + 1);
      backtrack(high, i + 1);
    } else {  // 数字的话,直接继续递归
      backtrack(str + curr, i + 1);
    }
  }
  backtrack("", 0);
  return ans
}

const permutation = letterCasePermutation('a1b2');

console.log({permutation})
