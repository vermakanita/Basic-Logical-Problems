function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Example usage:
console.log(findMin([5, 2, 9, 1, 7])); // Output: 1











function findMaxIndex(arr) {
    let max = arr[0];
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }
    return index;
}

// Example usage:
console.log(findMaxIndex([1, 3, 6, 2, 5, 4])); // Output: 2
