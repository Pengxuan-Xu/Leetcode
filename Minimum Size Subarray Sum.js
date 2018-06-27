/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if(nums===undefined || nums.length == 0) {return 0;}
    let numsLen = nums.length, sum= [], minLen = 0, found=false;
    
    for (let n=1; n<=numsLen; n++) {
        sum.push(nums.slice(0, n).reduce((a,b)=>{return a+b;}))
    }
       
    for (let len = 0; len<numsLen ; len++){
        for (let n=0; n<numsLen-len; n++){
            if ( sum[n+len]-sum[n]+nums[n] >= s ) {
               
                if(!found) {
                    minLen=len+1;
                    found=true;
                }else if(len+1 < minLen) {
                    minLen=len+1;
                }
                
            }
        }
    }
    return minLen;
};