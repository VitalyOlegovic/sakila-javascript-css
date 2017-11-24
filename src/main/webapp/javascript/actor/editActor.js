var PERCORSO_SERVIZIO_REST = '/sakila-spring/rest/actor';

var valorizzaDatiAttore = function(){
	var parametriRequest = window.location.search;
	var vettore = parametriRequest.split('=');
	var idAttore = vettore[1];
	var percorsoDettaglioAttore = PERCORSO_SERVIZIO_REST + '/' + idAttore;
	
	var request = new XMLHttpRequest();
    request.open('GET', percorsoDettaglioAttore, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        
        var actorId = document.getElementById('actorId');
        actorId.value = idAttore;
        
        var fn = document.getElementById('firstName');
        fn.value = data.firstName;
        
        var ln = document.getElementById('lastName');
        ln.value = data.lastName;
      } else {
        // We reached our target server, but it returned an error
    	
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
}

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

function editActor() {	

	var actorId = document.getElementById("actorId").value;
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;

	var actor = { "id":actorId, "firstName" : firstName, "lastName" : lastName };
	
	request = new XMLHttpRequest();
	request.onreadystatechange = callback;
	request.open( "PUT", PERCORSO_SERVIZIO_REST );
	request.setRequestHeader('Content-Type', 'application/json');
	
	var jsonString = JSON.stringify( actor );
	console.log(jsonString);
	request.send( jsonString );
}

document.getElementById("editActor").addEventListener('click', editActor);

if (document.readyState === 'complete' || document.readyState !== 'loading') {
	valorizzaDatiAttore();
} else {
	document.addEventListener('DOMContentLoaded', valorizzaDatiAttore);
}