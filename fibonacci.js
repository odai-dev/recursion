
function fibs (n) {
    let arr = [0,1];
    for (let i = 0; i<n-2; i++){
        arr.push(arr[i]+arr[i+1]);
    }
    return arr
}

const fibbonacciSeq = fibs(8);
console.log(fibbonacciSeq);
