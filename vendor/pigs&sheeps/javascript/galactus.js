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

Galactus.prototype.attend_restart_game = function(date, mssg) {
	this.destroy_world()

<<<<<<< HEAD
	countdown(this.world);

    for (var i=0; i<this.sheeps.length; i++)
    	this.sheeps[i].geo_data.position = new Vector(Math.random() * 150 + 80, Math.random() * 100 + 200)
=======
Galactus.prototype.start_world = function() {
	//Fires an event that calls the world's start function
    //canvas.style.cursor = "url('images/mouse_pig.png'), move"
	this.world = new World(this.view)
	this.world.level = 1

	this.handler.addPort("restart_game", this)
	this.handler.addPort("pause_clock", this)
	this.handler.addPort("resume_clock", this)
	
	this.world.clock=null;
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
        	config.geo_data.position = new Vector(Math.floor(Math.random()*400), Math.floor(Math.random()*400))
        	config.geo_data.velocity = new Vector(Math.floor(Math.random()*20), Math.floor(Math.random()*20))
        	config.geo_data.acceleration = new Vector(0,0)
        	config.vel_max = 70
        	config.vision = {radius: 100, angle: 80 * Math.PI / 80}        	
            config.force_limits = {
                    thrust: 50,
                    steering: 50,
                    braking: 100
            }
  	        config.brain.activate("alignment")
  	        config.brain.activate("sheep", pig)
  }))
  }

	this.world.start()
}

Galactus.prototype.playSound = function(){
	window.onload = init()
	var context;
	var bufferLoader;
	var that= this

	function init() {
	  // Fix up prefixing
	  window.AudioContext = window.AudioContext || window.webkitAudioContext;
	  context = new AudioContext();
	  bufferLoader = new BufferLoader( //Crea playlist
	    context, //Array de canciones
	    [
	      'sounds/ovejas.ogg'
	    ],
	   finishedLoading
	    );

	  bufferLoader.load();
	}

	function finishedLoading(bufferList) {
	  // Create sources and play them both together.
	  that.world.source1 = context.createBufferSource();
	  that.world.source1.buffer = bufferList[0];
	  that.world.source1.connect(context.destination);	 
	  that.world.source1.loop=true //Reinicia musica si termina
	  that.world.source1.start(0); //Inicia musica
	 //Si hubiese mas sources, hacer lo mismo con cada uno 
	//  return source1	 
	}
}

Galactus.prototype.stopPlaying = function(){	
	this.source1.stop(0)		
	}

Galactus.prototype.countdown = function(){	
	var that = this
	timer.style.fontWeight = "bold"
	timer.style.color = "#996842" //inicializa color de fuente

	if(!this.world.clock)
		this.world.clock = new Clock(this.world, 120) // reloj de 2 minutos
	
    this.world.timer_interval = setInterval( // cada segundo se ejecuta la funcion
	
	function(){
		if(that.world.clock.remaining_time <= 10)
			timer.style.color = "red" //cambia color de fuente
		//if(that.world.clock.working == false)
		//	clearInterval(timer_interval)	
		timer.innerHTML = that.world.clock.get_string() //escribe en el div "timer"
	}	
	,1000);

    this.world.start()
}

Galactus.prototype.destroy_world = function() {
	//Destroys a world if there is one created
	this.world.currentState.requested = this.world.state.suspended
	this.world = new World(this.view)
	this.world.is_initalized(true)
}

Galactus.prototype.start_world = function() {
	//Fires an event that calls the worldś start function
	this.world   = new World(this.view)
	    
	this.handler.addPort("restart_game", this)
	countdown(this.world);
    
    var pig = this.world.new_boid( function(config) {
    	config.colour = "pink"
    	// config.geo_data =  {
    	// 	position: new Vector(x1, y1),
     //        velocity: new Vector(10, 10),
     //        acceleration: new Vector(0, 0)
    	// }
    })
    canvas.style.cursor = "url('images/mouse_pig.png'), move"
    var x = 0
    var y = 0
	this.sheeps.push(pig)

	for (var i=0; i<10; i++){
		x = Math.random() * 150 + 80
		y = Math.random() * 100 + 200
		
	    this.sheeps.push( this.world.new_boid( function(config) {
	        config.colour = "white"
	        config.brain.activate("seek", pig)
 			config.geo_data = {
                  position: new Vector(x, y),
                  velocity: new Vector(10, 10),
                  acceleration: new Vector(0, 0)
               }
        }))
	}
	this.world.start()
}
