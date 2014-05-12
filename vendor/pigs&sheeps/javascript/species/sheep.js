/**
 * @classDescription Creates a Sheep
 *
 * @return {Sheep}
 * @constructor
 */
 Sheep.prototype = new Boid
 Sheep.prototype.constructor = Sheep
 Sheep.super = Boid

 function Sheep(){ //clase
     var that = this
    var args = arguments

    if (typeof(block) === "undefined")
        if (typeof(config_object) === "function" ){
            block = config_object
            config_object = new Hash()
        }


        function initialize(){

            var config = new Hash()

            that.last_heading = new Vector(0, 1)
            that.my_world = null
            that.last_time = that.current_time = null

            /* Overridable configuration */

            var default_config = {
                geo_data: {
                    position: new Vector(Math.floor(Math.random()*400), Math.floor(Math.random()*400)),
                    velocity: new Vector(Math.floor(Math.random()*40), Math.floor(Math.random()*40)),
                    acceleration: new Vector(0,0)
                },
                colour: "blue",

                brain: new Brain(that),
                vel_max: 50,
                mass: 2,
                vision: {radius: 100, angle: 130 * Math.PI / 180},

                force_limits: {
                    thrust: 20,
                    steering: 50,
                    braking: 70
                }
            }

            config_object.soft_merge$B(default_config)
            if ( typeof(block) === "function")
                config = block(config_object) || new Hash()
            that.merge$B(config.soft_merge$B(config_object))
            if (that.color)
                that.colour = that.color
        }

        if (arguments.length)
            initialize()
 }

Sheep.prototype.low_tolerance = function() {
  this.vision.radius = 50
  this.vision.acceleration = -50
  //this.my_world.visible_for(this.geo_data.position, this.heading(), this.vision)
}

Sheep.prototype.high_tolerance = function() {
  this.vision.radius = 25
  this.vision.acceleration = -10
}

Sheep.prototype.change_tolerance = function(type_of_boid) {
	if(type_of_boid == "sheep")
		this.high_tolerance()
	else
		this.low_tolerance()
}
