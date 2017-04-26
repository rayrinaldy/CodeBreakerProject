let answer = document.getElementById('answer');
let messages = document.getElementById('message');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer === '' || attempt === ''){
    	setHiddenFields();
    }
}

function setHiddenFields (){
	answer.value = Math.floor(Math.random() * 10000).toString();
	while (answer.value.length < 4) {
		answer.value = '0' + answer.value;
	}
}

function setMessage(message){
	messages.innerHTML(message);
}

function validateInput(param){
	if(param.length == 4){
		return true;
	} else {
		setMessage("Guesses must be exactly 4 characters long.");
		return false;
	}
}