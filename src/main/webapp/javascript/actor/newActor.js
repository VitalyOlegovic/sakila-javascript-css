var PERCORSO_SERVIZIO_REST = '/sakila-webservices/rest/actor';

function newActor() {	

	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;

	var actor = { "firstName" : firstName, "lastName" : lastName };
	console.log(actor);
	
	var request = new XMLHttpRequest();
	//request.onreadystatechange = alertContents;
	request.open( "POST", PERCORSO_SERVIZIO_REST );
	request.setRequestHeader('Content-Type', 'application/json');
	request.send( JSON.stringify( actor ) );
}

function alertContents() {
	if (request.readyState === XMLHttpRequest.DONE) {
		if (request.status === 200) {
			alert(request.responseText);
		} else {
			alert('There was a problem with the request.');
		}
	}
}

document.getElementById("createActor").addEventListener('click', newActor);
