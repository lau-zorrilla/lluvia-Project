OptionHandler.prototype = new Device
OptionHandler.prototype.contructor = OptionHandler

function OptionHandler(view) {
	var that = this
	this.self_events = [ "get_panel_out", "keep_menu_out", "get_menu_in" ]
	Device.apply(this, arguments)

	function initialize() {
		Device.call(that, view)
		
		that.newGate("level_option_container", Levels)

	}

	if (arguments.length)
		initialize()
}


