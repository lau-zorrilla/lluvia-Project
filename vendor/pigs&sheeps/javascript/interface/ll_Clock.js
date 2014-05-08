Clock.prototype = new Device
Clock.prototype.constructor = Clock


function Clock(countdown_seconds) {
	//this.state
	this.start_time = time.now	//hora a la que comienza
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

Clock.prototype.run = function(now) {

	while(this. running ==true)
		this.remaining_time=this.remaining_time- (time.now - this.start_time) // calcula tiempo que queda en funcion del ahora(tiempo q queda= tiempo q quedaba - tiempo q ha pasado)
		if (this.remaining_time==0)
			this.running=false
}

Clock.prototype.pause = function() {
	this.running=false
}

Clock.prototype.resume = function() {
	
	this.start_time=time.now
	this.remaining_time=this.remaining_time-(this.start_time-this.before) //lo q queda=lo q quedaba - lo q ha pasado
	this.running=true
	
}

Clock.prototype.get_string = function() {
	min = Math.floor(this.remaining_time/60);
	sec = Math.round(this.remaining_time-(min*60));

	return min+ ' : '+ sec;


}
