/**
 * @classDescription Creates a Sheep
 *
 * @return {Sheep}
 * @constructor
 */
 Sheep.prototype = new Boid
 Sheep.prototype.constructor = Sheep
 Sheep.super = Boid

 function Sheep(config_object, block){ //clase
    var that = this
    var args = arguments

    if (typeof(block) === "undefined")
        if (typeof(config_object) === "function" ){
            block = config_object
            config_object = new Hash()
        }


        function initialize(){

            var config = new Hash()

            that.image = new Image()
            that.image.src = "images/sheep.png"

            that.last_heading = new Vector(0, 1)
            that.my_world = null
            that.last_time = that.current_time = null
            that.image = new Image()
            that.image.src = "images/rotated_sheep.png"
            that.image_left = new Image()
            that.image_left.src = "images/rotated_sheep_left.png"

            /* Overridable configuration */

            var default_config = {
                geo_data: {
                    position: new Vector(Math.floor(Math.random()*400), Math.floor(Math.random()*400)),
                    velocity: new Vector(Math.floor(Math.random()*20), Math.floor(Math.random()*20)),
                    acceleration: new Vector(0,0)
                },
                colour: "white",

                brain: new Brain(that),
                vel_max: 70,
                mass: 2,
                vision: {radius: 100, angle: 130 * Math.PI / 180},

                force_limits: {
                    thrust: 50,
                    steering: 50,
                    braking: 100
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
* @method sheep_objects
*
* Ask the world if something is audible with my geo_data and wave length.
*
* @return {Array} The nanobots audibles
*/
Sheep.prototype.sheep_objects = function(){
    this.sheep_objects = []
    sheep_objects = this.my_world.visible_for(this.geo_data.position, this.wave_lenght)
    for(var i=0; i < sheep_objects.length; i++){
        if(sheep_objects[i] instanceof Speaker || sheep_objects[i].id == this.id)
            sheep_objects.splice(i, 1)
    }
  return sheep_objects
}

/**
 * @method sheep_limits
 *
 * Sets the limits in which the sheeps-like boids can move
 *
 * @param  {} 
 */
Sheep.prototype.sheep_limits = function() {
    var x_axis = this.geo_data.position.Coord[0]
    var y_axis = this.geo_data.position.Coord[1]

    if(y_axis >= 800 && x_axis >= 170 || y_axis >= 800 && x_axis <= 274)
        this.my_world.max_score++
    if(x_axis <= -445 || x_axis >= 395)
        this.geo_data.velocity.Coord[0] = 0
    if (y_axis >= 800 || y_axis <= 0) {
        this.geo_data.velocity.Coord[1] = 0
    }
}

/**
 * @method update_physics
 *
 * Calculates new position, velocity and acceleration depending on the ellapsed time.
 *
 * @param  {Date} current_time Time for estimating coords.
 */
Sheep.prototype.update_physics = function(current_time){
    this.last_time = this.current_time
    this.current_time = current_time
    this.geo_data.acceleration = this.requested_acceleration()
    this.geo_data.velocity = integrate(this.geo_data.velocity, this.geo_data.acceleration, this.delta_t() )
    this.sheep_limits()
    this.geo_data.position = integrate(this.geo_data.position, this.geo_data.velocity, this.delta_t() )
}

/**
 * @method run
 *
 * Updates the time in the boid's variables
 *
 * @param {Date}   current_time Current time of the boid
 *
 */
Sheep.prototype.run = function(current_time){
    if (!(current_time instanceof Date))
        return
    //this.sheep_limits()
    current_time = current_time || new Date()
    this.update_physics(current_time)
}

/**
 * @method heading
 *
 * Gets the normal vector aligned with the heading.
 *
 * @return {Vector}
 */
Sheep.prototype.heading = function(){
    var _heading
    try{
        _heading = this.geo_data.velocity.unit()
        this.last_heading = _heading || this.last_heading
    } catch(err){
        _heading = this.last_heading
    }
    return _heading
}

/**
 * @method visible_objects
 *
 * Ask the world if something is visible with my geo_data and vision abilities.
 *
 * @return {}
 */
Sheep.prototype.visible_objects = function(){
    return this.my_world.visible_for(this.geo_data.position, this.heading(), this.vision)
}

Sheep.prototype.first_draw = function() {
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
Sheep.prototype.draw = function(ctx){

    var p = this.geo_data.position
    var v = this.geo_data.velocity
    var a = this.geo_data.acceleration
    var radius = 10
    var scale = 1 - p.get_coord(1) / 3000
    var x = this.geo_data.velocity.get_coord(0)

    ctx.save()
    ctx.scale( scale, scale / 2 )

    if(x < 0) {
        ctx.drawImage(this.image, p.get_coord(0), p.get_coord(1))
    }
    else
        ctx.drawImage(this.image_left, p.get_coord(0), p.get_coord(1))

    ctx.restore()

}