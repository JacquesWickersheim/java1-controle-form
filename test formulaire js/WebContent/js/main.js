//variables globales

var nom = document.getElementById('name')
var mail = document.getElementById('mail')
var mailVerif = document.getElementById('verifmail')
var pass = document.getElementById('pass')
var passVerif = document.getElementById('verifpass')

//debut Fonctions
	
	
function verifForm(){
	if(nom == ''){
		nom.style.backgroundColor='red'
		alert('Vous N\'avez pas entré de nom')
		return false	
	}else{
		nom.style.backgroundColor='green'
	}
	if(mail == ''){
		mail.style.backgroundColor='red'
		alert('Vous n\'avez pas entré de mail')
		return false
	}else{
		mail.backgroundColor='green'
	}
	if(mailVerif == ''){
		mailVerif.style.backgroundColor='red'
		alert('Vous n\'avez pas verifié votre mail')
		return false
	}
	if(mailVerif !== mail){
		mailVerif.style.backgroundColor='red'
		alert('Vous n\'avez pas entré le même mail')
		return false
	}
	if(mailVerif == mail){
		mailVerif.style.backgroundColor='green'
	}
	if(pass == ''){
		pass.style.backgroundColor='red'
		alert('Vous n\'avez pas entré de mot de passe')
		return false
	}else{
		pass.style.backgroundColor='red'
	}
	if(passVerif !== pass){
		passVerif.style.backgroundColor='red'
		alert('Vous n\'avez pas entré le même mot de passe')
		return false
	}
	if(passVerif == pass){
		passVerif.style.backgroundColor='green'
	}
}
