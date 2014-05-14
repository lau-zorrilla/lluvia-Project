/**
 * @classDescription Creates a Shepard Pig
 *
 * @return {Pig}
 * @constructor
 */
 Pig.prototype = new Boid
 Pig.prototype.constructor = Pig
 Pig.super = Boid

 function Pig(config_object, block){ //clase
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
            that.image = new Image()
            that.image.src = "images/rotated_pig.png"
            that.image_left = new Image()
            that.image_left.src = "images/rotated_pig_left.png"

            /* Overridable configuration */

            var default_config = {
                geo_data: {
		            position: new Vector(100, 200),
		            velocity: new Vector(2, 2),
		            acceleration: new Vector(0, 0)
                },
                colour: "pink",

                brain: new Brain(that),
                vel_max: 70,
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

/**
 * @method first_draw
 *
 * 
 *
 * @param {}   ctx Context in which to paint the Boid
 *
 */
 Pig.prototype.first_draw = function() {
    var canvas = document.createElement('canvas');
    canvas.width = 24;
    canvas.height = 24;

    // Get the drawing context
    var ctx = canvas.getContext('2d');
}

/**
 * @method draw
 *
 * Draws a boid into the world defined by the context
 *
 * @param {}   ctx Context in which to paint the Boid
 *
 */
Pig.prototype.draw = function(ctx){

    var p = this.geo_data.position
    var v = this.geo_data.velocity
    var a = this.geo_data.acceleration
    var radius = 10
    var scale = 1 - p.get_coord(1) / 3000
    this.initial_position = 0
    var x = this.geo_data.position.get_coord(0)


    ctx.save()
    ctx.scale( scale, scale / 2 )

    if(this.initial_position < x) {
        ctx.drawImage(this.image, p.get_coord(0), p.get_coord(1))
    }
    else
	    ctx.drawImage(this.image_left, p.get_coord(0), p.get_coord(1))

	this.initial_position = x

    ctx.restore()
}