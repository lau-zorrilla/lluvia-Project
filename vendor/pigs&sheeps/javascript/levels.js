Levels.prototype = new Gate
Levels.prototype.constructor = Levels

function Levels(element) {

	var that = this

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

Levels.prototype.do_onmouseover = function(ev, el){
   this.device.fireEvent(this.device.newMessage("sync", "keep_menu_out", this))
}

Levels.prototype.do_onmouseout = function(ev, el){
	if (ev.target != ev.currentTarget)
		return 
	
	level_option_container.style.display='none' //le puedes pasar el id del div a piñon y te lo coge sin hacer getDocumentById
    this.device.fireEvent(this.device.newMessage("sync", "get_menu_in", this))
}


