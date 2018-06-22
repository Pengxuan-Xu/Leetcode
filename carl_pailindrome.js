let strOri = 'aab AA';
let strPail = true ;

strCheck = strOri.toLowerCase();
strCheck = strCheck.replace(/\s/g, '');

let strLen = strCheck.length;
for (let n = 0; n < Math.floor(strLen/2); n++){
	if (strCheck[n] !== strCheck[strLen-n-1]) {
		strPail = false;
		break;
	}
}
console.log (`The pailindrome check for string "${strOri}" is: ${strPail}`);