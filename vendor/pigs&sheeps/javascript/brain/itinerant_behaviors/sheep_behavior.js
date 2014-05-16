/**
 * @class SheepBehavior
 *
 * Creates Itinerant Behavior: sheep
 *
 * @constructor
 * 
 */

SheepBehavior.prototype = new Behavior
SheepBehavior.prototype.constructor = SheepBehavior
SheepBehavior.prototype.super = Behavior

function SheepBehavior(){
  Behavior.apply(this, arguments)
}


/**
 * @method set_target
 *
 * Searches for a target boid
 *
 * @param  {Object} boid Target boid
 *
 */
SheepBehavior.prototype.set_target = function(boid){
  this.target = boid || new Boid({
                          position:      new Vector(1,1),
                          velocity:      new Vector(1,1),
                          acceleration:  new Vector(1,1)
      }, "red")
}

/**
 * @method target_data
 *
 * Position information of boid
 *
 * @return {Object} this.target.geo_data Position information of boid
 */
SheepBehavior.prototype.target_data = function(){
  if (!this.target)
    throw "SheepBehavior Disabled. Still no target."
  return this.target ? this.target.geo_data : null
}

/**
 * @method get_target
 *
 * Get a targetboid 
 *
 * @return {Object} this.target_data() Position information of boid
 */
SheepBehavior.prototype.get_target = function(){
  return this.target_data()
}

/**
 * @method target_at
 *
 * Get the distance between the given boid and its target
 *
 * @return {}
 */
SheepBehavior.prototype.target_at = function(){
  return this.get_target().position.subs( this.me.geo_data.position )
}

/**
 * @method desired_velocity
 *
 * Desired velocity by boid
 *
 * @return {Object} vector Vector velocity
 */
SheepBehavior.prototype.desired_velocity = function(){
  
  var arrival_distance
  try{ 
    arrival_distance = this.target_at().module()
  }catch(err){
    arrival_distance = 0
  }
  var scale = 1
  
  if(arrival_distance >= 100){
    scale = 0
  }
  else{
    scale = arrival_distance / 100
  }

  return (new Vector(this.target_at().unit().scale(-scale * this.me.vel_max)))
}

/**
 * @method desired_acceleration
 *
 * Desired acceleration by boid
 *
 * @return {Object} vector Vector acceleration
 *
 */
SheepBehavior.prototype.desired_acceleration = function(){
  //alert(this.me.visible_objects().toSource())
  //   var x = 0
  //   var y = 0
  //   var count = 0
  //   this.me.visible_objects().each( function(boid){
  //      try {
  //         var direction = boid.heading()
  //         x += direction.get_coord(0)
  //         y += direction.get_coord(1)
  //         count++
  //      }catch(e){
  //         alert("Something went wrong when calculating heading for boid " + boid.id)
  //      }
  //     })
  //   var velocity = this.me.geo_data.velocity
  //   var desired_velocity = velocity.projection(new Vector(x/count, y/count))
  
  // for (var i = 0; i < this.me.visible_objects.length; i++) {
  //   if(this.me.visible_objects[i] instanceof Sheep){
  //     if(count == 0)
  //       return new Vector(0, 0)
  //     else  
  //       return desired_velocity.subs(velocity)
  //   }
  //   else
  //this.me.sheep_limits()

      return this.desired_velocity().subs(this.me.velocity())
  //}
}

