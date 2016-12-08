$(document).ready(function(e) {
	
	$(function(){
		$("*[data-sequenceId]").on("touchstart",function(e) {
			var sequenceId = $(this).attr("data-sequenceId");
			window.open("../"+sequenceId + "/index.html", "_self");
			//window.parent.navigateToSequence(sequenceId);
			});
		});
		
	
	
	var reference = 0;
	
	//================== REFERENCE BUTTON HANDLER ==========================//
    $("[data-ref]").on("touchstart", function(){
		var refId = "#" + $(this).attr("data-ref");
		$(refId).removeClass("hidden");
		$(refId).addClass("visible");
		reference = 1;
		});
	$(".refDiv").on("touchstart", function(){
		$(this).addClass("hidden");
		$(this).removeClass("visible");
		reference = 0;
		});
});