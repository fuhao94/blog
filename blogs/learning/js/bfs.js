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

const BFS = (node) => {
  const nodes = [];
  const stack = [];

  if(node) {
    stack.push(node);

    while (stack.length) {
      const item = stack.shift();
      const children = item.children || [];
      nodes.push(item)
      for (let i = 0; i < children.length; i++) {
        stack.push(children[i])
      }
    }
  }

  return nodes;
}

console.log(BFS(obj))
