/**
 * 返回函数集 functions 组合后的复合函数, 也就是一个函数执行完之后把返回的结果再作为参数赋给下一个函数来执行.
 * compose内的函数执行顺序为从右向左，即最右边的函数（最后一个参数）最先执行，执行完的结果作为参数传递给前一个函数（包裹它的函数），一直到整个函数执行完毕，return一个函数
 * @return {function(*): *}
 */
function compose() {
  const args = [].slice.call(arguments);
  return function (initArg) {
    let result = initArg;
    for (let i = args.length - 1; i >= 0; i--) {
      result = args[i](result);
    }
    return result;
  }
}


/**
 * ReduceRight版本
 */
function compose1() {
  const args = [].slice.call(arguments);
  return function (initArg) {
    return args.reduceRight(function (init, current) {
      return current(init);
    }, initArg)
  }
}

const compose = (...fns) => (...args) => fns.reduceRight((val, fn) => fn.apply(null, [].concat(val)), args);
