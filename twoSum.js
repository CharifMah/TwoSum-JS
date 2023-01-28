var twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length - 1; i++) {
    for (let ii = 0; ii <= nums.length - 1; ii++) {
      if (nums[i] + nums[ii] == target && unefois == false && i != ii) {
        return [i, ii];
      }
    }
  }
};
