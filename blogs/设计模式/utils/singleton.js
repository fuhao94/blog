//第一步
function BestPlayer(name) {
  this.name = name;
}
BestPlayer.prototype.getName = function () {
  return this.name
};
//第二步
const getBestPlayer = (function () {
  let instance = null;
  return function (name) {
    if (!instance) {
      instance = new BestPlayer(name);
    }
    return instance;
  }
})();

const player1 = new getBestPlayer('辅助选手-蔡文姬');
const player2 = new getBestPlayer('菜鸡选手-老潘头');
console.log(player1.getName()); // 辅助选手-蔡文姬
console.log(player2.getName()); // 辅助选手-蔡文姬
