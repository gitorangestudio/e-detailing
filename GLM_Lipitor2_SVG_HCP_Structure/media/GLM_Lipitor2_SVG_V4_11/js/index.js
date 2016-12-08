$("body").swipe( {
		swipe:function(event, direction, distance, duration, fingerCount) {
		  if(direction == "top" || direction == "bottom"){
				event.preventDefault();
		  }
		  var page = location.pathname.substr(0,  (location.pathname.lastIndexOf('/')));
		  page = page.substr(page.lastIndexOf('/') + 1,  page.length);
		  var pageIndex = parseInt(page.substr(page.lastIndexOf('_') + 1,  page.length));
		  page = page.substr(0,  (page.lastIndexOf('_') + 1));
		  
		  if(direction == "right"){
		  pageIndex--;
		  //alert("../"+page + '' + ((pageIndex <= 9) ? ('0' + pageIndex) : pageIndex ) +"/index.html" );
		  }
		  if(direction == "left"){
		  pageIndex++;
		  //window.location = "../"+page + '' + ((pageIndex <= 9) ? ('0' + pageIndex) : pageIndex ) +"/index.html" ;
		  //alert("../"+page + '' + ((pageIndex <= 9) ? ('0' + pageIndex) : pageIndex ) +"/index.html" );
		  }
		  if(pageIndex >= 1 && pageIndex <= 31) {
		      window.location = "../"+page + '' + ((pageIndex <= 9) ? ('0' + pageIndex) : pageIndex ) +"/index.html" ;
		  }
	},
		 threshold:25,
		 cancelThreshold:12,
		 fallbackToMouseEvents: true,
	});
	$("img").click(function(){
			$(this).trigger("touchstart");
		});	
	$(".btn_next").on("touchstart click", function(event){
		  var page = location.pathname.substr(0,  (location.pathname.lastIndexOf('/')));
		  page = page.substr(page.lastIndexOf('/') + 1,  page.length);
		  var pageIndex = parseInt(page.substr(page.lastIndexOf('_') + 1,  page.length));
		  page = page.substr(0,  (page.lastIndexOf('_') + 1));
		  if(pageIndex < 31) { 
		  	pageIndex++;
			window.location = "../"+page + '' + ((pageIndex <= 9) ? ('0' + pageIndex) : pageIndex ) +"/index.html" ;
		  }
	});
	
	$(".btn_prev").on("touchstart click", function(event){
		  var page = location.pathname.substr(0,  (location.pathname.lastIndexOf('/')));
		  page = page.substr(page.lastIndexOf('/') + 1,  page.length);
		  var pageIndex = parseInt(page.substr(page.lastIndexOf('_') + 1,  page.length));
		  page = page.substr(0,  (page.lastIndexOf('_') + 1));
		  if(pageIndex > 1) { 
		  	pageIndex--;
		  	window.location = "../"+page + '' + ((pageIndex <= 9) ? ('0' + pageIndex) : pageIndex ) +"/index.html" ;
		  }
	});
	setTimeout(function(){$(".graph").css("width", "393px")}, 2300);
	