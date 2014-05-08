// Hakuna matata y que sea lo que dios quiera
MouseCoordinates.prototype = new Gate
MouseCoordinates.prototype.constructor = MouseCoordinates

function MouseCoordinates(element) {

	var that = this
    this.X = 0
    this.Y = 0

	function initialize(){
	    try {
	        if (element) {
	        	that.element = element
	        	that[element] = {}
	            Gate.call(that, element)	// Call to the super constructor (it does all the work).
	        }
	    } catch (e) {
	        if ($K_debug_level >= $KC_dl.DEVELOPER)
	           alert("No event handlers were found.\nException: " + e.toSource())
	    }
	}

	if (arguments.length)
	    initialize()
}

MouseCoordinates.prototype.do_onmousemove = function(ev, el){
    this.X = ev.pageX
    this.Y = ev.pageY

    //alert(this.X + " : " + this.Y)
 //   	this.world.new_boid( function(config) {
	// 	config.colour = "pink"
	// 	config.geo_data = {
 //            position: new Vector(this.X, this.Y),
 //            velocity: new Vector(10, 10),
 //            acceleration: new Vector(0, 0)
	// })
}
