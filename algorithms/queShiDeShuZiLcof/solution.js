/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let result = 0;
    // XOR of all values in the given array
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i]
    }
    //  XOR of all the values from 0 to length of array
    for (let i = 0; i <= nums.length; i++) {
        result ^= i;
    }
    return result;
};
