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
 	var args = []
 	for (var i=0; i<arguments.length; i++)
 		args[i] = arguments[i]
 	var that = this
    
 	function initialize(){ //constructor
 		that.colour = "white"
 		that.vel_max = 50
 		that.mass = 2
 		that.vision = {radius: 100, angle: 130 * Math.PI / 180}

 		that.force_limits = {
 			thrust: 20,
 			steering: 50,
 			braking: 70
 		}
 		args.push(function(config){
 			config.brain.activate("alignment")
 			config.geo_data = {
                              position: new Vector(100, 100),
                              velocity: new Vector(0, 0),
                              acceleration: new Vector(0, 0)
                           }
 		})
      Sheep.super.apply(that, args)
 	}

 	if (arguments.length)
 		return initialize()
 }

 SheepBrain.prototype = new Brain
 SheepBrain.prototype.constructor = SheepBrain
 SheepBrain.prototype.super = Brain

 function SheepBrain(){

 	var that = this

 	function initialize(){
 		Brain.apply(that, arguments)

 	}

 	if (arguments.length)
 		initialize() //Hace falta return??

 }
