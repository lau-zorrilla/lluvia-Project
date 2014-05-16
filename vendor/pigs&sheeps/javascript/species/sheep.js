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
                tolerance: {radius: 50, angle: 130 * Math.PI / 180},

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

Sheep.prototype.low_tolerance = function() {

    for(var i=0; i<this.sheep_objects.length; i++){
        this.sheep_objects[i].tolerance.radius = 50
        this.sheep_objects[i].acceleration = -50
    }
  //this.my_world.visible_for(this.geo_data.position, this.heading(), this.vision)
}

Sheep.prototype.high_tolerance = function() {
  this.tolerance.radius = 25
  this.acceleration = -10
}

Sheep.prototype.change_tolerance = function(type_of_boid) {
	if(type_of_boid == "sheep")
		this.high_tolerance()
	else
		this.low_tolerance()
}

Sheep.prototype.sheep_limits = function() {
    if(this.geo_data.position.get_coord(0) > this.screener.width)
        this.geo_data.position.get_coord(0) = this.screener.width
    //else if ()
}
// function limites(){ 
//     if(jugador1.coord_x>canvas.width-100)
//         jugador1.coord_x=canvas.width-100;
//     if(jugador1.coord_x<0)
//         jugador1.coord_x = 0;
//     if(jugador1.coord_y>canvas.height-100)
//         jugador1.coord_y = canvas.height-100;
//     if(jugador1.coord_y<0)
//         jugador1.coord_y = 0;

// function limites(){ 
//     if(jugador1.coord_x>canvas.width-100)
//         jugador1.coord_x=canvas.width-100;
//     if(jugador1.coord_x<0)
//         jugador1.coord_x = 0;
//     if(jugador1.coord_y>canvas.height-100)
//         jugador1.coord_y = canvas.height-100;
//     if(jugador1.coord_y<0)
//         jugador1.coord_y = 0;

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

/**
* @method draw
*
* Draws a sheep into the world defined by the context
*
* @param {Object} ctx Context in which to paint the Boid
*/
Sheep.prototype.draw = function(ctx){
    var p = this.geo_data.position
    //var image_size = 35
    ctx.drawImage(this.image, p.get_coord(0), p.get_coord(1))
    //ctx.drawImage(this.image, p.get_coord(0)-(image_size/2)*escala, p.get_coord(1)-(image_size/2)*escala, image_size*escala, image_size*escala)
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

    ctx.save()
    ctx.scale( scale, scale / 2 )

    ctx.drawImage(this.image, p.get_coord(0), p.get_coord(1))

    ctx.restore()

    //var radius = 10

    // ctx.fillStyle = this.colour
    // ctx.strokeStyle = "black"
    // ctx.beginPath();
    // ctx.arc(12, 12, radius, 0, Math.PI*2, true);
    // ctx.closePath();
    // ctx.fill();

    // ctx.beginPath();
    // ctx.arc(12, 12, radius + 2, 0, Math.PI*2, true);
    // ctx.closePath();
    // ctx.stroke()

    // this.shape = ctx.getImageData(0,0,24,24)
    //this.cached_canvas = canvas
}