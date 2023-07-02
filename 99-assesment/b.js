function insertionSort(arr){

    var current;

    for(var i = 0; i<arr.length; i++){
        current = arr[i];
        var j = i-1;
        while(j>=0 && arr[j] > current){
            arr[j+1] = arr[j];
            j--;    
        }
        arr[j+1] = current;
    }

    // console.log("array is now ",arr);
    return arr;

}

    //to return [1,2,3,5]
    // console.log(insertionSort([5,3,1,2])); 

    //to return [-5,1,2,3,5,9]
    console.log(insertionSort([5,3,1,2,9,-5]));

    //to return [-5,0,1,2,3,5,9,10,13]
    // insertionSort([5,3,1,2,9,-5,10,13,0]) 