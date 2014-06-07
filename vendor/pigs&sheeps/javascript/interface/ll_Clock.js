Clock.prototype = new Device
Clock.prototype.constructor = Clock


<<<<<<< HEAD
function Clock(countdown_seconds) {
	this.state
	this.start_time = time.now	
	this.total_time = countdown_seconds
	this.remaining_time = start_time + remaining_time
	this.before = start_time

	return hours + minutes + seconds
	}


function Clock(view, countdown_seconds) {
	var that = this	
	var args = arguments

	function initialize(){
    	Device.call(that, view)
  	}
	
	this.start_time = get_now()
	this.total_time = countdown_seconds //segundos para jugar
	this.remaining_time = this.total_time //segundos q quedan (igual q en reset, se inicializa)
	this.before = this.start_time
	this.working = true
	this.paused = false

	if (arguments.length)
    	initialize()  

}

Clock.prototype.reset = function() { //reinicia
	this.pause()
	this.remaining_time = this.total_time 
}

Clock.prototype.get_count = function() { //devuelve segundos que quedan
	return this.remaining_time
}

Clock.prototype.run = function() { //recalcula el tiempo que queda 					
		now = get_now()				
		this.remaining_time = this.total_time - (now - this.start_time)// calcula tiempo que queda en funcion del ahora(tiempo q queda= tiempo q quedaba - tiempo q ha pasado)	
		
		if (this.remaining_time <= 0)
			this.working = false
}

Clock.prototype.pause = function() { // pausa el tiempo
	this.working = false
	this.paused = true
}

Clock.prototype.resume = function() { //continua la cuenta atras 
	this.working = true	
	this.start_time=get_now()
	this.total_time = this.remaining_time 
	this.paused = false
	//this.remaining_time = this.remaining_time - (this.start_time - this.before) //lo q queda=lo q quedaba - lo q ha pasado
}

Clock.prototype.reset = function() {}

Clock.prototype.get_count = function() {}

Clock.prototype.run = function(now) {}

Clock.prototype.pause = function() {}

Clock.prototype.resume = function() {}

Clock.prototype.get_string = function() {}
