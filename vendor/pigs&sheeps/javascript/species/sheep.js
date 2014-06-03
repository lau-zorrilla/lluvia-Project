
/**
 * @class Sheep
 *
 * Creates a Sheep.
 *
 * @constructor Sheep
 * @param  {Object} config_object 
 * @param  {Object} block  
 * @return {}
*/
 Sheep.prototype = new Boid
 Sheep.prototype.constructor = Sheep
 Sheep.super = Boid

 function Sheep(config_object, block){ //clase
    var that = this
    var args = arguments

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
            that.first_time = 0

            Boid.apply(that, args)
        }

        if (arguments.length)
            initialize()
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

    if(y_axis >= 800 && x_axis >= 170 || y_axis >= 800 && x_axis <= 274){
        if(this.first_time == 0){
           this.my_world.max_score = true
           return
        }
        else
           return
    }
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
    if(this.my_world.max_score == true){
        this.my_world.points++
        this.first_time = 1
        this.my_world.max_score = false
    }
    this.geo_data.position = integrate(this.geo_data.position, this.geo_data.velocity, this.delta_t() )
}

/**
 * @method visible_objects
 *
 * Ask the world if something is visible with my geo_data and vision abilities.
 *
 * @return {}
 */

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

//    ctx.strokeStyle = "red"
//    ctx.beginPath();
//    ctx.moveTo(p.get_coord(0), p.get_coord(1))
//
//    //var a0 = this.heading().angle(1,0)
//    
//    //alert(180*a0/Math.PI)
//    
//    ctx.arc(p.get_coord(0), p.get_coord(1), this.vision.radius + a0, -this.vision.angle - a0 , this.vision.angle - a0, false); 
//    ctx.closePath();
//      ctx.stroke();

    if(x < 0) {
        ctx.drawImage(this.image, p.get_coord(0), p.get_coord(1))
    }
    else
        ctx.drawImage(this.image_left, p.get_coord(0), p.get_coord(1))

    ctx.restore()

}