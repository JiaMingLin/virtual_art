$(document).ready(function(){

'use strict';

var w = screen.width;
var h = screen.height;
var r = window.devicePixelRatio || 1;

$(".go_space").click(function(e){
	var loc = "landing_page.html"
	if(e.target.id == "MUSIC_PROTRAIT"){
		loc = "music_protrait.html";
	}else if(e.target.id == "WU_LI_LAB"){
		loc = "hsin_space/panorama/";
	}
	window.top.changeIFrame(loc);
});
});