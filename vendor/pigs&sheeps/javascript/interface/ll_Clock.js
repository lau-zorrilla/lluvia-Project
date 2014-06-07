Clock.prototype = new Device
Clock.prototype.constructor = Clock

function get_now(){ //Devuelve la hora actual en segundos
		now = new Date
		hours = now.getHours() * 3600 //horas pasadas a segundos
		minutes = now.getMinutes() * 60 // minutos pasados a segundos
		seconds = now.getSeconds() // segundos

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
	this.paused = true
	//this.remaining_time = this.remaining_time - (this.start_time - this.before) //lo q queda=lo q quedaba - lo q ha pasado
}

Clock.prototype.get_string = function() { //devuelve una cadena con los segundos restantes

	if(this.working == true){
		this.run()
		min = Math.floor(this.remaining_time / 60)
		sec = Math.round(this.remaining_time - (min * 60))

		if(min == 1 && sec >= 10 || min == 0 && sec >= 10)
			return '0' + min + ':'+ sec
		else
			return '0' + min + ':' + '0' + sec

	}
	else{ 
		min = Math.floor(this.remaining_time / 60)
		sec = Math.round(this.remaining_time - (min * 60))

		if(min == 1 && sec >= 10 || min == 0 && sec >= 10)
			return '0' + min + ':'+ sec
		else
			return '0' + min + ':' + '0' + sec
	}

}