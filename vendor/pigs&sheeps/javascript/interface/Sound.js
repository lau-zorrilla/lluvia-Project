

Sound.prototype = new Device
Sound.prototype.constructor = Sound

function Sound(view) {
	var that = this	
	var args = arguments

	 
	audio[0].src="sounds/timber.ogg"
	

	
	function initialize(){
    	Device.call(that, view)
    	audio[0].load()
    	alert("hola")
    	

  	}

  	if (arguments.length)
    	initialize()  

}
/*Sound.prototype.Play = function() {
	//this.audio.play()	
}
Sound.prototype.pause = function() {
	//this.audio.pause()
}
Sound.prototype.stop = function() {
	//this.audio.stop()
}
*/

function cargarsonido(){
	var a= document.getElementById("audio")
	a[0].src="sounds/timber.ogg"
	a[0].load()
	//a.play()
}
