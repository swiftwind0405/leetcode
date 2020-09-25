
def removeElement(nums, val):
    while val in nums:
        nums.remove(val)
    return len(nums)