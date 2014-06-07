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

	countdown(this.world);

    for (var i=0; i<this.sheeps.length; i++)
    	this.sheeps[i].geo_data.position = new Vector(Math.random() * 150 + 80, Math.random() * 100 + 200)

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
