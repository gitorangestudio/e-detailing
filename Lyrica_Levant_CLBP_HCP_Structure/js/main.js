
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
	$("#iframe_Id").attr("src", "");
	resizeHTML();
});

	$(".btn_play").on("touchstart click", function(event){
		  $("#iframe_Id").attr("src", "media/L_L_CLBP_01/index.html");
		  $(".btn_play").hide();
	});
	/*
	$(".btn_next").on("touchstart click", function(event){
		  var page = $("#iframe_Id").attr("src").substr(0,  ($("#iframe_Id").attr("src").lastIndexOf('/')));
		  page = page.substr(page.lastIndexOf('/') + 1,  page.length);
		  var pageIndex = parseInt(page.substr(page.lastIndexOf('_') + 1,  page.length));
		  page = page.substr(0,  (page.lastIndexOf('_') + 1));
		  if(pageIndex < 17) { 
		  	pageIndex++;
		  	$("#iframe_Id").attr("src", ("media/"+page + '' + ((pageIndex <= 9) ? ('0' + pageIndex) : pageIndex ) +"/index.html" ));
		  }
		  //var currentUrl = document.referrer;
		  //alert(document.getElementById("iframe_Id").contentWindow.location.href);
	});
	
	$(".btn_prev").on("touchstart click", function(event){
		  var page = $("#iframe_Id").attr("src").substr(0,  ($("#iframe_Id").attr("src").lastIndexOf('/')));
		  page = page.substr(page.lastIndexOf('/') + 1,  page.length);
		  var pageIndex = parseInt(page.substr(page.lastIndexOf('_') + 1,  page.length));
		  page = page.substr(0,  (page.lastIndexOf('_') + 1));
		  if(pageIndex > 1) { 
		  	pageIndex--;
		  	$("#iframe_Id").attr("src", ("media/"+page + '' + ((pageIndex <= 9) ? ('0' + pageIndex) : pageIndex ) +"/index.html" ));
		  }
	});*/


