function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    const middle_index = Math.floor(arr.length/2);
    const left_arr = arr.slice(0, middle_index);
    const right_arr = arr.slice(middle_index, arr.length);
    return merge(mergeSort(left_arr), mergeSort(right_arr));
}

function merge(left_arr, right_arr){
    let temp = [];
    while(left_arr.length && right_arr.length){
        if(left_arr[0] <= right_arr[0]){
            temp.push(left_arr.shift());
        }else{
            temp.push(right_arr.shift())
        }
    }
    return [...temp, ...left_arr, ...right_arr];
}

console.log(mergeSort([10,9,8,7,6,5,4,3,2,1]));


