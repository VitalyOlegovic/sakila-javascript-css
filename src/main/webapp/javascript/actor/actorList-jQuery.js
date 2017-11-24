"use strict";

var PERCORSO_SERVIZIO_REST = '/sakila-spring/rest/actor';

var tabella = "";

/*
 * Elabora i dati restituiti dal servizio REST
 */
var elaboraDati = function( data ){
    tabella += "<table><thead><tr>";
    tabella += "<td>id</td>";
    tabella += "<td>name</td>";
    tabella += "<td>last name</td>";
    tabella += "<td>last update</td>";
    tabella += "</tr></thead>";
    
    $.each( data, elaboraElemento);
    tabella += "</table>";
    
    // IMPORTANTE: fare un solo append
    // con la stringa completa
    $("#contenuto").append(tabella);
};

/*
 * Elabora il singolo elemento
 */
var elaboraElemento = function( chiave, valore ){
    var lastUpdate = new Date( valore.lastUpdate );
    var lastUpdateStr = lastUpdate.toString();
    tabella += "<tr><td>" + valore.id + "</td>";
    tabella += "<td>" + valore.firstName + "</td>";
    tabella += "<td>" + valore.lastName + "</td>";
    tabella += "<td>" + lastUpdateStr + "</td>";
    tabella += "</tr>";
};

/*
 * Fai la chiamata AJAX e poi elabora i dati restituiti dalla chiamata
 */
var main = function() {
    $.getJSON(PERCORSO_SERVIZIO_REST, elaboraDati);
};

/***
 * Aggancia il metodo main a quando il documento è caricato
 */
$(document).ready(main);
