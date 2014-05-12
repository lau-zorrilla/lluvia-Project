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
    this.X = ev.pageX - screener.offsetLeft
    this.Y = ev.pageY - screener.offsetTop
}

MouseCoordinates.prototype.get_mouse_coordinates = function() {
	return new Vector(this.X, this.Y)
}

MouseCoordinates.prototype.get_mouse_X = function() {
	return this.mousex = this.get_mouse_coordinates().get_coord(0)
}

MouseCoordinates.prototype.get_mouse_Y = function() {
	return this.mousey = this.get_mouse_coordinates().get_coord(1)
}