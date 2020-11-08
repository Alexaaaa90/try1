const txtElement = ['Selamat Datang' 'Di Website' 'Kami'];
let count = 0;
let txtIndex = 0;
let CurrentTxt = 0;
let words = '';

(function ketik(){
	if(count == txtElement.length){
		count = 0;
	}
	CurrentTxt = txtElement[count];

	words = CurrentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ketik').textContent = words;

	if(words.length == CurrentTxt.length){
		count++;
		txtIndex = 0;
	}
	setTimeout(ketik, 500);
})();