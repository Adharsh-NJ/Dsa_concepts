//4. Median of Two Sorted Arrays

var findMedianSortedArrays = function(nums1, nums2) {
    const concatArr = nums1.concat(nums2);
   
    const mergeSort = (arr)=>{
       if(arr.length ===1){
        return arr
       }
       const length = arr.length;
       const middle = Math.floor(length/2)
       const left = arr.slice(0,middle)
       const right = arr.slice(middle);

       return merge(mergeSort(left),mergeSort(right))
    }
    
    const merge = (left,right)=>{
        const result = [];
        let leftIndex = 0;
        let rightIndex = 0
        while(leftIndex<left.length && rightIndex<right.length){
            if(left[leftIndex]<right[rightIndex]){
               result.push(left[leftIndex]);
               leftIndex++
            }else{
                result.push(right[rightIndex])
                rightIndex++
            }
        }
       return  result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }

    const findMedian=(arr)=>{
        console.log(arr)
       let length = arr.length;
       let isEven = length % 2 === 0;
        return isEven ? (arr[(length/2)-1] + arr[length/2])/2 :arr[Math.floor(length/2)]
    }
    const sortedArr = mergeSort(concatArr);
    return findMedian(sortedArr)
};