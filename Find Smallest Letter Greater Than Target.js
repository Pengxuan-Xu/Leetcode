/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    letters.sort();
    for (let n of letters){
        if (n.codePointAt(0) > target.codePointAt(0)) {
            return n;
        }
    }
    return letters[0];
};