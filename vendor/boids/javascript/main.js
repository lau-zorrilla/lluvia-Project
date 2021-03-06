function main(){
  var w = new World()
  var boid_list = new WorldInterface("boid_list_content")
  w.addPort("new_boid", boid_list)

  var boid_editor = new BoidEditor("boid_properties")
  boid_list.addPort("focus_boid", boid_editor)

  /* Example 1 of Boid creation */
   var fixed_target = w.new_boid( { name: "fixed", colour: "green",
                 geo_data:  {
                               position: new Vector(220, 230),
                               velocity: new Vector(0, 0),
                               acceleration: new Vector(0, 0)
                            }
   })



     w.new_boid( {name: "seeker", colour: "yellow"}, function(config) {
                           /* Here you can interact with the outer scope */
                           /* You can also access the already created brain */
                           config.geo_data = {
                              position: new Vector(100, 100),
                              velocity: new Vector(10, 10),
                              acceleration: new Vector(0, 0)
                           }
                           config.brain.activate("seek", fixed_target)
                           return config
    })


    /* Example: wander behavior */
  var wanderer = []
  for(var i = 0; i<10; i++)
    wanderer.push( w.new_boid( function (config) {
      config.color = "purple"
      config.brain.activate("wander")
      return config
    }))

   /* Example: seek behavior */
  var seeker = []
  var t = w.new_boid( function(config) {
                           /* Here you can interact with the outer scope */
                           config.colour   = "red"
                           config.geo_data = {
                              position: new Vector(200, 200),
                              velocity: new Vector(0, 0),
                              acceleration: new Vector(0, 0)
                           }
                           return config
  })

  var first = t
  seeker.push(t)

  for(var i=0; i<5; i++)
    seeker.push( t = w.new_boid( function(config) {
      config.brain.activate('seek', t)
    }) )

  first.brain.activate('seek', t)


  /*  Example: flee behavior */
  var fleer = []
  for (var i=0; i<8; i++) {
    var f
    fleer.push( f = w.new_boid( function(config) {
      config.color = "silver"
      config.vel_max = 10
      config.brain.activate("flee", wanderer[i % wanderer.length] )
    } ))
  }

  /*  Example: pursue behaviour*/
  var b2 = w.new_boid( function (config) {
    config.colour  = "lime"
    config.vel_max = 80
    config.force_limits.thrust   = 40
    config.force_limits.steering = 80
    config.geo_data.position     = new Vector(0, 0)
    config.brain.activate("pursue", first)
  })

  /*  Example: pursue behaviour*/
  var b3 = w.new_boid( function (config) {
    config.colour  = "fuchsia"
    config.vel_max = 80
    config.force_limits.thrust   = 40
    config.force_limits.steering = 80
    config.geo_data.position     = new Vector(0, 0)
    // config.brain.activate("seek", first)
    config.brain.activate("pursue<seek", first)
     return config
   })


  w.start()
}
