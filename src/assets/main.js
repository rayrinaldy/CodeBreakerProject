let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer === '' || attempt === ''){
    	setHiddenFields();
    }
}

function setHiddenFields (){
	answer.toString(Math.floor(Math.random() * 10000));
	while (answer.length < 4) {
		answer = '00' + answer;
	}
}

function setMessage(message){
	
}