function fetch(url) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('url:', url)
      resolve(url)
    }, 100);
  })
}

function execute(array, limit = 3) {
  let i = 0;
  for (; i < limit; i++) {
    dispatch(i);
  }

  function dispatch(j) {
    if (j > array.length - 1) return;
    fetch(array[j]).then((res) => {
      console.log('i:', i, 'j:', j)
      dispatch(i++);
    });
  }
}

const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8']

// execute(arr);

const limitLoad = (array, limit = 3) => {
  const sequence = [...array];
  let promises = sequence.splice(0, limit).map((url, index) =>
    fetch(url).then(() => index)
  )

  let length = promises.length;

  let done = Promise.race(promises);

  for (let i = 0; i < sequence.length; i++) {
    done = done.then((index) => {
      promises[index] = fetch(sequence[i]).then(() => {
        length++;
        console.log(index, length)
        return index;
      });
      return Promise.race(promises);
    })
  }
}

// limitLoad(arr);


function stringify(obj) {
  const type = typeof obj;
  const simplyReg = /string|undefined|function/
  if (type !== 'object' || obj === null) {
    if (simplyReg.test(type)) {
      obj = '"' + obj + '"';
    }
    return String(obj);
  } else {
    const json = [];
    const isArray = Array.isArray(obj);
    for (let k in obj) {
      if (obj.hasOwnProperty(k)) {
        let value = obj[k];
        const vType = typeof value;
        if (simplyReg.test(vType)) {
          value = '"' + value + '"';
        } else if (vType === 'object') {
          value = stringify(value);
        }
        json.push((isArray ? "" : '"' + k + '":') + String(value));
      }
    }
    return (isArray ? "[" : "{") + String(json) + (isArray ? "]" : "}");
  }
}

const obj = {
  a: 1,
  b: [1, 2, 3],
  c: function (params) {
    return params
  },
  d: undefined
}

console.log(stringify(obj))

