//iQontrol - Copyright (c) by Sebatian Bormann
//Please visit https://github.com/sbormann/ioBroker.iqontrol for licence-agreement and further information

//Settings
var namespace = getUrlParameter('namespace') || 'iqontrol.0';
var connectionLink = location.origin;
var useCache = true;
var homeId = getUrlParameter('home') || '';	//If not specified, the first toolbar-entry will be used
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var iQontrolRoles = {
	"iQontrolView": 				{
										name: "Link to other view", 	
										states: ["ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"],
										options: {
											icon_on: {name: "Icon", type: "icon", defaultIcons: ";link_plain_internal.png;link_chain.png", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 
										}
									},
	"iQontrolSwitch": 				{
										name: "Switch", 				
										states: ["STATE", "POWER", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/switch_on.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "switch_on.png;plug_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "switch_off.png;switch_red_off.png;plug_off.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"}, 
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolButton": 				{
										name: "Button", 
										states: ["STATE", "SET_VALUE", "OFF_SET_VALUE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/button.png",
										options: {
											icon_off: {name: "Icon", type: "icon", defaultIcons: "button.png", default: ""},
											returnToOffSetValueAfter: {name: "Return to 'OFF_SET_VALUE' after [ms]", type: "number", min: "10", max: "60000", default: ""}, 
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"}, 
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"}, 
											closeDialogAfterExecution: {name: "Close dialog after execution", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolLight": 				{
										name: "Light",
										states: ["STATE", "LEVEL", "HUE", "SATURATION", "COLOR_BRIGHTNESS", "CT", "WHITE_BRIGHTNESS", "ALTERNATIVE_COLORSPACE_VALUE", "POWER", "EFFECT", "EFFECT_NEXT", "EFFECT_SPEED_UP", "EFFECT_SPEED_DOWN", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/light_on.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "light_on.png;light_lampshade_on.png;light_desklamp_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "light_off.png;light_lampshade_off.png;light_desklamp_off.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"}, 
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}, 
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},						
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											invertCt: {name: "Invert CT (use Kelvin instead of Mired)", type: "checkbox", default: "false"}, 
											alternativeColorspace: {name: "Colorspace for ALTERNATIVE_COLORSPACE_VALUE", type: "select", selectOptions: "/None;RGB/RGB;#RGB/#RGB;RGBW/RGBW;#RGBW/#RGBW;RGBWWCW/RGBWWCW;#RGBWWCW/#RGBWWCW;RGBCWWW/RGBCWWW;#RGBCWWW/#RGBCWWW;RGB_HUEONLY/RGB (Hue only);#RGB_HUEONLY/#RGB (Hue only);HUE_MILIGHT/Hue for Milight", default: ""}
										}
									},
	"iQontrolFan": 					{
										name: "Fan",
										states: ["STATE", "BATTERY", "UNREACH", "POWER", "ERROR"], 
										icon: "/images/icons/fan_on.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "fan_on.png;kitchenhood_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "fan_off.png;kitchenhood_off.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"}, 
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolThermostat": 			{
										name: "Thermostat",
										states: ["SET_TEMPERATURE","TEMPERATURE", "HUMIDITY", "CONTROL_MODE", "WINDOW_OPEN_REPORTING", "VALVE_STATES", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/radiator.png",
										options: {
											icon_on: {name: "Icon", type: "icon", defaultIcons: "radiator.png;heating_on.png;cooling_on.png;airconditioner_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "radiator_off.png;heating_off.png;cooling_off.png;airconditioner_off.png", default: ""},
											controlModeDisabledValue: {name: "Value of CONTROL_MODE for 'disabled'", type: "text", default: ""}, 
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolHomematicThermostat": 	{
										name: "Homematic-Thermostat",
										states: ["SET_TEMPERATURE", "TEMPERATURE", "HUMIDITY", "CONTROL_MODE", "BOOST_STATE", "PARTY_TEMPERATURE", "WINDOW_OPEN_REPORTING", "VALVE_STATES", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/radiator.png",
										options: {
											icon_on: {name: "Icon", type: "icon", defaultIcons: "radiator.png;heating_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "radiator_off.png;heating_off.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolTemperature": 			{
										name: "Temperature-Sensor",
										states: ["STATE", "TEMPERATURE", "HUMIDITY", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/temperature.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "temperature.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "temperature.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolHumidity": 			{
										name: "Humidity-Sensor",
										states: ["STATE", "TEMPERATURE", "HUMIDITY", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/humidity.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "humidity.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "humidity.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolBrightness": 			{
										name: "Brightness-Sensor",
										states: ["STATE", "BRIGHTNESS", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/brightness_light.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "brightness_light.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "brightness_dark.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolMotion": 				{
										name: "Motion-Sensor",
										states: ["STATE", "BRIGHTNESS", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/motion_on.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "motion_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "motion_off.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolDoor": 				{
										name: "Door", 
										states: ["STATE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/door_closed.png",
										options: {
											icon_on: {name: "Icon opened", type: "icon", defaultIcons: "door_opened.png", default: ""},
											icon_off: {name: "Icon closed", type: "icon", defaultIcons: "door_closed.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolGarageDoor": 				{
										name: "Garage Door", 
										states: ["STATE", "TOGGLE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/garagedoor_closed.png",
										options: {
											icon_on: {name: "Icon opened", type: "icon", defaultIcons: "garagedoor_opened.png;gate_opened.png", default: ""},
											icon_off: {name: "Icon closed", type: "icon", defaultIcons: "garagedoor_closed.png;gate_closed.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolDoorWithLock": 		{
										name: "Door with lock",
										states: ["STATE", "LOCK_STATE", "LOCK_STATE_UNCERTAIN", "LOCK_OPEN", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/door_locked.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "door_opened.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "door_closed.png", default: ""},
											icon_locked: {name: "Icon locked", type: "icon", defaultIcons: "door_locked.png", default: ""},
											icon_unlocked: {name: "Icon unlocked", type: "icon", defaultIcons: "door_unlocked.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolWindow": 				{
										name: "Window",
										states: ["STATE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/window_closed.png",
										options: {
											icon_on: {name: "Icon opened", type: "icon", defaultIcons: "window_opened.png", default: ""},
											icon_off: {name: "Icon closed", type: "icon", defaultIcons: "window_closed.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolBlind": 				{
										name: "Blind", 
										states: ["LEVEL", "DIRECTION", "STOP", "UP", "UP_SET_VALUE", "DOWN", "DOWN_SET_VALUE", "FAVORITE_POSITION", "FAVORITE_POSITION_SET_VALUE", "SLATS_LEVEL", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/blind_middle.png",
										options: {
											icon_on: {name: "Icon opened", type: "icon", defaultIcons: "blind_opened.png", default: ""},
											icon_off: {name: "Icon closed", type: "icon", defaultIcons: "blind_closed.png", default: ""},
											icon_middle: {name: "Icon middle", type: "icon", defaultIcons: "blind_middle.png", default: ""},
											icon_closing: {name: "Icon closing", type: "icon", defaultIcons: "blind_closing.png", default: ""},
											icon_opening: {name: "Icon opening", type: "icon", defaultIcons: "blind_opening.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"}, 
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}, 
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											invertActuatorLevel: {name: "Invert LEVEL (0 = open)", type: "checkbox", default: "false"}, 
											directionOpeningValue: {name: "Value of DIRECTION for 'opening'", type: "text", default: "1"}, 
											directionClosingValue: {name: "Value of DIRECTION for 'closing'", type: "text", default: "2"}, 
											directionUncertainValue: {name: "Value of DIRECTION for 'uncertain'", type: "text", default: "3"},
											favoritePositionCaption: {name: "Caption for FAVORITE_POSITION", type: "text", default: "Favorite Position"}
										}
									},
	"iQontrolFire": 				{
										name: "Fire-Sensor",
										states: ["STATE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/fire_on.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "fire_on.png;gas_on.png;firebox_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "fire_off.png;gas_off.png;firebox_off.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolAlarm": 				{
										name: "Alarm",
										states: ["STATE", "CONTROL_MODE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"],
										icon: "/images/icons/alarm_on.png",
										options: {
											icon_triggered: {name: "Icon triggered (STATE is true)", type: "icon", defaultIcons: "alarm_on_triggered.png;alarm_on.png;bell_on.png;bell_ringing_on.png;firebox_on.png;panic_on.png", default: ""},
											icon_on: {name: "Icon on (STATE is false, CONTROL_MODE is armed)", type: "icon", defaultIcons: "alarm_on.png;alarm_on_triggered.png;bell_on.png;bell_ringing_on.png;firebox_on.png;firebox_green.png;panic_on.png", default: ""},
											icon_off: {name: "Icon off (STATE is false, CONTROL_MODE is disarmed)", type: "icon", defaultIcons: "alarm_off.png;bell_off.png;bell_ringing_off.png;firebox_off.png;panic_off.png", default: ""},
											controlModeDisarmedValue: {name: "Value of CONTROL_MODE for 'disarmed'", type: "text", default: "0"}, 
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolBattery": 				{
										name: "Battery", 
										states: ["STATE", "CHARGING", "POWER", "VOLTAGE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/battery_full.png",
										options: {
											icon_on: {name: "Icon full", type: "icon", defaultIcons: "battery_full.png", default: ""},
											icon_off: {name: "Icon empty", type: "icon", defaultIcons: "battery_empty.png", default: ""},
											icon_charged75: {name: "Icon 75%", type: "icon", defaultIcons: "battery_75.png", default: ""},
											icon_charged50: {name: "Icon 50%", type: "icon", defaultIcons: "battery_50.png", default: ""},
											icon_charged25: {name: "Icon 25%", type: "icon", defaultIcons: "battery_25.png", default: ""},
											icon_charged10: {name: "Icon 10%", type: "icon", defaultIcons: "battery_10.png", default: ""},
											icon_charging: {name: "Icon charging", type: "icon", defaultIcons: "battery_charging_overlay.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolValue": 				{
										name: "Value",
										states: ["STATE", "LEVEL", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/value_on.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "value_on.png;info_circle_on.png;info_square_on.png;info_bubble_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "value_off.png;info_circle_off.png;info_square_off.png;info_bubble_off.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolProgram": 				{
										name: "Program", 
										states: ["STATE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/play_on.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "play_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "play.png", default: ""},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"}, 
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"}, 
											closeDialogAfterExecution: {name: "Close dialog after execution", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolScene": 				{
										name: "Scene", 	
										states: ["STATE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/play.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "play.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "play.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"}, 
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"}, 
											closeDialogAfterExecution: {name: "Close dialog after execution", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										} 
									},
	"iQontrolPopup": 				{
										name: "Popup", 	
										states: ["STATE", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/popup.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "popup.png;link_square_internal.png;camera_on.png;camera_ptz_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "popup.png;link_square_internal.png;camera_on.png;camera_ptz_on.png", default: ""},
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											popupWidth: {name: "Popup Width [px]", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Popup Width [px]", type: "number", min: "100", max: "2000", default: ""}, 
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolExternalLink":			{
										name: "External Link",	
										states: ["STATE", "URL", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/link.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "link.png;link_square_external.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "link.png;link_square_external.png", default: ""},
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									}
};

//Delcarations
var config = {};								//Contains the system config (like system language)
var systemLang = "en";							//Used for translate.js -> _(string) translates string to this language. This is only the backup-setting, if it could not be retreived from server (via config.language)
var states = {}; 								//Contains all used and over the time changed States in the form of {id:stateobject}
var usedObjects = {}; 							//Contains all used Objekte in the form of {id:object}
var waitingForObject = {};						//Contains all IDs where actual tasks to retreive the object are running
var preventUpdate = {};							//Contains timer-ids in the form of {ID:{timerId, stateId, deviceId, newVal}}. When set, updating of the corresponding stateId is prevented. The contained timer-id is the id of the timer, that will set itself to null, after the time has expired.
var reconnectedShortly = false;					//Contains timer-id if the socket has reconnected shortly. After a short while it is set fo false.

var options = {};								//Contains the options (extracted form <namespace + '.Options'>'.native')

var toolbar = [];								//Contains the toolbar (extracted form <namespace + '.Toolbar'>) in the form of [ID]
var toolbarLinksToOtherViews = [];				//Will become History when clicking on a link to other view on actual view
var toolbarPressureMenu = {};					//Contains Items for Pressure Menu in the form of toolbarPressureMenu[toolbarIndex] = {linkedView, ...} linkedView is Object in the form of {name, href, target, onclick}
var toolbarPressureMenuIgnorePressure = false;	//Set to true, if the toolbarPressureMenu-function is temporarily disabled, for example because a click function has been called
var toolbarPressureMenuIgnoreClick = false;		//Set to true, if the Click-function is temporarily disabled, for exapmple because a DeepPress has started
var toolbarPressureMenuForceOld = [];			//Array of objectQueries that stores the last pressure force of the corresponding objects
var toolbarPressureMenuFallbackTimer = false;	//Used as Fallback for some devices - contains a setInterval-Id if fallback is running
var toolbarPressureMenuFallbackForce = 0;		//Used as Fallback for some devices - contains a virtual force-value that is counted up by the FalbackTimer
var toolbarPressureMenuLinksToOtherViews = [];	//Will become History when clicking on a PressureMenu Link
var toolbarPressureMenuChangeTimer = false;		//Limits execution of bluring-effect
var createToolbarPressureMenusRunning = false;	//Is set to true, while creating toolbarPressureMenu
var createToolbarPressureMenusBufferRenderView = {} //Used to buffer renderView, if called while createToolbarPressureMenusRunning (because while running fetching a view is impossible)

var views = {}; 								//Contains all views (extracted from <namespace + '.Views'>) in the form of {ID:[ChildIDs]}
var actualViewId;								//Contains the ID of the actual View
var viewSorted = [];							//Contains all viewIds in sorted order
var viewLinksToOtherViews = [];					//Will become History when clicking on a link to other view on actual view
var viewHistory = [];							//History for navigation between views via swipe
var viewHistoryPosition = 0;					//Position in history
var viewStateIdsToFetch = [];					//Contains all missing stateIds after rendering a view - they will be fetched and if ready, the view ist rendered again
var deviceLinkedStateIdsToUpdate = [];			//Contains all linkedStateIds after rendering a view, where updateFunctions were created - the corresponding updateFunctions are called after rendering the view
var viewUpdateFunctions = {};					//Used to save all in the view-page currently visible state-ids and how updates have to be handled in the form of {State-ID:[functions(State-ID)]}
var marqueeObserver;							//Contains MutationObserver for marquee-enabled elements
var viewPressureMenu = {};						//Contains Items for Pressure Menu in the form of viewPressureMenu[deviceId] = {linkedView, externalLink, ...} linkedView and externalLink are Objects in the form of {name, href, target, onclick}
var viewPressureMenuIgnorePressure = false;		//Set to true, if the ViewPressureMenu-function is temporarily disabled, for example because a click function has been called
var viewPressureMenuIgnoreClick = false;		//Set to true, if the Click-function is temporarily disabled, for exapmple because a DeepPress has started
var viewPressureMenuForceOld = [];				//Array of objectQueries that stores the last pressure force of the corresponding objects
var viewPressureMenuFallbackTimer = false;		//Used as Fallback for some devices - contains a setInterval-Id if fallback is running
var viewPressureMenuFallbackForce = 0;			//Used as Fallback for some devices - contains a virtual force-value that is counted up by the FalbackTimer

var actualDialogId;								//Contains the ID of the actual Dialog
var dialogStateIdsToFetch = [];					//Contains all missing stateIds after rendering a dialog - they will be fetched and if ready, the dialog ist rendered again
var dialogLinkedStateIdsToUpdate = [];			//Contains all linkedStateIds after rendering a dialog, where updateFunctions were created - the corresponding updateFunctions are called after rendering the dialog
var dialogUpdateFunctions = {}; 				//Same as viewUpdateFunctions, but for dialog-page

const udef = 'undefined';

//++++++++++ POLYFILL ++++++++++
//Object.assign
if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }
      var to = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}

//++++++++++ WEBSOCKET ++++++++++
connOptions = {
	name:          namespace,  			// optional - default 'vis.0'
	connLink:      connectionLink,  	// optional URL of the socket.io adapter
	socketSession: ''           		// optional - used by authentication
};
connCallbacks = {
	onConnChange: function(isConnected) {
		if(isConnected) {
			//Connected -> Starting point
			if(!reconnectedShortly){
				console.log('Socket connected - getStarted');
				getStarted();
			} else {
				console.log('Socket connected - But it connected shortly before, so this event will be ignored');
				clearTimeout(reconnectedShortly);
			}
			reconnectedShortly = setTimeout(function(){reconnectedShortly = false;}, 5000);
		} else {
			console.log('Socket disconnected');
			$('.loader').show();
		}
	},
	onRefresh: function() { 
		console.log('Socket refresh');
		alert('Socket refresh');
		$('.loader').show();
		getStarted();
	},
	onUpdate: function(stateId, state) {
		setTimeout(function() {
			//console.log('NEW VALUE of ' + id + ': ' + JSON.stringify(state));
			if(states[stateId]){
				states[stateId] = state;
				updateState(stateId);
			}
			$('.loader').hide();
		}, 0);
	},
	onError: function(err) {
		window.alert(_('Cannot execute %s for %s, because of insufficient permissions', err.command, err.arg), _('Insufficient permissions'), 'alert', 600);
	}
};

//Websocket Help-Functions
function getStarted(){
	$('.loader').show();
	toolbar = {};
	views = {};
	states = {};
	viewStateIdsToFetch = [];
	dialogStateIdsToFetch = [];
	deviceLinkedStateIdsToUpdate = [];
	dialogLinkedStateIdsToUpdate = [];
	usedObjects = {};
	waitingForObject = {};
	preventUpdate = {};
	servConn.clearCache();
	//Get Config
	fetchConfig(function(){
		systemLang = config.language || systemLang;
		translateAll();
	});
	//Fetch functions are synchronous, but before rendering the page the first all necessary information needs to be complete. This is why everything is stacked via callback functions.
	//Get Options
	fetchOptions(function(){
		console.log("Options received.");
		handleOptions();
		//Get Toolbar (and according objects)
		fetchToolbar(function(){
			console.log("Toolbar received.");
			if (toolbar.length > 0){
				toolbarSorted = [];
				for (var i = 0; i < toolbar.length; i++){
					var id = toolbar[i];
					var sortPrefix = "";
					if (usedObjects[id].native.sortPrefix) sortPrefix = usedObjects[id].native.sortPrefix;
					var sortPostfix = "";
					if (usedObjects[id].native.sortPostfix) sortPostfix = usedObjects[id].native.sortPostfix;
					toolbarSorted.push([sortPrefix + usedObjects[id].common.name + sortPostfix, id]);
				}
				toolbarSorted.sort();
				toolbar = [];
				for (var i = 0; i < toolbarSorted.length; i++){
					toolbar.push(toolbarSorted[i][1]);
				}
			}
			console.log("Toolbar sorted.");
			renderToolbar();
			console.log("Toolbar rendered.");
			//Get Views (and according objects)
			renderView(actualViewId || homeId, false, function(){
				createToolbarPressureMenus(function(){
					console.log("Toolbar Pressuremenus created");
					if (createToolbarPressureMenusBufferRenderView.id) {
						renderView(createToolbarPressureMenusBufferRenderView.id, createToolbarPressureMenusBufferRenderView.updateOnly, createToolbarPressureMenusBufferRenderView.callback);
						createToolbarPressureMenusBufferRenderView = {};
					}
				});			
			});
			if(actualViewId == homeId){
				viewHistory = toolbarLinksToOtherViews;
				viewHistoryPosition = 0;
				console.log("Home rendered.");
			} else {
				console.log("Rendered actual view.");
			}
			$('.loader').hide();
			$.mobile.loading('hide');
		});
	});
}

function fetchConfig(callback){
	servConn.getConfig(true, function(err, _config){
		if(_config){
			config = _config;
			if(callback) callback();
		} else {
			console.log("Config could not be loaded")
			if(callback) callback(error = "ConfigCouldNotBeLoaded");
		}
	});
}

function fetchOptions(callback){
	servConn.getObject(namespace + ".Options", useCache, function(err, _object) {
		if(_object) {
			var _id = _object._id;
			delete waitingForObject._id;
			usedObjects[_id] = _object;
			console.log("Fetched Object: " + _id);
			updateState(_id);
			if(callback) callback();
		} else {
			console.log("Options-Object not found");
			if(callback) callback(error = "objectNotFound"); //Object not found
		}
	});
}

function fetchToolbar(callback){
	servConn.getChildren(namespace + ".Toolbar", useCache, function(err, _toolbarIds) {
		toolbar = _toolbarIds;
		var i = 0;
		fetchObject(id = _toolbarIds[i], _callback = function (){
			if(++i < _toolbarIds.length) fetchObject(_toolbarIds[i], _callback); else {		//Iterating through all toolbarIds
				if(callback) callback();
			}
		});
	});
}

function fetchView(id, callback){
	if(!views[id]){
		fetchChildren(id, views, function (){
			if(callback) callback();
		});
	} else {
		if(callback) callback();
	}
}

function fetchChildren(id, destination, callback){
	fetchObject(id, function(){ //Get Parent-Object
		servConn.getChildren(id, false, function(err, childs){
			var parentId = id;
			if(childs.length > 0){
				destination[parentId] = childs;
				var j = 0;
				fetchObject(childs[j], _callback = function(){ //Get Child-Object
					if(++j < childs.length) fetchObject(childs[j], _callback); else {		//Iterating through all childs
						if(callback) callback();
					}
				});
			} else {
				destination[parentId] = [];
				if(callback) callback();
			}
		});
	});
}

function fetchObject(id, callback){
	if (usedObjects[id]) {
		console.log("Object was already Received: " + id);
		if(callback) callback(error = "objectWasAlreadyReceived");	//Do nothing - objects is already retreived
	} else if(waitingForObject[id]){
		console.log("Already waiting for object: " + id);
		if(callback) callback(error = "alreadyWaitingForObject");	//Do nothing - there is already a task running that trys to retrieve the object
	} else {
		waitingForObject[id] = [];
		console.log("Fetch object: " + id);
		servConn.getObject(id, useCache, function(err, _object) {
			if(_object) {
				var _id = _object._id;
				delete waitingForObject._id;
				usedObjects[_id] = _object;
				console.log("Fetched Object: " + _id);
				updateState(_id);
				if(callback) callback();
			} else {
				console.log("Object not found");
				if(callback) callback(error = "objectNotFound"); //Object not found
			}
		});
	}
}

function fetchStates(ids, callback){
	var _ids = [];
	if(ids.constructor === Array) _ids = Object.assign([], ids); else _ids.push(ids);
	for(i = 0; i < _ids.length; i++){
		if(states[_ids[i]]) _ids.splice(i, 1);
	}
	if(_ids.length > 0){
		servConn.getStates(_ids, function (err, _states) {
			if(_states){
				states = Object.assign(_states, states);
			}
			if(callback) callback(err);
		});
	} else {
		if(callback) callback();
	}
}

function setState(stateId, deviceId, newValue, forceSend, callback, preventUpdateTime){
	var oldValue = "";
	if (!preventUpdateTime) preventUpdateTime = 5000;
	if(typeof states[stateId] !== udef && states[stateId] !== null && typeof states[stateId].val !== udef && states[stateId].val != null) oldValue= states[stateId].val;
	if(newValue.toString() !== oldValue.toString() || forceSend == true){ //For pushbuttons send command even when oldValue equals newValue
		//Confirm
		if(usedObjects[stateId] && typeof usedObjects[stateId].common !== udef && typeof usedObjects[stateId].common.custom !== udef && typeof usedObjects[stateId].common.custom[namespace] !== udef && typeof usedObjects[stateId].common.custom[namespace].confirm !== udef && usedObjects[stateId].common.custom[namespace].confirm == true) {
			if (!confirm(_("Please confirm change"))) {
				updateState(stateId, "ignorePreventUpdateForDialog");
				if (callback) callback();
				return;
			}
		}
		console.log(">>>>>> setState " + stateId + ": " + oldValue + " --> " + newValue);
		var stateType = (typeof usedObjects[stateId] != udef && typeof usedObjects[stateId].common != udef && typeof usedObjects[stateId].common.type != udef && usedObjects[stateId].common.type) || null;
		var convertTo = "";
		if (stateType == "string" || stateType == "number" || stateType == "boolean"){
			if (typeof newValue != stateType) convertTo = stateType;
		} else if (oldValue != null && (typeof oldValue == "string" || typeof oldValue == "number" || typeof oldValue == "boolean")){
			if (typeof newValue != typeof oldValue) convertTo = typeof oldValue;
		}
		if(convertTo != ""){
			switch(convertTo){
				case "string":
				newValue = String(newValue);
				break;

				case "number":
				if (newValue.toString().toLowerCase() == "true") newValue = true;
				if (newValue.toString().toLowerCase() == "false") newValue = false;
				newValue = Number(newValue);
				break;

				case "boolean":
				if(newValue == false || newValue.toString().toLowerCase() == "false" || newValue < 1){
					newValue = false;
				} else {
					newValue = true;
				}
				break;
			}
			console.log("       converted state to " + typeof oldValue + ". New value is: " + newValue);
		}
		//Invert (iQontrol -> ioBroker - the opposite way is inside updateState-Function)
		if(usedObjects[stateId] && typeof usedObjects[stateId].common !== udef && typeof usedObjects[stateId].common.custom !== udef && typeof usedObjects[stateId].common.custom[namespace] !== udef && typeof usedObjects[stateId].common.custom[namespace].invert !== udef && usedObjects[stateId].common.custom[namespace].invert == true) {
			switch(typeof newValue){
				case "boolean":
					console.log("       Inverting boolean value for state " + stateId + " from " + newValue + "...");
					newValue = !newValue;
					states[stateId].isInverted = false;
					console.log("       ...to " + newValue);
					break;
					
				case "number":
				console.log("       Inverting number value for state " + stateId + " from " + newValue + "...");
				if(typeof usedObjects[stateId] !== udef && typeof usedObjects[stateId].common.min !== udef) var min = usedObjects[stateId].common.min;
				if(typeof usedObjects[stateId] !== udef && typeof usedObjects[stateId].common.custom !== udef && typeof usedObjects[stateId].common.custom[namespace] !== udef && typeof usedObjects[stateId].common.custom[namespace].min !== udef && usedObjects[stateId].common.custom[namespace].min !== "") var min = usedObjects[stateId].common.custom[namespace].min;
				if(typeof usedObjects[stateId] !== udef && typeof usedObjects[stateId].common.max !== udef) var max = usedObjects[stateId].common.max;
				if(typeof usedObjects[stateId] !== udef && typeof usedObjects[stateId].common.custom !== udef && typeof usedObjects[stateId].common.custom[namespace] !== udef && typeof usedObjects[stateId].common.custom[namespace].max !== udef && usedObjects[stateId].common.custom[namespace].max !== "") var max = usedObjects[stateId].common.custom[namespace].max;
				if(typeof min !== udef && typeof max !== udef){
					newValue = max - (newValue - min);
					states[stateId].isInverted = false;
					console.log("       ...to " + newValue);
				} else {
					console.log("       ...aborted inverting, because min or max is missing");
				}
				break;
				
				case "string":
				console.log("       Inverting string value for state " + stateId + " is not supported!");
				break;	

				default:
				console.log("       Inverting value for state " + stateId + " is impossible - type not known: " + typeof newValue);
			}
		}
		//----Scale % from 0-100 if min-max=0-1
		if(typeof newValue == "number") {
			var unit = "";
			if(typeof usedObjects[stateId] !== udef && typeof usedObjects[stateId].common !== udef && typeof usedObjects[stateId].common.unit !== udef) unit = usedObjects[stateId].common.unit;
			if(typeof usedObjects[stateId] !== udef && typeof usedObjects[stateId].common !== udef && typeof usedObjects[stateId].common.custom !== udef && typeof usedObjects[stateId].common.custom[namespace] !== udef && typeof usedObjects[stateId].common.custom[namespace].unit !== udef && usedObjects[stateId].common.custom[namespace].unit !== "") unit = usedObjects[stateId].common.custom[namespace].min;
			if (unit == "%") {
				var min;
				if(typeof usedObjects[stateId] !== udef && typeof usedObjects[stateId].common.min !== udef) min = usedObjects[stateId].common.min;
				if(typeof usedObjects[stateId] !== udef && typeof usedObjects[stateId].common.custom !== udef && typeof usedObjects[stateId].common.custom[namespace] !== udef && typeof usedObjects[stateId].common.custom[namespace].min !== udef && usedObjects[stateId].common.custom[namespace].min !== "") min = usedObjects[stateId].common.custom[namespace].min;
				var max;
				if(typeof usedObjects[stateId] !== udef && typeof usedObjects[stateId].common.max !== udef) max = usedObjects[stateId].common.max;
				if(typeof usedObjects[stateId] !== udef && typeof usedObjects[stateId].common.custom !== udef && typeof usedObjects[stateId].common.custom[namespace] !== udef && typeof usedObjects[stateId].common.custom[namespace].max !== udef && usedObjects[stateId].common.custom[namespace].max !== "") max = usedObjects[stateId].common.custom[namespace].max;
				if (min == 0 && max == 1){
					newValue = newValue / 100;
					console.log("       Scaled %-Value to: " + newValue);
				}
			}
		}
		if(preventUpdate[stateId]) clearTimeout(preventUpdate[stateId].timerId);
		(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
			var _stateId = stateId;
			var _deviceId = deviceId;
			var _preventUpdateTime = preventUpdateTime;
			$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceLoading").addClass("active");
			preventUpdate[_stateId] = {};
			preventUpdate[_stateId].stateId = _stateId;
			preventUpdate[_stateId].deviceId = deviceId;
			preventUpdate[_stateId].newVal = newValue;
			preventUpdate[_stateId].timerId = setTimeout(function(){
				console.log("<< preventUpdate dexpired.")
				$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceLoading").removeClass("active");
				delete preventUpdate[_stateId];
				updateState(_stateId);
			}, _preventUpdateTime);
			//Do not send (only treat locally), if state is CONST, ARRAY or TEMP:
			if(_stateId.substring(0, 6) == 'CONST:' || _stateId.substring(0, 6) == 'ARRAY:' || _stateId.substring(0, 5) == 'TEMP:') {
				console.log("       setState only local, because state ist CONST, ARRAY or TEMP");
				states[_stateId].val = newValue;
				states[_stateId].ack = false;
				if (_stateId.substring(0, 5) == 'TEMP:'){ //Save TEMP Value in parent DeviceObject
					var _tempStateId = _stateId.substring(5);
					var _parentDeviceId = _tempStateId.substring(0, _tempStateId.lastIndexOf('.'));
					setTimeout(function(){
						var parentDeviceObject = usedObjects[_parentDeviceId];
						if (typeof parentDeviceObject.native == udef) parentDeviceObject.native = {};
						if (typeof parentDeviceObject.native.tempValues == udef) parentDeviceObject.native.tempValues = {};
						parentDeviceObject.native.tempValues[_tempStateId] = newValue;
						setObject(_parentDeviceId, parentDeviceObject, null);
					}, 200);
				}
				setTimeout(function(){
					updateState(_stateId, "ignorePreventUpdate");
				}, 200);
				if(callback) callback(error);			
			} else {
				//TargetValueId
				if(usedObjects[_stateId] && typeof usedObjects[_stateId].common !== udef && typeof usedObjects[_stateId].common.custom !== udef && typeof usedObjects[_stateId].common.custom[namespace] !== udef && typeof usedObjects[_stateId].common.custom[namespace].targetValueId !== udef && usedObjects[_stateId].common.custom[namespace].targetValueId !== "") {
					var _targetValueId = usedObjects[_stateId].common.custom[namespace].targetValueId;
				} else {
					var _targetValueId = _stateId;
				}
				servConn.setState(_targetValueId, {val: newValue, ack: false} , function(error){
					setTimeout(function(){
						updateState(_stateId, "ignorePreventUpdate");
					}, 200);
					if(callback) callback(error);
				});
			}
		})(); //<--End Closure
	} else {
		console.log("<<<<<< setState aborted (old Value = new Value = " + newValue.toString() + ")");
	}
}

function setObject(objId, obj, callback){
	servConn.addObject(objId, obj, function(error){
		console.log("setObject ready");
		if(callback) callback(error);
	});
}

//++++++++++ HELPERS ++++++++++
function getLinkedStateId(stateId){
	if (states[stateId]){
		if(typeof states[stateId].val != udef && (states[stateId].val.substring(0, 6) == 'CONST:' || states[stateId].val.substring(0, 6) == 'ARRAY:')) { //role of stateId is 'const' or 'array'
			var linkedStateId = "CONST:" + stateId;
			var constantValue = states[stateId].val.substring(6);
			var constantObject = {
				"type": "state",
				"common": {
					"name": stateId.substring(stateId.lastIndexOf('.') + 1),
					"desc": "created by iQontrol",
					"role": "state",
					"type": "string",
					"icon": "",
					"read": true,
					"write": false,
					"def": ""
				},
				"native": {}
			};
			usedObjects[linkedStateId] = constantObject;
			var constantState = {
				"val": constantValue,
				"ack": true,
				"from": "iQontrol",
				"lc": 0,
				"q": 0,
				"ts": 0,
				"user": "system.user.admin"
			};
			states[linkedStateId] = constantState;
			if(!viewUpdateFunctions[linkedStateId]) viewUpdateFunctions[linkedStateId] = [];
			if(!dialogUpdateFunctions[linkedStateId]) dialogUpdateFunctions[linkedStateId] = [];
			return linkedStateId;
		} else { //role of stateId is 'linkedState'
			var linkedStateId = states[stateId].val;
			if(!viewUpdateFunctions[linkedStateId]) viewUpdateFunctions[linkedStateId] = [];
			if(!dialogUpdateFunctions[linkedStateId]) dialogUpdateFunctions[linkedStateId] = [];
			if (linkedStateId && typeof usedObjects[linkedStateId] == udef) {
				fetchObject(linkedStateId);
			}
			return linkedStateId;
		}
	} else {
		return null;
	}
}

function createTempLinkedState(stateId, type, value){
	if (typeof states[stateId].val != udef && states[stateId].val == "") { //stateId is empty
		var linkedStateId = "TEMP:" + stateId;
		var parentDeviceId = stateId.substring(0, stateId.lastIndexOf('.'));
		states[stateId].val = linkedStateId;
		var tempValue = (typeof value !== udef && value) || (usedObjects[parentDeviceId] && typeof usedObjects[parentDeviceId].native != udef && typeof usedObjects[parentDeviceId].native.tempValues != udef && typeof usedObjects[parentDeviceId].native.tempValues[stateId] != udef && usedObjects[parentDeviceId].native.tempValues[stateId]) || "";
		var tempType = (typeof type != udef && type) || "string";
		var tempObject = {
			"type": "state",
			"common": {
				"name": stateId.substring(stateId.lastIndexOf('.') + 1),
				"desc": "created by iQontrol",
				"role": "state",
				"type": tempType,
				"icon": "",
				"read": true,
				"write": true,
				"def": ""
			},
			"native": {}
		};
		usedObjects[linkedStateId] = tempObject;
		var tempState = {
			"val": tempValue,
			"ack": true,
			"from": "iQontrol",
			"lc": 0,
			"q": 0,
			"ts": 0,
			"user": "system.user.admin"
		};
		states[linkedStateId] = tempState;
		if(!viewUpdateFunctions[linkedStateId]) viewUpdateFunctions[linkedStateId] = [];
		if(!dialogUpdateFunctions[linkedStateId]) dialogUpdateFunctions[linkedStateId] = [];
		return linkedStateId;
	}	
}

function getUnit(linkedStateId){
	var unit = "";
	if(usedObjects[linkedStateId]){
		if(typeof usedObjects[linkedStateId].common.custom !== udef && typeof usedObjects[linkedStateId].common.custom[namespace] !== udef && typeof usedObjects[linkedStateId].common.custom[namespace].unit !== udef){
			unit = _(usedObjects[linkedStateId].common.custom[namespace].unit);
		} else if(usedObjects[linkedStateId].common.unit) {
			unit = _(usedObjects[linkedStateId].common.unit);
		}
		if(states[linkedStateId] && typeof states[linkedStateId].val != udef){
			var val = states[linkedStateId].val;
			if(val * 1 == 0){
				if(typeof usedObjects[linkedStateId].common.custom !== udef && typeof usedObjects[linkedStateId].common.custom[namespace] !== udef && typeof usedObjects[linkedStateId].common.custom[namespace].unit_zero !== udef){
					unit = usedObjects[linkedStateId].common.custom[namespace].unit_zero;
				}
			}
			if(val * 1 == 1){
				if(typeof usedObjects[linkedStateId].common.custom !== udef && typeof usedObjects[linkedStateId].common.custom[namespace] !== udef && typeof usedObjects[linkedStateId].common.custom[namespace].unit_one !== udef){
					unit = usedObjects[linkedStateId].common.custom[namespace].unit_one;
				}
			}
		}
	}
	if(!(unit == "°C" || unit == "°F" || unit == "%" || unit == "")) unit = "&nbsp;" + unit;
	return unit;
}

function getPlainText(linkedStateId){ //Gets plain text from a state that is a value-list
	var plainText = "";
	var state = getStateObject(linkedStateId);
	if(state) plainText = state.plainText;
	return plainText;
}

function getStateObject(linkedStateId){ //Extends state with, type, readonly-attribute and plain text (that is the text from a state that is a value-list)
	if(!linkedStateId || linkedStateId == "") return;
	var result = {};
	if(typeof states[linkedStateId] !== udef) {
		result = Object.assign(result, states[linkedStateId]);
	}
	if(typeof usedObjects[linkedStateId] !== udef) {
		//--Declare plainText
		result.plainText = "";
		//--Add custom
		result.custom = typeof usedObjects[linkedStateId].common.custom !== udef && typeof usedObjects[linkedStateId].common.custom[namespace] !== udef && usedObjects[linkedStateId].common.custom[namespace] || {};
		//--Add unit
		result.unit = getUnit(linkedStateId);
		//--Add readonly
		result.readonly = false;
		if(typeof usedObjects[linkedStateId].common.write !== udef) result.readonly = !usedObjects[linkedStateId].common.write;
		if(typeof usedObjects[linkedStateId].native !== udef && typeof usedObjects[linkedStateId].native.write !== udef) result.readonly = !usedObjects[linkedStateId].native.write;
		if(typeof usedObjects[linkedStateId].common.custom !== udef && typeof usedObjects[linkedStateId].common.custom[namespace] !== udef && typeof usedObjects[linkedStateId].common.custom[namespace].readonly !== udef) result.readonly = usedObjects[linkedStateId].common.custom[namespace].readonly;
		if(typeof usedObjects[linkedStateId].common.custom !== udef && typeof usedObjects[linkedStateId].common.custom[namespace] !== udef && typeof usedObjects[linkedStateId].common.custom[namespace].targetValueId !== udef && usedObjects[linkedStateId].common.custom[namespace].targetValueId !== "") result.readonly = false;
		//--Add min and max
		if(typeof usedObjects[linkedStateId].common.min !== udef) result.min = usedObjects[linkedStateId].common.min;
		if(typeof usedObjects[linkedStateId].common.custom !== udef && typeof usedObjects[linkedStateId].common.custom[namespace] !== udef && typeof usedObjects[linkedStateId].common.custom[namespace].min !== udef && usedObjects[linkedStateId].common.custom[namespace].min !== "") result.min = usedObjects[linkedStateId].common.custom[namespace].min;
		if(typeof usedObjects[linkedStateId].common.max !== udef) result.max = usedObjects[linkedStateId].common.max;
		if(typeof usedObjects[linkedStateId].common.custom !== udef && typeof usedObjects[linkedStateId].common.custom[namespace] !== udef && typeof usedObjects[linkedStateId].common.custom[namespace].max !== udef && usedObjects[linkedStateId].common.custom[namespace].max !== "") result.max = usedObjects[linkedStateId].common.custom[namespace].max;
		//--Add type
		result.type = usedObjects[linkedStateId].common.type || "string";
		if(typeof usedObjects[linkedStateId].common.custom !== udef && typeof usedObjects[linkedStateId].common.custom[namespace] !== udef && typeof usedObjects[linkedStateId].common.custom[namespace].type !== udef && usedObjects[linkedStateId].common.custom[namespace].type !== "") result.type = usedObjects[linkedStateId].common.custom[namespace].type;
		//--Add role
		result.role = usedObjects[linkedStateId].common.role || "state";
		if(typeof usedObjects[linkedStateId].common.custom !== udef && typeof usedObjects[linkedStateId].common.custom[namespace] !== udef && typeof usedObjects[linkedStateId].common.custom[namespace].role !== udef && usedObjects[linkedStateId].common.custom[namespace].role !== "") result.role = usedObjects[linkedStateId].common.custom[namespace].role;
		var linkedParentId = linkedStateId.substring(0, linkedStateId.lastIndexOf("."));
		if(result.role == "state" && usedObjects[linkedParentId] && typeof usedObjects[linkedParentId].common.role != udef && usedObjects[linkedParentId].common.role){ //For role 'state' look if there are more informations about the role in the parentObject
			switch(parentRole = usedObjects[linkedParentId].common.role){
					case "switch": case "sensor.alarm": case "sensor.alarm.fire":
					result.role = parentRole;
					break;
			}
		}
		//--If val is not present (state is not set yet), set it - depending from the type - to 0/""
		if(typeof result.val == udef || result.val == null){
			if (result.type && result.type == "string") result.val = ""; else result.val = 0;
		}
		//--Modify typeof val to match to common.type
		switch(result.type){
			case "string":
			if (typeof result.val !== 'string') result.val = result.val.toString();
			break;
			
			case "number":
			if (typeof result.val !== 'number' && !isNaN(result.val)) result.val = parseFloat(result.val);
			//----Scale % to 0-100 if min-max=0-1
 			if (typeof result.unit !== udef && result.unit == "%" && typeof result.min !== udef && result.min == 0 && typeof result.max !== udef && result.max ==1) {
				result.val = result.val * 100;
				result.max = 100;
			}
 			break;
			
			case "boolean":
			if (typeof result.val !== 'boolean'){
				if (result.val.toString().toLowerCase() == "false" || result.val == 0 || result.val == "0" || result.val == -1 || result.val == "-1" || result.val == "") result.val = false; else result.val = true;
			}
			break;
		}
		//--Modify informations depending on the role
		if(result.role) {
			switch(result.role){
				case "indicator.state":
				result.plainText = result.val;
				result.type = "string";
				result.readonly = true;
				break;

				case "value.window": case "sensor.window": case "sensor.door": case "sensor.lock":
				if(result.val) result.plainText = _("opened"); else result.plainText = _("closed");
				if (typeof result.val == 'boolean' || result.val == true || result.val.toString().toLowerCase() == "true" || result.val == false || result.val.toString().toLowerCase() == "false"){ //If bool, add a value list with boolean values
					result.valueList = {"true": _("opened"), "false": _("closed")};
					result.type = "valueList";
				} else { //If not bool set type to string
					result.type = "string";
				}
				result.readonly = true;
				break;

				case "sensor.alarm":
				if(result.val) result.plainText = _("OK"); else result.plainText = _("alarm");
				if (typeof result.val == 'boolean' || result.val == true || result.val.toString().toLowerCase() == "true" || result.val == false || result.val.toString().toLowerCase() == "false"){ //If bool, add a value list with boolean values
					result.valueList = {"true": _("OK"), "false": _("alarm")};
					result.type = "valueList";
				} else { //If not bool and there is no value list, set type to string
					result.type = "string";
				}
				result.readonly = true;
				break;

				case "sensor.alarm.fire":
				if(result.val) result.plainText = _("triggered"); else result.plainText = " ";
				if (typeof result.val == 'boolean' || result.val == true || result.val.toString().toLowerCase() == "true" || result.val == false || result.val.toString().toLowerCase() == "false"){ //If bool, add a value list with boolean values
					result.valueList = {"true": _("triggered"), "false": _("OK")};
					result.type = "valueList";
				} else { //If not bool and there is no value list, set type to string
					result.type = "string";
				}
				result.readonly = true;
				break;

				case "switch": case "Switch": case "switch.light": case "switch.power": case "switch.boost": case "switch.enable": case "switch.active":
				if(typeof result.val == 'string') if (result.val.toLowerCase() == "false" || result.val.toLowerCase() == "off" || result.val.toLowerCase() == "0" || result.val == "") result.val = false; else result.val = true;
				if(result.val) result.plainText = _("on"); else result.plainText = _("off");
				result.type = "switch";
				result.min = 0;
				result.max = 1;
				result.valueList = ["off", "on"];
				break;

				case "level": case "level.dimmer": case "level.blind":
				result.type = "level";
				break;

				case "state":
				result.type = "string";
				if(usedObjects[linkedStateId] && typeof usedObjects[linkedStateId].native != udef && usedObjects[linkedStateId].native.CONTROL) { //if role is not set correctly it can try to determine role from native.CONTROL
					switch(usedObjects[linkedStateId].native.CONTROL) {
						case "DOOR_SENSOR.STATE":
						if(result.val) result.plainText = _("opened"); else result.plainText = _("closed");
						if (typeof result.val == 'boolean' || result.val == true || result.val.toString().toLowerCase() == "true" || result.val == false || result.val.toString().toLowerCase() == "false"){ //If bool, add a value list with boolean values
							result.valueList = {"true": _("opened"), "false": _("closed")};
							result.type = "valueList";
						} else { //If not bool set type to string
							result.type = "string";
						}
						result.readonly = true;
						break;
						
						case "DANGER.STATE":
						if(result.val) result.plainText = _("triggered"); else result.plainText = " ";
						if (typeof result.val == 'boolean' || result.val == true || result.val.toString().toLowerCase() == "true" || result.val == false || result.val.toString().toLowerCase() == "false"){ //If bool, add a value list with boolean values
							result.valueList = {"true": _("triggered"), "false": _("OK")};
							result.type = "valueList";
						} else { //If not bool set type to string
							result.type = "string";
						}
						result.readonly = true;
						break;

						case "SWITCH.STATE":
						if(result.val) result.plainText = _("on"); else result.plainText = _("off");
						if (typeof result.val == 'boolean' || result.val == true || result.val.toString().toLowerCase() == "true" || result.val == false || result.val.toString().toLowerCase() == "false"){ //If bool, add a value list with boolean values
							result.valueList = {"true": _("on"), "false": _("off")};
							result.type = "valueList";
						} else { //If not bool set type to string
							result.type = "string";
						}
						break;
						
						//Weitere mögliche - aber noch nicht implementierte - Werte:
						//RHS.STATE (Rotary Handle Transceiver)
						//CLIMATECONTROL_FLOOR_TRANSCEIVER.STATE
						//GENERIC_INPUT_TRANSMITTER.STATE
						//SWITCH_TRANSMITTER.STATE
					}
				}
				break;
			}
		}
		//--Add valueList
		var statesSet = false;
		var valueListString;
		if(usedObjects[linkedStateId] && typeof usedObjects[linkedStateId].common.custom !== udef && typeof usedObjects[linkedStateId].common.custom[namespace] !== udef && usedObjects[linkedStateId].common.custom[namespace].states){
				valueListString = usedObjects[linkedStateId].common.custom[namespace].states;
				statesSet = true;
		} else if(usedObjects[linkedStateId] && typeof usedObjects[linkedStateId].native != udef && usedObjects[linkedStateId].native.states){
				valueListString = usedObjects[linkedStateId].native.states;
				statesSet = true;
		} else if (usedObjects[linkedStateId] && usedObjects[linkedStateId].common.states){
				valueListString = usedObjects[linkedStateId].common.states;
				statesSet = true;
		}
		if(statesSet){
			//----Check format of valueList
			if (typeof valueListString !== "object"){
				if (tryParseJSON(valueListString) == false){
					valueListString = '{"' + valueListString.replace(/;/g, ',').replace(/:/g, '":"').replace(/,/g, '","') + '"}';
					if (tryParseJSON(valueListString) == false) {
						statesSet = false;	
					} else {
						valueListString = tryParseJSON(valueListString);	
					}		
				} else {
					valueListString = tryParseJSON(valueListString);	
				}
			}
		}
		if(statesSet){
			result.valueList = Object.assign({}, valueListString);
			//----Further modifications of valueList
			var val = result.val;
			if (typeof val !== udef && val !== null && (typeof val == 'boolean' || val.toString().toLowerCase() == "true" || val.toString().toLowerCase() == "false")){ //Convert valueList-Keys to boolean, if they are numbers
				for (var key in result.valueList){
					var newKey = null;
					if (key == -1 || key == 0 || key == false) newKey = "false";
					if (key == 1 || key == true) newKey = "true";
					if (newKey != null) {
						var dummy = {};
						dummy[newKey] = result.valueList[key];
						delete Object.assign(result.valueList, dummy)[key]; //This renames key to newKey
					}
				};
			}
			if(result.valueList[val]) result.plainText = _(result.valueList[val]); //Modify plainText if val matchs a valueList-Entry
			if (((result.max != udef && result.min != udef && Object.keys(result.valueList).length == result.max - result.min + 1)
			|| (typeof usedObjects[linkedStateId].common.type != udef && usedObjects[linkedStateId].common.type == "boolean")) && result.type != "switch"
			|| result.type == 'string') { //If the valueList contains as many entrys as steps between min and max the type is a valueList
					result.type = "valueList";
			}
		}
		//--Try to set a plainText, if it has not been set before
		if(result.plainText == "") {
			if(typeof result.val == 'string') {
				var number = result.val * 1;
				if (number.toString() == result.val) result.val = number;
			}
			if(typeof result.val == 'number'){
				result.type = "level";
				var n = 2;
				result.val =  Math.round(result.val * Math.pow(10, n)) / Math.pow(10, n);
			} else {
				result.type = "string";
			}
			result.plainText = result.val;
		}
	}
	return result;
}

function removeDuplicates(array) { //Removes duplicates from an array
    var seen = {};
    return array.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

function addCustomCSS(customCSS, customID){
	customID = customID || "default";
	$('head').append('<style class="customCSS_' + customID + '">' + customCSS + '</style>');
}

function removeCustomCSS(customID){
	customID = customID || "default";
	$('.customCSS_' + customID).remove();
}

function tryParseJSON(jsonString){ //Returns parsed object or false, if jsonString is not valid
    try {
        var o = JSON.parse(jsonString);
        // Handle non-exception-throwing cases:
        // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
        // but... JSON.parse(null) returns null, and typeof null === "object",
        // so we must check for that, too. Thankfully, null is falsey, so this suffices:
        if (o && typeof o === "object") {
            return o;
        }
    }
    catch (e) { }
    return false;
};

function updateState(stateId, ignorePreventUpdate){
	//Invert (ioBroker -> iQontrol - the opposite way is inside setState-Function)
	if(usedObjects[stateId]  && typeof usedObjects[stateId].common !== udef && typeof usedObjects[stateId].common.custom !== udef && usedObjects[stateId].common.custom !== null && typeof usedObjects[stateId].common.custom[namespace] !== udef && typeof usedObjects[stateId].common.custom[namespace].invert !== udef && usedObjects[stateId].common.custom[namespace].invert == true) {
		if(states[stateId] && typeof states[stateId].val !== udef && !states[stateId].isInverted) switch(typeof states[stateId].val){
			case "boolean":
			console.log("Inverting boolean state " + stateId + " from " + states[stateId].val + "...");
			states[stateId].val = !states[stateId].val;
			states[stateId].isInverted = true;
			console.log("...to " + states[stateId].val);
			break;
			
			case "number":
			console.log("Inverting number state " + stateId + " from " + states[stateId].val + "...");
			if(typeof usedObjects[stateId] !== udef && typeof usedObjects[stateId].common.min !== udef) var min = usedObjects[stateId].common.min;
			if(typeof usedObjects[stateId] !== udef && typeof usedObjects[stateId].common.custom !== udef && typeof usedObjects[stateId].common.custom[namespace] !== udef && typeof usedObjects[stateId].common.custom[namespace].min !== udef && usedObjects[stateId].common.custom[namespace].min !== "") result.min = usedObjects[stateId].common.custom[namespace].min;
			if(typeof usedObjects[stateId] !== udef && typeof usedObjects[stateId].common.max !== udef) var max = usedObjects[stateId].common.max;
			if(typeof usedObjects[stateId] !== udef && typeof usedObjects[stateId].common.custom !== udef && typeof usedObjects[stateId].common.custom[namespace] !== udef && typeof usedObjects[stateId].common.custom[namespace].max !== udef && usedObjects[stateId].common.custom[namespace].max !== "") result.max = usedObjects[stateId].common.custom[namespace].max;
			if(typeof min !== udef && typeof max !== udef){
				states[stateId].val = max - (states[stateId].val - min);
				states[stateId].isInverted = true;
				console.log("...to " + states[stateId].val);
			} else {
				console.log("...aborted inverting, because min or max is missing");
			}
			break;
			
			case "string":
			console.log("Inverting string state " + stateId + " is not supported!");
			break;	

			default:
			console.log("Inverting state " + stateId + " is impossible - type not known: " + typeof states[stateId].val);
		}
	}
	if(preventUpdate[stateId]){
		console.log(">> ack: " + states[stateId].ack + " val: " + states[stateId].val + " newVal: " + preventUpdate[stateId].newVal);
	}
	if (preventUpdate[stateId] && states[stateId].ack && typeof states[stateId].val != udef && states[stateId].val != null && states[stateId].val.toString() == preventUpdate[stateId].newVal.toString()) { //An ack-true value has reached the new value - preventUpdate can be cancelled
		console.log("<< ack-val reached new val: preventUpdate regular ended.");
		$("[data-iQontrol-Device-ID='" + preventUpdate[stateId].deviceId + "'] .iQontrolDeviceLoading").removeClass("active");
		clearTimeout(preventUpdate[stateId].timerId);
		delete preventUpdate[stateId];
	}
	if(viewUpdateFunctions[stateId]) for (i = 0; i < viewUpdateFunctions[stateId].length; i++){
		if(!preventUpdate[stateId] || ignorePreventUpdate) {
			viewUpdateFunctions[stateId][i](stateId);
		}
	}
	if(dialogUpdateFunctions[stateId]) for (i = 0; i < dialogUpdateFunctions[stateId].length; i++){
		if(!preventUpdate[stateId] || ignorePreventUpdate == "ignorePreventUpdateForDialog") {
			dialogUpdateFunctions[stateId][i](stateId);
		}
	}
}

function toggleState(linkedStateId, deviceId, callback){
	var state = getStateObject(linkedStateId);
	var deviceReadonly = false;
	if(deviceId && usedObjects[deviceId] && typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.readonly != udef && usedObjects[deviceId].native.readonly == "true") deviceReadonly = true;
	if(state && state.readonly == false && deviceReadonly == false){
		switch(state.type){
			case "switch":
			var oldVal = state.val;
			var newVal;
			if(typeof oldVal == 'number'){
				if(oldVal) newVal = 0; else newVal = 1;
			} else {
				if(oldVal.toString().toLowerCase() == "true") newVal = false; else newVal = true;
			}
			break;

			case "level":
			var oldVal = state.val;
			var min = state.min || 0;
			var max = state.max || 100;
			var newVal;
			if(oldVal > min) newVal = min; else newVal = max;
			break;

			case "valueList":
			var oldVal = state.val;
			if(oldVal == true || oldVal.toString().toLowerCase() == "true") oldVal = 1;
			if(oldVal == false || oldVal.toString().toLowerCase() == "false") oldVal = 0;
			var min = state.min || 0;
			if(typeof state.valueList !== udef && oldVal + 1 >= Object.keys(state.valueList).length) var newVal = min; else newVal = oldVal + 1;
			break;
		}
		setState(linkedStateId, deviceId, newVal, false, callback);
	}
}

function toggleActuator(linkedStateId, linkedDirectionId, linkedStopId, linkedUpId, linkedUpSetValueId, linkedDownId, linkedDownSetValueId, linkedFavoritePosition, deviceId, callback){
	var state = getStateObject(linkedStateId);
	var direction = getStateObject(linkedDirectionId);
	var stop = getStateObject(linkedStopId);
	var up = getStateObject(linkedUpId);
	var upSetValue = getStateObject(linkedUpSetValueId);
	var down = getStateObject(linkedDownId);
	var downSetValue = getStateObject(linkedDownSetValueId);
	var favoritePosition = getStateObject(linkedFavoritePosition);
	var deviceReadonly = false;
	if(deviceId && usedObjects[deviceId] && typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.readonly != udef && usedObjects[deviceId].native.readonly == "true") deviceReadonly = true;
	if(state && state.type == "level" && deviceReadonly == false){
		if(direction && direction.val > 0) { //working
			if (stop) setState(linkedStopId, deviceId, true, true, callback);
		} else { //standing still
			var oldVal = state.val;
			var min = state.min || 0;
			var max = state.max || 100;
			var newVal;
			if(oldVal > min) newVal = min; else newVal = max;
			if(up && up.type && down && down.type) {
				if(newVal === max){ //go up via up-button
					if (up.readonly == false) setState(linkedUpId, deviceId, ((upSetValue && upSetValue.val) || true), true, callback);
				} else if (newVal === min) { //go down via down-button
					if (down.readonly == false) setState(linkedDownId, deviceId, ((downSetValue && downSetValue.val) || true), true, callback);
				}
			} else { //go up or down via state level
				if (state.readonly == false) setState(linkedStateId, deviceId, newVal, false, callback);
			}
		}
	} else if (callback) callback();
}

function startProgram(linkedStateId, deviceId, callback){
	console.log("Start");
	console.log(linkedStateId);
	if(linkedStateId){
		setState(linkedStateId, deviceId, true, true, callback);
	}
}

function startButton(linkedStateId, linkedSetValueId, linkedOffSetValueId, returnToOffSetValueAfter, deviceId, callback){
	var newValue = states[linkedSetValueId].val || "";
	console.log("Button " + linkedStateId + " --> " + newValue);
	setState(linkedStateId, deviceId, newValue, true, callback);
	if (states[linkedOffSetValueId] && states[linkedOffSetValueId].val && states[linkedOffSetValueId].val != "") {
		(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
			var _linkedStateId = linkedStateId;
			var _deviceId = deviceId;
			var _newValue = (states[linkedOffSetValueId] && states[linkedOffSetValueId].val) || "";
			setTimeout(function(){
				console.log("Button " + _linkedStateId + " return --> " + _newValue);
				setState(_linkedStateId, _deviceId, _newValue, true);		
			}, (returnToOffSetValueAfter || 100) * 1);
		})(); //<--End Closure		
	}
}

function getTimeFromHMTimeCode(HMTimeCode){
	if(typeof HMTimeCode == udef) return udef;
	//Decodes Homematic Timecode (for example in PARTY_START_TIME)
	var HMTimeCodeTable = [0,30,60,90,120,150,180,210,240,14,44,74,104,134,164,194,224,254,28,58,88,118,148,178,208,238,268,42,72,102,132,162,192,222,252,282,56,86,116,146,176,206,236,266,296,70,100,130];
	var MinutesSinceMidnight = HMTimeCode;
	if (HMTimeCodeTable.indexOf(1 * HMTimeCode) >= 0) MinutesSinceMidnight = 30 * HMTimeCodeTable.indexOf(1 * HMTimeCode);
	var Hour = Math.floor(MinutesSinceMidnight / 60);
	var Minutes = MinutesSinceMidnight - (Hour * 60);
	return Hour + ":" + Minutes;
}

function colorTemperatureToRGB(value,  min,  max, invertCt){
	var rgbWW = {r: 255, g: 204, b: 82};
	var rgbCW = {r: 174, g: 228, b: 255};
	value = (Math.max(min, Math.min(value, max)) - min) / (max - min); //0...1
	if(invertCt) value = 1 - value;
	if(value >0.5){
		var rgb = {r: rgbWW.r + (((1-value)/0.5) * 255), g: rgbWW.g + (((1-value)/0.5) * 255), b: rgbWW.b + (((1-value)/0.5) * 255)};
	} else {
		var rgb = {r: rgbCW.r + ((value/0.5) * 255), g: rgbCW.g + ((value/0.5) * 255), b: rgbCW.b + ((value/0.5) * 255)};
	}
	return rgb;
}

function convertToAlternativeColorspace(deviceId, linkedHueId, linkedSaturationId, linkedColorBrightnessId, linkedCtId, linkedWhiteBrightnessId, linkedAlternativeColorspaceValueId, overwrite){
	var invertCt = false;
	if(deviceId && usedObjects[deviceId] && typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.invertCt != udef && usedObjects[deviceId].native.invertCt == "true") invertCt = !invertCt;
	var alternativeColorspace = (typeof usedObjects[deviceId] !== udef && typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.alternativeColorspace != udef && usedObjects[deviceId].native.alternativeColorspace) || "";
	var alternativeColorspaceResult = convertFromAlternativeColorspace(deviceId, linkedAlternativeColorspaceValueId, linkedHueId, linkedSaturationId, linkedColorBrightnessId, linkedCtId, linkedWhiteBrightnessId);
	var hue = null;
	var stateHue = getStateObject(linkedHueId);
	if (stateHue && typeof stateHue.val != udef) {
		var hueMin = stateHue.min || 0;
		var hueMax = stateHue.max || 359;
		hue = ((stateHue.val - hueMin) / (hueMax - hueMin)) * 359;
	} else if (alternativeColorspaceResult.hue !== null) hue = alternativeColorspaceResult.hue;
	var	saturation = null;
	var stateSaturation = getStateObject(linkedSaturationId);
	if (stateSaturation && typeof stateSaturation.val != udef) {
		var saturationMin = stateSaturation.min || 0;
		var saturationMax = stateSaturation.max || 100;
		saturation = ((stateSaturation.val - saturationMin) / (saturationMax - saturationMin)) * 100;
	} else if (alternativeColorspaceResult.saturation !== null) saturation = alternativeColorspaceResult.saturation;
	var	colorBrightness = null;
	var stateColorBrightness = getStateObject(linkedColorBrightnessId);
	if (stateColorBrightness && typeof stateColorBrightness.val != udef) {
		var colorBrightnessMin = stateColorBrightness.min || 0;
		var colorBrightnessMax = stateColorBrightness.max || 100;
		colorBrightness = ((stateColorBrightness.val - colorBrightnessMin) / (colorBrightnessMax - colorBrightnessMin)) * 100;
	} else if (alternativeColorspaceResult.colorBrightness !== null) colorBrightness = alternativeColorspaceResult.colorBrightness;
	var	ct = null;
	var stateCt = getStateObject(linkedCtId);
	if (stateCt && typeof stateCt.val != udef) {
		var ctMin = stateCt.min || 0;
		var ctMax = stateCt.max || 100;
		ct = ((stateCt.val - ctMin) / (ctMax - ctMin)) * 100;
	} else if (alternativeColorspaceResult.ct !== null) ct = alternativeColorspaceResult.ct;
	var	whiteBrightness = null;
	var stateWhiteBrightness = getStateObject(linkedWhiteBrightnessId);
	if (stateWhiteBrightness && typeof stateWhiteBrightness.val != udef) {
		var whiteBrightnessMin = stateWhiteBrightness.min || 0;
		var whiteBrightnessMax = stateWhiteBrightness.max || 100;
		whiteBrightness = ((stateWhiteBrightness.val - whiteBrightnessMin) / (whiteBrightnessMax - whiteBrightnessMin)) * 100;
	} else if (alternativeColorspaceResult.whiteBrightness !== null) whiteBrightness = alternativeColorspaceResult.whiteBrightness;
	if (overwrite && Array.isArray(overwrite)) overwrite.forEach(function(element){
		if (typeof element.type !== udef && element.val !== udef) switch(element.type){
			case "hue": hue = element.val; break;
			case "saturation": saturation = element.val; break;
			case "colorBrightness": colorBrightness = element.val; break;
			case "ct": ct = element.val; break;
			case "whiteBrightness": whiteBrightness = element.val; break;
		}
	});
	console.log("Converting H|S|B/CT|B from " + hue + "|" + saturation + "|" + colorBrightness + "/" + ct + "|" + whiteBrightness + " to " + alternativeColorspace + "...");
	var alternativeColorspaceValue = null;
	switch(alternativeColorspace){
		case "RGB": case "#RGB":
		if (hue == null) break;
		var rgb = hsvToRgb(hue, (saturation == null?100:saturation), (colorBrightness == null?100:colorBrightness));
		alternativeColorspaceValue = (("0" + Math.round(rgb.r).toString(16)).slice(-2)) + (("0" + Math.round(rgb.g).toString(16)).slice(-2)) + (("0" + Math.round(rgb.b).toString(16)).slice(-2));
		break;
		
		case "RGBW": case "#RGBW":
		if (hue == null) break;
		var rgb = hsvToRgb(hue, (saturation == null?100:saturation), (colorBrightness == null?100:colorBrightness));
		alternativeColorspaceValue = (("0" + Math.round(rgb.r).toString(16)).slice(-2)) + (("0" + Math.round(rgb.g).toString(16)).slice(-2)) + (("0" + Math.round(rgb.b).toString(16)).slice(-2)) + (("0" + Math.round(whiteBrightness/100 * 255).toString(16)).slice(-2));
		break;

		case "RGBCWWW": case "#RGBCWWW":
		invertCt = !invertCt;
		case "RGBWWCW": case "#RGBWWCW":
		if (hue == null || ct == null) break;
		var rgb = hsvToRgb(hue, (saturation == null?100:saturation), (colorBrightness == null?100:colorBrightness));
		if(!invertCt){
			var w1 = ct/100 * whiteBrightness/100 * 255;
			var w2 = (100-ct)/100 * whiteBrightness/100 * 255;
		} else {
			var w2 = ct/100 * whiteBrightness/100 * 255;
			var w1 = (100-ct)/100 * whiteBrightness/100 * 255;			
		}
		alternativeColorspaceValue = (("0" + Math.round(rgb.r).toString(16)).slice(-2)) + (("0" + Math.round(rgb.g).toString(16)).slice(-2)) + (("0" + Math.round(rgb.b).toString(16)).slice(-2)) + (("0" + Math.round(w1).toString(16)).slice(-2)) + (("0" + Math.round(w2).toString(16)).slice(-2));
		break;
		
		case "RGB_HUEONLY": case "#RGB_HUEONLY":
		if (hue == null) break;
		var rgb = hsvToRgb(hue, 100, 100);
		alternativeColorspaceValue = (("0" + Math.round(rgb.r).toString(16)).slice(-2)) + (("0" + Math.round(rgb.g).toString(16)).slice(-2)) + (("0" + Math.round(rgb.b).toString(16)).slice(-2));
		break;
		
		case "HUE_MILIGHT":
		if (hue == null) break;
		alternativeColorspaceValue = Math.round(modulo(66 - (hue / 3.60), 100) * 2.55);	
		break;				
	}
	if(alternativeColorspaceValue !== null && alternativeColorspace.substring(0, 1) == "#") alternativeColorspaceValue = "#" + alternativeColorspaceValue;
	console.log("...result is " + alternativeColorspaceValue);
	return alternativeColorspaceValue;
}

function convertFromAlternativeColorspace(deviceId, linkedAlternativeColorspaceValueId, linkedHueId, linkedSaturationId, linkedColorBrightnessId, linkedCtId, linkedWhiteBrightnessId){
	var alternativeColorspaceValue = states[linkedAlternativeColorspaceValueId].val || "";
	var invertCt = false;
	if(deviceId && usedObjects[deviceId] && typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.invertCt != udef && usedObjects[deviceId].native.invertCt == "true") invertCt = !invertCt;
	var alternativeColorspace = (typeof usedObjects[deviceId] !== udef && typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.alternativeColorspace != udef && usedObjects[deviceId].native.alternativeColorspace) || "";
	console.log("Converting " + alternativeColorspace + " from " + alternativeColorspaceValue + " to H|S|B/CT|B...");
	if(alternativeColorspaceValue.toString().substring(0, 1) == "#") alternativeColorspaceValue = alternativeColorspaceValue.substring(1);
	var result = {hue: null, saturation: null, colorBrightness: null, ct: null, whiteBrightness: null};
	var r, g, b, w, ww, cw;
	switch(alternativeColorspace){
		case "RGB": case "#RGB": case "RGB_HUEONLY": case "#RGB_HUEONLY":
		if(alternativeColorspaceValue.length <= 3){
			r = +("0x" + alternativeColorspaceValue[0] + alternativeColorspaceValue[0]);
			g = +("0x" + alternativeColorspaceValue[1] + alternativeColorspaceValue[1]);
			b = +("0x" + alternativeColorspaceValue[2] + alternativeColorspaceValue[2]);			
		} else {
			r = +("0x" + alternativeColorspaceValue[0] + alternativeColorspaceValue[1]);
			g = +("0x" + alternativeColorspaceValue[2] + alternativeColorspaceValue[3]);
			b = +("0x" + alternativeColorspaceValue[4] + alternativeColorspaceValue[5]);						
		}
		var hsv = rgbToHsv(r, g, b);
		result.hue = hsv.h;
		result.saturation = hsv.s;
		result.colorBrightness = hsv.v;
		break;
		
		case "RGBW": case "#RGBW":
		if(alternativeColorspaceValue.length <= 4){
			r = +("0x" + alternativeColorspaceValue[0] + alternativeColorspaceValue[0]);
			g = +("0x" + alternativeColorspaceValue[1] + alternativeColorspaceValue[1]);
			b = +("0x" + alternativeColorspaceValue[2] + alternativeColorspaceValue[2]);			
			w = +("0x" + alternativeColorspaceValue[3] + alternativeColorspaceValue[3]);			
		} else {
			r = +("0x" + alternativeColorspaceValue[0] + alternativeColorspaceValue[1]);
			g = +("0x" + alternativeColorspaceValue[2] + alternativeColorspaceValue[3]);
			b = +("0x" + alternativeColorspaceValue[4] + alternativeColorspaceValue[5]);						
			w = +("0x" + alternativeColorspaceValue[6] + alternativeColorspaceValue[7]);			
		}
		var hsv = rgbToHsv(r, g, b);
		result.hue = hsv.h;
		result.saturation = hsv.s;
		result.colorBrightness = hsv.v;
		result.whiteBrightness = w / 2.55;
		break;

		case "RGBCWWW": case "#RGBCWWW":
		invertCt = !invertCt;
		case "RGBWWCW": case "#RGBWWCW":
		if(alternativeColorspaceValue.length <= 5){
			r = +("0x" + alternativeColorspaceValue[0] + alternativeColorspaceValue[0]);
			g = +("0x" + alternativeColorspaceValue[1] + alternativeColorspaceValue[1]);
			b = +("0x" + alternativeColorspaceValue[2] + alternativeColorspaceValue[2]);			
			w1 = +("0x" + alternativeColorspaceValue[3] + alternativeColorspaceValue[3]);			
			w2 = +("0x" + alternativeColorspaceValue[4] + alternativeColorspaceValue[4]);			
		} else {
			r = +("0x" + alternativeColorspaceValue[0] + alternativeColorspaceValue[1]);
			g = +("0x" + alternativeColorspaceValue[2] + alternativeColorspaceValue[3]);
			b = +("0x" + alternativeColorspaceValue[4] + alternativeColorspaceValue[5]);						
			w1 = +("0x" + alternativeColorspaceValue[6] + alternativeColorspaceValue[7]);			
			w2 = +("0x" + alternativeColorspaceValue[8] + alternativeColorspaceValue[9]);			
		}
		var hsv = rgbToHsv(r, g, b);
		result.hue = hsv.h;
		result.saturation = hsv.s;
		result.colorBrightness = hsv.v;
		result.whiteBrightness = (w1 + w2) / 2.55;
		if(!invertCt){
			result.ct = w1/2.55 / result.whiteBrightness * 100;
		} else {
			result.ct = w2/2.55 / result.whiteBrightness * 100;
		}
		break;
		
		case "HUE_MILIGHT":
		result.hue = Math.round(modulo(-3.60 * (parseFloat(alternativeColorspaceValue/2.55) - 66), 360));
		break;				
	}
	if(result.hue != null){
		var stateHue = getStateObject(linkedHueId);
		var hueMin = stateHue && stateHue.min || 0;
		var hueMax = stateHue && stateHue.max || 359;
		result.hue = Math.round((result.hue/359 * (hueMax - hueMin)) + hueMin);
	} 
	if(result.saturation != null){
		var stateSaturation = getStateObject(linkedSaturationId);
		var saturationMin = stateSaturation && stateSaturation.min || 0;
		var saturationMax = stateSaturation && stateSaturation.max || 100;
		result.saturation = Math.round((result.saturation/100 * (saturationMax - saturationMin)) + saturationMin);
	} 
	if(result.colorBrightness != null){
		var stateColorBrightness = getStateObject(linkedColorBrightnessId);
		var colorBrightnessMin = stateColorBrightness && stateColorBrightness.min || 0;
		var colorBrightnessMax = stateColorBrightness && stateColorBrightness.max || 100;
		result.colorBrightness = Math.round((result.colorBrightness/100 * (colorBrightnessMax - colorBrightnessMin)) + colorBrightnessMin);
	} 
	if(result.ct != null){
		var stateCt = getStateObject(linkedCtId);
		var ctMin = stateCt && stateCt.min || 0;
		var ctMax = stateCt && stateCt.max || 100;
		result.ct = Math.round((result.ct/100 * (ctMax - ctMin)) + ctMin);
	} 
	if(result.whiteBrightness != null){
		var stateWhiteBrightness = getStateObject(linkedWhiteBrightnessId);
		var whiteBrightnessMin = stateWhiteBrightness && stateWhiteBrightness.min || 0;
		var whiteBrightnessMax = stateWhiteBrightness && stateWhiteBrightness.max || 100;
		result.whiteBrightness = Math.round((result.whiteBrightness/100 * (whiteBrightnessMax - whiteBrightnessMin)) + whiteBrightnessMin);
	} 
	console.log("...result is " + result.hue + "|" + result.saturation + "|" + result.colorBrightness + "/" + result.ct + "|" + result.whiteBrightness);
	return result;
}

function hsvToRgb(h, s, v){
	h /= 360, s /= 100, v /= 100;
	var r, g, b;
	var i = Math.floor(h * 6);
	var f = h * 6 - i;
	var p = v * (1 - s);
	var q = v * (1 - f * s);
	var t = v * (1 - (1 - f) * s);
	switch (i % 6) {
		case 0: r = v, g = t, b = p; break;
		case 1: r = q, g = v, b = p; break;
		case 2: r = p, g = v, b = t; break;
		case 3: r = p, g = q, b = v; break;
		case 4: r = t, g = p, b = v; break;
		case 5: r = v, g = p, b = q; break;
	}
	return {r: r * 255, g: g * 255, b: b * 255};
}

function rgbToHsv(r, g, b){
	r /= 255, g /= 255, b /= 255;
	var max = Math.max(r, g, b), min = Math.min(r, g, b);
	var h, s, v = max;
	var d = max - min;
	if (v == 0) {
		console.log("...result is BLACK...");
		s = null; // black
	} else {
		s = (max == 0 ? 0 : d / max);
	}
	if (max == min) {
		console.log("...result is ACHROMATIC...");
		h = null; // achromatic
	} else {
		switch (max) {
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
		}
		h /= 6;
	}
	return {h: (h == null ? null : h * 360), s: (s == null ? null : s * 100), v: v * 100};
}

function modulo(n, m){
	return ((n % m) + m) %m;
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

//++++++++++ OPTIONS ++++++++++
function handleOptions(){
	if(typeof usedObjects[namespace + ".Options"] != udef && typeof usedObjects[namespace + ".Options"].native != udef){
		options = usedObjects[namespace + ".Options"].native;
		//Toolbar
		if(options.LayoutToolbarFooterColor) {
			customCSS = "#Toolbar.ui-footer{";
			customCSS += "	background-color: " + options.LayoutToolbarFooterColor + " !important;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutToolbarFooterOpacity) {
			customCSS = "#Toolbar.ui-footer{";
			customCSS += "	opacity: " + options.LayoutToolbarFooterOpacity + " !important;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutToolbarBorderColor) {
			customCSS = ".iQontrolToolbarLink.ui-btn:not(.ui-btn-active){";
			customCSS += "	border-color: " + options.LayoutToolbarBorderColor + " !important;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutToolbarColor) {
			customCSS = ".iQontrolToolbarLink.ui-btn:not(.ui-btn-active){";
			customCSS += "	background-color: " + options.LayoutToolbarColor + " !important;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutToolbarTextColor) {
			customCSS = ".iQontrolToolbarLink.ui-btn:not(.ui-btn-active){";
			customCSS += "	color: " + options.LayoutToolbarTextColor + " !important;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutToolbarHoverColor) {
			customCSS = ".iQontrolToolbarLink.ui-btn:not(.ui-btn-active):hover{";
			customCSS += "	background-color: " + options.LayoutToolbarHoverColor + " !important;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutToolbarHoverTextColor) {
			customCSS = ".iQontrolToolbarLink.ui-btn:not(.ui-btn-active):hover{";
			customCSS += "	color: " + options.LayoutToolbarHoverTextColor + " !important;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutToolbarSelectedColor) {
			customCSS = ".iQontrolToolbarLink.ui-btn.ui-btn-active, .iQontrolToolbarLink.ui-btn.ui-btn-active:hover{";
			customCSS += "	background-color: " + options.LayoutToolbarSelectedColor + " !important;";
			customCSS += "	box-shadow: 0 0 12px 1px " + options.LayoutToolbarSelectedColor + " !important;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutToolbarSelectedTextColor) {
			customCSS = ".iQontrolToolbarLink.ui-btn.ui-btn-active, .iQontrolToolbarLink.ui-btn.ui-btn-active:hover{";
			customCSS += "	color: " + options.LayoutToolbarSelectedTextColor + " !important;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutToolbarSelectedHoverColor) {
			customCSS = ".iQontrolToolbarLink.ui-btn.ui-btn-active:hover{";
			customCSS += "	background-color: " + options.LayoutToolbarSelectedHoverColor + " !important;";
			customCSS += "	box-shadow: 0 0 12px 1px " + options.LayoutToolbarSelectedHoverColor + " !important;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutToolbarSelectedHoverTextColor) {
			customCSS = ".iQontrolToolbarLink.ui-btn.ui-btn-active:hover{";
			customCSS += "	color: " + options.LayoutToolbarSelectedHoverTextColor + " !important;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutToolbarFontSize) {
			customCSS = ".iQontrolToolbarLink.ui-btn{";
			customCSS += "	font-size: " + options.LayoutToolbarFontSize + "px !important;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutToolbarFontFamily) {
			customCSS = ".iQontrolToolbarLink.ui-btn{";
			customCSS += "	font-family: " + options.LayoutToolbarFontFamily + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutToolbarFontWeight) {
			customCSS = ".iQontrolToolbarLink.ui-btn{";
			customCSS += "	font-weight: " + options.LayoutToolbarFontWeight + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutToolbarFontStyle) {
			customCSS = ".iQontrolToolbarLink.ui-btn{";
			customCSS += "	font-style: " + options.LayoutToolbarFontStyle + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutToolbarIconSize) {
			customCSS = ".iQontrolToolbarLink.ui-btn:after{";
			customCSS += "	background-size: " + options.LayoutToolbarIconSize + "px;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutToolbarIconBackgroundColor) {
			customCSS = ".iQontrolToolbarLink.ui-btn:after{";
			customCSS += "	background-color: " + options.LayoutToolbarIconBackgroundColor + " !important;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutToolbarIconBackgroundSize) {
			customCSS = ".iQontrolToolbarLink.ui-btn:after{";
			customCSS += "	width: " + options.LayoutToolbarIconBackgroundSize + "px;";
			customCSS += "	height: " + options.LayoutToolbarIconBackgroundSize + "px;";
			customCSS += "	margin-left: " + (options.LayoutToolbarIconBackgroundSize / -2) + "px;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutToolbarIconBackgroundCornerSize) {
			customCSS = ".iQontrolToolbarLink.ui-btn:after{";
			customCSS += "	border-radius: " + (options.LayoutToolbarIconBackgroundCornerSize / 2) + "%;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		//Main-Header
		if(options.LayoutViewMainHeaderColor) {
			customCSS = "#ViewHeaderTitle{";
			customCSS += "	background-color: " + options.LayoutViewMainHeaderColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewMainHeaderTextColor) {
			customCSS = "#ViewHeaderTitle{";
			customCSS += "	color: " + options.LayoutViewMainHeaderTextColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewMainHeaderFontSize) {
			customCSS = "#ViewHeaderTitle{";
			customCSS += "	font-size: " + options.LayoutViewMainHeaderFontSize + "px;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewMainHeaderFontFamily) {
			customCSS = "#ViewHeaderTitle{";
			customCSS += "	font-family: " + options.LayoutViewMainHeaderFontFamily + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewMainHeaderFontWeight) {
			customCSS = "#ViewHeaderTitle{";
			customCSS += "	font-weight: " + options.LayoutViewMainHeaderFontWeight + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewMainHeaderFontStyle) {
			customCSS = "#ViewHeaderTitle{";
			customCSS += "	font-style: " + options.LayoutViewMainHeaderFontStyle + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewMainHeaderPaddingTop) {
			customCSS = "#ViewHeaderTitle{";
			customCSS += "	padding-top: " + options.LayoutViewMainHeaderPaddingTop + "px;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewMainHeaderPaddingBottom) {
			customCSS = "#ViewHeaderTitle{";
			customCSS += "	padding-bottom: " + options.LayoutViewMainHeaderPaddingBottom + "px;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewMainHeaderPaddingLeft) {
			customCSS = "#ViewHeaderTitle{";
			customCSS += "	padding-left: " + options.LayoutViewMainHeaderPaddingLeft + "px;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewMainHeaderMarginTop) {
			customCSS = "#ViewHeaderTitle{";
			customCSS += "	margin-top: " + options.LayoutViewMainHeaderMarginTop + "px;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewMainHeaderMarginRight) {
			customCSS = "#ViewHeaderTitle{";
			customCSS += "	margin-right: " + options.LayoutViewMainHeaderMarginRight + "px;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewMainHeaderMarginBottom) {
			customCSS = "#ViewHeaderTitle{";
			customCSS += "	margin-bottom: " + options.LayoutViewMainHeaderMarginBottom + "px;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewMainHeaderMarginLeft) {
			customCSS = "#ViewHeaderTitle{";
			customCSS += "	margin-left: " + options.LayoutViewMainHeaderMarginLeft + "px;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		//Sub-Header
		if(options.LayoutViewSubHeaderColor) {
			customCSS = "#ViewContent h4{";
			customCSS += "	background-color: " + options.LayoutViewSubHeaderColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewSubHeaderTextColor) {
			customCSS = "#ViewContent h4{";
			customCSS += "	color: " + options.LayoutViewSubHeaderTextColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewSubHeaderFontSize) {
			customCSS = "#ViewContent h4{";
			customCSS += "	font-size: " + options.LayoutViewSubHeaderFontSize + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewSubHeaderFontFamily) {
			customCSS = "#ViewContent h4{";
			customCSS += "	font-family: " + options.LayoutViewSubHeaderFontFamily + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewSubHeaderFontWeight) {
			customCSS = "#ViewContent h4{";
			customCSS += "	font-weight: " + options.LayoutViewSubHeaderFontWeight + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewSubHeaderFontStyle) {
			customCSS = "#ViewContent h4{";
			customCSS += "	font-style: " + options.LayoutViewSubHeaderFontStyle + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewSubHeaderPaddingTop) {
			customCSS = "#ViewContent h4{";
			customCSS += "	padding-top: " + options.LayoutViewSubHeaderPaddingTop + "px;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewSubHeaderPaddingBottom) {
			customCSS = "#ViewContent h4{";
			customCSS += "	padding-bottom: " + options.LayoutViewSubHeaderPaddingBottom + "px;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewSubHeaderPaddingLeft) {
			customCSS = "#ViewContent h4{";
			customCSS += "	padding-left: " + options.LayoutViewSubHeaderPaddingLeft + "px;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewSubHeaderMarginTop) {
			customCSS = "#ViewContent h4{";
			customCSS += "	margin-top: " + options.LayoutViewSubHeaderMarginTop + "px;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewSubHeaderMarginRight) {
			customCSS = "#ViewContent h4{";
			customCSS += "	margin-right: " + options.LayoutViewSubHeaderMarginRight + "px;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewSubHeaderMarginBottom) {
			customCSS = "#ViewContent h4{";
			customCSS += "	margin-bottom: " + options.LayoutViewSubHeaderMarginBottom + "px;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewSubHeaderMarginLeft) {
			customCSS = "#ViewContent h4{";
			customCSS += "	margin-left: " + options.LayoutViewSubHeaderMarginLeft + "px;";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		//Inactive Devices - Background 
		if(options.LayoutViewDeviceColor) {
			customCSS = ".iQontrolDeviceBackgroundImage:not(.active){";
			customCSS += "	background-color: " + options.LayoutViewDeviceColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceOpacity) {
			customCSS = ".iQontrolDeviceBackgroundImage:not(.active){";
			customCSS += "	opacity: " + options.LayoutViewDeviceOpacity + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceHoverColor) {
			customCSS = ".iQontrolDeviceBackgroundImage:not(.active):hover{";
			customCSS += "	background-color: " + options.LayoutViewDeviceHoverColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceHoverOpacity) {
			customCSS = ".iQontrolDeviceBackgroundImage:not(.active):hover{";
			customCSS += "	opacity: " + options.LayoutViewDeviceHoverOpacity + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		//Inactive Devices - Overlay
		if(options.LayoutViewDeviceInactiveColor) {
			customCSS = ".iQontrolDeviceBackground:not(.active){";
			customCSS += "	background-color: " + options.LayoutViewDeviceInactiveColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceInactiveOpacity) {
			customCSS = ".iQontrolDeviceBackground:not(.active){";
			customCSS += "	opacity: " + options.LayoutViewDeviceInactiveOpacity + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceInactiveHoverColor) {
			customCSS = ".iQontrolDevice:hover .iQontrolDeviceBackground:not(.active){";
			customCSS += "	background-color: " + options.LayoutViewDeviceInactiveHoverColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceInactiveHoverOpacity) {
			customCSS = "..iQontrolDevice:hover iQontrolDeviceBackground:not(.active){";
			customCSS += "	opacity: " + options.LayoutViewDeviceInactiveHoverOpacity + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		//Active Devices - Background 
		if(options.LayoutViewActiveDeviceColor) {
			customCSS = ".iQontrolDeviceBackgroundImage.active{";
			customCSS += "	background-color: " + options.LayoutViewActiveDeviceColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewActiveDeviceOpacity) {
			customCSS = ".iQontrolDeviceBackgroundImage.active{";
			customCSS += "	opacity: " + options.LayoutViewActiveDeviceOpacity + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewActiveDeviceHoverColor) {
			customCSS = ".iQontrolDeviceBackgroundImage.active:hover{";
			customCSS += "	background-color: " + options.LayoutViewActiveDeviceHoverColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewActiveDeviceHoverOpacity) {
			customCSS = ".iQontrolDeviceBackgroundImage.active:hover{";
			customCSS += "	opacity: " + options.LayoutViewActiveDeviceHoverOpacity + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		//Active Devices - Overlay
		if(options.LayoutViewDeviceActiveColor) {
			customCSS = ".iQontrolDeviceBackground.active{";
			customCSS += "	background-color: " + options.LayoutViewDeviceActiveColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceActiveOpacity) {
			customCSS = ".iQontrolDeviceBackground.active{";
			customCSS += "	opacity: " + options.LayoutViewDeviceActiveOpacity + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceActiveHoverColor) {
			customCSS = ".iQontrolDevice:hover .iQontrolDeviceBackground.active{";
			customCSS += "	background-color: " + options.LayoutViewDeviceActiveHoverColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceActiveHoverOpacity) {
			customCSS = ".iQontrolDevice:hover .iQontrolDeviceBackground.active{";
			customCSS += "	opacity: " + options.LayoutViewDeviceActiveHoverOpacity + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		//Device-Name
		if(options.LayoutViewDeviceNameInactiveTextColor) {
			customCSS = ".iQontrolDevice:not(.active) .iQontrolDeviceName{";
			customCSS += "	color: " + options.LayoutViewDeviceNameInactiveTextColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceNameInactiveHoverTextColor) {
			customCSS = ".iQontrolDevice:not(.active):hover .iQontrolDeviceName{";
			customCSS += "	color: " + options.LayoutViewDeviceNameInactiveHoverTextColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceNameActiveTextColor) {
			customCSS = ".iQontrolDevice.active .iQontrolDeviceName{";
			customCSS += "	color: " + options.LayoutViewDeviceNameActiveTextColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceNameActiveHoverTextColor) {
			customCSS = ".iQontrolDevice.active:hover .iQontrolDeviceName{";
			customCSS += "	color: " + options.LayoutViewDeviceNameActiveHoverTextColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceNameFontFamily) {
			customCSS = ".iQontrolDeviceName{";
			customCSS += "	font-family: " + options.LayoutViewDeviceNameFontFamily + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceNameFontWeight) {
			customCSS = ".iQontrolDeviceName{";
			customCSS += "	font-weight: " + options.LayoutViewDeviceNameFontWeight + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceNameFontStyle) {
			customCSS = ".iQontrolDeviceName{";
			customCSS += "	font-style: " + options.LayoutViewDeviceNameFontStyle + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		//State
		if(options.LayoutViewDeviceStateInactiveTextColor) {
			customCSS = ".iQontrolDevice:not(.active) .iQontrolDeviceState{";
			customCSS += "	color: " + options.LayoutViewDeviceStateInactiveTextColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceStateInactiveHoverTextColor) {
			customCSS = ".iQontrolDevice:not(.active):hover .iQontrolDeviceState{";
			customCSS += "	color: " + options.LayoutViewDeviceStateInactiveHoverTextColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceStateActiveTextColor) {
			customCSS = ".iQontrolDevice.active .iQontrolDeviceState{";
			customCSS += "	color: " + options.LayoutViewDeviceStateActiveTextColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceStateActiveHoverTextColor) {
			customCSS = ".iQontrolDevice.active:hover .iQontrolDeviceState{";
			customCSS += "	color: " + options.LayoutViewDeviceStateActiveHoverTextColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceStateFontFamily) {
			customCSS = ".iQontrolDeviceState{";
			customCSS += "	font-family: " + options.LayoutViewDeviceStateFontFamily + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceStateFontWeight) {
			customCSS = ".iQontrolDeviceState{";
			customCSS += "	font-weight: " + options.LayoutViewDeviceStateFontWeight + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceStateFontStyle) {
			customCSS = ".iQontrolDeviceState{";
			customCSS += "	font-style: " + options.LayoutViewDeviceStateFontStyle + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		//Info
		if(options.LayoutViewDeviceInfoInactiveTextColor) {
			customCSS = ".iQontrolDevice:not(.active) .iQontrolDeviceInfoAText, .iQontrolDevice:not(.active) .iQontrolDeviceInfoBText{";
			customCSS += "	color: " + options.LayoutViewDeviceInfoInactiveTextColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceInfoInactiveHoverTextColor) {
			customCSS = ".iQontrolDevice:not(.active):hover .iQontrolDeviceInfoAText, .iQontrolDevice:not(.active):hover .iQontrolDeviceInfoBText{";
			customCSS += "	color: " + options.LayoutViewDeviceInfoInactiveHoverTextColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceInfoActiveTextColor) {
			customCSS = ".iQontrolDevice.active .iQontrolDeviceInfoAText, .iQontrolDevice.active .iQontrolDeviceInfoBText{";
			customCSS += "	color: " + options.LayoutViewDeviceInfoActiveTextColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceInfoActiveHoverTextColor) {
			customCSS = ".iQontrolDevice.active:hover .iQontrolDeviceInfoAText, .iQontrolDevice.active:hover .iQontrolDeviceInfoBText{";
			customCSS += "	color: " + options.LayoutViewDeviceInfoActiveHoverTextColor + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceInfoFontFamily) {
			customCSS = ".iQontrolDeviceInfoAText, .iQontrolDeviceInfoBText{";
			customCSS += "	font-family: " + options.LayoutViewDeviceInfoFontFamily + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceInfoFontWeight) {
			customCSS = ".iQontrolDeviceInfoAText, .iQontrolDeviceInfoBText{";
			customCSS += "	font-weight: " + options.LayoutViewDeviceInfoFontWeight + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		if(options.LayoutViewDeviceInfoFontStyle) {
			customCSS = ".iQontrolDeviceInfoAText, .iQontrolDeviceInfoBText{";
			customCSS += "	font-style: " + options.LayoutViewDeviceInfoFontStyle + ";";
			customCSS += "}";
			addCustomCSS(customCSS);
		};
		//Own CSS:
		if(options.LayoutCSS) {
			customCSS = options.LayoutCSS;
			addCustomCSS(customCSS);
		};
	}
}

//++++++++++ TOOLBAR ++++++++++
function renderToolbar(){
	if (toolbar.length < 1) return;
	if (homeId == '') homeId = usedObjects[toolbar[0]].native.linkedView;
	var toolbarContent = "";
	toolbarLinksToOtherViews = [];
	toolbarContent += "<div data-role='navbar' data-iconpos='" + (typeof options.LayoutToolbarIconPosition != udef ? options.LayoutToolbarIconPosition : 'top') +  "' id='iQontrolToolbar'><ul>";
		for (var i = 0; i < toolbar.length; i++){
			var id = toolbar[i];
			toolbarLinksToOtherViews.push(usedObjects[id].native.linkedView);
			toolbarContent += "<li><a data-icon='" + (usedObjects[id].native.icon || "") + "' data-index='" + i + "' onclick='if (!toolbarPressureMenuIgnoreClick){ toolbarPressureMenuIgnorePressure = true; viewHistory = toolbarLinksToOtherViews; viewHistoryPosition = " + i + ";renderView(\"" + usedObjects[id].native.linkedView + "\");}' class='iQontrolToolbarLink ui-nodisc-icon " + (typeof options.LayoutToolbarIconColor != udef && options.LayoutToolbarIconColor == 'black' ? 'ui-alt-icon' : '') + "' data-theme='b' id='iQontrolToolbarLink_" + i + "'>" + usedObjects[id].common.name + "</a></li>";
		}
	toolbarContent += "</ul></div>";
	$("#ToolbarContent").html(toolbarContent);
	$("#ToolbarContent").enhanceWithin();
	applyToolbarPressureMenu();
}

function applyToolbarPressureMenu(){
	$('.iQontrolToolbarLink.ui-btn').pressure({
		start: function(event){	// this is called on force start
			console.log("PRESSURE start");
			$('.iQontrolToolbarLink.ui-btn, #ViewMain, .backstretch').css('filter', 'blur(0px)');
			toolbarPressureMenuForceOld[this] = 0;
			toolbarPressureMenuIgnorePressure = false;
			toolbarPressureMenuIgnoreClick = false;
		},
		startDeepPress: function(event){ // this is called on "force click" / "deep press", aka once the force is greater than 0.5
			//console.log("PRESSURE startDeepPress");
			//-- do nothing --
		},
		endDeepPress: function(){ // this is called when the "force click" / "deep press" end
			//console.log("PRESSURE endDeepPress");
			//-- do nothing --
		},
		end: function(){ // this is called on force end
			//console.log("PRESSURE end");
			//-- do nothing --
			//(This event is handeled via touchend-event seperately, because since iOS 13 the pressure end event is not called properly any more)
		},
		change: function(force, event){	// this is called every time there is a change in pressure, 'force' is a value ranging from 0 to 1
			var forceOld = toolbarPressureMenuForceOld[this] || 0;
			console.log("	PRESSURE change " + force + "|" + forceOld);
			if (toolbarPressureMenuIgnorePressure || toolbarPressureMenuFallbackTimer) {
				console.log("	PRESSURE change ignore");
				return;
			}
			if (force > 0 && force < 1 && forceOld == 0){ //Pressure change start
				//console.log("PRESSURE change start");
				//-- do nothing --
			} else if (force >= 1 && forceOld == 0){ //Pressure change start FALLBACK (direct jump of force from 0 to 1 on some devices)
				console.log("PRESSURE change start FALLBACK");
				if (toolbarPressureMenuFallbackTimer) {
					clearInterval(toolbarPressureMenuFallbackTimer);
					toolbarPressureMenuFallbackTimer = false;
					toolbarPressureMenuFallbackForce = 0;
				}
				var that = this;
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					var _that = that;
					var _event = event;
					toolbarPressureMenuFallbackTimer = setInterval(function(){
						console.log("PRESSURE Fallback: " + toolbarPressureMenuFallbackForce);
						if (toolbarPressureMenuIgnorePressure) {
							console.log("	PRESSURE Fallback change ignore");
						} else {
							if (toolbarPressureMenuFallbackForce >= 1){
								toolbarPressureMenuFallbackForce = 1;
							} else {
								toolbarPressureMenuFallbackForce += 0.1;
							}
							toolbarPressureMenuChange(toolbarPressureMenuFallbackForce, _event, _that);
						}
						toolbarPressureMenuForceOld[_that] = toolbarPressureMenuFallbackForce;
					}, 50);
				})(); //<--End Closure
			} else { //Pressure change
				toolbarPressureMenuChange(force, event, this);
			}
			toolbarPressureMenuForceOld[this] = force;
		},
		unsupported: function(){ // this is called once there is a touch on the element and the device or browser does not support Force or 3D touch - NOTE: this is only called if the polyfill option is disabled!
		}
	},{
		polyfill: true,
		polyfillSpeedUp: 500,
		polyfillSpeedDown: 50,
		preventSelect: true,
		only: null
	});
	$('.iQontrolToolbarLink.ui-btn').on('touchend mouseup', function(){ //Fallback for iOS 13: pressure end-event is not called properly
		toolbarPressureMenuIgnorePressure = true;
		console.log("PRESSURE end via TOUCHEND/MOUSEUP");
		$('.iQontrolToolbarLink.ui-btn, #ViewMain, .backstretch').css('filter', 'blur(0px)');
		//$('.iQontrolToolbarLink.ui-btn, #ViewMain, .backstretch').css('box-shadow', 'none');
		if (toolbarPressureMenuFallbackTimer) {
			clearInterval(toolbarPressureMenuFallbackTimer);
			toolbarPressureMenuFallbackTimer = false;
			toolbarPressureMenuFallbackForce = 0;
		}
		setTimeout(function(){
			console.log("Find active Toolbar Index");
			var toolbarIndex = -1;
			for (var i = 0; i < toolbar.length; i++){
				if(usedObjects[ toolbar[i] ].native.linkedView == actualViewId) {
					toolbarIndex = i;
					break;
				}
			}
			if(toolbarIndex >= 0) {
				$(".iQontrolToolbarLink").removeClass("ui-btn-active");
				$("#iQontrolToolbarLink_" + toolbarIndex).addClass("ui-btn-active");
			}
		}, 1);
		setTimeout(function(){
			toolbarPressureMenuIgnorePressure = false;
		}, 100);
	});	
}

function toolbarPressureMenuChange(force, event, that){
	if (force > 0.5 && !toolbarPressureMenuIgnoreClick){ //Pressure changeFunction startDeepPress
		console.log("PRESSURE changeFunction startDeepPress");
		toolbarPressureMenuIgnoreClick = true;
	}
	if (force >= 1 && toolbarPressureMenuForceOld[that] < 1){ //Pressure changeFunction Maximum reached
		console.log("PRESSURE changeFunction Maximum reached");
		toolbarPressureMenuIgnorePressure = true;
		event.preventDefault();
		event.stopPropagation();
		openToolbarPressureMenu($(that).data('index'), that);
	} else {
		if (!toolbarPressureMenuChangeTimer) {
			toolbarPressureMenuChangeTimer = setTimeout(function(){
				toolbarPressureMenuChangeTimer = false;
			}, 50);
			$('.iQontrolToolbarLink.ui-btn:not(:hover), #ViewMain, .backstretch').css('filter', 'blur(' + 9 * force + 'px)');				
			//$('.iQontrolToolbarLink.ui-btn:not(:hover), #ViewMain, .backstretch').css('box-shadow', 'inset 0 0 50px '+ ((100 * force) -50) +'px #212121');				
		}
	}
}

function openToolbarPressureMenu(toolbarIndex, callingElement){
	console.log("OpenToolbarPressureMenu");
	createToolbarPressureMenu(toolbarIndex, function(){
		if (toolbarPressureMenu[toolbarIndex] && Object.keys(toolbarPressureMenu[toolbarIndex]).length > 0){
			$('#ToolbarPressureMenuList').empty();
			for (key in toolbarPressureMenu[toolbarIndex]){
				var element = toolbarPressureMenu[toolbarIndex][key];
				$('#ToolbarPressureMenuList').append('<li' + (typeof element.icon != udef ? ' data-icon="' + element.icon + '"' : '') + ' class="ui-nodisc-icon ui-alt-icon"><a href="' + (typeof element.href != udef ? element.href : '') + '" target="' + (typeof element.target != udef ? element.target : '') + '" onclick=\'' + (typeof element.onclick != udef ? element.onclick : '') + '\'>' + (typeof element.name != udef ? element.name : key) + '</a></li>');
			};
			$('#ToolbarPressureMenuList').listview('refresh');
			$("#ToolbarPressureMenu").data('closeable', 'false').popup("open", {transition: "pop", positionTo: $(callingElement)});
			$('.iQontrolToolbarLink.ui-btn, #ViewMain, .backstretch').css('filter', 'blur(0px)');
		} else { //callingElement has no pressureMenu
			toolbarPressureMenuIgnoreClick = false;
			$(callingElement).click();
			$('.iQontrolToolbarLink.ui-btn, #ViewMain, .backstretch').css('filter', 'blur(0px)');
		}	
	});
}

function createToolbarPressureMenu(toolbarIndex, callback){
	if(typeof toolbarPressureMenu[toolbarIndex] == udef) {
		var linkedViewId = toolbarLinksToOtherViews[toolbarIndex];
		toolbarPressureMenu[toolbarIndex] = {};
		toolbarPressureMenuLinksToOtherViews[toolbarIndex] = [];
		fetchView(linkedViewId, function(){
			var viewSorted = [];
			for (var i = 0; i < views[linkedViewId].length; i++){
				var _id = views[linkedViewId][i];
				var sortPrefix = usedObjects[_id] && typeof usedObjects[_id].native !== udef && usedObjects[_id].native.sortPrefix || "";
				var sortPostfix = usedObjects[_id] && typeof usedObjects[_id].native !== udef && usedObjects[_id].native.sortPostfix || "";
				var commonName = usedObjects[_id] && typeof usedObjects[_id].common !== udef && usedObjects[_id].common.name || "";
				viewSorted.push([sortPrefix + commonName + sortPostfix, _id]);
			}
			viewSorted.sort();
			for (var i = 0; i < viewSorted.length; i++){
				var deviceId = viewSorted[i][1];
				//var role = (usedObjects[deviceId] && typeof usedObjects[deviceId].common != udef && typeof usedObjects[deviceId].common.role != udef && usedObjects[deviceId].common.role) || "";
				if (typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.linkedView != udef && usedObjects[deviceId].native.linkedView != "") { //Link to other view
					var linkedView = usedObjects[deviceId].native.linkedView;
					var linkedViewName = linkedView.substring(linkedView.lastIndexOf('.') + 1);
					toolbarPressureMenu[toolbarIndex][linkedView] = {name: _("Open %s", linkedViewName), icon:'grid', href: '', target: '', onclick: '$("#ToolbarPressureMenu").popup("close"); renderView("' + linkedView + '"); viewHistory = toolbarPressureMenuLinksToOtherViews[' + toolbarIndex + ']; viewHistoryPosition = ' + toolbarPressureMenuLinksToOtherViews[toolbarIndex].length + '; $(".iQontrolToolbarLink").removeClass("ui-btn-active"); $("#iQontrolToolbarLink_' + toolbarIndex + '").addClass("ui-btn-active");'};
					toolbarPressureMenuLinksToOtherViews[toolbarIndex].push(linkedView);
				}
			};
			if (callback) callback();
		});
	} else {
		if (callback) callback();
	}
}

function createToolbarPressureMenus(callback, index){
	createToolbarPressureMenusRunning = true;
	index = index || 0;
	if (index < toolbar.length){
		createToolbarPressureMenu(index, function(){ createToolbarPressureMenus(callback, index + 1); });
	} else {
		createToolbarPressureMenusRunning = false;
		if (callback) callback();
	}
}

//++++++++++ VIEW ++++++++++
function renderView(id, updateOnly, callback){
	if(createToolbarPressureMenusRunning && !updateOnly) {
		createToolbarPressureMenusBufferRenderView = {id: id, updateOnly: updateOnly, callback: callback};
		return;
	}
	console.log("renderView " + id + ", updateOnly: " + updateOnly);
	if(!id) id = homeId;
	actualViewId = id;
	var toolbarIndex = -1;
	for (var i = 0; i < toolbar.length; i++){
		if(usedObjects[ toolbar[i] ].native.linkedView == id) {
			toolbarIndex = i;
			break;
		}
	}
	if(toolbarIndex >= 0) {
		$(".iQontrolToolbarLink").removeClass("ui-btn-active");
		$("#iQontrolToolbarLink_" + toolbarIndex).addClass("ui-btn-active");
	}
	fetchView(id, function(){
		viewStateIdsToFetch = [];
		viewUpdateFunctions = {};
		deviceLinkedStateIdsToUpdate = [];
		viewLinksToOtherViews = [];
		//Sort Devices
		viewSorted = [];
		for (var i = 0; i < views[id].length; i++){
			var _id = views[id][i];
			var sortPrefix = usedObjects[_id] && typeof usedObjects[_id].native !== udef && usedObjects[_id].native.sortPrefix || "";
			var sortPostfix = usedObjects[_id] && typeof usedObjects[_id].native !== udef && usedObjects[_id].native.sortPostfix || "";
			var commonName = usedObjects[_id] && typeof usedObjects[_id].common !== udef && usedObjects[_id].common.name || "";
			viewSorted.push([sortPrefix + commonName + sortPostfix, _id]);
		}
		viewSorted.sort();
		//Change Background
		if(!updateOnly)	if (usedObjects[id] && typeof usedObjects[id].native != udef && usedObjects[id].native.backgroundImage) {
			changeViewBackground(encodeURI(usedObjects[id].native.backgroundImage));
			window.scrollTo(0, 0);
		} else {
			changeViewBackground("");
		}
		//Render View
		var viewContent = "";
		for (var i = 0; i < viewSorted.length; i++){
			var deviceId = viewSorted[i][1];
			//Render Heading
			if (usedObjects[deviceId] && typeof usedObjects[deviceId].native != udef && usedObjects[deviceId].native.heading && usedObjects[deviceId].native.heading !== "") viewContent += "<br><h4>" + usedObjects[deviceId].native.heading + "</h4>";
			//Render Device
			var deviceContent = "";
			//--Get linked States
			//  While getting the LinkedStateId the correspondig usedObject is also fetched
			//  If the linked State is not fetched yet, write it in to viewStateIdsToFetch-Array - they will be fetched alltogether after rendering the view. Then the view is rendered again.
			var deviceLinkedStateIds = {};
			if(usedObjects[deviceId] && typeof usedObjects[deviceId].common != udef && typeof usedObjects[deviceId].common.role != udef && iQontrolRoles[usedObjects[deviceId].common.role] && typeof iQontrolRoles[usedObjects[deviceId].common.role].states != udef){
				iQontrolRoles[usedObjects[deviceId].common.role].states.forEach(function(elementState){
					var stateId = deviceId + "." + elementState;
					var linkedStateId = getLinkedStateId(stateId);
					if (linkedStateId == null) { //Is not fetched yet
						viewStateIdsToFetch.push(stateId);
					} else { //Is fetched - call updateFunction after rendering View
						deviceLinkedStateIdsToUpdate.push(linkedStateId);
					}
					deviceLinkedStateIds[elementState] = linkedStateId;
				});
			}
			//--viewPressureMenu
			viewPressureMenu[deviceId] = {};
			viewPressureMenu[deviceId].dialog = {name: _("Properties..."), icon: 'comment', href: '', target: '', onclick:'$("#ViewPressureMenu").popup("close"); setTimeout(function(){renderDialog("' + deviceId + '"); $("#Dialog").popup("open", {transition: "pop", positionTo: "window"});}, 400);'};
			//--Get viewLinksToOtherViews
			if (usedObjects[deviceId] && typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.linkedView != udef && usedObjects[deviceId].native.linkedView != "") { //Link to other view
				var linkedView = usedObjects[deviceId].native.linkedView;
				var linkedViewName = linkedView.substring(linkedView.lastIndexOf('.') + 1);
				viewLinksToOtherViews.push(linkedView);
				viewPressureMenu[deviceId].linkedView = {name: _("Open %s", linkedViewName), icon:'grid', href: '', target: '', onclick: '$("#ViewPressureMenu").popup("close"); viewHistory = viewLinksToOtherViews; viewHistoryPosition = ' + (viewLinksToOtherViews.length - 1) + '; renderView("' + linkedView + '");'};
			}
			//--PressureIndicator
			viewContent += "<div class='iQontrolDevicePressureIndicator' data-iQontrol-Device-ID='" + deviceId + "'>";
				//--Box
				viewContent += "<div class='iQontrolDevice' data-iQontrol-Device-ID='" + deviceId + "'>";
					//--Link (to Dialog / Popup / External Link / Other View)
					switch(usedObjects[deviceId].common.role){
						case "iQontrolView": case "iQontrolWindow": case "iQontrolDoor": case "iQontrolFire": case "iQontrolTemperature": case "iQontrolHumidity": case "iQontrolBrightness": case "iQontrolMotion":
						if (typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.linkedView != udef && usedObjects[deviceId].native.linkedView != "") { //Link to other view
							deviceContent += "<div class='iQontrolDeviceLink' data-iQontrol-Device-ID='" + deviceId + "' data-onclick='viewHistory = viewLinksToOtherViews; viewHistoryPosition = " + (viewLinksToOtherViews.length - 1) + "; renderView(\"" + usedObjects[deviceId].native.linkedView + "\");'>";
						} else { //No link
							deviceContent += "<div class='iQontrolDeviceLink' data-iQontrol-Device-ID='" + deviceId + "' data-onclick=''>";
						}
						break;

						case "iQontrolExternalLink": //External Link
						if (deviceLinkedStateIds["URL"]){
							deviceContent += "<a class='iQontrolDeviceLink' data-iQontrol-Device-ID='" + deviceId + "' target='_blank'>";
							viewPressureMenu[deviceId].externalLink = {name: _("Open External Link"), icon: 'action', href: '', target: '_blank', onclick: '$("#ViewPressureMenu").popup("close");'};
							(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
								var _deviceId = deviceId;
								var _linkedUrlId = deviceLinkedStateIds["URL"];
								viewUpdateFunctions[_linkedUrlId].push(function(){
									var href = "";
									if (states[_linkedUrlId]) href = states[_linkedUrlId].val;
									$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceLink").attr('href', href);
									viewPressureMenu[_deviceId].externalLink.href = href;
								});
							})(); //<--End Closure
						}
						break;

						default: //Link to Dialog
						if(typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.clickOnTileToggles != udef && usedObjects[deviceId].native.clickOnTileToggles == "true"){ //clickOnTileToggles
							//deviceContent += "<div class='iQontrolDeviceLink' data-iQontrol-Device-ID='" + deviceId + "' data-onclick='$(that).children(\".iQontrolDeviceLinkToToggle\").click()'>";
							deviceContent += "<div class='iQontrolDeviceLink' data-iQontrol-Device-ID='" + deviceId + "' data-onclick='if(viewPressureMenu[\"" + deviceId + "\"] && viewPressureMenu[\"" + deviceId + "\"].toggle && viewPressureMenu[\"" + deviceId + "\"].toggle.onclick){new Function(viewPressureMenu[\"" + deviceId + "\"].toggle.onclick)();}'>";
						} else { //Normal Link to Dialog
							deviceContent += "<div class='iQontrolDeviceLink' data-iQontrol-Device-ID='" + deviceId + "' data-onclick='renderDialog(\"" + deviceId + "\"); $(\"#Dialog\").popup(\"open\", {transition: \"pop\", positionTo: \"window\"});'>";
						}
					}
						//--BackgroundImage
						var url = "";
						if(usedObjects[deviceId].native.backgroundImage) url = encodeURI(usedObjects[deviceId].native.backgroundImage);
						deviceContent += "<div class='iQontrolDeviceBackgroundImage' data-iQontrol-Device-ID='" + deviceId + "' style='background-image:url(" + url + ");'></div>";
						//--Background (Overlay)
						if (!(typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.noOverlayInactive != udef && usedObjects[deviceId].native.noOverlayInactive == "true")){
							deviceContent += "<div class='iQontrolDeviceBackground' data-iQontrol-Device-ID='" + deviceId + "'></div>";
						}
						//--BackgroundImageActive
						url = "";
						if(usedObjects[deviceId].native.backgroundImageActive) url = encodeURI(usedObjects[deviceId].native.backgroundImageActive);
						deviceContent += "<div class='iQontrolDeviceBackgroundImage active' data-iQontrol-Device-ID='" + deviceId + "' style='background-image:url(" + url + ");'></div>";
						//--BackgroundActive (OverlayActive)
						if (!(typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.noOverlayActive != udef && usedObjects[deviceId].native.noOverlayActive == "true")){
							deviceContent += "<div class='iQontrolDeviceBackground active' data-iQontrol-Device-ID='" + deviceId + "'></div>";
						}
						//--Icon with Link to Switch
						var linkContent = "";
						var iconContent = "";
						var onclick = "";
						var clickOnIconOpensDialog = (typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.clickOnIconOpensDialog != udef && usedObjects[deviceId].native.clickOnIconOpensDialog == "true");
						var icons = {};
						if(deviceId && usedObjects[deviceId] && typeof usedObjects[deviceId].native != udef){
							for (element in usedObjects[deviceId].native) {
								if (element.substring(0, 5).toLowerCase() == "icon_"){
									var iconClass = element.substring(5);
									if (iconClass) icons[iconClass] = encodeURI(usedObjects[deviceId].native[element]);
								}
							}
						} 
						switch(usedObjects[deviceId].common.role){
							case "iQontrolView": case "":
							if (icons["on"] && icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon on active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/blank.png") + "' />";
							if (icons["on"] && icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon off' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/blank.png") + "' />";
							break;

							case "iQontrolSwitch":
							if(deviceLinkedStateIds["STATE"]) onclick = "toggleState(\"" + deviceLinkedStateIds["STATE"] + "\", \"" + deviceId + "\");";
							linkContent += "<a class='iQontrolDeviceLinkToToggle' data-iQontrol-Device-ID='" + deviceId + "' onclick='" + onclick + "'>";
								if (icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/switch_on.png") + "' />";
								if (icons["off"] !== "none") iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["off"] || "./images/icons/switch_off.png") + "' />";
							break;

							case "iQontrolButton":
							if(deviceLinkedStateIds["STATE"] && deviceLinkedStateIds["SET_VALUE"]){
								var returnToOffSetValueAfter = (typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.returnToOffSetValueAfter != udef && usedObjects[deviceId].native.returnToOffSetValueAfter) || "100";
								onclick = "startButton(\"" + deviceLinkedStateIds["STATE"] + "\", \"" + deviceLinkedStateIds["SET_VALUE"] + "\", \"" + deviceLinkedStateIds["OFF_SET_VALUE"] + "\", \"" + returnToOffSetValueAfter + "\", \"" + deviceId + "\");";
							}
							linkContent += "<a class='iQontrolDeviceLinkToToggle' data-iQontrol-Device-ID='" + deviceId + "' onclick='" + onclick + "'>";
								if (icons["off"] !== "none") iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/button.png") + "' />";
								if (icons["off"] !== "none") iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["off"] || "./images/icons/button.png") + "' />";
							break;

							case "iQontrolLight":
							if(deviceLinkedStateIds["LEVEL"]) onclick = "toggleState(\"" + deviceLinkedStateIds["LEVEL"] + "\", \"" + deviceId + "\");";
							if(deviceLinkedStateIds["STATE"]) onclick = "toggleState(\"" + deviceLinkedStateIds["STATE"] + "\", \"" + deviceId + "\");";
							linkContent += "<a class='iQontrolDeviceLinkToToggle' data-iQontrol-Device-ID='" + deviceId + "' onclick='" + onclick + "'>";
								if (icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/light_on.png") + "' />";
								if (icons["off"] !== "none") iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["off"] || "./images/icons/light_off.png") + "' />";
							break;

							case "iQontrolFan":
							if(deviceLinkedStateIds["STATE"]) onclick = "toggleState(\"" + deviceLinkedStateIds["STATE"] + "\", \"" + deviceId + "\");";
							linkContent += "<a class='iQontrolDeviceLinkToToggle' data-iQontrol-Device-ID='" + deviceId + "' onclick='" + onclick + "'>";
								if (icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/fan_on.png") + "' />";
								if (icons["off"] !== "none") iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["off"] || "./images/icons/fan_off.png") + "' />";
							break;

							case "iQontrolThermostat": case "iQontrolHomematicThermostat":
							if (icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon on active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/radiator.png") + "' />";
							if (icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon off' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/radiator.png") + "' />";
							break;

							case "iQontrolTemperature":
							if (icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/temperature.png") + "' />";
							if (icons["off"] !== "none") iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["off"] || "./images/icons/temperature.png") + "' />";
							break;

							case "iQontrolHumidity":
							if (icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/humidity.png") + "' />";
							if (icons["off"] !== "none") iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["off"] || "./images/icons/humidity.png") + "' />";
							break;

							case "iQontrolBrightness":
							if (icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/brightness_light.png") + "' />";
							if (icons["off"] !== "none") iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["off"] || "./images/icons/brightness_dark.png") + "' />";
							break;

							case "iQontrolMotion":
							if (icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/motion_on.png") + "' />";
							if (icons["off"] !== "none") iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["off"] || "./images/icons/motion_off.png") + "' />";
							break;

							case "iQontrolDoor":
							if (icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon opened on' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/door_opened.png") + "' />";
							if (icons["off"] !== "none") iconContent += "<image class='iQontrolDeviceIcon closed off active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["off"] || "./images/icons/door_closed.png") + "' />";
							break;

							case "iQontrolGarageDoor":
							//if(deviceLinkedStateIds["STATE"]) onclick = "startProgram(\"" + deviceLinkedStateIds["STATE"] + "\", \"" + deviceId + "\");";
							//linkContent += "<a class='iQontrolDeviceLinkToToggle' data-iQontrol-Device-ID='" + deviceId + "' onclick='" + onclick + "'>";
								if (icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon opened on' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/garagedoor_opened.png") + "' />";
								if (icons["off"] !== "none") iconContent += "<image class='iQontrolDeviceIcon closed off active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["off"] || "./images/icons/garagedoor_closed.png") + "' />";
							break;
							
							case "iQontrolDoorWithLock":
							if (icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon opened on' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/door_opened.png") + "' />";
							if (icons["off"] !== "none") iconContent += "<image class='iQontrolDeviceIcon closed off active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["off"] || "./images/icons/door_closed.png") + "' />";
							if (icons["locked"] !== "none") iconContent += "<image class='iQontrolDeviceIcon locked' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["locked"] || "./images/icons/door_locked.png") + "' />";
							if (icons["unlocked"] !== "none") iconContent += "<image class='iQontrolDeviceIcon unlocked' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["unlocked"] || "./images/icons/door_unlocked.png") + "' />";
							break;

							case "iQontrolWindow":
							if (icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/window_opened.png") + "' />";
							if (icons["off"] !== "none") iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["off"] || "./images/icons/window_closed.png") + "' />";
							break;

							case "iQontrolBlind":
							if(deviceLinkedStateIds["LEVEL"] || (deviceLinkedStateIds["UP"] && deviceLinkedStateIds["DOWN"])) onclick = "toggleActuator(\"" + (deviceLinkedStateIds["LEVEL"] || "") + "\", \"" + (deviceLinkedStateIds["DIRECTION"] || "") + "\", \"" + (deviceLinkedStateIds["STOP"] || "") + "\", \"" + (deviceLinkedStateIds["UP"] || "") + "\", \"" + (deviceLinkedStateIds["UP_SET_VALUE"] || "") + "\", \"" + (deviceLinkedStateIds["DOWN"] || "") + "\", \"" + (deviceLinkedStateIds["DOWN_SET_VALUE"] || "") + "\", \"" + (deviceLinkedStateIds["FAVORITE_POSITION"] || "") + "\", \"" + deviceId + "\");";
							linkContent += "<a class='iQontrolDeviceLinkToToggle' data-iQontrol-Device-ID='" + deviceId + "' onclick='" + onclick + "'>";
								if (icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon opened on' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/blind_opened.png") + "' />";
								if (icons["off"] !== "none") iconContent += "<image class='iQontrolDeviceIcon closed off active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["off"] || "./images/icons/blind_closed.png") + "' />";
								if (icons["middle"] !== "none") iconContent += "<image class='iQontrolDeviceIcon middle' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["middle"] || "./images/icons/blind_middle.png") + "' />";
								if (icons["closing"] !== "none") iconContent += "<image class='iQontrolDeviceIcon closing' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["closing"] || "./images/icons/blind_closing.png") + "' />";
								if (icons["opening"] !== "none") iconContent += "<image class='iQontrolDeviceIcon opening' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["opening"] || "./images/icons/blind_opening.png") + "' />";
							break;

							case "iQontrolFire":
							if (icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/fire_on.png") + "' />";
							if (icons["off"] !== "none") iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["off"] || "./images/icons/fire_off.png") + "' />";
							break;

							case "iQontrolAlarm":
							if (icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/alarm_on_triggered.png") + "' />";
							if (icons["armed"] !== "none") iconContent += "<image class='iQontrolDeviceIcon armed' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["armed"] || "./images/icons/alarm_on.png") + "' />";
							if (icons["off"] !== "none") iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["off"] || "./images/icons/alarm_off.png") + "' />";
							break;

							case "iQontrolBattery":
							if (icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon full on' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/battery_full.png") + "' />";
							if (icons["off"] !== "none") iconContent += "<image class='iQontrolDeviceIcon empty off active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["off"] || "./images/icons/battery_empty.png") + "' />";
							if (icons["75"] !== "none") iconContent += "<image class='iQontrolDeviceIcon charged75' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["charged75"] || "./images/icons/battery_75.png") + "' />";
							if (icons["50"] !== "none") iconContent += "<image class='iQontrolDeviceIcon charged50' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["charged50"] || "./images/icons/battery_50.png") + "' />";
							if (icons["25"] !== "none") iconContent += "<image class='iQontrolDeviceIcon charged25' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["charged25"] || "./images/icons/battery_25.png") + "' />";
							if (icons["10"] !== "none") iconContent += "<image class='iQontrolDeviceIcon charged10' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["charged10"] || "./images/icons/battery_10.png") + "' />";
							if (icons["charging"] !== "none") iconContent += "<image class='iQontrolDeviceIcon charging overlay' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["charging"] || "./images/icons/battery_charging_overlay.png") + "' />";
							break;

							case "iQontrolValue":
							if (icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/value_on.png") + "' />";
							if (icons["off"] !== "none") iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["off"] || "./images/icons/value_off.png") + "' />";
							break;

							case "iQontrolProgram":
							if(deviceLinkedStateIds["STATE"]) onclick = "startProgram(\"" + deviceLinkedStateIds["STATE"] + "\", \"" + deviceId + "\");";
							linkContent += "<a class='iQontrolDeviceLinkToToggle' data-iQontrol-Device-ID='" + deviceId + "' onclick='" + onclick + "'>";
								if (icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/play_on.png") + "' />";
								if (icons["off"] !== "none") iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["off"] || "./images/icons/play.png") + "' />";
							break;
							
							case "iQontrolScene":
							if(deviceLinkedStateIds["STATE"]) onclick = "startProgram(\"" + deviceLinkedStateIds["STATE"] + "\", \"" + deviceId + "\");";
							linkContent += "<a class='iQontrolDeviceLinkToToggle' data-iQontrol-Device-ID='" + deviceId + "' onclick='" + onclick + "'>";
								if (icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/play.png") + "' />";
								if (icons["off"] !== "none") iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["off"] || "./images/icons/play.png") + "' />";
							break;

							case "iQontrolPopup":
							if (icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/popup.png") + "' />";
							if (icons["off"] !== "none") iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["off"] || "./images/icons/popup.png") + "' />";
							break;

							case "iQontrolExternalLink":
							if (icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/link.png") + "' />";
							if (icons["off"] !== "none") iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["off"] || "./images/icons/link.png") + "' />";
							break;

							default:
							if(deviceLinkedStateIds["STATE"]) onclick = "toggleState(\"" + deviceLinkedStateIds["STATE"] + "\", \"" + deviceId + "\");";
							linkContent += "<a class='iQontrolDeviceLinkToToggle' data-iQontrol-Device-ID='" + deviceId + "' onclick='" + onclick + "'>";
								if (icons["on"] !== "none") iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["on"] || "./images/icons/switch_on.png") + "' />";
								if (icons["off"] !== "none") iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='" + (icons["off"] || "./images/icons/switch_off.png") + "' />";
						}
						if(clickOnIconOpensDialog) { //Overwrite linkContent with linkToDialog
							linkContent = "<a class='iQontrolDeviceLinkToToggle' data-iQontrol-Device-ID='" + deviceId + "' onclick='renderDialog(\"" + deviceId + "\"); $(\"#Dialog\").popup(\"open\", {transition: \"pop\", positionTo: \"window\"});'>";
						}
						if(linkContent !== "") {
							deviceContent += linkContent + iconContent + "</a>";
						} else {
							deviceContent += iconContent;
						}
						if(onclick != "") viewPressureMenu[deviceId].toggle = {name: _("Toggle"), icon:'power', href: '', target: '', onclick: onclick + ' $("#ViewPressureMenu").popup("close");'};
						//--IconLoading
						deviceContent += "<image class='iQontrolDeviceLoading' data-iQontrol-Device-ID='" + deviceId + "' src='./images/loading.gif'/>";
						//--IconError
						deviceContent += "<image class='iQontrolDeviceError' data-iQontrol-Device-ID='" + deviceId + "' src='./images/error.png'>";
						if (deviceLinkedStateIds["ERROR"]){
							(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
								var _deviceId = deviceId;
								var _linkedErrorId = deviceLinkedStateIds["ERROR"];
								viewUpdateFunctions[_linkedErrorId].push(function(){
									var stateError = getStateObject(_linkedErrorId)
									if (typeof stateError !== udef && stateError.val) {
										$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceError").addClass("active");
									} else {
										$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceError").removeClass("active");
									}
								});
							})(); //<--End Closure
						}
						//--IconUnreach
						deviceContent += "<image class='iQontrolDeviceUnreach' data-iQontrol-Device-ID='" + deviceId + "' src='./images/unreach.png'>";
						if (deviceLinkedStateIds["UNREACH"]){
							(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
								var _deviceId = deviceId;
								var _linkedUnreachId = deviceLinkedStateIds["UNREACH"];
								viewUpdateFunctions[_linkedUnreachId].push(function(){
									var stateUnreach = getStateObject(_linkedUnreachId)
									if (typeof stateUnreach !== udef && stateUnreach.val) {
										$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceUnreach").addClass("active");
									} else {
										$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceUnreach").removeClass("active");
									}
								});
							})(); //<--End Closure
						}
						//--IconBattery
						deviceContent += "<image class='iQontrolDeviceBattery' data-iQontrol-Device-ID='" + deviceId + "' src='./images/battery.png'>";
						if (deviceLinkedStateIds["BATTERY"] && deviceLinkedStateIds["BATTERY"] != ""){
							(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
								var _deviceId = deviceId;
								var _linkedBatteryId = deviceLinkedStateIds["BATTERY"];
								viewUpdateFunctions[_linkedBatteryId].push(function(){
									var stateBattery = getStateObject(_linkedBatteryId);
									if (typeof stateBattery !== udef){
										if (stateBattery.type == "level") {
											var min = stateBattery.min || 0;
											var max = stateBattery.max || 100;
											if(typeof stateBattery.val !== udef && stateBattery.val <= (min + ((max-min) * 0.10))){ //<10%
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceBattery").addClass("active");
											} else {
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceBattery").removeClass("active");
											}
										} else if (stateBattery.val) {
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceBattery").addClass("active");
										} else {
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceBattery").removeClass("active");
										}
									}
								});
							})(); //<--End Closure
						}
						//--Info A
						switch(usedObjects[deviceId].common.role){
							case "iQontrolThermostat": case "iQontrolHomematicThermostat": case "iQontrolTemperature": case "iQontrolHumidity":
							if (deviceLinkedStateIds["TEMPERATURE"]){
								deviceContent += "<image class='iQontrolDeviceInfoAIcon' data-iQontrol-Device-ID='" + deviceId + "' src='./images/temperature.png'>";
								deviceContent += "<div class='iQontrolDeviceInfoAText' data-iQontrol-Device-ID='" + deviceId + "'></div>";
								(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
									var _deviceId = deviceId;
									var _linkedTemperatureId = deviceLinkedStateIds["TEMPERATURE"];
									viewUpdateFunctions[_linkedTemperatureId].push(function(){
										var stateTemperature = getStateObject(_linkedTemperatureId);
										if (stateTemperature && typeof stateTemperature.val !== udef){
											var val = stateTemperature.plainText;
											var unit = stateTemperature.unit;
											if (!isNaN(val)) val = Math.round(val * 10) / 10;
											if (stateTemperature.plainText == stateTemperature.val) val = val + unit;
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceInfoAIcon").show();
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceInfoAText").html(val);
										} else {
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceInfoAIcon").hide();
										}
									});
								})(); //<--End Closure
							}
							break;

							case "iQontrolBrightness": case "iQontrolMotion":
							if (deviceLinkedStateIds["BRIGHTNESS"]){
								deviceContent += "<image class='iQontrolDeviceInfoAIcon' data-iQontrol-Device-ID='" + deviceId + "' src='./images/brightness.png'>";
								deviceContent += "<div class='iQontrolDeviceInfoAText' data-iQontrol-Device-ID='" + deviceId + "'></div>";
								(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
									var _deviceId = deviceId;
									var _linkedBrightnessId = deviceLinkedStateIds["BRIGHTNESS"];
									viewUpdateFunctions[_linkedBrightnessId].push(function(){
										var stateBrightness = getStateObject(_linkedBrightnessId);
										if (stateBrightness && typeof stateBrightness.val !== udef){
											var val = stateBrightness.plainText;
											var unit = stateBrightness.unit;
											if (!isNaN(val)) val = Math.round(val * 10) / 10;
											if (stateBrightness.plainText == stateBrightness.val) val = val + unit;
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceInfoAIcon").show();
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceInfoAText").html(val);
										} else {
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceInfoAIcon").hide();
										}
									});
								})(); //<--End Closure
							}
							break;

							case "iQontrolBlind": 
							if (deviceLinkedStateIds["SLATS_LEVEL"]){
								deviceContent += "<image class='iQontrolDeviceInfoAIcon' data-iQontrol-Device-ID='" + deviceId + "' src='./images/slats.png'>";
								deviceContent += "<div class='iQontrolDeviceInfoAText' data-iQontrol-Device-ID='" + deviceId + "'></div>";
								(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
									var _deviceId = deviceId;
									var _linkedSlatsLevelId = deviceLinkedStateIds["SLATS_LEVEL"];
									viewUpdateFunctions[_linkedSlatsLevelId].push(function(){
										var stateSlatsLevel = getStateObject(_linkedSlatsLevelId);
										if (stateSlatsLevel && typeof stateSlatsLevel.val !== udef){
											var val = stateSlatsLevel.plainText;
											var unit = stateSlatsLevel.unit;
											if (!isNaN(val)) val = Math.round(val * 10) / 10;
											if (stateSlatsLevel.plainText == stateSlatsLevel.val) val = val + unit;
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceInfoAIcon").show();
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceInfoAText").html(val);
										} else {
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceInfoAIcon").hide();
										}
									});
								})(); //<--End Closure
							}
							break;

							case "iQontrolBattery":
							if (deviceLinkedStateIds["VOLTAGE"]) {
								deviceContent += "<image class='iQontrolDeviceInfoAIcon' data-iQontrol-Device-ID='" + deviceId + "' src='./images/power.png' style='display:none;'>";
								deviceContent += "<div class='iQontrolDeviceInfoAText' data-iQontrol-Device-ID='" + deviceId + "'></div>";
								(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
									var _deviceId = deviceId;
									var _linkedVoltageId = deviceLinkedStateIds["VOLTAGE"];
									viewUpdateFunctions[_linkedVoltageId].push(function(){
										var stateVoltage = getStateObject(_linkedVoltageId);
										if (stateVoltage && typeof stateVoltage.val !== udef){
											var val = stateVoltage.plainText;
											var unit = stateVoltage.unit;
											if (!isNaN(val)) val = Math.round(val * 10) / 10;
											if (stateVoltage.plainText == stateVoltage.val) val = val + unit;
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceInfoAIcon").show();
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceInfoAText").html(val);
										} else {
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceInfoAIcon").hide();
										}
									});
								})(); //<--End Closure
							}
							break;

							case "iQontrolLight":
							if (deviceLinkedStateIds["HUE"] || deviceLinkedStateIds["CT"] || deviceLinkedStateIds["ALTERNATIVE_COLORSPACE_VALUE"]){
								deviceContent += "<image class='iQontrolDeviceInfoAIcon' data-iQontrol-Device-ID='" + deviceId + "' style='display:none;' src='./images/color.png'>";
								deviceContent += "<div class='iQontrolDeviceInfoAText' data-iQontrol-Device-ID='" + deviceId + "'><div class='iQontrolDeviceInfoATextHue' data-iQontrol-Device-ID='" + deviceId + "' style='display:none; width:1.2em; height:1.2em; margin-left:0.2em; margin-right:0.2em; float:left;'></div><div class='iQontrolDeviceInfoATextCt' data-iQontrol-Device-ID='" + deviceId + "' style='display:none; width:1.2em; height:1.2em; margin-left:0.2em; margin-right:0.2em; float:left;'></div></div>";
								//Create temp-datapoints for datapoints that are only mapped via alternative colorspace
								var alternativeColorspace = (typeof usedObjects[deviceId] !== udef && typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.alternativeColorspace != udef && usedObjects[deviceId].native.alternativeColorspace) || "";
								switch(alternativeColorspace){
									case "RGBCWWW": case "#RGBCWWW": case "RGBWWCW": case "#RGBWWCW":
									if (deviceLinkedStateIds["CT"] == ""){
										deviceLinkedStateIds["CT"] = createTempLinkedState(deviceId + ".CT", "level");
										deviceLinkedStateIdsToUpdate.push(deviceLinkedStateIds["CT"]);
									} 
									
									case "RGBW": case "#RGBW":
									if (deviceLinkedStateIds["WHITE_BRIGHTNESS"] == ""){
										deviceLinkedStateIds["WHITE_BRIGHTNESS"] = createTempLinkedState(deviceId + ".WHITE_BRIGHTNESS", "level");
										deviceLinkedStateIdsToUpdate.push(deviceLinkedStateIds["WHITE_BRIGHTNESS"]);
									} 
									
									case "RGB": case "#RGB":
									if (deviceLinkedStateIds["SATURATION"] == ""){
										deviceLinkedStateIds["SATURATION"] = createTempLinkedState(deviceId + ".SATURATION", "level");
										deviceLinkedStateIdsToUpdate.push(deviceLinkedStateIds["SATURATION"]);
									}
									if (deviceLinkedStateIds["COLOR_BRIGHTNESS"] == ""){
										deviceLinkedStateIds["COLOR_BRIGHTNESS"] = createTempLinkedState(deviceId + ".COLOR_BRIGHTNESS", "level");
										deviceLinkedStateIdsToUpdate.push(deviceLinkedStateIds["COLOR_BRIGHTNESS"]);
									}

									case "RGB_HUEONLY": case "#RGB_HUEONLY": case "HUE_MILIGHT":
									if (deviceLinkedStateIds["HUE"] == ""){
										deviceLinkedStateIds["HUE"] = createTempLinkedState(deviceId + ".HUE", "level");
										deviceLinkedStateIdsToUpdate.push(deviceLinkedStateIds["HUE"]);
									}
									break;
								}
								(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
									var _deviceId = deviceId;
									var _linkedHueId = deviceLinkedStateIds["HUE"];
									var _linkedSaturationId = deviceLinkedStateIds["SATURATION"];
									var _linkedColorBrightnessId = deviceLinkedStateIds["COLOR_BRIGHTNESS"];
									var _linkedCtId = deviceLinkedStateIds["CT"];
									var _linkedWhiteBrightnessId = deviceLinkedStateIds["WHITE_BRIGHTNESS"];
									var _linkedAlternativeColorspaceValueId = deviceLinkedStateIds["ALTERNATIVE_COLORSPACE_VALUE"];
									if (deviceLinkedStateIds["HUE"]){
										var updateFunction = function(){
											var stateHue = getStateObject(_linkedHueId);
											if (stateHue && stateHue.val !== ""){
												var hueMin = stateHue.min || 0;
												var hueMax = stateHue.max || 359;
												var hue = ((stateHue.val - hueMin) / (hueMax - hueMin)) * 359;
												var	saturation = 100;
												var stateSaturation = getStateObject(_linkedSaturationId);
												if (stateSaturation && typeof stateSaturation.val != udef) {
													var saturationMin = stateSaturation.min || 0;
													var saturationMax = stateSaturation.max || 100;
													saturation = ((stateSaturation.val - saturationMin) / (saturationMax - saturationMin)) * 100;
												}
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceInfoAIcon").show()
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceInfoATextHue").show().css("background-color", "hsl(" + hue + ", 100%," + (100-(saturation/2)) + "%)");
											} 
										};
										if (_linkedHueId) viewUpdateFunctions[_linkedHueId].push(updateFunction);
										if (_linkedSaturationId) viewUpdateFunctions[_linkedSaturationId].push(updateFunction);
									}
									if (deviceLinkedStateIds["CT"]){
										var updateFunction = function(){
											var stateCt = getStateObject(_linkedCtId);
											if (stateCt  && typeof stateCt.val !== udef){
												var ctMin = stateCt.min || 0;
												var ctMax = stateCt.max || 100;
												var ct = stateCt.val;
												var invertCt = false;
												if(_deviceId && usedObjects[_deviceId] && typeof usedObjects[_deviceId].native != udef && typeof usedObjects[_deviceId].native.invertCt != udef && usedObjects[_deviceId].native.invertCt == "true") invertCt = !invertCt;
												var rgb = colorTemperatureToRGB(ct, ctMin, ctMax, invertCt);
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceInfoAIcon").show()
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceInfoATextCt").show().css("background-color", "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")");
											} 
										};
										if (_linkedCtId) viewUpdateFunctions[_linkedCtId].push(updateFunction);
									}
									if (deviceLinkedStateIds["ALTERNATIVE_COLORSPACE_VALUE"]){
										var updateFunction = function(callingStateId){ //ConvertToAlternativeColorspace
											if (states[_linkedAlternativeColorspaceValueId] && states[callingStateId] && typeof states[callingStateId].val !== udef && states[callingStateId].val !== ""){
												var ack = states[callingStateId].ack;
												var alternativeColorspaceValue = convertToAlternativeColorspace(_deviceId, _linkedHueId, _linkedSaturationId, _linkedColorBrightnessId, _linkedCtId, _linkedWhiteBrightnessId, _linkedAlternativeColorspaceValueId)
												if(alternativeColorspaceValue) setState(_linkedAlternativeColorspaceValueId, _deviceId, alternativeColorspaceValue, ack);
											}
										};
										if (_linkedHueId){} viewUpdateFunctions[_linkedHueId].push(updateFunction);
										if (_linkedSaturationId){} viewUpdateFunctions[_linkedSaturationId].push(updateFunction);
										if (_linkedColorBrightnessId){} viewUpdateFunctions[_linkedColorBrightnessId].push(updateFunction);
										if (_linkedCtId){} viewUpdateFunctions[_linkedCtId].push(updateFunction);
										if (_linkedWhiteBrightnessId){} viewUpdateFunctions[_linkedWhiteBrightnessId].push(updateFunction);
										var updateFunction = function(){ //ConvertFromAlternativeColorspace
											if (states[_linkedAlternativeColorspaceValueId]){
												var ack = states[_linkedAlternativeColorspaceValueId];
												var result = convertFromAlternativeColorspace(_deviceId, _linkedAlternativeColorspaceValueId, _linkedHueId, _linkedSaturationId, _linkedColorBrightnessId, _linkedCtId, _linkedWhiteBrightnessId);
												if(typeof usedObjects[_linkedAlternativeColorspaceValueId] == udef) usedObjects[_linkedAlternativeColorspaceValueId] = {};
												usedObjects[_linkedAlternativeColorspaceValueId].result = {};
												//To avoid a converting-loop by rounding-differences the state is only updated, if difference between old an new value is > 1
												if(result.hue != null){
													if(_linkedHueId && _linkedHueId != "" && Math.abs(states[_linkedHueId].val - result.hue) > 1) setState(_linkedHueId, _deviceId, result.hue, ack, null, 100);
												} 
												if(result.saturation != null){
												if(_linkedSaturationId && _linkedSaturationId != "" && Math.abs(states[_linkedSaturationId].val - result.saturation) > 1) setState(_linkedSaturationId, _deviceId, result.saturation, ack, null, 100);
												} 
												if(result.colorBrightness != null){
													if(_linkedColorBrightnessId && _linkedColorBrightnessId != "" && Math.abs(states[_linkedColorBrightnessId].val - result.colorBrightness) > 1) setState(_linkedColorBrightnessId, _deviceId, result.colorBrightness, ack, null, 100);
												} 
												if(result.ct != null){
													if(_linkedCtId && _linkedCtId != "" && Math.abs(states[_linkedCtId].val - result.ct) > 1) setState(_linkedCtId, _deviceId, result.ct, ack, null, 100);
												} 
												if(result.whiteBrightness != null){
													if(_linkedWhiteBrightnessId && _linkedWhiteBrightnessId != "" && Math.abs(states[_linkedWhiteBrightnessId].val - result.whiteBrightness) > 1) setState(_linkedWhiteBrightnessId, _deviceId, result.whiteBrightness, ack, null, 100);
												} 
											}
										};
										if (_linkedAlternativeColorspaceValueId) viewUpdateFunctions[_linkedAlternativeColorspaceValueId].push(updateFunction);
									}
								})(); //<--End Closure
							}
							break;

							default:
							//Do nothing
						}
						//--Info B
						switch(usedObjects[deviceId].common.role){
							case "iQontrolThermostat": case "iQontrolHomematicThermostat": case "iQontrolTemperature": case "iQontrolHumidity":
							if (deviceLinkedStateIds["HUMIDITY"]) {
								deviceContent += "<image class='iQontrolDeviceInfoBIcon' data-iQontrol-Device-ID='" + deviceId + "' src='./images/humidity.png' style='display:none;'>";
								deviceContent += "<div class='iQontrolDeviceInfoBText' data-iQontrol-Device-ID='" + deviceId + "'></div>";
								(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
									var _deviceId = deviceId;
									var _linkedHumidityId = deviceLinkedStateIds["HUMIDITY"];
									viewUpdateFunctions[_linkedHumidityId].push(function(){
										var stateHumidity = getStateObject(_linkedHumidityId);
										if (stateHumidity && typeof stateHumidity.val !== udef){
											var val = stateHumidity.plainText;
											var unit = stateHumidity.unit;
											if (!isNaN(val)) val = Math.round(val * 10) / 10;
											if (stateHumidity.plainText == stateHumidity.val) val = val + unit;
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceInfoBIcon").show();
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceInfoBText").html(val);
										} else {
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceInfoBIcon").hide();
										}
									});
								})(); //<--End Closure
							}
							break;

							case "iQontrolSwitch": case "iQontrolFan": case "iQontrolLight": case "iQontrolBattery":
							if (deviceLinkedStateIds["POWER"]) {
								deviceContent += "<image class='iQontrolDeviceInfoBIcon' data-iQontrol-Device-ID='" + deviceId + "' src='./images/power.png' style='display:none;'>";
								deviceContent += "<div class='iQontrolDeviceInfoBText' data-iQontrol-Device-ID='" + deviceId + "'></div>";
								(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
									var _deviceId = deviceId;
									var _linkedPowerId = deviceLinkedStateIds["POWER"];
									viewUpdateFunctions[_linkedPowerId].push(function(){
										var statePower = getStateObject(_linkedPowerId);
										if (statePower && typeof statePower.val !== udef){
											var val = statePower.plainText;
											var unit = statePower.unit;
											if (!isNaN(val)) val = Math.round(val * 10) / 10;
											if (statePower.plainText == statePower.val) val = val + unit;
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceInfoBIcon").show();
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceInfoBText").html(val);
										} else {
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceInfoBIcon").hide();
										}
									});
								})(); //<--End Closure
							}
							break;

							default:
							//Do nothing
						}
						//--Name
						deviceContent += "<div class='iQontrolDeviceName' data-iQontrol-Device-ID='" + deviceId + "'>";
							var hideDeviceName = (typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.hideDeviceName != udef && usedObjects[deviceId].native.hideDeviceName == "true");
							if (!hideDeviceName){
								deviceContent += usedObjects[deviceId].common.name;
							}
						deviceContent += "</div>";
						//--State
						deviceContent += "<div class='iQontrolDeviceState' data-iQontrol-Device-ID='" + deviceId + "'>";
							switch(usedObjects[deviceId].common.role){
								case "iQontrolView": case "iQontrolButton":
								//Do nothing
								break;

								case "iQontrolProgram":
								if (deviceLinkedStateIds["STATE"]){
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										var _deviceId = deviceId;
										var _linkedStateId = deviceLinkedStateIds["STATE"];
										var updateFunction = function(){
											var state = getStateObject(_linkedStateId);
										};
										viewUpdateFunctions[_linkedStateId].push(updateFunction);
									})(); //<--End Closure
								}
								break;

								case "iQontrolScene":
								if (deviceLinkedStateIds["STATE"]){
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										var _deviceId = deviceId;
										var _linkedStateId = deviceLinkedStateIds["STATE"];
										var updateFunction = function(){
											var state = getStateObject(_linkedStateId);
											if(state && typeof state.val !== udef && state.val !== "false" && state.val !== false && state.val !== 0 && state.val !== "" && state.val !== -1) {
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.on").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.off").removeClass("active");
											} else {
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.off").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.on").removeClass("active");
											}
										};
										viewUpdateFunctions[_linkedStateId].push(updateFunction);
									})(); //<--End Closure
								}
								break;

								case "iQontrolThermostat": case "iQontrolHomematicThermostat":
								if (deviceLinkedStateIds["SET_TEMPERATURE"] || deviceLinkedStateIds["CONTROL_MODE"]){
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										var _deviceId = deviceId;
										var _linkedSetTemperatureId = deviceLinkedStateIds["SET_TEMPERATURE"];
										var _linkedControlModeId = deviceLinkedStateIds["CONTROL_MODE"];
										var _linkedPartyTemperatureId = deviceLinkedStateIds["PARTY_TEMPERATURE"];
										var _linkedWindowOpenReportingId = deviceLinkedStateIds["WINDOW_OPEN_REPORTING"];
										var updateFunction = function(){
											var stateSetTemperature = getStateObject(_linkedSetTemperatureId); 
											var min = stateSetTemperature && stateSetTemperature.min || 0;
											var max = stateSetTemperature && stateSetTemperature.max || 100;
											var val = stateSetTemperature && stateSetTemperature.val || "";
											var unit = stateSetTemperature && stateSetTemperature.unit || "";
											var mode = "";
											var modeText = "";
											var controlModeDisabledValue = (_deviceId && usedObjects[_deviceId] && typeof usedObjects[_deviceId].native != udef && typeof usedObjects[_deviceId].native.controlModeDisabledValue != udef && usedObjects[_deviceId].native.controlModeDisabledValue) || "";
											if (typeof _linkedControlModeId !== udef) {
												var state = getStateObject(_linkedControlModeId);
												if(typeof state !== udef) {
													mode = state;
													modeText = state.plainText;
												}
											}
											if (val !== "") modeText = "<span class='small'>&nbsp;" + modeText + "</span>";
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceState").html(val + unit + modeText);
											if (typeof _linkedPartyTemperatureId !== udef && typeof states[_linkedPartyTemperatureId] !== udef && typeof states[_linkedPartyTemperatureId].val !== udef && states[_linkedPartyTemperatureId].val >= 6) $("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceState").append("&nbsp;<image src='./images/party.png' style='width:12px; height:12px;' />");
											if (typeof _linkedWindowOpenReportingId !== udef && typeof states[_linkedWindowOpenReportingId] !== udef && typeof states[_linkedWindowOpenReportingId] !== udef && states[_linkedWindowOpenReportingId]) $("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceState").append("&nbsp;<image src='./images/wot.png' style='width:12px; height:12px;' />");
											if ((mode !== "" && controlModeDisabledValue !== "" && mode == controlModeDisabledValue) || (val !== "" && (val <= min || val >= max))) {
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").removeClass("active");
											} else {
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").addClass("active");
											}
										};
										viewUpdateFunctions[_linkedSetTemperatureId].push(updateFunction);
										if (typeof _linkedControlModeId !== udef) viewUpdateFunctions[_linkedControlModeId].push(updateFunction);
										if (typeof _linkedPartyTemperatureId !== udef) viewUpdateFunctions[_linkedPartyTemperatureId].push(updateFunction);
										if (typeof _linkedWindowOpenReportingId !== udef) viewUpdateFunctions[_linkedWindowOpenReportingId].push(updateFunction);
									})(); //<--End Closure
								}
								break;

								case "iQontrolDoor": case "iQontrolGarageDoor": case "iQontrolWindow":
								if (deviceLinkedStateIds["STATE"]){
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										var _deviceId = deviceId;
										var _linkedStateId = deviceLinkedStateIds["STATE"];
										var updateFunction = function(){
											var state = getStateObject(_linkedStateId);
											var resultText;
											if(state && typeof state.plainText == 'number'){		//STATE = number
												result = state.val;
												resultText = result + state.unit;
											} else if(state){ 										//STATE = bool or text
												result = state.val;
												if(typeof state.val == 'boolean') {					//STATE = bool -> force to opened or closed
													if (result) {
														resultText = _("opened");
													} else {
														resultText = _("closed");
													}
												} else {											//STATE = text
													resultText = state.plainText;
												}
											}
											resultText = unescape(resultText);
											if (typeof result !== udef) $("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceState").html(resultText);
											if (typeof result == udef || result == 0) {
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.off").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.on").removeClass("active");
											} else {
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.on").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.off").removeClass("active");
											}
										};
										if(_linkedStateId) viewUpdateFunctions[_linkedStateId].push(updateFunction);
									})(); //<--End Closure
								}
								break;

								case "iQontrolDoorWithLock":
								if (deviceLinkedStateIds["STATE"] || deviceLinkedStateIds["LOCK_STATE"]){
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										var _deviceId = deviceId;
										var _linkedStateId = deviceLinkedStateIds["STATE"];
										var _linkedLockStateId = deviceLinkedStateIds["LOCK_STATE"];
										var _linkedLockStateUncertainId = deviceLinkedStateIds["LOCK_STATE_UNCERTAIN"];
										var _linkedLockOpenId = deviceLinkedStateIds["LOCK_OPEN"];
										var updateFunction = function(){
											var state = getStateObject(_linkedStateId);
											var lockState = getStateObject(_linkedLockStateId);
											var lockStateUncertain = getStateObject(_linkedLockStateUncertainId);
											var resultText = "";
											if(state && typeof state.val !== udef && state.val){ //Opened
												resultText = _("opened");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.on").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.off").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.locked").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.unlocked").removeClass("active");
											} else if(lockState && typeof lockState.val !== udef && lockState.val){ //Closed, but unlocked
												resultText = _("unlocked");
												if(lockStateUncertain && typeof lockStateUncertain.val !== udef && lockStateUncertain.val) resultText = "<i>" + resultText + "<i>";
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.on").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.off").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.locked").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.unlocked").addClass("active");
											} else { //Locked
												resultText = _("locked");
												if(lockStateUncertain && typeof lockStateUncertain.val !== udef && lockStateUncertain.val) resultText = "<i>" + resultText + "</i>";
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.on").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.off").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.locked").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.unlocked").removeClass("active");
											}
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceState").html(resultText);
										};
										if(_linkedStateId) viewUpdateFunctions[_linkedStateId].push(updateFunction);
										if(_linkedLockStateId) viewUpdateFunctions[_linkedLockStateId].push(updateFunction);
										if(_linkedLockStateUncertainId) viewUpdateFunctions[_linkedLockStateUncertainId].push(updateFunction);
									})(); //<--End Closure
								}
								break;

								case "iQontrolBlind":
								if (deviceLinkedStateIds["LEVEL"] || deviceLinkedStateIds["DIRECTION"]){
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										var _deviceId = deviceId;
										var _linkedLevelId = deviceLinkedStateIds["LEVEL"];
										var _linkedDirectionId = deviceLinkedStateIds["DIRECTION"];
										var updateFunction = function(){
											var level = getStateObject(_linkedLevelId);
											var min = level.min || 0;
											var max = level.max || 100;
											var val = level.val;
											var invertActuatorLevel = false;
											if(_deviceId && usedObjects[_deviceId] && typeof usedObjects[_deviceId].native != udef && typeof usedObjects[_deviceId].native.invertActuatorLevel != udef && usedObjects[_deviceId].native.invertActuatorLevel == "true") invertActuatorLevel = !invertActuatorLevel;
											if(invertActuatorLevel){ // 0 = open
												val = max - (level.val - min);
											}
											var direction = getStateObject(_linkedDirectionId);
											var directionOpeningValue = (_deviceId && usedObjects[_deviceId] && typeof usedObjects[_deviceId].native != udef && typeof usedObjects[_deviceId].native.directionOpeningValue != udef && usedObjects[_deviceId].native.directionOpeningValue) || 1;
											var directionClosingValue = (_deviceId && usedObjects[_deviceId] && typeof usedObjects[_deviceId].native != udef && typeof usedObjects[_deviceId].native.directionClosingValue != udef && usedObjects[_deviceId].native.directionClosingValue) || 2;
											var directionUncertainValue = (_deviceId && usedObjects[_deviceId] && typeof usedObjects[_deviceId].native != udef && typeof usedObjects[_deviceId].native.directionUncertainValue != udef && usedObjects[_deviceId].native.directionUncertainValue) || 3;
											var resultText = "";
											if(level && typeof level.val !== udef && val == min){ //Closed
												resultText = _("closed");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.on").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.off").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.middle").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.opening").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.closing").removeClass("active");
											} else if(level && typeof level.val !== udef && val == max){ //Opened
												resultText = _("opened");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.on").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.off").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.middle").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.opening").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.closing").removeClass("active");
											} else if(direction && typeof direction.val !== udef && direction.val.toString() == directionOpeningValue.toString()){ //Middle, but opening
												resultText = _("opening");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.on").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.off").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.middle").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.opening").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.closing").removeClass("active");
											} else if(direction && typeof direction.val !== udef && direction.val.toString() == directionClosingValue.toString()){ //Middle, but closing
												resultText = _("closing");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.on").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.off").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.middle").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.opening").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.closing").addClass("active");
											} else { //Middle with no movement
												if(level && typeof level.val !== udef) resultText = level.val + level.unit;
												if(direction && typeof direction.val !== udef && direction.val.toString() == directionUncertainValue.toString()) resultText = "<i>" + resultText + "</i>";
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.on").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.off").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.middle").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.opening").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.closing").removeClass("active");
											}
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceState").html(resultText);
										};
										if(_linkedLevelId) viewUpdateFunctions[_linkedLevelId].push(updateFunction);
										if(_linkedDirectionId) viewUpdateFunctions[_linkedDirectionId].push(updateFunction);
									})(); //<--End Closure
								}
								break;
								
								case "iQontrolAlarm":
								if (deviceLinkedStateIds["STATE"] || deviceLinkedStateIds["CONTROL_MODE"]){
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										var _deviceId = deviceId;
										var _linkedStateId = deviceLinkedStateIds["STATE"];
										var _linkedControlModeId = deviceLinkedStateIds["CONTROL_MODE"];
										var updateFunction = function(){
											var state = getStateObject(_linkedStateId);
											var controlMode = getStateObject(_linkedControlModeId);
											var controlModeDisarmedValue = (_deviceId && usedObjects[_deviceId] && typeof usedObjects[_deviceId].native != udef && typeof usedObjects[_deviceId].native.controlModeDisarmedValue != udef && usedObjects[_deviceId].native.controlModeDisarmedValue) || 0;
											var resultText = "";
											if(state && typeof state.val !== udef && state.val != 0){ //Triggered
												resultText = state.plainText;
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.on").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.armed").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.off").removeClass("active");											
											} else { //Not triggered (or STATE not defined)
												if(controlMode && typeof controlMode.val != udef && controlMode.val != controlModeDisarmedValue){ //Armed
													$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").addClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.on").removeClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.armed").addClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.off").removeClass("active");											
												} else { //Disarmed (or CONTROL_MODE not defined)
													$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").removeClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.on").removeClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.armed").removeClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.off").addClass("active");											
												}
											}
											if(controlMode && controlMode.plainText){
												if(resultText == ""){
													resultText = controlMode.plainText;
												} else {
													resultText += ", " + controlMode.plainText;
												}
											}
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceState").html(resultText);
										};
										if(_linkedStateId) viewUpdateFunctions[_linkedStateId].push(updateFunction);
										if(_linkedControlModeId) viewUpdateFunctions[_linkedControlModeId].push(updateFunction);
									})(); //<--End Closure
								}
								break;

								case "iQontrolBattery":
								if (deviceLinkedStateIds["STATE"] || deviceLinkedStateIds['CHARGING']){
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										var _deviceId = deviceId;
										var _linkedStateId = deviceLinkedStateIds["STATE"];
										var _linkedChargingId = deviceLinkedStateIds["CHARGING"];
										var updateFunction = function(){
											var state = getStateObject(_linkedStateId);
											var charging = getStateObject(_linkedChargingId);
											var result;
											var resultText;
											var min =  state.min || 0;
											var max =  state.max || 100;
											if(state && typeof state.val !== udef && state.val == min){ //Empty
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.full").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged75").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged50").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged25").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged10").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.empty").addClass("active");
											} else if(state && typeof state.val !== udef && state.val <= (min + ((max-min) * 0.10))){ //<10%
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.full").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged75").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged50").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged25").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged10").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.empty").removeClass("active");
											} else if(state && typeof state.val !== udef && state.val <= (min + ((max-min) * 0.25))){ //<25%
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.full").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged75").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged50").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged25").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged10").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.empty").removeClass("active");
											} else if(state && typeof state.val !== udef && state.val <= (min + ((max-min) * 0.50))){ //<50%
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.full").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged75").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged50").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged25").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged10").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.empty").removeClass("active");
											} else if(state && typeof state.val !== udef && state.val <= (min + ((max-min) * 0.75))){ //<75%
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.full").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged75").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged50").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged25").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged10").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.empty").removeClass("active");
											} else if(state && typeof state.val !== udef){ //>75%
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.full").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged75").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged50").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged25").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charged10").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.empty").removeClass("active");
											}
											if(state && typeof state.plainText == 'number'){
												result = state.val;
												resultText = result + state.unit;
											} else if(state){
												result = state.val;
												resultText = state.plainText;
											}
											$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceState").html(resultText);
											if(charging && typeof charging.val !== udef && charging.val){ //Empty
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charging").addClass("active");
											} else {
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.charging").removeClass("active");
											}
										};
										if(_linkedStateId) viewUpdateFunctions[_linkedStateId].push(updateFunction);
										if(_linkedChargingId) viewUpdateFunctions[_linkedChargingId].push(updateFunction);
									})(); //<--End Closure
								}
								break;

								default:
								var stateId = deviceId + ".STATE";
								if (deviceLinkedStateIds["STATE"] || deviceLinkedStateIds["LEVEL"]){
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										var _deviceId = deviceId;
										var _linkedStateId = deviceLinkedStateIds["STATE"];
										var _linkedLevelId = deviceLinkedStateIds["LEVEL"];
										var updateFunction = function(){
											var state = getStateObject(_linkedStateId);
											var level = getStateObject(_linkedLevelId);
											var result;
											var resultText;
											if(!level || typeof level == udef || typeof level.val == udef){
												if(state && typeof state.plainText == 'number'){							//STATE = number (= level); LEVEL = nothing
													result = state.val;
													resultText = result + state.unit;
												} else if(state){ 															//STATE = bool or text; LEVEL = nothing
													result = state.val;
													resultText = state.plainText;
												}
											} else {
												if(state && typeof state.val !== udef && typeof state.val !== 'string'){ 	//STATE = bool (or level - but that makes no sense); LEVEL = level
													result = state.val * level.val;
													resultText = result + level.unit;
												} else if(level) {															//STATE = undefined (or string - but that makes no sense); LEVEL = level
													result = level.val;
													resultText = result + level.unit;
												}
											}
											if(resultText == "0%") resultText = _("off");
											resultText = unescape(resultText);
											if (typeof result !== udef) $("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceState").html(resultText);
											if (result == 0) {
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.off").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.on").removeClass("active");
											} else {
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.on").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceId + "'].iQontrolDeviceIcon.off").removeClass("active");
											}
										};
										if(_linkedStateId) viewUpdateFunctions[_linkedStateId].push(updateFunction);
										if(_linkedLevelId) viewUpdateFunctions[_linkedLevelId].push(updateFunction);
									})(); //<--End Closure
								}
							}
						deviceContent += "</div>";
					if (usedObjects[deviceId].common.role == "iQontrolExternalLink" && deviceLinkedStateIds["URL"]) { //.iQontrolDeviceLink was an external link and therefore an <a>
						deviceContent += "</a>";
					} else { //.iQontrolDeviceLink was not an external link and therefore a <div>
						deviceContent += "</div>";
					}
					if(updateOnly) $("[data-iQontrol-Device-ID='" + deviceId + "'].iQontrolDevice").html(deviceContent);
				viewContent += deviceContent + "</div>";
			viewContent += "</div>";
			if(usedObjects[deviceId].native.iQontrolNextLine) viewContent += "<br>";
		}
		if(!updateOnly){
			$("#ViewHeaderTitle").html(usedObjects[id].common.name);
			$("#ViewContent").html(viewContent + "<br><br>");
			resizeDevicesToFitScreen();
			removeDuplicates(viewStateIdsToFetch);
			if(viewStateIdsToFetch.length > 0) fetchStates(viewStateIdsToFetch, function(error){
				if(!error) {
					console.log(viewStateIdsToFetch.length + " states fetched while rendering view. Updating view.");
					renderView(actualViewId, "updateOnlyAfterFetchingStatesWhileRenderingView");
				} else {
					console.log("ERROR fetching states while rendering view.");
				}
			});
		}
		deviceLinkedStateIdsToUpdate = removeDuplicates(deviceLinkedStateIdsToUpdate);
		if(updateOnly || (!updateOnly && viewStateIdsToFetch.length == 0)) { //Do this only one time - when there where no states to fetch, or when they have been fetched and therefore the "updateOnly"-flag is set
			fetchStates(deviceLinkedStateIdsToUpdate, function(){
				for (var i = 0; i < deviceLinkedStateIdsToUpdate.length; i++){
					updateState(deviceLinkedStateIdsToUpdate[i], "ignorePreventUpdateForDialog");
				}
				deviceLinkedStateIdsToUpdate = [];
				applyMarqueeObserver();
				applyViewPressureMenu();
				setTimeout(function(){ if($('#Toolbar').hasClass('ui-fixed-hidden')) $('#Toolbar').toolbar('show'); }, 200);
			});
		}
		if (callback) callback();
	});
}

function applyMarqueeObserver(){
	console.log("Starting marquee observer");
	if(marqueeObserver){
		marqueeObserver.disconnect();
	} else {
		marqueeObserver = new MutationObserver(function(mutationList){
			if (typeof mutationList[0] == udef || typeof mutationList[0].addedNodes[0] == udef || typeof mutationList[0].addedNodes[0].className == udef || mutationList[0].addedNodes[0].className != "js-marquee"){ //check if the mutation is fired by marquee itself
				startMarqueeOnOverflow($(mutationList[0].target));
			}
		});
	}
	if (!options.LayoutViewMarqueeDisabled ){
		$('.iQontrolDeviceState, .iQontrolDeviceInfoAText, .iQontrolDeviceInfoBText').each(function(){
			marqueeObserver.observe(this, {attributes: false, childList: true, subtree: false});
			startMarqueeOnOverflow($(this));
		});
		if(options.LayoutViewMarqueeNamesEnabled){
			$('.iQontrolDeviceName').each(function(){
				marqueeObserver.observe(this, {attributes: false, childList: true, subtree: false});
				startMarqueeOnOverflow($(this));
			});
		}
	}
}

function startMarqueeOnOverflow(element){
	if (element[0].scrollHeight > element.innerHeight() || element[0].scrollWidth > element.innerWidth()) { //element has overflowing content
		console.log("Starting marquee");
		element.marquee({
			speed: (options.LayoutViewMarqueeSpeed || "40"),
			gap: 40,
			delayBeforeStart: 2000,
			direction: 'left',
			duplicated: true,
			pauseOnHover: true,
			startVisible: true
		});
	}
}

function applyViewPressureMenu(){
	$('.iQontrolDeviceLink').off('click').on('click', function(event){
		console.log("CLICK");
		if (!viewPressureMenuIgnoreClick){
			viewPressureMenuIgnorePressure = true;
			var onclick = $(this).data('onclick');
			var that = this;
			if (onclick) new Function('that', onclick)(that);
		} else {
			console.log("CLICK ignored");
		}
	});
	$('.iQontrolDeviceLinkToToggle').off('click').on('click', function(event){
		console.log("CLICK TOGGLE");
		event.stopPropagation();
		viewPressureMenuIgnorePressure = true;
	});
	$('.iQontrolDeviceLink').pressure({
		start: function(event){	// this is called on force start
			console.log("PRESSURE start");
			$('.iQontrolDevicePressureIndicator').css('box-shadow', '0px 0px 0px 0px rgba(175,175,175,0.85)');
			viewPressureMenuForceOld[this] = 0;
			viewPressureMenuIgnorePressure = false;
			viewPressureMenuIgnoreClick = false;
		},
		startDeepPress: function(event){ // this is called on "force click" / "deep press", aka once the force is greater than 0.5
			//console.log("PRESSURE startDeepPress");
			//-- do nothing --
		},
		endDeepPress: function(){ // this is called when the "force click" / "deep press" end
			//console.log("PRESSURE endDeepPress");
			//-- do nothing --
		},
		end: function(){ // this is called on force end
			//console.log("PRESSURE end");
			//-- do nothing --
			//(This event is handeled via touchend-event seperately, because since iOS 13 the pressure end event is not called properly any more)
		},
		change: function(force, event){	// this is called every time there is a change in pressure, 'force' is a value ranging from 0 to 1
			var forceOld = viewPressureMenuForceOld[this] || 0;
			console.log("	PRESSURE change " + force + "|" + forceOld);
			if (viewPressureMenuIgnorePressure || viewPressureMenuFallbackTimer) {
				console.log("	PRESSURE change ignore");
				return;
			}
			if (force > 0 && force < 1 && forceOld == 0){ //Pressure change start
				//console.log("PRESSURE change start");
				//-- do nothing --
			} else if (force >= 1 && forceOld == 0){ //Pressure change start FALLBACK (direct jump of force from 0 to 1 on some devices)
				console.log("PRESSURE change start FALLBACK");
				if (viewPressureMenuFallbackTimer) {
					clearInterval(viewPressureMenuFallbackTimer);
					viewPressureMenuFallbackTimer = false;
					viewPressureMenuFallbackForce = 0;
				}
				var that = this;
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					var _that = that;
					var _event = event;
					viewPressureMenuFallbackTimer = setInterval(function(){
						console.log("PRESSURE Fallback: " + viewPressureMenuFallbackForce);
						if (viewPressureMenuIgnorePressure) {
							console.log("	PRESSURE Fallback change ignore");
						} else {
							if (viewPressureMenuFallbackForce >= 1){
								viewPressureMenuFallbackForce = 1;
							} else {
								viewPressureMenuFallbackForce += 0.1;
							}
							viewPressureMenuChange(viewPressureMenuFallbackForce, _event, _that);
						}
						viewPressureMenuForceOld[_that] = viewPressureMenuFallbackForce;
					}, 50);
				})(); //<--End Closure
			} else { //Pressure change
				viewPressureMenuChange(force, event, this);
			}
			viewPressureMenuForceOld[this] = force;
		},
		unsupported: function(){ // this is called once there is a touch on the element and the device or browser does not support Force or 3D touch - NOTE: this is only called if the polyfill option is disabled!
		}
	},{
		polyfill: true,
		polyfillSpeedUp: 500,
		polyfillSpeedDown: 50,
		preventSelect: true,
		only: null
	});
	$('.iQontrolDeviceLink').on('touchend mouseup', function(){ //Fallback for iOS 13: pressure end-event is not called properly
		viewPressureMenuIgnorePressure = true;
		console.log("PRESSURE end via TOUCHEND/MOUSEUP");
		$('.iQontrolDevicePressureIndicator').css('box-shadow', '0px 0px 0px 0px rgba(175,175,175,0.85)');
		if (viewPressureMenuFallbackTimer) {
			clearInterval(viewPressureMenuFallbackTimer);
			viewPressureMenuFallbackTimer = false;
			viewPressureMenuFallbackForce = 0;
		}
		setTimeout(function(){
			viewPressureMenuIgnorePressure = false;
		}, 100);
	});
}

function viewPressureMenuChange(force, event, that){
	if (force > 0.5 && !viewPressureMenuIgnoreClick){ //Pressure changeFunction startDeepPress
		console.log("PRESSURE changeFunction startDeepPress");
		viewPressureMenuIgnoreClick = true;
	}
	if (force >= 1 && viewPressureMenuForceOld[that] < 1){ //Pressure changeFunction Maximum reached
		console.log("PRESSURE changeFunction Maximum reached");
		viewPressureMenuIgnorePressure = true;
		event.preventDefault();
		event.stopPropagation();
		openViewPressureMenu($(that).data('iqontrol-device-id'), that);
		$('.iQontrolDevicePressureIndicator').css('box-shadow', '0px 0px 0px 0px rgba(175,175,175,0.85)');
	} else {
		$(that).parents('.iQontrolDevicePressureIndicator').css('box-shadow', '0px 0px 0px ' + 10 * force + 'px rgba(175,175,175,0.85)');
	}
}

function openViewPressureMenu(deviceId, positionToElement){
	console.log("OpenViewPressureMenu");
	if (viewPressureMenu[deviceId]){
		$('#ViewPressureMenuList').empty();
		for (key in viewPressureMenu[deviceId]){
			var element = viewPressureMenu[deviceId][key];
			$('#ViewPressureMenuList').append('<li' + (typeof element.icon != udef ? ' data-icon="' + element.icon + '"' : '') + ' class="ui-nodisc-icon ui-alt-icon"><a href="' + (typeof element.href != udef ? element.href : '') + '" target="' + (typeof element.target != udef ? element.target : '') + '" onclick=\'' + (typeof element.onclick != udef ? element.onclick : '') + '\'>' + (typeof element.name != udef ? element.name : key) + '</a></li>');
		};
		$('#ViewPressureMenuList').listview('refresh');
		$("#ViewPressureMenu").data('closeable', 'false').popup("open", {transition: "pop", positionTo: $(positionToElement)});
	}
}

function changeViewBackground(url){
	if(!url || url == "") url = "./images/background.png";
	var isVideo = false;
	var extention = url.substring(url.lastIndexOf('.'));
	if(extention == ".avi" || extention == ".mov" || extention == ".mp4") isVideo = true;
	$.backstretch({url: url, isVideo: isVideo, loop: true, mute: true}, {fade: 300});
}

function viewSwipe(direction){
	if(direction == "right") {
		if(viewHistoryPosition > 0){
			viewHistoryPosition--;
			renderView(viewHistory[viewHistoryPosition ]);
		}
	} else if(direction == "left"){
		if(viewHistoryPosition < viewHistory.length - 1){
			viewHistoryPosition++;
			renderView(viewHistory[viewHistoryPosition]);
		}
	}
}

//++++++++++ DIALOG ++++++++++
function renderDialog(deviceId){
	if (typeof deviceId == udef || deviceId == "") return;
	actualDialogId = deviceId;
	dialogUpdateFunctions = {};
	dialogStateIdsToFetch = [];
	dialogLinkedStateIdsToUpdate = [];
	var dialogReadonly = false;
	if(deviceId && usedObjects[deviceId] && typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.readonly != udef && usedObjects[deviceId].native.readonly == "true") dialogReadonly = true;
	//Render Dialog
	var dialogContent = "";
	var dialogBindingFunctions = [];
	dialogContent += "<form class='fullWidthSlider'>";
	dialogContent += "<button style='position:fixed; top:0px; left:-100000px; opacity:0; width:0px !important; height:0px !important;'></button>"; //jQuery fix for autofocus on first input when clicking on popup
		//--Get linked States & States
		//  While getting the LinkedStateId the correspondig usedObject is also fetched
		//  If the linked State is not fetched yet, write it in to dialogStateIdsToFetch-Array - they will be fetched alltogether after rendering the dialog. Then the dialog is rendered again.
		var dialogLinkedStateIds = {};
		var dialogStates = {};
		if(usedObjects[deviceId] && typeof usedObjects[deviceId].common != udef && typeof usedObjects[deviceId].common.role != udef && iQontrolRoles[usedObjects[deviceId].common.role] && typeof iQontrolRoles[usedObjects[deviceId].common.role].states != udef){
			iQontrolRoles[usedObjects[deviceId].common.role].states.forEach(function(elementState){
				var stateId = deviceId + "." + elementState;
				var linkedStateId = getLinkedStateId(stateId);
				if (linkedStateId == null) dialogStateIdsToFetch.push(stateId);
				dialogLinkedStateIds[elementState] = linkedStateId;
				if (linkedStateId) dialogLinkedStateIdsToUpdate.push(linkedStateId);
				dialogStates[elementState] = getStateObject(linkedStateId);
			});
		}
		//--State & Level
		switch(usedObjects[deviceId].common.role){
			case "iQontrolThermostat": case "iQontrolHomematicThermostat":
			if(dialogStates["SET_TEMPERATURE"]){
				var min = dialogStates["SET_TEMPERATURE"].min || 6;
				var max = dialogStates["SET_TEMPERATURE"].max || 30;
				dialogContent += "<label for='DialogStateSlider' ><image src='./images/slider.png' / style='width:16px; height:16px;'>&nbsp;" + _("Goal-Temperature") + ":</label>";
				dialogContent += "<input type='number' data-type='range' class='iQontrolDialogSlider' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + (dialogStates["SET_TEMPERATURE"].readonly || dialogReadonly).toString() + "' data-highlight='true' data-popup-enabled='true' data-show-value='true' name='DialogStateSlider' id='DialogStateSlider' min='" + min + "' max='" + max + "' step='0.5'/>";
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					var _deviceId = deviceId;
					var _linkedSetTemperatureId = dialogLinkedStateIds["SET_TEMPERATURE"];
					var _confirm = (usedObjects[_linkedSetTemperatureId] && typeof usedObjects[_linkedSetTemperatureId].common !== udef && typeof usedObjects[_linkedSetTemperatureId].common.custom !== udef && typeof usedObjects[_linkedSetTemperatureId].common.custom[namespace] !== udef && typeof usedObjects[_linkedSetTemperatureId].common.custom[namespace].confirm !== udef && usedObjects[_linkedSetTemperatureId].common.custom[namespace].confirm == true);
					var DialogStateSliderReadoutTimer;
					var updateFunction = function(){
						var stateSetTemperature = getStateObject(_linkedSetTemperatureId);
						if (stateSetTemperature){
							$("#DialogStateSlider").val(stateSetTemperature.val);
							$("#DialogStateSlider").slider('refresh');
							dialogUpdateTimestamp(states[_linkedSetTemperatureId]);
						}
					};
					dialogUpdateFunctions[_linkedSetTemperatureId].push(updateFunction);
					var bindingFunction = function(){
						$('#DialogStateSlider').slider({
							start: function(event, ui){
								clearInterval(DialogStateSliderReadoutTimer);
								if (!_confirm){
									DialogStateSliderReadoutTimer = setInterval(function(){
										setState(_linkedSetTemperatureId, _deviceId, $("#DialogStateSlider").val() * 1);
									}, 5000);
								}
							},
							stop: function(event, ui) {
								clearInterval(DialogStateSliderReadoutTimer);
								setState(_linkedSetTemperatureId, _deviceId, $("#DialogStateSlider").val() * 1);
							}
						});
					};
					dialogBindingFunctions.push(bindingFunction);
				})(); //<--End Closure
			}
			break;

			case "iQontrolDoorWithLock":
			if(dialogStates["STATE"]){
				dialogContent += "<label for='DialogStateValue'><image src='./images/door.png' / style='width:16px; height:16px;'>&nbsp;" + _("Door") + ":</label>";
				dialogContent += "<input type='button' class='iQontrolDialogValue DialogStateValue' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='true' name='DialogStateValue' id='DialogStateValue' value='' />";
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					var _deviceId = deviceId;
					var _linkedStateId = dialogLinkedStateIds["STATE"];
					var updateFunction = function(){
						var state = getStateObject(_linkedStateId);			
						if (state){
							if(state.val) $("#DialogStateValue").val(_("opened")); else $("#DialogStateValue").val(_("closed"));
							$("#DialogStateValue").button('refresh');
							dialogUpdateTimestamp(states[_linkedStateId]);
						}
					};
					dialogUpdateFunctions[_linkedStateId].push(updateFunction);
					var bindingFunction = function(){
						$('.DialogStateValueList').on('change', function(e) {
							setState(_linkedStateId, _deviceId, $("#DialogStateValueList option:selected").val());
						});
					};
					dialogBindingFunctions.push(bindingFunction);
				})(); //<--End Closure
			}
			break;

			case "iQontrolProgram": case "iQontrolScene":
			var type = "Program";
			if (usedObjects[deviceId].common.role == "iQontrolScene") type = "Scene";
			if(dialogStates["STATE"]){
				dialogContent += "<label for='DialogStateButton' ><image src='./images/program.png' / style='width:16px; height:16px;'>&nbsp;" + _(type) + ":</label>";
				dialogContent += "<a data-role='button' data-mini='false' class='iQontrolDialogButton' data-iQontrol-Device-ID='" + deviceId + "' name='DialogStateButton' id='DialogStateButton'>" + _("execute") + "</a>";
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					var _deviceId = deviceId;
					var _linkedStateId = dialogLinkedStateIds["STATE"];
					var _closeDialogAfterExecution = (typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.closeDialogAfterExecution != udef && usedObjects[deviceId].native.closeDialogAfterExecution) || "false";
					var bindingFunction = function(){
						$('#DialogStateButton').on('click', function(e) {
							startProgram(_linkedStateId, _deviceId);
							dialogUpdateTimestamp(states[_linkedStateId]);
							if (_closeDialogAfterExecution == "true") $('#Dialog').popup('close');
						});
					};
					dialogBindingFunctions.push(bindingFunction);
				})(); //<--End Closure
			}
			break;

			case "iQontrolButton":
			var type = "Button";
			if(dialogLinkedStateIds["STATE"]){
				dialogContent += "<label for='DialogStateButton' ><image src='./images/program.png' / style='width:16px; height:16px;'>&nbsp;" + _(type) + ":</label>";
				dialogContent += "<a data-role='button' data-mini='false' class='iQontrolDialogButton' data-iQontrol-Device-ID='" + deviceId + "' name='DialogStateButton' id='DialogStateButton'>" + _("push") + "</a>";
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					var _deviceId = deviceId;
					var _linkedStateId = dialogLinkedStateIds["STATE"];
					var _linkedSetValueId = dialogLinkedStateIds["SET_VALUE"] || "";
					var _linkedOffSetValueId = dialogLinkedStateIds["OFF_SET_VALUE"] || "";
					var _returnToOffSetValueAfter = (typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.returnToOffSetValueAfter != udef && usedObjects[deviceId].native.returnToOffSetValueAfter) || "100";
					var _closeDialogAfterExecution = (typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.closeDialogAfterExecution != udef && usedObjects[deviceId].native.closeDialogAfterExecution) || "false";
					var bindingFunction = function(){
						$('#DialogStateButton').on('click', function(e) {
							startButton(_linkedStateId, _linkedSetValueId, _linkedOffSetValueId, _returnToOffSetValueAfter, _deviceId);
							dialogUpdateTimestamp(states[_linkedStateId]);
							if (_closeDialogAfterExecution == "true") $('#Dialog').popup('close');
						});
					};
					dialogBindingFunctions.push(bindingFunction);
				})(); //<--End Closure
			}
			break;

			default:
			//----State
			if(dialogStates["STATE"]){
				switch(dialogStates["STATE"].type){
					case "switch":
					var type = "Switch";
					if (usedObjects[deviceId].common.role == "iQontrolMotion") type = "Motion";
					if (usedObjects[deviceId].common.role == "iQontrolAlarm") type = "Alarm";
					dialogContent += "<label for='DialogStateSwitch' ><image src='./images/switch.png' / style='width:16px; height:16px;'>&nbsp;" + _(type) + ":</label>";
					dialogContent += "<select data-role='flipswitch' data-mini='false' class='iQontrolDialogSwitch' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + (dialogStates["STATE"].readonly || dialogReadonly).toString() + "' name='DialogStateSwitch' id='DialogStateSwitch'>";
						dialogContent += "<option value='false'>0</option>";
						dialogContent += "<option value='true'>I</option>";
					dialogContent += "</select>";
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedStateId = dialogLinkedStateIds["STATE"];
						var updateFunction = function(){
							var state = getStateObject(_linkedStateId);
							if (state){
								var index = 0;
								if(typeof state.val != udef && (state.val.toString().toLowerCase() == "true" || state.val.toString() > 0)) index = 1; else index = 0;
								$("#DialogStateSwitch")[0].selectedIndex = index;
								$("#DialogStateSwitch").flipswitch('refresh');
								dialogUpdateTimestamp(states[_linkedStateId]);
							}
						};
						dialogUpdateFunctions[_linkedStateId].push(updateFunction);
						var bindingFunction = function(){
							$('#DialogStateSwitch').on('change', function(e) {
								var newVal = $("#DialogStateSwitch option:selected").val();
								var state = getStateObject(_linkedStateId);
								if(typeof state.val == 'number'){
									if(newVal == true) newVal = 1; else newVal = 0;
								}
								setState(_linkedStateId, _deviceId, newVal);
								dialogUpdateTimestamp(states[_linkedStateId]);
							});
						};
						dialogBindingFunctions.push(bindingFunction);
					})(); //<--End Closure
					break;

					case "level":
					var min = dialogStates["STATE"].min || 0;
					var max = dialogStates["STATE"].max || 100;
					var step = "1";
					if (max - min < 100) step = "0.1";
					if (max - min < 10) step = "0.01";
					if (max - min < 1) step = "0.001";
					if(usedObjects[dialogLinkedStateIds["STATE"]] && typeof usedObjects[dialogLinkedStateIds["STATE"]].common !== udef && typeof usedObjects[dialogLinkedStateIds["STATE"]].common.custom !== udef && typeof usedObjects[dialogLinkedStateIds["STATE"]].common.custom[namespace] !== udef && typeof usedObjects[dialogLinkedStateIds["STATE"]].common.custom[namespace].step !== udef && usedObjects[dialogLinkedStateIds["STATE"]].common.custom[namespace].step !== "") step = usedObjects[dialogLinkedStateIds["STATE"]].common.custom[namespace].step.toString();
					var type = "Level";
					var sliderSendRate = 500;
					if (usedObjects[deviceId].common.role == "iQontrolLight") {
						type = "Dimmer";
					}
					if (usedObjects[deviceId].common.role == "iQontrolBlind") {
						type = "Height"; 
						sliderSendRate = 5000;
					}
					dialogContent += "<label for='DialogStateSlider' ><image src='./images/slider.png' / style='width:16px; height:16px;'>&nbsp;" + _(type) + ":</label>";
					dialogContent += "<input type='number' data-type='range' class='iQontrolDialogSlider' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + (dialogStates["STATE"].readonly || dialogReadonly).toString() + "' data-highlight='true' data-popup-enabled='true' data-show-value='true' name='DialogStateSlider' id='DialogStateSlider' min='" + min + "' max='" + max + "' step='" + step + "'/>";
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedStateId = dialogLinkedStateIds["STATE"];
						var _sliderSendRate = sliderSendRate;
						var _confirm = (usedObjects[_linkedStateId] && typeof usedObjects[_linkedStateId].common !== udef && typeof usedObjects[_linkedStateId].common.custom !== udef && typeof usedObjects[_linkedStateId].common.custom[namespace] !== udef && typeof usedObjects[_linkedStateId].common.custom[namespace].confirm !== udef && usedObjects[_linkedStateId].common.custom[namespace].confirm == true);
						var DialogStateSliderReadoutTimer;
						var updateFunction = function(){
							var state = getStateObject(_linkedStateId);
							if (state){
								$("#DialogStateSlider").val(state.val);
								$("#DialogStateSlider").slider('refresh');
								dialogUpdateTimestamp(states[_linkedStateId]);
							}
						};
						dialogUpdateFunctions[_linkedStateId].push(updateFunction);
						var bindingFunction = function(){
							$('#DialogStateSlider').slider({
								start: function(event, ui){
									clearInterval(DialogStateSliderReadoutTimer);
									if (!_confirm){
										DialogStateSliderReadoutTimer = setInterval(function(){
											setState(_linkedStateId, _deviceId, $("#DialogStateSlider").val());
											dialogUpdateTimestamp(states[_linkedStateId]);
										}, _sliderSendRate);
									}
								},
								stop: function(event, ui) {
									clearInterval(DialogStateSliderReadoutTimer);
									setState(_linkedStateId, _deviceId, $("#DialogStateSlider").val());
									dialogUpdateTimestamp(states[_linkedStateId]);
								}
							});
						};
						dialogBindingFunctions.push(bindingFunction);
					})(); //<--End Closure
					break;

					case "valueList":
					var type = "Selection";
					if (usedObjects[deviceId].common.role == "iQontrolMotion") type = "Motion";
					if (usedObjects[deviceId].common.role == "iQontrolAlarm") type = "Alarm";
					dialogContent += "<label for='DialogStateValueList' ><image src='./images/variable.png' / style='width:16px; height:16px;'>&nbsp;" + _(type) + ":</label>";
					dialogContent += "<select  class='iQontrolDialogValueList DialogStateValueList' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + (dialogStates["STATE"].readonly || dialogReadonly).toString() + "' name='DialogStateValueList' id='DialogStateValueList' data-native-menu='false'>";
					for(val in dialogStates["STATE"].valueList){
							dialogContent += "<option value='" + val + "'>" + _(dialogStates["STATE"].valueList[val]) + "</option>";
						}
					dialogContent += "</select>";
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedStateId = dialogLinkedStateIds["STATE"];
						var updateFunction = function(){
							var state = getStateObject(_linkedStateId);
							if (state){
								if(typeof state.val != udef) {
									var val = state.val.toString();
									$("#DialogStateValueList").val(val);
								}
								$("#DialogStateValueList").selectmenu('refresh');
								dialogUpdateTimestamp(states[_linkedStateId]);
							}
						};
						dialogUpdateFunctions[_linkedStateId].push(updateFunction);
						var bindingFunction = function(){
							$('.DialogStateValueList').on('change', function(e) {
								setState(_linkedStateId, _deviceId, $("#DialogStateValueList option:selected").val());
								dialogUpdateTimestamp(states[_linkedStateId]);
							});
						};
						dialogBindingFunctions.push(bindingFunction);
					})(); //<--End Closure
					break;

					case "string":
					dialogContent += "<label for='DialogStateString' ><image src='./images/variable.png' / style='width:16px; height:16px;'>&nbsp;" + _("Text") + ":</label>";
					dialogContent += "<textarea class='iQontrolDialogString State' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + (dialogStates["STATE"].readonly || dialogReadonly).toString() + "' name='DialogStateString' id='DialogStateString'></textarea>";
					if (!dialogStates["STATE"].readonly && !dialogReadonly) {
						dialogContent += "<a data-role='button' data-mini='false' class='iQontrolDialogButton' data-iQontrol-Device-ID='" + deviceId + "' name='DialogStateStringSubmit' id='DialogStateStringSubmit'>" + _("Submit") + "</a>";
					}
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedStateId = dialogLinkedStateIds["STATE"];
						var updateFunction = function(){
							var state = getStateObject(_linkedStateId);
							if (state){
								$("#DialogStateString").val(state.val);
								$("#DialogStateString").textinput('refresh');
								dialogUpdateTimestamp(states[_linkedStateId]);
							}
						};
						dialogUpdateFunctions[_linkedStateId].push(updateFunction);
						var bindingFunction = function(){
							$('#DialogStateStringSubmit').on('click', function(e) {
								setState(_linkedStateId, _deviceId, $("#DialogStateString").val(), true);
								dialogUpdateTimestamp(states[_linkedStateId]);
							});
						};
						dialogBindingFunctions.push(bindingFunction);
					})(); //<--End Closure
					break;
				}
			}
			//----Level
			if(dialogStates["LEVEL"]){
				if(dialogStates["LEVEL"].type == "level"){
					var min = dialogStates["LEVEL"].min || 0;
					var max = dialogStates["LEVEL"].max || 100;
					var step = "1";
					if (max - min < 100) step = "0.1";
					if (max - min < 10) step = "0.01";
					if (max - min < 1) step = "0.001";
					if(usedObjects[dialogLinkedStateIds["LEVEL"]] && typeof usedObjects[dialogLinkedStateIds["LEVEL"]].common !== udef && typeof usedObjects[dialogLinkedStateIds["LEVEL"]].common.custom !== udef && typeof usedObjects[dialogLinkedStateIds["LEVEL"]].common.custom[namespace] !== udef && typeof usedObjects[dialogLinkedStateIds["LEVEL"]].common.custom[namespace].step !== udef && usedObjects[dialogLinkedStateIds["LEVEL"]].common.custom[namespace].step !== "") step = usedObjects[dialogLinkedStateIds["LEVEL"]].common.custom[namespace].step.toString();
					var type = "Level";
					var sliderSendRate = 500;
					if (usedObjects[deviceId].common.role == "iQontrolLight") { 
						type = "Dimmer";
					}
					if (usedObjects[deviceId].common.role == "iQontrolBlind") {
						type = "Height";
						sliderSendRate = 5000;
					}
					dialogContent += "<label for='DialogLevelSlider' ><image src='./images/slider.png' / style='width:16px; height:16px;'>&nbsp;" + _(type) + ":</label>";
					dialogContent += "<input type='number' data-type='range' class='iQontrolDialogSlider' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + (dialogStates["LEVEL"].readonly || dialogReadonly).toString() + "' data-highlight='true' data-popup-enabled='true' data-show-value='true' name='DialogLevelSlider' id='DialogLevelSlider' min='" + min + "' max='" + max + "' step='" + step + "'/>";
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedLevelId = dialogLinkedStateIds["LEVEL"];
						var _sliderSendRate = sliderSendRate;
						var _confirm = (usedObjects[_linkedLevelId] && typeof usedObjects[_linkedLevelId].common !== udef && typeof usedObjects[_linkedLevelId].common.custom !== udef && typeof usedObjects[_linkedLevelId].common.custom[namespace] !== udef && typeof usedObjects[_linkedLevelId].common.custom[namespace].confirm !== udef && usedObjects[_linkedLevelId].common.custom[namespace].confirm == true);
						var DialogLevelSliderReadoutTimer;
						var updateFunction = function(){
							var stateLevel = getStateObject(_linkedLevelId);
							if (stateLevel){
								$("#DialogLevelSlider").val(stateLevel.val);
								$("#DialogLevelSlider").slider('refresh');
								dialogUpdateTimestamp(states[_linkedLevelId]);
							}
						};
						dialogUpdateFunctions[_linkedLevelId].push(updateFunction);
						var bindingFunction = function(){
							$('#DialogLevelSlider').slider({
								start: function(event, ui){
									clearInterval(DialogLevelSliderReadoutTimer);
									if (!_confirm) {
										DialogLevelSliderReadoutTimer = setInterval(function(){
											setState(_linkedLevelId, _deviceId, $("#DialogLevelSlider").val());
											dialogUpdateTimestamp(states[_linkedLevelId]);
										}, _sliderSendRate);
									}
								},
								stop: function(event, ui) {
									clearInterval(DialogLevelSliderReadoutTimer);
									setState(_linkedLevelId, _deviceId, $("#DialogLevelSlider").val());
									dialogUpdateTimestamp(states[_linkedLevelId]);
								}
							});
						};
						dialogBindingFunctions.push(bindingFunction);
					})(); //<--End Closure
				}
			}
		}
		//----Timestamp
		dialogContent += "<img class='iQontrolDialogTimestampSwitch show' style='display:none' src='./images/icons/timestamp_show.png'>";
		dialogContent += "<img class='iQontrolDialogTimestampSwitch hide' style='display:none' src='./images/icons/timestamp_hide.png'>";
		dialogContent += "<div id='DialogTimestamp' style='display: none;' data-timestamp='' data-iQontrol-Device-ID='" + deviceId + "'>";
		dialogContent += "	<span class='small'>" + _("Last change:") + "&nbsp;</span><span id='DialogTimestampText' class='small' data-iQontrol-Device-ID='" + deviceId + "'></span>";
		dialogContent += "</div>"; //The Timestamp itself is updated via the dialogUpdateTimestamp-Function
		//--Additional Content
		switch(usedObjects[deviceId].common.role){
			case "iQontrolBlind":
			//----Actuator
			if(!dialogReadonly && (dialogStates["FAVORITE_POSITION"] && dialogStates["FAVORITE_POSITION"].type)){
				var favoritePositionCaption = (deviceId && usedObjects[deviceId] && typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.favoritePositionCaption != udef && usedObjects[deviceId].native.favoritePositionCaption) || _("Favorite Position");			
				dialogContent += "<a data-role='button' data-mini='true' data-icon='star' data-iconpos='left' class='iQontrolDialogButton' data-iQontrol-Device-ID='" + deviceId + "' name='DialogStateFavoritePositionButton' id='DialogStateFavoritePositionButton'>" + favoritePositionCaption + "</a>";
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					var _deviceId = deviceId;
					var _linkedFavoritePositionId = dialogLinkedStateIds["FAVORITE_POSITION"];
					var _linkedFavoritePositionSetValueId = dialogLinkedStateIds["FAVORITE_POSITION_SET_VALUE"];
					var bindingFunction = function(){
						$('#DialogStateFavoritePositionButton').on('click', function(e) {
							favoritePositionSetValue = getStateObject(_linkedFavoritePositionSetValueId);
							setState(_linkedFavoritePositionId, _deviceId, ((favoritePositionSetValue && favoritePositionSetValue.val) || true), true);
						});
					};
					dialogBindingFunctions.push(bindingFunction);
				})(); //<--End Closure
			}
			if(!dialogReadonly && ((dialogStates["DOWN"] && dialogStates["DOWN"].type) || (dialogStates["STOP"] && dialogStates["STOP"].type) || (dialogStates["UP"] && dialogStates["UP"].type))){
				dialogContent += "<center><div data-role='controlgroup' data-type='horizontal'>";
				if(dialogStates["DOWN"] && dialogStates["DOWN"].type){
					dialogContent += "<a data-role='button' data-mini='false' data-icon='carat-d' data-iconpos='left' class='iQontrolDialogButton' data-iQontrol-Device-ID='" + deviceId + "' name='DialogStateDownButton' id='DialogStateDownButton'>" + _("Down") + "</a>";
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedDownId = dialogLinkedStateIds["DOWN"];
						var _linkedDownSetValueId = dialogLinkedStateIds["DOWN_SET_VALUE"];
						var bindingFunction = function(){
							$('#DialogStateDownButton').on('click', function(e) {
								downSetValue = getStateObject(_linkedDownSetValueId);
								setState(_linkedDownId, _deviceId, ((downSetValue && typeof downSetValue.val !== udef) ? downSetValue.val : true), true);
							});
						};
						dialogBindingFunctions.push(bindingFunction);
					})(); //<--End Closure
				}
				if(dialogStates["STOP"] && dialogStates["STOP"].type){
					dialogContent += "<a data-role='button' data-mini='false' class='iQontrolDialogButton' data-iQontrol-Device-ID='" + deviceId + "' name='DialogStateStopButton' id='DialogStateStopButton'>" + _("Stop") + "</a>";
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedStopId = dialogLinkedStateIds["STOP"];
						var bindingFunction = function(){
							$('#DialogStateStopButton').on('click', function(e) {
								setState(_linkedStopId, _deviceId, true, true);
							});
						};
						dialogBindingFunctions.push(bindingFunction);
					})(); //<--End Closure
				}
				if(dialogStates["UP"] && dialogStates["UP"].type){
					dialogContent += "<a data-role='button' data-mini='false' data-icon='carat-u' data-iconpos='right'  class='iQontrolDialogButton' data-iQontrol-Device-ID='" + deviceId + "' name='DialogStateUPButton' id='DialogStateUPButton'>" + _("Up") + "</a>";
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedUpId = dialogLinkedStateIds["UP"];
						var _linkedUpSetValueId = dialogLinkedStateIds["UP_SET_VALUE"];
						var bindingFunction = function(){
							$('#DialogStateUPButton').on('click', function(e) {
								upSetValue = getStateObject(_linkedUpSetValueId);
								setState(_linkedUpId, _deviceId, ((upSetValue && typeof upSetValue.val !== udef) ? upSetValue.val : true), true);
							});
						};
						dialogBindingFunctions.push(bindingFunction);
					})(); //<--End Closure
				}
				if(!(dialogStates["DOWN"] && dialogStates["DOWN"].type) && !(dialogStates["UP"] && dialogStates["UP"].type) && dialogStates["LEVEL"]){
 					var onclick = "toggleActuator(\"" + (dialogLinkedStateIds["LEVEL"] || "") + "\", \"" + (dialogLinkedStateIds["DIRECTION"] || "") + "\", \"" + (dialogLinkedStateIds["STOP"] || "") + "\", \"" + (dialogLinkedStateIds["UP"] || "") + "\", \"" + (dialogLinkedStateIds["UP_SET_VALUE"] || "") + "\", \"" + (dialogLinkedStateIds["DOWN"] || "") + "\", \"" + (dialogLinkedStateIds["DOWN_SET_VALUE"] || "") + "\", \"" + (dialogLinkedStateIds["FAVORITE_POSITION"] || "") + "\", \"" + deviceId + "\");";
					dialogContent += "<a data-role='button' data-mini='false' class='iQontrolDialogButton' data-iQontrol-Device-ID='" + deviceId + "' name='DialogStateToggleButton' id='DialogStateToggleButton' onclick='" + onclick + "'>" + _("Toggle") + "</a>";
				}
				dialogContent += "</div></center>";
			}
			//----Slats
			if(dialogStates["SLATS_LEVEL"]){
				if(dialogStates["SLATS_LEVEL"].type == "level"){
					var min = dialogStates["SLATS_LEVEL"].min || 0;
					var max = dialogStates["SLATS_LEVEL"].max || 100;
					var step = "1";
					if (max - min < 100) step = "0.1";
					if (max - min < 10) step = "0.01";
					if (max - min < 1) step = "0.001";
					if(usedObjects[dialogLinkedStateIds["SLATS_LEVEL"]] && typeof usedObjects[dialogLinkedStateIds["SLATS_LEVEL"]].common !== udef && typeof usedObjects[dialogLinkedStateIds["SLATS_LEVEL"]].common.custom !== udef && typeof usedObjects[dialogLinkedStateIds["SLATS_LEVEL"]].common.custom[namespace] !== udef && typeof usedObjects[dialogLinkedStateIds["SLATS_LEVEL"]].common.custom[namespace].step !== udef && usedObjects[dialogLinkedStateIds["SLATS_LEVEL"]].common.custom[namespace].step !== "") step = usedObjects[dialogLinkedStateIds["SLATS_LEVEL"]].common.custom[namespace].step.toString();
					var type = "Slats";
					dialogContent += "<label for='DialogSlatsLevelSlider' ><image src='./images/slats.png' / style='width:16px; height:16px;'>&nbsp;" + _(type) + ":</label>";
					dialogContent += "<input type='number' data-type='range' class='iQontrolDialogSlider' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + (dialogStates["SLATS_LEVEL"].readonly || dialogReadonly).toString() + "' data-highlight='true' data-popup-enabled='true' data-show-value='true' name='DialogSlatsLevelSlider' id='DialogSlatsLevelSlider' min='" + min + "' max='" + max + "' step='" + step + "'/>";
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedSlatsLevelId = dialogLinkedStateIds["SLATS_LEVEL"];
						var _confirm = (usedObjects[_linkedSlatsLevelId] && typeof usedObjects[_linkedSlatsLevelId].common !== udef && typeof usedObjects[_linkedSlatsLevelId].common.custom !== udef && typeof usedObjects[_linkedSlatsLevelId].common.custom[namespace] !== udef && typeof usedObjects[_linkedSlatsLevelId].common.custom[namespace].confirm !== udef && usedObjects[_linkedSlatsLevelId].common.custom[namespace].confirm == true);
						var DialogSlatsLevelSliderReadoutTimer;
						var updateFunction = function(){
							var stateSlatsLevel = getStateObject(_linkedSlatsLevelId);
							if (stateSlatsLevel){
								$("#DialogSlatsLevelSlider").val(stateSlatsLevel.val);
								$("#DialogSlatsLevelSlider").slider('refresh');
								dialogUpdateTimestamp(states[_linkedSlatsLevelId]);
							}
						};
						dialogUpdateFunctions[_linkedSlatsLevelId].push(updateFunction);
						var bindingFunction = function(){
							$('#DialogSlatsLevelSlider').slider({
								start: function(event, ui){
									clearInterval(DialogSlatsLevelSliderReadoutTimer);
									if (!_confirm) {
										DialogSlatsLevelSliderReadoutTimer = setInterval(function(){
											setState(_linkedSlatsLevelId, _deviceId, $("#DialogSlatsLevelSlider").val());
											dialogUpdateTimestamp(states[_linkedSlatsLevelId]);
										}, 500);
									}
								},
								stop: function(event, ui) {
									clearInterval(DialogSlatsLevelSliderReadoutTimer);
									setState(_linkedSlatsLevelId, _deviceId, $("#DialogSlatsLevelSlider").val());
									dialogUpdateTimestamp(states[_linkedSlatsLevelId]);
								}
							});
						};
						dialogBindingFunctions.push(bindingFunction);
					})(); //<--End Closure
				}
			}			
			break;
			
			case "iQontrolGarageDoor":
			if(dialogStates["TOGGLE"]){
				dialogContent += "<a data-role='button' data-mini='false' class='iQontrolDialogButton' data-iQontrol-Device-ID='" + deviceId + "' name='DialogToggleButton' id='DialogToggleButton'>" + _("Toggle") + "</a>";
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					var _deviceId = deviceId;
					var _linkedToggleId = dialogLinkedStateIds["TOGGLE"];
					var bindingFunction = function(){
						$('#DialogToggleButton').on('click', function(e) {
							startProgram(_linkedToggleId, _deviceId);
						});
					};
					dialogBindingFunctions.push(bindingFunction);
				})(); //<--End Closure
			}

			case "iQontrolDoorWithLock":
			//----DoorWithLock
			if(dialogStates["LOCK_STATE"] || (dialogStates["LOCK_OPEN"] && !dialogStates["LOCK_OPEN"].readonly && !dialogReadonly)){
					dialogContent += "<legend><image src='./images/door_lock.png' / style='width:16px; height:16px;'>&nbsp;" + _("Doorlock") + ":</legend>";
			}
			if(dialogStates["LOCK_OPEN"] && !dialogStates["LOCK_OPEN"].readonly && !dialogReadonly){
				dialogContent += "<a data-role='button' data-mini='false' class='iQontrolDialogButton' data-iQontrol-Device-ID='" + deviceId + "' name='DialogLockOpenButton' id='DialogLockOpenButton'>" + _("Open Door") + "</a>";
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					var _deviceId = deviceId;
					var _linkedLockOpenId = dialogLinkedStateIds["LOCK_OPEN"];
					var bindingFunction = function(){
						$('#DialogLockOpenButton').on('click', function(e) {
							if(confirm(_("Open Door") + "?")) startProgram(_linkedLockOpenId, _deviceId);
						});
					};
					dialogBindingFunctions.push(bindingFunction);
				})(); //<--End Closure
			}
			if(dialogStates["LOCK_STATE"]){
				dialogContent += "<fieldset data-role='controlgroup' data-type='horizontal'>"
					dialogContent += "<input type='radio' class='iQontrolDialogCheckboxradio DialogLockStateCheckboxradio' " + ((dialogStates["LOCK_STATE"].readonly || dialogReadonly)?"disabled='disabled'":"") + "' data-iQontrol-Device-ID='" + deviceId + "' name='DialogLockStateCheckboxradio' id='DialogLockStateCheckboxradio_false' value='false' />";
					dialogContent += "<label for='DialogLockStateCheckboxradio_false'>" + _("locked") + "</label>";
					dialogContent += "<input type='radio' class='iQontrolDialogCheckboxradio DialogLockStateCheckboxradio' " + ((dialogStates["LOCK_STATE"].readonly || dialogReadonly)?"disabled='disabled'":"") + "' data-iQontrol-Device-ID='" + deviceId + "' name='DialogLockStateCheckboxradio' id='DialogLockStateCheckboxradio_true' value='true' />";
					dialogContent += "<label for='DialogLockStateCheckboxradio_true'>" + _("unlocked") + "</label>";
				dialogContent += "</fieldset>";
				dialogContent += "<div class='DialogLockStateUncertainText' data-iQontrol-Device-ID='" + deviceId + "'></div>";
				if (dialogLinkedStateIds["STATE"]){
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedStateId = dialogLinkedStateIds["STATE"];
						var updateFunction = function(){
							var state = getStateObject(_linkedStateId);
							if (state){
								if(state.val || dialogStates["LOCK_STATE"].readonly || dialogReadonly){ //Door opened - deactivate Doorlock
									$("input[name=DialogLockStateCheckboxradio]").attr("disabled", true);
								} else {
									$("input[name=DialogLockStateCheckboxradio]").attr("disabled", false);
								}
								$(".DialogLockStateCheckboxradio").checkboxradio('refresh');
							}
						};
						dialogUpdateFunctions[_linkedStateId].push(updateFunction);
					})(); //<--End Closure
				}
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					var _deviceId = deviceId;
					var _linkedLockStateId = dialogLinkedStateIds["LOCK_STATE"];
					var updateFunction = function(){
						var stateLockState = getStateObject(_linkedLockStateId);
						if (stateLockState){
							if(stateLockState.val == false || stateLockState.val.toString().toLowerCase() == "false" || stateLockState.val == 0 || stateLockState.val == "0"){ //Locked
								$("#DialogLockStateCheckboxradio_false").prop("checked", true);
							} else { //Unlocked
								$("#DialogLockStateCheckboxradio_true").prop("checked", true);
							}
							$(".DialogLockStateCheckboxradio").checkboxradio('refresh');
						}
					};
					dialogUpdateFunctions[_linkedLockStateId].push(updateFunction);
					var bindingFunction = function(){
						$("input[name='DialogLockStateCheckboxradio']").on('click', function(e) {
							var value = $("input[name='DialogLockStateCheckboxradio']:checked").val();
							setState(_linkedLockStateId, _deviceId, value, true, function(){}, 15000);
						});
					};
					dialogBindingFunctions.push(bindingFunction);
				})(); //<--End Closure
				if (dialogLinkedStateIds["LOCK_STATE_UNCERTAIN"]){
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedLockStateUncertainId = dialogLinkedStateIds["LOCK_STATE_UNCERTAIN"];
						var updateFunction = function(){
						var stateLockStateUncertain = getStateObject(_linkedLockStateUncertainId);
							if (stateLockStateUncertain){
								if(stateLockStateUncertain.val == false || stateLockStateUncertain.val.toString().toLowerCase() == "false" || stateLockStateUncertain.val == 0 || stateLockStateUncertain == "0"){ //State certain
									$("[data-iQontrol-Device-ID='" + _deviceId + "'].DialogLockStateUncertainText").html("");
								} else { //State Uncertain
									$("[data-iQontrol-Device-ID='" + _deviceId + "'].DialogLockStateUncertainText").html("<span class='small'>" + _("Exact position uncertain") + "</span>");
								}
							}
						};
						dialogUpdateFunctions[_linkedLockStateUncertainId].push(updateFunction);
					})(); //<--End Closure
				}
			}
			break;

			case "iQontrolThermostat":
			//----Thermostat (but NOT Homematic!) Control Mode
			if(dialogStates["CONTROL_MODE"]){
				switch(dialogStates["CONTROL_MODE"].type){
					case "switch":
					var type = "Mode";
					dialogContent += "<label for='DialogThermostatControlModeSwitch' ><image src='./images/config.png' / style='width:16px; height:16px;'>&nbsp;" + _(type) + ":</label>";
					dialogContent += "<select data-role='flipswitch' data-mini='false' class='iQontrolDialogSwitch' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + (dialogStates["CONTROL_MODE"].readonly || dialogReadonly).toString() + "' name='DialogThermostatControlModeSwitch' id='DialogThermostatControlModeSwitch'>";
						dialogContent += "<option value='false'>0</option>";
						dialogContent += "<option value='true'>I</option>";
					dialogContent += "</select>";
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedControlModeId = dialogLinkedStateIds["CONTROL_MODE"];
						var updateFunction = function(){
							var stateControlMode = getStateObject(_linkedControlModeId);
							if (stateControlMode){
								var index = 0;
								if(typeof stateControlMode.val != udef && (stateControlMode.val.toString().toLowerCase() == "true" || stateControlMode.val.toString() > 0)) index = 1; else index = 0;
								$("#DialogThermostatControlModeSwitch")[0].selectedIndex = index;
								$("#DialogThermostatControlModeSwitch").flipswitch('refresh');
							}
						};
						dialogUpdateFunctions[_linkedControlModeId].push(updateFunction);
						var bindingFunction = function(){
							$('#DialogThermostatControlModeSwitch').on('change', function(e) {
								var newVal = $("#DialogThermostatControlModeSwitch option:selected").val();
								var stateControlMode = getStateObject(_linkedControlModeId);
								if(typeof stateControlMode.val == 'number'){
									if(newVal == true) newVal = 1; else newVal = 0;
								}
								setState(_linkedControlModeId, _deviceId, newVal);
							});
						};
						dialogBindingFunctions.push(bindingFunction);
					})(); //<--End Closure
					break;
				
					case "valueList":
					var type = "Mode";
					dialogContent += "<label for='DialogThermostatControlModeValueList' ><image src='./images/config.png' / style='width:16px; height:16px;'>&nbsp;" + _(type) + ":</label>";
					dialogContent += "<select  class='iQontrolDialogValueList DialogThermostatControlModeValueList' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + (dialogStates["CONTROL_MODE"].readonly || dialogReadonly).toString() + "' name='DialogThermostatControlModeValueList' id='DialogThermostatControlModeValueList' data-native-menu='false'>";
					for(val in dialogStates["CONTROL_MODE"].valueList){
							dialogContent += "<option value='" + val + "'>" + _(dialogStates["CONTROL_MODE"].valueList[val]) + "</option>";
						}
					dialogContent += "</select>";
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedControlModeId = dialogLinkedStateIds["CONTROL_MODE"];
						var updateFunction = function(){
							if (states[_linkedControlModeId]){
								var stateControlMode = getStateObject(_linkedControlModeId);
								if(typeof stateControlMode.val != udef) {
									var val = stateControlMode.val.toString();
									$("#DialogThermostatControlModeValueList").val(val);
								}
								$("#DialogThermostatControlModeValueList").selectmenu('refresh');
							}
						};
						dialogUpdateFunctions[_linkedControlModeId].push(updateFunction);
						var bindingFunction = function(){
							$('.DialogThermostatControlModeValueList').on('change', function(e) {
								setState(_linkedControlModeId, _deviceId, $("#DialogThermostatControlModeValueList option:selected").val());
							});
						};
						dialogBindingFunctions.push(bindingFunction);
					})(); //<--End Closure
					break;
				}
			}
			break;

			case "iQontrolHomematicThermostat":
			//----Homematic-Thermostat (ONLY Homematic!)
			//------Control Mode
			//get additional linkedStates for HomematicThermostat:
			//these are not part of the configured States in the adapter, but rather
			//they are generated from parentId of linkedControlModeId - so they are direct linked states
			//thats why getLinkedState could not be used! State and Object must be fetched manually
			if(dialogLinkedStateIds["CONTROL_MODE"]){
				var linkedParentId = dialogLinkedStateIds["CONTROL_MODE"].substring(0, dialogLinkedStateIds["CONTROL_MODE"].lastIndexOf("."));
				var additionalLinkedStates = [];
				additionalLinkedStates.push(linkedParentId + ".MANU_MODE");
				additionalLinkedStates.push(linkedParentId + ".AUTO_MODE");
				additionalLinkedStates.push(linkedParentId + ".BOOST_MODE");
				for(var i = 0; i < additionalLinkedStates.length; i++){
					if (typeof states[additionalLinkedStates[i]] == udef) {
						dialogStateIdsToFetch.push(additionalLinkedStates[i]);
					}
					if (typeof usedObjects[additionalLinkedStates[i]] == udef) {
						(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
							var _additionalLinkedState = additionalLinkedStates[i];
							fetchObject(_additionalLinkedState, function(error){ updateState(_additionalLinkedState, "ignorePreventUpdateForDialog"); });
						})(); //<--End Closure
					}
				}
			}
			if(dialogStates["CONTROL_MODE"]){
				dialogContent += "<fieldset data-role='controlgroup' data-type='horizontal'>"
					dialogContent += "<legend><image src='./images/config.png' / style='width:16px; height:16px;'>&nbsp;" + _("Mode") + ":</legend>";
					for(val in dialogStates["CONTROL_MODE"].valueList){
						if(dialogStates["CONTROL_MODE"].valueList[val] == "PARTY-MODE"){
							var controlModeParty = val;
							continue;
						}
						dialogStates["CONTROL_MODE"].readonly = false; //SPECIAL: Homematic control mode IS readonly, because it writes to another targetValueId but the new targetValueId-Feature is not yet implemented for Homematic-Themostats. Therefore - as workaround - the readonly-mode is disabled here. 
						dialogContent += "<input type='radio' class='iQontrolDialogCheckboxradio DialogThermostatControlModeCheckboxradio' " + ((dialogStates["CONTROL_MODE"].readonly || dialogReadonly)?"disabled='disabled'":"") + "' data-iQontrol-Device-ID='" + deviceId + "' name='DialogThermostatControlModeCheckboxradio' id='DialogThermostatControlModeCheckboxradio_" + val + "' value='" + val + "' />";
						dialogContent += "<label for='DialogThermostatControlModeCheckboxradio_" + val + "'>" + _(dialogStates["CONTROL_MODE"].valueList[val]) + "</label>";
					}
				dialogContent += "</fieldset>";
				dialogContent += "<div class='DialogThermostatControlModeText' data-iQontrol-Device-ID='" + deviceId + "'></div>";
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					var _deviceId = deviceId;
					var _linkedControlModeId = dialogLinkedStateIds["CONTROL_MODE"];
					var _linkedBoostStateId = dialogLinkedStateIds["BOOST_STATE"];
					var _valueList = dialogStates["CONTROL_MODE"].valueList;
					var updateFunction = function(){
						var stateControlMode = getStateObject(_linkedControlModeId);
						if (stateControlMode){
							$("#DialogThermostatControlModeCheckboxradio_" + stateControlMode.val).prop("checked", true);
							$(".DialogThermostatControlModeCheckboxradio").checkboxradio('refresh');
						}
					};
					dialogUpdateFunctions[_linkedControlModeId].push(updateFunction);
					var updateFunction = function(){
						var value = $("input[name='DialogThermostatControlModeCheckboxradio']:checked").val();
						if (_valueList && typeof _valueList[value] !== udef && _valueList[value] == "BOOST-MODE"){
							var unit = getUnit(_linkedBoostStateId);
							if (states[_linkedBoostStateId] && typeof states[_linkedBoostStateId].val != udef){
								$("[data-iQontrol-Device-ID='" + _deviceId + "'].DialogThermostatControlModeText").html("<span class='small'>" + _("Remaining Boost Time") + ": " + states[_linkedBoostStateId].val + unit + "</span>");
							}
						} else {
							$("[data-iQontrol-Device-ID='" + _deviceId + "'].DialogThermostatControlModeText").html("");
						}
					};
					if(!dialogUpdateFunctions[_linkedBoostStateId]) dialogUpdateFunctions[_linkedBoostStateId] = [];
					dialogUpdateFunctions[_linkedBoostStateId].push(updateFunction);
					var bindingFunction = function(){
						$("input[name='DialogThermostatControlModeCheckboxradio']").on('click', function(e) {
							var value = $("input[name='DialogThermostatControlModeCheckboxradio']:checked").val();
							var linkedParentId = _linkedControlModeId.substring(0, _linkedControlModeId.lastIndexOf("."));
							var setValue = "";
							var modeStateId = "";
							var SET_TEMPERATURE = $("#DialogStateSlider").val() * 1;
							if (_valueList[value] == "MANU-MODE")  { modeStateId = linkedParentId + ".MANU_MODE";  setValue = SET_TEMPERATURE; }
							if (_valueList[value] == "AUTO-MODE")  { modeStateId = linkedParentId + ".AUTO_MODE";  setValue = true; }
							if (_valueList[value] == "BOOST-MODE") { modeStateId = linkedParentId + ".BOOST_MODE"; setValue = true; }
							if (typeof usedObjects[modeStateId] == udef) { modeStateId = _linkedControlModeId; setValue = value; }; //If additionalLinkedState not exists, write it directly to CONTROL_MODE
							setState(modeStateId, _deviceId, setValue, true);
						});
					};
					dialogBindingFunctions.push(bindingFunction);
				})(); //<--End Closure
				dialogContent += "<br>";

				//------Party-Mode
				var now = new Date();
				var year = now.getFullYear() - 2000;
				var	dialogThermostatPartyModeCollapsibleExpanded = false;
				if(dialogStates["PARTY_TEMPERATURE"]){
					dialogContent += "<div data-role='collapsible' data-iconpos='right' data-inset='true' id='DialogThermostatPartyModeCollapsible' class=''>";
						dialogContent += "<h4><image src='./images/party.png' / style='width:16px; height:16px;'>&nbsp;" + _("Party-Mode") + ": <span id='DialogThermostatPartyModeText' class='small'></span></h4>";
						dialogContent += "<div id='DialogThermostatPartyModeContent'>";
							dialogContent += "<legend>" + _("Start") + ":</legend>";
							dialogContent += "<fieldset data-role='controlgroup' data-mini='true' data-type='horizontal'>";
								dialogContent += "<select class='DialogThermostatPartyModeMomentSelect' data-disabled='" + dialogReadonly.toString() + "' name='DialogThermostatPartyModeStartDay' id='DialogThermostatPartyModeStartDay' data-inline='true'>";
									for(var i=1; i<=31; i++){
										dialogContent += "<option>" + i + ".</option>";
									}
								dialogContent += "</select>";
								dialogContent += "<select class='DialogThermostatPartyModeMomentSelect' data-disabled='" + dialogReadonly.toString() + "' name='DialogThermostatPartyModeStartMonth' id='DialogThermostatPartyModeStartMonth' data-inline='true'>";
									for(var i=1; i<=12; i++){
										dialogContent += "<option>" + i + ".</option>";
									}
								dialogContent += "</select>";
								dialogContent += "<select class='DialogThermostatPartyModeMomentSelect' data-disabled='" + dialogReadonly.toString() + "' name='DialogThermostatPartyModeStartYear' id='DialogThermostatPartyModeStartYear' data-inline='true'>";
									for(var i=year; i <= year + 5; i++){
										var iString = "20" + i;
										dialogContent += "<option>" + iString + "</option>";
									}
								dialogContent += "</select>";
							dialogContent += "</fieldset>";
							dialogContent += "<fieldset data-role='controlgroup' data-mini='true' data-type='horizontal'>";
								dialogContent += "<select class='DialogThermostatPartyModeMomentSelect' data-disabled='" + dialogReadonly.toString() + "' name='DialogThermostatPartyModeStartHour' id='DialogThermostatPartyModeStartHour' data-inline='true'>";
									for(var i=0; i<=23; i++){
										if (i<10) var iString = "0" + i; else var iString = i;
										dialogContent += "<option>" + iString + ":</option>";
									}
								dialogContent += "</select>";
								dialogContent += "<select class='DialogThermostatPartyModeMomentSelect' data-disabled='" + dialogReadonly.toString() + "' name='DialogThermostatPartyModeStartMin' id='DialogThermostatPartyModeStartMin' data-inline='true'>";
									for(var i=0; i<=59; i=i+30){
										if (i<10) var iString = "0" + i; else var iString = i;
										dialogContent += "<option>" + iString + "</option>";
									}
								dialogContent += "</select>";
							dialogContent += "</fieldset>";
							dialogContent += "<div id='DialogThermostatPartyModeStartMomentError' style='display:none'><img src='./images/error.png' style='width: 16px; height: 16px;'><span class='small'>&nbsp;" + _("Must not lay in past") + "</span></img></div><br>"
							dialogContent += "<legend>" + _("End") + ":</legend>";
							dialogContent += "<fieldset data-role='controlgroup' data-mini='true' data-type='horizontal'>";
								dialogContent += "<select class='DialogThermostatPartyModeMomentSelect' data-disabled='" + dialogReadonly.toString() + "' name='DialogThermostatPartyModeStopDay' id='DialogThermostatPartyModeStopDay' data-inline='true'>";
									for(var i=1; i<=31; i++){
										dialogContent += "<option>" + i + ".</option>";
									}
								dialogContent += "</select>";
								dialogContent += "<select class='DialogThermostatPartyModeMomentSelect' data-disabled='" + dialogReadonly.toString() + "' name='DialogThermostatPartyModeStopMonth' id='DialogThermostatPartyModeStopMonth' data-inline='true'>";
									for(var i=1; i<=12; i++){
										dialogContent += "<option>" + i + ".</option>";
									}
								dialogContent += "</select>";
								dialogContent += "<select class='DialogThermostatPartyModeMomentSelect' data-disabled='" + dialogReadonly.toString() + "' name='DialogThermostatPartyModeStopYear' id='DialogThermostatPartyModeStopYear' data-inline='true'>";
									for(var i=year; i <= year + 5; i++){
										var iString = "20" + i;
										dialogContent += "<option>" + iString + "</option>";
									}
								dialogContent += "</select>";
							dialogContent += "</fieldset>";
							dialogContent += "<fieldset data-role='controlgroup' data-mini='true' data-type='horizontal'>";
								dialogContent += "<select class='DialogThermostatPartyModeMomentSelect' data-disabled='" + dialogReadonly.toString() + "' name='DialogThermostatPartyModeStopHour' id='DialogThermostatPartyModeStopHour' data-inline='true'>";
									for(var i=0; i<=23; i++){
										if (i<10) var iString = "0" + i; else var iString = i;
										dialogContent += "<option>" + iString + ":</option>";
									}
								dialogContent += "</select>";
								dialogContent += "<select class='DialogThermostatPartyModeMomentSelect' data-disabled='" + dialogReadonly.toString() + "' name='DialogThermostatPartyModeStopMin' id='DialogThermostatPartyModeStopMin' data-inline='true'>";
									for(var i=0; i<=59; i=i+30){
										if (i<10) var iString = "0" + i; else var iString = i;
										dialogContent += "<option>" + iString + "</option>";
									}
								dialogContent += "</select>";
							dialogContent += "</fieldset>";
							dialogContent += "<div id='DialogThermostatPartyModeStopMomentError' style='display:none'><img src='./images/error.png' style='width: 16px; height: 16px;'><span class='small'>&nbsp;" + _("Has to be after start") + "</span></img></div><br>"
							dialogContent += "<label for='DialogThermostatPartyModeTemperature' >" + _("Goal-Temperature") + ":</label>";
							dialogContent += "<input type='number' data-type='range' class='iQontrolDialogSlider' data-iQontrol-Device-ID='" + deviceId + "' data-highlight='true' data-popup-enabled='true' data-show-value='true' name='DialogThermostatPartyModeTemperature' id='DialogThermostatPartyModeTemperature' min='5' max='30' step='0.5'/><br>";
							if(!dialogReadonly){
								dialogContent += "<div class='ui-grid-a'>";
									dialogContent += "<div class='ui-block-a'><input type='button' value='" + _("Save") + "' name='DialogThermostatPartyModeSave'></div>";
									dialogContent += "<div class='ui-block-b'><input type='button' value='" + _("Delete") + "' name='DialogThermostatPartyModeDelete'></div>";
								dialogContent += "</div>";
							}
						dialogContent += "</div>";
					dialogContent += "</div>";
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedStateId = dialogLinkedStateIds["PARTY_TEMPERATURE"];
						var _linkedParentId = _linkedStateId.substring(0, _linkedStateId.lastIndexOf("."));
						var updateFunction = function(){
							if (states[_linkedStateId]){
								state = getStateObject(_linkedStateId);
								var partyModeTemperature = state.val;
								partyModeObjectsToFetch = [];
								if(partyModeTemperature >= 6.0){ //Party-Mode active
									$("#DialogThermostatPartyModeText").html("<br>" + _("programmed to") + " " + partyModeTemperature + state.unit);
									var partyModeStartTimeObject = getStateObject(_linkedParentId + ".PARTY_START_TIME");
									if (partyModeStartTimeObject) {
										var partyModeStartTime = getTimeFromHMTimeCode(partyModeStartTimeObject.val);
										var partyModeStartHour = partyModeStartTime.split(":")[0];
										var partyModeStartMin = partyModeStartTime.split(":")[1];
									} else {
										partyModeObjectsToFetch.push(_linkedParentId + ".PARTY_START_TIME");
									}
									var partyModeStartDayObject = getStateObject(_linkedParentId + ".PARTY_START_DAY")
									if (partyModeStartDayObject) var partyModeStartDay = partyModeStartDayObject.val; else partyModeObjectsToFetch.push(_linkedParentId + ".PARTY_START_DAY");
									var partyModeStartMonthObject = getStateObject(_linkedParentId + ".PARTY_START_MONTH")
									if (partyModeStartMonthObject) var partyModeStartMonth = partyModeStartMonthObject.val; else partyModeObjectsToFetch.push(_linkedParentId + ".PARTY_START_MONTH");
									var partyModeStartYEARObject = getStateObject(_linkedParentId + ".PARTY_START_YEAR")
									if (partyModeStartYEARObject) var partyModeStartYEAR = partyModeStartYEARObject.val; else partyModeObjectsToFetch.push(_linkedParentId + ".PARTY_START_YEAR");
									var partyModeStopTimeObject = getStateObject(_linkedParentId + ".PARTY_STOP_TIME");
									if (partyModeStopTimeObject) {
										var partyModeStopTime = getTimeFromHMTimeCode(partyModeStopTimeObject.val);
										var partyModeStopHour = partyModeStopTime.split(":")[0];
										var partyModeStopMin = partyModeStopTime.split(":")[1];
									} else {
										partyModeObjectsToFetch.push(_linkedParentId + ".PARTY_STOP_TIME");
									}
									var partyModeStopDayObject = getStateObject(_linkedParentId + ".PARTY_STOP_DAY")
									if (partyModeStopDayObject) var partyModeStopDay = partyModeStopDayObject.val; else partyModeObjectsToFetch.push(_linkedParentId + ".PARTY_STOP_DAY");
									var partyModeStopMonthObject = getStateObject(_linkedParentId + ".PARTY_STOP_MONTH")
									if (partyModeStopMonthObject) var partyModeStopMonth = partyModeStopMonthObject.val; else partyModeObjectsToFetch.push(_linkedParentId + ".PARTY_STOP_MONTH");
									var partyModeStopYEARObject = getStateObject(_linkedParentId + ".PARTY_STOP_YEAR")
									if (partyModeStopYEARObject) var partyModeStopYEAR = partyModeStopYEARObject.val; else partyModeObjectsToFetch.push(_linkedParentId + ".PARTY_STOP_YEAR");
								} else { //Party-Mode inactive
									$("#DialogThermostatPartyModeText").html("<br>" + _("inactive"));
									partyModeTemperature = "21";
									var	partyModeStartHour  = now.getHours()
									var partyModeStartMin = Math.floor(now.getMinutes() / 30) * 30;
									var partyModeStartDay = now.getDate();
									var partyModeStartMonth = now.getMonth() + 1;
									var partyModeStartYear = year;
									var	partyModeStopHour  = now.getHours()
									var partyModeStopMin = Math.floor(now.getMinutes() / 30) * 30;
									var partyModeStopDay = now.getDate();
									var partyModeStopMonth = now.getMonth() + 1;
									var partyModeStopYear = year;
								}
								if(!dialogThermostatPartyModeCollapsibleExpanded){
									$("#DialogThermostatPartyModeTemperature").val(partyModeTemperature);
									$("#DialogThermostatPartyModeTemperature").slider('refresh');
									$("#DialogThermostatPartyModeStartDay")[0].selectedIndex = partyModeStartDay - 1;
									$("#DialogThermostatPartyModeStartDay").selectmenu('refresh');
									$("#DialogThermostatPartyModeStartMonth")[0].selectedIndex = partyModeStartMonth - 1;
									$("#DialogThermostatPartyModeStartMonth").selectmenu('refresh');
									$("#DialogThermostatPartyModeStartYear")[0].selectedIndex = partyModeStartYear - year;
									$("#DialogThermostatPartyModeStartYear").selectmenu('refresh');
									$("#DialogThermostatPartyModeStartHour")[0].selectedIndex = partyModeStartHour;
									$("#DialogThermostatPartyModeStartHour").selectmenu('refresh');
									$("#DialogThermostatPartyModeStartMin")[0].selectedIndex = partyModeStartMin / 30;
									$("#DialogThermostatPartyModeStartMin").selectmenu('refresh');
									$("#DialogThermostatPartyModeStopDay")[0].selectedIndex = partyModeStopDay - 1;
									$("#DialogThermostatPartyModeStopDay").selectmenu('refresh');
									$("#DialogThermostatPartyModeStopMonth")[0].selectedIndex = partyModeStopMonth - 1;
									$("#DialogThermostatPartyModeStopMonth").selectmenu('refresh');
									$("#DialogThermostatPartyModeStopYear")[0].selectedIndex = partyModeStopYear - year;
									$("#DialogThermostatPartyModeStopYear").selectmenu('refresh');
									$("#DialogThermostatPartyModeStopHour")[0].selectedIndex = partyModeStopHour;
									$("#DialogThermostatPartyModeStopHour").selectmenu('refresh');
									$("#DialogThermostatPartyModeStopMin")[0].selectedIndex = partyModeStopMin / 30;
									$("#DialogThermostatPartyModeStopMin").selectmenu('refresh');
									dialogThermostatPartyModeCheckConsistency();
								}
								if(partyModeObjectsToFetch.length > 0) {
									fetchStates(partyModeObjectsToFetch, function(){ updateState(_linkedStateId); });
								}
							}
						};
						dialogUpdateFunctions[_linkedStateId].push(updateFunction);
						var bindingFunction = function(){
							$("#DialogThermostatPartyModeCollapsible").on('collapsibleexpand', function() {
								dialogThermostatPartyModeCollapsibleExpanded = true;
							}).on('collapsiblecollapse', function() {
								dialogThermostatPartyModeCollapsibleExpanded = false;
							});
							$(".DialogThermostatPartyModeMomentSelect").on('change', dialogThermostatPartyModeCheckConsistency);
							$("input[name='DialogThermostatPartyModeDelete']").on('click', function(e) {
								$("#DialogThermostatPartyModeTemperature").val(5.0);
								$("#DialogThermostatPartyModeTemperature").slider('refresh');
								$("input[name='DialogThermostatPartyModeSave']").click();
							});
							$("input[name='DialogThermostatPartyModeSave']").on('click', function(e) {
								//Save Party-Mode
								var now = new Date();
								var year = now.getFullYear() - 2000;
								var partyModeTemperature = $("#DialogThermostatPartyModeTemperature").val();
								var partyModeStartTime = ($("#DialogThermostatPartyModeStartHour")[0].selectedIndex * 60) +  ($("#DialogThermostatPartyModeStartMin")[0].selectedIndex * 30);
								var partyModeStartDay = $("#DialogThermostatPartyModeStartDay")[0].selectedIndex + 1;
								var partyModeStartMonth = $("#DialogThermostatPartyModeStartMonth")[0].selectedIndex + 1;
								var partyModeStartYear = $("#DialogThermostatPartyModeStartYear")[0].selectedIndex + year;
								var partyModeStopTime = ($("#DialogThermostatPartyModeStopHour")[0].selectedIndex * 60) +  ($("#DialogThermostatPartyModeStopMin")[0].selectedIndex * 30);
								var partyModeStopDay = $("#DialogThermostatPartyModeStopDay")[0].selectedIndex + 1;
								var partyModeStopMonth = $("#DialogThermostatPartyModeStopMonth")[0].selectedIndex + 1;
								var partyModeStopYear = $("#DialogThermostatPartyModeStopYear")[0].selectedIndex + year;
								// The Value for PARTY_MODE_SUBMIT consists of the following: Temperature,Start_Time,Day,Month,Year,Stop_Time,Day,Month,Year
								if(partyModeTemperature >= 6.0){
									var partyModeSubmitValue = partyModeTemperature + "," + partyModeStartTime + "," + partyModeStartDay + "," + partyModeStartMonth + "," + partyModeStartYear + "," + partyModeStopTime + "," + partyModeStopDay + "," + partyModeStopMonth + "," + partyModeStopYear;
								} else {
									partyModeSubmitValue = "0,0,0,0,0,0,0,0,0";
								}
								setState(_linkedParentId + ".PARTY_MODE_SUBMIT", _deviceId, partyModeSubmitValue, true);
								$("#DialogThermostatPartyModeCollapsible").collapsible("collapse");
							});
						};
						dialogBindingFunctions.push(bindingFunction);
					})(); //<--End Closure
				}
			}

			//------Valve States
			//Special: VALVE_STATES is an Array: [{"name":"ValveName", "type":"LinkedState", "value":"LinkedStateId"}, ...]
			var linkedValveStateIds;
			if (dialogStates["VALVE_STATES"] && typeof dialogStates["VALVE_STATES"].val != udef) linkedValveStateIds = tryParseJSON(dialogStates["VALVE_STATES"].val);
			var linkedValveStateIdsAreValid = false;
			if(Array.isArray(linkedValveStateIds) && typeof linkedValveStateIds == 'object') linkedValveStateIds.forEach(function(element){
				if (typeof element.name !== udef && element.name !== udef){
					linkedValveStateIdsAreValid = true;
				}
			});
			if(linkedValveStateIdsAreValid){
				//get additional linkedStates from Array:
				linkedValveStateIds.forEach(function(element){
					if (typeof states[element.value] == udef) {
						dialogStateIdsToFetch.push(element.value);
					}
					if (typeof usedObjects[element.value] == udef) {
						(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
							var _elementValue = element.value;
							fetchObject(_elementValue, function(error){ updateState(_elementValue, "ignorePreventUpdateForDialog"); });
						})(); //<--End Closure
					}
					dialogLinkedStateIdsToUpdate.push(element.value);
				});
				dialogContent += "<div data-role='collapsible' data-iconpos='right' data-inset='true' class=''>";
					dialogContent += "<h4><image src='./images/setpoint.png' / style='width:16px; height:16px;'>&nbsp;" + _("Heating-Valves") + ":</h4>";
					dialogContent += "<div id='DialogThermostatValveStatesContent'>";
						dialogContent += "<ul class='iQontrolDialogAdditionalInfoList' id='DialogThermostatValveStatesContentList' data-iQontrol-Device-ID='" + deviceId + "'></ul>";
					dialogContent += "</div>";
				dialogContent += "</div>";
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					var _linkedStateIds = linkedValveStateIds;
					var updateFunction = function(){
						$("#DialogThermostatValveStatesContentList").html("");
						_linkedStateIds.forEach(function(_element){
							var state = getStateObject(_element.value);
							if(state) $("#DialogThermostatValveStatesContentList").append("<li>" + _element.name + ": " + state.val + state.unit || "" + "</li>");
						});
					};
					_linkedStateIds.forEach(function(_element){
						if(!dialogUpdateFunctions[_element.value]) dialogUpdateFunctions[_element.value] = [];
						dialogUpdateFunctions[_element.value].push(updateFunction);
					});
				})(); //<--End Closure
			}
			break;
			
			case "iQontrolAlarm":
			if(dialogStates["CONTROL_MODE"]){
				dialogContent += "<label for='DialogControlModeValueList' ><image src='./images/variable.png' / style='width:16px; height:16px;'>&nbsp;" + _("Operation Mode") + ":</label>";
				dialogContent += "<select  class='iQontrolDialogValueList DialogControlModeValueList' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + (dialogStates["CONTROL_MODE"].readonly || dialogReadonly).toString() + "' name='DialogControlModeValueList' id='DialogControlModeValueList' data-native-menu='false'>";
				for(val in dialogStates["CONTROL_MODE"].valueList){
						dialogContent += "<option value='" + val + "'>" + _(dialogStates["CONTROL_MODE"].valueList[val]) + "</option>";
					}
				dialogContent += "</select>";
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					var _deviceId = deviceId;
					var _linkedControlModeId = dialogLinkedStateIds["CONTROL_MODE"];
					var updateFunction = function(){
						var stateControlMode = getStateObject(_linkedControlModeId);
						if (stateControlMode){
							if(typeof stateControlMode.val != udef) {
								var val = stateControlMode.val.toString();
								$("#DialogControlModeValueList").val(val);
							}
							$("#DialogControlModeValueList").selectmenu('refresh');
							dialogUpdateTimestamp(states[_linkedControlModeId]);
						}
					};
					dialogUpdateFunctions[_linkedControlModeId].push(updateFunction);
					var bindingFunction = function(){
						$('.DialogControlModeValueList').on('change', function(e) {
							setState(_linkedControlModeId, _deviceId, $("#DialogControlModeValueList option:selected").val());
							dialogUpdateTimestamp(states[_linkedControlModeId]);
						});
					};
					dialogBindingFunctions.push(bindingFunction);
				})(); //<--End Closure
			}
			break;

			case "iQontrolPopup":
			//----Popup with url or html
			if (dialogStates["URL"] || dialogStates["HTML"]){
				var style = "";
				if (typeof usedObjects[deviceId] !== udef && typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.popupWidth != udef && usedObjects[deviceId].native.popupWidth) style += "width: " + usedObjects[deviceId].native.popupWidth + "px !important; ";
				if (typeof usedObjects[deviceId] !== udef && typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.popupHeight != udef && usedObjects[deviceId].native.popupHeight) style += "height: " + usedObjects[deviceId].native.popupHeight + "px !important; ";
				dialogContent += "<div class='iQontrolDialogIframeWrapper' style='" + style + "'>";
				dialogContent += "	<iframe class='iQontrolDialogIframe' data-iQontrol-Device-ID='" + deviceId + "' id='DialogPopupIframe' scrolling='no'>" + _("Content not available") + "</iframe>";
				dialogContent += "</div>";
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					var _deviceId = deviceId;
					var _linkedUrlId = dialogLinkedStateIds["URL"];
					var _linkedHtmlId = dialogLinkedStateIds["HTML"];
					var updateFunction = function(){
						var iframe = document.getElementById('DialogPopupIframe');
						if (states[_linkedUrlId] && states[_linkedUrlId].val && states[_linkedUrlId].val != "") {
							iframe.src = states[_linkedUrlId].val;
						} else if (states[_linkedHtmlId] && states[_linkedHtmlId].val && states[_linkedHtmlId].val != "") {
							var iframedoc = iframe.contentDocument || iframe.contentWindow.document;
							iframedoc.body.innerHTML = states[_linkedHtmlId].val;
						}
					}
					if (_linkedUrlId) dialogUpdateFunctions[_linkedUrlId].push(updateFunction);
					if (_linkedHtmlId) dialogUpdateFunctions[_linkedHtmlId].push(updateFunction);
				})(); //<--End Closure
			}
			break; 

			case "iQontrolLight":
			//----ColorPicker
			var alternativeColorspace = (typeof usedObjects[deviceId] !== udef && typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.alternativeColorspace != udef && usedObjects[deviceId].native.alternativeColorspace) || null;
			if(dialogStates["HUE"] && typeof dialogStates["HUE"].val !== udef){
				var min = dialogStates["HUE"] && dialogStates["HUE"].min || 0;
				var max = dialogStates["HUE"] && dialogStates["HUE"].max || 359;
				var step = "1";
				if (max - min < 100) step = "0.1";
				if (max - min < 10) step = "0.01";
				if (max - min < 1) step = "0.001";
				if(usedObjects[dialogLinkedStateIds["HUE"]] && typeof usedObjects[dialogLinkedStateIds["HUE"]].common !== udef && typeof usedObjects[dialogLinkedStateIds["HUE"]].common.custom !== udef && typeof usedObjects[dialogLinkedStateIds["HUE"]].common.custom[namespace] !== udef && typeof usedObjects[dialogLinkedStateIds["HUE"]].common.custom[namespace].step !== udef && usedObjects[dialogLinkedStateIds["HUE"]].common.custom[namespace].step !== "") step = usedObjects[dialogLinkedStateIds["HUE"]].common.custom[namespace].step.toString();
				dialogContent += "<hr>";
				dialogContent += "<label for='DialogHueSlider' ><image src='./images/color.png' / style='width:16px; height:16px;'>&nbsp;" + _("Color") + ":</label>";
				dialogContent += "<input type='number' data-type='range' class='iQontrolDialogSlider colorPicker' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + ((dialogStates["HUE"] && dialogStates["HUE"].readonly) || (dialogStates["ALTERNATIVE_COLORSPACE_VALUE"] && dialogStates["ALTERNATIVE_COLORSPACE_VALUE"].readonly) || dialogReadonly).toString() + "' data-highlight='false' data-popup-enabled='true' data-show-value='true' name='DialogHueSlider' id='DialogHueSlider' min='" + min + "' max='" + max + "' step='" + step + "'/>";
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					var _deviceId = deviceId;
					var _linkedHueId = dialogLinkedStateIds["HUE"];
					var _confirm = (usedObjects[_linkedHueId] && typeof usedObjects[_linkedHueId].common !== udef && typeof usedObjects[_linkedHueId].common.custom !== udef && typeof usedObjects[_linkedHueId].common.custom[namespace] !== udef && typeof usedObjects[_linkedHueId].common.custom[namespace].confirm !== udef && usedObjects[_linkedHueId].common.custom[namespace].confirm == true);
					var DialogHueSliderReadoutTimer;
					var DialogHueSliderReadoutTimer2;
					var updateFunction = function(){
						var stateHue = getStateObject(_linkedHueId);
						if (stateHue && typeof stateHue.val !== udef){
							$("#DialogHueSlider").val(stateHue.val);
							$("#DialogHueSlider").slider('refresh');
						} 
					};
					if (_linkedHueId) dialogUpdateFunctions[_linkedHueId].push(updateFunction);
					var bindingFunction = function(){
						$('#DialogHueSlider').slider({
							start: function(event, ui){
								clearInterval(DialogHueSliderReadoutTimer);
								clearInterval(DialogHueSliderReadoutTimer2);
								if (!_confirm){
									DialogHueSliderReadoutTimer = setInterval(function(){
										if(_linkedHueId && _linkedHueId != ""){
											setState(_linkedHueId, _deviceId, $("#DialogHueSlider").val());
										}
									}, 500);
								}
								//Update ColorSaturationPicker-Slider linear-gradient immediatly
								DialogHueSliderReadoutTimer2 = setInterval(function(){
									var hueMin = dialogStates["HUE"] && dialogStates["HUE"].min || 0;
									var hueMax = dialogStates["HUE"] && dialogStates["HUE"].max || 359;
									var hue = (($("#DialogHueSlider").val() - hueMin) / (hueMax - hueMin)) * 359;
									$("#DialogSaturationSlider + .ui-slider-track").attr('style', 'background-image: linear-gradient(to right, white, hsl(' + parseInt(hue) + ', 100%, 50%)) !important;');
								}, 50);
							},
							stop: function(event, ui) {
								clearInterval(DialogHueSliderReadoutTimer);
								clearInterval(DialogHueSliderReadoutTimer2);
								if(_linkedHueId && _linkedHueId != ""){
									setState(_linkedHueId, _deviceId, $("#DialogHueSlider").val());
								}
							}
						});
					};
					dialogBindingFunctions.push(bindingFunction);
				})(); //<--End Closure
			}
			//----ColorSaturationPicker
			if(dialogStates["SATURATION"] && typeof dialogStates["SATURATION"].val !== udef && dialogStates["HUE"] && typeof dialogStates["HUE"].val !== udef){
				var min = dialogStates["SATURATION"] && dialogStates["SATURATION"].min || 0;
				var max = dialogStates["SATURATION"] && dialogStates["SATURATION"].max || 100;
				var step = "1";
				if (max - min < 100) step = "0.1";
				if (max - min < 10) step = "0.01";
				if (max - min < 1) step = "0.001";
				if(usedObjects[dialogLinkedStateIds["SATURATION"]] && typeof usedObjects[dialogLinkedStateIds["SATURATION"]].common !== udef && typeof usedObjects[dialogLinkedStateIds["SATURATION"]].common.custom !== udef && typeof usedObjects[dialogLinkedStateIds["SATURATION"]].common.custom[namespace] !== udef && typeof usedObjects[dialogLinkedStateIds["SATURATION"]].common.custom[namespace].step !== udef && usedObjects[dialogLinkedStateIds["SATURATION"]].common.custom[namespace].step !== "") step = usedObjects[dialogLinkedStateIds["SATURATION"]].common.custom[namespace].step.toString();
				dialogContent += "<label for='DialogSaturationSlider' ><image src='./images/saturation.png' / style='width:16px; height:16px;'>&nbsp;" + _("Saturation") + ":</label>";
				dialogContent += "<input type='number' data-type='range' class='iQontrolDialogSlider colorSaturationPicker' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + ((dialogStates["SATURATION"] && dialogStates["SATURATION"].readonly) || (dialogStates["ALTERNATIVE_COLORSPACE_VALUE"] && dialogStates["ALTERNATIVE_COLORSPACE_VALUE"].readonly) || dialogReadonly).toString() + "' data-highlight='false' data-popup-enabled='true' data-show-value='true' name='DialogSaturationSlider' id='DialogSaturationSlider' min='" + min + "' max='" + max + "' step='1'/>";
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					var _deviceId = deviceId;
					var _linkedHueId = dialogLinkedStateIds["HUE"];
					var _linkedSaturationId = dialogLinkedStateIds["SATURATION"];
					var _confirm = (usedObjects[_linkedSaturationId] && typeof usedObjects[_linkedSaturationId].common !== udef && typeof usedObjects[_linkedSaturationId].common.custom !== udef && typeof usedObjects[_linkedSaturationId].common.custom[namespace] !== udef && typeof usedObjects[_linkedSaturationId].common.custom[namespace].confirm !== udef && usedObjects[_linkedSaturationId].common.custom[namespace].confirm == true);
					var DialogSaturationSliderReadoutTimer;
					var updateFunction = function(){
						var stateSaturation = getStateObject(_linkedSaturationId);
						if (stateSaturation && typeof stateSaturation.val !== udef){
							$("#DialogSaturationSlider").val(stateSaturation.val);
							$("#DialogSaturationSlider").slider('refresh');
						}
					};
					if (_linkedSaturationId) dialogUpdateFunctions[_linkedSaturationId].push(updateFunction);
					var updateHueFunction = function(){
						var stateHue = getStateObject(_linkedHueId);
						var hueMin = stateHue && stateHue.min || 0;
						var hueMax = stateHue && stateHue.max || 359;
						if (stateHue && typeof stateHue.val !== udef){
							var hue = ((stateHue.val - hueMin) / (hueMax - hueMin)) * 359;
							$("#DialogSaturationSlider + .ui-slider-track").attr('style', 'background-image: linear-gradient(to right, white, hsl(' + parseInt(hue) + ', 100%, 50%)) !important;');
						} else {
							$("#DialogSaturationSlider + .ui-slider-track").attr('style', '');
						}
					};
					if (_linkedHueId) dialogUpdateFunctions[_linkedHueId].push(updateHueFunction);
					var bindingFunction = function(){
						$('#DialogSaturationSlider').slider({
							start: function(event, ui){
								clearInterval(DialogSaturationSliderReadoutTimer);
								if (!_confirm){
									DialogSaturationSliderReadoutTimer = setInterval(function(){
										if(_linkedSaturationId && _linkedSaturationId != ""){
											setState(_linkedSaturationId, _deviceId, $("#DialogSaturationSlider").val());
										}
									}, 500);
								}
							},
							stop: function(event, ui) {
								clearInterval(DialogSaturationSliderReadoutTimer);
								if(_linkedSaturationId && _linkedSaturationId != ""){
									setState(_linkedSaturationId, _deviceId, $("#DialogSaturationSlider").val());
								}
							}
						});
					};
					dialogBindingFunctions.push(bindingFunction);
				})(); //<--End Closure
			}
			//----ColorBrightness
			if(dialogStates["COLOR_BRIGHTNESS"] && typeof dialogStates["COLOR_BRIGHTNESS"].val !== udef  && ((dialogStates["WHITE_BRIGHTNESS"] && typeof dialogStates["WHITE_BRIGHTNESS"].val !== udef) || (!dialogStates["LEVEL"] || typeof dialogStates["LEVEL"].val == udef))){ //brightness is only necessary, if the light has color and white brightness or if .LEVEL absent - otherwise the level ist regulated via .LEVEL
				var min = dialogStates["COLOR_BRIGHTNESS"] && dialogStates["COLOR_BRIGHTNESS"].min || 0;
				var max = dialogStates["COLOR_BRIGHTNESS"] && dialogStates["COLOR_BRIGHTNESS"].max || 100;
				var step = "1";
				if (max - min < 100) step = "0.1";
				if (max - min < 10) step = "0.01";
				if (max - min < 1) step = "0.001";
				if(usedObjects[dialogLinkedStateIds["COLOR_BRIGHTNESS"]] && typeof usedObjects[dialogLinkedStateIds["COLOR_BRIGHTNESS"]].common !== udef && typeof usedObjects[dialogLinkedStateIds["COLOR_BRIGHTNESS"]].common.custom !== udef && typeof usedObjects[dialogLinkedStateIds["COLOR_BRIGHTNESS"]].common.custom[namespace] !== udef && typeof usedObjects[dialogLinkedStateIds["COLOR_BRIGHTNESS"]].common.custom[namespace].step !== udef && usedObjects[dialogLinkedStateIds["COLOR_BRIGHTNESS"]].common.custom[namespace].step !== "") step = usedObjects[dialogLinkedStateIds["COLOR_BRIGHTNESS"]].common.custom[namespace].step.toString();
				dialogContent += "<label for='DialogColorBrightnessSlider' ><image src='./images/slider.png' / style='width:16px; height:16px;'>&nbsp;" + _("Brightness of color") + ":</label>";
				dialogContent += "<input type='number' data-type='range' class='iQontrolDialogSlider' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + ((dialogStates["COLOR_BRIGHTNESS"] && dialogStates["COLOR_BRIGHTNESS"].readonly) || (dialogStates["ALTERNATIVE_COLORSPACE_VALUE"] && dialogStates["ALTERNATIVE_COLORSPACE_VALUE"].readonly) || dialogReadonly).toString() + "' data-highlight='true' data-popup-enabled='true' data-show-value='true' name='DialogColorBrightnessSlider' id='DialogColorBrightnessSlider' min='" + min + "' max='" + max + "' step='1'/>";
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					var _deviceId = deviceId;
					var _linkedColorBrightnessId = dialogLinkedStateIds["COLOR_BRIGHTNESS"];
					var _confirm = (usedObjects[_linkedColorBrightnessId] && typeof usedObjects[_linkedColorBrightnessId].common !== udef && typeof usedObjects[_linkedColorBrightnessId].common.custom !== udef && typeof usedObjects[_linkedColorBrightnessId].common.custom[namespace] !== udef && typeof usedObjects[_linkedColorBrightnessId].common.custom[namespace].confirm !== udef && usedObjects[_linkedColorBrightnessId].common.custom[namespace].confirm == true);
					var DialogColorBrightnessSliderReadoutTimer;
					var updateFunction = function(){
						var stateColorBrightness = getStateObject(_linkedColorBrightnessId);
						if (stateColorBrightness && typeof stateColorBrightness.val !== udef){
							$("#DialogColorBrightnessSlider").val(stateColorBrightness.val);
							$("#DialogColorBrightnessSlider").slider('refresh');
						}
					};
					if (_linkedColorBrightnessId) dialogUpdateFunctions[_linkedColorBrightnessId].push(updateFunction);
					var bindingFunction = function(){
						$('#DialogColorBrightnessSlider').slider({
							start: function(event, ui){
								clearInterval(DialogColorBrightnessSliderReadoutTimer);
								if (!_confirm){
									DialogColorBrightnessSliderReadoutTimer = setInterval(function(){
										if(_linkedColorBrightnessId && _linkedColorBrightnessId != ""){
											setState(_linkedColorBrightnessId, _deviceId, $("#DialogColorBrightnessSlider").val());
										}
									}, 500);
								}
							},
							stop: function(event, ui) {
								clearInterval(DialogColorBrightnessSliderReadoutTimer);
								if(_linkedColorBrightnessId && _linkedColorBrightnessId != ""){
									setState(_linkedColorBrightnessId, _deviceId, $("#DialogColorBrightnessSlider").val());
								}
							}
						});
					};
					dialogBindingFunctions.push(bindingFunction);
				})(); //<--End Closure
			}
			//----ColorTemperaturePicker
			if(dialogStates["CT"]  && typeof dialogStates["CT"].val !== udef){
				var min = dialogStates["CT"] && dialogStates["CT"].min || 0;
				var max = dialogStates["CT"] && dialogStates["CT"].max || 100;
				var step = "1";
				if (max - min < 100) step = "0.1";
				if (max - min < 10) step = "0.01";
				if (max - min < 1) step = "0.001";
				if(usedObjects[dialogLinkedStateIds["CT"]] && typeof usedObjects[dialogLinkedStateIds["CT"]].common !== udef && typeof usedObjects[dialogLinkedStateIds["CT"]].common.custom !== udef && typeof usedObjects[dialogLinkedStateIds["CT"]].common.custom[namespace] !== udef && typeof usedObjects[dialogLinkedStateIds["CT"]].common.custom[namespace].step !== udef && usedObjects[dialogLinkedStateIds["CT"]].common.custom[namespace].step !== "") step = usedObjects[dialogLinkedStateIds["CT"]].common.custom[namespace].step.toString();
				var invertCt = false;
				if(deviceId && usedObjects[deviceId] && typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.invertCt != udef && usedObjects[deviceId].native.invertCt == "true") invertCt = !invertCt;
				dialogContent += "<hr>";
				dialogContent += "<label for='DialogCtSlider' ><image src='./images/colortemperature.png' / style='width:16px; height:16px;'>&nbsp;" + _("Color-Temperature") + ":</label>";
				dialogContent += "<input type='number' data-type='range' class='iQontrolDialogSlider colorTemperaturePicker" + (invertCt?" invert":"") + "' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + ((dialogStates["CT"] && dialogStates["CT"].readonly) || (dialogStates["ALTERNATIVE_COLORSPACE_VALUE"] && dialogStates["ALTERNATIVE_COLORSPACE_VALUE"].readonly) || dialogReadonly).toString() + "' data-highlight='false' data-popup-enabled='true' data-show-value='true' name='DialogCtSlider' id='DialogCtSlider' min='" + min + "' max='" + max + "' step='1'/>";
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					var _deviceId = deviceId;
					var _linkedCtId = dialogLinkedStateIds["CT"];
					var _confirm = (usedObjects[_linkedCtId] && typeof usedObjects[_linkedCtId].common !== udef && typeof usedObjects[_linkedCtId].common.custom !== udef && typeof usedObjects[_linkedCtId].common.custom[namespace] !== udef && typeof usedObjects[_linkedCtId].common.custom[namespace].confirm !== udef && usedObjects[_linkedCtId].common.custom[namespace].confirm == true);
					var DialogCtSliderReadoutTimer;
					var updateFunction = function(){
						var stateCt = getStateObject(_linkedCtId);
						if (stateCt && typeof stateCt.val !== udef){
							$("#DialogCtSlider").val(stateCt.val);
							$("#DialogCtSlider").slider('refresh');
						} 
					};
					if (_linkedCtId) dialogUpdateFunctions[_linkedCtId].push(updateFunction);
					var bindingFunction = function(){
						$('#DialogCtSlider').slider({
							start: function(event, ui){
								clearInterval(DialogCtSliderReadoutTimer);
								if (!_confirm){
									DialogCtSliderReadoutTimer = setInterval(function(){
										if(_linkedCtId && _linkedCtId != ""){
											setState(_linkedCtId, _deviceId, $("#DialogCtSlider").val());
										}
									}, 500);
								}
							},
							stop: function(event, ui) {
								clearInterval(DialogCtSliderReadoutTimer);
								if(_linkedCtId && _linkedCtId != ""){
									setState(_linkedCtId, _deviceId, $("#DialogCtSlider").val());
								}
							}
						});
					};
					dialogBindingFunctions.push(bindingFunction);
				})(); //<--End Closure
			}
			//----WhiteBrightness
			if(dialogStates["WHITE_BRIGHTNESS"] && typeof dialogStates["WHITE_BRIGHTNESS"].val !== udef  && ((dialogStates["HUE"] && typeof dialogStates["HUE"].val !== udef) || (!dialogStates["LEVEL"] || typeof dialogStates["LEVEL"].val == udef))){ //brightness is only necessary, if the light has color and white or if .LEVEL absent - otherwise the level ist regulated via .LEVEL
				var min = dialogStates["WHITE_BRIGHTNESS"] && dialogStates["WHITE_BRIGHTNESS"].min || 0;
				var max = dialogStates["WHITE_BRIGHTNESS"] && dialogStates["WHITE_BRIGHTNESS"].max || 100;
				var step = "1";
				if (max - min < 100) step = "0.1";
				if (max - min < 10) step = "0.01";
				if (max - min < 1) step = "0.001";
				if(usedObjects[dialogLinkedStateIds["WHITE_BRIGHTNESS"]] && typeof usedObjects[dialogLinkedStateIds["WHITE_BRIGHTNESS"]].common !== udef && typeof usedObjects[dialogLinkedStateIds["WHITE_BRIGHTNESS"]].common.custom !== udef && typeof usedObjects[dialogLinkedStateIds["WHITE_BRIGHTNESS"]].common.custom[namespace] !== udef && typeof usedObjects[dialogLinkedStateIds["WHITE_BRIGHTNESS"]].common.custom[namespace].step !== udef && usedObjects[dialogLinkedStateIds["WHITE_BRIGHTNESS"]].common.custom[namespace].step !== "") step = usedObjects[dialogLinkedStateIds["WHITE_BRIGHTNESS"]].common.custom[namespace].step.toString();
				dialogContent += "<label for='DialogWhiteBrightnessSlider' ><image src='./images/slider.png' / style='width:16px; height:16px;'>&nbsp;" + _("Brightness of white") + ":</label>";
				dialogContent += "<input type='number' data-type='range' class='iQontrolDialogSlider' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + ((dialogStates["WHITE_BRIGHTNESS"] && dialogStates["WHITE_BRIGHTNESS"].readonly) || (dialogStates["ALTERNATIVE_COLORSPACE_VALUE"] && dialogStates["ALTERNATIVE_COLORSPACE_VALUE"].readonly) || dialogReadonly).toString() + "' data-highlight='true' data-popup-enabled='true' data-show-value='true' name='DialogWhiteBrightnessSlider' id='DialogWhiteBrightnessSlider' min='" + min + "' max='" + max + "' step='1'/>";
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					var _deviceId = deviceId;
					var _linkedWhiteBrightnessId = dialogLinkedStateIds["WHITE_BRIGHTNESS"];
					var _confirm = (usedObjects[_linkedWhiteBrightnessId] && typeof usedObjects[_linkedWhiteBrightnessId].common !== udef && typeof usedObjects[_linkedWhiteBrightnessId].common.custom !== udef && typeof usedObjects[_linkedWhiteBrightnessId].common.custom[namespace] !== udef && typeof usedObjects[_linkedWhiteBrightnessId].common.custom[namespace].confirm !== udef && usedObjects[_linkedWhiteBrightnessId].common.custom[namespace].confirm == true);
					var DialogWhiteBrightnessSliderReadoutTimer;
					var updateFunction = function(){
						var stateWhiteBrightness = getStateObject(_linkedWhiteBrightnessId);
						if (stateWhiteBrightness && typeof stateWhiteBrightness.val !== udef){
							$("#DialogWhiteBrightnessSlider").val(stateWhiteBrightness.val);
							$("#DialogWhiteBrightnessSlider").slider('refresh');
						}
					};
					if (_linkedWhiteBrightnessId) dialogUpdateFunctions[_linkedWhiteBrightnessId].push(updateFunction);
					var bindingFunction = function(){
						$('#DialogWhiteBrightnessSlider').slider({
							start: function(event, ui){
								clearInterval(DialogWhiteBrightnessSliderReadoutTimer);
								if (!_confirm){
									DialogWhiteBrightnessSliderReadoutTimer = setInterval(function(){
										if(_linkedWhiteBrightnessId && _linkedWhiteBrightnessId != ""){
											setState(_linkedWhiteBrightnessId, _deviceId, $("#DialogWhiteBrightnessSlider").val());
										}
									}, 500);
								}
							},
							stop: function(event, ui) {
								clearInterval(DialogWhiteBrightnessSliderReadoutTimer);
								if(_linkedWhiteBrightnessId && _linkedWhiteBrightnessId != ""){
									setState(_linkedWhiteBrightnessId, _deviceId, $("#DialogWhiteBrightnessSlider").val());
								}
							}
						});
					};
					dialogBindingFunctions.push(bindingFunction);
				})(); //<--End Closure
			}
			//----EffectMode
			if(dialogStates["EFFECT"] && dialogStates["EFFECT"].type){
				dialogContent += "<hr>";
				dialogContent += "<label for='DialogEffectValueList' ><image src='./images/variable.png' / style='width:16px; height:16px;'>&nbsp;" + _("Effect") + ":</label>";
				dialogContent += "<select  class='iQontrolDialogValueList DialogEffectValueList' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + (dialogStates["EFFECT"].readonly || dialogReadonly).toString() + "' name='DialogEffectValueList' id='DialogEffectValueList' data-native-menu='false'>";
				for(val in dialogStates["EFFECT"].valueList){
						dialogContent += "<option value='" + val + "'>" + _(dialogStates["EFFECT"].valueList[val]) + "</option>";
					}
				dialogContent += "</select>";
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					var _deviceId = deviceId;
					var _linkedEffectId = dialogLinkedStateIds["EFFECT"];
					var updateFunction = function(){
						var stateEffectId = getStateObject(_linkedEffectId);
						if (stateEffectId){
							$("#DialogEffectValueList").val(stateEffectId.val.toString());
							$("#DialogEffectValueList").selectmenu('refresh');
						}
					};
					dialogUpdateFunctions[_linkedEffectId].push(updateFunction);
					var bindingFunction = function(){
						$('.DialogEffectValueList').on('change', function(e) {
							setState(_linkedEffectId, _deviceId, $("#DialogEffectValueList option:selected").val());
						});
					};
					dialogBindingFunctions.push(bindingFunction);
				})(); //<--End Closure
			}
			if(dialogStates["EFFECT_NEXT"] && dialogStates["EFFECT_NEXT"].type && !dialogStates["EFFECT_NEXT"].readonly && !dialogReadonly){
				dialogContent += "<hr>";
				dialogContent += "<label for='DialogEffectNextButton' ><image src='./images/variable.png' / style='width:16px; height:16px;'>&nbsp;" + _("Effect") + ":</label>";
				dialogContent += "<a data-role='button' data-mini='false' class='iQontrolDialogButton' data-iQontrol-Device-ID='" + deviceId + "' name='DialogEffectNextButton' id='DialogEffectNextButton'>" + _("Next") + "</a>";
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					var _deviceId = deviceId;
					var _linkedEffectNextId = dialogLinkedStateIds["EFFECT_NEXT"];
					var bindingFunction = function(){
						$('#DialogEffectNextButton').on('click', function(e) {
							startProgram(_linkedEffectNextId, _deviceId);
						});
					};
					dialogBindingFunctions.push(bindingFunction);
				})(); //<--End Closure
			}
			if(((dialogStates["EFFECT_SPEED_DOWN"] && dialogStates["EFFECT_SPEED_DOWN"].type) || (dialogStates["EFFECT_SPEED_UP"] && dialogStates["EFFECT_SPEED_UP"].type)) && !dialogStates["EFFECT_SPEED_UP"].readonly && !dialogStates["EFFECT_SPEED_UP"].readonly && !dialogReadonly){
				dialogContent += "<div data-role='controlgroup' data-type='horizontal'>";
				if(dialogStates["EFFECT_SPEED_DOWN"] && dialogStates["EFFECT_SPEED_DOWN"].type){
					dialogContent += "<a data-role='button' data-mini='false' data-icon='minus' data-iconpos='left' class='iQontrolDialogButton' data-iQontrol-Device-ID='" + deviceId + "' name='DialogEffectSpeedDownButton' id='DialogEffectSpeedDownButton'>" + _("Slower") + "</a>";
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedEffectSpeedDownId = dialogLinkedStateIds["EFFECT_SPEED_DOWN"];
						var bindingFunction = function(){
							$('#DialogEffectSpeedDownButton').on('click', function(e) {
								startProgram(_linkedEffectSpeedDownId, _deviceId);
							});
						};
						dialogBindingFunctions.push(bindingFunction);
					})(); //<--End Closure
				}
				if(dialogStates["EFFECT_SPEED_UP"] && dialogStates["EFFECT_SPEED_UP"].type){
					dialogContent += "<a data-role='button' data-mini='false' data-icon='plus' data-iconpos='right' class='iQontrolDialogButton' data-iQontrol-Device-ID='" + deviceId + "' name='DialogEffectSpeedUpButton' id='DialogEffectSpeedUpButton'>" + _("Faster") + "</a>";
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedEffectSpeedUpId = dialogLinkedStateIds["EFFECT_SPEED_UP"];
						var bindingFunction = function(){
							$('#DialogEffectSpeedUpButton').on('click', function(e) {
								startProgram(_linkedEffectSpeedUpId, _deviceId);
							});
						};
						dialogBindingFunctions.push(bindingFunction);
					})(); //<--End Closure
				}
				dialogContent += "</div>";
			}
			break;

			default:
			//Nothing to do
		}
		//--Universal additional Content
		//----Additional Info
		//Special: ADDITIONAL_INFO is an Array: [{"name":"Name", "type":"LinkedState", "value":"LinkedStateId"}, ...]
		var linkedAdditionalInfoIds;
		if (dialogStates["ADDITIONAL_INFO"] && typeof dialogStates["ADDITIONAL_INFO"].val != udef) linkedAdditionalInfoIds = tryParseJSON(dialogStates["ADDITIONAL_INFO"].val);
		var linkedAdditionalInfoIdsAreValid = false;
		if(Array.isArray(linkedAdditionalInfoIds) && typeof linkedAdditionalInfoIds == 'object') linkedAdditionalInfoIds.forEach(function(element){
			if (typeof element.name !== udef && element.name !== udef){
				linkedAdditionalInfoIdsAreValid = true;
			}
		});
		if(linkedAdditionalInfoIdsAreValid){
			//get additional linkedStates from Array:
			linkedAdditionalInfoIds.forEach(function(element){
				if (typeof states[element.value] == udef) {
					dialogStateIdsToFetch.push(element.value);
				}
				if (typeof usedObjects[element.value] == udef) {
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						var _elementValue = element.value;
						fetchObject(_elementValue, function(error){ updateState(_elementValue, "ignorePreventUpdateForDialog"); });
					})(); //<--End Closure
				}
				dialogLinkedStateIdsToUpdate.push(element.value);
			});
			dialogContent += "<div data-role='collapsible' data-iconpos='right' data-inset='true' class=''>";
				dialogContent += "<h4><image src='./images/variable.png' / style='width:16px; height:16px;'>&nbsp;" + _("Additional Infos") + ":</h4>";
				dialogContent += "<div id='DialogAdditionalInfosContent'>";
					dialogContent += "<ul class='iQontrolDialogAdditionalInfoList' id='DialogAdditionalInfosContentList' data-iQontrol-Device-ID='" + deviceId + "'></ul>";
				dialogContent += "</div>";
			dialogContent += "</div>";
			(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
				var _linkedStateIds = linkedAdditionalInfoIds;
				var updateFunction = function(){
					$("#DialogAdditionalInfosContentList").html("");
					_linkedStateIds.forEach(function(_element){
						var state = getStateObject(_element.value);
						if(state) $("#DialogAdditionalInfosContentList").append("<li>" + _element.name + ": " + state.val + state.unit || "" + "</li>");
					});
				};
				_linkedStateIds.forEach(function(_element){
					if(!dialogUpdateFunctions[_element.value]) dialogUpdateFunctions[_element.value] = [];
					dialogUpdateFunctions[_element.value].push(updateFunction);
				});
			})(); //<--End Closure
		}
		//----LinkedView
		if (typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.linkedView != udef && usedObjects[deviceId].native.linkedView != "") { //Link to other view
			var linkedView = usedObjects[deviceId].native.linkedView;
			var linkedViewName = linkedView.substring(linkedView.lastIndexOf('.') + 1);
			var linkedViewHistoryPosition = viewLinksToOtherViews.indexOf(usedObjects[deviceId].native.linkedView);
			dialogContent += "<hr>";
			dialogContent += "<label for='DialogLinkedViewButton' ><image src='./images/view.png' / style='width:16px; height:16px;'>&nbsp;" + _("Link to other view") + ":</label>";
			dialogContent += "<a data-role='button' data-mini='false' class='iQontrolDialogButton' data-iQontrol-Device-ID='" + deviceId + "' name='DialogLinkedViewButton' id='DialogLinkedViewButton' onclick='$(\"#DialogContent\").empty(); setTimeout(function(){$(\"#Dialog\").popup(\"close\"); setTimeout(function(){viewHistory = viewLinksToOtherViews; viewHistoryPosition = " + linkedViewHistoryPosition + "; renderView(\"" + usedObjects[deviceId].native.linkedView + "\");}, 200);}, 200);'>" + _("Open %s", linkedViewName) + "</a>";
		}
	dialogContent += "</form>";
	$("#DialogHeaderTitle").html(usedObjects[deviceId].common.name + ":");
	$("#DialogContent").html(dialogContent);
	$("#Dialog").enhanceWithin();
	//Fit slider popup size to text-length
	$('.iQontrolDialogSlider').on('change', function(){
		if ($(this).val() < 9999) {
			$(this).prev('div.ui-slider-popup').removeClass('longText').removeClass('extraLongText');
		} else if ($(this).val() < 99999) {
			$(this).prev('div.ui-slider-popup').addClass('longText').removeClass('extraLongText');
		} else {
			$(this).prev('div.ui-slider-popup').removeClass('longText').addClass('extraLongText');
		}
	});
	for(var i = 0; i < dialogBindingFunctions.length; i++){ dialogBindingFunctions[i](); }
	dialogBindingFunctions = [];
	dialogLinkedStateIdsToUpdate = removeDuplicates(dialogLinkedStateIdsToUpdate);
	for (var i = 0; i < dialogLinkedStateIdsToUpdate.length; i++){updateState(dialogLinkedStateIdsToUpdate[i], "ignorePreventUpdateForDialog");}
	dialogLinkedStateIdsToUpdate = [];
	if(dialogStateIdsToFetch.length > 0) fetchStates(dialogStateIdsToFetch, function(){
		console.log(dialogStateIdsToFetch.length + " additional states fetched while rendering dialog.");
		(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
			var _dialogStateIdsToFetch = dialogStateIdsToFetch;
			for (var i = 0; i < _dialogStateIdsToFetch.length; i++){
				updateState(_dialogStateIdsToFetch[i], "ignorePreventUpdateForDialog");
			}
		})(); //<--End Closure
	});
	//Show or hide Timestamp
	var showTimestamp = null;
	var dialogShowTimestamp = ""; //possible values: "" = auto, "yes", "no", "always", "never"
	if(deviceId && usedObjects[deviceId] && typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.showTimestamp != udef) dialogShowTimestamp = usedObjects[deviceId].native.showTimestamp;
	switch(dialogShowTimestamp){
		case "yes": 
		$('.iQontrolDialogTimestampSwitch.hide').show();
		case "always":
		showTimestamp = true;
		break;
		
		case "no": 
		$('.iQontrolDialogTimestampSwitch.show').show();
		case "never":
		showTimestamp = false;
		break;

		default:
		switch(usedObjects[deviceId].common.role){
			case "iQontrolView": case "iQontrolWindow": case "iQontrolDoor": case "iQontrolGarageDoor": case "iQontrolFire": case "iQontrolTemperature": case "iQontrolHumidity": case "iQontrolBrightness": case "iQontrolMotion":
			showTimestamp = true;
			$('.iQontrolDialogTimestampSwitch.hide').show();
			break;

			default:
			showTimestamp = false;
			$('.iQontrolDialogTimestampSwitch.show').show();
		}
	}
	if (showTimestamp){ 
		$('#DialogTimestamp').show();
	}
	$('.iQontrolDialogTimestampSwitch.show').on('click', function(){
		$('#DialogTimestamp').show();
		$('.iQontrolDialogTimestampSwitch.show').hide();
		$('.iQontrolDialogTimestampSwitch.hide').show();
	});
	$('.iQontrolDialogTimestampSwitch.hide').on('click', function(){
		$('#DialogTimestamp').hide();
		$('.iQontrolDialogTimestampSwitch.show').show();
		$('.iQontrolDialogTimestampSwitch.hide').hide();
	});
}

function dialogUpdateTimestamp(state){
	if(typeof state != udef && typeof state.lc != udef && state.lc != ""){
		if(state.lc > parseInt($('#DialogTimestamp').data('timestamp') || 0)){
			$('#DialogTimestamp').data('timestamp', state.lc);
			var timestamp = new Date(state.lc);
			var timestampText = ('0' + timestamp.getHours()).slice(-2) + ":" + ('0' + timestamp.getMinutes()).slice(-2);
			var now = new Date();
			if(now.getFullYear() != timestamp.getFullYear() || now.getMonth() != timestamp.getMonth() || now.getDate() != timestamp.getDate()){
				timestampText = ('0' + timestamp.getDate()).slice(-2) + "." + ('0' + timestamp.getMonth()).slice(-2) + "." + timestamp.getFullYear() + ", " + timestampText;
			}
			$('#DialogTimestampText').html(timestampText);
		}
	}
}

function dialogThermostatPartyModeCheckConsistency(){
	var now = new Date();
	var year = now.getFullYear() - 2000;
	var partyModeStartHour = $("#DialogThermostatPartyModeStartHour")[0].selectedIndex;
	var partyModeStartMin = $("#DialogThermostatPartyModeStartMin")[0].selectedIndex * 30;
	var partyModeStartDay = $("#DialogThermostatPartyModeStartDay")[0].selectedIndex + 1;
	var partyModeStartMonth = $("#DialogThermostatPartyModeStartMonth")[0].selectedIndex + 1;
	var partyModeStartYear = $("#DialogThermostatPartyModeStartYear")[0].selectedIndex + year;
	var partyModeStartMoment = new Date(partyModeStartYear + 2000, partyModeStartMonth - 1, partyModeStartDay, partyModeStartHour, partyModeStartMin);
	var partyModeStopHour = $("#DialogThermostatPartyModeStopHour")[0].selectedIndex;
	var partyModeStopMin = $("#DialogThermostatPartyModeStopMin")[0].selectedIndex * 30;
	var partyModeStopDay = $("#DialogThermostatPartyModeStopDay")[0].selectedIndex + 1;
	var partyModeStopMonth = $("#DialogThermostatPartyModeStopMonth")[0].selectedIndex + 1;
	var partyModeStopYear = $("#DialogThermostatPartyModeStopYear")[0].selectedIndex + year;
	var partyModeStopMoment = new Date(partyModeStopYear + 2000, partyModeStopMonth - 1, partyModeStopDay, partyModeStopHour, partyModeStopMin);
	var error = false;
	if(partyModeStartMoment < now) { $('#DialogThermostatPartyModeStartMomentError').show(); error = true; } else { $('#DialogThermostatPartyModeStartMomentError').hide(); }
	if(partyModeStopMoment <= partyModeStartMoment) { $('#DialogThermostatPartyModeStopMomentError').show(); error = true; } else { $('#DialogThermostatPartyModeStopMomentError').hide(); }
	if(error) $("input[name='DialogThermostatPartyModeSave']").attr("disabled", "disabled"); else $("input[name='DialogThermostatPartyModeSave']").attr("disabled", false);
}

//++++++++++ GENERAL ++++++++++
//Enable swiping
$(document).one("pagecreate", ".swipePage", function(){
	$(document).on("swiperight", ".ui-page", function(event){
		viewSwipe("right");
	});
	$(document).on("swipeleft", ".ui-page", function(event){
		viewSwipe("left");
	});
});
$(document).on('swipeleft swiperight', '#Dialog', function(event) { //Disable swiping on dialog
	event.stopPropagation();
	event.preventDefault();
});

//Document ready - start connection
$(document).ready(function(){
	//Init Toolbar
	$("[data-role='header'], [data-role='footer']").toolbar();

	//Init Dialog
	$('#Dialog').on('popupbeforeposition', function(){$('#Toolbar').toolbar('hide');});
	$('#Dialog').on('popupafterclose', function(){
		actualDialogId = "";
		if($('#Toolbar').hasClass('ui-fixed-hidden')) $('#Toolbar').toolbar('show');
	});

	//PullToRefresh
	$('#ViewMain').ptrLight({
		'refresh': function() {
			if(homeId != "" && actualViewId != "" && actualViewId != homeId) {
				getStarted();
			} else {
				window.location.reload();
			}
		},
		ignoreThreshold: 20,
		pullThreshold: $(window).height() / 2,
		maxPullThreshold: $(window).height(),
		spinnerTimeout: 100,
		allowPtrWhenStartedWhileScrolled: false,
		scrollingDom: $('#View')
	});

	//Init socket.io
	servConn.init(connOptions, connCallbacks);
	servConn.namespace = namespace;
	servConn.setReconnectInterval(500);
	servConn.setReloadTimeout(30);
});

//Check Connection when opening page
var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
	hidden = "hidden";
	visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
	hidden = "msHidden";
	visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
	hidden = "webkitHidden";
	visibilityChange = "webkitvisibilitychange";
}
if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
	console.log("This browser doesn' support the Page Visibility API.");
} else {
	document.addEventListener(visibilityChange, handleVisibilityChange, false);
}
function handleVisibilityChange() {
	if (!document[hidden]) { //Page gets visible
		var connected = servConn.getIsConnected() || false;
		if (connected) {
			console.log("Page visible-event - socket is connected");
		} else {
			console.log("Page visible-event - socket is disconnected");
			$('.loader').show();
		}
	}
}

//Refresh Background on resize and orientationchange
var resizeTimeout = false;
$(window).on('orientationchange resize', function(){
	if(resizeTimeout) clearTimeout(resizeTimeout);
	resizeTimeout = setTimeout(function(){
		console.log("orientationchange / resize");
		resizeDevicesToFitScreen();
		$.backstretch("resize"); //Refresh background
		resizeTimeout = false;
	}, 250);
});
function resizeDevicesToFitScreen(){
	if (!options.LayoutViewResizeDevicesToFitScreenDisabled){	
		removeCustomCSS('resizeDevicesToFitScreen');
		var screenSize = $(window).innerWidth() -6; //6 is padding-left and padding-right
		var deviceSize = $('.iQontrolDevicePressureIndicator').outerWidth(true);
		if(options.LayoutViewResizeDevicesToFitScreenOnBigScreens || screenSize <= (options.LayoutViewResizeDevicesToFitScreenTreshold || 600)){
			var zoom = screenSize / (Math.round(screenSize/deviceSize) * deviceSize);
			console.log("resizeDevicesToFitScreen with zoom-factor " + zoom);
			customCSS = "#ViewContent{";
			customCSS += "	webkit-transform: scale(" + zoom +");";
			customCSS += "	   moz-transform: scale(" + zoom +");";
			customCSS += "	       transform: scale(" + zoom +");";
			customCSS += "	width: " + ((100/zoom) + 1) +"% !important;";
			customCSS += "}";
			addCustomCSS(customCSS, "resizeDevicesToFitScreen");
		}
	}
}
