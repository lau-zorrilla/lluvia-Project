Clock.prototype = new Device
Clock.prototype.constructor = Clock


function Clock(view, countdown_seconds) {
	//this.state
	var that = this	
	Device.call(that, view)
	function getNow(){ //Devuelve la hora actual en segundos
		now = new Date
		hours = now.getHours() * 3600 //horas pasadas a segundos
		minutes = now.getMinutes() * 60 // minutos pasados a segundos
		seconds = now.getSeconds() // segundos

		return hours + minutes + seconds
	}
	start_time = getNow()
	this.total_time = countdown_seconds //segundos para jugar
	//this.remaining_time = start_time + total_time //hora a la que finaliza
	this.remaining_time=this.total_time //segundos q quedan (igual q en reset, se inicializa)
	this.before = this.start_time
	this.running=true
}

Clock.prototype.reset = function() { //reinicia
	this.pause()
	this.remaining_time=this.total_time 
}

Clock.prototype.get_count = function() { //devuelve segundos que quedan

	return this.remaining_time
}

Clock.prototype.run = function(now) { //recalcula el tiempo que queda 

	while(this. running ==true)
		this.remaining_time=this.remaining_time- (getNow() - this.start_time) // calcula tiempo que queda en funcion del ahora(tiempo q queda= tiempo q quedaba - tiempo q ha pasado)
		if (this.remaining_time==0)
			this.running=false
}

Clock.prototype.pause = function() { // pausa el tiempo
	this.running=false
}

Clock.prototype.resume = function() { //continua la cuenta atras 
	
	this.start_time=getNow()
	this.remaining_time=this.remaining_time-(this.start_time-this.before) //lo q queda=lo q quedaba - lo q ha pasado
	this.running=true
	
}

Clock.prototype.get_string = function() { //devuelve una cadena con los segundos restantes
	min = Math.floor(this.remaining_time/60);
	sec = Math.round(this.remaining_time-(min*60));

	return min+ ' : '+ sec;


}