const assert = require("assert");
/**
 * 假设 transformInTheSpace 函数的作用是将一组数字发送至太空，
 * 在空间站进行计算后（每个数字 * 2 + 1）再发送回地球。
 *
 * 由于传输距离远，我们需要非常关注函数的执行次数，因为每次执行
 * 都将消耗大量时间进行传输。
 */
let executeCount = 0;

async function transformInTheSpace(nums) {
  executeCount++;
  return nums.map((num) => 2 * num + 1);
}

/**
 * 为了优化 transformInTheSpace，我们决定设计一个 batcher 函数，
 * 将 transformInTheSpace 函数作为参数传递给 batcher 后，会返回
 * 优化后的 batchedSumInTheSpace 函数。
 *
 * batchedSumInTheSpace 的行为是并发地多次调用时，只会执行 1 次
 * transformInTheSpace，且每次 transformInTheSpace 都可以得到
 * 正确的结果。
 *
 * 具体行为可以查看测试用例
 */
function batcher(fn) {
  /**
   * ！！请在此实现 batcher！！
   */
  let scheduled;
  const batchedNums = [];

  return function (nums) {
    return new Promise(resolve => {
      let start = batchedNums.length;
      let end = nums.length + start;
      batchedNums.push(...nums);

      setTimeout(() => {
        if (!scheduled) {
          scheduled = fn(batchedNums);
        }

        scheduled.then((results) => {
          resolve(results.slice(start, end));
        })
      }, 0)
    })
  }
}

const batchedSumInTheSpace = batcher(transformInTheSpace);

async function main() {
  /**
   * 测试用例，请通过所有 assertion
   */
  const [result1, result2, result3] = await Promise.all([
    batchedSumInTheSpace([1, 2, 3]),
    batchedSumInTheSpace([4, 5]),
    batchedSumInTheSpace([6, 7]),
  ]);
  assert.deepStrictEqual(result1, [3, 5, 7]);
  assert.deepStrictEqual(result2, [9, 11]);
  assert.deepStrictEqual(result3, [13, 15]);
  assert.deepStrictEqual(executeCount, 1);
}

main().then(() => {
  console.log("passed!");
});
