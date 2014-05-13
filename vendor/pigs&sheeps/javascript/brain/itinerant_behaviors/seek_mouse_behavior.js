/**
 * @class SeekBehavior
 *
 * Creates Itinerant Behavior: seek
 *
 * @constructor SeekBehavior
 *
 */

SeekMouseBehavior.prototype = new SeekBehavior
SeekMouseBehavior.prototype.constructor = SeekMouseBehavior
SeekMouseBehavior.prototype.super = SeekBehavior

function SeekMouseBehavior(){
  SeekBehavior.apply(this, arguments)
  this.approach_distance = 100 // Default approach distance
  this.arrival_distance = 0
}


/**
 * @method set_target_at
 *
 * Search for coordinates
 *
 * @param  {Object} boid Target boid
 *
 */
SeekMouseBehavior.prototype.set_target_at = function(x, y){
    this.target = new Boid( { geo_data: {
	position:      new Vector(x,y),
	velocity:      new Vector(0,0),
	acceleration:  new Vector(0,0) }
    })
}


