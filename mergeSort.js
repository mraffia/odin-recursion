function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        let sorted = [];

        let left = mergeSort(arr.slice(0, arr.length / 2));
        let right = mergeSort(arr.slice(arr.length / 2));

        console.log(left);
        console.log(right);

        let leftPointer = 0;
        let rightPointer = 0;
        
        while (sorted.length < left.length + right.length) {
            if (rightPointer >= right.length) {
                sorted.push(left[leftPointer]);
                leftPointer++;
            } else if (leftPointer >= left.length) {
                sorted.push(right[rightPointer]);
                rightPointer++;
            } else if (left[leftPointer] < right[rightPointer]) {
                sorted.push(left[leftPointer]);
                leftPointer++;
            } else {
                sorted.push(right[rightPointer]);
                rightPointer++;
            }
        }
    
        return sorted;
    }
}

console.log(mergeSort([1]));
console.log(mergeSort([5, 2, 1]));
console.log(mergeSort([6, 1, 7, 4, 9]));
console.log(mergeSort([5, 2, 1, 3, 6, 4]));
console.log(mergeSort([4, 8, 6, 2, 1, 7, 5, 3]));
