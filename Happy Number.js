/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function sumOfSquare(n){
        let sum = 0;
        while(n>0) {
            sum += Math.pow(n%10,2);
            n = Math.floor (n/10);
        }
        return sum;
    }
    
    let previous=[];
    let happy=false;
    
    while(1){
        if (n==1) {
            happy = true;
            break;
        } else if (previous.indexOf(n) > 0) {
            break;
        }
        previous.push(n);
        n=sumOfSquare(n);
    }
    return happy;
    
};