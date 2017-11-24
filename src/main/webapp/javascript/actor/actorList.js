"use strict";

var PERCORSO_SERVIZIO_REST = '/sakila-spring/rest/actor';

var tabella = "";

/*
 * Elabora i dati restituiti dal servizio REST
 */
var elaboraDati = function( data ){
    tabella += "<table><thead><tr>";
    tabella += "<td>Id</td>";
    tabella += "<td>Name</td>";
    tabella += "<td>Last name</td>";
    tabella += "<td>Last update</td>";
    tabella += "</tr></thead>";
    
    data.forEach(elaboraElemento);
    tabella += "</table>";
    
    // IMPORTANTE: fare un solo append
    // con la stringa completa
    document.getElementById("contenuto").innerHTML = tabella;
};

/*
 * Elabora il singolo elemento
 */
var elaboraElemento = function( valore ){
    var lastUpdate = new Date( valore.lastUpdate );
    var lastUpdateStr = lastUpdate.toLocaleDateString();
    tabella += "<tr><td>" + valore.id + "</td>";
    tabella += "<td>" + valore.firstName + "</td>";
    tabella += "<td>" + valore.lastName + "</td>";
    tabella += "<td>" + lastUpdateStr + "</td>";
    tabella += "</tr>";
};

/*
 * Fai la chiamata AJAX e poi elabora i dati restituiti dalla chiamata
 */
var generaTabellaAttori = function() {    
    var request = new XMLHttpRequest();
    request.open('GET', PERCORSO_SERVIZIO_REST, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        elaboraDati(data);
      } else {
        // We reached our target server, but it returned an error
    	
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
    
};

/***
 * Aggancia il metodo main a quando il documento è caricato
 */
if (document.readyState === 'complete' || document.readyState !== 'loading') {
	generaTabellaAttori();
} else {
	document.addEventListener('DOMContentLoaded', generaTabellaAttori);
}



