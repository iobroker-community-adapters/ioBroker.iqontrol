"use strict";

/*
 * Created with @iobroker/create-adapter v1.11.0
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require("@iobroker/adapter-core");

// Load your modules here, e.g.:
// const fs = require("node:fs");
var createdObjects = [];
var allObjects = [];
var usedStates = [];
var systemLanguage = "en";
var lists = [];
var triggerIntervals = [];
var udef = 'undefined';
var collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
const emptyState = {val: null, ack: false, ts: 0, lc: 0};
const translations = {
    "opened": {                                      "en": "opened",                                          "de": "geöffnet",                                        "ru": "откр",                                            "pt": "aberto",                                          "nl": "geopend",                                         "fr": "ouvert",                                          "it": "aperto",                                          "es": "abierto",                                         "pl": "otwarty",                                         "zh-cn": "打开"},
    "closed": {                                      "en": "closed",                                          "de": "geschlossen",                                     "ru": "закр",                                            "pt": "fechado",                                         "nl": "gesloten",                                        "fr": "fermé",                                           "it": "chiuso",                                          "es": "cerrado",                                         "pl": "zamknięte",                                       "zh-cn": "关闭"},
    "OK": {                                          "en": "OK",                                              "de": "OK",                                              "ru": "OK",                                              "pt": "OK",                                              "nl": "OK",                                              "fr": "OK",                                              "it": "OK",                                              "es": "OK",                                              "pl": "OK",                                              "zh-cn": "确定"},
    "Alarm": {                                       "en": "Alarm",                                           "de": "Alarmgeber",                                      "ru": "Сигнализация",                                    "pt": "Alarme",                                          "nl": "Alarm",                                           "fr": "Alarme",                                          "it": "Allarme",                                         "es": "Alarma",                                          "pl": "Alarm",                                           "zh-cn": "报警"},
    "triggered": {                                   "en": "triggered",                                       "de": "ausgelöst",                                       "ru": "срабатывает",                                     "pt": "acionado",                                        "nl": "aanleiding",                                      "fr": "déclenché",                                       "it": "attivato",                                        "es": "activa",                                          "pl": "działa",                                          "zh-cn": "触发"},
    "on": {                                          "en": "on",                                              "de": "Ein",                                             "ru": "вкл",                                             "pt": "no",                                              "nl": "op",                                              "fr": "sur",                                             "it": "su",                                              "es": "en",                                              "pl": "na",                                              "zh-cn": "上"},
    "off": {                                         "en": "off",                                             "de": "Aus",                                             "ru": "выкл",                                            "pt": "fora",                                            "nl": "uit",                                             "fr": "off",                                             "it": "off",                                             "es": "off",                                             "pl": "od",                                              "zh-cn": "关闭"},
    "true": {                                        "en": "true",                                            "de": "ja",                                              "ru": "да",                                              "pt": "verdadeiro",                                      "nl": "waar",                                            "fr": "vrai",                                            "it": "vero",                                            "es": "cierto",                                          "pl": "prawda",                                          "zh-cn": "真的"},
    "false": {                                       "en": "false",                                           "de": "nein",                                            "ru": "нет",                                             "pt": "falso",                                           "nl": "false",                                           "fr": "faux",                                            "it": "false",                                           "es": "falso",                                           "pl": "fałszywe",                                        "zh-cn": "假"},
};

//++++++++++ HELPERS: GENERAL FUNCTIONS ++++++++++
function idEncode(id){
	return id.replace(/[\.\]\[\*,;'"`<>?]/g, "_").replace(/\.$/g, ""); //Unallowed chars: .][*,;'"`<>?
}

function idEncodePointAllowed(id){
	return id.replace(/[\]\[\*,;'"`<>?]/g, "_").replace(/\.$/g, ""); //Unallowed chars: ][*,;'"`<>?
}

function checkCondition(value, condition, conditionValue, conditionValueSeparator){
	if(typeof conditionValue == udef) return null;
	let conditionValues = [];
	if(typeof conditionValue == "string" && conditionValueSeparator){
		conditionValues = conditionValue.split(conditionValueSeparator).map(str => str.trim());
	} else {
		conditionValues = [conditionValue];
	}
	if (typeof value == "undefined" || value === null) value = "null";
	switch(condition || ""){
		case "at":
		return true;
		break;

		case "af":
		return false;
		break;

		case "eqt":
		if (value.toString().toLowerCase() == "false" || value.toString().toLowerCase() == "null" || value.toString().toLowerCase() == "0" || value.toString().toLowerCase() == "-1" || value.toString().toLowerCase() == ""){
			return false;
		} else {
			return true;
		}

		case "eqf":
		if (value.toString().toLowerCase() == "false" || value.toString().toLowerCase() == "null" || value.toString().toLowerCase() == "0" || value.toString().toLowerCase() == "-1" || value.toString().toLowerCase() == ""){
			return true;
		} else {
			return false;
		}
		break;

		case "eq":
		for(let i = 0; i < conditionValues.length; i++){
			if (value.toString().toLowerCase() == conditionValues[i].toString().toLowerCase()) return true;				
		}
		return false;
		break;

		case "ne":
		for(let i = 0; i < conditionValues.length; i++){
			if (value.toString().toLowerCase() == conditionValues[i].toString().toLowerCase()) return false;				
		}
		return true;
		break;

		case "gt":
		value = value || 0;
		if (value == "null") value = 0;
		for(let i = 0; i < conditionValues.length; i++){
			if (!isNaN(value) && !isNaN(conditionValues[i]) && parseFloat(value) > parseFloat(conditionValues[i])) return true;				
		}
		return false;
		break;

		case "ge":
		value = value || 0;
		if (value == "null") value = 0;
		for(let i = 0; i < conditionValues.length; i++){
			if (!isNaN(value) && !isNaN(conditionValues[i]) && parseFloat(value) >= parseFloat(conditionValues[i])) return true;				
		}
		return false;
		break;

		case "lt":
		value = value || 0;
		if (value == "null") value = 0;
		for(let i = 0; i < conditionValues.length; i++){
			if (!isNaN(value) && !isNaN(conditionValues[i]) && parseFloat(value) < parseFloat(conditionValues[i])) return true;				
		}
		return false;
		break;

		case "le":
		value = value || 0;
		if (value == "null") value = 0;
		for(let i = 0; i < conditionValues.length; i++){
			if (!isNaN(value) && !isNaN(conditionValues[i]) && parseFloat(value) <= parseFloat(conditionValues[i])) return true;				
		}
		return false;
		break;

		case "c":
		for(let i = 0; i < conditionValues.length; i++){
			if (value.toString().toLowerCase().indexOf(conditionValues[i].toString().toLowerCase()) > -1) return true;				
		}
		return false;
		break;

		case "nc":
		for(let i = 0; i < conditionValues.length; i++){
			if (value.toString().toLowerCase().indexOf(conditionValues[i].toString().toLowerCase()) > -1) return false;				
		}
		return true;
		break;

		case "bw":
		for(let i = 0; i < conditionValues.length; i++){
			if (value.toString().toLowerCase().indexOf(conditionValues[i].toString().toLowerCase()) == 0) return true;				
		}
		return false;
		break;

		case "nbw":
		for(let i = 0; i < conditionValues.length; i++){
			if (value.toString().toLowerCase().indexOf(conditionValues[i].toString().toLowerCase()) == 0) return false;				
		}
		return true;
		break;

		case "ew":
		for(let i = 0; i < conditionValues.length; i++){
			if (value.toString().toLowerCase().endsWith(conditionValues[i].toString().toLowerCase())) return true;				
		}
		return false;
		break;
		
		case "new":
		for(let i = 0; i < conditionValues.length; i++){
			if (value.toString().toLowerCase().endsWith(conditionValues[i].toString().toLowerCase())) return false;				
		}
		return true;
		break;

		default:
		return null;
	}
	return null;
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
}

function removeDuplicates(array) { //Removes duplicates from an array
	let seen = {};
	return array.filter(function(item) {
		return seen.hasOwnProperty(item) ? false : (seen[item] = true);
	});
}

function getName(id){
	let name = allObjects[id] && allObjects[id].common && allObjects[id].common.name || id;
	if(typeof name == "object") {
		if(name[systemLanguage]) name = name[systemLanguage];
		else if(name["en"]) name = name["en"];
		else if(Object.keys(name).length && typeof Object.keys(name)[0] == "string" && name[Object.keys(name)[0]]) name = name[Object.keys(name)[0]];
		else name = JSON.stringify(name);
	}
	if (allObjects[id] && allObjects[id].type && allObjects[id].type == "instance" && id.lastIndexOf('.') > -1) { //Special: If instance number > 0 add the number to name
		let instanceNumber = id.substring(id.lastIndexOf('.') + 1);
		if (instanceNumber && !isNaN(instanceNumber) && parseInt(instanceNumber) > 0) name += " " + instanceNumber;
	}
	return name || id;	
}

function getParentName(id, mode){
	let parentId;
	let parentName;
	let useId = false;
	if (mode && mode.endsWith("Id")) useId = true;
	if(mode == "parentChannelId" || mode == "parentChannelName"){
		let nextParentId = id.substring(0, id.lastIndexOf('.'));
		while (!parentId && nextParentId){
			if(allObjects[nextParentId] && allObjects[nextParentId].type && allObjects[nextParentId].type.toString().toLowerCase() == "channel"){
				parentId = nextParentId;
			}
			nextParentId = nextParentId.substring(0, nextParentId.lastIndexOf('.'));
		}
	}
	if(((mode == "parentChannelId" || mode == "parentChannelName") && !parentId) || mode == "parentDeviceId" || mode == "parentDeviceName"){
		let nextParentId = id.substring(0, id.lastIndexOf('.'));
		while (!parentId && nextParentId){
			if(allObjects[nextParentId] && allObjects[nextParentId].type && allObjects[nextParentId].type.toString().toLowerCase() == "device"){
				parentId = nextParentId;
			}
			nextParentId = nextParentId.substring(0, nextParentId.lastIndexOf('.'));
		}
	}
	if(!parentId){
		parentId = id.substring(0, id.lastIndexOf('.'));
	}
	if (useId) {
		parentName = parentId;
	} else {
		parentName = getName(parentId);
		if (parentName == id) parentName = getName(id); //parentName not set - use name
		if (parentName == id) { //name also not set - build name from id
			parentName = id.substring(0, id.lastIndexOf('.'));
			parentName = parentName.substring(parentName.lastIndexOf('.') + 1);   
		}
		if (parentName.substr(-2) == ":0"){ //Homematic Maintenence-Kanal
			parentName = parentName.substr(0, parentName.length-2);
		}
	}
	if (parentName == "") parentName = id;
	return parentName;
}

function getPlainTextWithUnit(id, that){
	function _(string){
		return translations[string] && translations[string][systemLanguage] || string;
	}
	let val = (usedStates[id] && typeof usedStates[id].val != "undefined" ? usedStates[id].val : "-");
	let plainText;
	let custom = allObjects[id] && allObjects[id].common && typeof allObjects[id].common.custom !== udef && allObjects[id].common.custom !== null && typeof allObjects[id].common.custom[that.namespace] !== udef && allObjects[id].common.custom[that.namespace] || {};
	let role = allObjects[id] && allObjects[id].common && allObjects[id].common.role || "state";
	if (typeof custom.role !== udef && custom.role !== "") role = custom.role;
	var parentId = id.substring(0, id.lastIndexOf("."));
	if (role == "state" && allObjects[parentId] && typeof allObjects[parentId].common.role != udef && allObjects[parentId].common.role){ //For role 'state' look if there are more informations about the role in the parentObject
		let parentRole = allObjects[parentId] && allObjects[parentId].common && allObjects[parentId].common.role || "";
		switch(parentRole){
			case "switch": case "sensor.alarm": case "sensor.alarm.fire":
			role = parentRole;
			break;
		}
	}
	//--Modify informations depending on the role
	switch(role){
		case "value.window": case "sensor.window": case "sensor.door": case "sensor.lock":
		if (val) plainText = _("opened"); else plainText = _("closed");
		break;

		case "sensor.alarm":
		if (val) plainText = _("OK"); else plainText = _("Alarm");
		break;

		case "sensor.alarm.fire": case "sensor.fire": case "sensor.alarm.flood": case "sensor.flood": case "sensor.alarm.water": case "sensor.water": case "indicator.alarm.fire": case "indicator.fire": case "indicator.alarm.flood": case "indicator.flood": case "indicator.alarm.water": case "indicator.water": case "indicator.leakage":
		if (val) plainText = _("triggered"); else plainText = " ";
		break;

		case "switch": case "Switch": case "switch.light": case "switch.power": case "switch.boost": case "switch.enable": case "switch.active": case "scene.state":
		if (typeof val == 'string') if (val.toLowerCase() == "false" || val.toLowerCase() == "off" || val.toLowerCase() == "0" || val == "") val = false; else val = true;
		if (val) plainText = _("on"); else plainText = _("off");
		break;

		case "button": case "action.execute":
		if (typeof val == 'string') if (val.toLowerCase() == "false" || val.toLowerCase() == "off" || val.toLowerCase() == "0" || val == "") val = false; else val = true;
		if (val) plainText = _("on"); else plainText = _("off");
		break;

		case "state":
		if (allObjects[id] && typeof allObjects[id].native != udef && allObjects[id].native.CONTROL) { //if role is not set correctly it can try to determine role from native.CONTROL
			switch(allObjects[id].native.CONTROL) {
				case "DOOR_SENSOR.STATE":
				if (val) plainText = _("opened"); else plainText = _("closed");
				break;

				case "DANGER.STATE":
				if (val) plainText = _("triggered"); else plainText = " ";
				break;

				case "SWITCH.STATE":
				if (val) plainText = _("on"); else plainText = _("off");
				break;
			}
		}
		break;
	}
	//--Add valueList
	let valueList = {};
	let statesSet = false;
	let valueListString;
	if (typeof custom.states && custom.states){
			valueListString = custom.states;
			statesSet = true;
	} else if (allObjects[id] && typeof allObjects[id].native != udef && allObjects[id].native.states){
			valueListString = allObjects[id].native.states;
			statesSet = true;
	} else if (allObjects[id] && allObjects[id].common.states){
			valueListString = allObjects[id].common.states;
			statesSet = true;
	}
	if (statesSet){
		//----Check format of valueList
		if (typeof valueListString !== "object"){
			if (tryParseJSON(valueListString) == false){
				if (typeof valueListString == "string") valueListString = '{"' + valueListString.replace(/;/g, ',').replace(/:/g, '":"').replace(/,/g, '","') + '"}';
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
	if (statesSet){
		valueList = Object.assign({}, valueListString);
		//----Further modifications of valueList
		if (typeof val !== udef && val !== null && (typeof val == 'boolean' || val.toString().toLowerCase() == "true" || val.toString().toLowerCase() == "false")){ //Convert valueList-Keys to boolean, if they are numbers
			for (let key in valueList){
				let newKey = null;
				if (key == -1 || key == 0 || key == false) newKey = "false";
				if (key == 1 || key == true) newKey = "true";
				if (newKey != null) {
					let dummy = {};
					dummy[newKey] = valueList[key];
					delete Object.assign(valueList, dummy)[key]; //This renames key to newKey
				}
			};
		}
		if (typeof val !== udef && val !== null && typeof valueList[val.toString()] !== udef) plainText = _(valueList[val]); //Modify plainText if val matchs a valueList-Entry
	}
	//--Try to set a plainText, if it has not been set before
	if (plainText == null) {
		if (typeof val == 'string') {
			var number = val * 1;
			if (number.toString() == val) val = number;
		}
		if (typeof val == 'number'){
			var n = (typeof custom.roundDigits != udef && custom.roundDigits !== "" ? custom.roundDigits : 2);
			val =  Math.round(val * Math.pow(10, n)) / Math.pow(10, n);
		} else {
		}
		let unit = (allObjects[id] && allObjects[id].common && typeof allObjects[id].common.unit != "undefined" ? allObjects[id].common.unit : "");
		if (unit == "%") plainText = val + unit; else if (unit != "") plainText = val + " " + unit;	else plainText = val;
	}
	//--Prevent injecting of <script> tags
	if (typeof plainText == "string") {
		plainText = plainText.replace(/<script/gi,"&lt;script").replace(/<\/script/gi,"\&lt;\/script");
	}
	return plainText;
}

async function fetchStates(ids, that){
	for(let idIndex = 0; idIndex < ids.length; idIndex++){
		if(!usedStates[ids[idIndex]]){
		try {
				usedStates[ids[idIndex]] = await that.getForeignStateAsync(ids[idIndex]);
			} catch {
				usedStates[ids[idIndex]] = emptyState;
			}
		}
	}
}

//++++++++++ ADAPTER FUNCTIONS ++++++++++
class Iqontrol extends utils.Adapter {
	/**
	 * @param {Partial<ioBroker.AdapterOptions>} [options={}]
	 */
	constructor(options) {
		//super( Object.assign({name: "iqontrol"}, options) );
		super({ 
			...options,
			name: "iqontrol",
		});
		this.on("ready", this.onReady.bind(this));
		this.on("objectChange", this.onObjectChange.bind(this));
		this.on("stateChange", this.onStateChange.bind(this));
		this.on("message", this.onMessage.bind(this));
		this.on("unload", this.onUnload.bind(this));
	}

	//++++++++++ INFO ++++++++++
	async createInfoConnection(){
		await this.createOrUpdateObject("info.connection", {type: "state"}, {name: "Adapter Connection", desc: "Shows working adapter connection", type: "boolean", role: "indicator.connected"});
	}

	//++++++++++ PASSPHRASE ++++++++++
	async createPassphrase(){
		await this.createOrUpdateObject("passphrase", {type: "state"}, {name: "Passphrase", desc: "See Instance-Settings - Options - Passphrase", type: "string", role: "text", write: false});
	}
	
	//++++++++++ POPUP ++++++++++	
	async createPopup(){
		await this.createOrUpdateObject("Popup.Message", 							{type: "state"}, 	{name: "Message",											type: "string", 	role: "text", 		desc: "Message to be displayed", });
		await this.createOrUpdateObject("Popup.PersistentMessage",		 			{type: "state"}, 	{name: "Persistent Message",								type: "string", 	role: "text", 		desc: "Persistent message to be displayed (persistent means, the popop will be opened on all currently and all in future opened iqontrol instances until confirmed or expired)"});
		await this.createOrUpdateObject("Popup.PersistentExpires",					{type: "state"}, 	{name: "Persistent Message Expires",						type: "number", 	role: "date", 		desc: "Persistent messages will be automatically deleted at this timestamp"});
		await this.createOrUpdateObject("Popup.PersistentUndismissible",			{type: "state"}, 	{name: "Persistent Message Undismissible",					type: "boolean", 	role: "switch", 	desc: "If true, persistent messages won't be deleted after closing them (the are kept until they are expired, so make shure PersistentExpires is set!)"});
		await this.createOrUpdateObject("Popup.PersistentId", 						{type: "state"}, 	{name: "Persistent Message ID",								type: "string", 	role: "text", 		desc: "The message will be saved associated with this (optional) id. Messages can then be deleted with this Id."});
		await this.createOrUpdateObject("Popup.PERSISTENT_MESSAGES_DELETE_ID",		{type: "state"}, 	{name: "Delete this Persistent Message ID",					type: "string", 	role: "text", 		desc: "All pending persistent messages with this id will be deleted. Send null to delete all pending messages."});
		await this.createOrUpdateObject("Popup.PERSISTENT_MESSAGES_SHOW_ID",		{type: "state"}, 	{name: "Show Pending Persistent Messages",					type: "string", 	role: "text", 		desc: "Show pending persistent messages with this id again on all currently opened iQontrol-Instances."});
		await this.createOrUpdateObject("Popup.PERSISTENT_MESSAGES_PENDING",		{type: "state"}, 	{name: "Persistent Messages Pending",						type: "json", 		role: "list.json", 	desc: "Array of pending persistent messages (readonly)", 		write: false});
		await this.createOrUpdateObject("Popup.Duration", 							{type: "state"}, 	{name: "Display Duration", 									type: "number", 	role: "timer", 		desc: "Display duration of message in ms (0 = until clicked)"});
		await this.createOrUpdateObject("Popup.ClickKeepsOpen",						{type: "state"}, 	{name: "Click Keeps Open",									type: "boolean", 	role: "switch", 	desc: "If true, the popup will not close after it is clicked"});
		await this.createOrUpdateObject("Popup.ClickedValue", 						{type: "state"}, 	{name: "Clicked Value", 									type: "string", 	role: "text", 		desc: "Value that will be sent if popup is clicked"});
		await this.createOrUpdateObject("Popup.ClickedDestinationState",		 	{type: "state"}, 	{name: "Clicked Destination State",					 		type: "string", 	role: "text", 		desc: "The value will be sent to this state if popup is clicked"});
		await this.createOrUpdateObject("Popup.POPUP_CLICKED", 						{type: "state"}, 	{name: "Popup Clicked", 									type: "string", 	role: "text", 		desc: "The value will be sent to this datapoint if popup is clicked"});
		await this.createOrUpdateObject("Popup.ButtonNames", 						{type: "state"}, 	{name: "Button Names", 										type: "string", 	role: "text", 		desc: "Comma-separated list of buttons that will be displayd under the popup"});
		await this.createOrUpdateObject("Popup.ButtonValues", 						{type: "state"}, 	{name: "Button Values", 									type: "string", 	role: "text", 		desc: "Comma-separated list of values that will be sent if the button is clicked"});
		await this.createOrUpdateObject("Popup.ButtonDestinationStates",		 	{type: "state"}, 	{name: "Button Destination States", 						type: "string", 	role: "text", 		desc: "Comma-separated list of states, the value will be sent to if the button is clicked"});
		await this.createOrUpdateObject("Popup.ButtonCloses", 						{type: "state"}, 	{name: "Button Closes", 									type: "string", 	role: "text", 		desc: "Comma-separated list of booleans (true/false) if the popup should close when the button is clicked"});
		await this.createOrUpdateObject("Popup.ButtonClears", 						{type: "state"}, 	{name: "Button Clears", 									type: "string", 	role: "text", 		desc: "Comma-separated list of booleans (true/false) if the popup settings schoult be cleared when the button is clicked"});
		await this.createOrUpdateObject("Popup.BUTTON_CLICKED", 					{type: "state"}, 	{name: "Button Clicked",				 					type: "string", 	role: "text", 		desc: "The value will be sent to this datapoint if button is clicked"});
		await this.createOrUpdateObject("Popup.CLEAR", 								{type: "state"}, 	{name: "Clear", 											type: "boolean", 	role: "button", 	desc: "Clear popup settings"});
	}
	
	//++++++++++ WIDGETS ++++++++++	
	async createWidgets(){
		if(typeof this.config.widgetsDatapoints != 'undefined'){
			for(var index = 0; index < this.config.widgetsDatapoints.length; index++){
				let objName = this.config.widgetsDatapoints[index].name || idEncodePointAllowed(this.config.widgetsDatapoints[index].id);
				let objId = "Widgets." + idEncodePointAllowed(this.config.widgetsDatapoints[index].id);
				let commonOptions = {
					name: objName,
					type: this.config.widgetsDatapoints[index].type || "string",
					role: this.config.widgetsDatapoints[index].role || "",
					desc: "Widget-State created by iQontrol"
				}
				if(this.config.widgetsDatapoints[index].min) commonOptions.min = this.config.widgetsDatapoints[index].min;
				if(this.config.widgetsDatapoints[index].max) commonOptions.max = this.config.widgetsDatapoints[index].max;
				if(this.config.widgetsDatapoints[index].def) commonOptions.def = this.config.widgetsDatapoints[index].def;
				if(this.config.widgetsDatapoints[index].unit) commonOptions.unit = this.config.widgetsDatapoints[index].unit;
				await this.createOrUpdateObject(objId, 	{type: "state"}, 	commonOptions);
			}
		}
	}
	
	//++++++++++ LISTS ++++++++++	
	async createLists(){
		if(typeof this.config.lists != 'undefined'){
			let that = this;
			//Lists
			for(let configListIndex = 0; configListIndex < this.config.lists.length; configListIndex++){
				if (!this.config.lists[configListIndex].active) continue;
				let listName = this.config.lists[configListIndex].name || configListIndex.toString();
				this.log.debug("Creating List " + listName + "...");
				let listItems = [];
				//--##### Selectors #####
				if (this.config.lists[configListIndex].selectors) for(let selectorIndex = 0; selectorIndex < this.config.lists[configListIndex].selectors.length; selectorIndex++){
					this.log.debug("...processing Selector " + (selectorIndex + 1) + "...");
					let selector = this.config.lists[configListIndex].selectors[selectorIndex];
					switch(selector.type){
						case "all":
						if(selector.modifier == "add") { //Add all
							for(let object in allObjects){
								let listItemIndex = listItems.indexOf(allObjects[object]._id);
								if(listItemIndex == -1) listItems.push(allObjects[object]._id);
							};
						} else { //Remove all (just in any case :))
							listItems = [];
						}
						break;
						
						case "enum":
						var enumerationMembers = allObjects[selector.value] && allObjects[selector.value].common && allObjects[selector.value].common.members || [];
						for(let enumerationMemberIndex = 0; enumerationMemberIndex < enumerationMembers.length; enumerationMemberIndex++){
							let listItemIndex = listItems.indexOf(enumerationMembers[enumerationMemberIndex]);
							if(selector.modifier == "add") { //Add Enum
								if(listItemIndex == -1) listItems.push(enumerationMembers[enumerationMemberIndex]);
							} else { //Remove Enum
								if(listItemIndex > -1) listItems.splice(listItemIndex, 1);
							}
						};
						break;
						
						case "enumWithChilds":
						var enumerationMembers = allObjects[selector.value] && allObjects[selector.value].common && allObjects[selector.value].common.members || [];
						if(selector.modifier == "add") { //Add enumWithChilds
							for(let object in allObjects){
								let listItemIndex = listItems.indexOf(allObjects[object]._id);
								if(listItemIndex == -1){
									for(let enumerationMemberIndex = 0; enumerationMemberIndex < enumerationMembers.length; enumerationMemberIndex++){
										if(checkCondition(allObjects[object]._id, "bw", enumerationMembers[enumerationMemberIndex], ',')) {
											listItems.push(allObjects[object]._id);
											//break;
										}
									}
								}
							};
						} else { //Remove enumWithChilds
							for(let listItemIndex = 0; listItemIndex < listItems.length; listItemIndex++){
								for(let enumerationMemberIndex = 0; enumerationMemberIndex < enumerationMembers.length; enumerationMemberIndex++){
										if(checkCondition(listItems[listItemIndex], "bw", enumerationMembers[enumerationMemberIndex], ',')) {
											listItems.splice(listItemIndex, 1);
											listItemIndex--; //because splicing inside the loop re-indexes the array
											//break;
										}
								}
							}
						}
						break;
						
						case "id":						
						if(selector.modifier == "add") { //Add ids
							for(let object in allObjects){
								let listItemIndex = listItems.indexOf(allObjects[object]._id);
								if(listItemIndex == -1 && checkCondition(allObjects[object]._id, selector.operator, selector.value, ',')) listItems.push(allObjects[object]._id);
							};
						} else { //Remove ids
							for(let listItemIndex = 0; listItemIndex < listItems.length; listItemIndex++){
								if(checkCondition(listItems[listItemIndex], selector.operator, selector.value, ',')){
									listItems.splice(listItemIndex, 1);
									listItemIndex--; //because splicing inside the loop re-indexes the array
								}
							};
						}
						break;
						
						case "type":
							if(selector.modifier == "add") { //Add types
							for(let object in allObjects){
								let listItemIndex = listItems.indexOf(allObjects[object]._id);
								if(listItemIndex == -1 && checkCondition(allObjects[object].type, selector.operator, selector.value, ',')) listItems.push(allObjects[object]._id);
							};
						} else { //Remove types
							for(let listItemIndex = 0; listItemIndex < listItems.length; listItemIndex++){
								if(allObjects[listItems[listItemIndex]] && checkCondition(allObjects[listItems[listItemIndex]].type, selector.operator, selector.value, ',')){
									listItems.splice(listItemIndex, 1);
									listItemIndex--; //because splicing inside the loop re-indexes the array
								}
							};
						}
						break;
						
						case "commonType":
						if(selector.modifier == "add") { //Add commonType
							for(let object in allObjects){
								let listItemIndex = listItems.indexOf(allObjects[object]._id);
								if(listItemIndex == -1 && checkCondition(allObjects[object] && allObjects[object].common && allObjects[object].common.type, selector.operator, selector.value, ',')) listItems.push(allObjects[object]._id);
							};
						} else { //Remove commonType
							for(let listItemIndex = 0; listItemIndex < listItems.length; listItemIndex++){
								if(allObjects[listItems[listItemIndex]] && checkCondition(allObjects[listItems[listItemIndex]] && allObjects[listItems[listItemIndex]].common && allObjects[listItems[listItemIndex]].common.type, selector.operator, selector.value, ',')){
									listItems.splice(listItemIndex, 1);
									listItemIndex--; //because splicing inside the loop re-indexes the array
								}
							};
						}
						break;
						
						case "commonRole":
						if(selector.modifier == "add") { //Add commonRole
							for(let object in allObjects){
								let listItemIndex = listItems.indexOf(allObjects[object]._id);
								if(listItemIndex == -1 && checkCondition(allObjects[object] && allObjects[object].common && allObjects[object].common.role, selector.operator, selector.value, ',')) listItems.push(allObjects[object]._id);
							};
						} else { //Remove commonRole
							for(let listItemIndex = 0; listItemIndex < listItems.length; listItemIndex++){
								if(allObjects[listItems[listItemIndex]] && checkCondition(allObjects[listItems[listItemIndex]] && allObjects[listItems[listItemIndex]].common && allObjects[listItems[listItemIndex]].common.role, selector.operator, selector.value, ',')){
									listItems.splice(listItemIndex, 1);
									listItemIndex--; //because splicing inside the loop re-indexes the array
								}
							};
						}
						break;
						
						case "commonMode":
						if(selector.modifier == "add") { //Add commonMode
							for(let object in allObjects){
								let listItemIndex = listItems.indexOf(allObjects[object]._id);
								if(listItemIndex == -1 && checkCondition(allObjects[object] && allObjects[object].common && allObjects[object].common.mode, selector.operator, selector.value, ',')) listItems.push(allObjects[object]._id);
							};
						} else { //Remove commonMode
							for(let listItemIndex = 0; listItemIndex < listItems.length; listItemIndex++){
								if(allObjects[listItems[listItemIndex]] && checkCondition(allObjects[listItems[listItemIndex]] && allObjects[listItems[listItemIndex]].common && allObjects[listItems[listItemIndex]].common.mode, selector.operator, selector.value, ',')){
									listItems.splice(listItemIndex, 1);
									listItemIndex--; //because splicing inside the loop re-indexes the array
								}
							};
						}
						break;
						
						case "commonEnabled":
						if(selector.modifier == "add") { //Add commonEnabled
							for(let object in allObjects){
								let listItemIndex = listItems.indexOf(allObjects[object]._id);
								if(listItemIndex == -1 && checkCondition(allObjects[object] && allObjects[object].common && allObjects[object].common.enabled, selector.operator, selector.value, ',')) listItems.push(allObjects[object]._id);
							};
						} else { //Remove commonEnabled
							for(let listItemIndex = 0; listItemIndex < listItems.length; listItemIndex++){
								if(allObjects[listItems[listItemIndex]] && checkCondition(allObjects[listItems[listItemIndex]] && allObjects[listItems[listItemIndex]].common && allObjects[listItems[listItemIndex]].common.enabled, selector.operator, selector.value, ',')){
									listItems.splice(listItemIndex, 1);
									listItemIndex--; //because splicing inside the loop re-indexes the array
								}
							};
						}
						break;
					}
				};
				//--Filtering Aliases
				if (this.config.lists[configListIndex].selectors && this.config.lists[configListIndex].selectors.length && this.config.lists[configListIndex].filterAliases) {
					this.log.debug("...filtering Aliases...");
					let removeTheseItems = [];
					for(let listItemIndex = 0; listItemIndex < listItems.length; listItemIndex++){
						if(checkCondition(listItems[listItemIndex], "nbw", "alias.")) continue;
						let itemAlias = allObjects[listItems[listItemIndex]] && allObjects[listItems[listItemIndex]].common && allObjects[listItems[listItemIndex]].common.alias;
						let itemAliasLinks = [];
						if (itemAlias && itemAlias.id) {
							if (typeof itemAlias.id == "string"){
								itemAliasLinks.push(itemAlias.id);
							} else {
								if (itemAlias.id && itemAlias.id.read) itemAliasLinks.push(itemAlias.id.read);
								if (itemAlias.id && itemAlias.id.write) itemAliasLinks.push(itemAlias.id.write);
							}
						}
						for(let itemAliasLinkIndex = 0; itemAliasLinkIndex < itemAliasLinks.length; itemAliasLinkIndex++){
							if(listItems.indexOf(itemAliasLinks[itemAliasLinkIndex]) > -1) removeTheseItems.push(itemAliasLinks[itemAliasLinkIndex]);
						}
					}
					for(let removeTheseItemIndex = 0; removeTheseItemIndex < removeTheseItems.length; removeTheseItemIndex++){
						let listItemsRemoveIndex = listItems.indexOf(removeTheseItems[removeTheseItemIndex]);
						if (listItemsRemoveIndex > -1) {
							listItems.splice(listItemsRemoveIndex, 1);
						}
					}
					this.log.debug("...found and removed " + removeTheseItems.length + " items which had aliases...");
				}
				//--Sorting
				let sorting = this.config.lists[configListIndex].sorting || "";
				let createValuesList = this.config.lists[configListIndex].createValuesList;
				let createNamesList = this.config.lists[configListIndex].createNamesList;
				let createParentNamesList = this.config.lists[configListIndex].createParentNamesList;
				let createParentNamesListMode = this.config.lists[configListIndex].createParentNamesListMode;
				let separator = this.config.lists[configListIndex].separator || ", ";					  
				let sortingFunction;
				if (this.config.lists[configListIndex].selectors && this.config.lists[configListIndex].selectors.length){
					if (typeof sorting != "string") sorting = "";
					if(sorting.indexOf("id") > -1){ //id
						listItems.sort(function(a, b){ return collator.compare(a, b); });
					} else if (sorting.indexOf("values") > -1) { //values
						await fetchStates(listItems || [], that);
						listItems.sort(function(a, b){ return collator.compare((usedStates[a] && typeof usedStates[a].val != "undefined" ? usedStates[a].val : null), (usedStates[b] && typeof usedStates[b].val != "undefined" ? usedStates[b].val : null)); });						
						//-- --Special: Sorting TOTAL-Lists by values is also saved as counterFunction to ensure sorting after a value has changed
						(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
							let _listName = listName;
							let _sortDesc = (sorting.indexOf("desc") > -1);
							let _createValuesList = createValuesList;
							let _createNamesList = createNamesList;
							let _createParentNamesList = createParentNamesList;
							let _createParentNamesListMode = createParentNamesListMode;
							let _sortingFunction = async function(_listItems, triggeredBy){
								_listItems.sort(function(a, b){ return collator.compare((usedStates[a] && typeof usedStates[a].val != "undefined" ? usedStates[a].val : null), (usedStates[b] && typeof usedStates[b].val != "undefined" ? usedStates[b].val : null)); });
								if(_sortDesc) _listItems.reverse();
								await that.createOrUpdateObject("Lists." + idEncodePointAllowed(_listName) + ".TOTAL_LIST", 						{type: "state"}, 	{name: _listName + " - TOTAL - LIST", 				type: "string", 	role: "list", 		read: true, write: false, desc: "List created by iQontrol"}, 		{iQontrolListSeparator: separator}, 		_listItems.join(separator), true);
								await that.createOrUpdateObject("Lists." + idEncodePointAllowed(_listName) + ".TOTAL_LIST_JSON", 					{type: "state"}, 	{name: _listName + " - TOTAL - LIST JSON", 			type: "json", 		role: "list.json", 	read: true, write: false, desc: "List created by iQontrol"}, 		{iQontrolDatapointList: true}, 				JSON.stringify(_listItems), true);
								//-- --update optional TOTAL_LIST_WITH_VALUES, TOTAL_NAMES, TOTAL_NAMES_WITH_VALUES, TOTAL_PARENT_NAMES and TOTAL_PARENT_NAMES_WITH_VALUES lists list
								if (_createValuesList || _createNamesList || _createParentNamesList) {
									let listWithValues = [];
									let names = [];
									let namesWithValues = [];
									let parentNames = [];
									let parentNamesWithValues = [];
									for(let listItemIndex = 0; listItemIndex < _listItems.length; listItemIndex++){
										let value;
										if (_createValuesList) {
											value = getPlainTextWithUnit(_listItems[listItemIndex], that);
											listWithValues.push(_listItems[listItemIndex] + ": " +  value);
										}
										if (_createNamesList) {
											names.push(getName(_listItems[listItemIndex]));
											if (_createValuesList) namesWithValues.push(getName(_listItems[listItemIndex]) + ": " +  value);
										}
										if (_createParentNamesList) {
											parentNames.push(getParentName(_listItems[listItemIndex], _createParentNamesListMode));
											if (_createValuesList) parentNamesWithValues.push(getParentName(_listItems[listItemIndex], _createParentNamesListMode) + ": " +  value);
										}
									}
									if (_createValuesList) {
										await that.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL_LIST_WITH_VALUES", 											{type: "state"}, 	{name: listName + " - TOTAL - LIST WITH VALUES", 				type: "string", 	role: "list", 		read: true, write: false, desc: "List created by iQontrol"}, 			{iQontrolListSeparator: separator}, 		listWithValues.join(separator), true);
									}
									if (_createNamesList) {
										await that.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL_NAMES_LIST", 												{type: "state"}, 	{name: listName + " - TOTAL - NAMES LIST", 						type: "string", 	role: "list", 		read: true, write: false, desc: "List created by iQontrol"}, 			{iQontrolListSeparator: separator}, 		names.join(separator), true);
										//await that.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL_NAMES_LIST_JSON", 										{type: "state"}, 	{name: listName + " - TOTAL - NAMES LIST JSON", 				type: "json", 		role: "list.json", 	read: true, write: false, desc: "List created by iQontrol"}, 			{iQontrolDatapointList: true}, 				JSON.stringify(names), true);
										if (_createValuesList) await that.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL_NAMES_LIST_WITH_VALUES", 			{type: "state"}, 	{name: listName + " - TOTAL - NAMES LIST WITH VALUES", 			type: "string", 	role: "list", 		read: true, write: false, desc: "List created by iQontrol"}, 			{iQontrolListSeparator: separator}, 		namesWithValues.join(separator), true);
									}
									if (_createParentNamesList) {
										await that.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL_PARENTNAMES_LIST", 											{type: "state"}, 	{name: listName + " - TOTAL - PARENTNAMES LIST", 				type: "string", 	role: "list", 		read: true, write: false, desc: "List created by iQontrol"}, 			{iQontrolListSeparator: separator}, 		parentNames.join(separator), true);
										//await that.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL_PARENTNAMES_LIST_JSON", 									{type: "state"}, 	{name: listName + " - TOTAL - PARENTNAMES LIST JSON", 			type: "json", 		role: "list.json", 	read: true, write: false, desc: "List created by iQontrol"}, 			{iQontrolDatapointList: true}, 				JSON.stringify(parentNames), true);
										if (_createValuesList) await that.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL_PARENTNAMES_LIST_WITH_VALUES", 		{type: "state"}, 	{name: listName + " - TOTAL - PARENTNAMES LIST WITH VALUES", 	type: "string", 	role: "list", 		read: true, write: false, desc: "List created by iQontrol"}, 			{iQontrolListSeparator: separator}, 		parentNamesWithValues.join(separator), true);
									} 
								}
							};
							sortingFunction = _sortingFunction;
						})(); //<--End Closure
					} else if (sorting.indexOf("names") > -1) { //names
						listItems.sort(function(a, b){ return collator.compare(getName(a), getName(b)); });
					} else { //parentNames
						listItems.sort(function(a, b){ return collator.compare(getParentName(a, createParentNamesListMode), getParentName(b, createParentNamesListMode)); });
					}
					if(sorting.indexOf("desc") > -1) listItems.reverse();
				}
				//--Create TOTAL lists and set States
				if (this.config.lists[configListIndex].selectors && this.config.lists[configListIndex].selectors.length){
					await this.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL", 											{type: "state"}, 	{name: listName + " - TOTAL", 						type: "number", 	role: "value", 		read: true, write: false, desc: "List created by iQontrol"}, 		false, 										listItems.length, true);
					await this.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL_LIST", 										{type: "state"}, 	{name: listName + " - TOTAL - LIST", 				type: "string", 	role: "list", 		read: true, write: false, desc: "List created by iQontrol"}, 		{iQontrolListSeparator: separator}, 		listItems.join(separator), true);
					await this.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL_LIST_JSON", 								{type: "state"}, 	{name: listName + " - TOTAL - LIST JSON", 			type: "json", 		role: "list.json", 	read: true, write: false, desc: "List created by iQontrol"}, 		{iQontrolDatapointList: true}, 				JSON.stringify(listItems), true);
					//--Create optional TOTAL_LIST_WITH_VALUES list
					if (createValuesList) {
						await fetchStates(listItems || [], that);
						let listWithValues = [];
						for(let listItemIndex = 0; listItemIndex < listItems.length; listItemIndex++){
							let value = getPlainTextWithUnit(listItems[listItemIndex], this);
							listWithValues.push(listItems[listItemIndex] + ": " +  value);
						}					
						await this.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL_LIST_WITH_VALUES", 						{type: "state"}, 	{name: listName + " - TOTAL - LIST WITH VALUES", 	type: "string", 	role: "list", 		read: true, write: false, desc: "List created by iQontrol"}, 		{iQontrolListSeparator: separator}, 		listWithValues.join(separator), true);
					}
					//--Create optional TOTAL_NAMES, TOTAL_NAMES_WITH_VALUES, TOTAL_PARENT_NAMES and TOTAL_PARENT_NAMES_WITH_VALUES lists
					if (createNamesList || createParentNamesList) {
						let names = [];
						let namesWithValues = [];
						let parentNames = [];
						let parentNamesWithValues = [];
						for(let listItemIndex = 0; listItemIndex < listItems.length; listItemIndex++){
							let value = "";
							if (createValuesList) {
								value = getPlainTextWithUnit(listItems[listItemIndex], this);
							}
							if (createNamesList){
								names.push(getName(listItems[listItemIndex]));
								if (createValuesList) namesWithValues.push(getName(listItems[listItemIndex]) + ": " +  value);								
							}
							if (createParentNamesList){
								parentNames.push(getParentName(listItems[listItemIndex], createParentNamesListMode));
								if (createValuesList) parentNamesWithValues.push(getParentName(listItems[listItemIndex], createParentNamesListMode) + ": " +  value);								
							}
						}
						//-- --Sorting
						if (sorting.indexOf("values") == -1) { //Do not re-sort, if sorting by values is active
							names.sort(function(a, b){ return collator.compare(a, b); });
							namesWithValues.sort(function(a, b){ return collator.compare(a, b); });
							parentNames.sort(function(a, b){ return collator.compare(a, b); });
							parentNamesWithValues.sort(function(a, b){ return collator.compare(a, b); });
						}
						//-- --Set states
						if (createNamesList) {
							await this.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL_NAMES_LIST", 											{type: "state"}, 	{name: listName + " - TOTAL - NAMES LIST", 						type: "string", 	role: "list", 		read: true, write: false, desc: "List created by iQontrol"}, 			{iQontrolListSeparator: separator}, 		names.join(separator), true);
							//await this.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL_NAMES_LIST_JSON", 									{type: "state"}, 	{name: listName + " - TOTAL - NAMES LIST JSON", 				type: "json", 		role: "list.json", 	read: true, write: false, desc: "List created by iQontrol"}, 			{iQontrolDatapointList: true}, 				JSON.stringify(names), true);
							if (createValuesList) await this.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL_NAMES_LIST_WITH_VALUES", 			{type: "state"}, 	{name: listName + " - TOTAL - NAMES LIST WITH VALUES", 			type: "string", 	role: "list", 		read: true, write: false, desc: "List created by iQontrol"}, 			{iQontrolListSeparator: separator}, 		namesWithValues.join(separator), true);
						}
						if (createParentNamesList) {
							await this.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL_PARENTNAMES_LIST", 										{type: "state"}, 	{name: listName + " - TOTAL - PARENTNAMES LIST", 				type: "string", 	role: "list", 		read: true, write: false, desc: "List created by iQontrol"}, 			{iQontrolListSeparator: separator}, 		parentNames.join(separator), true);
							//await this.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL_PARENTNAMES_LIST_JSON", 								{type: "state"}, 	{name: listName + " - TOTAL - PARENTNAMES LIST JSON", 			type: "json", 		role: "list.json", 	read: true, write: false, desc: "List created by iQontrol"}, 			{iQontrolDatapointList: true}, 				JSON.stringify(parentNames), true);
							if (createValuesList) await this.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL_PARENTNAMES_LIST_WITH_VALUES", 	{type: "state"}, 	{name: listName + " - TOTAL - PARENTNAMES LIST WITH VALUES", 	type: "string", 	role: "list", 		read: true, write: false, desc: "List created by iQontrol"}, 			{iQontrolListSeparator: separator}, 		parentNamesWithValues.join(separator), true);
						} 
					}
				}
				//--Create entry the lists-Array
				lists.push({
					name: listName, 
					listItems: listItems, 
					counterFunctions: [], 
					counterTimeout: false,
					counterAdditionalTriggerItems: [],
					calculationItems: [],
					calculationFunctions: [],
					calculationTimeouts: [], 
					combinationItems: [],
					combinationFunctions: [],
					combinationTimeouts: [],
					logItems: [],
					logFunctions: [],
					logDebounces: [],
					logTimeouts: [],
					logClearIds: [],
					logClearFunctions: [],
					logClearTimeouts: []
				});
				let listIndex = lists.length - 1;
				if (sortingFunction) lists[listIndex].counterFunctions.push(sortingFunction);
				//--##### Counters #####
				if(this.config.lists[configListIndex].counters) for(let counterIndex = 0; counterIndex < this.config.lists[configListIndex].counters.length; counterIndex++){
					this.log.debug("...processing counter " + listName + "_" + this.config.lists[configListIndex].counters[counterIndex].name + "...");
					let counterName = this.config.lists[configListIndex].counters[counterIndex].name || counterIndex.toString();
					let separator = this.config.lists[configListIndex].separator || ", ";
					//-- --Create counter-objects
					let idRoot = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counterName);
					let commonName = listName + " - " + counterName;
					await this.createOrUpdateObject(idRoot, 											{type: "state"}, 	{name: commonName, 											type: "number", 	role: "value", 		unit: this.config.lists[configListIndex].counters[counterIndex].unit || "", 	read: true, write: false, desc: "List created by iQontrol"});
					await this.createOrUpdateObject(idRoot + "_LIST", 									{type: "state"}, 	{name: commonName + " - LIST", 								type: "string", 	role: "list",		read: true, write: false, desc: "List created by iQontrol"},			{iQontrolListSeparator: separator});
					await this.createOrUpdateObject(idRoot + "_LIST_JSON",								{type: "state"}, 	{name: commonName + " - LIST JSON", 						type: "json", 		role: "list.json",	read: true, write: false, desc: "List created by iQontrol"},			{iQontrolDatapointList: true});
					//-- --Create optional LIST_WITH_VALUES
					if (this.config.lists[configListIndex].createValuesList) {
						await this.createOrUpdateObject(idRoot + "_LIST_WITH_VALUES",					{type: "state"}, 	{name: commonName + " - LIST WITH VALUES", 					type: "string", 	role: "list",		read: true, write: false, desc: "List created by iQontrol"},			{iQontrolListSeparator: separator});
					}
					//-- --Create optional NAMES_LIST
					if (this.config.lists[configListIndex].createNamesList) {
						await this.createOrUpdateObject(idRoot + "_NAMES_LIST",							{type: "state"}, 	{name: commonName + " - NAMES LIST", 						type: "string", 	role: "list",		read: true, write: false, desc: "List created by iQontrol"},			{iQontrolListSeparator: separator});
						//await this.createOrUpdateObject(idRoot + "_NAMES_LIST_JSON",					{type: "state"}, 	{name: commonName + " - NAMES LIST JSON", 					type: "json", 		role: "list.json",	read: true, write: false, desc: "List created by iQontrol"},			{iQontrolDatapointList: true});
						//-- --Create optional NAMES_LIST_WITH_VALUES
						if (this.config.lists[configListIndex].createValuesList) {
							await this.createOrUpdateObject(idRoot + "_NAMES_LIST_WITH_VALUES",			{type: "state"}, 	{name: commonName + " - NAMES LIST WITH VALUES", 			type: "string", 	role: "list",		read: true, write: false, desc: "List created by iQontrol"},			{iQontrolListSeparator: separator});
						}
					}
					//-- --Create optional PARENTNAMES_LIST
					if (this.config.lists[configListIndex].createParentNamesList) {
						await this.createOrUpdateObject(idRoot + "_PARENTNAMES_LIST",					{type: "state"}, 	{name: commonName + " - PARENTNAMES LIST", 					type: "string", 	role: "list",		read: true, write: false, desc: "List created by iQontrol"},			{iQontrolListSeparator: separator});
						//await this.createOrUpdateObject(idRoot + "_PARENTNAMES_LIST_JSON",			{type: "state"}, 	{name: commonName + " - PARENTNAMES LIST JSON", 			type: "json", 		role: "list.json",	read: true, write: false, desc: "List created by iQontrol"},			{iQontrolDatapointList: true});
						//-- --Create optional PARENTNAMES_LIST_WITH_VALUES
						if (this.config.lists[configListIndex].createValuesList) {
							await this.createOrUpdateObject(idRoot + "_PARENTNAMES_LIST_WITH_VALUES",	{type: "state"}, 	{name: commonName + " - PARENTNAMES LIST WITH VALUES", 		type: "string", 	role: "list",		read: true, write: false, desc: "List created by iQontrol"},			{iQontrolListSeparator: separator});
						}
					}
					//-- --Creating counterFunctions
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						let counter = that.config.lists[configListIndex].counters[counterIndex];
						let _listIndex = listIndex;
						let counterFunction = async function(_listItems, triggeredBy){ // ###### COUNTER FUNCTION ###### --> 
							that.log.debug("COUNTER " + listName + " " + counter.name + " function started, TRIGGERED BY " + triggeredBy);							
							counter.listItems = [];
							counter.repeatTimeouts = [];
							counter.conditions = counter.conditions || [];
							//-- -- -- --Loop through the listItems the counter belongs to
							for(let _listItemIndex = 0; _listItemIndex < _listItems.length; _listItemIndex++){
								let conditionFullyFulfilled = false;
								let conditionPartFulfilled = (counter.conditions.length > 0);
								//-- -- -- -- --Loop through the conditions of this counter and check, if this list item fulfills all conditions
								for(let conditionIndex = 0; conditionIndex < counter.conditions.length; conditionIndex++){
									if(counter.conditions[conditionIndex].modifier == "||"){ //New condition OR-Part
										that.log.silly("COUNTER " + listName + " " + counter.name + ", item " + _listItems[_listItemIndex] + " |||| New OR-Part");
										if(conditionPartFulfilled) conditionFullyFulfilled = true;
										conditionPartFulfilled = true;
									}
									let value;
									if(!usedStates[_listItems[_listItemIndex]]){
										try {
											usedStates[_listItems[_listItemIndex]] = await that.getForeignStateAsync(_listItems[_listItemIndex]);
										} catch {
											usedStates[_listItems[_listItemIndex]] = emptyState;
										}
									}
									switch(counter.conditions[conditionIndex].type){
										case "value":
										value = usedStates[_listItems[_listItemIndex]] && usedStates[_listItems[_listItemIndex]].val;
										break;
										
										case "valuelistValue":
										value = usedStates[_listItems[_listItemIndex]] && usedStates[_listItems[_listItemIndex]].val;
										if(allObjects[_listItems[_listItemIndex]] && allObjects[_listItems[_listItemIndex]].common && allObjects[_listItems[_listItemIndex]].common.states && typeof allObjects[_listItems[_listItemIndex]].common.states[value] != "undefined") {
											value = allObjects[_listItems[_listItemIndex]].common.states[value];
										}
										break;
										
										case "ack":
										value = usedStates[_listItems[_listItemIndex]] && usedStates[_listItems[_listItemIndex]].ack;
										break;

										case "lc":
										value = usedStates[_listItems[_listItemIndex]] && usedStates[_listItems[_listItemIndex]].lc;
										break;

										case "lcs":
										value = (new Date() - (usedStates[_listItems[_listItemIndex]] && usedStates[_listItems[_listItemIndex]].lc || 0))/1000;
										counter.repeatTimeouts.push(counter.conditions[conditionIndex].value);
										break;

										case "ts":
										value = usedStates[_listItems[_listItemIndex]] && usedStates[_listItems[_listItemIndex]].ts;
										break;

										case "tss":
										value = (new Date() - (usedStates[_listItems[_listItemIndex]] && usedStates[_listItems[_listItemIndex]].ts || 0))/1000;
										counter.repeatTimeouts.push(counter.conditions[conditionIndex].value);
										break;

										case "alive":
										if (_listItems[_listItemIndex].indexOf("system.adapter." == 0) && _listItems[_listItemIndex].split('.').length >= 4) {
											let id = _listItems[_listItemIndex].split('.');
											id = id.splice(0, 4).join('.') + ".alive";
											if(!usedStates[id]){
												try {
													usedStates[id] = await that.getForeignStateAsync(id);
												} catch {
													usedStates[id] = emptyState;
												}
											}
											value = usedStates[id] && usedStates[id].val;
											if (lists[_listIndex].counterAdditionalTriggerItems.indexOf(id) == -1){
												that.log.debug("...subscribing to additional counter trigger item of list " + listName + " " + counter.name + " (" + id + ")...");
												that.subscribeForeignStates(id);
												lists[_listIndex].counterAdditionalTriggerItems.push(id);
											}
										}
										break;

										case "lcsAlive":
										if (_listItems[_listItemIndex].indexOf("system.adapter." == 0) && _listItems[_listItemIndex].split('.').length >= 4) {
											let id = _listItems[_listItemIndex].split('.');
											id = id.splice(0, 4).join('.') + ".alive";
											if(!usedStates[id]){
												try {
													usedStates[id] = await that.getForeignStateAsync(id);
												} catch {
													usedStates[id] = emptyState;
												}
											}
											value = (new Date() - (usedStates[id] && usedStates[id].lc || 0))/1000;
											counter.repeatTimeouts.push(counter.conditions[conditionIndex].value);
											if (lists[_listIndex].counterAdditionalTriggerItems.indexOf(id) == -1){
												that.log.debug("...subscribing to additional counter trigger item of list " + listName + " " + counter.name + " (" + id + ")...");
												that.subscribeForeignStates(id);
												lists[_listIndex].counterAdditionalTriggerItems.push(id);
											}
										}
										break;

										case "connection":
										if (_listItems[_listItemIndex].indexOf("system.adapter." == 0) && _listItems[_listItemIndex].split('.').length >= 4) {
											let id = _listItems[_listItemIndex].split('.');
											id.splice(0, 2);
											id = id[0] + "." + id[1] + ".info.connection";
											if(!usedStates[id]){
												try {
													usedStates[id] = await that.getForeignStateAsync(id);
												} catch {
													usedStates[id] = emptyState;
												}
											}
											value = usedStates[id] && usedStates[id].val;
											if (lists[_listIndex].counterAdditionalTriggerItems.indexOf(id) == -1){
												that.log.debug("...subscribing to additional counter trigger item of list " + listName + " " + counter.name + " (" + id + ")...");
												that.subscribeForeignStates(id);
												lists[_listIndex].counterAdditionalTriggerItems.push(id);
											}
										}
										break;
										
										case "lcsConnection":
										if (_listItems[_listItemIndex].indexOf("system.adapter." == 0) && _listItems[_listItemIndex].split('.').length >= 4) {
											let id = _listItems[_listItemIndex].split('.');
											id.splice(0, 2);
											id = id[0] + "." + id[1] + ".info.connection";
											if(!usedStates[id]){
												try {
													usedStates[id] = await that.getForeignStateAsync(id);
												} catch {
													usedStates[id] = emptyState;
												}
											}
											value = (new Date() - (usedStates[id] && usedStates[id].lc || 0))/1000;
											counter.repeatTimeouts.push(counter.conditions[conditionIndex].value);
											if (lists[_listIndex].counterAdditionalTriggerItems.indexOf(id) == -1){
												that.log.debug("...subscribing to additional counter trigger item of list " + listName + " " + counter.name + " (" + id + ")...");
												that.subscribeForeignStates(id);
												lists[_listIndex].counterAdditionalTriggerItems.push(id);
											}
										}
										break;
									}
									let check = checkCondition(value, counter.conditions[conditionIndex].operator, counter.conditions[conditionIndex].value, ',');
									conditionPartFulfilled = conditionPartFulfilled && check;
									that.log.silly("COUNTER " + listName + " " + counter.name + ", item " + _listItems[_listItemIndex] + " >>>> check condition " + (conditionIndex + 1) + " von " + counter.conditions.length + ": type: " + counter.conditions[conditionIndex].type + ", value: " + value + ", op: " + counter.conditions[conditionIndex].operator + ", condVal: " + counter.conditions[conditionIndex].value + " --> check: " + check + " ==> fulfilled: " + conditionPartFulfilled);
									//if(conditionFullyFulfilled) break;
								}
								if(conditionPartFulfilled) conditionFullyFulfilled = true;
								that.log.silly("COUNTER " + listName + " " + counter.name + ", item: " + _listItems[_listItemIndex] + " >>>>>>>> check completed ==> fulfilled: " + conditionFullyFulfilled);
								if(conditionFullyFulfilled) counter.listItems.push(_listItems[_listItemIndex]);
							}
							//--Sorting
							let sorting = that.config.lists[configListIndex].sorting || "";
							let createParentNamesListMode = that.config.lists[configListIndex].createParentNamesListMode;
							if(sorting.indexOf("id") > -1){ //id
								counter.listItems.sort(function(a, b){ return collator.compare(a, b); });
							} else if (sorting.indexOf("values") > -1) { //values
								await fetchStates(counter.listItems || [], that);
								counter.listItems.sort(function(a, b){ return collator.compare((usedStates[a] && typeof usedStates[a].val != "undefined" ? usedStates[a].val : null), (usedStates[b] && typeof usedStates[b].val != "undefined" ? usedStates[b].val : null)); });
							} else if (sorting.indexOf("names") > -1) { //names
								counter.listItems.sort(function(a, b){ return collator.compare(getName(a), getName(b)); });
							} else { //parentNames
								counter.listItems.sort(function(a, b){ return collator.compare(getParentName(a, createParentNamesListMode), getParentName(b, createParentNamesListMode)); });
							}
							if(sorting.indexOf("desc") > -1) counter.listItems.reverse();
							that.log.info("COUNTER " + listName + " " + counter.name + ": " + counter.listItems.length + " of " + lists[listIndex].listItems.length);
							//--Set States
							let separator = that.config.lists[configListIndex].separator || ", ";
							let objId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counter.name);
							await that.setStateValue(objId, {val: counter.listItems.length, ack: true});
							objId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counter.name) + "_LIST";
							await that.setStateValue(objId, {val: counter.listItems.join(separator), ack: true});
							objId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counter.name) + "_LIST_JSON";
							await that.setStateValue(objId, {val: JSON.stringify(counter.listItems), ack: true});
							//--Set States of LIST_WITH_VALUES
							if (that.config.lists[configListIndex].createValuesList){
								let counterListWithValues = [];
								for(let counterListItemIndex = 0; counterListItemIndex < counter.listItems.length; counterListItemIndex++){
									let value = getPlainTextWithUnit(counter.listItems[counterListItemIndex], this);
									counterListWithValues.push(counter.listItems[counterListItemIndex] + ": " +  value);
								}					
								objId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counter.name) + "_LIST_WITH_VALUES";
								await that.setStateValue(objId, {val: counterListWithValues.join(separator), ack: true});
							}					
							//--Set States of NAMES_LIST, NAMES_LIST_WITH_VALUES, PARENT_NAMES and PARENTNAMES_LIST_WITH_VALUES
							if (that.config.lists[configListIndex].createNamesList || that.config.lists[configListIndex].createParentNamesList) {
								let names = [];
								let namesWithValues = [];
								let parentNames = [];
								let parentNamesWithValues = [];
								for(let counterListItemIndex = 0; counterListItemIndex < counter.listItems.length; counterListItemIndex++){
									let value = "";
									if (that.config.lists[configListIndex].createValuesList){
										value = getPlainTextWithUnit(counter.listItems[counterListItemIndex], that);
									};
									if (that.config.lists[configListIndex].createNamesList){
										names.push(getName(counter.listItems[counterListItemIndex]));
										if (that.config.lists[configListIndex].createValuesList){
											namesWithValues.push(getName(counter.listItems[counterListItemIndex]) + ": " +  value);								
										}
									}
									if (that.config.lists[configListIndex].createParentNamesList){
										parentNames.push(getParentName(counter.listItems[counterListItemIndex], createParentNamesListMode));
										if (that.config.lists[configListIndex].createValuesList){
											parentNamesWithValues.push(getParentName(counter.listItems[counterListItemIndex], createParentNamesListMode) + ": " +  value);										
										}									
									}
								}
								//-- --Sorting
								if (sorting.indexOf("values") == -1) { //Do not re-sort, if sorting by values is active
									names.sort(function(a, b){ return collator.compare(a, b); });
									namesWithValues.sort(function(a, b){ return collator.compare(a, b); });
									parentNames.sort(function(a, b){ return collator.compare(a, b); });
									parentNamesWithValues.sort(function(a, b){ return collator.compare(a, b); });
								}
								if (that.config.lists[configListIndex].createNamesList) {
									objId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counter.name) + "_NAMES_LIST";
									await that.setStateValue(objId, {val: names.join(separator), ack: true});
									//objId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counter.name) + "_NAMES_LIST_JSON";
									//await that.setStateValue(objId, {val: JSON.stringify(names), ack: true});
									if (that.config.lists[configListIndex].createValuesList){
										objId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counter.name) + "_NAMES_LIST_WITH_VALUES";
										await that.setStateValue(objId, {val: namesWithValues.join(separator), ack: true});
									}
								}
								if (that.config.lists[configListIndex].createParentNamesList) {
									objId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counter.name) + "_PARENTNAMES_LIST";
									await that.setStateValue(objId, {val: parentNames.join(separator), ack: true});
									//objId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counter.name) + "_PARENTNAMES_LIST_JSON";
									//await that.setStateValue(objId, {val: JSON.stringify(parentNames), ack: true});
									if (that.config.lists[configListIndex].createValuesList){
										objId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counter.name) + "_PARENTNAMES_LIST_WITH_VALUES";
										await that.setStateValue(objId, {val: parentNamesWithValues.join(separator), ack: true});
									}
								}
							}
							//-- -- -- --Call repeatTimeouts (for conditions, that contain distances to timestamps as argument, the counterFunction has to be called again after that distance)
							counter.repeatTimeouts = removeDuplicates(counter.repeatTimeouts);
							if(triggeredBy != "triggeredByRepeatTimeout" && triggeredBy != "triggeredByInterval" && triggeredBy != "triggeredByCreation") for(let repeatTimeoutIndex = 0; repeatTimeoutIndex < counter.repeatTimeouts.length; repeatTimeoutIndex++){
								if(counter.repeatTimeouts[repeatTimeoutIndex] && !isNaN(counter.repeatTimeouts[repeatTimeoutIndex])){
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										let _listIndex = listIndex;
										that.log.debug("set trigger repeat-timeout for list " + lists[_listIndex].name + " to " + parseInt(counter.repeatTimeouts[repeatTimeoutIndex] + "s"));
										setTimeout(function(){
											if(!lists[_listIndex].counterTimeout) lists[_listIndex].counterTimeout = setTimeout(function(){ //Debouncing
												for(let counterFunctionIndex = 0; counterFunctionIndex < lists[_listIndex].counterFunctions.length; counterFunctionIndex++){							
													lists[_listIndex].counterFunctions[counterFunctionIndex](lists[_listIndex].listItems, "triggeredByRepeatTimeout");
												}
												lists[_listIndex].counterTimeout = false;
											} , 200);
										}, parseInt(counter.repeatTimeouts[repeatTimeoutIndex] * 1000));
									})(); //<--End Closure
								}
							}
						}; //<-- End of ##### COUNTER FUNCTION #####
						lists[listIndex].counterFunctions.push(counterFunction);
					})(); //<--End Closure
				}
				//--Subscribe to the list items
				this.log.debug("...subscribing to items of list " + listName + " (" + listItems.length + " objects)...");										
				this.subscribeForeignStates(listItems);
				//--Start trigger interval (if activated)
				if (this.config.lists[configListIndex].triggerInterval && !isNaN(this.config.lists[configListIndex].triggerInterval)) {
					this.log.debug("...setting trigger interval of list " + listName + " to " + parseInt(that.config.lists[configListIndex].triggerInterval) + "s...");
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						let _listIndex = listIndex;
						triggerIntervals.push(setInterval(function(){
							if(!lists[_listIndex].counterTimeout) lists[_listIndex].counterTimeout = setTimeout(function(){ //Debouncing
								for(let counterFunctionIndex = 0; counterFunctionIndex < lists[_listIndex].counterFunctions.length; counterFunctionIndex++){							
									lists[_listIndex].counterFunctions[counterFunctionIndex](lists[_listIndex].listItems, "triggeredByInterval");
								}
								lists[_listIndex].counterTimeout = false;
							} , 200);
						}, parseInt(that.config.lists[configListIndex].triggerInterval * 1000)));
					})(); //<--End Closure
				} else {
					this.log.debug("...no trigger interval for list " + listName + "...");
				}
				//--Call function now one time
				this.log.debug("...triggering counter functions of list " + listName + " by creation...");
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					let _listIndex = listIndex;
					setTimeout(function(){
						if(!lists[_listIndex].counterTimeout) lists[_listIndex].counterTimeout = setTimeout(function(){ //Debouncing
							for(let counterFunctionIndex = 0; counterFunctionIndex < lists[_listIndex].counterFunctions.length; counterFunctionIndex++){
								that.log.silly("...triggering counter function " + counterFunctionIndex + "/" + lists[_listIndex].counterFunctions.length + " of list " + lists[_listIndex].name + " by creation NOW...");
								lists[_listIndex].counterFunctions[counterFunctionIndex](lists[_listIndex].listItems, "triggeredByCreation");
							}
							lists[_listIndex].counterTimeout = false;
						} , 200);
					}, 200);
				})(); //<--End Closure
				//--##### Calculations #####
				if(this.config.lists[configListIndex].calculations) for(let calculationIndex = 0; calculationIndex < this.config.lists[configListIndex].calculations.length; calculationIndex++){
					this.log.debug("...processing calculation " + listName + "_" + this.config.lists[configListIndex].calculations[calculationIndex].name + "...");
					let calculationName = this.config.lists[configListIndex].calculations[calculationIndex].name || "Calculation " + calculationIndex.toString();
					//-- --Create combination-object
					await that.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(calculationName),		{type: "state"}, 	{name: listName + " - " + calculationName, 		unit: this.config.lists[configListIndex].calculations[calculationIndex].unit || "",		read: true, write: false, desc: "Calculation created by iQontrol"});
					//-- --Get used IDs
					lists[listIndex].calculationItems[calculationIndex] = [];
					if (that.config.lists[configListIndex].calculations[calculationIndex].calculationSteps) for(let calculationStepIndex = 0; calculationStepIndex < that.config.lists[configListIndex].calculations[calculationIndex].calculationSteps.length; calculationStepIndex++){
						let id = that.config.lists[configListIndex].calculations[calculationIndex].calculationSteps[calculationStepIndex].id;
						lists[listIndex].calculationItems[calculationIndex].push(id);
					}
					//-- --Creating calculationFunctions
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						let _configListIndex = configListIndex;
						let _calculationIndex = calculationIndex;
						let calculation = that.config.lists[configListIndex].calculations[_calculationIndex];
						let calculationFunction = async function(_listItems, triggeredBy){ // ###### CALCULATION FUNCTION ###### --> 
							that.log.debug("CALCULATION " + listName + " " + calculation.name + " function started, TRIGGERED BY " + triggeredBy);
							calculation.calculationSteps = calculation.calculationSteps || [];
							let result;
							let calculationType = null;
							let iQontrolDatapointList = null;
							let iQontrolListSeparator = null;
							//-- -- --Loop through the calculationSteps of this counter
							if (calculation.calculationSteps) for(let calculationStepIndex = 0; calculationStepIndex < calculation.calculationSteps.length; calculationStepIndex++){
								let id = calculation.calculationSteps[calculationStepIndex].id;
								if(!usedStates[id]) {
									try {
										usedStates[id] = await that.getForeignStateAsync(id);
									} catch {
										usedStates[id] = emptyState;
									}
								}
								let value = usedStates[id] && usedStates[id].val;
								iQontrolDatapointList = (iQontrolDatapointList == null ? true : iQontrolDatapointList) && allObjects[id] && allObjects[id].native && allObjects[id].native.iQontrolDatapointList;
								if (iQontrolListSeparator == null){
									iQontrolListSeparator = allObjects[id] && allObjects[id].native && allObjects[id].native.iQontrolListSeparator || false;
								} else {
									if (iQontrolListSeparator != iQontrolListSeparator == null && allObjects[id] && allObjects[id].native && allObjects[id].native.iQontrolListSeparator) iQontrolListSeparator = false;
								}
								if (typeof value != udef){
									if (iQontrolListSeparator) {
										if (value == null || value == "") {
											value = [];
										} else {
											value = value.toString().split(iQontrolListSeparator);
										}
									} else if (isNaN(value) && tryParseJSON(value)){
										value = tryParseJSON(value);
									}
								}
								if (typeof value == udef) continue;
								if (calculationType == null) {
									if(Array.isArray(value)){
										calculationType = "arrays";
										result = [];
									} else if (typeof value == "object") {
										calculationType = "objects";
										iQontrolDatapointList = false;
										iQontrolListSeparator = false;
										result = {};
									} else if (!isNaN(value)) {
										calculationType = "numbers";
										iQontrolDatapointList = false;
										iQontrolListSeparator = false;
										result = 0;
									} else if (typeof value == "string") {
										calculationType = "string";
										iQontrolDatapointList = false;
										iQontrolListSeparator = false;
										result = "";
									} else {
										continue;
									}
								}
								that.log.silly("CALCULATION " + listName + "_" + calculation.name + " value: " + value + ", typeof: " + typeof value + ", isArray: " + Array.isArray(value) + ", isNaN: " + isNaN(value) + ", calculationType: " + calculationType);
								if (calculationType == "arrays" && Array.isArray(value)){
									switch (calculation.calculationSteps[calculationStepIndex].operator){
										case "+":
										result = result.concat(value);
										break;
										
										case "-":
										result = result.filter(o => !value.includes(o));
										break;
									}
								} else if (calculationType == "objects" && typeof value == "object"){
									switch (calculation.calculationSteps[calculationStepIndex].operator){
										case "+":
										Object.assign(result, value);
										break;
										
										case "-":
										Object.keys(value).forEach(key => {if(typeof result[key] != "undefined") delete result[key]});
										break;
									}
								} else if (calculationType == "numbers" && !isNaN(value)){
									if (!value) value = 0;
									value = parseFloat(value);
									switch (calculation.calculationSteps[calculationStepIndex].operator){
										case "+":
										result += value;
										break;
										
										case "-":
										result -= value;
										break;
										
										case "*":
										result *= value;
										break;
										
										case "\/":
										if (value != 0) result /= value;
										break;
									}
								} else if (calculationType == "string" && value != null) {
									value = value.toString();
									switch (calculation.calculationSteps[calculationStepIndex].operator){
										case "+":
										result += value;
										break;
									}
								} else {
									continue;
								}
							}
							that.log.info("CALCULATION " + listName + " " + calculation.name + " has changed");
							if(calculationType == "arrays" || calculationType == "objects") {
								that.log.debug("CALCULATION " + listName + " " + calculation.name + " result: " + JSON.stringify(result));
							} else {
								that.log.debug("CALCULATION " + listName + " " + calculation.name + " result: " + result);							
							}
							//-- -- -- --Create calculation-object and set state
							let type = "number";
							let role = "value";
							let native = false;
							switch (calculationType){
								case "objects": case "arrays": 
								if (iQontrolListSeparator){
									type = "string"; 
									role = "list"; 
									native = {iQontrolListSeparator: iQontrolListSeparator};
									result = result.join(iQontrolListSeparator);
								} else {
									type = "json"; 
									role = "list.json"; 
									if (iQontrolDatapointList) native = {iQontrolDatapointList: true}; 
									result = JSON.stringify(result);
								}
								break;
								
								case "string":
								type = "string";
								break;
							}
							await that.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(calculation.name), false, {type: type, 	role: role}, native, result, true);
						}; //<-- End of ##### CALCULATION FUNCTION #####
						lists[listIndex].calculationFunctions.push(calculationFunction);
					})(); //<--End Closure
					//-- --Subscribe to the calculation items
					this.log.debug("...subscribing to items of calculation " + listName + " " + that.config.lists[configListIndex].calculations[calculationIndex].name + " (" + lists[listIndex].calculationItems[calculationIndex].length + " objects)...");										
					this.subscribeForeignStates(lists[listIndex].calculationItems[calculationIndex]);
					//-- --Call function now one time
					this.log.debug("...triggering calculation function " + listName + " " + that.config.lists[configListIndex].calculations[calculationIndex].name + " by creation...");
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						let _listIndex = listIndex;
						let _calculationIndex = calculationIndex;
						setTimeout(function(){
							if(!lists[_listIndex].calculationTimeouts[_calculationIndex]) lists[_listIndex].calculationTimeouts[_calculationIndex] = setTimeout(function(){ //Debouncing
								that.log.silly("...triggering calculation function " + _calculationIndex + " of list " + lists[_listIndex].name + " by creation NOW...");
								lists[_listIndex].calculationFunctions[_calculationIndex](lists[_listIndex].calculationItems[_calculationIndex], "triggeredByCreation");
								lists[_listIndex].calculationTimeouts[_calculationIndex] = false;
							} , 200);
						}, 200);
					})(); //<--End Closure
				}
				//--##### Combinations #####
				if(this.config.lists[configListIndex].combinations) for(let combinationIndex = 0; combinationIndex < this.config.lists[configListIndex].combinations.length; combinationIndex++){
					this.log.debug("...processing combination " + listName + " " + this.config.lists[configListIndex].combinations[combinationIndex].name + "...");
					let combinationName = this.config.lists[configListIndex].combinations[combinationIndex].name || "Combination " + combinationIndex.toString();
					//-- --Create combination-object
					await that.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(combinationName),		{type: "state"}, 	{name: listName + " - " + combinationName, 		type: "string", 	role: "text",		unit: this.config.lists[configListIndex].combinations[combinationIndex].unit || "",		read: true, write: false, desc: "Combination created by iQontrol"});
					//-- --Get used IDs
					lists[listIndex].combinationItems[combinationIndex] = [];
					if (that.config.lists[configListIndex].combinations[combinationIndex].combinationSteps) for(let combinationStepIndex = 0; combinationStepIndex < that.config.lists[configListIndex].combinations[combinationIndex].combinationSteps.length; combinationStepIndex++){
						let id = that.config.lists[configListIndex].combinations[combinationIndex].combinationSteps[combinationStepIndex].id;
						lists[listIndex].combinationItems[combinationIndex].push(id);
					}
					//-- --Creating combinationFunctions
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						let combination = that.config.lists[configListIndex].combinations[combinationIndex];
						let combinationFunction = async function(_listItems, triggeredBy){ // ###### COMBINATION FUNCTION ###### --> 
							that.log.debug("COMBINATION " + listName + "_" + combination.name + " function started, TRIGGERED BY " + triggeredBy);
							combination.combinationSteps = combination.combinationSteps || [];
							let result = "";
							//-- -- --Loop through the combinationSteps of this combination
							if (combination.combinationSteps) for(let combinationStepIndex = 0; combinationStepIndex < combination.combinationSteps.length; combinationStepIndex++){
								let id = combination.combinationSteps[combinationStepIndex].id;
								let value;
								if(!usedStates[id]) {
									try {
										usedStates[id] = await that.getForeignStateAsync(id);
									} catch {
										usedStates[id] = emptyState;
									}
								}
								switch(combination.combinationSteps[combinationStepIndex].type){
									case "valuelistValue":
									value = usedStates[id] && usedStates[id].val;
									if(allObjects[id] && allObjects[id].common && allObjects[id].common.states && typeof allObjects[id].common.states[value] != "undefined") {
										value = allObjects[id].common.states[value];
									}
									break;
									
									case "ack":
									value = usedStates[id] && usedStates[id].ack;
									break;

									case "lc":
									value = usedStates[id] && usedStates[id].lc;
									break;

									case "lcs":
									value = (new Date() - (usedStates[id] && usedStates[id].lc || 0))/1000;
									break;

									case "ts":
									value = usedStates[id] && usedStates[id].ts;
									break;

									case "tss":
									value = (new Date() - (usedStates[id] && usedStates[id].lc || 0))/1000;
									break;

									case "value": case "": default:
									value = usedStates[id] && usedStates[id].val;
									break;
								}
								if (typeof value == udef) continue;
								let onlyIfOperator = combination.combinationSteps[combinationStepIndex].onlyIfOperator;
								that.log.silly("COMBINATION " + listName + "_" + combination.name + " value: " + value + ", onlyIfOperator: " + onlyIfOperator + ", onlyIfValue: " + combination.combinationSteps[combinationStepIndex].onlyIfValue);
								if(!onlyIfOperator || (checkCondition(value, onlyIfOperator, combination.combinationSteps[combinationStepIndex].onlyIfValue))){
									if(combination.combinationSteps[combinationStepIndex].prefix) result += combination.combinationSteps[combinationStepIndex].prefix;
									if(!combination.combinationSteps[combinationStepIndex].onlyIfJustPrefix) {
										let iQontrolDatapointList = allObjects[id] && allObjects[id].native && allObjects[id].native.iQontrolDatapointList;
										let iQontrolListSeparator = allObjects[id] && allObjects[id].native && allObjects[id].native.iQontrolListSeparator;
										if (typeof value != udef){
											if (iQontrolListSeparator) {
												if (value == null) {
													value = [];
												} else {
													value = value.toString().split(iQontrolListSeparator);
												}
											} else if (isNaN(value) && tryParseJSON(value)){
												value = tryParseJSON(value);
											}
											if(Array.isArray(value)){
												result += value.join(combination.combinationSteps[combinationStepIndex].separator || iQontrolListSeparator || ", ");
											} else if (typeof value == "object") {
												let valueArray = []
												for(valueItem in value){
													valueArray.push(JSON.stringify(value[valueItem]));
												};
												result += valueArray.join(combination.combinationSteps[combinationStepIndex].separator || iQontrolListSeparator || ", ");
											} else {
												result += value;
											}
										}
									}
									if(!combination.combinationSteps[combinationStepIndex].onlyIfJustPrefix && combination.combinationSteps[combinationStepIndex].postfix) result += combination.combinationSteps[combinationStepIndex].postfix;
								} else {
									if(combination.combinationSteps[combinationStepIndex].onlyIfElse) result += combination.combinationSteps[combinationStepIndex].onlyIfElse;
								}
							}
							that.log.info("COMBINATION " + listName + " " + combination.name + " has changed");
							that.log.debug("COMBINATION " + listName + " " + combination.name + " result: " + result);
							//-- -- -- --Set States
							result = result.replace(/\\r/g, "\r").replace(/\\n/g, "\n");
							result = result.replace(/[\r\n]+$/, ""); //remove trailing new line and cr characters
							await that.setStateValue("Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(combination.name), {val: result, ack: true});
						}; //<-- End of ##### COMBINATION FUNCTION #####
						lists[listIndex].combinationFunctions.push(combinationFunction);
					})(); //<--End Closure
					//-- --Subscribe to the combination items
					this.log.debug("...subscribing to items of combination " + listName + " " + that.config.lists[configListIndex].combinations[combinationIndex].name + " (" + lists[listIndex].combinationItems[combinationIndex].length + " objects)...");										
					this.subscribeForeignStates(lists[listIndex].combinationItems[combinationIndex]);
					//-- --Call function now one time
					this.log.debug("...triggering combination function " + listName + " " + that.config.lists[configListIndex].combinations[combinationIndex].name + " by creation...");
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						let _listIndex = listIndex;
						let _combinationIndex = combinationIndex;
						setTimeout(function(){
							if(!lists[_listIndex].combinationTimeouts[_combinationIndex]) lists[_listIndex].combinationTimeouts[_combinationIndex] = setTimeout(function(){ //Debouncing
								that.log.silly("...triggering combination function " + _combinationIndex + " of list " + lists[_listIndex].name + " by creation NOW...");
								lists[_listIndex].combinationFunctions[_combinationIndex](lists[_listIndex].combinationItems[_combinationIndex], "triggeredByCreation");
								lists[_listIndex].combinationTimeouts[_combinationIndex] = false;
							} , 200);
						}, 200);
					})(); //<--End Closure
				}
				//--##### Logs #####
				if(this.config.lists[configListIndex].logs) for(let logIndex = 0; logIndex < this.config.lists[configListIndex].logs.length; logIndex++){
					this.log.debug("...processing log " + listName + " " + this.config.lists[configListIndex].logs[logIndex].name + "...");
					let logName = this.config.lists[configListIndex].logs[logIndex].name || "Log " + logIndex.toString();
					//-- --Create log-object
					await that.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(logName),				{type: "state"}, 	{name: listName + " - " + logName, 						type: "json", 		role: "table",					read: true, write: false, desc: "Log created by iQontrol"});
					await that.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(logName) + "_COUNT",		{type: "state"}, 	{name: listName + " - " + logName + " - COUNT", 		type: "number", 	role: "indicator.count",		read: true, write: false, desc: "Log created by iQontrol"});
					await that.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(logName) + "_CLEAR",		{type: "state"}, 	{name: listName + " - " + logName + " - CLEAR", 		type: "boolean", 	role: "button",					read: true, write: false, desc: "Log created by iQontrol"});
					//-- --Get used IDs
					lists[listIndex].logItems[logIndex] = [];
					if (that.config.lists[configListIndex].logs[logIndex].onChangeIds) for(let onChangeIdIndex = 0; onChangeIdIndex < that.config.lists[configListIndex].logs[logIndex].onChangeIds.length; onChangeIdIndex++){
						let id = that.config.lists[configListIndex].logs[logIndex].onChangeIds[onChangeIdIndex].id;
						if (id && id != "" && lists[listIndex].logItems[logIndex].indexOf(id) == -1) lists[listIndex].logItems[logIndex].push(id);
					}
					if (that.config.lists[configListIndex].logs[logIndex].onChangeAddAllLogStepIds && that.config.lists[configListIndex].logs[logIndex].logSteps) for(let logStepIndex = 0; logStepIndex < that.config.lists[configListIndex].logs[logIndex].logSteps.length; logStepIndex++){
						let id = that.config.lists[configListIndex].logs[logIndex].logSteps[logStepIndex].id;
						if (id && id != "" && lists[listIndex].logItems[logIndex].indexOf(id) == -1) lists[listIndex].logItems[logIndex].push(id);
					}
					that.log.debug("LOG " + listName + "_" + logName + " Added log items: " + JSON.stringify(lists[listIndex].logItems));
					//-- --Creating logFunctions
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						let log = that.config.lists[configListIndex].logs[logIndex];
						let logStateId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(log.name);
						let foreignLogStateId = that.namespace + "." + logStateId;
						let logCountId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(logName) + "_COUNT";
						let foreignLogCountId = that.namespace + "." + logCountId;
						let logClearId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(logName) + "_CLEAR";
						let foreignLogClearId = that.namespace + "." + logClearId;
						let logFunction = async function(_listItems, triggeredBy){ // ###### LOG FUNCTION ###### --> 
							that.log.debug("LOG " + listName + "_" + logName + " function started, TRIGGERED BY " + triggeredBy);
							if(!usedStates[foreignLogCountId]) {
								try {
									usedStates[foreignLogCountId] = await that.getForeignStateAsync(foreignLogCountId);
								} catch {
									usedStates[foreignLogCountId] = emptyState;
								}
							}
							let logCount = usedStates[foreignLogCountId] && usedStates[foreignLogCountId].val || 0;
							if (isNaN(logCount)) logCount = 0; else logCount = parseInt(logCount);
							logCount += 1;
							log.logSteps = log.logSteps || [];
							let result = {};
							//-- -- --Loop through the logSteps of this log
							if (log.logSteps) for(let logStepIndex = 0; logStepIndex < log.logSteps.length; logStepIndex++){
								let key = log.logSteps[logStepIndex].key || logStepIndex;
								let id = log.logSteps[logStepIndex].id;
								let value = "";
								let date = new Date();
								if(!usedStates[id]) {
									try {
										usedStates[id] = await that.getForeignStateAsync(id);
									} catch {
										usedStates[id] = emptyState;
									}
								}
								switch(log.logSteps[logStepIndex].type){
									case "count":
									value = logCount;
									break;
									
									case "octs":
									value = date.getTime();
									break;
									
									case "octsDMYHMS":
									value = ("0" + date.getDate()).slice(-2) + "." + ("0" + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear() + ", " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2);
									break;
									
									case "octsYMDhMSa":
									value = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + ", " + ("0" + date.getHours()%12).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2) + (date.getHours() > 12 ? "pm" : "am");
									break;
									
									case "valuelistValue":
									value = usedStates[id] && usedStates[id].val;
									if(allObjects[id] && allObjects[id].common && allObjects[id].common.states && typeof allObjects[id].common.states[value] != "undefined") {
										value = allObjects[id].common.states[value];
									}
									break;
									
									case "ack":
									value = usedStates[id] && usedStates[id].ack;
									break;

									case "lc":
									value = usedStates[id] && usedStates[id].lc;
									break;

									case "lcs":
									value = (new Date() - (usedStates[id] && usedStates[id].lc || 0))/1000;
									break;

									case "ts":
									value = usedStates[id] && usedStates[id].ts;
									break;

									case "tss":
									value = (new Date() - (usedStates[id] && usedStates[id].lc || 0))/1000;
									break;

									case "value": case "": default:
									value = usedStates[id] && usedStates[id].val;
									break;
								}
								that.log.silly("LOG " + listName + " " + logName + " add entry " + logCount + " step " + logStepIndex + ": " + key + " -> " + value + " (" + log.logSteps[logStepIndex].type + ")");
								if (typeof value != udef && value != null) value = value.toString().replace(/\\r\\n/g, "\r\n")
								result[key] = value;
							}
							that.log.info("LOG " + listName + " " + logName + " add entry " + logCount);
							that.log.debug("LOG " + listName + " " + logName + " add entry " + logCount + ": " + JSON.stringify(result));
							//-- -- -- --Set States
							if(!usedStates[foreignLogStateId]) {
								try {
									usedStates[foreignLogStateId] = await that.getForeignStateAsync(foreignLogStateId);
								} catch {
									usedStates[foreignLogStateId] = emptyState;
								}
							}
							let stateResult = usedStates[foreignLogStateId] && usedStates[foreignLogStateId].val;
							stateResult = tryParseJSON(stateResult) || [];
							if (log.addTo == "bottom") stateResult.push(result); else stateResult.unshift(result);
							await that.setStateValue(logStateId, {val: JSON.stringify(stateResult), ack: true});
							await that.setStateValue(logCountId, {val: logCount, ack: true});
						}; //<-- End of ##### LOG FUNCTION #####
						let logClearFunction = async function(triggeredBy){ // ###### LOG CLEAR FUNCTION ###### --> 
							that.log.debug("LOG " + listName + "_" + logName + " CLEAR, TRIGGERED BY " + triggeredBy);
							await that.setStateValue(logClearId, {val: true, ack: true});
							await that.setStateValue(logCountId, {val: 0, ack: true});
							await that.setStateValue(logStateId, {val: JSON.stringify([]), ack: true});
							await that.setStateValue(logClearId, {val: false, ack: true});
							that.log.debug("LOG " + listName + " " + logName + " has been cleared");
						}; //<-- End of ##### LOG CLEAR FUNCTION #####
						lists[listIndex].logFunctions.push(logFunction);
						lists[listIndex].logClearFunctions.push(logClearFunction);
						lists[listIndex].logClearIds.push(foreignLogClearId);
						that.subscribeStates([logClearId, logCountId]);
						that.setStateValue(logClearId, {val: false, ack: true});
					})(); //<--End Closure
					//-- --Subscribe to the log items
					this.log.debug("...subscribing to items of log " + listName + " " + that.config.lists[configListIndex].logs[logIndex].name + " (" + lists[listIndex].logItems[logIndex].length + " objects)...");										
					this.subscribeForeignStates(lists[listIndex].logItems[logIndex]);
				}
			}
		}
	}

	updateLists(id){
		for(let listIndex = 0; listIndex < lists.length; listIndex++){
			//Check, if id belongs to listItems and then trigger counterFunctions
			let triggerItems = lists[listIndex].listItems.concat(lists[listIndex].counterAdditionalTriggerItems);
			if(triggerItems.indexOf(id) > -1 && !lists[listIndex].counterTimeout){
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					let _id = id;
					let _listIndex = listIndex;
					lists[_listIndex].counterTimeout = setTimeout(function(){ //Debouncing
						for(let counterFunctionIndex = 0; counterFunctionIndex < lists[_listIndex].counterFunctions.length; counterFunctionIndex++){							
							lists[_listIndex].counterFunctions[counterFunctionIndex](lists[_listIndex].listItems, _id);
						}
						lists[_listIndex].counterTimeout = false;
					} , 200);
				})(); //<--End Closure
			}
			//Check, if id belongs to calculation
			for(let calculationIndex = 0; calculationIndex < lists[listIndex].calculationFunctions.length; calculationIndex++){
				if(lists[listIndex].calculationItems[calculationIndex].indexOf(id) > -1 && !lists[listIndex].calculationTimeouts[calculationIndex]){
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						let _id = id;
						let _listIndex = listIndex;
						let _calculationIndex = calculationIndex;
						lists[_listIndex].calculationTimeouts[_calculationIndex] = setTimeout(function(){ //Debouncing
							lists[_listIndex].calculationFunctions[_calculationIndex](lists[_listIndex].calculationItems[_calculationIndex], _id);
							lists[_listIndex].calculationTimeouts[_calculationIndex] = false;
						} , 200);
					})(); //<--End Closure
				}
			}
			//Check, if id belongs to combinations
			for(let combinationIndex = 0; combinationIndex < lists[listIndex].combinationFunctions.length; combinationIndex++){
				if(lists[listIndex].combinationItems[combinationIndex].indexOf(id) > -1 && !lists[listIndex].combinationTimeouts[combinationIndex]){
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						let _id = id;
						let _listIndex = listIndex;
						let _combinationIndex = combinationIndex;
						lists[_listIndex].combinationTimeouts[_combinationIndex] = setTimeout(function(){ //Debouncing
							lists[_listIndex].combinationFunctions[_combinationIndex](lists[_listIndex].combinationItems[_combinationIndex], _id);
							lists[_listIndex].combinationTimeouts[_combinationIndex] = false;
						} , 200);
					})(); //<--End Closure
				}
			}
			//Check, if id belongs to logs
			if(usedStates[id] && usedStates[id].val && !usedStates[id].ack) for(let logIndex = 0; logIndex < lists[listIndex].logClearFunctions.length; logIndex++){
				if(lists[listIndex].logClearIds[logIndex] == id && !lists[listIndex].logClearTimeouts[logIndex]){ //Clear
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						let _id = id;
						let _listIndex = listIndex;
						let _logIndex = logIndex;
						lists[_listIndex].logClearTimeouts[_logIndex] = setTimeout(function(){ //Debouncing
							lists[_listIndex].logClearFunctions[_logIndex](_id);
							lists[_listIndex].logClearTimeouts[_logIndex] = false;
						} , 100);
					})(); //<--End Closure					
				}
			}
			for(let logIndex = 0; logIndex < lists[listIndex].logFunctions.length; logIndex++){
				if(lists[listIndex].logItems[logIndex].indexOf(id) > -1 && !lists[listIndex].logTimeouts[logIndex]){ //Log
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						let _id = id;
						let _listIndex = listIndex;
						let _logIndex = logIndex;
						let _debounce = lists[_listIndex].logDebounces[_logIndex] || 1000;
						if (isNaN(_debounce)) _debounce = 1000;
						lists[_listIndex].logTimeouts[_logIndex] = setTimeout(function(){ //Debouncing
							lists[_listIndex].logFunctions[_logIndex](lists[_listIndex].logItems[_logIndex], _id);
							lists[_listIndex].logTimeouts[_logIndex] = false;
						} , _debounce);
					})(); //<--End Closure
				}
			}
		}
	}

	//++++++++++ OBJECT AND STATES-FUNCTIONS ++++++++++
	async createOrUpdateObject(objId, rootOptions, commonOptions, nativeOptions, setValue, ack){
		if (!objId) return;
		objId = objId.replace(/\.$/g, ""); //Remove trailing dot
		if (ack) ack = true; else ack = false;
		let that = this;
		let created = false;
		let obj = {};
		if (allObjects[objId]) {
			this.log.silly("createOrUpdateObject: Object " + objId + " found in allObjects");
			obj = allObjects[objId];
		} else {			
			this.log.silly("createOrUpdateObject: Object " + objId + " NOT found in allObjects, fetching it now from ioBroker...");
			try {
				obj = await this.getObjectAsync(objId);
			} catch {
				obj = {}; 
			}
		}
		if (!obj){
			this.log.silly("createOrUpdateObject: Object " + objId + " NOT found - creating a new object...");
			created = true;
			obj = {
				"type": "state",
				"common": {
					"name": objId,
					"desc": "Created by iQontrol",
					"type": "string",
					"role": "",
					"icon": ""
				},
				"native": {}
			};
		}
		if (rootOptions) Object.assign(obj, rootOptions);
		if (!obj.common) obj.common = {};
		if (commonOptions) {
			Object.assign(obj.common, commonOptions);
		}
		if (!obj.native) obj.native = {};
		if (nativeOptions) {
			Object.assign(obj.native, nativeOptions);
		}
		createdObjects.push(objId);
		await this.setObjectAsync(objId, obj).then(async function(){ 
			that.log.debug((created ? "created" : "updated") + " object: " + objId); 
			if (typeof setValue != udef) await that.setStateValue(objId, {val: setValue, ack: ack});
		}, function(err){
			that.log.error("ERROR " + (created ? "creating" : "updating") + " object: " + objId + ": " + err);
		});
	}
		
	async setStateValue(id, value){
		let that = this;
		await this.setStateAsync(id, value).then(function(){ 
			that.log.debug("set state: " + id + " --> " + JSON.stringify(value)); 
			usedStates[that.namespace + "." + id] = value;
		}, function(err){
			that.log.debug("ERROR setting state " + id + " --> " + JSON.stringify(value) + ": " + err); 
		});
	}

	async deleteUnusedObjects(){
		let that = this;
		this.getAdapterObjectsAsync().then(function(obj){
			that.log.debug("Got Adapter Objects");
			var ids = []
			for (var key in obj) {
				if (!obj.hasOwnProperty(key)) continue;
				ids.push(key);
			}
			that.log.debug("Adapter Object IDs: " + ids.length + " (" + ids.toString() + ")");
			for(var i = 0; i < ids.length; i++){
				let filter = ["Images"];
				let name = ids[i].substr(that.namespace.length + 1);
				if(createdObjects.indexOf(name) >= 0 || filter.indexOf(name) >= 0){
					that.log.silly("DeviceObject " + name + " ist still in use - not deleting.")
				} else {
					if(name.substr(-1) !== '.'){
						that.log.debug("<<<deleteObject " + name);
						that.delObjectAsync(name).then(function(){ 
							that.log.debug("deleted Object " + name);
						}, function(err){
							that.log.debug("ERROR deleting Object " + name + ": " + err); 
						});
					}
				}
			}
		});
	}

	async saveThisConfig(){
		this.log.debug("saveThisConfig...");
		//Saving this.config
		let objId = 'system.adapter.iqontrol.' + this.instance;
		let obj;
		let that = this;
		if (allObjects[objId]) {
			this.log.silly("saveThisConfig: Object " + objId + " found in allObjects");
			obj = allObjects[objId];
		} else {			
			this.log.silly("saveThisConfig: Object " + objId + " NOT found in allObjects, fetching it now from ioBroker...");
			obj = {...await this.getForeignObjectAsync(objId)};
		}
		if (!obj || !obj.common || !obj.native){
			this.log.error("saveThisConfig: Object " + objId + " NOT found in ioBroker Objects or common or native part is missing! ERROR");
		} else {
			Object.assign(obj.native, this.config);
			this.log.silly("saveThisConfig: writing object " + objId + " now to ioBroker...");
			await this.setForeignObjectAsync(objId, obj, true).then(async function(){ 
				that.log.debug("saveThisConfig: Updated object: " + objId); 
			}, function(err){
				that.log.error("saveThisConfig: ERROR updating object: " + objId + ": " + err);
			});
		}
	}
	
	//++++++++++ INITIALIZATION ++++++++++
	/**
	 * Is called when databases are connected and adapter received configuration.
	 */
	async onReady() {
		// Initialize your adapter here
		await this.createInfoConnection();
		this.setState('info.connection', { val: false, ack: true });

		let systemConfig = await this.getForeignObjectAsync('system.config');
		systemLanguage = systemConfig && systemConfig.common && systemConfig.common.language || "en";
		this.log.info("systemLanguage = " + systemLanguage);

		this.log.info("Creating Passphrase...");
		await this.createPassphrase();
		
		this.log.info("Creating Popup States...");
		await this.createPopup();
		
		this.log.info("Creating Widget States...");
		await this.createWidgets();
		
		if(this.config.listsActive){
			this.log.info("Creating List States...");
			this.log.debug("...fetching all objects from ioBroker...");
			allObjects = {...await this.getForeignObjectsAsync('', 'state'), ...await this.getForeignObjectsAsync('', 'channel'), ...await this.getForeignObjectsAsync('', 'device'), ...await this.getForeignObjectsAsync('', 'enum'), ...await this.getForeignObjectsAsync('', 'instance')};
			this.log.debug("fetched " + Object.keys(allObjects).length + " objects from ioBroker.");
			await this.createLists();
		} else {
			this.log.info("Lists deactivated.");			
		}
		
		this.log.info("Deleting unused Objects...");
		this.deleteUnusedObjects();

		this.log.info("Subscribing to states...");
		this.subscribeStates("*");
		
		this.setState('info.connection', { val: true, ack: true });
		this.log.info("iQontrol ready.");
		
		
		//--------------------------------- HELP ------------------------------------
		// The adapters config (in the instance object everything under the attribute "native") is accessible via
		// this.config:
		// this.log.info("config option1: " + this.config.option1);
		// this.log.info("config option2: " + this.config.option2);
		//
		//
		// For every state in the system there has to be also an object of type state
		// Here a simple template for a boolean variable named "testVariable"
		// Because every adapter instance uses its own unique namespace variable names can't collide with other adapters variables
		//
		// await this.setObjectAsync("testVariable", {
		//	type: "state",
		//	common: {
		//		name: "testVariable",
		//		type: "boolean",
		//		role: "indicator",
		//		read: true,
		//		write: true,
		//	},
		//	native: {},
		// });
		//
		// in this template all states changes inside the adapters namespace are subscribed
		// this.subscribeStates("*");
		//
		//
		// setState examples
		// you will notice that each setState will cause the stateChange event to fire (because of above subscribeStates cmd)
		//
		// the variable testVariable is set to true as command (ack=false)
		// await this.setStateAsync("testVariable", true);
		//
		// same thing, but the value is flagged "ack"
		// ack should be always set to true if the value is received from or acknowledged from the target system
		// await this.setStateAsync("testVariable", { val: true, ack: true });
		//
		// same thing, but the state is deleted after 30s (getState will return null afterwards)
		// await this.setStateAsync("testVariable", { val: true, ack: true, expire: 30 });
		//
		// examples for the checkPassword/checkGroup functions
		// let result = await this.checkPasswordAsync("admin", "iobroker");
		// this.log.info("check user admin pw ioboker: " + result);
		//
		// result = await this.checkGroupAsync("admin", "admin");
		// this.log.info("check group user admin group admin: " + result);
		//---------------------------------------------------------------------------
	}

	//++++++++++ SOCKET-FUNCTIONS ++++++++++
	/**
	 * Is called when adapter shuts down - callback has to be called under any circumstances!
	 * @param {() => void} callback
	 */
	onUnload(callback) {
		try {
			//Stop trigger intervals
			this.log.info("Stop trigger intervals...");
			for(let triggerIntervalIndex = 0; triggerIntervalIndex < triggerIntervals.length; triggerIntervalIndex++){
				clearInterval(triggerIntervals[triggerIntervalIndex]);
			}
			triggerIntervals = [];
			this.log.info("cleaned everything up...");
			callback();
		} catch (e) {
			callback();
		}
	}

	/**
	 * Is called if a subscribed object changes
	 * @param {string} id
	 * @param {ioBroker.Object | null | undefined} obj
	 */
	onObjectChange(id, obj) {
		if(this.config.listsActive){
			if (obj) {
				// The object was changed
				this.log.info(`object ${id} changed: ${JSON.stringify(obj)}`);
				allObjects[id] = obj;
			} else {
				// The object was deleted
				this.log.info(`object ${id} deleted`);
				if(allObjects[id]) delete allObjects.id;
			}
		}
	}

	/**
	 * Is called if a subscribed state changes
	 * @param {string} id
	 * @param {ioBroker.State | null | undefined} state
	 */
	async onStateChange(id, state) {
		if (state) { // The state was updated or changed
			this.log.silly(`state ${id} updated: ${state.val} (ack = ${state.ack}) ts = ${state.ts} lc = ${state.lc} state changed: ${state.ts == state.lc}`);
			switch(id){
				case this.namespace + ".Popup.CLEAR":
					this.log.info("Popup.CLEAR");
					this.setState('Popup.Message', { val: "", ack: true });
					this.setState('Popup.PersistentMessage', { val: "", ack: true });
					this.setState('Popup.PersistentExpires', { val: "", ack: true });
					this.setState('Popup.PersistentUndismissible', { val: false, ack: true });
					this.setState('Popup.PersistentId', { val: "", ack: true });
					this.setState('Popup.Duration', { val: "", ack: true });
					this.setState('Popup.ButtonNames', { val: "", ack: true });
					this.setState('Popup.ButtonValues', { val: "", ack: true });
					this.setState('Popup.ButtonDestinationStates', { val: "", ack: true });
					this.setState('Popup.ButtonCloses', { val: "", ack: true });
					this.setState('Popup.ButtonClears', { val: "", ack: true });
					this.setState('Popup.ClickKeepsOpen', { val: false, ack: true });
					this.setState('Popup.ClickedValue', { val: "", ack: true });
					this.setState('Popup.ClickedDestinationState', { val: "", ack: true });
				break;
				
				case this.namespace + ".Popup.PersistentMessage":
					var persistentMessageState = await this.getStateAsync('Popup.PersistentMessage');
					if(persistentMessageState && persistentMessageState.val){
						this.log.info("Persistent Popup Message received");
						var persistentMessage = persistentMessageState.val;
						var persistentExpires = (await this.getStateAsync('Popup.PersistentExpires') || {}).val || 0;
						var persistentUndismissible = (await this.getStateAsync('Popup.PersistentUndismissible') || {}).val || false;
						var persistentId = (await this.getStateAsync('Popup.PersistentId') || {}).val || "";
						var persistentMessagesPending = (await this.getStateAsync('Popup.PERSISTENT_MESSAGES_PENDING') || {}).val || "[]";
						if(!Array.isArray(persistentMessagesPending)) persistentMessagesPending = [];
						var duration = (await this.getStateAsync('Popup.Duration') || {}).val || 0;
						var clickKeepsOpen = (await this.getStateAsync('Popup.ClickKeepsOpen') || {}).val || false;
						var clickedValue = (await this.getStateAsync('Popup.ClickedValue') || {}).val || "";
						var clickedDestinationState = (await this.getStateAsync('Popup.ClickedDestinationState') || {}).val || "";
						var buttonNames = (await this.getStateAsync('Popup.ButtonNames') || {}).val || "";
						var buttonValues = (await this.getStateAsync('Popup.ButtonValues') || {}).val || "";
						var buttonDestinationStates = (await this.getStateAsync('Popup.ButtonDestinationStates') || {}).val || "";
						var buttonCloses = (await this.getStateAsync('Popup.ButtonCloses') || {}).val || "";
						var buttonClears = (await this.getStateAsync('Popup.ButtonClears') || {}).val || "";
						var popup = {
							message: persistentMessage,
							persistentExpires: persistentExpires,
							persistentUndismissible: persistentUndismissible,
							persistentId: persistentId,
							duration: duration, 
							clickKeepsOpen: clickKeepsOpen, 
							clickedValue: clickedValue, 
							clickedDestinationState: clickedDestinationState, 
							buttonNames: buttonNames, 
							buttonValues: buttonValues, 
							buttonDestinationStates: buttonDestinationStates, 
							buttonCloses: buttonCloses, 
							buttonClears: buttonClears, 
							ts: Math.floor(new Date().getTime()/1000)
						};
						persistentMessagesPending.push(popup);
						this.setState('Popup.PERSISTENT_MESSAGES_PENDING', { val: persistentMessagesPending, ack: true });
					}
				break;
				
				case this.namespace + ".Popup.PERSISTENT_MESSAGES_DELETE_ID":
					var deleteId = (await this.getStateAsync('Popup.PERSISTENT_MESSAGES_DELETE_ID') || {}).val;
					this.log.info("PERSISTENT_MESSAGES_DELETE_ID: " + deleteId);
					if(deleteId === null || deleteId == "null"){
						this.log.info("Deleting all pending persistent messages");
						this.setState('Popup.PERSISTENT_MESSAGES_PENDING', { val: [], ack: true });
					} else {
						var persistentMessagesPending = (await this.getStateAsync('Popup.PERSISTENT_MESSAGES_PENDING') || {}).val || "[]";
						if(!Array.isArray(persistentMessagesPending)) persistentMessagesPending = [];
						persistentMessagesPending = persistentMessagesPending.filter(function(item){
							return item.persistentId != deleteId;
						});
						this.setState('Popup.PERSISTENT_MESSAGES_PENDING', { val: persistentMessagesPending, ack: true });
					}
				break;
			}
			if(this.config.listsActive && (state.lc == state.ts)) { //State has CHANGED
				usedStates[id] = state;
				this.updateLists(id);
			}
		} else { // The state was deleted
			this.log.info(`state ${id} deleted`);
			if(this.config.listsActive) {
				delete usedStates[id];
				this.updateLists(id);
			}
		}
	}
		 
	/**
	 * Some message was sent to this instance over message box. Used by email, pushover, text2speech, ...
	 * Using this method requires "common.message" property to be set to true in io-package.json
	 * @param {ioBroker.Message} obj
	 */
	onMessage(obj) {
		if (typeof obj === "object" && obj.message) {
			if (obj.command === "send") {
				// e.g. send email or pushover or whatever
				this.log.info("send command");
				if(obj.message.PopupMessage || obj.message.PopupPersistentMessage){
					let PopupDuration = 0;
					if(typeof obj.message.PopupDuration !== "undefined" && !isNaN(obj.message.PopupDuration)){
						PopupDuration = parseInt(obj.message.PopupDuration);
					}
					let PopupPersistentExpires = "";
					if(typeof obj.message.PopupPersistentExpires !== "undefined"){
						PopupPersistentExpires = obj.message.PopupPersistentExpires;
					}
					let PopupPersistentUndismissible = "";
					if(typeof obj.message.PopupPersistentUndismissible !== "undefined"){
						PopupPersistentUndismissible = obj.message.PopupPersistentUndismissible;
					}
					let PopupPersistentId = "";
					if(typeof obj.message.PopupPersistentId !== "undefined"){
						PopupPersistentId = obj.message.PopupPersistentId;
					}
					let PopupClickKeepsOpen = "";
					if(typeof obj.message.PopupClickKeepsOpen !== "undefined"){
						PopupClickKeepsOpen = obj.message.PopupClickKeepsOpen;
					}
					let PopupClickedValue = "";
					if(typeof obj.message.PopupClickedValue !== "undefined"){
						PopupClickedValue = obj.message.PopupClickedValue;
					}
					let PopupClickedDestinationState = "";
					if(typeof obj.message.PopupClickedDestinationState !== "undefined"){
						PopupClickedDestinationState = obj.message.PopupClickedDestinationState;
					}
					let PopupButtonNames = "";
					if(typeof obj.message.PopupButtonNames !== "undefined"){
						PopupButtonNames = obj.message.PopupButtonNames;
					}
					let PopupButtonValues = "";
					if(typeof obj.message.PopupButtonValues !== "undefined"){
						PopupButtonValues = obj.message.PopupButtonValues;
					}
					let PopupButtonDestinationStates = "";
					if(typeof obj.message.PopupButtonDestinationStates !== "undefined"){
						PopupButtonDestinationStates = obj.message.PopupButtonDestinationStates;
					}
					let PopupButtonCloses = "";
					if(typeof obj.message.PopupButtonCloses !== "undefined"){
						PopupButtonCloses = obj.message.PopupButtonCloses;
					}
					let PopupButtonClears = "";
					if(typeof obj.message.PopupButtonClears !== "undefined"){
						PopupButtonClears = obj.message.PopupButtonClears;
					}
					this.log.debug("PopupDuration: " + PopupDuration);
					this.setState('Popup.Duration', { val: PopupDuration, ack: true });
					this.log.debug("PopupPersistentExpires: " + PopupPersistentExpires);
					this.setState('Popup.PersistentExpires', { val: PopupPersistentExpires, ack: true });
					this.log.debug("PopupPersistentUndismissible: " + PopupPersistentUndismissible);
					this.setState('Popup.PersistentUndismissible', { val: PopupPersistentUndismissible, ack: true });
					this.log.debug("PopupPersistentId: " + PopupPersistentId);
					this.setState('Popup.PersistentId', { val: PopupPersistentId, ack: true });
					this.log.debug("PopupClickKeepsOpen: " + PopupClickKeepsOpen);
					this.setState('Popup.ClickKeepsOpen', { val: PopupClickKeepsOpen, ack: true });
					this.log.debug("PopupClickedValue: " + PopupClickedValue);
					this.setState('Popup.ClickedValue', { val: PopupClickedValue, ack: true });
					this.log.debug("PopupClickedDestinationState: " + PopupClickedDestinationState);
					this.setState('Popup.ClickedDestinationState', { val: PopupClickedDestinationState, ack: true });
					this.log.debug("PopupButtonNames: " + PopupButtonNames);
					this.setState('Popup.ButtonNames', { val: PopupButtonNames, ack: true });
					this.log.debug("PopupButtonValues: " + PopupButtonValues);
					this.setState('Popup.ButtonValues', { val: PopupButtonValues, ack: true });
					this.log.debug("PopupButtonDestinationStates: " + PopupButtonDestinationStates);
					this.setState('Popup.ButtonDestinationStates', { val: PopupButtonDestinationStates, ack: true });
					this.log.debug("PopupButtonCloses: " + PopupButtonCloses);
					this.setState('Popup.ButtonCloses', { val: PopupButtonCloses, ack: true });
					this.log.debug("PopupButtonClears: " + PopupButtonClears);
					this.setState('Popup.ButtonClears', { val: PopupButtonClears, ack: true });
					if(obj.message.PopupPersistentMessage){
						this.log.info("Popup Persistent Message: " + obj.message.PopupPersistentMessage);
						this.setState('Popup.PersistentMessage', { val: obj.message.PopupPersistentMessage, ack: true });
					} else {
						this.log.info("Popup Message: " + obj.message.PopupMessage);
						this.setState('Popup.Message', { val: obj.message.PopupMessage, ack: true });
					}
				}
				// Send response in callback if required
				if (obj.callback) this.sendTo(obj.from, obj.command, "Message received", obj.callback);
			}
		}
	}
}

if (module.parent) {
	// Export the constructor in compact mode
	/**
	 * @param {Partial<ioBroker.AdapterOptions>} [options={}]
	 */
	module.exports = (options) => new Iqontrol(options);
} else {
	// otherwise start the instance directly
	new Iqontrol();
}
