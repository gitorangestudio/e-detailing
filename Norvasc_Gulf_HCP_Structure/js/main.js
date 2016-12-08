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
});


$(document).ready(function(e) {
	
	$('*').on('click', function () {
		$(this).trigger("touchend");
	});
	
	$(function(){
		$("*[data-sequenceId]").on("touchend",function(e) {
			var sequenceId = $(this).attr("data-sequenceId");
			var targetSlideNum = sequenceId.replace('Norvasc_Gulf_v7_', '');
			var left = 0;
			if(targetSlideNum == 1)
				left = -1024;
			else {
				left = targetSlideNum * -1024;
				//left += 1024; 
			}
			$(".contianer ul li").css("left", left + 'px');
			$("#slide" + targetSlideNum).children(1).addClass("displayNone");
			setTimeout(function(){ $("#slide" + targetSlideNum).children(1).removeClass("displayNone"); }, 10);
			});
		});
	var reference = 0;
	
	//================== REFERENCE BUTTON HANDLER ==========================//
    $(".refBtn").on("touchend", function(){
		var refId = "#" + $(this).attr("data-ref");
		$(refId).removeClass("hidden");
		$(refId).addClass("visible");
		reference = 1;
	});
		
	$(".refDiv").on("touchend", function(){
		$(this).addClass("hidden");
		$(this).removeClass("visible");
		reference = 0;
		});
		
	$(".btn_Show").on("touchend", function(){
		var refId = "#" + $(this).attr("data-ref");
		$(refId).removeClass("hidden");
		$(refId).addClass("visible");
		$(this).addClass("hidden");
	});
	$(".popubDiv").on("touchend", function(){
		var refId = "#" + $(this).attr("data-ref");
		$(refId).removeClass("hidden");
		$(refId).addClass("visible");
		$(this).addClass("hidden");
		$(this).removeClass("visible");
	});
	
	$(".btn_maxi").on("touchend", function(){
		var refId = "#" + $(this).attr("data-ref");
		$(refId).removeClass("hidden");
		$(refId).addClass("visible");
	});
	
    $("#infoBtn").on("touchend", function(){
		$("#infoDiv").removeClass("hidden");
		$("#infoDiv").addClass("visible");
		reference = 1;
		});
	$("#infoDiv").on("touchend", function(){
		$(this).addClass("hidden");
		$(this).removeClass("visible");
		reference = 0;
		});
});

function swipLeft(){
}
function swipRight(){
}
$("body").swipe( {
		swipe:function(event, direction, distance, duration, fingerCount) {
		  if(direction == "top" || direction == "bottom"){
				event.preventDefault();
		  }
		  
		  var id = $(event.target).closest('li').attr('id');
		  //$("#" + id).children(1).css("display", "none");
		  
		  
		  //$("#" + id).next().children(1).css("display", "block");
		  
		  
		  var left = $(".contianer ul li").css("left");
		  left = left.replace('px', '');
          left = (left == 'auto' ? '0' : left);
          left = parseInt(left);
		  
		  if(direction == "right" && left != -1024){
			//alert("right: " + left);
		  	//pageIndex--;
			left = left - -1024;
			$(".contianer ul li").css("left", left + 'px');
			$("#" + id).prev().children(1).removeClass("displayNone");
			$("#" + id).children(1).addClass("displayNone");
			
		  }
		  if(direction == "left" && left != -11264){
			//alert("left: " + left);
		  	//pageIndex++;
		  	//window.location = "../"+page + '' + ((pageIndex <= 9) ? ('0' + pageIndex) : pageIndex ) +"/index.html" ;
			left = left + -1024;
			$(".contianer ul li").css("left", left + 'px');
			$("#" + id).next().children(1).removeClass("displayNone");
			$("#" + id).children(1).addClass("displayNone");
			
		  }
	},
		 threshold:25,
		 cancelThreshold:12,
		 fallbackToMouseEvents: true,
	});
	
	$(".btn_next").on("touchend", function(event){
			var id = $(event.target).closest('li').attr('id');
		  //$("#" + id).children(1).css("display", "none");
		  
		  
		  //$("#" + id).next().children(1).css("display", "block");
		  
		  
		  var left = $(".contianer ul li").css("left");
		  left = left.replace('px', '');
          left = (left == 'auto' ? '0' : left);
          left = parseInt(left);
		  
		  if(left != -11264){
			//alert("left: " + left);
		  	//pageIndex++;
		  	//window.location = "../"+page + '' + ((pageIndex <= 9) ? ('0' + pageIndex) : pageIndex ) +"/index.html" ;
			left = left + -1024;
			$(".contianer ul li").css("left", left + 'px');
			$("#" + id).next().children(1).removeClass("displayNone");
			$("#" + id).children(1).addClass("displayNone");
			
		  }
	});
	$(".btn_prev").on("touchend", function(event){
			var id = $(event.target).closest('li').attr('id');
		  //$("#" + id).children(1).css("display", "none");
		  
		  
		  //$("#" + id).next().children(1).css("display", "block");
		  
		  
		  var left = $(".contianer ul li").css("left");
		  left = left.replace('px', '');
          left = (left == 'auto' ? '0' : left);
          left = parseInt(left);
		  
		  if(left != -1024){
			//alert("right: " + left);
		  	//pageIndex--;
			left = left - -1024;
			$(".contianer ul li").css("left", left + 'px');
			$("#" + id).prev().children(1).removeClass("displayNone");
			$("#" + id).children(1).addClass("displayNone");	
		  }
	});
	$("#closePDF").on("touchend", function(){
		document.getElementById("pdfcontainer").style.display = "none";
		document.getElementById("closePDF").style.display = "none";
		
		var pdfcontainer = document.getElementById("pdfcontainer");   
		while (pdfcontainer.firstChild) {
		  pdfcontainer.removeChild(pdfcontainer.firstChild);
		}					
	});
	
	
	$(".btn_maxi, .btn_Show").on("touchend", function(){
		
	setTimeout(function(){
		$("#div1_04").css("width", "853px");
	}, 500);
	setTimeout(function(){
		$("#div2_04").css("width", "853px");
	}, 1000);
	setTimeout(function(){
		$("#div3_04").css("width", "853px");
	}, 1500);
	});
	$(".popubDiv").on("touchend", function(){
		$("#div2_04").css("width", "0px");
		$("#div1_04").css("width", "0px");
		$("#div3_04").css("width", "0px");
	});
	
	
	$(".btn_maxi, .btn_Show").on("touchend", function(){
		
	setTimeout(function(){
		$("#div1_05").css("width", "503px");
	}, 500);
	setTimeout(function(){
		$("#div2_05").css("width", "503px");
	}, 1000);
	setTimeout(function(){
		$("#div3_05").css("width", "503px");
	}, 1500);
	});
	$(".popubDiv").on("touchend", function(){
		$("#div2_05").css("width", "0px");
		$("#div1_05").css("width", "0px");
		$("#div3_05").css("width", "0px");
	});
	
	$(".btn_maxi, .btn_Show").on("touchend", function(){	
	setTimeout(function(){
		$("#div1_06").css("width", "853px");
	}, 500);
	setTimeout(function(){
		$("#div2_06").css("width", "853px");
	}, 1000);
	setTimeout(function(){
		$("#div3_06").css("width", "853px");
	}, 1500);
	});
	$(".popubDiv").on("touchend", function(){
		$("#div2_06").css("width", "0px");
		$("#div1_06").css("width", "0px");
		$("#div3_06").css("width", "0px");
	});
	
	$(".btn_maxi, .btn_Show").on("touchend", function(){
	setTimeout(function(){
		$("#div2_08").css("height", "503px");
	}, 500);
	
	setTimeout(function(){
		$("#div1_08").css("height", "503px");
	}, 1000);
	setTimeout(function(){
		$("#div3_08").css("height", "503px");
	}, 1500);
	});
	$(".popubDiv").on("touchend", function(){
		$("#div2_08").css("height", "0px");
		$("#div1_08").css("height", "0px");
		$("#div3_08").css("height", "0px");
	});
	
	$(".btn_maxi, .btn_Show").on("touchend", function(){
	setTimeout(function(){
		$("#div2_09").css("height", "360px");
	}, 500);
	
	setTimeout(function(){
		$("#div1_09").css("height", "250px");
	}, 1000);
	setTimeout(function(){
		$("#div3_09").css("height", "250px");
	}, 1500);
	});
	$(".popubDiv").on("touchend", function(){
		$("#div2_09").css("height", "0px");
		$("#div1_09").css("height", "0px");
		$("#div3_09").css("height", "0px");
	});