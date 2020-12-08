const test = [5, 1, 2, 3, 2, 7];

function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len - 1; j++) {
      if (arr[i] > arr[j + 1]) {
        [arr[i], arr[j + 1]] = [arr[j + 1], arr[i]];
      }
    }
  }
  return arr;
}

// console.log(bubbleSort(test))


function quickSort(arr) {
  const len = arr.length;
  if (len <= 1) {
    return arr;
  }

  const middleIndex = Math.floor(len / 2);
  const middle = arr.splice(middleIndex, 1)[0];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < middle) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  console.log(left, middle, right)

  return quickSort(left).concat([middle], quickSort(right))
}

// console.log(quickSort(test))

function insertionSort(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    for (let j = i; j > 0; j--) {
      console.log(i, j)
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break;
      }
    }
  }

  return arr;
}

// console.log(insertionSort([1]))

function selectSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let index = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }
    if (index !== i) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
    }
  }
  return arr;
}

console.log(selectSort(test))
