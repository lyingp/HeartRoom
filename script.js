window.onscroll= function(){
	var scrollPos; 
	if (typeof window.pageYOffset != 'undefined') 
	{ 
	   scrollPos = window.pageYOffset; 
	} 
	else if (typeof document.compatMode != 'undefined' &&    document.compatMode != 'BackCompat') 
	{ 
	   scrollPos = document.documentElement.scrollTop; 
	} 
	else if (typeof document.body != 'undefined') 
	{ 
	   scrollPos = document.body.scrollTop; 
	} 
	var icon = document.getElementById("scrollIcon");
	if(scrollPos>800){
		icon.style.display = "block";
	}else{
		icon.style.display = "none";
	}
}
var scroll = document.getElementById("scrollIcon");
scroll.onclick = function(){
	if(typeof window.pageYOffset != 'undefined'){
		while(window.pageYOffset>0){
			//window.pageYOffset-=200;
			document.body.scrollTop -= 5;
		}
		
	}else if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat'){
		document.documentElement.scrollTop -= 5;
	}else if(typeof document.body != 'undefined'){
		document.body.scrollTop -= 5;
	}
}