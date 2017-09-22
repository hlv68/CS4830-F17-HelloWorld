// have jQuery and history.js already loaded
//
// this works with hyperlinks and back/forward buttons
// and anywhere you use History.pushState


$(function() { 
	
	// run after page is loaded
	ajaxifyLinks();
});


function ajaxifyLinks() {

	// whenever a hyperlink is clicked...
	$("a").click(function() {
	
		// create an object to pass as state data
		var data = {};
		
		// do whatever you want to the data
		data.putYour = "data here";
		
		// update the url, preserve title
		History.pushState(data, document.title, $(this).attr('href'));
		
		// cancel the normal action of the hyperlink
		return false;
	});
	
}


History.Adapter.bind(window,'statechange',function() {

	// store the State object
	var State = History.getState();
	
	// all the data you passed is accessable here now
	var data = State.data;
	
	// at this point you do whatever needs to be done to update the page.
	// in this case, it is loading the new URL into my #main div.
	
	// load the new url into #main
	$("#main").load(State.url, function() {
		
		// after new page is loaded, do stuff here
		alert("Page has been loaded!");
		
		// and re-ajaxify the links
		ajaxifyLinks();
	});
	
});
