function fibs(num) {
    let result = [0, 1];

    if (num <= 0) {
        return [];
    } else if (num === 1) {
        return [0];
    } else if (num === 2) {
        return [0, 1];
    } else {
        for (let i = 1; i < num - 1; i++) {
            let before = result[i];
            let beforeTwo = result[i - 1];
            result.push(before + beforeTwo);
        }
        return result;
    }
}

console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(3));
console.log(fibs(8));