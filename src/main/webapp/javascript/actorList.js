var PERCORSO_SERVIZIO_REST = '/sakila-webservices/rest/actor';

var tabella = "";

/*
 * Elabora i dati restituiti dal servizio REST
 */
var elaboraDati = function( data ){
    tabella += "<table><thead><tr>" +
            "<td>id</td><td>name</td><td>last name</td>" +
            "<td>last update</td></tr></thead>";
    $.each( data, elaboraElemento);
    tabella += "</table>";
    
    $("#contenuto").append(tabella);
};

/*
 * Elabora il singolo elemento
 */
var elaboraElemento = function( chiave, valore ){
    //$("#contenuto").append("");
    tabella += "<tr><td>" + valore.id + "</td>" +
            "<td>" + valore.firstName + "</td>" +
            "<td>" + valore.lastName + "</td>" +
            "<td>" + valore.lastUpdate + "</td>" +
            "</tr>";
};

var main = function() {
    $("li").text("miao");
    $.getJSON(PERCORSO_SERVIZIO_REST, elaboraDati);
};

/***
 * Aggancia il metodo main a quando il documento è caricato
 */
$(document).ready(main);
