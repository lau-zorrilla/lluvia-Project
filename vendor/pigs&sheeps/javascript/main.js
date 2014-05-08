var game    = null
var play    = null
var $logger = null
var universal_handler = null

var levels_in=0
var menu_desplegable = document.getElementById('menu')


function main(){
	var menu_handler = new MenuHandler("menu")

	game        = new GameControl('screener')
	var menu_handler = new MenuHandler("menu_container")
	var option_handler = new OptionHandler("level_option_container")
	option_handler.addPort("keep_menu_out", menu_handler)
	option_handler.addPort("get_menu_in", menu_handler)
	universal_handler = menu_handler


	var maker = new Galactus( menu_handler, 'screener')
}


