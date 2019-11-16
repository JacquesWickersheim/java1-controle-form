var nom = document.getElementById('name')
var mail = document.getElementById('mail')
var mailverif = document.getElementById('verifmail')
var pass = document.getElementById('pass')
var passverif = document.getElementById('verifpass')

function verifNom(){
	if ( nom == ''){
		nom.style.backgroundColor="red"
			alert('Met un Nom Counard')
	}else{
		nom.style.backgroundColor="green"
	}
}

function verifMail(){
	if ( mail == ''){
		mail.style.backgroundColor="red"
		alert('Met Un Mail counard')
		return false	
	}else{
		mail.style.backgroundColor='green'
	}
}

function doubleMail(){
	if(mailverif == mail){
		mailverif.style.backgroundColor='green'
	}
	if(mailverif !== mail){
		mailverif.style.backgroundColor='red'
			return false
	}
}

function verifPass(){
	if ( pass == ''){
		pass.style.backgroundColor='red'
			alert('Tu n\'a pas mis ton Mot de Passe Counard')
				return false
	}else{
		pass.style.backgroundColor='green'
	}
}

function doublePass(){
	if(passverif == pass){
		passverif.style.backgroundColor='green'
	}else{
		passverif.style.backgroundColor='red'
			return false
	}
}
