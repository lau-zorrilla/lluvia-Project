MenuHandler.prototype = new Device
MenuHandler.prototype.contructor = MenuHandler

function MenuHandler(view) {
	var that = this
	this.self_events = [ "restart_game", "pause_clock", "resume_clock" ]
	this.view = view

	function initialize() {
	     Device.call(that, view)

	    that.menu_effects = that.newGate("menu", Animation)
	    that.menu_effects[that.menu_effects.element].menu_automata = that.menu_effects.new_effect(new MenuAutomata(that.menu_effects.device, that.menu_effects))

	    that.newGate("desplegable", Gate, {do_onmouseover: function(event, element) {
	        menu_img.src="images/sheep2.png" }, do_onmouseout: function(event, element) {
	        menu_img.src="images/sheep1.png"
	    }})

	    that.newGate("instructions_option", Gate, {do_onclick: function(event, element) {
	        //alert("Move the little pig to place sheeps into the barnyard")
	        alert_message.style.display="block"
	        this.device.fireEvent(this.device.newMessage("sync", "pause_clock", this))

	    } })

	    that.newGate("button_ok",Gate,{do_onclick: function(event, element) {
	    	alert_message.style.display="none"
	    	this.device.fireEvent(this.device.newMessage("sync", "resume_clock", this))
	     } })

	    that.newGate("restart_option", Gate, { do_onclick: function(event, element) {
	        this.device.fireEvent(this.device.newMessage("sync", "restart_game", this))	        
	    } })

	    that.newGate("level_option", Gate, {do_onclick: function(event, element){
	        var levels_container= document.getElementById('level_option_container')
	        levels_container.style.display='inline'
	    } })
	}

	if (arguments.length)
		initialize()
}

MenuHandler.prototype.attend_keep_menu_out = function(date, msg) {
    //alert(this.menu_effects.menu_automata.toSource())
    this.menu_effects[this.menu_effects.element].menu_automata.currentState.requested = this.menu_effects[this.menu_effects.element].menu_automata.state.out
}

MenuHandler.prototype.attend_get_menu_in = function(date, msg) {
    this.menu_effects[this.menu_effects.element].menu_automata.currentState.requested = this.menu_effects[this.menu_effects.element].menu_automata.state.getting_in
    //alert("aqui llego")
}
