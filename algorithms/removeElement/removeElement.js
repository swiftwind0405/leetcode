var removeElement = (nums, val) => {
    while (nums.indexOf(val) !== -1) {
      nums.splice(nums.indexOf(val),1)
    }
    return nums.length
  }