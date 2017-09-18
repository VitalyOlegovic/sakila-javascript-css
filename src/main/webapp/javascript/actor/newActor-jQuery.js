var PERCORSO_SERVIZIO_REST = '/sakila-webservices/rest/actor';

function successCallback(msg){
	console.log('successCallback');
	$("#result").innerHTML = "Success.";
	$("#firstName").val("");
	$("#lastName").val("");
}

function failureCallback(msg){
	$("#result").innerHTML = "There was a problem with the request.";
}

$.postJSON = function(url, data, callback) {
    return jQuery.ajax({
        'type': 'POST',
        'url': url,
        'contentType': 'application/json',
        'data': data,
        'dataType': 'json',
        'success': function(){console.log('done')},
        'error' : function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus); //error logging
        }
    }).done( successCallback ).fail( failureCallback );
};

function clickHandler(){
	var fn = $("#firstName").val();
	var ln = $("#lastName").val();
	
	var actor = { "firstName" : fn, "lastName" : ln };
	var jsonString = JSON.stringify( actor );
	
	$.postJSON( PERCORSO_SERVIZIO_REST, jsonString, successCallback );
}

$( document ).ready(function() {
    $("#createActor").click(clickHandler);
});

