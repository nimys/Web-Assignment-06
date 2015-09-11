$(document).ready(function() {
	$("#faqs h1").animate(
			{ fontSize: "650%", opacity: 1, left: "275" }, 2000 )  
		.animate(
			{ fontSize: "175%", left: "30", }, 1000 );
	
	$("#faqs h2").click(function() {
	 	$(this).toggleClass("minus");
	 	
	 	if($(this).next().is(":visible"))
			$(this).next().slideUp(1000);
		else
			$(this).next().slideDown(500);
	});
});  
