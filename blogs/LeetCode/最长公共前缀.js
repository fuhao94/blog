//编写一个函数来查找字符串数组中的最长公共前缀。
//
// 如果不存在公共前缀，返回空字符串 ""。
//
//
//
// 示例 1：
//
//
//输入：strs = ["flower","flow","flight"]
//输出："fl"
//
//
// 示例 2：
//
//
//输入：strs = ["dog","racecar","car"]
//输出：""
//解释：输入不存在公共前缀。
//
//
//
// 提示：
//
//
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] 仅由小写英文字母组成
//
// Related Topics 字符串 👍 2195 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) {
    return '';
  }
  let ans = strs[0];

  for (let i = 0; i < strs.length; i++) {
    let j = 0;
    for (;j < ans.length && j < strs[i].length; j++) {
      if (ans[j] !== strs[i][j]) {
        break;
      }
    }
    ans = ans.substring(0, j);
    // 这个判断可以取消后续多余的处理
    if (ans === '') {
      return ans;
    }
  }

  return ans;
};
//leetcode submit region end(Prohibit modification and deletion)

console.log(longestCommonPrefix(["flower","flow","flight"]))
