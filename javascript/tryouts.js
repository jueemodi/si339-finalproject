var video;
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("autoplay is set to " + video.autoplay);
	console.log("loop is set to " + video.loop);

});

//play button
document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
   video.play(); 
});

//pause
document.querySelector("#pause").addEventListener("click", function() {
   console.log("Pause Video");
   video.pause(); 
});