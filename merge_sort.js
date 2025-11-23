function Sort(arr = []) {
    if(arr.length == 1) {
        return arr;
    }
    const left = arr.splice(0, Math.floor(arr.length / 2));
    const right = arr;
    return merge(Sort(left), Sort(right));
}

function merge(leftArr=[], rightArr=[]) {
    let  result =[];
    while(leftArr.length>0&&rightArr.length>0) {
        if(leftArr[0]<rightArr[0]) {
            result.push(leftArr[0]);
            leftArr.shift()
        } else {
            result.push(rightArr[0]);
            rightArr.shift()
        }
    }
    return   [...result, ...leftArr, ...rightArr];;
}
console.log(Sort([2,5,1,8,9,3,6]))