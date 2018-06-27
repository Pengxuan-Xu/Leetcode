/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {

    const list = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
    let roman = '';
    while (num > 0) {
        
        for (let i in list){
            if (num>=list[i]) {
                roman+=i;
                num-=list[i];
                break;
            }
            if (num==0) break;
            
        }
    }
    return roman;
};
