const assert = require("assert");

//给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
//
// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nu
//ms2 的元素。
//
//
//
// 示例 1：
//
//
//输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//输出：[1,2,2,3,5,6]
//
//
// 示例 2：
//
//
//输入：nums1 = [1], m = 1, nums2 = [], n = 0
//输出：[1]
//
//
//
//
// 提示：
//
//
// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[i] <= 109
//
// Related Topics 数组 双指针
// 👍 916 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  const arr = [];

  while (i < m || j < n) {
    if (i === m) {
      arr.push(nums2[j++]);
    } else if (j === n) {
      arr.push(nums1[i++]);
    } else if (nums1[i] < nums2[j]) {
      arr.push(nums1[i++]);
    } else {
      arr.push(nums2[j++]);
    }
  }
  for (let k = 0; k < m + n; k++) {
    nums1[k] = arr[k];
  }
};

/**
 * 测试用例，请通过所有 assertion
 */
async function test() {
  const nums1 = [1, 2, 3, 0, 0, 0];
  merge(nums1, 3, [2, 5, 6], 3)
  assert.deepStrictEqual(nums1, [1, 2, 2, 3, 5, 6]);
}

test().then(() => {
  console.log("passed!");
});
