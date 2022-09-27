var twoSum = function (nums, target) {
  var unefois = false;

  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] == target) {
      console.log("target :", nums[i]);
    }

    for (let ii = 0; ii <= nums.length - 1; ii++) {
      if (nums[i] + nums[ii] == target && unefois == false && i != ii) {
        return [i, ii];
        unefois = true;
      }
    }
  }
};
