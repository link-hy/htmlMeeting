'use strict'
//拿video标签
var videoplay=document.querySelector('video#player');
 
function gotMediaStream(stream){
	videoplay.srcObject=stream;
}
function handleError(err){
	console.log('getUserMedia errot:',err);
}
 
if(!navigator.mediaDevices ||
	!navigator.mediaDevices.getUserMedia){
	console.log('getUserMedia is not supported!')
}
else{
	var constraints={
		video:true,
		audio:true
	}
	navigator.mediaDevices.getUserMedia(constraints)
	.then(gotMediaStream).catch(handleError);
}
