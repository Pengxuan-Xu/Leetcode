/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(nums===undefined || nums.length==0) {return 0;}
    let len = 1, maxLen = 1, prevElement = nums[0];
    for (let n = 1; n < nums.length ; n++) {
        if (nums[n] > prevElement) {
            len += 1;
            if (len>maxLen) {
                maxLen = len; 
            }
            
        } else if (nums[n] <= prevElement) {
            len=1;         
        }
        prevElement = nums[n];
    }
    return maxLen;
};