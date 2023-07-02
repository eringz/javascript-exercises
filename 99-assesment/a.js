function quickSort(arr){
    
    return _rQuickSort(arr, 0, arr.length-1);
}

function partition(items, lo, hi){
    
        i = lo-1,
        j = hi+1;
    while(1){
        do{
            i++;
        }while(items[i] < pivot);
        
        do{
            j--;
        }while(items[j] > pivot);
        
        if(i >= j){
            return j;   
        }
        
        var temp = items[j];
        items[j] = items[i];
        items[i] = temp;
    }
}
function _rQuickSort(items, lo, hi){
    if(lo<hi){
        var p = partition(items, lo, hi);
        _rQuickSort(items, lo, p);
        _rQuickSort(items, p+1, hi); 
    }
    return items;
}

//to return [1,2,3,5]
console.log(quickSort([5,3,1,2]));

//to return [-5,1,2,3,5,9]
// QuickSort([5,3,1,2,9,-5]) 

//to return [-5,0,1,2,3,5,9,10,13]
// QuickSort([5,3,1,2,9,-5,10,13,0]) 

