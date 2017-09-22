"use strict";

var PERCORSO_SERVIZIO_REST = '/sakila-webservices/rest/actor';

function successCallback(msg){
	console.log('successCallback');
	$("#result").html("Success.");
	$("#firstName").val("");
	$("#lastName").val("");
}

function failureCallback(jqXHR, textStatus, errorThrown) {
    console.log(textStatus); //error logging
    console.log(jqXHR);
    console.log(errorThrown);
}

$.postJSON = function(url, data, callback) {
    return jQuery.ajax({
        'type': 'POST',
        'url': url,
        'contentType': 'application/json',
        'data': data,
        'dataType': 'json',
        'success': successCallback,
        'error' : failureCallback
    });
};

function clickHandler(){
	var fn = $("#firstName").val();
	var ln = $("#lastName").val();
	
	var actor = { "firstName" : fn, "lastName" : ln };
	var jsonString = JSON.stringify( actor );
	console.log( jsonString );
	
	$.postJSON( PERCORSO_SERVIZIO_REST, jsonString, successCallback );
}

$( document ).ready(function() {
    $("#createActor").click(clickHandler);
});

