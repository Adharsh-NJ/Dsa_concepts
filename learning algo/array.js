//189. Rotate Array

var rotate = function (nums, k) {
  k = k % nums.length;
  if (k === 0) {
    return nums;
  }
  reverse(nums, 0, nums.length - 1);
  console.log(nums);
  reverse(nums, 0, k - 1);
  console.log(nums);
  reverse(nums, k, nums.length - 1);
  console.log(nums);
  function reverse(nums, start, end) {
    while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }
  return nums;
};
console.log(rotate([1, 2, 3, 4], 2));
//118. Pascal's Triangle

var generate = function (numRows) {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    result[i] = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
    }
  }
  return result;
};

//boyer-moore voting algo
function majorityElement(nums) {
  let candidate,
    count = 0;
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += candidate === num ? 1 : -1;
  }
  return candidate;
}

//two pointer
function moveZeroes(nums) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== index) {
        [nums[index], nums[i]] = [nums[i], nums[index]];
      }
      index++;
    }
  }
}
