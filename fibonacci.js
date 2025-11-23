function fibs(n) {
    let arr = [0, 1];
    for (let i = 0; i < n - 2; i++) {
        arr.push(arr[i] + arr[i + 1]);
    }
    return arr;
}

const fibbonacciSeq = fibs(8);
console.log(fibbonacciSeq);


function fibsRec(n, arr = []) {
    if(n == 1) {
        arr.push(0);
        return arr;
    } else if(n == 2) {
        arr.push(0,1)
        return arr
    }
    const sequence = fibsRec(n-1);
    sequence.push(sequence[sequence.length-2]+sequence[sequence.length-1]);
    return sequence;
}

const fibbonacciSeqRec = fibsRec(8);
console.log(fibbonacciSeqRec);