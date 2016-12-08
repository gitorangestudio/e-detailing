
function roundNumber(number,decimal_points) {
	if(!decimal_points) return Math.round(number);
	if(number == 0) {
		var decimals = "";
		for(var i=0;i<decimal_points;i++) decimals += "0";
		return "0."+decimals;
	}

	var exponent = Math.pow(10,decimal_points);
	var num = Math.round((number * exponent)).toString();
	return num.slice(0,-1*decimal_points) + "." + num.slice(-1*decimal_points)
}

function resizeHTML()
{
	var viewportHeight = $(window).height();
	var viewportWidth = $(window).width();
	var scaleRatio = viewportHeight / 768;
	var roundScaleRation = roundNumber(scaleRatio, 4);
	
	$("html").css("-webkit-transform", "scale("+roundScaleRation+")");
	$("html").css("transform", "scale("+roundScaleRation+")");
	$("html").css("-o-transform", "scale("+roundScaleRation+")");
	$("html").css("-ms-transform", "scale("+roundScaleRation+")");
}

window.addEventListener('resize', function(event){
	resizeHTML();
});

window.addEventListener('load', function(event){
	resizeHTML();
	$("#iframe_Id").attr("src", "");
});

	$(".btn_play").on("touchstart click", function(event){
		  $("#iframe_Id").attr("src", "media/efexor_rx_01/index.html");
		  $(".btn_play").hide();
	});
	


