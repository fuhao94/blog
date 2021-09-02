{
  const condition1 = 'condition1', condition2 = 'condition2', A1 = 'A1', A2 = 'A2', B1 = 'B1', B2 = 'B2', C1 = 'C1',
    C2 = 'C2', D1 = 'D1';
  // 正常的写法...
  if (condition1 === A1) {
    if (condition2 === A2) {
      // ...
    } else if (condition2 === B2) {
      // ...
    } else if (condition2 === C2) {
      // ...
    } else {
      // ...
    }
  } else if (condition1 === B1) {
    // ...
    // ...
    // ...
  } else if (condition1 === C1) {
    // ...
    // ...
    // ...
  } else if (condition1 === D1) {
    // ...
    // ...
    // ...
  } else {
    // ...
  }
}

{
  // 责任链模式
  // ---
  // 参数输入到一个初始函数中，如果不满足当前函数条件，则传递到下一函数中进行处理，满足停止，不满足再传递，这样 one by one 向后进行，直至满足条件或传递结束。
  class Chain {
    constructor(fn) {
      this.fn = fn;
      this.successor = null;
    }

    next(successor) {
      return this.successor = successor;
    }

    setParams() {
      const ret = this.fn.apply(this, arguments);
      if (ret === 'next') {
        return this.successor && this.successor.setParams.apply(this.successor, arguments)
      }
      return ret;
    }
  }

  // 执行部分
  // ---
  const chainA1 = new Chain(A1);
  const chainB1 = new Chain(B1);
  const chainC1 = new Chain(C1);
  const chainD1 = new Chain(D1);
  const chainA2 = new Chain(A2);
  const chainB2 = new Chain(B2);
  const chainC2 = new Chain(C2);
  const condition2 = 'B2';

  function A1(condition1) {
    chainA2.next(chainB2).next(chainC2);
    return condition1 === 'A1' ? chainA2.setParams(condition2) : 'next'
  }

  function B1(condition1) {
    return condition1 === 'B1' ? 'B1' : 'next'
  }

  function C1(condition1) {
    return condition1 === 'C1' ? 'C1' : 'next'
  }

  function D1(condition1) {
    return condition1 === 'D1' ? 'D1' : 'next'
  }

  function A2(condition2) {
    return condition2 === 'A2' ? 'A2' : 'next'
  }

  function B2(condition2) {
    return condition2 === 'B2' ? 'B2' : 'next'
  }

  function C2(condition2) {
    return condition2 === 'C2' ? 'C2' : 'next'
  }

  chainA1.next(chainB1).next(chainC1).next(chainD1)

  chainA1.setParams('B1'); // B1
}


