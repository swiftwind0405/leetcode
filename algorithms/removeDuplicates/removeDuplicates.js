/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    var copyNums = nums;
    for (var i=0; i<copyNums.length; i++) {
      for (var j=i+1; j<copyNums.length;) {
        if (copyNums[i] === copyNums[j]) {
          copyNums.splice(j, 1);
          continue;
        }
        j++;
      }
    }
    return copyNums;
};
