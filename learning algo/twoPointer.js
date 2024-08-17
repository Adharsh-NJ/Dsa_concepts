//167. Two Sum II - Input Array Is Sorted

var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1

    while (left < right) {
        const sum = numbers[left] + numbers[right]
        if (target === sum) {
            return [left + 1, right + 1]
        } else if (sum > target) {
            right--
        } else {
            left++
        }
    }
    return [];
};

//15. 3Sum

var threeSum = function(nums) {
    let result = [];
    if (nums.length < 3) return result;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; 
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; 
                while (left < right && nums[right] === nums[right - 1]) right--; 
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
};


//11. Container With Most Water

var maxArea = function(height) {
    let left = 0
    let right = height.length -1 ;
    let max = 0;
    let sum = 0
    while(left<right){
     sum = Math.min(height[left],height[right]) * (right - left); //(area of rectangle = length * breadth)
     max = Math.max(max,sum);
     if(height[left]<height[right]){
        left++
     }else{
        right--
     }
    }
    return max
};

//3sum closest

var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

        let left = i + 1, right = nums.length - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            if (currentSum < target) {
                left++;
                // Skip duplicates
                while (left < right && nums[left] === nums[left - 1]) left++;
            } else if (currentSum > target) {
                right--;
                // Skip duplicates
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else {
                return closestSum;
            }
        }
    }

    return closestSum;
};