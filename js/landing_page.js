$(document).ready(function(){

'use strict';

var w = screen.width;
var h = screen.height;
var r = window.devicePixelRatio || 1;

$(".go_space").click(function(e){
	var loc = "landing_page.html"
	var clicked_id = $(this).attr("id");
	if(clicked_id == "MUSIC_PROTRAIT"){
		loc = "music_protrait.html";
		window.top.changeIFrame(loc);
	}else if(clicked_id == "WU_LI_LAB"){
		loc = "hsin_space/panorama/";
		window.top.changeIFrame(loc);
	}else if(clicked_id == "CODE_FILE"){
		loc = 'urich/panorama/';
	}else if(clicked_id == "EDGE_GIRLS"){
		// loc = 'https://linktr.ee/edgegirls';
		// window.top.changeLocation(loc);
	}else{
		window.top.changeIFrame(loc);
	}
	
});
});