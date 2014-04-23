
$K_app_dependencies = [
	{	module: "Boids", 
		description: "Boids Demo App.", 
		path: "", 
		files: [ 
			{ name: "brain/behavior_modifier.js",                      description: "Self protection behaviors." },
			{ name: "brain/behavior.js",                               description: "Abstract Behavior." },
			{ name: "behavior_group.js",     description: "Group of related behaviors." },
			{ name: "security_behavior.js",                            description: "Self protection behaviors." },
	        { name: "itinerant_behaviors/seek_behavior.js",            description: "Seek" },
	        { name: "itinerant_behaviors/flee_behavior.js",            description: "Flee" },
	        { name: "itinerant_behaviors/pursue_behavior.js",          description: "Pursue" },
	        //{ name: "herd_behaviors/alignment_behavior.js",          description: "Tries to keep the same direction" },
	        { name: "itinerant_behaviors/wander_behavior.js",          description: "Wander" },
	        { name: "itinerant_behaviors/wander_around_behaviour.js",  description: "Wander changing the target." },
	        { name: "itinerant_behaviors/wall_following_behavior.js",  description: "Wall Following" },
	        { name: "itinerant_behaviors/path_following_behavior.js",  description: "Path Following" },
			{ name: "brain/brain.js",                                  description: "Boid Brain." },
			{ name: "boid.js",                                         description: "One Boid." },
			{ name: "MenuAutomata.js",                                 description: "ThreadAutomata." },
			{ name: "MenuHandler.js",                                  description: "Device." },
			{ name: "animation.js",                                    description: "Gate." },
			{ name: "world_interface.js",                              description: "World Interface." },
			{ name: "boid_editor.js",                                  description: "Boid panel editor." },
			{ name: "world.js",                                        description: "The world where all boids live." },
			{ name: "main.js",                                         description: "main function." }
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
			{ name: "sheep.js",               description: "The brain of a sheep." }
		]
	},
	{	module: "Engige", 
		description: "Particularization of the main Boid classes", 
		path: "species/", 
		files: [ 
			{ name: "../../../src/engine/ll_Device.js",              description: "Device for game menu." },
			{ name: "../../../src/engine/ll_EventDispatcher.js",     description: "Gate for game menu." },
			{ name: "../../../src/engine/ll_Gate.js",                description: "Gate for game menu." },
			{ name: "../../../src/engine/ll_Lookup.js",              description: "Gate for game menu." },
			{ name: "../../../src/engine/ll_MessageEvent.js",        description: "Gate for game menu." }
		]
	},
	
]

