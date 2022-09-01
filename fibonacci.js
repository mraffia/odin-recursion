function fibs(num) {
    if (num <= 1) {
        return [0];
    } else if (num === 2) {
        return [0, 1];
    } else {
        let result = [0, 1];
        for (let i = 1; i < num - 1; i++) {
            let before = result[i];
            let beforeTwo = result[i - 1];
            result.push(before + beforeTwo);
        }

        return result;
    }
}

console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(3));
console.log(fibs(8));

function fibsRec(num) {
    if (num <= 1) {
        return [0];
    } else if (num === 2) {
        return [0, 1];
    } else {
        let result = fibsRec(num - 1);
        result.push(result.at(-1) + fibsRec(num - 2).at(-1));

        return result;
    }
}

console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(3));
console.log(fibsRec(8));