$(document).ready(function() {

	for (var i=1; i<101; i++){
		if (i%5===0 && i%3===0){
			$("body").append("<p>fizzbuzz</p>");
		}
		else if (i%3===0) {
			$("body").append("<p>fizz</p>");
		}
		else if (i%5===0){
			$("body").append("<p>buzz</p>");
		}
		else {
			$("body").append("<p></p>"+i);
		}
	}

});