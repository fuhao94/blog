const assert = require("assert");

//假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
//
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
//
// 注意：给定 n 是一个正整数。
//
// 示例 1：
//
// 输入： 2
//输出： 2
//解释： 有两种方法可以爬到楼顶。
//1.  1 阶 + 1 阶
//2.  2 阶
//
// 示例 2：
//
// 输入： 3
//输出： 3
//解释： 有三种方法可以爬到楼顶。
//1.  1 阶 + 1 阶 + 1 阶
//2.  1 阶 + 2 阶
//3.  2 阶 + 1 阶
//
// Related Topics 动态规划
// 👍 1598 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * 遵循 F(n) = F(n-1) + F(n-2)
 * @return {number}
 */
var climbStairs = function (n) {
  // p === n - 2
  // q === n - 1
  let p = 0, q = 0, r = 1;
  for (let i = 1; i <= n; ++i) {
    p = q;
    q = r;
    r = p + q;
    console.log({i, p, q, r})
  }
  return r;
};

const byRecursive = (n) => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return byRecursive(n - 1) + byRecursive(n - 2);
}

/**
 * 测试用例，请通过所有 assertion
 */
async function test() {
  // assert.deepStrictEqual(climbStairs(3), 3);
  // assert.deepStrictEqual(climbStairs(4), 5);
  assert.deepStrictEqual(climbStairs(5), 8);
}

test().then(() => {
  console.log("passed!");
});
