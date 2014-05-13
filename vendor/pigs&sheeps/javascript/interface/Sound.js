Sound.prototype = new Device
Sound.prototype.constructor = Sound

function Sound(view, sound_track) {
	var that = this	
	var args = arguments

	this.sound_track = sound_track
	this.track_src ='<embed src='+'"'+this.sound_track+'"'+'>'


	function initialize(){
    	Device.call(that, view)
  	}

  	if (arguments.length)
    	initialize()  

}

Sound.prototype.play = function() {
	this.sound_track.play()
	
}
Sound.prototype.pause = function() {
	this.sound_track.pause()
}
Sound.prototype.stop = function() {
	this.sound_track.stop()
}

