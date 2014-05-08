Galactus.prototype = new Device
Galactus.prototype.contructor = Galactus

function Galactus(handler, view){
	var that = this

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

	countdown(this.world);

	this.world.new_boid( function(config) {
		config.colour = "pink"
	})

	var sheeps = []
	for (var i=0; i<10; i++)
	sheeps.push( this.world.new_boid( function(config) {
		config.colour = "white"
	}))

    this.world.start()
}

Galactus.prototype.destroy_world = function() {
	//Destroys a world if there is one created
	this.world.currentState.requested = this.world.state.suspended
	//alert(this.world.boids.toSource())
	var list = this.world.get_boids()
	this.world = new World(this.view)
	this.world.is_initalized(true)
}

Galactus.prototype.start_world = function() {
	this.world   = new World(this.view)
	    //Fires an event that calls the worldś start function
	    //alert("Galactus lives!")
	    //alert(dev.toSource())
	    
	this.handler.addPort("restart_game", this)
	countdown(this.world);
    
    var pig = this.world.new_boid( function(config) {
    	config.colour = "pink"
    })
    
    var x = 0
    var y = 0

	var sheeps = []
	for (var i=0; i<10; i++){
		x = Math.random() * 150 + 80
		y = Math.random() * 100 + 200
		
	    sheeps.push( this.world.new_boid( function(config) {
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
