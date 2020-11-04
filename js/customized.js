$(document).ready(function(){

'use strict';

var w = screen.width
var h = screen.height
var r = window.devicePixelRatio || 1
$("#screen_size").text("screen width = " + w + ", screen height = " + h + ", ratio = " + r);

$("#_1").css("visibility", "visible");
$("#_1__3").css("visibility", "hidden");

$(".to_hsin_space").on("click", function(){
  	$("#_1__3").css("visibility", "visible");
  	$("#_1").css("visibility", "hidden");
}); 

});