/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const decode = (_, number, string) => {
        let results ='';
        for(let i=0; i< Number(number);i++){
            results += string;
        }
        return results;
    }
    
    let results = s.replace(/(\d+)\[(\w+)\]/g, decode);
    
    while (/(\d+)\[(\w+)\]/.test(results)){
        results = results.replace(/(\d+)\[(\w+)\]/g, decode);
    }
    return results;

};