/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const newNum = new Set();
    for(let i = 0; i < nums.length; i ++){
        const hasNums = newNum.has(nums[i]);
        if(hasNums){
            return true;
        }
        newNum.add(nums[i])
    }
    return false;
};