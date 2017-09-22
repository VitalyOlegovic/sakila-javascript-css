"use strict";

var PERCORSO_SERVIZIO_REST = '/sakila-webservices/rest/actor';

var request;

/***
 * Questa funzione viene usata per gestire l'esito della chiamata REST
 * @returns
 */
function callback() {
	if (request.readyState === XMLHttpRequest.DONE) {
		var resultSection = document.getElementById("result");
		if (request.status === 200) {
			resultSection.innerHTML = "Success.";
			document.getElementById("firstName").value='';
			document.getElementById("lastName").value='';
		} else {
			resultSection.innerHTML = 'There was a problem with the request.';
		}
	}
}

function newActor() {	

	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;

	var actor = { "firstName" : firstName, "lastName" : lastName };
	
	request = new XMLHttpRequest();
	request.onreadystatechange = callback;
	request.open( "POST", PERCORSO_SERVIZIO_REST );
	request.setRequestHeader('Content-Type', 'application/json');
	
	var jsonString = JSON.stringify( actor );
	request.send( jsonString );
}

document.getElementById("createActor").addEventListener('click', newActor);
