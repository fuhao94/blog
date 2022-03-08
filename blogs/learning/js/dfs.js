const obj = {
  children: [{
    index: 0,
    children: [{
      index: 1,
      children: [{
        index: 3
      }]
    }]
  }, {
    index: 4
  }, {
    index: 5,
    children: [{
      index: 7,
      children: [{
        index: 8
      }]
    }]
  }, {
    index: 6
  }]
}

const DFS = (node, nodeList = []) => {
  if (node) {
    nodeList.push(node);
    const children = node.children || [];
    for (let i = 0; i < children.length; i++) {
      DFS(children[i], nodeList);
    }
  }
  return nodeList;
}

// console.log(DFS(obj))

// 非递归实现
const _DFS = (node) => {
  const stack = [];
  const nodes = [];

  if(nodes) {
    stack.push(node);

    while (stack.length) {
      const item = stack.pop();
      nodes.push(item)
      const children = item.children || []

      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i])
      }
    }
  }

  return nodes
}

console.log(_DFS(obj))
