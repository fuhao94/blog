function bubbleSort(arr) {
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		for (let j = i; j < len - 1; j++) {
			if(arr[i] > arr[j + 1]) {
				[arr[i], arr[j+1]] = [arr[j+1], arr[i]];
			}
		}
	}
	return arr;
}

const arr = [5,1,2,3,2,7];

console.log(bubbleSort(arr))