$(document).ready(function(e) {
	
	$(function(){
		$("*[data-sequenceId]").on("touchstart",function(e) {
			var sequenceId = $(this).attr("data-sequenceId");
			window.open("../"+sequenceId + "/index.html", "_self");
			//window.parent.navigateToSequence(sequenceId);
			alert(getParentUrl("../"+sequenceId + "/index.html"));
			});
		});
	var reference = 0;
	function getParentUrl(fullPath) {
    	var isInIframe = (parent !== window),
        parentUrl = null;

   	 	if (isInIframe) {
        	parentUrl = document.referrer;
			window.frameElement.setAttribute("src",fullPath);
    	}
    return parentUrl;
}
	//================== REFERENCE BUTTON HANDLER ==========================//
    $(".refBtn").on("touchstart", function(){
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
	
    $("#infoBtn").on("touchstart", function(){
		$("#infoDiv").removeClass("hidden");
		$("#infoDiv").addClass("visible");
		reference = 1;
		});
	$("#infoDiv").on("touchstart", function(){
		$(this).addClass("hidden");
		$(this).removeClass("visible");
		reference = 0;
		});
});