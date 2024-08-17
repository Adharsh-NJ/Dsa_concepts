//303. Range Sum Query - Immutable
var NumArray = function(nums) {
    this.prefixSum=[]
    this.prefixSum.push(nums[0])
    for(let i=1;i<nums.length;i++){
        this.prefixSum[i] = this.prefixSum[i-1]+nums[i]
    }
};


NumArray.prototype.sumRange = function(left, right) {
  return left === 0 ?this.prefixSum[right] : this.prefixSum[right] - this.prefixSum[left - 1]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

//525. Contiguous Array

var findMaxLength = function(nums) {
    let prefixSum = 0;
    let result =0
    let map= new Map();
    map.set(0,-1);
    for(let i = 0 ; i<nums.length;i++){
        prefixSum += nums[i]===0?-1:1;
        if(map.has(prefixSum)){
         result = Math.max(result,i - map.get(prefixSum))
        } else{
            map.set(prefixSum, i)
        }
    }
  return result;
};
console.log(findMaxLength([1,0,1]))

//560. Subarray Sum Equals K

var subarraySum = function (nums, k) {
    let totalSubArray = 0
    let sum = 0;
    let map = new Map()
    map.set(0, 1)
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) {
            totalSubArray += map.get(sum - k)
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return totalSubArray;
};