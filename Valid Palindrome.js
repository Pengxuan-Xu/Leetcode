let strOri = ['A man, a plan, a canal: Panama', 'aaBaA', 'aadfds'];
strOri.forEach ( (strOri) => {
	
	strCheck = strOri.toLowerCase();
	strCheck = strCheck.replace(/[^\w]/g, '');
	console.log(strCheck);
	let strLen = strCheck.length;
	let strPail = true ;
	for (let n = 0; n < Math.floor(strLen/2); n++){
		if (strCheck[n] !== strCheck[strLen-n-1]) {
			strPail = false;
			break;
		}
	}
	console.log (`The pailindrome check for string "${strOri}" is: ${strPail}`);
})