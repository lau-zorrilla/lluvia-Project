
$K_app_dependencies = [
	{	module: "Boids", 
		description: "Boids Demo App.", 
		path: "", 
		files: [ 
			{ name: "brain/behavior.js",                                     description: "Abstract Behavior." },
			{ name: "brain/behavior_group.js",                               description: "Group of related behaviors." },
			//{ name: "brain/security_behavior.js",                            description: "Self protection behaviors." },
			{ name: "brain/behavior_modifier.js",                            description: "Self protection behaviors." },
	        { name: "brain/itinerant_behaviors/seek_behavior.js",            description: "Seek" },
	        { name: "brain/itinerant_behaviors/seek_mouse_behavior.js",      description: "Seek the mouse click" },
	        { name: "brain/itinerant_behaviors/flee_behavior.js",            description: "Flee" },
	        { name: "brain/itinerant_behaviors/pursue_behavior.js",          description: "Pursue" },
	        //{ name: "herd_behaviors/alignment_behavior.js",                description: "Tries to keep the same direction" },
	        { name: "brain/itinerant_behaviors/wander_behavior.js",          description: "Wander" },
	        { name: "brain/itinerant_behaviors/wander_around_behaviour.js",  description: "Wander changing the target." },
	        { name: "brain/itinerant_behaviors/sheep_behavior.js",           description: "Behavoir of those kind sheep" },
	        { name: "brain/itinerant_behaviors/wall_following_behavior.js",  description: "Wall Following" },
	        { name: "brain/itinerant_behaviors/path_following_behavior.js",  description: "Path Following" },
	        { name: "brain/herd_behaviors/alignment_behavior.js",            description: "Alignment Following" },
	        { name: "brain/herd_behaviors/cohesion_behavior.js",             description: "Cohesion Following" },
	        { name: "brain/herd_behaviors/separation_behavior.js",           description: "Separation Following" },
			{ name: "brain/brain.js",                                        description: "Boid Brain." },
			{ name: "boid.js",                                               description: "One Boid." },
			{ name: "galactus.js",                                           description: "Creator and destructor of worlds." },
			{ name: "interface/BufferLoader.js",                             description: "Buffer Loader" },
			{ name: "interface/Sound.js",                                    description: "Sound device." },
			//{ name: "menu_animation.js",                                     description: "To draw the animation." },
			{ name: "option_handler.js",                                     description: "Menu Device." },
			{ name: "levels.js",                                             description: "Gate for levels menu." },
			{ name: "MenuAutomata.js",                                       description: "ThreadAutomata." },
			{ name: "MenuHandler.js",                                        description: "Device." },
			{ name: "animation.js",                                          description: "Gate." },
			{ name: "world_interface.js",                                    description: "World Interface." },
			{ name: "boid_editor.js",                                        description: "Boid panel editor." },
			{ name: "world.js",                                              description: "The world where all boids live." },
			{ name: "mouse_coordinates.js",                                  description: "Gets mouse coordinates." },
			{ name: "interface/world_background.js",                         description: "Drawing mega function." },
			{ name: "interface/ll_Clock.js",                                 description: "Clock class to tell the time." },
			{ name: "interface/gameover.js",                                 description: "Drawing sad pig when game is over." },
			{ name: "interface/winner.js",                                   description: "Drawing happy pig when game is over with a minimun of sheeps inside the backyard." },
			{ name: "main.js",                                               description: "main function." }
		]
	},
	{	module: "Interface", 
		description: "Interface tools", 
		path: "interface/", 
		files: [ 
			{ name: "keyboard_control.js", description: "Keyboard Controller." },
			{ name: "game_control.js",      description: "Game controllers" },
			{ name: "button.js",           description: "Button." }
		]
	},
	{	module: "Species", 
		description: "Particularization of the main Boid classes", 
		path: "species/", 
		files: [ 
			//{ name: "alignment_behavior.js",  description: "Alignment Behavior." },
			{ name: "sheep.js",               description: "The brain of a sheep." },
			{ name: "pig.js",                 description: "The brain of a pig." }
		]
	},
]

