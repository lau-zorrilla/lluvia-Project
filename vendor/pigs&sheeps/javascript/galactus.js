Galactus.prototype = new Device
Galactus.prototype.contructor = Galactus

function Galactus(handler, view){
	var that = this
	this.sheeps = [] 

	var args = []
	for (var i=0; i<arguments.length; i++)
	  args.push(arguments[i])

	this.handler = args.shift()
	this.view = args[0]

	this.self_events = [ "restart_clock"]

	function initialize() {

	    Device.call(that, null, null, {previous: 0, current:0, requested: 1})

	    that.newGate ("play_button", Gate, {do_onclick: function(event, element) {
		    this.panel.style.display = 'none'
			this.device.start_world()
		} })
	}

	if (arguments.length)
		initialize()
}


Galactus.prototype.start_world = function() {
	//Fires an event that calls the world's start function
    //canvas.style.cursor = "url('images/mouse_pig.png'), move"
	this.world = new World(this.view)

	this.handler.addPort("restart_game", this)
	
	this.countdown()
	this.playSound()

	var pig = this.world.new_boid_of(Pig, function(config) {
	    config.brain.activate("seek mouse", null)
	})

	this.world.shepherd = pig

    var sheeper = []
    for (var i=0; i<30; i++) {
        var f
        sheeper.push( f = this.world.new_boid_of(Sheep, function(config){
  	       config.brain.activate("sheep", pig)
  	       //config.brain.activate("separation")
  }))
  }

	this.world.start()
}

Galactus.prototype.playSound = function(){
	window.onload = init()
	var context;
	var bufferLoader;

	function init() {
	  // Fix up prefixing
	  window.AudioContext = window.AudioContext || window.webkitAudioContext;
	  context = new AudioContext();
	  bufferLoader = new BufferLoader( //Crea playlist
	    context, //Array de canciones
	    [
	      'sounds/timber.ogg'

	      //cancion 2,
	    ],
	    finishedLoading
	    );

	  bufferLoader.load();
	}

	function finishedLoading(bufferList) {
	  // Create sources and play them both together.
	  source1 = context.createBufferSource();	 
	  source1.buffer = bufferList[0];
	  source1.connect(context.destination);	 
	  source1.start(0);
	 //Si hubiese mas sources, hacer lo mismo con cada uno
	 
	}
}


Galactus.prototype.countdown = function(){	
	var that = this
	timer.style.fontWeight = "bold"
	timer.style.color = "#996842" //inicializa color de fuente

	this.world.clock = new Clock(this.world, 120) // reloj de 2 minutos
	
    timer_interval = setInterval( // cada segundo se ejecuta la funcion
	
	function(){
		if(that.world.clock.remaining_time <= 10)
			timer.style.color = "red" //cambia color de fuente

		timer.innerHTML = that.world.clock.get_string() //escribe en el div "timer"
		
		if (that.world.clock.running == false){
			clearInterval(timer_interval) // detiene setInterval
			that.world.currentState.requested = that.world.state.suspended
			that.world.gameover_pig()
			//alert("llhego")
		}
	}	
	,1000);

}
Galactus.prototype.destroy_world = function() {
	//Destroys a world if there is one created
	this.world.currentState.requested = this.world.state.suspended
	this.world = new World(this.view)
	this.world.is_initalized(true)
}

Galactus.prototype.attend_restart_game = function(date, mssg) {
	this.destroy_world()

	this.countdown(this.world);

    for (var i=0; i<this.sheeps.length; i++)
    	this.sheeps[i].geo_data.position = new Vector(Math.random() * 150 + 80, Math.random() * 100 + 200)

    this.world.start()
}
