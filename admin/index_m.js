//iQontrol - Copyright (c) by Sebatian Bormann
//Please visit https://github.com/sbormann/ioBroker.iqontrol for licence-agreement and further information

//Settings
var namespace = 'iqontrol.meta';
var useCache = true;
var imagePath = '/iqontrol/images';
var userfilesImagePath = '/iqontrol.meta/userimages';
var userfilesImagePathBS = userfilesImagePath.replace(/\//g, '\\');

var inbuiltWallpapers = [
    'bakestone.jpg',
    'bottle.jpg',
    'decor.jpg',
    'grass.jpg',
    'green.jpg',
    'orangedrops.jpg',
    'whitestone.jpg',
];

var inbuiltSymbols = [
    'blank.png',
    'brightness.png',
    'buttongrid.png',
    'color.png',
    'colortemperature.png',
    'config.png',
    'door.png',
    'door_lock.png',
    'down.png',
    'fire.png',
    'humidity.png',
    'info.png',
    'media_eject.png',
    'media_forward.png',
    'media_mute.png',
    'media_next.png',
    'media_pad_back.png',
    'media_pad_carat_d.png',
    'media_pad_carat_l.png',
    'media_pad_carat_r.png',
    'media_pad_carat_u.png',
    'media_pad_home.png',
    'media_pad_menu.png',
    'media_pad_ok.png',
    'media_pause.png',
    'media_play.png',
    'media_playeverywhere.png',
    'media_power.png',
    'media_prev.png',
    'media_repeat.png',
    'media_repeat_one.png',
    'media_rewind.png',
    'media_shuffle.png',
    'media_stop.png',
    'power.png',
    'program.png',
    'saturation.png',
    'setpoint.png',
    'slats.png',
    'slider.png',
    'stop.png',
    'switch.png',
    'temperature.png',
    'time.png',
    'up.png',
    'variable.png',
    'view.png',
    'volume.png',
    'window.png',
];

var inbuiltWidgets = [
    { filename: 'clock/clock_analog.html', name: 'Analog Clock', icon: 'clock/clock_analog.png' },
    { filename: 'flot-chart/flot-chart.html', name: 'FLOT Chart', icon: 'flot-chart/flot-chart.png' },
    { filename: 'json-table/json-table.html', name: 'JSON Table', icon: 'json-table/json-table.png' },
    { filename: 'json-table/device-counter.html', name: 'Device-Counter', icon: 'json-table/device-counter.png' },
    { filename: 'map/map.html', name: 'Map', icon: 'map/map.png' },
];

var optionsLayoutDefaultIconsStandard = {
    ERROR: { errorIcon_on: './images/icons/error.png' },
    UNREACH: { unreachIcon_on: './images/icons/unreach.png' },
    BATTERY: { batteryIcon_on: './images/icons/battery.png' },
    iQontrolView: { icon_on: './images/icons/blank.png' },
    iQontrolSwitch: { icon_on: './images/icons/switch_on.png', icon_off: './images/icons/switch_off.png' },
    iQontrolButton: { icon_on: './images/icons/button.png', icon_off: './images/icons/button.png' },
    iQontrolLight: { icon_on: './images/icons/light_on.png', icon_off: './images/icons/light_off.png' },
    iQontrolFan: { icon_on: './images/icons/fan_on.png', icon_off: './images/icons/fan_off.png' },
    iQontrolThermostat: { icon_on: './images/icons/radiator.png', icon_off: './images/icons/radiator.png' },
    iQontrolHomematicThermostat: { icon_on: './images/icons/radiator.png', icon_off: './images/icons/radiator.png' },
    iQontrolHomematicIpThermostat: { icon_on: './images/icons/radiator.png', icon_off: './images/icons/radiator.png' },
    iQontrolTemperature: { icon_on: './images/icons/temperature.png', icon_off: './images/icons/temperature.png' },
    iQontrolHumidity: { icon_on: './images/icons/humidity.png', icon_off: './images/icons/humidity.png' },
    iQontrolPressure: { icon_on: './images/icons/pressure.png', icon_off: './images/icons/pressure.png' },
    iQontrolBrightness: {
        icon_on: './images/icons/brightness_light.png',
        icon_off: './images/icons/brightness_dark.png',
    },
    iQontrolMotion: { icon_on: './images/icons/motion_on.png', icon_off: './images/icons/motion_off.png' },
    iQontrolDoor: {
        icon_on: './images/icons/door_opened.png',
        icon_off: './images/icons/door_closed.png',
        icon_tilted: './images/icons/door_opened.png',
    },
    iQontrolGarageDoor: {
        icon_on: './images/icons/garagedoor_opened.png',
        icon_off: './images/icons/garagedoor_closed.png',
        icon_tilted: './images/icons/garagedoor_opened.png',
    },
    iQontrolDoorWithLock: {
        icon_on: './images/icons/door_opened.png',
        icon_off: './images/icons/door_closed.png',
        icon_locked: './images/icons/door_locked.png',
        icon_unlocked: './images/icons/door_unlocked.png',
    },
    iQontrolWindow: {
        icon_on: './images/icons/window_opened.png',
        icon_off: './images/icons/window_closed.png',
        icon_tilted: './images/icons/window_tilted.png',
    },
    iQontrolBlind: {
        icon_on: './images/icons/blind_opened.png',
        icon_off: './images/icons/blind_closed.png',
        icon_middle: './images/icons/blind_middle.png',
        icon_closing: './images/icons/blind_closing.png',
        icon_opening: './images/icons/blind_opening.png',
    },
    iQontrolFire: { icon_on: './images/icons/fire_on.png', icon_off: './images/icons/fire_off.png' },
    iQontrolFlood: { icon_on: './images/icons/flood_on.png', icon_off: './images/icons/flood_off.png' },
    iQontrolAlarm: {
        icon_on: './images/icons/alarm_on.png',
        icon_off: './images/icons/alarm_off.png',
        icon_triggered: './images/icons/alarm_on_triggered.png',
    },
    iQontrolBattery: {
        icon_on: './images/icons/battery_full.png',
        icon_off: './images/icons/battery_empty.png',
        icon_charged75: './images/icons/battery_75.png',
        icon_charged50: './images/icons/battery_50.png',
        icon_charged25: './images/icons/battery_25.png',
        icon_charged10: './images/icons/battery_10.png',
        icon_charging: './images/icons/battery_charging_overlay.png',
        icon_discharging: './images/icons/battery_discharging_overlay.png',
    },
    iQontrolDateAndTime: {
        icon_on: './images/icons/time_alarmclock_on.png',
        icon_off: './images/icons/time_alarmclock_off.png',
        icon_ringing: './images/icons/bell_ringing_overlay.png',
    },
    iQontrolValue: { icon_on: './images/icons/value_on.png', icon_off: './images/icons/value_off.png' },
    iQontrolProgram: { icon_on: './images/icons/play_on.png', icon_off: './images/icons/play.png' },
    iQontrolScene: { icon_on: './images/icons/play.png', icon_off: './images/icons/play.png' },
    iQontrolMedia: { icon_on: './images/icons/media_on.png', icon_off: './images/icons/media_off.png' },
    iQontrolPopup: { icon_on: './images/icons/popup.png', icon_off: './images/icons/popup.png' },
    iQontrolExternalLink: { icon_on: './images/icons/link.png', icon_off: './images/icons/link.png' },
    iQontrolWidget: { icon_on: './images/icons/blank.png', icon_off: './images/icons/blank.png' },
    iQontrolInfoText: { icon_on: './images/icons/info_bubble_off.png', icon_off: './images/icons/blank.png' },
};

var optionsLayoutDefaultSymbolsStandard = {
    TEMPERATURE: { temperatureIcon_on: './images/symbols/temperature.png' },
    BRIGHTNESS: { brightnessIcon_on: './images/symbols/brightness.png' },
    SLATS_LEVEL: { slatsLevelIcon_on: './images/symbols/slats.png' },
    VOLTAGE: { voltageIcon_on: './images/symbols/power.png' },
    COLOR: { colorIcon_on: './images/symbols/color.png' },
    VOLUME: { volumeIcon_on: './images/symbols/volume.png' },
    HUMIDITY: { humidityIcon_on: './images/symbols/humidity.png' },
    POWER: { powerIcon_on: './images/symbols/power.png' },
    ELAPSED: { elapsedIcon_on: './images/symbols/time.png' },
};

var iconPresets = [
    {
        name: 'Flat',
        description: 'Flat (default) iconset of iQontrol. Icons are taken from www.icons8.com.',
        iconEquivalents: {
            ERROR: ['./images/icons/error.png'],
            UNREACH: ['./images/icons/unreach.png'],
            BATTERY: ['./images/icons/battery.png'],
            airconditioner_off: ['./images/icons/airconditioner_off.png'],
            airconditioner_on: ['./images/icons/airconditioner_on.png'],
            alarm_off: ['./images/icons/alarm_off.png'],
            alarm_on: ['./images/icons/alarm_on.png'],
            alarm_on_triggered: ['./images/icons/alarm_on_triggered.png'],
            battery_10: ['./images/icons/battery_10.png'],
            battery_25: ['./images/icons/battery_25.png'],
            battery_50: ['./images/icons/battery_50.png'],
            battery_75: ['./images/icons/battery_75.png'],
            battery_charging_overlay: ['./images/icons/battery_charging_overlay.png'],
            battery_discharging_overlay: ['./images/icons/battery_discharging_overlay.png'],
            battery_empty: ['./images/icons/battery_empty.png'],
            battery_full: ['./images/icons/battery_full.png'],
            bell_off: ['./images/icons/bell_off.png'],
            bell_on: ['./images/icons/bell_on.png'],
            bell_ringing_off: ['./images/icons/bell_ringing_off.png'],
            bell_ringing_on: ['./images/icons/bell_ringing_on.png'],
            bell_ringing_overlay: ['./images/icons/bell_ringing_overlay.png'],
            blank: ['./images/icons/blank.png'],
            blind_closed: ['./images/icons/blind_closed.png'],
            blind_closing: ['./images/icons/blind_closing.png'],
            blind_middle: ['./images/icons/blind_middle.png'],
            blind_opened: ['./images/icons/blind_opened.png'],
            blind_opening: ['./images/icons/blind_opening.png'],
            brightness_dark: ['./images/icons/brightness_dark.png'],
            brightness_light: ['./images/icons/brightness_light.png'],
            button: ['./images/icons/button.png'],
            camera_on: ['./images/icons/camera_on.png'],
            camera_ptz_on: ['./images/icons/camera_ptz_on.png'],
            cooling_off: ['./images/icons/cooling_off.png'],
            cooling_on: ['./images/icons/cooling_on.png'],
            door_closed: ['./images/icons/door_closed.png'],
            door_locked: ['./images/icons/door_locked.png'],
            door_opened: ['./images/icons/door_opened.png'],
            door_unlocked: ['./images/icons/door_unlocked.png'],
            fan_off: ['./images/icons/fan_off.png'],
            fan_on: ['./images/icons/fan_on.png'],
            fire_off: ['./images/icons/fire_off.png'],
            fire_on: ['./images/icons/fire_on.png'],
            firebox_green: ['./images/icons/firebox_green.png'],
            firebox_off: ['./images/icons/firebox_off.png'],
            firebox_on: ['./images/icons/firebox_on.png'],
            flood_off: ['./images/icons/flood_off.png'],
            flood_on: ['./images/icons/flood_on.png'],
            garagedoor_closed: ['./images/icons/garagedoor_closed.png'],
            garagedoor_opened: ['./images/icons/garagedoor_opened.png'],
            gas_off: ['./images/icons/gas_off.png'],
            gas_on: ['./images/icons/gas_on.png'],
            gate_closed: ['./images/icons/gate_closed.png'],
            gate_opened: ['./images/icons/gate_opened.png'],
            heating_off: ['./images/icons/heating_off.png'],
            heating_on: ['./images/icons/heating_on.png'],
            humidity: ['./images/icons/humidity.png'],
            info_bubble_off: ['./images/icons/info_bubble_off.png'],
            info_bubble_on: ['./images/icons/info_bubble_on.png'],
            info_circle_off: ['./images/icons/info_circle_off.png'],
            info_circle_on: ['./images/icons/info_circle_on.png'],
            info_square_off: ['./images/icons/info_square_off.png'],
            info_square_on: ['./images/icons/info_square_on.png'],
            kitchenhood_off: ['./images/icons/kitchenhood_off.png'],
            kitchenhood_on: ['./images/icons/kitchenhood_on.png'],
            light_desklamp_off: ['./images/icons/light_desklamp_off.png'],
            light_desklamp_on: ['./images/icons/light_desklamp_on.png'],
            light_lampshade_off: ['./images/icons/light_lampshade_off.png'],
            light_lampshade_on: ['./images/icons/light_lampshade_on.png'],
            light_off: ['./images/icons/light_off.png'],
            light_on: ['./images/icons/light_on.png'],
            link: ['./images/icons/link.png'],
            link_chain: ['./images/icons/link_chain.png'],
            link_plain_internal: ['./images/icons/link_plain_internal.png'],
            link_square_external: ['./images/icons/link_square_external.png'],
            link_square_internal: ['./images/icons/link_square_internal.png'],
            media_off: ['./images/icons/media_off.png'],
            media_on: ['./images/icons/media_on.png'],
            motion_off: ['./images/icons/motion_off.png'],
            motion_on: ['./images/icons/motion_on.png'],
            panic_off: ['./images/icons/panic_off.png'],
            panic_on: ['./images/icons/panic_on.png'],
            play: ['./images/icons/play.png'],
            play_on: ['./images/icons/play_on.png'],
            plug_off: ['./images/icons/plug_off.png'],
            plug_on: ['./images/icons/plug_on.png'],
            popup: ['./images/icons/popup.png'],
            pressure: ['./images/icons/pressure.png'],
            radiator_on: ['./images/icons/radiator.png'],
            radiator_off: ['./images/icons/radiator_off.png'],
            switch_off: ['./images/icons/switch_off.png', './images/icons/switch_red_off.png'],
            switch_on: ['./images/icons/switch_on.png'],
            temperature: ['./images/icons/temperature.png'],
            time_alarmclock_off: ['./images/icons/time_alarmclock_off.png'],
            time_alarmclock_on: ['./images/icons/time_alarmclock_on.png'],
            time_calendar_off: ['./images/icons/time_calendar_off.png'],
            time_calendar_on: ['./images/icons/time_calendar_on.png'],
            time_clock_off: ['./images/icons/time_clock_off.png'],
            time_clock_on: ['./images/icons/time_clock_on.png'],
            time_duration_off: ['./images/icons/time_duration_off.png'],
            time_duration_on: ['./images/icons/time_duration_on.png'],
            time_timer_off: ['./images/icons/time_timer_off.png'],
            time_timer_on: ['./images/icons/time_timer_on.png'],
            value_off: ['./images/icons/value_off.png'],
            value_on: ['./images/icons/value_on.png'],
            widget_off: ['./images/icons/widget_off.png'],
            widget_on: ['./images/icons/widget_on.png'],
            window_closed: ['./images/icons/window_closed.png'],
            window_opened: ['./images/icons/window_opened.png'],
            window_tilted: ['./images/icons/window_tilted.png'],
            window_toplight_closed: ['./images/icons/window_toplight_closed.png'],
            window_toplight_opened: ['./images/icons/window_toplight_opened.png'],
            window_toplight_tilted: ['./images/icons/window_toplight_tilted.png'],
        },
    },
    {
        name: 'Fluent',
        description: 'Iconset with slight gradients. Icons are taken from www.icons8.com.',
        iconEquivalents: {
            ERROR: ['./images/icons/fluent/fluent_ERROR.png'],
            UNREACH: ['./images/icons/fluent/fluent_UNREACH.png'],
            BATTERY: ['./images/icons/fluent/fluent_BATTERY.png'],
            airconditioner_off: ['./images/icons/fluent/fluent_airconditioner_off.png'],
            airconditioner_on: ['./images/icons/fluent/fluent_airconditioner_on.png'],
            alarm_off: ['./images/icons/fluent/fluent_alarm_off.png'],
            alarm_on: ['./images/icons/fluent/fluent_alarm_on.png'],
            alarm_on_triggered: ['./images/icons/fluent/fluent_alarm_on_triggered.png'],
            battery_10: ['./images/icons/fluent/fluent_battery_10.png'],
            battery_25: ['./images/icons/fluent/fluent_battery_25.png'],
            battery_50: ['./images/icons/fluent/fluent_battery_50.png'],
            battery_75: ['./images/icons/fluent/fluent_battery_75.png'],
            battery_charging_overlay: ['./images/icons/fluent/fluent_battery_charging_overlay.png'],
            battery_discharging_overlay: ['./images/icons/fluent/fluent_battery_discharging_overlay.png'],
            battery_empty: ['./images/icons/fluent/fluent_battery_empty.png'],
            battery_full: ['./images/icons/fluent/fluent_battery_full.png'],
            bell_off: ['./images/icons/fluent/fluent_bell_off.png'],
            bell_on: ['./images/icons/fluent/fluent_bell_on.png'],
            bell_ringing_off: ['./images/icons/fluent/fluent_bell_ringing_off.png'],
            bell_ringing_on: ['./images/icons/fluent/fluent_bell_ringing_on.png'],
            bell_ringing_overlay: ['./images/icons/fluent/fluent_bell_ringing_overlay.png'],
            blank: [],
            blind_closed: ['./images/icons/fluent/fluent_blind_closed.png'],
            blind_closing: ['./images/icons/fluent/fluent_blind_closing.png'],
            blind_middle: ['./images/icons/fluent/fluent_blind_middle.png'],
            blind_opened: ['./images/icons/fluent/fluent_blind_opened.png'],
            blind_opening: ['./images/icons/fluent/fluent_blind_opening.png'],
            brightness_dark: ['./images/icons/fluent/fluent_brightness_dark.png'],
            brightness_light: ['./images/icons/fluent/fluent_brightness_light.png'],
            button: ['./images/icons/fluent/fluent_button.png'],
            camera_on: [],
            camera_ptz_on: [],
            cooling_off: ['./images/icons/fluent/fluent_cooling_off.png'],
            cooling_on: ['./images/icons/fluent/fluent_cooling_on.png'],
            door_closed: ['./images/icons/fluent/fluent_door_closed.png'],
            door_locked: ['./images/icons/fluent/fluent_door_locked.png'],
            door_opened: ['./images/icons/fluent/fluent_door_opened.png'],
            door_unlocked: ['./images/icons/fluent/fluent_door_unlocked.png'],
            fan_off: ['./images/icons/fluent/fluent_fan_off.png'],
            fan_on: ['./images/icons/fluent/fluent_fan_on.png'],
            fire_off: ['./images/icons/fluent/fluent_fire_off.png'],
            fire_on: ['./images/icons/fluent/fluent_fire_on.png'],
            firebox_green: ['./images/icons/fluent/fluent_firebox_green.png'],
            firebox_off: ['./images/icons/fluent/fluent_firebox_off.png'],
            firebox_on: ['./images/icons/fluent/fluent_firebox_on.png'],
            flood_off: ['./images/icons/fluent/fluent_flood_off.png'],
            flood_on: ['./images/icons/fluent/fluent_flood_on.png'],
            garagedoor_closed: ['./images/icons/fluent/fluent_garagedoor_closed.png'],
            garagedoor_opened: ['./images/icons/fluent/fluent_garagedoor_opened.png'],
            gas_off: ['./images/icons/fluent/fluent_gas_off.png'],
            gas_on: ['./images/icons/fluent/fluent_gas_on.png'],
            gate_closed: ['./images/icons/fluent/fluent_gate_closed.png'],
            gate_opened: ['./images/icons/fluent/fluent_gate_opened.png'],
            heating_off: ['./images/icons/fluent/fluent_heating_off.png'],
            heating_on: ['./images/icons/fluent/fluent_heating_on.png'],
            humidity: ['./images/icons/fluent/fluent_humidity.png'],
            info_bubble_off: ['./images/icons/fluent/fluent_info_bubble_off.png'],
            info_bubble_on: ['./images/icons/fluent/fluent_info_bubble_on.png'],
            info_circle_off: ['./images/icons/fluent/fluent_info_circle_off.png'],
            info_circle_on: ['./images/icons/fluent/fluent_info_circle_on.png'],
            info_square_off: ['./images/icons/fluent/fluent_info_square_off.png'],
            info_square_on: ['./images/icons/fluent/fluent_info_square_on.png'],
            kitchenhood_off: ['./images/icons/fluent/fluent_kitchenhood_off.png'],
            kitchenhood_on: ['./images/icons/fluent/fluent_kitchenhood_on.png'],
            light_desklamp_off: ['./images/icons/fluent/fluent_light_desklamp_off.png'],
            light_desklamp_on: ['./images/icons/fluent/fluent_light_desklamp_on.png'],
            light_lampshade_off: ['./images/icons/fluent/fluent_light_lampshade_off.png'],
            light_lampshade_on: ['./images/icons/fluent/fluent_light_lampshade_on.png'],
            light_off: ['./images/icons/fluent/fluent_light_off.png'],
            light_on: ['./images/icons/fluent/fluent_light_on.png'],
            link: ['./images/icons/fluent/fluent_link.png'],
            link_chain: ['./images/icons/fluent/fluent_link_chain.png'],
            link_plain_internal: ['./images/icons/fluent/fluent_link_plain_internal.png'],
            link_square_external: ['./images/icons/fluent/fluent_link_square_external.png'],
            link_square_internal: ['./images/icons/fluent/fluent_link_square_internal.png'],
            media_off: ['./images/icons/fluent/fluent_media_off.png'],
            media_on: ['./images/icons/fluent/fluent_media_on.png'],
            motion_off: ['./images/icons/fluent/fluent_motion_off.png'],
            motion_on: ['./images/icons/fluent/fluent_motion_on.png'],
            panic_off: ['./images/icons/fluent/fluent_panic_off.png'],
            panic_on: ['./images/icons/fluent/fluent_panic_on.png'],
            play: ['./images/icons/fluent/fluent_play.png', './images/icons/fluent/fluent_play_sphere_off.png'],
            play_on: ['./images/icons/fluent/fluent_play_on.png', './images/icons/fluent/fluent_play_sphere_on.png'],
            plug_off: ['./images/icons/fluent/fluent_plug_off.png'],
            plug_on: ['./images/icons/fluent/fluent_plug_on.png'],
            popup: ['./images/icons/fluent/fluent_popup.png'],
            pressure: ['./images/icons/fluent/fluent_pressure.png'],
            radiator_on: ['./images/icons/fluent/fluent_radiator.png'],
            radiator_off: ['./images/icons/fluent/fluent_radiator_off.png'],
            switch_off: [
                './images/icons/fluent/fluent_switch_off.png',
                './images/icons/fluent/fluent_switch_off_red.png',
                './images/icons/fluent/fluent_switch_angular_off.png',
                './images/icons/fluent/fluent_switch_angular_off_red.png',
            ],
            switch_on: [
                './images/icons/fluent/fluent_switch_on.png',
                './images/icons/fluent/fluent_switch_on_blue.png',
                './images/icons/fluent/fluent_switch_angular_on.png',
                './images/icons/fluent/fluent_switch_angular_on_blue.png',
            ],
            temperature: ['./images/icons/fluent/fluent_temperature.png'],
            time_alarmclock_off: ['./images/icons/fluent/fluent_time_alarmclock_off.png'],
            time_alarmclock_on: ['./images/icons/fluent/fluent_time_alarmclock_on.png'],
            time_calendar_off: ['./images/icons/fluent/fluent_time_calendar_off.png'],
            time_calendar_on: ['./images/icons/fluent/fluent_time_calendar_on.png'],
            time_clock_off: ['./images/icons/fluent/fluent_time_clock_off.png'],
            time_clock_on: ['./images/icons/fluent/fluent_time_clock_on.png'],
            time_duration_off: ['./images/icons/fluent/fluent_time_duration_off.png'],
            time_duration_on: ['./images/icons/fluent/fluent_time_duration_on.png'],
            time_timer_off: ['./images/icons/fluent/fluent_time_timer_off.png'],
            time_timer_on: ['./images/icons/fluent/fluent_time_timer_on.png'],
            value_off: ['./images/icons/fluent/fluent_value_off.png', './images/icons/fluent/fluent_value_tag_off.png'],
            value_on: ['./images/icons/fluent/fluent_value_on.png', './images/icons/fluent/fluent_value_tag_on.png'],
            widget_off: ['./images/icons/fluent/fluent_widget_off.png'],
            widget_on: ['./images/icons/fluent/fluent_widget_on.png'],
            window_closed: ['./images/icons/fluent/fluent_window_closed.png'],
            window_opened: ['./images/icons/fluent/fluent_window_opened.png'],
            window_tilted: ['./images/icons/fluent/fluent_window_tilted.png'],
            window_toplight_closed: ['./images/icons/fluent/fluent_window_toplight_closed.png'],
            window_toplight_opened: ['./images/icons/fluent/fluent_window_toplight_opened.png'],
            window_toplight_tilted: ['./images/icons/fluent/fluent_window_toplight_tilted.png'],
        },
    },
];

var jqueryIcons = [
    'action',
    'alert',
    'arrow-d',
    'arrow-d-l',
    'arrow-d-r',
    'arrow-l',
    'arrow-r',
    'arrow-u',
    'arrow-u-l',
    'arrow-u-r',
    'audio',
    'back',
    'bars',
    'bullets',
    'calendar',
    'camera',
    'carat-d',
    'carat-l',
    'carat-r',
    'carat-u',
    'check',
    'clock',
    'cloud',
    'comment',
    'delete',
    'edit',
    'eye',
    'forbidden',
    'forward',
    'gear',
    'grid',
    'heart',
    'home',
    'info',
    'location',
    'lock',
    'mail',
    'minus',
    'navigation',
    'phone',
    'plus',
    'power',
    'recycle',
    'refresh',
    'search',
    'shop',
    'star',
    'tag',
    'user',
    'video',
];

var channelDetectorMatchTable = {
    unknown: {
        matchingRole: null,
        matchingStates: {
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    airCondition: {
        matchingRole: 'iQontrolThermostat',
        matchingStates: {
            SET: 'SET_TEMPERATURE',
            MODE: 'CONTROL_MODE',
            ACTUAL: 'TEMPERATURE',
            HUMIDITY: 'HUMIDITY',
            BOOST: 'BOOST_STATE',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    blind: {
        matchingRole: 'iQontrolBlind',
        matchingStates: {
            SET: 'LEVEL',
            STOP: 'STOP',
            OPEN: 'UP',
            CLOSE: 'DOWN',
            TILT_SET: 'SLATS_LEVEL',
            DIRECTION: 'DIRECTION',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    blindButtons: {
        matchingRole: 'iQontrolBlind',
        matchingStates: {
            STOP: 'STOP',
            OPEN: 'UP',
            CLOSE: 'DOWN',
            TILT_SET: 'SLATS_LEVEL',
            DIRECTION: 'DIRECTION',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    button: {
        matchingRole: 'iQontrolButton',
        matchingStates: {
            SET: 'STATE',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    buttonSensor: {
        matchingRole: 'iQontrolButton',
        matchingStates: {
            PRESS: 'STATE',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    camera: {
        matchingRole: 'iQontrolExternalLink',
        matchingStates: {
            URL: 'URL',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    url: {
        matchingRole: 'iQontrolExternalLink',
        matchingStates: {
            URL: 'URL',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    chart: {
        matchingRole: null,
        matchingStates: {
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    image: {
        matchingRole: 'iQontrolExternalLink',
        matchingStates: {
            URL: 'URL',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    dimmer: {
        matchingRole: 'iQontrolLight',
        matchingStates: {
            SET: 'LEVEL',
            ON_SET: 'STATE',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    door: {
        matchingRole: 'iQontrolDoor',
        matchingStates: {
            ACTUAL: 'STATE',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    fireAlarm: {
        matchingRole: 'iQontrolFire',
        matchingStates: {
            ACTUAL: 'STATE',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    floodAlarm: {
        matchingRole: 'iQontrolFlood',
        matchingStates: {
            ACTUAL: 'STATE',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    gate: {
        matchingRole: 'iQontrolDoor',
        matchingStates: {
            ACTUAL: 'STATE',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    humidity: {
        matchingRole: 'iQontrolHumidity',
        matchingStates: {
            ACTUAL: 'STATE',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    info: {
        matchingRole: 'iQontrolValue',
        matchingStates: {
            ACTUAL: 'STATE',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    instance: {
        matchingRole: null,
        matchingStates: {
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    light: {
        matchingRole: 'iQontrolLight',
        matchingStates: {
            SET: 'STATE',
            ELECTRIC_POWER: 'POWER',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    lock: {
        matchingRole: 'iQontrolDoorWithLock',
        matchingStates: {
            SET: 'LOCK_STATE',
            OPEN: 'LOCK_OPEN',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    location: {
        matchingRole: null,
        matchingStates: {
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    media: {
        matchingRole: 'iQontrolMedia',
        matchingStates: {
            ACTUAL: 'POWER_SWITCH',
            STATE: 'STATE',
            PLAY: 'PLAY',
            PAUSE: 'PAUSE',
            STOP: 'STOP',
            NEXT: 'NEXT',
            PREV: 'PREV',
            SHUFFLE: 'SHUFFLE',
            REPEAT: 'REPEAT',
            ARTIST: 'ARTIST',
            ALBUM: 'ALBUM',
            TITLE: 'TITLE',
            EPISODE: 'EPISODE',
            SEASON: 'SEASON',
            COVER: 'COVER_URL',
            DURATION: 'DURATION',
            ELAPSED: 'ELAPSED',
            SEEK: 'ELAPSED',
            TRACK: 'TRACK_NUMBER',
            VOLUME_ACTUAL: 'VOLUME',
            VOLUME: 'VOLUME',
            MUTE: 'MUTE',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    motion: {
        matchingRole: 'iQontrolMotion',
        matchingStates: {
            ACTUAL: 'STATE',
            SECOND: 'BRIGHTNESS',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    rgb: {
        matchingRole: 'iQontrolLight',
        matchingStates: {
            DIMMER: 'LEVEL',
            BRIGHTNESS: 'COLOR_BRIGHTNESS',
            SATURATION: 'SATURATION',
            TEMPERATURE: 'CT',
            WHITE: 'WHITE_BRIGHTNESS',
            ON: 'STATE',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    ct: {
        matchingRole: 'iQontrolLight',
        matchingStates: {
            TEMPERATURE: 'CT',
            DIMMER: 'LEVEL',
            BRIGHTNESS: 'COLOR_BRIGHTNESS',
            SATURATION: 'SATURATION',
            ON: 'STATE',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    rgbSingle: {
        matchingRole: 'iQontrolLight',
        matchingStates: {
            RGB: 'ALTERNATIVE_COLORSPACE_VALUE',
            DIMMER: 'LEVEL',
            BRIGHTNESS: 'COLOR_BRIGHTNESS',
            SATURATION: 'SATURATION',
            TEMPERATURE: 'CT',
            ON: 'STATE',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    hue: {
        matchingRole: 'iQontrolLight',
        matchingStates: {
            HUE: 'HUE',
            DIMMER: 'LEVEL',
            BRIGHTNESS: 'COLOR_BRIGHTNESS',
            SATURATION: 'SATURATION',
            TEMPERATURE: 'CT',
            ON: 'STATE',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    slider: {
        matchingRole: 'iQontrolValue',
        matchingStates: {
            SET: 'LEVEL',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    socket: {
        matchingRole: 'iQontrolSwitch',
        matchingStates: {
            SET: 'STATE',
            ELECTRIC_POWER: 'POWER',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    temperature: {
        matchingRole: 'iQontrolTemperature',
        matchingStates: {
            ACTUAL: 'STATE',
            SECOND: 'HUMIDITY',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    thermostat: {
        matchingRole: 'iQontrolThermostat',
        matchingStates: {
            SET: 'SET_TEMPERATURE',
            ACTUAL: 'TEMPERATURE',
            HUMIDITY: 'HUMIDITY',
            BOOST: 'BOOST_STATE',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    valve: {
        matchingRole: null,
        matchingStates: {
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    volume: {
        matchingRole: 'iQontrolValue',
        matchingStates: {
            SET: 'LEVEL',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    vacuumCleaner: {
        matchingRole: null,
        matchingStates: {
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    volumeGroup: {
        matchingRole: 'iQontrolValue',
        matchingStates: {
            SET: 'LEVEL',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    window: {
        matchingRole: 'iQontrolWindow',
        matchingStates: {
            ACTUAL: 'STATE',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    windowTilt: {
        matchingRole: 'iQontrolWindow',
        matchingStates: {
            ACTUAL: 'STATE',
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    weatherCurrent: {
        matchingRole: null,
        matchingStates: {
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    weatherForecast: {
        matchingRole: null,
        matchingStates: {
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
    warning: {
        matchingRole: null,
        matchingStates: {
            UNREACH: 'UNREACH',
            CONNECTED: 'UNREACH',
            LOWBAT: 'BATTERY',
            ERROR: 'ERROR',
        },
    },
};

var iQontrolRoles = {
    iQontrolView: {
        name: 'Link to other view',
        states: [
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: {
                        name: 'Icon',
                        type: 'icon',
                        typicalIconEquivalents: ['blank', 'link_plain_internal', 'link_chain'],
                        default: '',
                    },
                },
            },
            SECTION_GENERAL: {
                options: {
                    readonly: 'delete',
                },
            },
            SECTION_TILE: {
                options: {
                    clickOnIconAction: { default: 'openLinkToOtherView' },
                    clickOnTileAction: { default: 'openLinkToOtherView' },
                },
            },
            SECTION_TILE_ACTIVE_CONDITION: 'delete',
            SECTION_TILE_ACTIVE: 'delete',
            SECTION_TIMESTAMP: 'delete',
            SECTION_DEVICESPECIFIC: 'delete',
        },
    },
    iQontrolSwitch: {
        name: 'Switch',
        states: [
            'STATE',
            'POWER',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/switch_on.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: {
                        name: 'Icon on',
                        type: 'icon',
                        typicalIconEquivalents: ['switch_on', 'plug_on'],
                        default: '',
                    },
                    icon_off: {
                        name: 'Icon off',
                        type: 'icon',
                        typicalIconEquivalents: ['switch_off', 'plug_off'],
                        default: '',
                    },
                },
            },
            SECTION_TIMESTAMP: {
                options: {
                    levelCaption: 'delete',
                    levelFavorites: 'delete',
                    levelFavoritesHideSlider: 'delete',
                },
            },
            SECTION_DEVICESPECIFIC: {
                options: {
                    showPowerAsState: { name: 'Show POWER as state', type: 'checkbox', default: 'false' },
                },
            },
        },
    },
    iQontrolButton: {
        name: 'Button',
        states: [
            'STATE',
            'SET_VALUE',
            'OFF_SET_VALUE',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/button.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: { name: 'Icon on', type: 'icon', typicalIconEquivalents: ['button'], default: '' },
                    icon_off: { name: 'Icon off', type: 'icon', typicalIconEquivalents: ['button'], default: '' },
                },
            },
            SECTION_TIMESTAMP: {
                options: {
                    levelCaption: 'delete',
                    levelFavorites: 'delete',
                    levelFavoritesHideSlider: 'delete',
                },
            },
            SECTION_DEVICESPECIFIC: {
                options: {
                    showState: { name: 'Show State', type: 'checkbox', default: 'false' },
                    buttonCaption: { name: 'Caption for button', type: 'text', default: '' },
                    returnToOffSetValueAfter: {
                        name: "Return to 'OFF_SET_VALUE' after [ms] (0 = never, toggle)",
                        type: 'number',
                        min: '0',
                        max: '60000',
                        default: '',
                    },
                    closeDialogAfterExecution: {
                        name: 'Close dialog after execution',
                        type: 'checkbox',
                        default: 'false',
                    },
                },
            },
        },
    },
    iQontrolLight: {
        name: 'Light',
        states: [
            'STATE',
            'LEVEL',
            'HUE',
            'SATURATION',
            'COLOR_BRIGHTNESS',
            'CT',
            'WHITE_BRIGHTNESS',
            'ALTERNATIVE_COLORSPACE_VALUE',
            'POWER',
            'EFFECT',
            'EFFECT_NEXT',
            'EFFECT_SPEED_UP',
            'EFFECT_SPEED_DOWN',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/light_on.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: {
                        name: 'Icon on',
                        type: 'icon',
                        typicalIconEquivalents: ['light_on', 'light_desklamp_on', 'light_lampshade_on'],
                        default: '',
                    },
                    icon_off: {
                        name: 'Icon off',
                        type: 'icon',
                        typicalIconEquivalents: ['light_off', 'light_desklamp_off', 'light_lampshade_off'],
                        default: '',
                    },
                },
            },
            SECTION_DEVICESPECIFIC: {
                options: {
                    invertCt: { name: 'Invert CT (use Kelvin instead of Mired)', type: 'checkbox', default: 'false' },
                    alternativeColorspace: {
                        name: 'Colorspace for ALTERNATIVE_COLORSPACE_VALUE',
                        type: 'select',
                        selectOptions:
                            '/None;RGB/RGB;#RGB/#RGB;RGBW/RGBW;#RGBW/#RGBW;RGBWWCW/RGBWWCW;#RGBWWCW/#RGBWWCW;RGBCWWW/RGBCWWW;#RGBCWWW/#RGBCWWW;RGB_HUEONLY/RGB (Hue only);#RGB_HUEONLY/#RGB (Hue only);HUE_MILIGHT/Hue for Milight;HHSSBB_TUYA/HHSSBB for Tuya',
                        default: '',
                    },
                    linkGlowActiveColorToHue: {
                        name: 'Use color of lamp as GLOW_ACTIVE_COLOR',
                        type: 'checkbox',
                        default: 'false',
                    },
                    linkOverlayActiveColorToHue: {
                        name: 'Use color of lamp as OVERLAY_ACTIVE_COLOR',
                        type: 'checkbox',
                        default: 'false',
                    },
                    showPowerAsState: { name: 'Show POWER as state', type: 'checkbox', default: 'false' },
                },
            },
        },
    },
    iQontrolFan: {
        name: 'Fan',
        states: [
            'STATE',
            'LEVEL',
            'POWER',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/fan_on.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: {
                        name: 'Icon on',
                        type: 'icon',
                        typicalIconEquivalents: ['fan_on', 'kitchenhood_on'],
                        default: '',
                    },
                    icon_off: {
                        name: 'Icon off',
                        type: 'icon',
                        typicalIconEquivalents: ['fan_off', 'kitchenhood_off'],
                        default: '',
                    },
                },
            },
            SECTION_DEVICESPECIFIC: {
                options: {
                    showPowerAsState: { name: 'Show POWER as state', type: 'checkbox', default: 'false' },
                },
            },
        },
    },
    iQontrolThermostat: {
        name: 'Thermostat',
        states: [
            'SET_TEMPERATURE',
            'TEMPERATURE',
            'HUMIDITY',
            'CONTROL_MODE',
            'WINDOW_OPEN_REPORTING',
            'VALVE_STATES',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/radiator.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: {
                        name: 'Icon',
                        type: 'icon',
                        typicalIconEquivalents: ['radiator_on', 'heating_on', 'cooling_on', 'airconditioner_on'],
                        default: '',
                    },
                    icon_off: {
                        name: 'Icon off',
                        type: 'icon',
                        typicalIconEquivalents: ['radiator_off', 'heating_off', 'cooling_off', 'airconditioner_off'],
                        default: '',
                    },
                },
            },
            SECTION_TILE: {
                options: {
                    clickOnIconAction: {
                        selectOptions:
                            'openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing',
                        default: 'openDialog',
                    },
                    clickOnTileAction: {
                        selectOptions:
                            'openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing',
                        default: 'openDialog',
                    },
                },
            },
            SECTION_TIMESTAMP: {
                options: {
                    stateCaption: { name: 'Caption of SET_TEMPERATURE' },
                    levelCaption: 'delete',
                    levelFavorites: {
                        name: 'Favorite values for SET_TEMPERATURE (semicolon separated list of numbers)',
                        default: '17;19;20;21;22',
                    },
                },
            },
            SECTION_DEVICESPECIFIC: {
                options: {
                    controlModeDisabledValue: {
                        name: "Value of CONTROL_MODE for 'disabled'",
                        type: 'text',
                        default: '',
                    },
                    valveStatesSectionType: {
                        name: 'Appereance of VALVE_STATES',
                        type: 'select',
                        selectOptions:
                            'none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start',
                        default: 'collapsible',
                    },
                },
            },
        },
    },
    iQontrolHomematicThermostat: {
        name: 'Homematic-Thermostat',
        states: [
            'SET_TEMPERATURE',
            'TEMPERATURE',
            'HUMIDITY',
            'CONTROL_MODE',
            'BOOST_STATE',
            'PARTY_TEMPERATURE',
            'WINDOW_OPEN_REPORTING',
            'VALVE_STATES',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/radiator.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: {
                        name: 'Icon',
                        type: 'icon',
                        typicalIconEquivalents: ['radiator_on', 'heating_on', 'cooling_on', 'airconditioner_on'],
                        default: '',
                    },
                    icon_off: {
                        name: 'Icon off',
                        type: 'icon',
                        typicalIconEquivalents: ['radiator_off', 'heating_off', 'cooling_off', 'airconditioner_off'],
                        default: '',
                    },
                },
            },
            SECTION_TILE: {
                options: {
                    clickOnIconAction: {
                        selectOptions:
                            'openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing',
                        default: 'openDialog',
                    },
                    clickOnTileAction: {
                        selectOptions:
                            'openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing',
                        default: 'openDialog',
                    },
                },
            },
            SECTION_TIMESTAMP: {
                options: {
                    stateCaption: { name: 'Caption of SET_TEMPERATURE' },
                    levelCaption: 'delete',
                    levelFavorites: {
                        name: 'Favorite values for SET_TEMPERATURE (semicolon separated list of numbers)',
                        default: '17;19;20;21;22',
                    },
                },
            },
            SECTION_DEVICESPECIFIC: {
                options: {
                    valveStatesSectionType: {
                        name: 'Appereance of VALVE_STATES',
                        type: 'select',
                        selectOptions:
                            'none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start',
                        default: 'collapsible',
                    },
                },
            },
        },
    },
    iQontrolHomematicIpThermostat: {
        name: 'HomematicIP-Thermostat',
        states: [
            'SET_TEMPERATURE',
            'TEMPERATURE',
            'HUMIDITY',
            'CONTROL_MODE',
            'BOOST_STATE',
            'PARTY_TEMPERATURE',
            'WINDOW_OPEN_REPORTING',
            'VALVE_STATES',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/radiator.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: {
                        name: 'Icon',
                        type: 'icon',
                        typicalIconEquivalents: ['radiator_on', 'heating_on', 'cooling_on', 'airconditioner_on'],
                        default: '',
                    },
                    icon_off: {
                        name: 'Icon off',
                        type: 'icon',
                        typicalIconEquivalents: ['radiator_off', 'heating_off', 'cooling_off', 'airconditioner_off'],
                        default: '',
                    },
                },
            },
            SECTION_TILE: {
                options: {
                    clickOnIconAction: {
                        selectOptions:
                            'openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing',
                        default: 'openDialog',
                    },
                    clickOnTileAction: {
                        selectOptions:
                            'openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing',
                        default: 'openDialog',
                    },
                },
            },
            SECTION_TIMESTAMP: {
                options: {
                    stateCaption: { name: 'Caption of SET_TEMPERATURE' },
                    levelCaption: 'delete',
                    levelFavorites: {
                        name: 'Favorite values for SET_TEMPERATURE (semicolon separated list of numbers)',
                        default: '17;19;20;21;22',
                    },
                },
            },
            SECTION_DEVICESPECIFIC: {
                options: {
                    valveStatesSectionType: {
                        name: 'Appereance of VALVE_STATES',
                        type: 'select',
                        selectOptions:
                            'none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start',
                        default: 'collapsible',
                    },
                },
            },
        },
    },
    iQontrolTemperature: {
        name: 'Temperature-Sensor',
        states: [
            'STATE',
            'TEMPERATURE',
            'HUMIDITY',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/temperature.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: { name: 'Icon on', type: 'icon', typicalIconEquivalents: ['temperature'], default: '' },
                    icon_off: { name: 'Icon off', type: 'icon', typicalIconEquivalents: ['temperature'], default: '' },
                },
            },
            SECTION_TILE: {
                options: {
                    clickOnIconAction: { default: 'openLinkToOtherView' },
                    clickOnTileAction: { default: 'openLinkToOtherView' },
                },
            },
            SECTION_TIMESTAMP: {
                options: {
                    levelCaption: 'delete',
                    levelFavorites: 'delete',
                    levelFavoritesHideSlider: 'delete',
                },
            },
            SECTION_DEVICESPECIFIC: 'delete',
        },
    },
    iQontrolHumidity: {
        name: 'Humidity-Sensor',
        states: [
            'STATE',
            'TEMPERATURE',
            'HUMIDITY',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/humidity.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: { name: 'Icon on', type: 'icon', typicalIconEquivalents: ['humidity'], default: '' },
                    icon_off: { name: 'Icon off', type: 'icon', typicalIconEquivalents: ['humidity'], default: '' },
                },
            },
            SECTION_TILE: {
                options: {
                    clickOnIconAction: { default: 'openLinkToOtherView' },
                    clickOnTileAction: { default: 'openLinkToOtherView' },
                },
            },
            SECTION_TIMESTAMP: {
                options: {
                    levelCaption: 'delete',
                    levelFavorites: 'delete',
                    levelFavoritesHideSlider: 'delete',
                },
            },
            SECTION_DEVICESPECIFIC: 'delete',
        },
    },
    iQontrolPressure: {
        name: 'Pressure-Sensor',
        states: [
            'STATE',
            'TEMPERATURE',
            'HUMIDITY',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/pressure.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: { name: 'Icon on', type: 'icon', typicalIconEquivalents: ['pressure'], default: '' },
                    icon_off: { name: 'Icon off', type: 'icon', typicalIconEquivalents: ['pressure'], default: '' },
                },
            },
            SECTION_TILE: {
                options: {
                    clickOnIconAction: { default: 'openLinkToOtherView' },
                    clickOnTileAction: { default: 'openLinkToOtherView' },
                },
            },
            SECTION_TIMESTAMP: {
                options: {
                    levelCaption: 'delete',
                    levelFavorites: 'delete',
                    levelFavoritesHideSlider: 'delete',
                },
            },
            SECTION_DEVICESPECIFIC: 'delete',
        },
    },
    iQontrolBrightness: {
        name: 'Brightness-Sensor',
        states: [
            'STATE',
            'BRIGHTNESS',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/brightness_light.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: {
                        name: 'Icon on',
                        type: 'icon',
                        typicalIconEquivalents: ['brightness_light'],
                        default: '',
                    },
                    icon_off: {
                        name: 'Icon off',
                        type: 'icon',
                        typicalIconEquivalents: ['brightness_dark'],
                        default: '',
                    },
                },
            },
            SECTION_TILE: {
                options: {
                    clickOnIconAction: { default: 'openLinkToOtherView' },
                    clickOnTileAction: { default: 'openLinkToOtherView' },
                },
            },
            SECTION_TIMESTAMP: {
                options: {
                    levelCaption: 'delete',
                    levelFavorites: 'delete',
                    levelFavoritesHideSlider: 'delete',
                },
            },
            SECTION_DEVICESPECIFIC: 'delete',
        },
    },
    iQontrolMotion: {
        name: 'Motion-Sensor',
        states: [
            'STATE',
            'BRIGHTNESS',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/motion_on.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: { name: 'Icon on', type: 'icon', typicalIconEquivalents: ['motion_on'], default: '' },
                    icon_off: { name: 'Icon off', type: 'icon', typicalIconEquivalents: ['motion_off'], default: '' },
                },
            },
            SECTION_TILE: {
                options: {
                    clickOnIconAction: { default: 'openLinkToOtherView' },
                    clickOnTileAction: { default: 'openLinkToOtherView' },
                },
            },
            SECTION_TIMESTAMP: {
                name: 'Timestamp',
                type: 'section',
                options: {
                    levelCaption: 'delete',
                    levelFavorites: 'delete',
                    levelFavoritesHideSlider: 'delete',
                    addTimestampToState: { default: 'SE' },
                },
            },
            SECTION_DEVICESPECIFIC: 'delete',
        },
    },
    iQontrolDoor: {
        name: 'Door',
        states: [
            'STATE',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/door_closed.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: {
                        name: 'Icon opened',
                        type: 'icon',
                        typicalIconEquivalents: ['door_opened'],
                        default: '',
                    },
                    icon_off: {
                        name: 'Icon closed',
                        type: 'icon',
                        typicalIconEquivalents: ['door_closed'],
                        default: '',
                    },
                },
            },
            SECTION_TILE: {
                options: {
                    clickOnIconAction: { default: 'openLinkToOtherView' },
                    clickOnTileAction: { default: 'openLinkToOtherView' },
                },
            },
            SECTION_TIMESTAMP: {
                options: {
                    levelCaption: 'delete',
                    levelFavorites: 'delete',
                    levelFavoritesHideSlider: 'delete',
                },
            },
            SECTION_DEVICESPECIFIC: 'delete',
        },
    },
    iQontrolGarageDoor: {
        name: 'Garage Door',
        states: [
            'STATE',
            'TOGGLE',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/garagedoor_closed.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: {
                        name: 'Icon opened',
                        type: 'icon',
                        typicalIconEquivalents: ['garagedoor_opened', 'gate_opened'],
                        default: '',
                    },
                    icon_off: {
                        name: 'Icon closed',
                        type: 'icon',
                        typicalIconEquivalents: ['garagedoor_closed', 'gate_closed'],
                        default: '',
                    },
                },
            },
            SECTION_TIMESTAMP: {
                options: {
                    levelCaption: 'delete',
                    levelFavorites: 'delete',
                    levelFavoritesHideSlider: 'delete',
                },
            },
            SECTION_DEVICESPECIFIC: {
                options: {
                    noConfirmationForTogglingViaIcon: {
                        name: "Don't ask for confirmation when toggling via icon",
                        type: 'checkbox',
                        default: 'false',
                    },
                },
            },
        },
    },
    iQontrolDoorWithLock: {
        name: 'Door with lock',
        states: [
            'STATE',
            'LOCK_STATE',
            'LOCK_STATE_UNCERTAIN',
            'LOCK_OPEN',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/door_locked.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: { name: 'Icon on', type: 'icon', typicalIconEquivalents: ['door_opened'], default: '' },
                    icon_off: { name: 'Icon off', type: 'icon', typicalIconEquivalents: ['door_closed'], default: '' },
                    icon_locked: {
                        name: 'Icon locked',
                        type: 'icon',
                        typicalIconEquivalents: ['door_locked'],
                        default: '',
                    },
                    icon_unlocked: {
                        name: 'Icon unlocked',
                        type: 'icon',
                        typicalIconEquivalents: ['door_unlocked'],
                        default: '',
                    },
                },
            },
            SECTION_TILE: {
                options: {
                    clickOnIconAction: {
                        selectOptions:
                            'openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing',
                        default: 'openDialog',
                    },
                    clickOnTileAction: {
                        selectOptions:
                            'openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing',
                        default: 'openDialog',
                    },
                },
            },
            SECTION_TIMESTAMP: {
                options: {
                    levelCaption: 'delete',
                    levelFavorites: 'delete',
                    levelFavoritesHideSlider: 'delete',
                },
            },
            SECTION_DEVICESPECIFIC: {
                options: {
                    stateClosedValue: { name: "Value of STATE for 'closed'", type: 'text', default: '' },
                    lockStateLockedValue: { name: "Value of LOCK_STATE for 'locked'", type: 'text', default: '' },
                    lockOpenValue: { name: "Value of LOCK_OPEN for 'open door'", type: 'text', default: '' },
                },
            },
        },
    },
    iQontrolWindow: {
        name: 'Window',
        states: [
            'STATE',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/window_closed.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: {
                        name: 'Icon opened',
                        type: 'icon',
                        typicalIconEquivalents: ['window_opened', 'window_toplight_opened'],
                        default: '',
                    },
                    icon_off: {
                        name: 'Icon closed',
                        type: 'icon',
                        typicalIconEquivalents: ['window_closed', 'window_toplight_closed'],
                        default: '',
                    },
                    icon_tilted: {
                        name: 'Icon tilted',
                        type: 'icon',
                        typicalIconEquivalents: ['window_tilted', 'window_toplight_tilted'],
                        default: '',
                    },
                },
            },
            SECTION_TILE: {
                options: {
                    clickOnIconAction: { default: 'openLinkToOtherView' },
                    clickOnTileAction: { default: 'openLinkToOtherView' },
                },
            },
            SECTION_TIMESTAMP: {
                options: {
                    levelCaption: 'delete',
                    levelFavorites: 'delete',
                    levelFavoritesHideSlider: 'delete',
                },
            },
            SECTION_DEVICESPECIFIC: {
                options: {
                    stateClosedValue: { name: "Value of STATE for 'closed'", type: 'text', default: '' },
                    stateOpenedValue: { name: "Value of STATE for 'opened'", type: 'text', default: '' },
                    stateTiltedValue: { name: "Value of STATE for 'tilted'", type: 'text', default: '' },
                },
            },
        },
    },
    iQontrolBlind: {
        name: 'Blind',
        states: [
            'LEVEL',
            'DIRECTION',
            'STOP',
            'STOP_SET_VALUE',
            'UP',
            'UP_SET_VALUE',
            'DOWN',
            'DOWN_SET_VALUE',
            'FAVORITE_POSITION',
            'FAVORITE_POSITION_SET_VALUE',
            'SLATS_LEVEL',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/blind_middle.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: {
                        name: 'Icon opened',
                        type: 'icon',
                        typicalIconEquivalents: ['blind_opened'],
                        default: '',
                    },
                    icon_off: {
                        name: 'Icon closed',
                        type: 'icon',
                        typicalIconEquivalents: ['blind_closed'],
                        default: '',
                    },
                    icon_middle: {
                        name: 'Icon middle',
                        type: 'icon',
                        typicalIconEquivalents: ['blind_middle'],
                        default: '',
                    },
                    icon_closing: {
                        name: 'Icon closing',
                        type: 'icon',
                        typicalIconEquivalents: ['blind_closing'],
                        default: '',
                    },
                    icon_opening: {
                        name: 'Icon opening',
                        type: 'icon',
                        typicalIconEquivalents: ['blind_opening'],
                        default: '',
                    },
                },
            },
            SECTION_TIMESTAMP: {
                options: {
                    stateCaption: 'delete',
                },
            },
            SECTION_DEVICESPECIFIC: {
                options: {
                    invertActuatorLevel: { name: 'Invert LEVEL (0 = open)', type: 'checkbox', default: 'false' },
                    directionOpeningValue: { name: "Value of DIRECTION for 'opening'", type: 'text', default: '1' },
                    directionClosingValue: { name: "Value of DIRECTION for 'closing'", type: 'text', default: '2' },
                    directionUncertainValue: { name: "Value of DIRECTION for 'uncertain'", type: 'text', default: '3' },
                    favoritePositionCaption: {
                        name: 'Caption for FAVORITE_POSITION',
                        type: 'text',
                        default: 'Favorite Position',
                    },
                    upCaption: { name: 'Caption for UP', type: 'text', default: 'Up' },
                    stopCaption: { name: 'Caption for STOP', type: 'text', default: 'Stop' },
                    downCaption: { name: 'Caption for DOWN', type: 'text', default: 'Down' },
                },
            },
        },
    },
    iQontrolFire: {
        name: 'Fire-Sensor',
        states: [
            'STATE',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/fire_on.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: {
                        name: 'Icon on',
                        type: 'icon',
                        typicalIconEquivalents: ['fire_on', 'gas_on', 'firebox_on'],
                        default: '',
                    },
                    icon_off: {
                        name: 'Icon off',
                        type: 'icon',
                        typicalIconEquivalents: ['fire_off', 'gas_off', 'firebox_off', 'firebox_green'],
                        default: '',
                    },
                },
            },
            SECTION_TILE: {
                options: {
                    clickOnIconAction: { default: 'openLinkToOtherView' },
                    clickOnTileAction: { default: 'openLinkToOtherView' },
                },
            },
            SECTION_TIMESTAMP: {
                options: {
                    levelCaption: 'delete',
                    levelFavorites: 'delete',
                    levelFavoritesHideSlider: 'delete',
                },
            },
            SECTION_DEVICESPECIFIC: 'delete',
        },
    },
    iQontrolFlood: {
        name: 'Flood-Sensor',
        states: [
            'STATE',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/flood_on.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: { name: 'Icon on', type: 'icon', typicalIconEquivalents: ['flood_on'], default: '' },
                    icon_off: { name: 'Icon off', type: 'icon', typicalIconEquivalents: ['flood_off'], default: '' },
                },
            },
            SECTION_TILE: {
                options: {
                    clickOnIconAction: { default: 'openLinkToOtherView' },
                    clickOnTileAction: { default: 'openLinkToOtherView' },
                },
            },
            SECTION_TIMESTAMP: {
                options: {
                    levelCaption: 'delete',
                    levelFavorites: 'delete',
                    levelFavoritesHideSlider: 'delete',
                },
            },
            SECTION_DEVICESPECIFIC: 'delete',
        },
    },
    iQontrolAlarm: {
        name: 'Alarm',
        states: [
            'STATE',
            'CONTROL_MODE',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/alarm_on.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_triggered: {
                        name: 'Icon triggered (STATE is true)',
                        type: 'icon',
                        typicalIconEquivalents: [
                            'alarm_on_triggered',
                            'alarm_on',
                            'bell_on',
                            'bell_ringing_on',
                            'firebox_on',
                            'panic_on',
                        ],
                        default: '',
                    },
                    icon_on: {
                        name: 'Icon on (STATE is false, CONTROL_MODE is armed)',
                        type: 'icon',
                        typicalIconEquivalents: [
                            'alarm_on',
                            'alarm_on_triggered',
                            'bell_ringing_on',
                            'bell_on',
                            'firebox_on',
                            'firebox_green',
                            'panic_on',
                        ],
                        default: '',
                    },
                    icon_off: {
                        name: 'Icon off (STATE is false, CONTROL_MODE is disarmed)',
                        type: 'icon',
                        typicalIconEquivalents: [
                            'alarm_off',
                            'bell_off',
                            'bell_ringing_off',
                            'firebox_off',
                            'firebox_green',
                            'panic_off',
                        ],
                        default: '',
                    },
                },
            },
            SECTION_TILE: {
                options: {
                    clickOnIconAction: {
                        selectOptions:
                            'openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing',
                        default: 'openDialog',
                    },
                    clickOnTileAction: {
                        selectOptions:
                            'openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing',
                        default: 'openDialog',
                    },
                },
            },
            SECTION_TIMESTAMP: {
                options: {
                    levelCaption: 'delete',
                    levelFavorites: 'delete',
                    levelFavoritesHideSlider: 'delete',
                },
            },
            SECTION_DEVICESPECIFIC: {
                options: {
                    controlModeDisarmedValue: {
                        name: "Value of CONTROL_MODE for 'disarmed'",
                        type: 'text',
                        default: '0',
                    },
                },
            },
        },
    },
    iQontrolBattery: {
        name: 'Battery',
        states: [
            'STATE',
            'CHARGING',
            'DISCHARGING',
            'POWER',
            'VOLTAGE',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/battery_full.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: { name: 'Icon full', type: 'icon', typicalIconEquivalents: ['battery_full'], default: '' },
                    icon_off: {
                        name: 'Icon empty',
                        type: 'icon',
                        typicalIconEquivalents: ['battery_empty'],
                        default: '',
                    },
                    icon_charged75: {
                        name: 'Icon 75%',
                        type: 'icon',
                        typicalIconEquivalents: ['battery_75'],
                        default: '',
                    },
                    icon_charged50: {
                        name: 'Icon 50%',
                        type: 'icon',
                        typicalIconEquivalents: ['battery_50'],
                        default: '',
                    },
                    icon_charged25: {
                        name: 'Icon 25%',
                        type: 'icon',
                        typicalIconEquivalents: ['battery_25'],
                        default: '',
                    },
                    icon_charged10: {
                        name: 'Icon 10%',
                        type: 'icon',
                        typicalIconEquivalents: ['battery_10'],
                        default: '',
                    },
                    icon_charging: {
                        name: 'Icon charging',
                        type: 'icon',
                        typicalIconEquivalents: ['battery_charging_overlay'],
                        default: '',
                    },
                    icon_discharging: {
                        name: 'Icon discharging',
                        type: 'icon',
                        typicalIconEquivalents: ['battery_discharging_overlay'],
                        default: '',
                    },
                },
            },
            SECTION_TILE: {
                options: {
                    clickOnIconAction: {
                        selectOptions:
                            'openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing',
                        default: 'openDialog',
                    },
                    clickOnTileAction: {
                        selectOptions:
                            'openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing',
                        default: 'openDialog',
                    },
                },
            },
            SECTION_TIMESTAMP: {
                options: {
                    levelCaption: 'delete',
                    levelFavorites: 'delete',
                    levelFavoritesHideSlider: 'delete',
                },
            },
            SECTION_DEVICESPECIFIC: 'delete',
        },
    },
    iQontrolDateAndTime: {
        name: 'Date and Time',
        states: [
            'STATE',
            'SUBJECT',
            'TIME',
            'RINGING',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/time_alarmclock_on.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: {
                        name: 'Icon on',
                        type: 'icon',
                        typicalIconEquivalents: [
                            'time_alarmclock_on',
                            'time_clock_on',
                            'time_timer_on',
                            'time_duration_on',
                            'time_calendar_on',
                        ],
                        default: '',
                    },
                    icon_off: {
                        name: 'Icon off',
                        type: 'icon',
                        typicalIconEquivalents: [
                            'time_alarmclock_off',
                            'time_clock_off',
                            'time_timer_off',
                            'time_duration_off',
                            'time_calendar_off',
                        ],
                        default: '',
                    },
                    icon_ringing: {
                        name: 'Icon ringing',
                        type: 'icon',
                        typicalIconEquivalents: ['bell_ringing_overlay'],
                        default: '',
                    },
                },
            },
            SECTION_TIMESTAMP: {
                options: {
                    levelCaption: 'delete',
                    levelFavorites: 'delete',
                    levelFavoritesHideSlider: 'delete',
                },
            },
            SECTION_DEVICESPECIFIC: {
                options: {
                    subjectCaption: { name: 'Caption of SUBJECT', type: 'text', default: '' },
                    timeCaption: { name: 'Caption for TIME', type: 'text', default: '' },
                    timeFormat: {
                        name: 'Format of TIME (as stored in the datapoint, see readme)',
                        type: 'combobox',
                        selectOptions:
                            '~/Use custom datapoint settings;x/timestamp;YYYY-MM-DDTHH:mm:ss.SSSZ;ddd MMM DD YYYY HH:mm:ss ZZ;HH:mm;HH:mm:ss;DD.MM.YYYY;DD.MM.YYYY HH:mm;DD.MM.YYYY HH:mm:ss;ddd, DD.MM.YYYY;ddd, DD.MM.YYYY HH:mm;ddd, DD.MM.YYYY HH:mm:ss;dddd, DD.MM.YYYY;dddd, DD.MM.YYYY HH:mm;dddd, DD.MM.YYYY HH:mm:ss;hh:mm a;hh:mm:ss a;YYYY-MM-DD;YYYY-MM-DD hh:mm a;YYYY-MM-DD hh:mm:ss a;ddd, YYYY-MM-DD;ddd, YYYY-MM-DD hh:mm a;ddd, YYYY-MM-DD hh:mm:ss a;dddd, YYYY-MM-DD;dddd, YYYY-MM-DD hh:mm a;dddd, YYYY-MM-DD hh:mm:ss a;P/Period;Pms/Period in milliseconds;Ps/Period in seconds;Pm/Period in minutes',
                        default: 'x',
                    },
                    timeDisplayFormat: {
                        name: 'Display-Format of TIME (how it should be displayed, see readme)',
                        type: 'combobox',
                        selectOptions:
                            '~/Use custom datapoint settings;HH:mm;HH:mm:ss;DD.MM.YYYY;DD.MM.YYYY HH:mm;DD.MM.YYYY HH:mm:ss;ddd, DD.MM.YYYY;ddd, DD.MM.YYYY HH:mm;ddd, DD.MM.YYYY HH:mm:ss;dddd, DD.MM.YYYY;dddd, DD.MM.YYYY HH:mm;dddd, DD.MM.YYYY HH:mm:ss;hh:mm a;hh:mm:ss a;YYYY-MM-DD;YYYY-MM-DD hh:mm a;YYYY-MM-DD hh:mm:ss a;ddd, YYYY-MM-DD;ddd, YYYY-MM-DD hh:mm a;ddd, YYYY-MM-DD hh:mm:ss a;dddd, YYYY-MM-DD;dddd, YYYY-MM-DD hh:mm a;dddd, YYYY-MM-DD hh:mm:ss a;D [Day(s)], H:m:s/D [Day(s)], H:m:s (for Periods);D [Day(s)], HH:mm:ss/D [Day(s)], HH:mm:ss (for Periods)',
                        default: 'dddd, DD.MM.YYYY HH:mm:ss',
                    },
                    timeDisplayDontShowDistance: {
                        name: 'Show Distance',
                        type: 'select',
                        selectOptions: "/Use custom datapoint settings;false/Show Distance;true/Don't Show Distance",
                        default: '',
                    },
                    dateAndTimeTileActiveConditions: {
                        name: 'Tile is active when all selected items are true',
                        type: 'multipleSelect',
                        selectOptions:
                            'activeIfStateActive/If STATE is active;activeIfTimeNotZero/If TIME is not zero;activeIfTimeInFuture/If TIME is in future;activeIfTimeInPast/If TIME is in past',
                        default: 'activeIfStateActive,activeIfTimeInFuture',
                    },
                    dateAndTimeTileActiveWhenRinging: {
                        name: 'Tile is always active when RINGING is active',
                        type: 'checkbox',
                        default: 'true',
                    },
                    dateAndTimeShowInState: {
                        name: 'Show in state',
                        type: 'multipleSelect',
                        selectOptions:
                            'showStateIfInactive/Show STATE if inactive;showStateIfActive/Show STATE if active;showSubjectIfActive/Show SUBJECT if active;showSubjectIfInactive/Show SUBJECT if inactive;showTimeIfInactiveAndInPast/Show TIME if inactive and in past;showTimeIfInactiveAndInFuture/Show TIME if inactive and in future;showTimeIfActiveAndInPast/Show TIME if active and in past;showTimeIfActiveAndInFuture/Show TIME if active and in future;showTimeDistanceIfInactiveAndInPast/Show distance to TIME if inactive and in past;showTimeDistanceIfInactiveAndInFuture/Show distance to TIME if inactive and in future;showTimeDistanceIfActiveAndInPast/Show distance to TIME if active and in past;showTimeDistanceIfActiveAndInFuture/Show distance to TIME if active and in future',
                        default: 'showStateIfInactive,showSubjectIfActive,showTimeDistanceIfActiveAndInFuture',
                    },
                },
            },
        },
    },
    iQontrolValue: {
        name: 'Value',
        states: [
            'STATE',
            'LEVEL',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/value_on.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: {
                        name: 'Icon on',
                        type: 'icon',
                        typicalIconEquivalents: ['value_on', 'info_circle_on', 'info_square_on', 'info_bubble_on'],
                        default: '',
                    },
                    icon_off: {
                        name: 'Icon off',
                        type: 'icon',
                        typicalIconEquivalents: ['value_off', 'info_circle_off', 'info_square_off', 'info_bubble_off'],
                        default: '',
                    },
                },
            },
            SECTION_TILE: {
                options: {
                    clickOnIconAction: {
                        selectOptions:
                            'openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing',
                        default: 'openDialog',
                    },
                    clickOnTileAction: {
                        selectOptions:
                            'openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing',
                        default: 'openDialog',
                    },
                },
            },
            SECTION_DEVICESPECIFIC: {
                options: {
                    showStateAndLevelSeparatelyInTile: {
                        name: 'Show STATE and LEVEL separately in tile',
                        type: 'select',
                        selectOptions:
                            '/No;devidedByComma/Yes, devided by comma;devidedByComma preceedCaptions/Yes, devided by comma, preceed captions;devidedBySemicolon/Yes, devided by semicolon;devidedBySemicolon preceedCaptions/Yes, devided by semicolon, preceed captions;devidedByHyphen/Yes, devided by hyphen;devidedByHyphen preceedCaptions/Yes, devided by hyphen, preceed captions',
                        default: 'false',
                    },
                },
            },
        },
    },
    iQontrolProgram: {
        name: 'Program',
        states: [
            'STATE',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/play_on.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: { name: 'Icon on', type: 'icon', typicalIconEquivalents: ['play_on'], default: '' },
                    icon_off: { name: 'Icon off', type: 'icon', typicalIconEquivalents: ['play'], default: '' },
                },
            },
            SECTION_TIMESTAMP: {
                options: {
                    levelCaption: 'delete',
                    levelFavorites: 'delete',
                    levelFavoritesHideSlider: 'delete',
                },
            },
            SECTION_DEVICESPECIFIC: {
                options: {
                    showState: { name: 'Show State', type: 'checkbox', default: 'false' },
                    closeDialogAfterExecution: {
                        name: 'Close dialog after execution',
                        type: 'checkbox',
                        default: 'false',
                    },
                },
            },
        },
    },
    iQontrolScene: {
        name: 'Scene',
        states: [
            'STATE',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/play.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: { name: 'Icon on', type: 'icon', typicalIconEquivalents: ['play'], default: '' },
                    icon_off: { name: 'Icon off', type: 'icon', typicalIconEquivalents: ['play'], default: '' },
                },
            },
            SECTION_TIMESTAMP: {
                name: 'Timestamp',
                type: 'section',
                options: {
                    levelCaption: 'delete',
                    levelFavorites: 'delete',
                    levelFavoritesHideSlider: 'delete',
                    addTimestampToState: {
                        selectOptions:
                            '/Nothing;T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active)',
                    },
                },
            },
            SECTION_DEVICESPECIFIC: {
                options: {
                    alwaysSendTrue: { name: "Always send 'true' (do not toggle)", type: 'checkbox', default: 'false' },
                    closeDialogAfterExecution: {
                        name: 'Close dialog after execution',
                        type: 'checkbox',
                        default: 'false',
                    },
                },
            },
        },
    },
    iQontrolMedia: {
        name: 'Media-Player / Remote Control',
        states: [
            'STATE',
            'COVER_URL',
            'ARTIST',
            'ALBUM',
            'TRACK_NUMBER',
            'TITLE',
            'EPISODE',
            'SEASON',
            'PREV',
            'REWIND',
            'PLAY',
            'PAUSE',
            'STOP',
            'FORWARD',
            'NEXT',
            'SHUFFLE',
            'REPEAT',
            'MUTE',
            'DURATION',
            'ELAPSED',
            'VOLUME',
            'SOURCE',
            'PLAYLIST',
            'PLAY_EVERYWHERE',
            'EJECT',
            'POWER_SWITCH',
            'REMOTE_NUMBER',
            'REMOTE_VOLUME_UP',
            'REMOTE_VOLUME_DOWN',
            'REMOTE_CH_UP',
            'REMOTE_CH_DOWN',
            'REMOTE_PAD_DIRECTION',
            'REMOTE_PAD_BACK',
            'REMOTE_PAD_HOME',
            'REMOTE_PAD_MENU',
            'REMOTE_COLOR',
            'REMOTE_CHANNELS',
            'REMOTE_ADDITIONAL_BUTTONS',
            'REMOTE_HIDE_REMOTE',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/media_on.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: { name: 'Icon on', type: 'icon', typicalIconEquivalents: ['media_on'], default: '' },
                    icon_off: { name: 'Icon off', type: 'icon', typicalIconEquivalents: ['media_off'], default: '' },
                },
            },
            SECTION_DEVICESPECIFIC_PLAYPAUSE: {
                name: 'Play/Pause',
                type: 'section',
                options: {
                    statePlayValue: { name: "Value of STATE for 'play'", type: 'text', default: 'play' },
                    statePauseValue: { name: "Value of STATE for 'pause'", type: 'text', default: 'pause' },
                    stateStopValue: { name: "Value of STATE for 'stop'", type: 'text', default: 'stop' },
                    useStateValuesForPlayPauseStop: {
                        name: 'Send these values (instead of true) when clicking on PLAY, PAUSE and STOP',
                        type: 'checkbox',
                        default: 'false',
                    },
                    hidePlayOverlay: { name: 'Hide play icon', type: 'checkbox', default: 'false' },
                    hidePauseAndStopOverlay: { name: 'Hide pause and stop icon', type: 'checkbox', default: 'false' },
                    durationIsMilliseconds: {
                        name: 'DURATION and ELAPSED are values in milliseconds',
                        type: 'checkbox',
                        default: 'false',
                    },
                    elapsedIsPercentage: {
                        name: 'ELAPSED is a value in percentage',
                        type: 'checkbox',
                        default: 'false',
                    },
                },
            },
            SECTION_DEVICESPECIFIC_REPEAT: {
                name: 'Repeat',
                type: 'section',
                options: {
                    repeatOffValue: { name: "Value of REPEAT for 'off'", type: 'text', default: 'false' },
                    repeatAllValue: { name: "Value of REPEAT for 'repeat all'", type: 'text', default: 'true' },
                    repeatOneValue: { name: "Value of REPEAT for 'repeat one'", type: 'text', default: '2' },
                },
            },
            SECTION_DEVICESPECIFIC_REMOTE: {
                name: 'Remote',
                type: 'section',
                options: {
                    remoteKeepSectionsOpen: { name: 'Keep sections open', type: 'checkbox', default: 'false' },
                    remoteSectionsStartOpened: {
                        name: 'Start with these sections initially opened',
                        type: 'multipleSelect',
                        selectOptions:
                            'REMOTE_PAD/Pad;REMOTE_CONTROL/Volume and Channel Control;REMOTE_ADDITIONAL_BUTTONS/Additional Buttons;REMOTE_CHANNELS/Channels;REMOTE_NUMBERS/Numbers;REMOTE_COLORS/Colors',
                        default: '',
                    },
                    remoteShowDirectionsInsidePad: {
                        name: 'Show Vol and Ch +/- inside Pad',
                        type: 'checkbox',
                        default: 'false',
                    },
                    remoteChannelsCaption: { name: "Caption for section 'Channels'", type: 'text', default: '' },
                    remoteAdditionalButtonsCaption: {
                        name: "Caption for section 'Additional Buttons'",
                        type: 'text',
                        default: '',
                    },
                },
            },
            SECTION_TIMESTAMP: {
                name: 'Timestamp',
                type: 'section',
                options: {
                    levelCaption: 'delete',
                    levelFavorites: 'delete',
                    levelFavoritesHideSlider: 'delete',
                    addTimestampToState: {
                        selectOptions:
                            '/Nothing;T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active)',
                    },
                },
            },
            SECTION_DEVICESPECIFIC: {
                options: {
                    coverImageReloadDelay: {
                        name: 'Delay reload of cover-image [ms]',
                        type: 'number',
                        min: '0',
                        max: '5000',
                        default: '',
                    },
                    coverImageNoReloadOnTitleChange: {
                        name: 'No forced reload of cover-image on change of TITLE',
                        type: 'checkbox',
                        default: 'false',
                    },
                    togglePowerSwitch: {
                        name: 'Toggle POWER_SWITCH instead of STATE (for example when clicking on icon)',
                        type: 'checkbox',
                        default: 'false',
                    },
                },
            },
        },
    },
    iQontrolPopup: {
        name: 'Popup',
        states: [
            'STATE',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/popup.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: {
                        name: 'Icon on',
                        type: 'icon',
                        typicalIconEquivalents: ['popup', 'link_square_internal', 'camera_on', 'camera_ptz_on'],
                        default: '',
                    },
                    icon_off: {
                        name: 'Icon off',
                        type: 'icon',
                        typicalIconEquivalents: ['popup', 'link_square_internal', 'camera_on', 'camera_ptz_on'],
                        default: '',
                    },
                },
            },
            SECTION_TILE: {
                options: {
                    clickOnIconAction: {
                        selectOptions:
                            'openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing',
                        default: 'openDialog',
                    },
                    clickOnTileAction: {
                        selectOptions:
                            'openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing',
                        default: 'openDialog',
                    },
                },
            },
            SECTION_TIMESTAMP: {
                options: {
                    levelCaption: 'delete',
                    levelFavorites: 'delete',
                    levelFavoritesHideSlider: 'delete',
                },
            },
            SECTION_DEVICESPECIFIC: 'delete',
        },
    },
    iQontrolExternalLink: {
        name: 'External Link',
        states: [
            'STATE',
            'URL',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/link.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: {
                        name: 'Icon on',
                        type: 'icon',
                        typicalIconEquivalents: ['link', 'link_square_external'],
                        default: '',
                    },
                    icon_off: {
                        name: 'Icon off',
                        type: 'icon',
                        typicalIconEquivalents: ['link', 'link_square_external'],
                        default: '',
                    },
                },
            },
            SECTION_TILE: {
                options: {
                    clickOnIconAction: { default: 'openURLExternal' },
                    clickOnTileAction: { default: 'openURLExternal' },
                },
            },
            SECTION_TIMESTAMP: {
                options: {
                    levelCaption: 'delete',
                    levelFavorites: 'delete',
                    levelFavoritesHideSlider: 'delete',
                },
            },
            SECTION_DEVICESPECIFIC: 'delete',
        },
    },
    iQontrolWidget: {
        name: 'Widget',
        states: [
            'STATE',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/widget_on.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: {
                        name: 'Icon on',
                        type: 'icon',
                        typicalIconEquivalents: ['blank', 'widget_on'],
                        default: '',
                    },
                    icon_off: {
                        name: 'Icon off',
                        type: 'icon',
                        typicalIconEquivalents: ['blank', 'widget_off'],
                        default: '',
                    },
                },
            },
            SECTION_TILE: {
                options: {
                    noZoomOnHover: { default: 'true' },
                    hideDeviceName: { default: 'true' },
                },
            },
            SECTION_TILE_INACTIVE: {
                options: {
                    sizeInactive: {
                        selectOptions:
                            ' /Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen',
                        default: 'xwideIfInactive highIfInactive',
                    },
                    noOverlayInactive: { default: 'true' },
                    hideStateIfInactive: { default: 'true' },
                },
            },
            SECTION_TILE_ACTIVE: {
                options: {
                    sizeActive: {
                        selectOptions:
                            ' /Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen',
                        default: 'fullWidthIfActive fullHeightIfActive',
                    },
                    noOverlayActive: { default: 'true' },
                },
            },
            SECTION_TILE_ENLARGED: {
                options: {
                    sizeEnlarged: {
                        selectOptions:
                            ' /Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen',
                        default: 'fullWidthIfEnlarged fullHeightIfEnlarged',
                    },
                    tileEnlargeShowButtonInactive: { default: 'true' },
                    tileEnlargeShowButtonActive: { default: 'true' },
                    tileEnlargeShowInPressureMenuInactive: { default: 'true' },
                    tileEnlargeShowInPressureMenuActive: { default: 'true' },
                },
            },
            SECTION_TIMESTAMP: {
                name: 'Timestamp',
                type: 'section',
                options: {
                    levelCaption: 'delete',
                    levelFavorites: 'delete',
                    levelFavoritesHideSlider: 'delete',
                    addTimestampToState: { default: 'N' },
                },
            },
            SECTION_DEVICESPECIFIC: {
                options: {
                    noVirtualState: {
                        name: 'Do not use a virtual datapoint for STATE (hide switch, if STATE is empty)',
                        type: 'checkbox',
                        default: 'false',
                    },
                },
            },
        },
    },
    iQontrolInfoText: {
        name: 'Info-Text',
        states: [
            'STATE',
            'INFO_A',
            'INFO_B',
            'BATTERY',
            'UNREACH',
            'ERROR',
            'BACKGROUND_VIEW',
            'BACKGROUND_URL',
            'BACKGROUND_HTML',
            'ENLARGE_TILE',
            'BADGE',
            'BADGE_COLOR',
            'OVERLAY_INACTIVE_COLOR',
            'OVERLAY_ACTIVE_COLOR',
            'GLOW_INACTIVE_COLOR',
            'GLOW_ACTIVE_COLOR',
            'GLOW_HIDE',
            'URL',
            'HTML',
            'ADDITIONAL_CONTROLS',
            'ADDITIONAL_INFO',
        ],
        icon: '/images/icons/info_bubble_off.png',
        deviceSpecificOptions: {
            SECTION_ICONS: {
                options: {
                    icon_on: {
                        name: 'Icon on',
                        type: 'icon',
                        typicalIconEquivalents: [
                            'info_bubble_off',
                            'info_circle_off',
                            'info_square_off',
                            'value_off',
                            'info_bubble_on',
                            'info_circle_off',
                            'info_square_on',
                            'value_on',
                        ],
                        default: '',
                    },
                    icon_off: {
                        name: 'Icon off',
                        type: 'icon',
                        typicalIconEquivalents: [
                            'info_bubble_off',
                            'info_circle_off',
                            'info_square_off',
                            'value_off',
                            'info_bubble_on',
                            'info_circle_off',
                            'info_square_on',
                            'value_on',
                        ],
                        default: '',
                    },
                },
            },
            SECTION_TILE: {
                options: {
                    clickOnIconAction: {
                        selectOptions:
                            'openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing',
                        default: 'false',
                    },
                    clickOnTileAction: {
                        selectOptions:
                            'openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing',
                        default: 'false',
                    },
                    noZoomOnHover: { default: 'true' },
                    hideDeviceName: { default: 'true' },
                },
            },
            SECTION_TILE_INACTIVE: {
                options: {
                    sizeInactive: {
                        selectOptions:
                            '/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen;fullWidthIfInactive shortIfInactive/Full Width, Short',
                        default: 'fullWidthIfInactive shortIfInactive',
                    },
                    stateHeightAdaptsContentInactive: { default: 'true' },
                    stateFillsDeviceInactive: { default: 'true' },
                    stateBigFontInactive: { default: 'true' },
                    transparentIfInactive: { default: 'true' },
                    noOverlayInactive: { default: 'true' },
                    hideBackgroundURLInactive: { default: 'true' },
                    hideDeviceNameIfInactive: { default: 'true' },
                    hideInfoAIfInactive: { default: 'true' },
                    hideInfoBIfInactive: { default: 'true' },
                    hideStateIfInactive: { default: 'true' },
                    hideDeviceIfInactive: { default: 'true' },
                },
            },
            SECTION_TILE_ACTIVE: {
                options: {
                    sizeActive: {
                        selectOptions:
                            '/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen;fullWidthIfActive shortIfActive/Full Width, Short',
                        default: 'fullWidthIfActive shortIfActive',
                    },
                    stateHeightAdaptsContentActive: { default: 'true' },
                    stateFillsDeviceActive: { default: 'true' },
                    stateBigFontActive: { default: 'true' },
                    transparentIfActive: { default: 'true' },
                    noOverlayActive: { default: 'true' },
                    hideBackgroundURLActive: { default: 'true' },
                    hideDeviceNameIfActive: { default: 'true' },
                    hideInfoAIfActive: { default: 'true' },
                    hideInfoBIfActive: { default: 'true' },
                },
            },
            SECTION_TILE_ENLARGED: {
                options: {
                    stateHeightAdaptsContentEnlarged: { default: 'true' },
                    stateFillsDeviceEnlarged: { default: 'true' },
                    stateBigFontEnlarged: { default: 'true' },
                    hideDeviceNameIfEnlarged: { default: 'true' },
                },
            },
            SECTION_TIMESTAMP: {
                options: {
                    levelCaption: 'delete',
                    levelFavorites: 'delete',
                    levelFavoritesHideSlider: 'delete',
                },
            },
            SECTION_DEVICESPECIFIC: 'delete',
        },
    },
};

var iQontrolRolesStandardOptions = {
    SECTION_ICONS: { name: 'Icons', type: 'section' },
    SECTION_GENERAL: {
        name: 'General',
        type: 'section',
        options: {
            readonly: { name: 'Readonly', type: 'checkbox', default: 'false' },
            renderLinkedViewInParentInstance: {
                name: 'Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW',
                type: 'checkbox',
                default: 'false',
            },
            renderLinkedViewInParentInstanceClosesPanel: {
                name: 'After opening linked view in parent instance, close panel (if it is dismissible)',
                type: 'checkbox',
                default: 'false',
            },
        },
    },
    SECTION_TILE: {
        name: 'Tile-Behaviour (general)',
        type: 'section',
        options: {
            clickOnIconAction: {
                name: 'Click on Icon Action',
                type: 'select',
                selectOptions:
                    'toggle/Toggle;openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing',
                default: 'toggle',
            },
            clickOnTileAction: {
                name: 'Click on Tile Action',
                type: 'select',
                selectOptions:
                    'toggle/Toggle;openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing',
                default: 'openDialog',
            },
            noZoomOnHover: { name: 'Disable zoom-effect on hover', type: 'checkbox', default: 'false' },
            iconNoZoomOnHover: { name: 'Disable zoom-effect on hover for icon', type: 'checkbox', default: 'false' },
            hideDeviceName: { name: 'Hide device name', type: 'checkbox', default: 'false' },
        },
    },
    SECTION_TILE_ACTIVE_CONDITION: {
        name: 'Conditions for an Active Tile',
        type: 'section',
        options: {
            tileActiveStateId: { name: 'State ID (empty = STATE/LEVEL will be used)', type: 'datapoint', default: '' },
            tileActiveCondition: {
                name: 'Condition',
                type: 'select',
                selectOptions:
                    '/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal',
                default: '',
            },
            tileActiveConditionValue: { name: 'Condition value', type: 'text', default: '' },
        },
    },
    SECTION_TILE_INACTIVE: {
        name: 'Tile-Behaviour if device is inactive',
        type: 'section',
        options: {
            sizeInactive: {
                name: 'Size of tile, if device is inactive',
                type: 'select',
                selectOptions:
                    '/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen',
                default: '',
            },
            stateHeightAdaptsContentInactive: {
                name: 'Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive',
                type: 'checkbox',
                default: 'false',
            },
            stateFillsDeviceInactive: {
                name: 'Size of STATE fills the complete device (this may interfere with other content), if the device is inactive',
                type: 'checkbox',
                default: 'false',
            },
            stateBigFontInactive: {
                name: 'Use big font for STATE, if the device is inactive',
                type: 'checkbox',
                default: 'false',
            },
            bigIconInactive: { name: 'Show big icon, if device is inactive', type: 'checkbox', default: 'false' },
            iconNoPointerEventsInactive: {
                name: 'Ignore mouse events for the icon, if device is inactive',
                type: 'checkbox',
                default: 'false',
            },
            transparentIfInactive: {
                name: 'Make background transparent, if device is inactive',
                type: 'checkbox',
                default: 'false',
            },
            noOverlayInactive: {
                name: 'Remove overlay of tile, if device is inactive',
                type: 'checkbox',
                default: 'false',
            },
            hideBackgroundURLInactive: {
                name: 'Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive',
                type: 'checkbox',
                default: 'false',
            },
            hideDeviceNameIfInactive: {
                name: 'Hide device name, if the device is inactive',
                type: 'checkbox',
                default: 'false',
            },
            hideStateIfInactive: { name: 'Hide state, if the device is inactive', type: 'checkbox', default: 'false' },
            hideIndicatorIfInactive: {
                name: 'Hide Indicator Icons (ERROR, UNREACH, BATTERY), if the device is inactive',
                type: 'checkbox',
                default: 'false',
            },
            hideInfoAIfInactive: { name: 'Hide INFO_A, if the device is inactive', type: 'checkbox', default: 'false' },
            hideInfoBIfInactive: { name: 'Hide INFO_B, if the device is inactive', type: 'checkbox', default: 'false' },
            hideDeviceIfInactive: { name: 'Hide device, if it is inactive', type: 'checkbox', default: 'false' },
        },
    },
    SECTION_TILE_ACTIVE: {
        name: 'Tile-Behaviour if device is active',
        type: 'section',
        options: {
            sizeActive: {
                name: 'Size of tile, if device is active',
                type: 'select',
                selectOptions:
                    '/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen',
                default: '',
            },
            stateHeightAdaptsContentActive: {
                name: 'Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active',
                type: 'checkbox',
                default: 'false',
            },
            stateFillsDeviceActive: {
                name: 'Size of STATE fills the complete device (this may interfere with other content), if the device is active',
                type: 'checkbox',
                default: 'false',
            },
            stateBigFontActive: {
                name: 'Use big font for STATE, if the device is active',
                type: 'checkbox',
                default: 'false',
            },
            bigIconActive: { name: 'Show big icon, if device is active', type: 'checkbox', default: 'false' },
            iconNoPointerEventsActive: {
                name: 'Ignore mouse events for the icon, if device is active',
                type: 'checkbox',
                default: 'false',
            },
            transparentIfActive: {
                name: 'Make background transparent, if device is active',
                type: 'checkbox',
                default: 'false',
            },
            noOverlayActive: {
                name: 'Remove overlay of tile, if device is active',
                type: 'checkbox',
                default: 'false',
            },
            hideBackgroundURLActive: {
                name: 'Hide background from BACKGROUND_VIEW/URL/HTML, if device is active',
                type: 'checkbox',
                default: 'false',
            },
            hideDeviceNameIfActive: {
                name: 'Hide device name, if the device is active',
                type: 'checkbox',
                default: 'false',
            },
            hideStateIfActive: { name: 'Hide state, if the device is active', type: 'checkbox', default: 'false' },
            hideIndicatorIfActive: {
                name: 'Hide Indicator Icons (ERROR, UNREACH, BATTERY), if the device is active',
                type: 'checkbox',
                default: 'false',
            },
            hideInfoAIfActive: { name: 'Hide INFO_A, if the device is active', type: 'checkbox', default: 'false' },
            hideInfoBIfActive: { name: 'Hide INFO_B, if the device is active', type: 'checkbox', default: 'false' },
            hideDeviceIfActive: { name: 'Hide device, if it is active', type: 'checkbox', default: 'false' },
        },
    },
    SECTION_TILE_ENLARGED: {
        name: 'Tile-Behaviour if device is enlarged',
        type: 'section',
        options: {
            sizeEnlarged: {
                name: 'Size of tile, if device is enlarged',
                type: 'select',
                selectOptions:
                    '/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen',
                default: 'fullWidthIfEnlarged fullHeightIfEnlarged',
            },
            stateHeightAdaptsContentEnlarged: {
                name: 'Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged',
                type: 'checkbox',
                default: 'false',
            },
            stateFillsDeviceEnlarged: {
                name: 'Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged',
                type: 'checkbox',
                default: 'false',
            },
            stateBigFontEnlarged: {
                name: 'Use big font for STATE, if the device is enlarged',
                type: 'checkbox',
                default: 'false',
            },
            bigIconEnlarged: { name: 'Show big icon, if device is enlarged', type: 'checkbox', default: 'true' },
            iconNoPointerEventsEnlarged: {
                name: 'Ignore mouse events for the icon, if device is enlarged',
                type: 'checkbox',
                default: 'false',
            },
            transparentIfEnlarged: {
                name: 'Make background transparent, if device is enlarged',
                type: 'checkbox',
                default: 'false',
            },
            noOverlayEnlarged: {
                name: 'Remove overlay of tile, if device is enlarged',
                type: 'checkbox',
                default: 'false',
            },
            tileEnlargeStartEnlarged: { name: 'Tile is enlarged on start', type: 'checkbox', default: 'false' },
            tileEnlargeShowButtonInactive: {
                name: 'Show Enlarge-Button, if device is inactive',
                type: 'checkbox',
                default: 'false',
            },
            tileEnlargeShowButtonActive: {
                name: 'Show Enlarge-Button, if device is active',
                type: 'checkbox',
                default: 'false',
            },
            tileEnlargeShowInPressureMenuInactive: {
                name: 'Show Enlarge in Menu, if device is inactive',
                type: 'checkbox',
                default: 'false',
            },
            tileEnlargeShowInPressureMenuActive: {
                name: 'Show Enlarge in Menu, if device is active',
                type: 'checkbox',
                default: 'false',
            },
            visibilityBackgroundURLEnlarged: {
                name: 'Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged',
                type: 'select',
                selectOptions: '/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible',
                default: '',
            },
            hideDeviceNameIfEnlarged: {
                name: 'Hide device name, if the device is enlarged',
                type: 'checkbox',
                default: 'false',
            },
            hideStateIfEnlarged: { name: 'Hide state, if the device is enlarged', type: 'checkbox', default: 'false' },
            hideIndicatorIfEnlarged: {
                name: 'Hide Indicator Icons (ERROR, UNREACH, BATTERY), if the device is enlarged',
                type: 'checkbox',
                default: 'false',
            },
            hideInfoAIfEnlarged: { name: 'Hide INFO_A, if the device is enlarged', type: 'checkbox', default: 'false' },
            hideInfoBIfEnlarged: { name: 'Hide INFO_B, if the device is enlarged', type: 'checkbox', default: 'false' },
            hideIconEnlarged: { name: 'Hide icon, if device is enlarged', type: 'checkbox', default: 'false' },
        },
    },
    SECTION_TIMESTAMP: {
        name: 'STATE, LEVEL and Timestamp',
        type: 'section',
        options: {
            stateCaption: { name: 'Caption of STATE', type: 'text', default: '' },
            levelCaption: { name: 'Caption of LEVEL', type: 'text', default: '' },
            levelFavorites: {
                name: 'Favorite values for LEVEL (semicolon separated list of numbers)',
                type: 'text',
                default: '',
            },
            levelFavoritesHideSlider: {
                name: 'Hide slider for LEVEL, if Favorite values are set',
                type: 'checkbox',
                default: 'false',
            },
            addTimestampToState: {
                name: 'Add timestamp to state',
                type: 'select',
                selectOptions:
                    '/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)',
                default: '',
            },
            hideStateAndLevelInDialog: { name: 'Hide STATE and LEVEL in dialog', type: 'checkbox', default: 'false' },
            showTimestamp: {
                name: 'Show Timestamp in dialog',
                type: 'select',
                selectOptions: '/Auto;yes/Yes;no/No;always/Always;never/Never',
                default: '',
            },
        },
    },
    SECTION_INFO_A_B: {
        name: 'INFO_A/B',
        type: 'section',
        options: {
            infoARoundDigits: {
                name: 'Round INFO_A to this number of digits',
                type: 'number',
                min: '0',
                max: '10',
                default: '1',
            },
            infoBRoundDigits: {
                name: 'Round INFO_B to this number of digits',
                type: 'number',
                min: '0',
                max: '10',
                default: '1',
            },
            infoAShowName: { name: 'Show Name of INFO_A', type: 'checkbox', default: 'false' },
            infoBShowName: { name: 'Show Name of INFO_B', type: 'checkbox', default: 'false' },
        },
    },
    SECTION_BATTERY: {
        name: 'BATTERY Empty Icon',
        type: 'section',
        options: {
            batteryIcon_on: { name: 'BATTERY Icon', type: 'icon', typicalIconEquivalents: ['BATTERY'], default: '' },
            batteryActiveCondition: {
                name: 'Condition',
                type: 'select',
                selectOptions:
                    '/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal',
                default: '',
            },
            batteryActiveConditionValue: { name: 'Condition value', type: 'text', default: '' },
        },
    },
    SECTION_UNREACH: {
        name: 'UNREACH Icon',
        type: 'section',
        options: {
            unreachIcon_on: { name: 'UNREACH Icon', type: 'icon', typicalIconEquivalents: ['UNREACH'], default: '' },
            invertUnreach: {
                name: 'Invert UNREACH (use connected instead of unreach)',
                type: 'checkbox',
                default: 'false',
            },
            hideUnreachIfInactive: {
                name: 'Hide (resp. ignore) UNREACH, if the device is inactive',
                type: 'checkbox',
                default: 'false',
            },
        },
    },
    SECTION_ERROR: {
        name: 'ERROR Icon',
        type: 'section',
        options: {
            errorIcon_on: { name: 'ERROR Icon', type: 'icon', typicalIconEquivalents: ['ERROR'], default: '' },
            invertError: { name: 'Invert ERROR (use ok instead of error)', type: 'checkbox', default: 'false' },
        },
    },
    SECTION_BACKGROUND_VIEWURLHTML: {
        name: 'BACKGROUND_VIEW/URL/HTML',
        type: 'section',
        options: {
            adjustHeightToBackgroundView: {
                name: 'Adjust height of device tile to the size of BACKGROUND_VIEW',
                type: 'checkbox',
                default: 'false',
            },
            backgroundURLAllowAdjustHeight: {
                name: 'Allow widget in BACKGROUND_URL to adjust height of device tile',
                type: 'checkbox',
                default: 'false',
            },
            backgroundLimitAdjustHeightToScreen: {
                name: 'Limit adjustment of height to screen size',
                type: 'checkbox',
                default: 'false',
            },
            backgroundURLDynamicIframeZoom: {
                name: 'Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)',
                type: 'number',
                step: '0.01',
                min: '0',
                max: '200',
                default: '',
            },
            backgroundURLPadding: {
                name: 'Apply padding to BACKGROUND_VIEW/URL/HTML',
                type: 'number',
                min: '0',
                max: '50',
                default: '',
            },
            backgroundURLAllowPostMessage: {
                name: 'Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML',
                type: 'checkbox',
                default: 'false',
            },
            backgroundURLNoPointerEvents: {
                name: 'Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML',
                type: 'checkbox',
                default: 'false',
            },
            overlayAboveBackgroundURL: {
                name: 'Position Overlay above BACKGROUND_VIEW/URL/HTML',
                type: 'checkbox',
                default: 'false',
            },
        },
    },
    SECTION_BADGE: {
        name: 'BADGE',
        type: 'section',
        options: {
            badgeWithoutUnit: { name: 'Show badge value without unit', type: 'checkbox', default: 'false' },
            showBadgeIfZero: { name: 'Show badge even if the value is zero', type: 'checkbox', default: 'false' },
        },
    },
    SECTION_GLOW: {
        name: 'GLOW',
        type: 'section',
        options: {
            invertGlowHide: { name: 'Invert GLOW_HIDE', type: 'checkbox', default: 'false' },
        },
    },
    SECTION_URLHTML: {
        name: 'URL/HTML',
        type: 'section',
        options: {
            popupWidth: { name: 'Width [px] for URL/HTML-Box', type: 'number', min: '100', max: '2000', default: '' },
            popupHeight: { name: 'Height [px] for URL/HTML-Box', type: 'number', min: '100', max: '2000', default: '' },
            popupFixed: { name: 'Fixed (not resizable)', type: 'checkbox', default: 'false' },
            openURLExternal: {
                name: 'Open URL in new window (instead of showing as box in dialog)',
                type: 'checkbox',
                default: 'false',
            },
            openURLExternalCaption: { name: 'Caption for Button to open URL in new window', type: 'text', default: '' },
            popupAllowPostMessage: {
                name: 'Allow postMessage-Communication for URL/HTML',
                type: 'checkbox',
                default: 'false',
            },
        },
    },
    SECTION_ADDITIONAL_CONTROLS: {
        name: 'ADDITIONAL_CONTROLS',
        type: 'section',
        options: {
            additionalControlsSectionType: {
                name: 'Appereance of ADDITIONAL_CONTROLS',
                type: 'select',
                selectOptions:
                    'none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start',
                default: 'collapsible',
            },
            additionalControlsCaption: {
                name: 'Caption for ADDITIONAL_CONTROLS',
                type: 'text',
                default: 'Additional Controls',
            },
            additionalControlsHeadingType: {
                name: 'Appereance of ADDITIONAL_CONTROLS Headings',
                type: 'select',
                selectOptions:
                    'none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start',
                default: 'none',
            },
            additionalControlsHideNameForButtons: {
                name: 'Hide Name (with Icon) for Buttons (use caption only)',
                type: 'checkbox',
                default: false,
            },
        },
    },
    SECTION_ADDITIONAL_INFO: {
        name: 'ADDITIONAL_INFO',
        type: 'section',
        options: {
            additionalInfoSectionType: {
                name: 'Appereance of ADDITIONAL_INFO',
                type: 'select',
                selectOptions:
                    'none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start',
                default: 'collapsible',
            },
            additionalInfoCaption: { name: 'Caption for ADDITIONAL_INFO', type: 'text', default: 'Additional Infos' },
            additionalInfoListType: {
                name: 'List type of ADDITIONAL_INFO',
                type: 'select',
                selectOptions: '/Default;plain/Plain',
                default: '',
            },
            additionalInfoListColumnCount: {
                name: 'Split the list into this number of columns',
                type: 'select',
                selectOptions: 'auto/Auto;1;2;3;4;5;6',
                default: 'auto',
            },
            additionalInfoListColumnWidth: {
                name: 'Do not go below this column width [px]',
                type: 'number',
                min: 0,
                max: 1200,
                step: 1,
                default: '',
            },
        },
    },
    SECTION_DEVICESPECIFIC: { name: 'Device Specific Options', type: 'section' },
};

//Extend iQontrolRoles with iQontrolRolesStandardOptions
for (iQontrolRole in iQontrolRoles) {
    var optionsObject = JSON.parse(JSON.stringify(iQontrolRolesStandardOptions));
    for (deviceSpecificOptionSection in iQontrolRoles[iQontrolRole].deviceSpecificOptions) {
        if (iQontrolRoles[iQontrolRole].deviceSpecificOptions[deviceSpecificOptionSection] == 'delete') {
            delete optionsObject[deviceSpecificOptionSection];
        } else {
            if (typeof optionsObject[deviceSpecificOptionSection] == 'undefined')
                optionsObject[deviceSpecificOptionSection] =
                    iQontrolRoles[iQontrolRole].deviceSpecificOptions[deviceSpecificOptionSection];
            for (deviceSpecificOption in iQontrolRoles[iQontrolRole].deviceSpecificOptions[deviceSpecificOptionSection]
                .options) {
                if (
                    iQontrolRoles[iQontrolRole].deviceSpecificOptions[deviceSpecificOptionSection].options[
                        deviceSpecificOption
                    ] == 'delete'
                ) {
                    delete optionsObject[deviceSpecificOptionSection].options[deviceSpecificOption];
                } else {
                    if (typeof optionsObject[deviceSpecificOptionSection].options == 'undefined')
                        optionsObject[deviceSpecificOptionSection].options = {};
                    if (
                        typeof optionsObject[deviceSpecificOptionSection].options[deviceSpecificOption] == 'undefined'
                    ) {
                        optionsObject[deviceSpecificOptionSection].options[deviceSpecificOption] =
                            iQontrolRoles[iQontrolRole].deviceSpecificOptions[deviceSpecificOptionSection].options[
                                deviceSpecificOption
                            ];
                    } else {
                        for (deviceSpecificOptionSetting in iQontrolRoles[iQontrolRole].deviceSpecificOptions[
                            deviceSpecificOptionSection
                        ].options[deviceSpecificOption]) {
                            optionsObject[deviceSpecificOptionSection].options[deviceSpecificOption][
                                deviceSpecificOptionSetting
                            ] =
                                iQontrolRoles[iQontrolRole].deviceSpecificOptions[deviceSpecificOptionSection].options[
                                    deviceSpecificOption
                                ][deviceSpecificOptionSetting];
                        }
                    }
                }
            }
        }
    }
    var optionsObjectFlat = {};
    iQontrolRoles[iQontrolRole].optionsDisplaySequence = [];
    for (section in optionsObject) {
        optionsObjectFlat[section] = { name: optionsObject[section].name, type: optionsObject[section].type };
        iQontrolRoles[iQontrolRole].optionsDisplaySequence.push(section);
        for (option in optionsObject[section].options) {
            optionsObjectFlat[option] = optionsObject[section].options[option];
            iQontrolRoles[iQontrolRole].optionsDisplaySequence.push(option);
        }
    }
    iQontrolRoles[iQontrolRole].options = JSON.parse(JSON.stringify(optionsObjectFlat));
}

//Declarations
const udef = 'undefined';
var previewLink;
var newConfig = false;
var iobrokerObjects;
var iobrokerObjectsReady = false;
var iobrokerObjectsReadyFunctions = [];
var dialogCodeEditorCodeMirror = false;
var dialogCodeEditorCodeMirrorChanged = false;
var modalZIndexCount = 2000;
var isReact = false;
var previewWindow = null;
var passphrase;
var devicesMarkDevice = null;

//Subsettings
var toolbar;
var views;
var lists;
var optionsLayoutDefaultIcons;
var optionsLayoutDefaultSymbols;
var version;

//++++++++++ GLOBAL FUNCTIONS ++++++++++
//Dialogs
function initDialog(id, saveCallback, initFunction) {
    var $dialog = $('#' + id);
    //Enhance dialog buttons with functions
    if (!$dialog.data('inited')) {
        $dialog.data('inited', true);
        $dialog.modal({
            dismissible: false,
        });
        $dialog.find('.btn-set').on('click', function () {
            let $dialog = $('#' + $(this).data('dialogid'));
            let saveCallback = $dialog.data('save-callback');
            if (typeof saveCallback === 'function') saveCallback();
            $dialog.data('save-callback', null);
        });
        $dialog.find('.btn-save').on('click', function () {
            let $dialog = $('#' + $(this).data('dialogid'));
            saveFromDialogAndPreview(true, false);
            //Save abort subsettings
        });
        $dialog.find('.btn-preview').on('click', function () {
            let $dialog = $('#' + $(this).data('dialogid'));
            let renderView = $(this).data('preview-render-view');
            let openDialog = $(this).data('preview-open-dialog');
            saveFromDialogAndPreview(false, true, true, renderView, openDialog);
            $dialog.find('.btn-close').data('abort-callback-necessary', true);
        });
        $dialog.find('.btn-close').on('click', function () {
            let $dialog = $('#' + $(this).data('dialogid'));
            if ($dialog.find('.btn-close').data('abort-callback-necessary')) {
                console.log('Abort callback: Restore subsettings and rebuild all open dialogs');
                $dialog.modal('close');
                setTimeout(function () {
                    //Restore subsettings
                    let abortSettings = $dialog.data('abort-settings');
                    if (abortSettings) {
                        toolbar = abortSettings.toolbar;
                        views = abortSettings.views;
                        lists = abortSettings.lists;
                        optionsLayoutDefaultIcons = abortSettings.optionsLayoutDefaultIcons;
                        optionsLayoutDefaultSymbols = abortSettings.optionsLayoutDefaultSymbols;
                    }
                    //Rebuild all open dialogs
                    $('.open')
                        .sort(function (a, b) {
                            return a.style.zIndex < b.style.zIndex;
                        })
                        .each(function () {
                            if ($(this) != $dialog) {
                                let initFunction = $(this).data('init-function');
                                if (typeof initFunction === 'function') initFunction();
                            }
                        });
                    saveFromDialogAndPreview(false, true, false);
                }, 75);
            }
        });
    }
    //Save some informations
    $dialog.find('.btn-close').data('abort-callback-necessary', false);
    $dialog.find('.btn-set, .btn-close, .btn-save, .btn-preview').data('dialogid', id);
    $dialog.data('save-callback', saveCallback);
    //Save abort subsettings
    var abortSettings = {};
    abortSettings.toolbar = JSON.parse(JSON.stringify(toolbar));
    abortSettings.views = JSON.parse(JSON.stringify(views));
    abortSettings.lists = JSON.parse(JSON.stringify(lists));
    abortSettings.optionsLayoutDefaultIcons = JSON.parse(JSON.stringify(optionsLayoutDefaultIcons));
    abortSettings.optionsLayoutDefaultSymbols = JSON.parse(JSON.stringify(optionsLayoutDefaultSymbols));
    $dialog.data('abort-settings', abortSettings);
    //call initFunction
    if (typeof initFunction == 'function') {
        initFunction();
        $dialog.data('init-function', initFunction);
        $dialog.modal('open');
        $dialog.css('z-index', modalZIndexCount++);
        $dialog.find('.modal-content').scrollTop(0);
    }
}

//Save from dialog and Preview
function saveFromDialogAndPreview(doSave, doPreview, focusPreview, renderView, openDialog) {
    $('.open')
        .sort(function (a, b) {
            return a.style.zIndex > b.style.zIndex;
        })
        .each(function () {
            let saveCallback = $(this).data('save-callback');
            if (typeof saveCallback == 'function') saveCallback();
        });
    if (doSave) {
        $('.dialog-config-buttons .btn-save').click();
        var abortSettings = {};
        abortSettings.toolbar = JSON.parse(JSON.stringify(toolbar));
        abortSettings.views = JSON.parse(JSON.stringify(views));
        abortSettings.lists = JSON.parse(JSON.stringify(lists));
        abortSettings.optionsLayoutDefaultIcons = JSON.parse(JSON.stringify(optionsLayoutDefaultIcons));
        abortSettings.optionsLayoutDefaultSymbols = JSON.parse(JSON.stringify(optionsLayoutDefaultSymbols));
        $('.open').each(function () {
            $(this).data('abort-settings', abortSettings);
        });
    }
    if (doPreview) {
        if (!previewWindow || previewWindow.closed) {
            previewWindow = window.open(
                previewLink +
                    '/index.html?mode=preview' +
                    (renderView ? '&renderView=' + renderView : '') +
                    (openDialog ? '&openDialog=' + openDialog : '') +
                    '&namespace=' +
                    adapter +
                    '.' +
                    instance +
                    (passphrase ? '&passphrase=' + passphrase : ''),
                'preview',
            );
        } else {
            previewWindow.postMessage(
                { command: 'updatePreview', renderView: renderView, openDialog: openDialog },
                '*',
            );
            if (focusPreview) previewWindow.focus();
        }
    }
}
var saveButtonMutationObserver;
function applySyncSaveFromDialogButtonsToSaveButton() {
    console.log('Starting saveButtonMutationObserver');
    if (saveButtonMutationObserver) {
        saveButtonMutationObserver.disconnect();
    } else {
        saveButtonMutationObserver = new MutationObserver(function (mutationList) {
            mutationList.forEach(function (mutation) {
                if (mutation.attributeName === 'class') {
                    var newClasses = mutation.target.className.split(' ');
                    if (newClasses.indexOf('disabled') > -1) $('.modal-action.btn-save').addClass('disabled');
                    else $('.modal-action.btn-save').removeClass('disabled');
                }
            });
        });
    }
    $('.dialog-config-buttons .btn-save').each(function () {
        saveButtonMutationObserver.observe(this, {
            attributes: true,
            attributeOldValue: true,
            childList: false,
            subtree: false,
        });
    });
}
window.addEventListener(
    'message',
    function (event) {
        if (event && event.data && event.data.command == 'getPreviewConfig') {
            save(function (obj) {
                event.source.postMessage(
                    {
                        command: 'getPreviewConfig',
                        value: obj,
                        getPreviewConfigCallbackId: event.data.getPreviewConfigCallbackId,
                    },
                    '*',
                );
            });
        }
    },
    false,
);

//SelectId
var selectId;
var selectIdImgPath = '../../lib/css/fancytree/';
function initSelectId(callback) {
    setTimeout(function () {
        $('#dialogSelectId').css('z-index', modalZIndexCount++);
    }, 100);
    if (selectId) {
        return callback(selectId);
    }
    var options = {
        noMultiselect: true,
        imgPath: selectIdImgPath,
        filter: { type: 'state' },
        name: 'scenes-select-state',
        texts: {
            select: _('Select'),
            cancel: _('Cancel'),
            all: _('All'),
            id: _('ID'),
            name: _('Name'),
            role: _('Role'),
            room: _('Room'),
            value: _('Value'),
            selectid: _('Select ID'),
            from: _('From'),
            lc: _('Last changed'),
            ts: _('Time stamp'),
            wait: _('Processing...'),
            ack: _('Acknowledged'),
            selectAll: _('Select all'),
            unselectAll: _('Deselect all'),
            invertSelection: _('Invert selection'),
        },
        columns: ['image', 'name', 'role', 'room'],
    };
    var toDo = function () {
        options.objects = iobrokerObjects;
        selectId = $('#dialogSelectId').selectId('init', options);
        callback(selectId);
    };
    if (iobrokerObjectsReady) {
        toDo();
    } else {
        iobrokerObjectsReadyFunctions.push(toDo);
    }
}

//Helper-Functions
function tryParseJSON(jsonString) {
    //Returns parsed object or false, if jsonString is not valid
    try {
        var o = JSON.parse(jsonString);
        // Handle non-exception-throwing cases:
        // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
        // but... JSON.parse(null) returns null, and typeof null === "object",
        // so we must check for that, too. Thankfully, null is falsey, so this suffices:
        if (o && typeof o === 'object') {
            return o;
        }
    } catch (e) {}
    return false;
}

function md5(inputString) {
    var hc = '0123456789abcdef';
    function rh(n) {
        var j,
            s = '';
        for (j = 0; j <= 3; j++) s += hc.charAt((n >> (j * 8 + 4)) & 0x0f) + hc.charAt((n >> (j * 8)) & 0x0f);
        return s;
    }
    function ad(x, y) {
        var l = (x & 0xffff) + (y & 0xffff);
        var m = (x >> 16) + (y >> 16) + (l >> 16);
        return (m << 16) | (l & 0xffff);
    }
    function rl(n, c) {
        return (n << c) | (n >>> (32 - c));
    }
    function cm(q, a, b, x, s, t) {
        return ad(rl(ad(ad(a, q), ad(x, t)), s), b);
    }
    function ff(a, b, c, d, x, s, t) {
        return cm((b & c) | (~b & d), a, b, x, s, t);
    }
    function gg(a, b, c, d, x, s, t) {
        return cm((b & d) | (c & ~d), a, b, x, s, t);
    }
    function hh(a, b, c, d, x, s, t) {
        return cm(b ^ c ^ d, a, b, x, s, t);
    }
    function ii(a, b, c, d, x, s, t) {
        return cm(c ^ (b | ~d), a, b, x, s, t);
    }
    function sb(x) {
        var i;
        var nblk = ((x.length + 8) >> 6) + 1;
        var blks = new Array(nblk * 16);
        for (i = 0; i < nblk * 16; i++) blks[i] = 0;
        for (i = 0; i < x.length; i++) blks[i >> 2] |= x.charCodeAt(i) << ((i % 4) * 8);
        blks[i >> 2] |= 0x80 << ((i % 4) * 8);
        blks[nblk * 16 - 2] = x.length * 8;
        return blks;
    }
    var i,
        x = sb(inputString),
        a = 1732584193,
        b = -271733879,
        c = -1732584194,
        d = 271733878,
        olda,
        oldb,
        oldc,
        oldd;
    for (i = 0; i < x.length; i += 16) {
        olda = a;
        oldb = b;
        oldc = c;
        oldd = d;
        a = ff(a, b, c, d, x[i + 0], 7, -680876936);
        d = ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = ff(c, d, a, b, x[i + 10], 17, -42063);
        b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = gg(b, c, d, a, x[i + 0], 20, -373897302);
        a = gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = hh(a, b, c, d, x[i + 5], 4, -378558);
        d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = hh(d, a, b, c, x[i + 0], 11, -358537222);
        c = hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = ii(a, b, c, d, x[i + 0], 6, -198630844);
        d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = ad(a, olda);
        b = ad(b, oldb);
        c = ad(c, oldc);
        d = ad(d, oldd);
    }
    return rh(a) + rh(b) + rh(c) + rh(d);
}

function scrollTo(target, speed, delay) {
    (function () {
        //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
        var _target = target;
        var _speed = speed || 750;
        var _delay = delay || 250;
        setTimeout(function () {
            target_position = $(target).get(0).offsetTop;
            $('.adapter-body').animate({ scrollTop: target_position }, speed);
        }, delay);
    })(); //<--End Closure
}

function removeDuplicates(array, ignoreEverythingAfterThisString) {
    //Removes duplicates from an array
    var seen = [];
    if (ignoreEverythingAfterThisString == '') ignoreEverythingAfterThisString = null;
    return array.filter(function (item) {
        if (seen.indexOf(JSON.stringify(item).split(ignoreEverythingAfterThisString)[0]) > -1) {
            return false;
        } else {
            seen.push(JSON.stringify(item).split(ignoreEverythingAfterThisString)[0]);
            return true;
        }
    });
}

function addCustomCSS(customCSS, customID) {
    customID = customID || 'default';
    $('head').append('<style class="customCSS_' + customID + '">' + customCSS + '</style>');
}

function removeCustomCSS(customID) {
    customID = customID || 'default';
    $('.customCSS_' + customID).remove();
}

function isValidColorString(colorString) {
    var style = new Option().style;
    style.color = colorString;
    return style.color && style.color != '';
}

//Add function to inputClear-Buttons and selectClear-Buttons
function initInputClear() {
    $('.inputClear')
        .off('click')
        .on('click', function () {
            if ($(this).data('default')) {
                $(this).prevAll('input').val($(this).data('default')).trigger('change');
            } else {
                $(this).prevAll('input').val('').removeClass('valid invalid').trigger('change');
            }
            M.validate_field($(this).prevAll('input'));
            M.updateTextFields();
        });
    $('.selectClear')
        .off('click')
        .on('click', function () {
            if ($(this).data('default')) {
                $(this).prevAll('.select-wrapper').children('select').val($(this).data('default'));
            } else {
                $(this).prevAll('.select-wrapper').children('select').val('');
            }
            $('select').select();
        });
}

//Symbolic links
function updateSymbolicLinks() {
    var changed = false;
    if (typeof views != udef && views.length > 0)
        views.forEach(function (view) {
            if (typeof view.devices != udef)
                view.devices.forEach(function (device) {
                    if (
                        typeof device.symbolicLinkFrom == 'object' &&
                        typeof device.symbolicLinkFrom.sourceView != udef &&
                        device.symbolicLinkFrom.sourceView !== '' &&
                        typeof device.symbolicLinkFrom.sourceDevice != udef &&
                        device.symbolicLinkFrom.sourceDevice !== ''
                    ) {
                        if (
                            views[device.symbolicLinkFrom.sourceView] &&
                            views[device.symbolicLinkFrom.sourceView].devices &&
                            typeof views[device.symbolicLinkFrom.sourceView].devices[
                                device.symbolicLinkFrom.sourceDevice
                            ] == 'object'
                        ) {
                            var newCommonRole =
                                views[device.symbolicLinkFrom.sourceView].devices[device.symbolicLinkFrom.sourceDevice]
                                    .commonRole;
                            if (device.commonRole != newCommonRole) {
                                console.log('Update device commonRole from symbolic link');
                                device.commonRole = newCommonRole;
                                changed = true;
                            }
                            var newStates = JSON.parse(
                                JSON.stringify(
                                    views[device.symbolicLinkFrom.sourceView].devices[
                                        device.symbolicLinkFrom.sourceDevice
                                    ].states,
                                ),
                            ); //Creates new array, not just a reference
                            if (JSON.stringify(device.states) != JSON.stringify(newStates)) {
                                console.log('Update device states from symbolic link');
                                device.states = newStates;
                                changed = true;
                            }
                            var newOptions = JSON.parse(
                                JSON.stringify(
                                    views[device.symbolicLinkFrom.sourceView].devices[
                                        device.symbolicLinkFrom.sourceDevice
                                    ].options,
                                ),
                            ); //Creates new array, not just a reference
                            if (JSON.stringify(device.options) != JSON.stringify(newOptions)) {
                                console.log('Update device options from symbolic link');
                                device.options = newOptions;
                                changed = true;
                            }
                        } else {
                            //Source Device not found! Remove symbolic link!
                            console.log('Remove symbolic link because source device is missing');
                            delete device.symbolicLinkFrom;
                            changed = true;
                        }
                    }
                });
        });
    return changed;
}

function changeSymbolicLinks(oldViewIndex, oldDeviceIndex, newViewIndex, newDeviceIndex, skip) {
    //If newViewIndex and newDeviceIndex are null, then all symbolic links to oldViewIndex/oldDeviceIndex are delted (converted to normal devices)
    //If oldDeviceIndex and newDeviceIndex are "*", then all devices are affected
    if (skip == null) skip = [];
    var changed = [];
    if (typeof views != udef && views.length > 0)
        views.forEach(function (view, viewIndex) {
            if (typeof view.devices != udef)
                view.devices.forEach(function (device, deviceIndex) {
                    if (
                        typeof device.symbolicLinkFrom == 'object' &&
                        typeof device.symbolicLinkFrom.sourceView != udef &&
                        device.symbolicLinkFrom.sourceView !== '' &&
                        typeof device.symbolicLinkFrom.sourceDevice != udef &&
                        device.symbolicLinkFrom.sourceDevice !== ''
                    ) {
                        //Valid Symbolic link
                        if (
                            device.symbolicLinkFrom.sourceView == oldViewIndex &&
                            (device.symbolicLinkFrom.sourceDevice == oldDeviceIndex || oldDeviceIndex == '*') &&
                            skip.findIndex(function (element) {
                                return (
                                    typeof element != udef && element.view == viewIndex && element.device == deviceIndex
                                );
                            }) == -1
                        ) {
                            if (newViewIndex == null || newDeviceIndex == null) {
                                console.log(
                                    'Remove symbolic link of device ' +
                                        viewIndex +
                                        '/' +
                                        deviceIndex +
                                        ' because source device ' +
                                        device.symbolicLinkFrom.sourceView +
                                        '/' +
                                        device.symbolicLinkFrom.sourceDevice +
                                        ' has been deleted [viewIndex/deviceIndex]',
                                );
                                delete device.symbolicLinkFrom;
                                changed.push({ view: viewIndex, device: deviceIndex });
                            } else {
                                console.log(
                                    'Change symbolic link of device ' +
                                        viewIndex +
                                        '/' +
                                        deviceIndex +
                                        ' from ' +
                                        device.symbolicLinkFrom.sourceView +
                                        '/' +
                                        device.symbolicLinkFrom.sourceDevice +
                                        ' to ' +
                                        newViewIndex +
                                        '/' +
                                        newDeviceIndex +
                                        ' [viewIndex/DeviceIndex]',
                                );
                                device.symbolicLinkFrom.sourceView = newViewIndex;
                                if (newDeviceIndex !== '*') device.symbolicLinkFrom.sourceDevice = newDeviceIndex;
                                changed.push({ view: viewIndex, device: deviceIndex });
                            }
                        }
                    }
                });
        });
    return changed;
}

function checkSymbolicLinks(sourceViewIndex, sourceDeviceIndex) {
    var destinations = [];
    if (typeof views != udef && views.length > 0)
        views.forEach(function (view, viewIndex) {
            if (typeof view.devices != udef)
                view.devices.forEach(function (device, deviceIndex) {
                    if (
                        typeof device.symbolicLinkFrom == 'object' &&
                        typeof device.symbolicLinkFrom.sourceView != udef &&
                        device.symbolicLinkFrom.sourceView !== '' &&
                        typeof device.symbolicLinkFrom.sourceDevice != udef &&
                        device.symbolicLinkFrom.sourceDevice !== ''
                    ) {
                        if (
                            device.symbolicLinkFrom.sourceView == sourceViewIndex &&
                            device.symbolicLinkFrom.sourceDevice == sourceDeviceIndex
                        ) {
                            destinations.push({ view: viewIndex, device: deviceIndex });
                        }
                    }
                });
        });
    return destinations;
}

//Combobox
var $enhanceTextInputToComboboxActualTarget;
function enhanceTextInputToCombobox(targetInput, options, iconsFromOption, onSelect) {
    //targetInput - string - selector for text-input-field to enhance
    //options - string - "value1/caption1/icon1;value2/caption2/icon2;[optgroup-caption];value3/caption3/icon3;..."
    //iconsFromOption - boolean - if true, the values will be used to generate links to icons (\ will be replaced by / an link will be preceded), if no icon is given in options
    //onSelect - function - function that will be called with the argument (value), if a value is selected
    options = options || '';
    options = options.split(';');
    var comboboxContent = '';
    options.forEach(function (option) {
        if (option.substring(0, 1) == '[' && option.substr(-1) == ']') {
            //Optgroup
            var caption = _(option.substring(1, option.length - 1));
            comboboxContent += "	<li class='divider' style='padding: 14px 4px 30px 4px; color:grey;' tabindex='-1'>";
            comboboxContent += '		' + caption + '&nbsp;';
            comboboxContent += '	</li>';
        } else {
            //Normal option
            var optionParts = option.split('/');
            var value = encodeURIComponent(optionParts[0]);
            var caption = '';
            if (optionParts.length > 1) {
                caption = optionParts[1];
            } else {
                caption = optionParts[0];
            }
            var icon = '';
            if (optionParts.length > 2) {
                icon = optionParts[2];
            } else if (iconsFromOption) {
                icon = option.split('/')[0].replace(/\\/g, '/').substring(1) || '';
                if (icon != '') icon = previewLink + icon;
            }
            comboboxContent += "	<li data-value='" + value + "'>";
            comboboxContent += "		<a href='#!'>";
            if (icon != '') {
                comboboxContent +=
                    "		<img src='" +
                    icon +
                    "' style='display: block; margin-bottom: 5px; min-width: 40px; max-width: 40px; max-height: 40px; width: auto; height: auto;' onerror='this.onerror=null; this.src=\"" +
                    previewLink +
                    '/./images/icons/various.png' +
                    '";\'>';
            }
            comboboxContent += '			' + caption + '&nbsp;';
            comboboxContent += '		</a>';
            comboboxContent += '	</li>';
        }
    });
    $(targetInput).css('padding', '0 25px 0 0').css('width', 'calc(100% - 25px)');
    $(targetInput).off('change', onChangeFunction).on('change', onChangeFunction);
    function onChangeFunction() {
        var $that = $(this);
        var $dropdownlist = $("ul[id='dropdown_" + encodeURIComponent(targetInput) + "_0']");
        var value = $that.val();
        var icon;
        $dropdownlist.find('li').each(function () {
            if ($(this).data('value') == encodeURIComponent((value || '').replace(/\//g, '\\'))) {
                icon = $(this).find('img').attr('src');
            }
        });
        if (icon) {
            $that
                .css('padding', '0 25px 0 30px')
                .css('width', 'calc(100% - 55px)')
                .nextAll('div.iconimage')
                .show()
                .find('img')
                .attr('src', icon);
        } else {
            $that
                .css('padding', '0 25px 0 0')
                .css('width', 'calc(100% - 25px)')
                .nextAll('div.iconimage')
                .hide()
                .find('img')
                .attr('src', '');
        }
    }
    $(targetInput).off('blur', onBlurFunction).on('blur', onBlurFunction);
    function onBlurFunction() {
        var that = this;
        setTimeout(function () {
            var _that = that;
            _that.scrollLeft = 100000;
            $(_that).trigger('change');
        }, 10);
    }
    $(targetInput).trigger('blur');
    $(targetInput).each(function (index, targetElement) {
        if (!$(this).parent('div').hasClass('combobox')) {
            $(this).next('label').addBack().wrapAll("<div class='combobox'></div>");
            var labelheight = $(this);
            var iconimage =
                "<div class='iconimage' style='display: none; position: absolute; left: 0; top: 6px; height: 25px; width: 25px;'><img src='' style='min-width: 25px; max-width: 25px; max-height: 25px; width: auto; height: auto; position: absolute; left: 0; top: 0; bottom: 0px; margin: auto 0;' /></div>";
            var dropdowntrigger =
                "<a class='comboboxDropdownTrigger waves-effect waves-teal btn-small btn-flat' data-target='dropdown_" +
                encodeURIComponent(targetInput) +
                '_' +
                index +
                "' href='#' onclick='console.log(\"Combobox dropdown clicked\"); $enhanceTextInputToComboboxActualTarget = $(this).prevAll(\"input\"); enhanceTextInputToComboboxScrollDropdownTo($(this).data(\"target\"), $(this).prevAll(\"input\").val());'><i class='material-icons comboboxDropdownTriggerArrow' style='font-size: 25px;'>arrow_drop_down</i></a>";
            $(this).after(iconimage).after(dropdowntrigger);
        }
        $(this).data('combobox-onselect', onSelect);
        $("ul[id='dropdown_" + encodeURIComponent(targetInput) + '_' + index + "']").remove(); //If there was an old dropdownlist remove it
        $(targetElement).after(
            "<ul id='dropdown_" + encodeURIComponent(targetInput) + '_' + index + "' class='dropdown-content'>...</ul>",
        );
    });
    $("ul[id='dropdown_" + encodeURIComponent(targetInput) + "_0']").html(comboboxContent); //Add comboboxContent to first targetInput (because of performance-reasons it is only saved to the first targetInput and not to all!)
    $('.comboboxDropdownTrigger').dropdown({
        alignment: 'right',
        constrainWidth: false,
        onOpenStart: function (event) {
            var target = $(event).data('target');
            $("ul[id='" + target + "']").html(
                $("ul[id='" + target.substring(0, target.lastIndexOf('_')) + "_0']").html(),
            ); //Copy comboboxContent from first targetInput
        },
        onItemClick: function (event) {
            enhanceTextInputToComboboxEntryToInput($(event).data('value'));
        },
    });
}
function enhanceTextInputToComboboxScrollDropdownTo(dropdownlist, value) {
    var $dropdownlist = $("ul[id='" + dropdownlist + "']");
    setTimeout(function () {
        var _$dropdownlist = $dropdownlist;
        _$dropdownlist.scrollTop(0);
    }, 20);
    setTimeout(function () {
        var _dropdownlist = dropdownlist;
        var _$dropdownlist = $dropdownlist;
        _$dropdownlist.find('li').each(function () {
            $(this).removeClass('grey lighten-3');
            if ($(this).data('value') == encodeURIComponent((value || '').replace(/\//g, '\\'))) {
                $(this).addClass('grey lighten-3');
                _$dropdownlist.scrollTop(_$dropdownlist.scrollTop() + $(this).position().top);
            }
        });
    }, 400);
}
function enhanceTextInputToComboboxEntryToInput(value) {
    var onSelect = $enhanceTextInputToComboboxActualTarget.data('combobox-onselect');
    if (decodeURIComponent(value).substring(0, 10) == '[VARIABLE]') {
        var variable = '';
        if (decodeURIComponent(decodeURIComponent(value)).indexOf('{}') > -1) {
            variable = prompt(_('Please enter datapoint id') + ':');
            if (variable == '') variable = null;
        }
        if (variable !== null) {
            value = decodeURIComponent(decodeURIComponent(value).replace('[VARIABLE]', '')).replace(
                '{}',
                '{' + variable + '}',
            );
            $enhanceTextInputToComboboxActualTarget.val(value).trigger('change').trigger('blur');
            if (onSelect) onSelect(value);
        }
    } else {
        value = decodeURIComponent(value).replace(/\\/g, '/');
        $enhanceTextInputToComboboxActualTarget.val(value).trigger('change').trigger('blur');
        if (onSelect) onSelect(value);
    }
}

//Colorpickers
function initColorpickers(onChange) {
    $('.MaterializeColorPicker').each(function () {
        if (!$(this).data('materialize-color-picker-initialized')) {
            var noColorSet = $(this).val() == '';
            $(this)
                .colorpicker()
                .on('changeColor', function (event) {
                    if (event.color)
                        $(this).css(
                            'border-right',
                            '10px solid rgba(' +
                                event.color.toRGB().r +
                                ', ' +
                                event.color.toRGB().g +
                                ', ' +
                                event.color.toRGB().b +
                                ', ' +
                                event.color.toRGB().a +
                                ')',
                        );
                });
            $(this)
                .colorpicker()
                .on('hidePicker', function (event) {
                    $(this).trigger('change');
                });
            $(this).on('change', function (event, noOnChange) {
                if ($(this).val() == '') {
                    $(this).css('border-right', '0px solid black');
                } else {
                    $(this).trigger('changeColor', noOnChange);
                }
                if (!noOnChange) onChange();
            });
            $(this).data('materialize-color-picker-initialized', true);
            if (noColorSet) $(this).val('');
        }
        $(this).trigger('change', 'noOnChange');
    });
}

//Objects
function getCommonName(object) {
    var name = false;
    if (object && typeof object.common != udef && typeof object.common.name != udef) {
        if (typeof object.common.name == 'object' && typeof object.common.name[systemLang] != udef) {
            name = object.common.name[systemLang];
        } else if (typeof object.common.name == 'object' && typeof object.common.name['en'] != udef) {
            name = object.common.name['en'];
        } else if (typeof object.common.name == 'string') {
            name = object.common.name;
        }
    }
    return name;
}

//Enumerations
var enumerations = {};
function getEnumerations(callback) {
    enumerations = {};
    for (id in iobrokerObjects) {
        if (id.indexOf('enum') == 0) {
            enumerations[id] = iobrokerObjects[id];
        }
    }
    callback && callback();
}
function getEnumerationName(enumeration) {
    var name = _(enumeration);
    if (
        enumerations[enumeration] &&
        typeof enumerations[enumeration].common != udef &&
        typeof enumerations[enumeration].common.name != udef
    ) {
        if (
            typeof enumerations[enumeration].common.name == 'object' &&
            typeof enumerations[enumeration].common.name[systemLang] != udef
        ) {
            name = enumerations[enumeration].common.name[systemLang];
        } else if (
            typeof enumerations[enumeration].common.name == 'object' &&
            typeof enumerations[enumeration].common.name['en'] != udef
        ) {
            name = _(enumerations[enumeration].common.name['en']);
        } else if (typeof enumerations[enumeration].common.name == 'string') {
            name = _(enumerations[enumeration].common.name);
        }
    }
    return name;
}

//History-Instances
var historyInstances = [];
function getHistoryInstances(callback) {
    (function () {
        //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
        var _callback = callback;
        var _toDo = function () {
            historyInstances = [];
            for (id in iobrokerObjects) {
                if (
                    id.indexOf('system.adapter.') == 0 &&
                    !isNaN(id.substr(id.lastIndexOf('.') + 1)) &&
                    iobrokerObjects[id] &&
                    iobrokerObjects[id].common &&
                    iobrokerObjects[id].common.type === 'storage'
                ) {
                    historyInstances.push(id.substring('system.adapter.'.length));
                }
            }
            _callback && _callback(historyInstances);
        };
        if (iobrokerObjectsReady) {
            _toDo();
        } else {
            iobrokerObjectsReadyFunctions.push(_toDo);
        }
    })(); //<--End Closure
}

//fixedEncodeURIComponents (encodes !, ', (, ), and *)
function fixedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16);
    });
}

//File-Operations
function uploadFile(file, path, callback) {
    if (typeof path == 'function') {
        callback = path;
        path = null;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
        //Closure--> to capture the file information.
        path = (path ? path + '/' : '') + file.name;
        var parts = path.split('/');
        var adapter = parts[1];
        parts.splice(0, 2);
        var data = e.target.result;
        const base64 = btoa(new Uint8Array(data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
        (function () {
            //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
            var _path = path;
            socket.emit('writeFile64', adapter, parts.join('/'), base64, function () {
                if (callback) callback(_path);
            });
        })(); //<--End Closure
    };
    reader.readAsArrayBuffer(file);
}
function uploadStringAsFile(string, filename, path, callback) {
    if (typeof path == 'function') {
        callback = path;
        path = null;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
        //Closure--> to capture the file information.
        if (filename.substr(0, 1) == '/') filename = filename.substr(1);
        path = (path ? path + '/' : '') + filename;
        var parts = path.split('/');
        var adapter = parts[1];
        parts.splice(0, 2);
        var data = e.target.result;
        const base64 = btoa(new Uint8Array(data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
        socket.emit('writeFile', adapter, parts.join('/'), base64, function () {
            if (callback) callback(filename);
        });
    };
    reader.readAsArrayBuffer(new Blob([string]));
}
function downloadFileAsString(filename, path, callback) {
    if (typeof path == 'function') {
        callback = path;
        path = null;
    }
    if (filename.substr(0, 1) == '/') filename = filename.substr(1);
    path = (path ? path + '/' : '') + filename;
    if (path[0] === '/') {
        var parts = path.split('/');
        adapter = parts[1];
        parts.splice(0, 2);
        path = parts.join('/');
    }
    socket.emit('readFile', adapter, path, function (error, fileData, mimeType) {
        if (!error && fileData) {
            if (callback) callback(fileData);
        }
    });
}
async function downloadFileAsStringAsync(filename, path) {
    return await new Promise(function (resolve) {
        if (filename.substr(0, 1) == '/') filename = filename.substr(1);
        path = (path ? path + '/' : '') + filename;
        if (path[0] === '/') {
            var parts = path.split('/');
            _adapter = parts[1];
            parts.splice(0, 2);
            path = parts.join('/');
        }
        socket.emit('readFile', _adapter, path, function (error, fileData, mimeType) {
            if (!error && fileData) {
                resolve(fileData);
            } else {
                resolve('');
            }
        });
    });
}
function saveStringAsLocalFile(string, type, mime, filename, addPrefix) {
    //type: charset=utf-8 or base64, mime: for example "text/json"
    if (addPrefix) {
        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        if (m < 10) m = '0' + m;
        d = date.getDate();
        if (d < 10) d = '0' + d;
        var dateText = y + '-' + m + '-' + d;
        filename = dateText + '_' + adapter + '_' + instance + '_' + (filename || '.txt');
    }
    filename = encodeURIComponent(filename || 'iqontrol.txt');
    var dataString =
        'data:' + (mime || 'text/plain') + ';' + (type || 'charset=utf-8') + ',' + encodeURIComponent(string);
    var saveAnchorNode = document.createElement('a');
    saveAnchorNode.setAttribute('opacity', 0);
    saveAnchorNode.setAttribute('href', dataString);
    saveAnchorNode.setAttribute('download', filename);
    document.body.appendChild(saveAnchorNode);
    saveAnchorNode.click();
    saveAnchorNode.remove();
}
function loadLocalFileAsString(accept, callback) {
    //accept: for example ".txt, .json, image/*"
    if (typeof accept == 'function') {
        callback = accept;
        accept = '.*';
    }
    if (typeof callback !== 'function') return;
    var loadInputNode = document.createElement('input');
    loadInputNode.setAttribute('opacity', 0);
    loadInputNode.setAttribute('type', 'file');
    loadInputNode.setAttribute('accept', accept);
    loadInputNode.addEventListener(
        'change',
        function (event) {
            if (!window.FileReader) {
                // Browser is not compatible
                alert(_('Browser not compatible'));
                return;
            }
            var reader = new FileReader();
            reader.onload = function (_event) {
                if (_event.target.readyState != 2) return;
                if (_event.target.error) {
                    alert(_('Error while reading file'));
                    return;
                }
                callback(_event.target.result);
            };
            reader.readAsText(event.target.files[0]);
        },
        false,
    );
    document.body.appendChild(loadInputNode);
    loadInputNode.click();
    loadInputNode.remove();
}
function loadLocalFileAsArrayBuffer(accept, callback) {
    //accept: for example ".txt, .json, image/*"
    if (typeof accept == 'function') {
        callback = accept;
        accept = '.*';
    }
    if (typeof callback !== 'function') return;
    var loadInputNode = document.createElement('input');
    loadInputNode.setAttribute('opacity', 0);
    loadInputNode.setAttribute('type', 'file');
    loadInputNode.setAttribute('accept', accept);
    loadInputNode.addEventListener(
        'change',
        function (event) {
            if (!window.FileReader) {
                // Browser is not compatible
                alert(_('Browser not compatible'));
                return;
            }
            var reader = new FileReader();
            reader.onload = function (_event) {
                if (_event.target.readyState != 2) return;
                if (_event.target.error) {
                    alert(_('Error while reading file'));
                    return;
                }
                callback(_event.target.result);
            };
            reader.readAsArrayBuffer(event.target.files[0]);
        },
        false,
    );
    document.body.appendChild(loadInputNode);
    loadInputNode.click();
    loadInputNode.remove();
}
function readDir(path, callback) {
    //callback(err, obj)
    var parts = path.split('/');
    var adapter = parts[1];
    parts.splice(0, 2);
    socket.emit('readDir', adapter, parts.join('/'), callback);
}
function readDirAsync(path) {
    return new Promise(resolve => {
        readDir(path, function (err, obj) {
            if (err) console.log(JSON.stringify(err));
            resolve(err);
        });
    });
}
function readDirAsZip(path, callback) {
    var pathWithoutSlashNamespace = path.substring(namespace.length + 1);
    if (pathWithoutSlashNamespace.substr(-1) == '/')
        pathWithoutSlashNamespace = pathWithoutSlashNamespace.substr(0, pathWithoutSlashNamespace.length - 1);
    socket.emit(
        'sendToHost',
        common.host,
        'readDirAsZip',
        { id: namespace, name: pathWithoutSlashNamespace, options: { settings: false } },
        function (data) {
            callback(data.error || null, data.data || null);
        },
    );
}
function writeDirAsZip(path, base64Zip, callback) {
    //xxx not working properly xxx
    var pathWithoutSlashNamespace = path.substring(namespace.length + 1);
    socket.emit(
        'sendToHost',
        common.host,
        'writeDirAsZip',
        { id: namespace, name: pathWithoutSlashNamespace, data: base64Zip },
        function (data) {
            callback(data.error || null, null);
        },
    );
}
function deleteFile(path, callback) {
    var parts = path.split('/');
    var adapter = parts[1];
    parts.splice(0, 2);
    socket.emit('deleteFile', adapter, parts.join('/'), function (err) {
        if (err) console.log(JSON.stringify(err));
        if (callback) callback(err);
    });
}
function renameFile(path, newPath, callback) {
    var newDir = newPath.substring(0, newPath.lastIndexOf('/'));
    createDir(newDir, function () {
        var parts = path.split('/');
        var adapter = parts[1];
        var newParts = newPath.split('/');
        var newAdapter = newParts[1];
        if (adapter != newAdapter) {
            newParts.splice(1, 0, adapter, '..'); //inserts adapter and ".." at index 1 (and removes 0 elements)
            newPath = newParts.join('/'); //results in /adapter/../newadapter/path -> this trick is necessary, because the socket cant directly move files between two adapters
        }
        parts.splice(0, 2);
        newParts.splice(0, 2);
        //needs admin >5.0.3
        socket.emit('renameFile', adapter, parts.join('/'), newParts.join('/'), function (err) {
            if (err) console.log(JSON.stringify(err));
            if (callback) callback(err);
        });
    });
}
function renameFileAsync(oldPath, newPath) {
    return new Promise(resolve => {
        renameFile(oldPath, newPath, function (err, obj) {
            if (err) console.log(JSON.stringify(err));
            resolve(err);
        });
    });
}
async function createDir(path, callback) {
    if (path.substr(-1) == '/') path = path.substr(0, path.length - 1);
    var parts = path.split('/');
    var adapter = parts[1];
    parts.splice(0, 2);
    socket.emit('mkdir', adapter, parts.join('/'), function (err) {
        if (err) console.log(JSON.stringify(err));
        if (callback) callback(err);
    });
}
function createDirAsync(path) {
    return new Promise(resolve => {
        createDir(path, function (err, obj) {
            if (err) console.log(JSON.stringify(err));
            resolve(err);
        });
    });
}
async function checkDirExistance(path) {
    var result = await readDirAsync(path);
    if (result == null) return true;
    else return false;
}

/************** LOAD ********************************************************
 *** This will be called by the admin adapter when the settings page loads ***
 ****************************************************************************/
async function load(settings, onChange) {
    //++++++++++ START ++++++++++
    //Loading begins
    var loading = true;

    //Hide Settings
    console.log('Loading iQontrol Settings');
    $('.hideOnLoad').hide();
    $('.showOnLoad').show();

    //If react, make some css adjustments
    isReact = window.parent.adapterName === 'admin';
    if (isReact) {
        var customCSS = '';
        customCSS += '.table-values tr:nth-child(2n) { background-color: rgba(0,0,0,0.04) !important; }';
        customCSS += '.table-values.highlight > tbody > tr:hover { background-color: rgba(0,0,0,0.08) !important; }';
        customCSS +=
            '.table-values.highlight > tbody > tr:nth-child(2n):hover { background-color: rgba(0,0,0,0.08) !important; }';
        customCSS += '.table-values th { background-color: rgba(0,0,0,0.1) !important; color: #1d1d1d !important; }';

        customCSS += '.title { background-color: #164477; }';

        customCSS += '.m .tabs .tab a { color: rgba(0, 0, 0, 0.5); }';
        customCSS += '.m .tabs .tab a:hover { color: rgba(0, 0, 0, 0.86); }';
        customCSS += '.m .tabs .tab a.active { color: #164477; }';
        customCSS += '.m .tabs .active { border-bottom: 2px solid #164477; }';

        customCSS += '.m nav { background-color: #3399cc; }';

        customCSS += '.m .btn, .m .btn-small { background-color: #e0e0e0; color: #000000; }';
        customCSS += '.m .btn:hover, .m .btn-small:hover { background-color: #d5d5d5; }';
        customCSS +=
            '.m .btn.disabled, .m .btn-small.disabled { background-color: rgba(0, 0, 0, 0.12) !important; color: rgba(0, 0, 0, 0.26) !important; }';

        customCSS += '.m .btn-floating { background-color: transparent; box-shadow: none; color: #000000; }';
        customCSS += '.m .btn-floating:hover { background-color: rgba(0,0,0,0.08); }';
        customCSS += '.m .btn-floating.selectClear { background-color: #ffffff; }';
        customCSS += '.m .btn-floating.selectClear:hover { background-color: #ebebeb; }';
        customCSS += '.m .btn-floating i { color: #000000; transition: color 0.3s; }';
        customCSS += '.m .btn-floating.red  { background-color: transparent !important; }';
        customCSS += '.m .btn-floating.red:hover { background-color: red !important; }';
        customCSS += '.m .btn-floating.red:hover i { color: #ffffff; }';
        customCSS +=
            '.m .btn-floating.disabled { background-color: transparent !important; color: rgba(0, 0, 0, 0.26) !important; }';
        customCSS += '.m .btn-floating.disabled i { color: rgba(0, 0, 0, 0.26) !important; }';

        customCSS +=
            '.dialog-select-object-ids .material .main-toolbar-table .panel-button { background-color: transparent; }';
        customCSS +=
            '.dialog-select-object-ids .material .main-toolbar-table .panel-button:hover { background-color: rgba(0,0,0,0.08); }';
        customCSS += '.dialog-select-object-ids .material .main-toolbar-table .panel-button i { color: #757575; }';
        customCSS += '.dialog-select-object-ids .objects-list-table { background-color: #ffffff; }';
        customCSS += '.dialog-select-object-ids .objects-list-table thead { display: none; }';
        customCSS += '.dialog-select-object-ids table.objects-list-table tr { border: none !important; }';
        customCSS +=
            '.dialog-select-object-ids table.objects-list-table tr:hover { background-color: #3399cc; outline: none; color: #ffffff; }';
        customCSS += '.dialog-select-object-ids table.objects-list-table tr:hover .fancytree-title { color: #ffffff; }';
        customCSS +=
            '.dialog-select-object-ids table.objects-list-table tr.fancytree-active { background-color: #236b8e !important; outline: none !important; color: #ffffff !important; }';
        customCSS +=
            '.dialog-select-object-ids table.objects-list-table tr.fancytree-active .fancytree-title { color: #ffffff; }';
        customCSS += '.dialog-select-object-ids table.objects-list-table td { border: none !important; }';

        customCSS += '.m .dropdown-content li>span { color: rgba(0, 0, 0, 0.86); }';
        customCSS += '.m .dropdown-content li>a { color: rgba(0, 0, 0, 0.86); }';
        customCSS +=
            '.m [type=checkbox].filled-in:checked+span:not(.lever):after { border: #164477; background-color: #164477; }';
        customCSS +=
            '.m [type=radio].with-gap:checked+span:after, .m [type=radio]:checked+span:after { background-color: #164477; }';
        customCSS +=
            '.m [type=radio].with-gap:checked+span:after, .m [type=radio].with-gap:checked+span:before, .m [type=radio]:checked+span:after { border: 2px solid #164477; }';

        customCSS +=
            '.m.react-dark .btn, .m.react-dark .btn-small, .m.react-dark button.btn i, .m.react-dark button.btn-small i { background-color: #272727; }';
        customCSS +=
            '.m.react-dark .dialog-select-container .main-header-table, .m.react-dark .dialog-select-container .main-header-table tr, .m.react-dark .dialog-select-container .objects-list-table { background: #272727!important; }';
        customCSS +=
            '.m.react-dark .dropdown-content li.grey.lighten-3, .m.react-dark .dropdown-content li.selected, .m.react-dark .dropdown-content li:hover { background-color: #4c4c4c !important; }';
        customCSS += '.m.react-dark .dropdown-content li.divider { background-color: #626262; }';

        customCSS +=
            '.m.react-dark .background_and_overlay { background-color: #272727; box-shadow: 0 0 9px 20px #272727; }';

        addCustomCSS(customCSS, 'reactCSS');

        $('.table-button-add').addClass('grey lighten-2');

        var selectIdImgPath = './fancytree/react/';
        $('#fancytreeCSSLink').attr('href', './fancytree/react/ui.fancytree.min.css');

        if ($('.m.adapter-container').hasClass('react-dark')) $('.m.material-dialogs').addClass('react-dark');
    }

    //If tab, hide close buttons
    if (window.location.search.indexOf('noCloseButtons') !== -1)
        addCustomCSS('.btn-save-close, .btn-cancel { visibility: hidden; }', 'noCloseButtons');

    //Create a helper for sortable tables with preserved width of cells
    var fixHelper = function (e, ui) {
        ui.children().each(function () {
            $(this).width($(this).width()).css({
                'background-color': 'rgba(180,180,180,0.75)',
                'box-shadow': '-5px 5px 5px 0px rgba(180,180,180,0.75)',
            });
        });
        return ui;
    };

    //Get inbuiltIcons
    var inbuiltIcons = [];
    for (iconPreset in iconPresets) {
        let presetIcons = [];
        for (iconEquivalent in iconPresets[iconPreset].iconEquivalents) {
            presetIcons = presetIcons.concat(iconPresets[iconPreset].iconEquivalents[iconEquivalent]);
        }
        presetIcons.sort();
        inbuiltIcons = inbuiltIcons.concat(presetIcons);
    }
    inbuiltIcons = removeDuplicates(inbuiltIcons);

    //Init Colorpickers
    initColorpickers(onChange);

    //Init CodeMirror
    dialogCodeEditorCodeMirror = CodeMirror.fromTextArea($('#dialogCodeEditorCode')[0], {
        lineNumbers: true,
        theme: 'material',
        viewportMargin: Infinity,
        indentUnit: 4,
        indentWithTabs: true,
    });
    dialogCodeEditorCodeMirror.on('change', function () {
        dialogCodeEditorCodeMirrorChanged = true;
        $('#dialogCodeEditor .btn-set').removeClass('disabled');
    });
    $('#dialogCodeEditor .btn-set').on('click', function () {
        if (confirm(_('Overwrite file?'))) {
            uploadStringAsFile(
                dialogCodeEditorCodeMirror.getValue(),
                $('#dialogCodeEditorFileName').text(),
                userfilesImagePath,
                function (name) {
                    dialogCodeEditorCodeMirrorChanged = false;
                    $('#dialogCodeEditor .btn-set').addClass('disabled');
                },
            );
        }
    });
    $('#dialogCodeEditor .btn-close').on('click', function () {
        if (dialogCodeEditorCodeMirrorChanged) {
            if (confirm(_('You have unsaved changes. Close anyway?'))) $('#dialogCodeEditor').modal('close');
        } else {
            $('#dialogCodeEditor').modal('close');
        }
    });

    //Add function to inputClear-Buttons and selectClear-Buttons
    initInputClear();

    //Select elements with id=key and class=value and insert value
    if (!settings) return;
    $('.value').each(function () {
        var $key = $(this);
        var id = $key.attr('id');
        if ($key.attr('type') === 'checkbox') {
            $key.prop('checked', settings[id]);
            //do not call onChange direct, because onChange could expect some arguments
            $key.on('change', () => onChange());
        } else {
            $key.val(settings[id]);
            //do not call onChange direct, because onChange could expect some arguments
            $key.on('change keyup', function (event, noOnChange) {
                if (!noOnChange) onChange();
            });
        }
    });

    //Get Subsettings
    //!!! If more subsettings are added - remember to add them to initDialog, saveFromDialogAndPreview, save-function and to backup/restore-section as well!!!
    if (
        !settings.views &&
        !settings.toolbar &&
        confirm(
            _(
                'No configuration found. Should a demo-config be loaded? (Otherwise you will get an empty configuration).',
            ),
        )
    ) {
        toolbar = settings.toolbar || settings.demotoolbar || [];
        views = settings.views || settings.demoviews || [];
        lists = settings.lists || settings.demolists || [];
        optionsLayoutDefaultIcons = settings.optionsLayoutDefaultIcons || settings.demooptionsLayoutDefaultIcons || {};
        optionsLayoutDefaultSymbols =
            settings.optionsLayoutDefaultSymbols || settings.demooptionsLayoutDefaultSymbols || {};
        version = settings.version || 0;
        alert(_("Don't forget to save the configuration now, otherwise it will be lost."));
        newConfig = true;
    } else {
        toolbar = settings.toolbar || [];
        views = settings.views || [];
        lists = settings.lists || [];
        optionsLayoutDefaultIcons = settings.optionsLayoutDefaultIcons || {};
        optionsLayoutDefaultSymbols = settings.optionsLayoutDefaultSymbols || {};
        version = settings.version || 0;
        newConfig = false;
    }

    //Backward-Compatibility: Transfer old options to new options
    views.forEach(function (view) {
        (view.devices || []).forEach(function (device) {
            if (typeof device.options != 'object') device['options'] = [];
            if (!device.options.find(element => element.option === 'clickOnTileAction')) {
                var clickOnTileToggles = (device.options || []).find(
                    element => element.option === 'clickOnTileToggles',
                );
                var clickOnTileOpensDialog = (device.options || []).find(
                    element => element.option === 'clickOnTileOpensDialog',
                );
                var value = null;
                if (
                    clickOnTileToggles &&
                    typeof clickOnTileToggles.value != udef &&
                    clickOnTileToggles.value == 'true'
                ) {
                    value = 'toggle';
                } else if (
                    clickOnTileOpensDialog &&
                    typeof clickOnTileOpensDialog.value != udef &&
                    clickOnTileOpensDialog.value == 'true'
                ) {
                    value = 'openDialog';
                } else if (device.commonRole && device.commonRole == 'iQontrolExternalLink') {
                    value = 'openURLExternal';
                }
                if (value) {
                    device.options.push({ option: 'clickOnTileAction', type: 'select', value: value });
                    newConfig = true;
                }
                var i = (device.options || []).findIndex(element => element.option === 'clickOnTileToggles');
                if (i > -1) {
                    device.options.splice(i, 1);
                    newConfig = true;
                }
                i = (device.options || []).findIndex(element => element.option === 'clickOnTileOpensDialog');
                if (i > -1) {
                    device.options.splice(i, 1);
                    newConfig = true;
                }
            }
            if (!device.options.find(element => element.option === 'clickOnIconAction')) {
                var clickOnIconToggles = (device.options || []).find(
                    element => element.option === 'clickOnIconToggles',
                );
                var clickOnIconOpensDialog = (device.options || []).find(
                    element => element.option === 'clickOnIconOpensDialog',
                );
                var value = null;
                if (
                    clickOnIconToggles &&
                    typeof clickOnIconToggles.value != udef &&
                    clickOnIconToggles.value == 'true'
                ) {
                    value = 'toggle';
                } else if (
                    clickOnIconOpensDialog &&
                    typeof clickOnIconOpensDialog.value != udef &&
                    clickOnIconOpensDialog.value == 'true'
                ) {
                    value = 'openDialog';
                } else if (device.commonRole && device.commonRole == 'iQontrolExternalLink') {
                    value = 'openURLExternal';
                }
                if (value) {
                    device.options.push({ option: 'clickOnIconAction', type: 'select', value: value });
                    newConfig = true;
                }
                var i = (device.options || []).findIndex(element => element.option === 'clickOnIconToggles');
                if (i > -1) {
                    device.options.splice(i, 1);
                    newConfig = true;
                }
                i = (device.options || []).findIndex(element => element.option === 'clickOnIconOpensDialog');
                if (i > -1) {
                    device.options.splice(i, 1);
                    newConfig = true;
                }
            }
        });
    });

    //Set initial values of further variables
    var images = [];
    var imagesDirs = [];
    var devicesSelectedView = -1;

    //Update all Colorpickers
    $('.MaterializeColorPicker').trigger('change', 'noOnChange');

    //Init imageUpload
    initImageUpload();

    //Init ChannelDetector
    var channelDetector = new ChannelDetector();

    //Get Link of best fitting web-adapter
    console.log('getLink of best fitting web-adapter');
    getExtendableInstances(async function (result) {
        if (result) {
            //Detect connection over iobroker.net or iobroker.pro
            var isIobrokerPro = false;
            if (
                location.hostname.toLowerCase() == 'iobroker.net' ||
                location.hostname.toLowerCase() == 'iobroker.pro'
            ) {
                //Connection over iobroker.net or iobroker.pro
                console.log('Connection over iobroker.net or iobroker.pro detected...');
                isIobrokerPro = true;
            }

            //Find best fitting web-Adapter
            var bestInstance = 0;
            var goalSecure = location.protocol == 'https:';
            var goalSecureFound = false;
            var goalSocketFound = false;
            var goalForceWebSocketsFound = false;
            for (i = 0; i < result.length; i++) {
                if (result[i].native.secure == goalSecure) {
                    if (!goalSecureFound) {
                        goalSecureFound = true;
                        bestInstance = i;
                    }
                    if (result[i].native.socketio == '') {
                        if (!goalSocketFound) {
                            goalSocketFound = true;
                            bestInstance = i;
                        }
                        if (result[i].native.forceWebSockets == false) {
                            if (!goalForceWebSocketsFound) {
                                goalForceWebSocketsFound = true;
                                bestInstance = i;
                            }
                        }
                    }
                }
            }
            if (!(goalSocketFound && goalForceWebSocketsFound) && !isIobrokerPro) {
                console.log('Could not find any web-adapter with integrated socketIO and disabled Force Web-Sockets');
            }

            //Create Link from best fitting web-adapter
            if (isIobrokerPro) {
                //Connection over iobroker.net or iobroker.pro - connect without ports!
                previewLink = location.protocol + '//' + location.hostname + '/iqontrol';
                var connectionLink = location.protocol + '//' + location.hostname;
                var forceWebSocket = false;
            } else {
                //Direct connection
                previewLink =
                    (result[bestInstance].native.secure ? 'https://' : 'http://') +
                    location.hostname +
                    ':' +
                    result[bestInstance].native.port +
                    '/iqontrol';
                var connectionLink =
                    (result[bestInstance].native.secure ? 'https://' : 'http://') +
                    location.hostname +
                    ':' +
                    result[bestInstance].native.port;
                var forceWebSockets = result[bestInstance].native.forceWebSockets;
            }
            console.log('Got Link: ' + previewLink);
            //Add and enhance preview buttons
            $('.m .dialog-config-buttons .btn-save').before(
                '<a class="btn btn-preview" style="margin: 0 -10px 0 10px;"><img src="iqontrol.png" style="height:26px; margin: 5px -10px 5px -10px;"></a>',
            );
            $('.m .dialog-config-buttons .btn-preview').on('click', function () {
                saveFromDialogAndPreview(false, true, true);
            });
            $('img.mainLink')
                .on('click', function () {
                    saveFromDialogAndPreview(false, true, true);
                })
                .css('cursor', 'pointer');
            $('a.mainLink').attr(
                'href',
                previewLink +
                    '/index.html?namespace=' +
                    adapter +
                    '.' +
                    instance +
                    (passphrase ? '&passphrase=' + passphrase : ''),
            );

            //Add Roles to dialogDeviceEditCommonRole-Selectbox
            $('#dialogDeviceEditCommonRole')
                .empty()
                .append('<option disabled selected value>' + _('Select Role') + '</option>');
            for (var element in iQontrolRoles) {
                $('#dialogDeviceEditCommonRole').append(
                    "<option value='" +
                        element +
                        "' data-icon='" +
                        (iQontrolRoles[element].icon ? previewLink + iQontrolRoles[element].icon : '') +
                        "'>" +
                        _(iQontrolRoles[element].name) +
                        '</option>',
                );
            }
            $('#dialogDeviceEditCommonRole').select();

            //Signal to admin, that no changes yet
            if (!newConfig) onChange(false);

            //Sync saveFromDialogAndPreview-buttons to save button
            applySyncSaveFromDialogButtonsToSaveButton();

            //Create /usericons, /usersymbols, /userwidgets and /userfonts
            var createSpecialDirs = ['/usericons', '/usersymbols', '/userwidgets', '/userfonts'];
            for (i = 0; i < createSpecialDirs.length; i++) {
                var dirname = createSpecialDirs[i];
                console.log('Check directory ' + userfilesImagePath + dirname);
                var dirExistance = await checkDirExistance(userfilesImagePath + dirname);
                console.log(dirExistance);
                if (!dirExistance) {
                    console.log('Creating directory ' + userfilesImagePath + dirname);
                    await createDirAsync(userfilesImagePath + dirname);
                }
            }

            //Get images
            console.log('getImages');
            getImages(async function () {
                //Show Settings
                console.log('All settings loaded. Adapter ready.');
                $('.hideOnLoad').show();
                $('.showOnLoad').hide();
                loading = false;

                //Reinitialize all the Materialize labels on the page if you are dynamically adding inputs:
                if (M) M.updateTextFields();

                //Add warning to native config save button
                $('.adapter-config-save').on('click', function () {
                    alert(
                        _(
                            'Warning: This does not save the complete configuration of iQontrol. Please use the functions under Options - Backup/Restore for backups!',
                        ),
                    );
                });

                //Get iobrokerObjects
                getIobrokerObjects();

                //Warn if Admin-Version is too low
                var toDo = function () {
                    if (isReact) {
                        var warnIfLE = '5.0.8';
                    } else {
                        var warnIfLE = '5.0.6';
                    }
                    if (
                        parseInt(
                            (
                                (iobrokerObjects &&
                                    iobrokerObjects['system.adapter.admin'] &&
                                    iobrokerObjects['system.adapter.admin'].common &&
                                    iobrokerObjects['system.adapter.admin'].common.version) ||
                                '0'
                            )
                                .split('.')
                                .join(''),
                        ) <= warnIfLE.split('.').join('')
                    )
                        alert(
                            _(
                                'Some operations are only supported by admin versions > %s. Please update your admin-adapter!',
                                warnIfLE,
                            ),
                        );
                };
                if (iobrokerObjectsReady) {
                    toDo();
                } else {
                    iobrokerObjectsReadyFunctions.push(toDo);
                }
            });
        } else {
            alert(_('Error: No web-adapter found!'));
        }
    });

    function getIobrokerObjects() {
        console.log('Getting ioBroker Objects...');
        $('.loadingObjects').show();
        if (!iobrokerObjectsReady) {
            var toDo = function () {
                console.log('Subscribing to objectChange');
                socket.on('objectChange', function (id, obj) {
                    if (obj) iobrokerObjects[id] = obj;
                    else if (obj == null) delete iobrokerObjects[id];
                });
            };
            iobrokerObjectsReadyFunctions.push(toDo);
        }
        iobrokerObjectsReady = false;
        if (parent && parent.gMain && typeof parent.gMain.objects == 'object') {
            console.log('...assigning ioBroker Objects via parent.gMain.objects...');
            iobrokerObjects = Object.assign({}, parent.gMain.objects);
            iobrokerObjectsReady = true;
            if (iobrokerObjectsReadyFunctions.length)
                console.log(
                    'There are some functions that were buffered while fetching the ioBroker Objects. They will be executed now...',
                );
            for (i = 0; i < iobrokerObjectsReadyFunctions.length; i++) {
                if (typeof iobrokerObjectsReadyFunctions[i] == 'function') iobrokerObjectsReadyFunctions[i]();
            }
            iobrokerObjectsReadyFunctions = [];
            $('.loadingObjects').hide();
            console.log('ioBroker Objects ready.');
        } else {
            setTimeout(function () {
                console.log('...fetching ioBroker Objects via socket...');
                $('.loadingObjects').show();
                socket.emit('getObjects', function (err, _objs) {
                    iobrokerObjects = _objs;
                    iobrokerObjectsReady = true;
                    if (iobrokerObjectsReadyFunctions.length)
                        console.log(
                            'There are some functions that were buffered while fetching the ioBroker Objects. They will be executed now...',
                        );
                    for (i = 0; i < iobrokerObjectsReadyFunctions.length; i++) {
                        if (typeof iobrokerObjectsReadyFunctions[i] == 'function') iobrokerObjectsReadyFunctions[i]();
                    }
                    iobrokerObjectsReadyFunctions = [];
                    $('.loadingObjects').hide();
                    console.log('ioBroker Objects ready.');
                });
            }, 1000);
        }
    }

    //++++++++++ TABS ++++++++++
    //Enhance Tabs with onShow-Function
    $('ul.tabs li a').on('click', function () {
        //Scroll tab to middle
        $tab = $(this);
        $parent = $(this).parents('.tabs');
        var tabLeft = $tab.offset().left - $parent.offset().left + $parent.scrollLeft();
        var tabWidth = $tab.innerWidth();
        var parentWidth = $parent.innerWidth();
        $parent.animate({ scrollLeft: tabLeft + tabWidth / 2 - parentWidth / 2 }, 250);
        //Load onTabShow-Function
        onTabShow($(this).attr('href'));
    });
    function onTabShow(tabId) {
        console.log('Open tab: ' + tabId);
        switch (tabId) {
            case '#tabViews':
                loadViews();
                break;

            case '#tabDevices':
                loadDevices();
                break;

            case '#tabToolbar':
                loadToolbar();
                break;

            case '#tabImages':
                loadImages();
                break;

            case '#tabLists':
                loadLists();
                break;

            case '#tabOptions':
                loadOptions();
                break;
        }
    }

    //++++++++++ VIEWS ++++++++++
    //Load Views
    function loadViews() {
        //Fill Table
        values2table('tableViews', views, onChange, onTableViewsReady);

        //Fill Selectbox ViewsAutocreateEnumerations
        console.log('Loading Enumerations...');
        $('#viewsAutocreateButton').addClass('disabled');
        $('#viewsAutocreateButtonProgress').show();
        var toDo = function () {
            getEnumerations(function () {
                if (enumerations) {
                    var enumerationsMain = Object.keys(enumerations);
                    enumerationsMain = enumerationsMain.filter(function (element) {
                        //Filter for main Enumerations (that are elements, that have sub-enumerations)
                        if (
                            enumerationsMain.filter(function (_element) {
                                return _element.indexOf(element + '.') == 0;
                            }).length > 0
                        )
                            return true;
                        else return false;
                    });
                    $('#dialogViewsAutocreateEnumerationMain')
                        .empty()
                        .append('<option disabled selected value>' + _('Select Enumeration') + '</option>');
                    enumerationsMain.forEach(function (enumeration, index) {
                        var name = getEnumerationName(enumeration);
                        $('#dialogViewsAutocreateEnumerationMain').append(
                            "<option value='" + enumeration + "'>" + name + '</option>',
                        );
                    });
                    $('#dialogViewsAutocreateEnumerationMain').select();
                    $('#viewsAutocreateButton').removeClass('disabled');
                    $('#viewsAutocreateButtonProgress').hide();
                    console.log('Enumerations ready.');
                } else {
                    if (error) console.log('Error getting enumerations: ' + error);
                    else console.log('There are no Enumerations');
                    $('#viewsAutocreateButtonProgress').hide();
                }
            });
        };
        if (iobrokerObjectsReady) {
            toDo();
        } else {
            iobrokerObjectsReadyFunctions.push(toDo);
        }
    }

    //Enhance TableViews with functions
    function onTableViewsReady() {
        var $div = $('#tableViews');
        var $table = $div.find('.table-values');
        var $lines = $table.find('.table-lines');
        //Add Images to Selectbox for BackgroundImage
        var inbuiltWallpapersString = '';
        inbuiltWallpapers.forEach(function (wallpaper) {
            if (wallpaper != '') {
                inbuiltWallpapersString +=
                    ';' +
                    ('./images/wallpaper/' + wallpaper).replace(/\//g, '\\') +
                    '/' +
                    wallpaper.replace(/\//g, '\\');
            }
        });
        if (inbuiltWallpapers.length > 0) {
            inbuiltWallpapersString = ';[' + _('Inbuilt Wallpapers') + ':]' + inbuiltWallpapersString;
        }
        var imagenames = [];
        imagesDirs.forEach(function (imagesDir) {
            if (imagesDir.files && imagesDir.files.length > 0) imagenames.push('[' + imagesDir.dirnameBS + ':]');
            imagesDir.files.forEach(function (file) {
                //image/, image/, image/, image/, image/, image/svg+xml
                if (
                    file.filenameBS.toLowerCase().endsWith('.png') ||
                    file.filenameBS.toLowerCase().endsWith('.jpeg') ||
                    file.filenameBS.toLowerCase().endsWith('.jpg') ||
                    file.filenameBS.toLowerCase().endsWith('.gif') ||
                    file.filenameBS.toLowerCase().endsWith('.svg') ||
                    file.filenameBS.toLowerCase().endsWith('.svg+xml')
                ) {
                    imagenames.push('.\\..' + userfilesImagePathBS + file.filenameBS + '/' + file.filenameBS);
                }
            });
        });
        if (imagenames.length > 0) {
            imagenames.unshift(';[' + _('User Images') + ':]');
        }
        enhanceTextInputToCombobox(
            '#tableViews input[data-name="nativeBackgroundImage"]',
            '/' + _('(None)') + inbuiltWallpapersString + imagenames.join(';'),
            true,
        );
        //Button-Functions
        $lines.find('a[data-command]').each(function () {
            var command = $(this).data('command');
            if (command === 'edit') {
                //Edit view
                $(this).on('click', function (event) {
                    var _viewIndex = $(this).data('index');
                    M.Tabs.getInstance($('.tabs')).select('tabDevices');
                    setTimeout(function () {
                        $('#devicesSelectedView').val(_viewIndex).select().trigger('change');
                    }, 10);
                });
            } else if (command === 'delete') {
                //Delete view
                $(this).on('click', function (event) {
                    var _viewIndex = $(this).data('index');
                    var changedSymbolicLinks = changeSymbolicLinks(_viewIndex, '*', null, null);
                    if (changedSymbolicLinks.length > 0) {
                        var deletedSymbolicLinksString = '';
                        changedSymbolicLinks.forEach(function (destination) {
                            var deviceNumber = parseInt(destination.device) + 1;
                            //1st 2nd 3rd 4th...
                            var deviceNumberString =
                                deviceNumber == 1
                                    ? _('1st')
                                    : deviceNumber == 2
                                      ? _('2nd')
                                      : deviceNumber == 3
                                        ? _('3rd')
                                        : _('%sth', deviceNumber);
                            deletedSymbolicLinksString +=
                                '\n' +
                                views[destination.view].commonName +
                                ': ' +
                                deviceNumberString +
                                ' ' +
                                _('Device') +
                                ' (' +
                                views[destination.view].devices[destination.device].commonName +
                                ')';
                        });
                        alert(
                            _(
                                'The following devices were symbolic links of a device from the view you deleted. They were converted to normal devices:',
                            ) + deletedSymbolicLinksString,
                        );
                    }
                    changedSymbolicLinks = changedSymbolicLinks.concat(changedSymbolicLink);
                    for (var i = _viewIndex; i < views.length; i++) {
                        var changedSymbolicLink = changeSymbolicLinks(i + 1, '*', i, '*', changedSymbolicLinks);
                        changedSymbolicLinks = changedSymbolicLinks.concat(changedSymbolicLink);
                    }
                });
            }
            //Drag-Icon
            if (command === 'drag_handle') {
                var imageIndex = $(this).data('index');
                $(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
            }
        });
        //CommonName changed
        $lines.find('input[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'commonName') {
                $(this).on('focusin', function () {
                    $(this).data('oldval', $(this).val());
                });
                $(this).on('change', function () {
                    var index = $(this).data('index');
                    var oldVal = $(this).data('oldval');
                    var newVal = $(this).val();
                    changeViewsCommonName(index, oldVal, newVal);
                    if (viewsCheckDuplicates()) alert(_('No duplicates allowed! View Names must be unique.'));
                });
            }
        });
        function changeViewsCommonName(index, oldVal, newVal) {
            toolbar.forEach(function (element) {
                if (element.nativeLinkedView.split('#')[0] == oldVal.split('#')[0])
                    element.nativeLinkedView =
                        newVal.split('#')[0] +
                        (element.nativeLinkedView.split('#')[1] ? '#' + element.nativeLinkedView.split('#')[1] : '');
            });
            if (
                $('#panelBackgroundViewValue').val().split('#')[0] ==
                adapter + '.' + instance + '.Views.' + oldVal.split('#')[0]
            )
                $('#panelBackgroundViewValue').val(
                    adapter +
                        '.' +
                        instance +
                        '.Views.' +
                        newVal.split('#')[0] +
                        ($('#panelBackgroundViewValue').val().split('#')[1]
                            ? '#' + $('#panelBackgroundViewValue').val().split('#')[1]
                            : ''),
                );
            views.forEach(function (view) {
                (view.devices || []).forEach(function (device) {
                    if (device.nativeLinkedView && device.nativeLinkedView.split('#')[0] == oldVal.split('#')[0])
                        device.nativeLinkedView =
                            newVal.split('#')[0] +
                            (device.nativeLinkedView.split('#')[1] ? '#' + device.nativeLinkedView.split('#')[1] : '');
                    (device.states || []).forEach(function (state) {
                        if (
                            state.state == 'BACKGROUND_VIEW' &&
                            state.value.split('#')[0] == adapter + '.' + instance + '.Views.' + oldVal.split('#')[0]
                        )
                            state.value =
                                adapter +
                                '.' +
                                instance +
                                '.Views.' +
                                newVal.split('#')[0] +
                                (state.value.split('#')[1] ? '#' + state.value.split('#')[1] : '');
                    });
                });
            });
        }
        //Check for duplicates
        viewsCheckDuplicates();
        //Make table sortable
        $('#tableViews tbody').sortable({
            helper: fixHelper,
            start: function (event, ui) {
                console.log('Drag started...');
            },
            stop: function (event, ui) {
                console.log('Drag ended, start resorting...');
                $('#tableViews tbody').sortable('disable');
                var sequence = [];
                $('#tableViews')
                    .find('.table-values')
                    .find('.table-lines')
                    .find('tr')
                    .each(function () {
                        sequence.push($(this).data('index'));
                    });
                var tableResorted = [];
                var changedSymbolicLinks = [];
                for (var i = 0; i < sequence.length; i++) {
                    tableResorted.push(views[sequence[i]]);
                    if (i != sequence[i]) {
                        for (deviceIndex in views[sequence[i]].devices) {
                            var changedSymbolicLink = changeSymbolicLinks(
                                sequence[i],
                                deviceIndex,
                                i,
                                deviceIndex,
                                changedSymbolicLinks,
                            );
                            changedSymbolicLinks = changedSymbolicLinks.concat(changedSymbolicLink);
                        }
                    }
                }
                views = tableResorted;
                onChange();
                values2table('tableViews', views, onChange, onTableViewsReady);
                $('#tableViews tbody').sortable('enable');
                console.log('resorted.');
            },
            axis: 'y',
            handle: "a[data-command='drag_handle']",
        });
    }

    //Check for duplicates
    function viewsCheckDuplicates() {
        var duplicates = false;
        var viewCommonNames = [];
        views.forEach(function (element) {
            if (viewCommonNames.indexOf(element.commonName) > -1) {
                duplicates = true;
            } else {
                viewCommonNames.push(element.commonName);
            }
        });
        if (duplicates) {
            $('#viewsNoDuplicatesAllowed').show();
        } else {
            $('#viewsNoDuplicatesAllowed').hide();
        }
        return duplicates;
    }

    //Enhance ViewsAutocreate with functions
    $('#viewsAutocreateButton').on('click', function () {
        initDialog(
            'dialogViewsAutocreate',
            function () {
                //save dialog
                if (!confirm(_('Create selected views?') + ' ' + _('This may take a few seconds.'))) return;
                var enumerationMain = $('#dialogViewsAutocreateEnumerationMain').val();
                var viewsAutocreateResult = { views: [], toolbar: [] };
                var iQontrolViewDevices = [];
                var masterView = false;
                var viewCount = 0;
                var deviceCount = 0;
                var toolbarCount = 0;
                $('.dialogViewsAutocreateEnumerationListItem').each(function () {
                    var enumeration = $(this).data('enumeration');
                    if (
                        $(this).prop('checked') ||
                        (enumeration == enumerationMain && $('#dialogViewsAutocreateCreateMasterView').prop('checked'))
                    ) {
                        var name = getEnumerationName(enumeration);
                        var viewNames = [];
                        views.forEach(function (view) {
                            if (view.commonName) viewNames.push(view.commonName);
                        });
                        var existingNameIndex = 0;
                        while (viewNames.indexOf(name + (existingNameIndex ? ' ' + existingNameIndex : '')) != -1) {
                            existingNameIndex++;
                        }
                        if (existingNameIndex) name = name + ' ' + existingNameIndex;
                        var backgroundImage = './images/wallpaper/orangedrops.jpg';
                        if (enumeration.indexOf('enum.rooms') == 0) {
                            backgroundImage = './images/wallpaper/bottle.jpg';
                        } else if (enumeration.indexOf('enum.functions') == 0) {
                            backgroundImage = './images/wallpaper/grass.jpg';
                        }
                        var view = { commonName: name, nativeBackgroundImage: backgroundImage, devices: [] };
                        if (
                            enumerations[enumeration].common &&
                            enumerations[enumeration].common.members &&
                            typeof enumerations[enumeration].common.members.forEach == 'function'
                        )
                            enumerations[enumeration].common.members.forEach(function (member) {
                                if (
                                    $(
                                        '.dialogViewsAutocreateEnumerationListMemberItem[data-enumeration="' +
                                            enumeration +
                                            '"][data-member="' +
                                            member +
                                            '"]',
                                    ).prop('checked')
                                ) {
                                    var result = deviceAutocreate(member, iobrokerObjects);
                                    if (result && result.resultObject) {
                                        view.devices.push(result.resultObject);
                                        deviceCount++;
                                    }
                                }
                            });
                        if (
                            view.devices.length ||
                            (enumeration == enumerationMain &&
                                $('#dialogViewsAutocreateCreateMasterView').prop('checked'))
                        ) {
                            if (enumeration == enumerationMain) {
                                masterView = viewsAutocreateResult.views.length;
                                view.nativeBackgroundImage = './images/wallpaper/bakestone.jpg';
                            }
                            viewsAutocreateResult.views.push(view);
                            viewCount++;
                        }
                        if (
                            view.devices.length &&
                            enumeration != enumerationMain &&
                            $('#dialogViewsAutocreateCreateMasterView').prop('checked')
                        ) {
                            iQontrolViewDevices.push({
                                commonName: name,
                                commonRole: 'iQontrolView',
                                nativeLinkedView: name,
                                nativeBackgroundImage: backgroundImage,
                            });
                            deviceCount++;
                        }
                        if (
                            enumeration == enumerationMain &&
                            $('#dialogViewsAutocreateCreateMasterViewToolbarEntry').prop('checked')
                        ) {
                            var icon = 'bars';
                            if (enumeration == 'enum.rooms') icon = 'grid';
                            if (enumeration == 'enum.functions') icon = 'gear';
                            viewsAutocreateResult.toolbar.push({
                                commonName: name,
                                nativeLinkedView: name,
                                nativeIcon: icon,
                            });
                            toolbarCount++;
                        }
                    }
                });
                if ($('#dialogViewsAutocreateCreateMasterView').prop('checked') && masterView !== false) {
                    if (typeof viewsAutocreateResult.views[masterView].devices == udef)
                        viewsAutocreateResult.views[masterView].devices = [];
                    viewsAutocreateResult.views[masterView].devices = iQontrolViewDevices.concat(
                        viewsAutocreateResult.views[masterView].devices,
                    );
                }
                if (
                    confirm(
                        _('Created %s devices in %s views', deviceCount, viewCount) +
                            (toolbarCount ? ' ' + _('and a toolbar entry') : '') +
                            '. ' +
                            _('Save these settings?'),
                    )
                ) {
                    views = views.concat(viewsAutocreateResult.views);
                    toolbar = toolbar.concat(viewsAutocreateResult.toolbar);
                    loadViews();
                }
            },
            function () {
                //init dialog function
                $('#dialogViewsAutocreateEnumerationMain').val('').select();
                $('#dialogViewsAutocreateEnumerationList').html(_('Please select an enumeration.'));
                $('#dialogViewsAutocreate a.btn.chose').addClass('disabled');
                $('#dialogViewsAutocreateBtnSetProgress').hide();
                $('#dialogViewsAutocreate a.btn-set').addClass('disabled');
            },
        );
    });
    $('#dialogViewsAutocreateEnumerationMain').on('change', function () {
        var enumerationMain = $('#dialogViewsAutocreateEnumerationMain').val();
        $('#dialogViewsAutocreateEnumerationList').empty();
        var listContent = "<ul class='collapsible'>";
        for (enumeration in enumerations) {
            if (enumeration.indexOf(enumerationMain) == 0) {
                var name = getEnumerationName(enumeration);
                var members = [];
                if (
                    enumerations[enumeration].common &&
                    enumerations[enumeration].common.members &&
                    typeof enumerations[enumeration].common.members.forEach == 'function'
                ) {
                    members = enumerations[enumeration].common.members;
                }
                listContent += '<li>';
                listContent += "	<div class='collapsible-header'>";
                listContent +=
                    "		<label><input class='dialogViewsAutocreateEnumerationListItem' type='checkbox' checked='checked' data-enumeration='" +
                    enumeration +
                    "'><span>" +
                    name +
                    '</span></label>';
                if (members.length) {
                    listContent +=
                        "		<div style='position: relative; right: 20px; margin-left: auto; padding: 3px 10px; border-radius: 14px; background: lightgrey;'><span>" +
                        members.length +
                        ' ' +
                        (members.length == 1 ? _('device') : _('devices')) +
                        '</span></div>';
                }
                listContent += '	</div>';
                listContent += "	<div class='collapsible-body'>";
                if (members.length) {
                    listContent += '		<span>';
                    members.forEach(function (member, index) {
                        listContent +=
                            "		<label><input class='dialogViewsAutocreateEnumerationListMemberItem' type='checkbox' checked='checked' data-enumeration='" +
                            enumeration +
                            "' data-member='" +
                            member +
                            "' data-member-index='" +
                            index +
                            "'><span style='height: auto;'>" +
                            member +
                            (iobrokerObjects && iobrokerObjects[member] && getCommonName(iobrokerObjects[member])
                                ? '&nbsp;<b>(' + getCommonName(iobrokerObjects[member]) + ')</b>'
                                : '') +
                            '</span></label><br>';
                    });
                    listContent += '		</span>';
                }
                listContent += '	</div>';
                listContent += '</li>';
            }
        }
        listContent += '</ul>';
        $('#dialogViewsAutocreateEnumerationList').html(listContent);
        $('.collapsible').collapsible();
        $('.dialogViewsAutocreateEnumerationListItem')
            .off('change')
            .on('change', function (e) {
                $(
                    '.dialogViewsAutocreateEnumerationListMemberItem[data-enumeration="' +
                        $(this).data('enumeration') +
                        '"]',
                ).prop('checked', $(this).prop('checked'));
            });
        $('.dialogViewsAutocreateEnumerationListMemberItem')
            .off('change')
            .on('change', function () {
                if ($(this).prop('checked'))
                    $(
                        '.dialogViewsAutocreateEnumerationListItem[data-enumeration="' +
                            $(this).data('enumeration') +
                            '"]',
                    ).prop('checked', true);
            });
        $('#dialogViewsAutocreate a.btn.chose').removeClass('disabled');
        $('#dialogViewsAutocreate a.btn-set').removeClass('disabled');
    });

    //++++++++++ DEVICES ++++++++++
    //Load Devices
    function loadDevices() {
        devicesMarkDevice = null;
        //Add Views to Selectbox for Views
        $('#devicesSelectedView')
            .empty()
            .append('<option disabled selected value>' + _('Select view') + '</option>');
        views.forEach(function (view, viewIndex) {
            $('#devicesSelectedView').append("<option value='" + viewIndex + "'>" + view.commonName + '</option>');
        });
        $('#devicesSelectedView').select();
        //Reset devicesSelecteView
        devicesSelectedView = -1;
        $('.divDevices').hide();
        $('#devicesPrevView').addClass('disabled');
        if (views.length > 1) $('#devicesNextView').prop('disabled', false);
        else $('#devicesNextView').prop('disabled', true);
    }

    //Enhance devicesSelectedView-Selectbox with functions
    $('#devicesSelectedView').on('change', function () {
        devicesSelectedView = $('#devicesSelectedView').val();
        if (devicesSelectedView > -1) {
            if (!views[devicesSelectedView].devices) views[devicesSelectedView].devices = [];
            //Backward-Compatibility: If BackgroundImageActive not set, set it to the same value, as BackgroundImage
            views[devicesSelectedView].devices.forEach(function (device) {
                if (typeof device.nativeBackgroundImageActive == udef && typeof device.nativeBackgroundImage !== udef)
                    device.nativeBackgroundImageActive = device.nativeBackgroundImage;
            });
            //Add Views to Selectbox for LinkedView
            var viewIds = [''];
            views.forEach(function (view, viewIndex) {
                viewIds.push(view.commonName);
                if (view.devices && view.devices.length)
                    view.devices.forEach(function (device, deviceIndex) {
                        if (device.nativeHeading)
                            viewIds.push(
                                view.commonName +
                                    '#' +
                                    deviceIndex +
                                    'h/' +
                                    view.commonName +
                                    '#' +
                                    device.nativeHeading.replaceAll('/', '_'),
                            );
                        //viewIds.push(view.commonName + "#" + deviceIndex + "/" + view.commonName + "#" + deviceIndex + " (" + device.commonName.replaceAll("/", "_") + ")");
                    });
            });
            $('*[data-name="nativeLinkedView"]').data('options', viewIds.join(';'));
            //Fill Table
            values2table('tableDevices', views[devicesSelectedView].devices, onChange, onTableDevicesReady);
            $('.divDevicesNothingSelected').hide();
            $('.divDevices').show();
        } else {
            $('.divDevicesNothingSelected').show();
            $('.divDevices').hide();
        }
        if (devicesSelectedView > 0) $('#devicesPrevView').removeClass('disabled');
        else $('#devicesPrevView').addClass('disabled');
        if (devicesSelectedView < views.length - 1) $('#devicesNextView').removeClass('disabled');
        else $('#devicesNextView').addClass('disabled');
    });

    //Enhance prevView and nextView-Buttons with functions
    $('#devicesPrevView, #devicesNextView').on('click', function () {
        var actualViewIndex = parseInt($('#devicesSelectedView').val());
        if (isNaN(actualViewIndex)) actualViewIndex = -1;
        if ($(this).data('role') == 'prev' && actualViewIndex > 0) {
            $('#devicesSelectedView')
                .val(actualViewIndex - 1)
                .select()
                .trigger('change');
        } else if ($(this).data('role') == 'next' && actualViewIndex < views.length - 1) {
            $('#devicesSelectedView')
                .val(actualViewIndex + 1)
                .select()
                .trigger('change');
        }
    });

    //Enhance TableDevices with functions
    function onTableDevicesReady() {
        $('#tableDevices td').css('vertical-align', 'top');
        var $div = $('#tableDevices');
        var $table = $div.find('.table-values');
        var $lines = $table.find('.table-lines');
        //Add Images to Combobox for BackgroundImage
        var inbuiltWallpapersString = '';
        inbuiltWallpapers.forEach(function (wallpaper) {
            if (wallpaper != '') {
                inbuiltWallpapersString +=
                    ';' +
                    ('./images/wallpaper/' + wallpaper).replace(/\//g, '\\') +
                    '/' +
                    wallpaper.replace(/\//g, '\\');
            }
        });
        if (inbuiltWallpapers.length > 0) {
            inbuiltWallpapersString = ';[' + _('Inbuilt Wallpapers') + ':]' + inbuiltWallpapersString;
        }
        var imagenames = [];
        imagesDirs.forEach(function (imagesDir) {
            if (imagesDir.files && imagesDir.files.length > 0) imagenames.push('[' + imagesDir.dirnameBS + ':]');
            imagesDir.files.forEach(function (file) {
                if (
                    file.filenameBS.toLowerCase().endsWith('.png') ||
                    file.filenameBS.toLowerCase().endsWith('.jpeg') ||
                    file.filenameBS.toLowerCase().endsWith('.jpg') ||
                    file.filenameBS.toLowerCase().endsWith('.gif') ||
                    file.filenameBS.toLowerCase().endsWith('.svg') ||
                    file.filenameBS.toLowerCase().endsWith('.svg+xml')
                ) {
                    imagenames.push('.\\..' + userfilesImagePathBS + file.filenameBS + '/' + file.filenameBS);
                }
            });
        });
        if (imagenames.length > 0) {
            imagenames.unshift(';[' + _('Images') + ':]');
        }
        //--Progress-Bars
        var progressbars = '';
        progressbars += ';[' + _('Progress-Bars') + ':]';
        progressbars +=
            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22red%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/' +
            _('Rectangle') +
            ' ' +
            _('red') +
            '/' +
            (previewLink + '/images/icons/progressbar_square_red.png').replace(/\//g, '\\');
        progressbars +=
            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22green%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/' +
            _('Rectangle') +
            ' ' +
            _('green') +
            '/' +
            (previewLink + '/images/icons/progressbar_square_green.png').replace(/\//g, '\\');
        progressbars +=
            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22blue%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/' +
            _('Rectangle') +
            ' ' +
            _('blue') +
            '/' +
            (previewLink + '/images/icons/progressbar_square_blue.png').replace(/\//g, '\\');
        progressbars +=
            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22yellow%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/' +
            _('Rectangle') +
            ' ' +
            _('yellow') +
            '/' +
            (previewLink + '/images/icons/progressbar_square_yellow.png').replace(/\//g, '\\');
        progressbars +=
            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22orange%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/' +
            _('Rectangle') +
            ' ' +
            _('orange') +
            '/' +
            (previewLink + '/images/icons/progressbar_square_orange.png').replace(/\//g, '\\');
        progressbars +=
            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22purple%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/' +
            _('Rectangle') +
            ' ' +
            _('purple') +
            '/' +
            (previewLink + '/images/icons/progressbar_square_purple.png').replace(/\//g, '\\');
        progressbars +=
            ';[VARIABLE]data%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/' +
            _('Circle') +
            ' ' +
            _('inactive') +
            '/' +
            (previewLink + '/images/icons/progressbar_circle_inactive.png').replace(/\//g, '\\');
        progressbars +=
            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22red%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/' +
            _('Circle') +
            ' ' +
            _('red') +
            '/' +
            (previewLink + '/images/icons/progressbar_circle_red.png').replace(/\//g, '\\');
        progressbars +=
            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22green%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/' +
            _('Circle') +
            ' ' +
            _('green') +
            '/' +
            (previewLink + '/images/icons/progressbar_circle_green.png').replace(/\//g, '\\');
        progressbars +=
            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22blue%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/' +
            _('Circle') +
            ' ' +
            _('blue') +
            '/' +
            (previewLink + '/images/icons/progressbar_circle_blue.png').replace(/\//g, '\\');
        progressbars +=
            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22yellow%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/' +
            _('Circle') +
            ' ' +
            _('yellow') +
            '/' +
            (previewLink + '/images/icons/progressbar_circle_yellow.png').replace(/\//g, '\\');
        progressbars +=
            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22orange%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/' +
            _('Circle') +
            ' ' +
            _('orange') +
            '/' +
            (previewLink + '/images/icons/progressbar_circle_orange.png').replace(/\//g, '\\');
        progressbars +=
            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22purple%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/' +
            _('Circle') +
            ' ' +
            _('purple') +
            '/' +
            (previewLink + '/images/icons/progressbar_circle_purple.png').replace(/\//g, '\\');
        enhanceTextInputToCombobox(
            '#tableDevices input[data-name="nativeBackgroundImage"], #tableDevices input[data-name="nativeBackgroundImageActive"]',
            '/' + _('(None)') + progressbars + inbuiltWallpapersString + imagenames.join(';'),
            true,
        );
        //Add options to combobox for headingOptions
        enhanceTextInputToCombobox(
            '#tableDevices input[data-name="nativeHeadingOptions"]',
            '/' +
                _('Normal') +
                ';CO/' +
                _('Collapsible section, opened at start') +
                ';CC/' +
                _('Collapsible section, closed at start') +
                ';COC/' +
                _('Collapsible section, opened at start, closes when others open') +
                ';CCC/' +
                _('Collapsible section, closed at start, closes when others open'),
            false,
        );
        $('#tableDevices input[data-name="nativeHeadingOptions"] .comboboxDropdownTriggerArrow').css('opacity', 0);
        //Add role and symblic link info as span to commonName
        $lines.find('input[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'commonName') {
                var deviceIndex = $(this).data('index');
                if (
                    typeof views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom == 'object' &&
                    typeof views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceView != udef &&
                    views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceView !== '' &&
                    typeof views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceDevice != udef &&
                    views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceDevice !== ''
                ) {
                    //Symbolic link
                    $(this).next('span').remove();
                    var deviceNumber =
                        parseInt(views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceDevice) + 1;
                    //1st 2nd 3rd 4th...
                    var deviceNumberString =
                        deviceNumber == 1
                            ? _('1st')
                            : deviceNumber == 2
                              ? _('2nd')
                              : deviceNumber == 3
                                ? _('3rd')
                                : _('%sth', deviceNumber);
                    $(this).after(
                        '<span style="font-size:x-small; color: blue; text-decoration: underline; cursor: pointer;" onclick="devicesMarkDevice = ' +
                            (deviceNumber - 1) +
                            "; $('#devicesSelectedView').val(" +
                            views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceView +
                            ").select().trigger('change');\">" +
                            _('Linked from view') +
                            ' ' +
                            views[views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceView]
                                .commonName +
                            ', ' +
                            deviceNumberString +
                            ' ' +
                            _('device') +
                            ' ' +
                            ' (' +
                            views[views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceView].devices[
                                views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceDevice
                            ].commonName +
                            ')</span>',
                    );
                } else {
                    //Normal device
                    if (views[devicesSelectedView].devices[deviceIndex].commonRole) {
                        $(this).next('span').remove();
                        $(this).after(
                            '<span style="font-size:x-small;">' +
                                _(
                                    (iQontrolRoles[views[devicesSelectedView].devices[deviceIndex].commonRole] &&
                                        iQontrolRoles[views[devicesSelectedView].devices[deviceIndex].commonRole]
                                            .name) ||
                                        '',
                                ) +
                                '</span>',
                        );
                    } else {
                        $(this).next('span').remove();
                        $(this).after(
                            '<span style="font-size:x-small; color: red;">' +
                                _('Please assign a role in device settings') +
                                '</span>',
                        );
                    }
                }
                $(this).on('change', function () {
                    //Check for changes for Symbolic link
                    var _viewIndex = devicesSelectedView;
                    var _deviceIndex = $(this).data('index');
                    var destinations = checkSymbolicLinks(_viewIndex, _deviceIndex);
                    if (destinations.length > 0) {
                        var destinationInThisView = false;
                        destinations.forEach(function (destination) {
                            if (destination.view == _viewIndex) {
                                destinationInThisView = true;
                            }
                        });
                        if (destinationInThisView)
                            values2table(
                                'tableDevices',
                                views[devicesSelectedView].devices,
                                onChange,
                                onTableDevicesReady,
                            );
                    }
                });
            }
        });
        //Add padding to checkbox
        $lines.find('input[type=checkbox]').parent('td').css('padding', '15px 0px 0px 10px');
        //Button-Functions
        $lines.find('a[data-command]').each(function () {
            var command = $(this).data('command');
            //Edit Device
            if (command === 'edit') {
                var deviceIndex = $(this).data('index');
                if (views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom) {
                    //Symbolic link
                    $(this).addClass('dark grey').find('i').html('control_point_duplicate');
                    $(this).on('click', function () {
                        var _viewIndex = devicesSelectedView;
                        var _deviceIndex = $(this).data('index');
                        var result = confirm(_('Convert symbolic link to real device?'));
                        if (result) {
                            delete views[_viewIndex].devices[_deviceIndex].symbolicLinkFrom;
                            values2table(
                                'tableDevices',
                                views[devicesSelectedView].devices,
                                onChange,
                                onTableDevicesReady,
                            );
                        }
                    });
                } else {
                    //Normal device
                    $(this).on('click', function () {
                        var _viewIndex = devicesSelectedView;
                        var _deviceIndex = $(this).data('index');
                        initDialog(
                            'dialogDeviceEdit',
                            function () {
                                //save dialog
                                var _viewIndex = $('#dialogDeviceEditViewIndex').val();
                                var _deviceIndex = $('#dialogDeviceEditDeviceIndex').val();
                                views[_viewIndex].devices[_deviceIndex].commonRole =
                                    $('#dialogDeviceEditCommonRole').val();
                                $('.colorpicker-element').trigger('blur');
                                views[_viewIndex].devices[_deviceIndex].states = dialogDeviceEditStatesTable;
                                dialogDeviceEditOptions = [];
                                $('.dialogDeviceEditOption').each(function () {
                                    //save the options entrys
                                    var option = $(this).data('option');
                                    var type = $(this).data('type');
                                    if (type == 'checkbox') var value = $(this).prop('checked').toString();
                                    else var value = $(this).val();
                                    var entry = { option: option, type: type, value: value };
                                    dialogDeviceEditOptions.push(entry);
                                });
                                views[_viewIndex].devices[_deviceIndex].options = dialogDeviceEditOptions;
                                updateSymbolicLinks();
                                onTableDevicesReady();
                            },
                            function () {
                                //init dialog function
                                $('#dialogDeviceEditCommonName').html(
                                    views[_viewIndex].devices[_deviceIndex].commonName || '',
                                );
                                $('#dialogDeviceEditViewIndex').val(_viewIndex);
                                $('#dialogDeviceEditDeviceIndex').val(_deviceIndex);
                                dialogDeviceEditStates = views[_viewIndex].devices[_deviceIndex].states || [];
                                dialogDeviceEditStatesTable = [];
                                dialogDeviceEditOptions = JSON.parse(
                                    JSON.stringify(views[_viewIndex].devices[_deviceIndex].options || []),
                                );
                                $('#dialogDeviceEditOptionsContent').empty();
                                if (views[_viewIndex].devices[_deviceIndex].commonRole) {
                                    $('#dialogDeviceEditCommonRole')
                                        .val(views[_viewIndex].devices[_deviceIndex].commonRole)
                                        .trigger('change');
                                } else {
                                    $('#dialogDeviceEditCommonRole').val(-1).trigger('change');
                                }
                                $('#dialogDeviceEditCommonRole').select();
                                $(
                                    '#dialogDeviceEdit .btn-preview, #dialogDeviceEditStateConstant .btn-preview, #dialogDeviceEditStateArray .btn-preview',
                                ).data(
                                    'preview-render-view',
                                    'iqontrol.' + instance + '.Views.' + views[_viewIndex].commonName,
                                );
                            },
                        );
                    });
                }
            }
            //Copy Device
            if (command === 'content_copy') {
                $(this).find('i').html('content_copy');
                $(this).on('click', function (event) {
                    $('#devicesCopyFromButton').trigger('click', [devicesSelectedView, $(this).data('index')]);
                });
            }
            //Delete Device
            if (command === 'delete') {
                $(this).on('click', function (event) {
                    var _viewIndex = devicesSelectedView;
                    var _deviceIndex = $(this).data('index');
                    var changedSymbolicLinks = changeSymbolicLinks(_viewIndex, _deviceIndex, null, null);
                    if (changedSymbolicLinks.length > 0) {
                        var deletedSymbolicLinksString = '';
                        changedSymbolicLinks.forEach(function (destination) {
                            var deviceNumber = parseInt(destination.device) + 1;
                            //1st 2nd 3rd 4th...
                            var deviceNumberString =
                                deviceNumber == 1
                                    ? _('1st')
                                    : deviceNumber == 2
                                      ? _('2nd')
                                      : deviceNumber == 3
                                        ? _('3rd')
                                        : _('%sth', deviceNumber);
                            deletedSymbolicLinksString +=
                                '\n' +
                                views[destination.view].commonName +
                                ': ' +
                                deviceNumberString +
                                ' ' +
                                _('Device') +
                                ' (' +
                                views[destination.view].devices[destination.device].commonName +
                                ')';
                        });
                        alert(
                            _(
                                'The following devices were symbolic links of the device you deleted. They were converted to normal devices:',
                            ) + deletedSymbolicLinksString,
                        );
                    }
                    for (var i = _deviceIndex; i < views[_viewIndex].devices.length; i++) {
                        var changedSymbolicLink = changeSymbolicLinks(
                            _viewIndex,
                            i + 1,
                            _viewIndex,
                            i,
                            changedSymbolicLinks,
                        );
                        changedSymbolicLinks = changedSymbolicLinks.concat(changedSymbolicLink);
                    }
                });
            }
            //Drag-Icon
            if (command === 'drag_handle') {
                $(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
            }
        });
        //Make table sortable
        $('#tableDevices tbody').sortable({
            helper: fixHelper,
            stop: function (event, ui) {
                console.log('Drag ended, start resorting...');
                $('#tableDevices tbody').sortable('disable');
                var sequence = [];
                $('#tableDevices')
                    .find('.table-values')
                    .find('.table-lines')
                    .find('tr')
                    .each(function () {
                        sequence.push($(this).data('index'));
                    });
                var tableResorted = [];
                var changedSymbolicLinks = [];
                for (var i = 0; i < sequence.length; i++) {
                    tableResorted.push(views[devicesSelectedView].devices[sequence[i]]);
                    if (i != sequence[i]) {
                        var changedSymbolicLink = changeSymbolicLinks(
                            devicesSelectedView,
                            sequence[i],
                            devicesSelectedView,
                            i,
                            changedSymbolicLinks,
                        );
                        changedSymbolicLinks = changedSymbolicLinks.concat(changedSymbolicLink);
                    }
                }
                views[devicesSelectedView].devices = tableResorted;
                onChange();
                values2table('tableDevices', views[devicesSelectedView].devices, onChange, onTableDevicesReady);
                $('#tableDevices tbody').sortable('enable');
                console.log('resorted.');
            },
            axis: 'y',
            handle: "a[data-command='drag_handle']",
        });
        //Mark device
        if (devicesMarkDevice != null) {
            $('#tableDevices tr[data-index=' + devicesMarkDevice + ']').addClass('marked');
            scrollTo($('#tableDevices tr[data-index=' + devicesMarkDevice + ']').get(0));
            devicesMarkDevice = null;
        }
    }

    //Enhance dialogDeviceEditCommonRole-Selectbox with functions
    $('#dialogDeviceEditCommonRole').on('change', function () {
        var viewIndex = $('#dialogDeviceEditViewIndex').val();
        var deviceIndex = $('#dialogDeviceEditDeviceIndex').val();
        dialogDeviceEditCommonRole = $('#dialogDeviceEditCommonRole').val();
        //States
        if (typeof dialogDeviceEditStatesTable == 'object')
            dialogDeviceEditStatesTable.forEach(function (entry) {
                //save the table entrys before bulding the new states table
                var index = dialogDeviceEditStates.findIndex(function (element) {
                    return element.state == entry.state;
                });
                if (index == -1) {
                    dialogDeviceEditStates.push(entry);
                } else {
                    dialogDeviceEditStates[index] = entry;
                }
            });
        dialogDeviceEditStatesTable = [];
        if (dialogDeviceEditCommonRole) {
            //build states table
            iQontrolRoles[dialogDeviceEditCommonRole].states.forEach(function (entry) {
                //push all corresponding states for the selected role into the table
                var commonRole =
                    (
                        dialogDeviceEditStates.find(function (element) {
                            return element.state == entry;
                        }) || {}
                    ).commonRole || '';
                var value =
                    (
                        dialogDeviceEditStates.find(function (element) {
                            return element.state == entry;
                        }) || {}
                    ).value || '';
                if (commonRole == '') {
                    if (
                        entry == 'VALVE_STATES' ||
                        entry == 'INFO_A' ||
                        entry == 'INFO_B' ||
                        entry == 'ADDITIONAL_CONTROLS' ||
                        entry == 'ADDITIONAL_INFO' ||
                        entry == 'REMOTE_CHANNELS' ||
                        entry == 'REMOTE_ADDITIONAL_BUTTONS'
                    ) {
                        commonRole = 'array';
                        var valueObj = tryParseJSON(value);
                        if (Array.isArray(valueObj) == false) {
                            //For backward-compatibility -> transfer old object-style to new array-style
                            var valueArray = [];
                            for (name in valueObj) {
                                valueArray.push({ name: name, commonRole: 'linkedState', value: valueObj[name] });
                            }
                            value = JSON.stringify(valueArray);
                        }
                    } else if (
                        entry == 'SET_VALUE' ||
                        entry == 'OFF_SET_VALUE' ||
                        entry == 'UP_SET_VALUE' ||
                        entry == 'STOP_SET_VALUE' ||
                        entry == 'DOWN_SET_VALUE' ||
                        entry == 'FAVORITE_POSITION_SET_VALUE' ||
                        entry == 'URL' ||
                        entry == 'HTML' ||
                        entry == 'BACKGROUND_VIEW' ||
                        entry == 'BACKGROUND_URL' ||
                        entry == 'BACKGROUND_HTML' ||
                        entry == 'BADGE_COLOR' ||
                        entry == 'OVERLAY_INACTIVE_COLOR' ||
                        entry == 'OVERLAY_ACTIVE_COLOR' ||
                        entry == 'GLOW_INACTIVE_COLOR' ||
                        entry == 'GLOW_ACTIVE_COLOR'
                    ) {
                        commonRole = 'const';
                    } else {
                        commonRole = 'linkedState';
                    }
                }
                dialogDeviceEditStatesTable.push({ state: entry, commonRole: commonRole, value: value });
            });
        }
        //Fill Table
        values2table(
            'tableDialogDeviceEditStates',
            dialogDeviceEditStatesTable,
            onChange,
            ontableDialogDeviceEditStatesReady,
        );
        //Options
        $('.dialogDeviceEditOption').each(function () {
            //save the entrys before bulding the new options content
            var option = $(this).data('option');
            var type = $(this).data('type');
            if (type == 'checkbox') var value = $(this).prop('checked').toString();
            else var value = $(this).val();
            var index = dialogDeviceEditOptions.findIndex(function (element) {
                return element.option == option;
            });
            var entry = { option: option, type: type, value: value };
            if (index == -1) {
                dialogDeviceEditOptions.push(entry);
            } else {
                dialogDeviceEditOptions[index] = entry;
            }
        });
        //Build options content
        dialogDeviceEditOptionsBuildOptionsContent();
    });

    //Enhance tableDialogDeviceEditStates with functions
    function ontableDialogDeviceEditStatesReady() {
        $('#tableDialogDeviceEditStates td').css('vertical-align', 'top');
        var $div = $('#tableDialogDeviceEditStates');
        var $table = $div.find('.table-values');
        var $lines = $table.find('.table-lines');
        //Make State Readonly and add id for selectId-Dialog
        $lines.find('input[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'state') {
                $(this).prop('readonly', true);
                if ($(this).val() == 'ALTERNATIVE_COLORSPACE_VALUE')
                    $(this).after(
                        '<span style="font-size:x-small;">' +
                            _('The colorspace has to be defined in the devicespecific options below') +
                            '</span>',
                    );
                if ($(this).val() == 'BACKGROUND_URL')
                    $(this).after(
                        '<span style="font-size:x-small;">' +
                            _('Also used to display and configure widgets') +
                            '</span>',
                    );
                if ($(this).val() == 'VALVE_STATES')
                    $(this).after(
                        '<span style="font-size:x-small;">Array: [{name: "Valve1", commonRole: "LinkedState", value: "ID1"}, ...]</span>',
                    );
                if ($(this).val() == 'INFO_A')
                    $(this).after(
                        '<span style="font-size:x-small;">Array: [{name: "Name1", commonRole: "LinkedState", value: "ID1", icon: "url"}, ...]</span>',
                    );
                if ($(this).val() == 'INFO_B')
                    $(this).after(
                        '<span style="font-size:x-small;">Array: [{name: "Name1", commonRole: "LinkedState", value: "ID1", icon: "url"}, ...]</span>',
                    );
                if ($(this).val() == 'ADDITIONAL_CONTROLS')
                    $(this).after(
                        '<span style="font-size:x-small;">Array: [{name: "Name1", commonRole: "LinkedState", value: "ID1", role: "SLIDER"}, ...]</span>',
                    );
                if ($(this).val() == 'ADDITIONAL_INFO')
                    $(this).after(
                        '<span style="font-size:x-small;">Array: [{name: "Name1", commonRole: "LinkedState", value: "ID1"}, ...]</span>',
                    );
                if ($(this).val() == 'REMOTE_CHANNELS')
                    $(this).after(
                        '<span style="font-size:x-small;">Array: [{name: "Button1", commonRole: "LinkedState", value: "ID1"}, ...]</span>',
                    );
                if ($(this).val() == 'REMOTE_ADDITIONAL_BUTTONS')
                    $(this).after(
                        '<span style="font-size:x-small;">Array: [{name: "Button1", commonRole: "LinkedState", value: "ID1"}, ...]</span>',
                    );
            }
            if (name === 'value') {
                var stateIndex = $(this).data('index');
                $(this).prop('id', 'tableDialogDeviceEditStatesValue_' + stateIndex);
                $(this).on('input change', function () {
                    tableDialogDeviceEditStatesEnhanceEditCustom(stateIndex);
                });
                if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'array') $(this).prop('readonly', true);
            }
        });
        //Add widgets and websites to Selectbox for URL and BACKGROUND_URL  AND  Add views to Selectbox for BACKGROUND_VIEW
        //1.Discover Widgets
        var inbuiltWidgetsString = '';
        inbuiltWidgets.forEach(function (widget) {
            if (widget && typeof widget.filename != udef) {
                inbuiltWidgetsString +=
                    ';' +
                    ('./images/widgets/' + widget.filename).replace(/\//g, '\\') +
                    '/' +
                    (widget.name || widget.filename).replace(/\//g, '\\') +
                    '/' +
                    (previewLink + ('/images/widgets/' + widget.icon || '/images/icons/file_html.png')).replace(
                        /\//g,
                        '\\',
                    );
            }
        });
        if (inbuiltWidgets.length > 0) {
            inbuiltWidgetsString = ';[' + _('Inbuilt Widgets') + ':]' + inbuiltWidgetsString;
        }
        var websitenames = [];
        imagesDirs.forEach(function (imagesDir) {
            if (imagesDir.dirname.indexOf('/userwidgets') == 0 && imagesDir.files && imagesDir.files.length > 0) {
                var websitenamesInThisDir = [];
                imagesDir.files.forEach(function (file) {
                    var filename = file.filename || '';
                    if (
                        filename.endsWith('.shtml') ||
                        filename.endsWith('.ehtml') ||
                        filename.endsWith('.shtm') ||
                        filename.endsWith('.htm') ||
                        filename.endsWith('.html')
                    ) {
                        var iconIndex = images.findIndex(function (element) {
                            return element.filename == file.filename.substring(0, file.filename.length - 5) + '.png';
                        });
                        if (iconIndex > -1)
                            var icon = previewLink + '/..' + userfilesImagePath + images[iconIndex].filename;
                        else var icon = previewLink + '/images/icons/file_html.png';
                        websitenamesInThisDir.push(
                            '.\\..' +
                                userfilesImagePathBS +
                                file.filenameBS +
                                '/' +
                                file.filenameBS +
                                '/' +
                                icon.replace(/\//g, '\\'),
                        );
                    }
                });
                if (websitenamesInThisDir.length > 0) {
                    websitenames.push('[' + imagesDir.dirnameBS + ':]');
                    websitenames.push(websitenamesInThisDir.join(';'));
                }
            }
        });
        if (websitenames.length > 0) {
            websitenames.unshift(';[' + _('User Widgets') + ':]');
        }
        //2.Discover Views
        var viewIds = [''];
        views.forEach(function (element) {
            viewIds.push(adapter + '.' + instance + '.Views.' + element.commonName + '/' + element.commonName);
        });
        //3.Add both
        $lines.find('input[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'value') {
                var stateIndex = $(this).data('index');
                if (
                    dialogDeviceEditStatesTable[stateIndex].state == 'URL' ||
                    dialogDeviceEditStatesTable[stateIndex].state == 'BACKGROUND_URL'
                ) {
                    enhanceTextInputToCombobox(
                        '#' + this.id,
                        '/' + _('(None)') + inbuiltWidgetsString + websitenames.join(';'),
                        true,
                        dialogDeviceEditStatesWidgetSelected,
                    );
                } else if (dialogDeviceEditStatesTable[stateIndex].state == 'BACKGROUND_VIEW') {
                    enhanceTextInputToCombobox('#' + this.id, '/;' + viewIds.join(';'), false, function (value) {
                        if (
                            value &&
                            value != '' &&
                            !$(".dialogDeviceEditOption[data-option='backgroundURLAllowPostMessage']").prop('checked')
                        ) {
                            if (
                                confirm(
                                    _(
                                        'Its recommended to allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML. Enable this option now?',
                                    ),
                                )
                            ) {
                                $(".dialogDeviceEditOption[data-option='backgroundURLAllowPostMessage']")
                                    .prop('checked', true)
                                    .trigger('change');
                            }
                        }
                    });
                }
            }
        });
        //Role
        $lines.find('select[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'commonRole') {
                var stateIndex = $(this).data('index');
                if (
                    dialogDeviceEditStatesTable[stateIndex].commonRole == 'array' ||
                    dialogDeviceEditStatesTable[stateIndex].commonRole == 'linkedStateArray'
                ) {
                    $(this).find('option[value="linkedState"]').remove();
                    $(this).find('option[value="const"]').remove();
                    $(this).prop('disabled', true);
                } else {
                    $(this).find('option[value="array"]').remove();
                    $(this).find('option[value="linkedStateArray"]').remove();
                    $(this)
                        .on('input change', function () {
                            tableDialogDeviceEditStatesEnhanceEditCustom(stateIndex);
                            (function () {
                                //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
                                //Show or hide selectboxes
                                var _stateIndex = stateIndex;
                                if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'const') {
                                    $('#tableDialogDeviceEditStatesValue_' + _stateIndex)
                                        .next('a')
                                        .prop('style', '');
                                } else {
                                    $('#tableDialogDeviceEditStatesValue_' + _stateIndex)
                                        .next('a')
                                        .prop('style', 'display: none !important;');
                                }
                                if (
                                    dialogDeviceEditStatesTable[stateIndex].state == 'BADGE_COLOR' ||
                                    dialogDeviceEditStatesTable[stateIndex].state == 'OVERLAY_INACTIVE_COLOR' ||
                                    dialogDeviceEditStatesTable[stateIndex].state == 'OVERLAY_ACTIVE_COLOR' ||
                                    dialogDeviceEditStatesTable[stateIndex].state == 'GLOW_INACTIVE_COLOR' ||
                                    dialogDeviceEditStatesTable[stateIndex].state == 'GLOW_ACTIVE_COLOR'
                                ) {
                                    //COLOR - init ColorPicker
                                    var $targetInput = $('#tableDialogDeviceEditStatesValue_' + _stateIndex);
                                    if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'const') {
                                        var oldVal = $targetInput.val();
                                        if (!$targetInput.data('materialize-color-picker-initialized')) {
                                            $targetInput.colorpicker().on('changeColor', function (event) {
                                                if (event.color)
                                                    $(this).css(
                                                        'border-right',
                                                        '10px solid rgba(' +
                                                            event.color.toRGB().r +
                                                            ', ' +
                                                            event.color.toRGB().g +
                                                            ', ' +
                                                            event.color.toRGB().b +
                                                            ', ' +
                                                            event.color.toRGB().a +
                                                            ')',
                                                    );
                                            });
                                            if (oldVal == '') $targetInput.val('');
                                            $targetInput.on('change', function () {
                                                if ($(this).val() == '') {
                                                    $(this).css('border-right', '0px solid black');
                                                } else {
                                                    $(this).trigger('changeColor');
                                                }
                                            });
                                            $targetInput.on('blur', function () {
                                                dialogDeviceEditStatesTable[$targetInput.data('index')].value =
                                                    $(this).val();
                                                console.log('Saved color-picker value ' + $(this).val());
                                            });
                                            $targetInput.data('materialize-color-picker-initialized', true);
                                        }
                                        if (isValidColorString(oldVal)) {
                                            $targetInput.trigger('change');
                                        }
                                    } else {
                                        if ($targetInput.data('materialize-color-picker-initialized')) {
                                            $targetInput.colorpicker('destroy');
                                            $targetInput.data('materialize-color-picker-initialized', false);
                                        }
                                        $targetInput.css('border-right', '0px solid black');
                                    }
                                }
                            })(); //<--End Closure
                        })
                        .trigger('change');
                }
            }
            $(this).select();
        });
        //Button-Functions
        $lines.find('a[data-command]').each(function () {
            var command = $(this).data('command');
            //Edit (SelectId, Edit Text or Edit Array)
            if (command === 'edit') {
                $(this).on('click', function () {
                    var stateIndex = $(this).data('index');
                    var stateValue = (dialogDeviceEditStatesTable[stateIndex].value || '').replace(/\\n/g, '\n');
                    if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'const') {
                        //const
                        if (
                            (dialogDeviceEditStatesTable[stateIndex].state == 'URL' ||
                                dialogDeviceEditStatesTable[stateIndex].state == 'BACKGROUND_URL') &&
                            (stateValue.indexOf('./images/widgets/') == 0 ||
                                stateValue.indexOf('./../iqontrol.meta/userimages/userwidgets/') == 0)
                        ) {
                            //const - WIDGET - open Widget dialog
                            (function () {
                                //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
                                var _stateValue = stateValue;
                                getWidgetSettings(_stateValue, true, dialogDeviceEditOptions, false, function (result) {
                                    var _stateIndex = stateIndex;
                                    var _stateValue = stateValue;
                                    if (result.url) {
                                        $('#tableDialogDeviceEditStatesValue_' + stateIndex)
                                            .val(result.url)
                                            .trigger('change');
                                    }
                                    for (option in result.options) {
                                        if (iQontrolRoles['iQontrolWidget'].options[option]) {
                                            var optionsIndex = dialogDeviceEditOptions.findIndex(function (element) {
                                                return element.option == option;
                                            });
                                            if (optionsIndex != -1) {
                                                dialogDeviceEditOptions[optionsIndex].value = result.options[option];
                                            } else {
                                                var entry = { option: option, value: result.options[option] };
                                                dialogDeviceEditOptions.push(entry);
                                            }
                                        }
                                    }
                                    dialogDeviceEditOptionsBuildOptionsContent();
                                });
                            })(); //<--End Closure
                        } else if (
                            dialogDeviceEditStatesTable[stateIndex].state == 'BADGE_COLOR' ||
                            dialogDeviceEditStatesTable[stateIndex].state == 'OVERLAY_INACTIVE_COLOR' ||
                            dialogDeviceEditStatesTable[stateIndex].state == 'OVERLAY_ACTIVE_COLOR' ||
                            dialogDeviceEditStatesTable[stateIndex].state == 'GLOW_INACTIVE_COLOR' ||
                            dialogDeviceEditStatesTable[stateIndex].state == 'GLOW_ACTIVE_COLOR'
                        ) {
                            //const - COLOR - open Colorpicker
                            var $targetInput = $('#tableDialogDeviceEditStatesValue_' + stateIndex);
                            if ($targetInput.data('materialize-color-picker-initialized')) {
                                $targetInput.colorpicker('show');
                            }
                        } else {
                            //const TEXT - open editText dialog
                            initDialog(
                                'dialogDeviceEditStateConstant',
                                function () {
                                    //save dialog
                                    var stateIndex = $('#dialogDeviceEditStateConstantIndex').val();
                                    $('#tableDialogDeviceEditStatesValue_' + stateIndex)
                                        .val($('#dialogDeviceEditStateConstantTextarea').val().replace(/\n/g, '\\n'))
                                        .trigger('change');
                                },
                                function () {
                                    //init dialog function
                                    $('#dialogDeviceEditStateConstantName').html(
                                        dialogDeviceEditStatesTable[stateIndex].state || '',
                                    );
                                    $('#dialogDeviceEditStateConstantIndex').val(stateIndex);
                                    $('#dialogDeviceEditStateConstantTextarea').val(
                                        (dialogDeviceEditStatesTable[stateIndex].value || '').replace(/\\n/g, '\n'),
                                    );
                                    $('#dialogDeviceEditStateConstantTextarea').trigger('autoresize');
                                },
                            );
                        }
                    } else if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'array') {
                        //array - open editArray dialog
                        initDialog(
                            'dialogDeviceEditStateArray',
                            function () {
                                //save dialog
                                var stateIndex = $('#dialogDeviceEditStateArrayIndex').val();
                                $('#tableDialogDeviceEditStatesValue_' + stateIndex)
                                    .val(JSON.stringify(dialogDeviceEditStateArrayTable))
                                    .trigger('change');
                            },
                            function () {
                                //init dialog function
                                $('#dialogDeviceEditStateArrayName').html(
                                    dialogDeviceEditStatesTable[stateIndex].state || '',
                                );
                                var _viewIndex = $('#dialogDeviceEditViewIndex').val();
                                var _deviceIndex = $('#dialogDeviceEditDeviceIndex').val();
                                var showAdditionalCols = '';
                                if (dialogDeviceEditStatesTable[stateIndex].state == 'VALVE_STATES')
                                    showAdditionalCols = '';
                                if (dialogDeviceEditStatesTable[stateIndex].state == 'INFO_A')
                                    showAdditionalCols = 'icon';
                                if (dialogDeviceEditStatesTable[stateIndex].state == 'INFO_B')
                                    showAdditionalCols = 'icon';
                                if (dialogDeviceEditStatesTable[stateIndex].state == 'ADDITIONAL_CONTROLS')
                                    showAdditionalCols = 'icon role caption heading halfWidth';
                                if (dialogDeviceEditStatesTable[stateIndex].state == 'ADDITIONAL_INFO')
                                    showAdditionalCols = '';
                                if (dialogDeviceEditStatesTable[stateIndex].state == 'REMOTE_CHANNELS')
                                    showAdditionalCols = 'hideName icon';
                                if (dialogDeviceEditStatesTable[stateIndex].state == 'REMOTE_ADDITIONAL_BUTTONS')
                                    showAdditionalCols = 'hideName icon';
                                if (dialogDeviceEditStatesTable[stateIndex].state.indexOf('INFO_') == 0)
                                    $('#dialogDeviceEditStateArray .btn-preview').data('preview-open-dialog', false);
                                else
                                    $('#dialogDeviceEditStateArray .btn-preview').data(
                                        'preview-open-dialog',
                                        'iqontrol.' +
                                            instance +
                                            '.Views.' +
                                            views[_viewIndex].commonName +
                                            '.devices.' +
                                            _deviceIndex,
                                    );
                                $('#dialogDeviceEditStateArrayIndex').val(stateIndex);
                                $('#dialogDeviceEditStateArrayShowAdditionalCols').val(showAdditionalCols);
                                dialogDeviceEditStateArrayTable =
                                    tryParseJSON(dialogDeviceEditStatesTable[stateIndex].value) || [];
                                values2table(
                                    'tableDialogDeviceEditStateArray',
                                    dialogDeviceEditStateArrayTable,
                                    onChange,
                                    ontableDialogDeviceEditStateArrayReady,
                                );
                            },
                        );
                    } else {
                        //linkedState - open selectID dialog
                        $('#dialogSelectId').data('selectidfor', 'tableDialogDeviceEditStatesValue_' + stateIndex);
                        initSelectId(function (sid) {
                            sid.selectId(
                                'show',
                                $('#tableDialogDeviceEditStatesValue_' + stateIndex).val(),
                                { type: 'state' },
                                function (newId) {
                                    if (newId) {
                                        $('#' + $('#dialogSelectId').data('selectidfor'))
                                            .val(newId)
                                            .trigger('change');
                                    }
                                },
                            );
                        });
                    }
                });
            }
            //OpenCustom
            if (command === 'openCustom') {
                var stateIndex = $(this).data('index');
                $(this).prop('id', 'tableDialogDeviceEditStatesOpenCustom_' + stateIndex);
                $(this).on('click', function (e) {
                    var _stateIndex = $(this).data('index');
                    if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'linkedState') {
                        //linkedState - open editText dialog
                        var _stateId = $('#tableDialogDeviceEditStatesValue_' + _stateIndex).val();
                        if (_stateId != '') {
                            var url = window.location.origin + '/#tab-objects/customs/' + _stateId;
                            window.open(url);
                        }
                    }
                });
                tableDialogDeviceEditStatesEnhanceEditCustom(stateIndex);
            }
        });
    }
    function tableDialogDeviceEditStatesEnhanceEditCustom(stateIndex) {
        var toDo = function () {
            if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'linkedState') {
                //linkedState
                var stateId = $('#tableDialogDeviceEditStatesValue_' + stateIndex).val();
                var stateObject = iobrokerObjects[stateId];
                if (typeof stateObject != udef) {
                    if (
                        typeof stateObject != udef &&
                        typeof stateObject.common.custom != udef &&
                        stateObject.common.custom != null &&
                        typeof stateObject.common.custom[adapter + '.' + instance] != udef &&
                        stateObject.common.custom[adapter + '.' + instance] != null
                    ) {
                        $('#tableDialogDeviceEditStatesOpenCustom_' + stateIndex)
                            .removeClass('disabled')
                            .find('i')
                            .removeClass('grey lighten-2')
                            .addClass('indigo')
                            .html('build');
                    } else {
                        $('#tableDialogDeviceEditStatesOpenCustom_' + stateIndex)
                            .removeClass('disabled')
                            .find('i')
                            .removeClass('indigo lighten-2')
                            .addClass('grey')
                            .html('build');
                    }
                } else {
                    $('#tableDialogDeviceEditStatesOpenCustom_' + stateIndex)
                        .addClass('disabled')
                        .find('i')
                        .removeClass('indigo')
                        .addClass('grey lighten-2')
                        .html('build');
                }
            } else {
                $('#tableDialogDeviceEditStatesOpenCustom_' + stateIndex)
                    .addClass('disabled')
                    .find('i')
                    .removeClass('indigo')
                    .addClass('grey lighten-2')
                    .html('build');
            }
        };
        if (iobrokerObjectsReady) {
            toDo();
        } else {
            iobrokerObjectsReadyFunctions.push(toDo);
        }
    }
    function dialogDeviceEditStatesWidgetSelected(value) {
        getWidgetSettings(value, true, dialogDeviceEditOptions, true, function (result) {
            if (result.url) {
                $enhanceTextInputToComboboxActualTarget.val(result.url).trigger('change');
            }
            for (option in result.options) {
                if (iQontrolRoles['iQontrolWidget'].options[option]) {
                    var optionsIndex = dialogDeviceEditOptions.findIndex(function (element) {
                        return element.option == option;
                    });
                    if (optionsIndex != -1) {
                        dialogDeviceEditOptions[optionsIndex].value = result.options[option];
                    } else {
                        var entry = { option: option, value: result.options[option] };
                        dialogDeviceEditOptions.push(entry);
                    }
                }
            }
            dialogDeviceEditOptionsBuildOptionsContent();
        });
    }

    //Enhance TableDialogDeviceEditStateArrayReady
    function ontableDialogDeviceEditStateArrayReady() {
        var $div = $('#tableDialogDeviceEditStateArray');
        var $table = $div.find('.table-values');
        var $lines = $table.find('.table-lines');
        var showAdditionalCols = $('#dialogDeviceEditStateArrayShowAdditionalCols').val();
        //Hide Heading / Type / Icon / Role
        $table.find('th[data-name]').each(function () {
            $(this).show(0);
            var name = $(this).data('name');
            if (name === 'commonRole' && showAdditionalCols.indexOf('commonRole') == -1) {
                $(this).hide(0);
            } else if (name === 'icon' && showAdditionalCols.indexOf('icon') == -1) {
                $(this).hide(0);
            } else if (name === 'role' && showAdditionalCols.indexOf('role') == -1) {
                $(this).hide(0);
            } else if (name === 'caption' && showAdditionalCols.indexOf('caption') == -1) {
                $(this).hide(0);
            } else if (name === 'heading' && showAdditionalCols.indexOf('heading') == -1) {
                $(this).hide(0);
            } else if (name === 'hideName' && showAdditionalCols.indexOf('hideName') == -1) {
                $(this).hide(0);
            } else if (name === 'halfWidth' && showAdditionalCols.indexOf('halfWidth') == -1) {
                $(this).hide(0);
            }
        });
        if (showAdditionalCols.indexOf('heading') == -1) $('.dialogDeviceEditStateArrayInfoHeading').hide();
        else $('.dialogDeviceEditStateArrayInfoHeading').show();
        $lines.find('.values-input[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'commonRole' && showAdditionalCols.indexOf('commonRole') == -1) {
                $(this).parents('td').hide(0);
            } else if (name === 'icon' && showAdditionalCols.indexOf('icon') == -1) {
                $(this).parents('td').hide(0);
            } else if (name === 'role' && showAdditionalCols.indexOf('role') == -1) {
                $(this).parents('td').hide(0);
            } else if (name === 'caption' && showAdditionalCols.indexOf('caption') == -1) {
                $(this).parents('td').hide(0);
            } else if (name === 'heading' && showAdditionalCols.indexOf('heading') == -1) {
                $(this).parents('td').hide(0);
            } else if (name === 'hideName' && showAdditionalCols.indexOf('hideName') == -1) {
                $(this).parents('td').hide(0);
            } else if (name === 'halfWidth' && showAdditionalCols.indexOf('halfWidth') == -1) {
                $(this).parents('td').hide(0);
            }
        });
        //Add id for selectId-Dialog
        $lines.find('input[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'value') {
                var arrayIndex = $(this).data('index');
                $(this).prop('id', 'tableDialogDeviceEditStateArrayValue_' + arrayIndex);
                $(this).on('input change', function () {
                    tableDialogDeviceEditStateArrayEnhanceEditCustom(arrayIndex);
                });
            }
        });
        //Add images to Selectbox for Icons (Symbols)
        if (showAdditionalCols.indexOf('icon') != -1) {
            var inbuiltSymbolsString = '';
            inbuiltSymbols.forEach(function (symbol) {
                if (symbol != '') {
                    inbuiltSymbolsString +=
                        ';' + ('./images/symbols/' + symbol).replace(/\//g, '\\') + '/' + symbol.replace(/\//g, '\\');
                }
            });
            if (inbuiltSymbols.length > 0) {
                inbuiltSymbolsString = ';[' + _('Inbuilt Symbols') + ':]' + inbuiltSymbolsString;
            }
            var imagenames = [];
            imagesDirs.forEach(function (imagesDir) {
                if (imagesDir.dirname.indexOf('/usersymbols') == 0 && imagesDir.files && imagesDir.files.length > 0) {
                    imagenames.push('[' + imagesDir.dirnameBS + ':]');
                    imagesDir.files.forEach(function (file) {
                        imagenames.push('.\\..' + userfilesImagePathBS + file.filenameBS + '/' + file.filenameBS);
                    });
                }
            });
            if (imagenames.length > 0) {
                imagenames.unshift(';[' + _('User Symbols') + ':]');
            }
            enhanceTextInputToCombobox(
                '#tableDialogDeviceEditStateArray input[data-name="icon"]',
                '/' +
                    _('(Default)') +
                    '/' +
                    (previewLink + '/images/icons/blank.png').replace(/\//g, '\\') +
                    inbuiltSymbolsString +
                    imagenames.join(';'),
                true,
            );
        }
        //Button-Functions
        $lines.find('a[data-command]').each(function () {
            var command = $(this).data('command');
            //Edit (SelectId)
            if (command === 'edit') {
                $(this).on('click', function () {
                    var _arrayIndex = $(this).data('index');
                    $('#dialogSelectId').data('selectidfor', 'tableDialogDeviceEditStateArrayValue_' + _arrayIndex);
                    initSelectId(function (sid) {
                        sid.selectId(
                            'show',
                            $('#tableDialogDeviceEditStateArrayValue_' + _arrayIndex).val(),
                            { type: 'state' },
                            function (newId) {
                                if (newId) {
                                    $('#' + $('#dialogSelectId').data('selectidfor'))
                                        .val(newId)
                                        .trigger('change');
                                }
                            },
                        );
                    });
                });
            }
            //OpenCustom
            if (command === 'openCustom') {
                var arrayIndex = $(this).data('index');
                $(this).prop('id', 'tableDialogDeviceEditStateArrayOpenCustom_' + arrayIndex);
                $(this).on('click', function (e) {
                    var _arrayIndex = $(this).data('index');
                    var _stateId = $('#tableDialogDeviceEditStateArrayValue_' + _arrayIndex).val();
                    if (_stateId != '') {
                        var url = window.location.origin + '/#tab-objects/customs/' + _stateId;
                        window.open(url);
                    }
                });
                tableDialogDeviceEditStateArrayEnhanceEditCustom(arrayIndex);
            }
            //Drag-Icon
            if (command === 'drag_handle') {
                var imageIndex = $(this).data('index');
                $(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
            }
        });
        //Make table sortable
        $('#tableDialogDeviceEditStateArray tbody').sortable({
            helper: fixHelper,
            stop: function (event, ui) {
                console.log('Drag ended, start resorting...');
                $('#tableDialogDeviceEditStateArray tbody').sortable('disable');
                var sequence = [];
                $('#tableDialogDeviceEditStateArray')
                    .find('.table-values')
                    .find('.table-lines')
                    .find('tr')
                    .each(function () {
                        sequence.push($(this).data('index'));
                    });
                var tableResorted = [];
                for (var i = 0; i < sequence.length; i++) {
                    tableResorted.push(dialogDeviceEditStateArrayTable[sequence[i]]);
                }
                dialogDeviceEditStateArrayTable = tableResorted;
                onChange();
                values2table(
                    'tableDialogDeviceEditStateArray',
                    dialogDeviceEditStateArrayTable,
                    onChange,
                    ontableDialogDeviceEditStateArrayReady,
                );
                $('#tableDialogDeviceEditStateArray tbody').sortable('enable');
                console.log('resorted.');
            },
            axis: 'y',
            handle: "a[data-command='drag_handle']",
        });
    }
    function tableDialogDeviceEditStateArrayEnhanceEditCustom(arrayIndex) {
        var toDo = function () {
            var stateId = $('#tableDialogDeviceEditStateArrayValue_' + arrayIndex).val();
            var stateObject = iobrokerObjects[stateId];
            if (typeof stateObject != udef) {
                if (
                    typeof stateObject != udef &&
                    typeof stateObject.common.custom != udef &&
                    stateObject.common.custom != null &&
                    typeof stateObject.common.custom[adapter + '.' + instance] != udef &&
                    stateObject.common.custom[adapter + '.' + instance] != null
                ) {
                    $('#tableDialogDeviceEditStateArrayOpenCustom_' + arrayIndex)
                        .removeClass('disabled')
                        .find('i')
                        .removeClass('grey lighten-2')
                        .addClass('indigo')
                        .html('build');
                } else {
                    $('#tableDialogDeviceEditStateArrayOpenCustom_' + arrayIndex)
                        .removeClass('disabled')
                        .find('i')
                        .removeClass('indigo lighten-2')
                        .addClass('grey')
                        .html('build');
                }
            } else {
                $('#tableDialogDeviceEditStateArrayOpenCustom_' + arrayIndex)
                    .addClass('disabled')
                    .find('i')
                    .removeClass('indigo')
                    .addClass('grey lighten-2')
                    .html('build');
            }
        };
        if (iobrokerObjectsReady) {
            toDo();
        } else {
            iobrokerObjectsReadyFunctions.push(toDo);
        }
    }

    //Build options content
    function dialogDeviceEditOptionsBuildOptionsContent() {
        if (dialogDeviceEditCommonRole) {
            var dialogDeviceEditOptionsComboboxes = [];
            var dialogDeviceEditOptionsContent =
                "<ul class='collapsible' id='dialogDeviceEditOptionsContentCollapsible'>";
            var dialogDeviceEditOptionsContentCollapsibleOpen = false;
            for (entry in iQontrolRoles[dialogDeviceEditCommonRole].options) {
                //push all corresponding options for the selected role into the table
                var name = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].name;
                var type = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].type;
                var value =
                    (
                        dialogDeviceEditOptions.find(function (element) {
                            return element.option == entry;
                        }) || {}
                    ).value ||
                    iQontrolRoles[dialogDeviceEditCommonRole].options[entry].default ||
                    '';
                switch (type) {
                    case 'section':
                        if (dialogDeviceEditOptionsContentCollapsibleOpen) {
                            dialogDeviceEditOptionsContent += '</div>';
                            dialogDeviceEditOptionsContent += '</li>';
                        }
                        dialogDeviceEditOptionsContentCollapsibleOpen = true;
                        dialogDeviceEditOptionsContent += '<li>';
                        dialogDeviceEditOptionsContent += "<div class='collapsible-header'>";
                        dialogDeviceEditOptionsContent +=
                            "		<i class='material-icons'>expand_more</i><h6 class='translate'>" + _(name) + ':</h6>';
                        dialogDeviceEditOptionsContent += '</div>';
                        dialogDeviceEditOptionsContent += "<div class='collapsible-body'>";
                        break;

                    case 'divider':
                        dialogDeviceEditOptionsContent += "<div class='divider'></div>";
                        break;

                    case 'number':
                        var min = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].min || 0;
                        var max = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].max || 100;
                        var step = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].step || 1;
                        dialogDeviceEditOptionsContent += "<div class='row'><div class='input-field col s12 m12 l12'>";
                        dialogDeviceEditOptionsContent +=
                            "    <input class='value dialogDeviceEditOption validate validateOnlyError' data-option='" +
                            entry +
                            "' data-type='number' type='number' min='" +
                            min +
                            "' max='" +
                            max +
                            "' step='" +
                            step +
                            "' name='dialogDeviceEditOption_" +
                            entry +
                            "' id='dialogDeviceEditOption_" +
                            entry +
                            "'  value='" +
                            value +
                            "' />";
                        dialogDeviceEditOptionsContent +=
                            "    <label for='dialogDeviceEditOption_" +
                            entry +
                            "' class='translate'>" +
                            _(name) +
                            '</label>';
                        dialogDeviceEditOptionsContent +=
                            "    <span class='helper-text' data-error='" +
                            min +
                            ' - ' +
                            max +
                            "' data-success=''></span>";
                        dialogDeviceEditOptionsContent += '</div></div>';
                        break;

                    case 'select':
                    case 'multipleSelect':
                        var selectOptionsString =
                            iQontrolRoles[dialogDeviceEditCommonRole].options[entry].selectOptions;
                        var selectOptions = selectOptionsString.split(';');
                        var selectOptionsContent = '';
                        selectOptions.forEach(function (option) {
                            var parts = option.split('/');
                            if (parts.length < 2) parts.push(parts[0]);
                            selectOptionsContent +=
                                "        <option value='" +
                                parts[0] +
                                "' " +
                                (type == 'multipleSelect'
                                    ? value.indexOf(parts[0]) > -1
                                        ? 'selected'
                                        : ''
                                    : parts[0] == value
                                      ? 'selected'
                                      : '') +
                                " class='translate'>" +
                                _(parts[1] || parts[0]) +
                                '</option>';
                        });
                        dialogDeviceEditOptionsContent += "<div class='row'><div class='input-field col s12 m12 l12'>";
                        dialogDeviceEditOptionsContent +=
                            '    <select' +
                            (type == 'multipleSelect' ? ' multiple' : '') +
                            " class='value dialogDeviceEditOption' data-option='" +
                            entry +
                            "' data-type='select' name='dialogDeviceEditOption_" +
                            entry +
                            "' id='dialogDeviceEditOption_" +
                            entry +
                            "'>" +
                            selectOptionsContent +
                            '</select>';
                        dialogDeviceEditOptionsContent +=
                            "    <label for='dialogDeviceEditOption_" + entry + "' class='translate'></label>";
                        dialogDeviceEditOptionsContent += "    <span class='translate'>" + _(name) + '</span>';
                        dialogDeviceEditOptionsContent += '</div></div>';
                        break;

                    case 'combobox':
                        var options = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].selectOptions;
                        var iconsFromOption =
                            typeof iQontrolRoles[dialogDeviceEditCommonRole].options[entry].iconsFromOption != udef
                                ? iQontrolRoles[dialogDeviceEditCommonRole].options[entry].iconsFromOption
                                : false;
                        dialogDeviceEditOptionsComboboxes.push({
                            id: 'dialogDeviceEditOption_' + entry,
                            options: options,
                            iconsFromOption: iconsFromOption,
                        });
                        dialogDeviceEditOptionsContent += "<div class='row'><div class='input-field col s12 m12 l12'>";
                        dialogDeviceEditOptionsContent +=
                            "    <input class='value dialogDeviceEditOption' data-option='" +
                            entry +
                            "' data-type='combobox' type='text' name='dialogDeviceEditOption_" +
                            entry +
                            "' id='dialogDeviceEditOption_" +
                            entry +
                            "'  value='" +
                            value +
                            "' placeholder='' />";
                        dialogDeviceEditOptionsContent +=
                            "    <label for='dialogDeviceEditOption_" +
                            entry +
                            "' class='translate'>" +
                            _(name) +
                            '</label>';
                        dialogDeviceEditOptionsContent += '</div></div>';
                        break;

                    case 'checkbox':
                        if (value == 'true') value = true;
                        if (value == 'false') value = false;
                        dialogDeviceEditOptionsContent += "<div class='input-field col s12 m12 l12'>";
                        dialogDeviceEditOptionsContent += '    <p><label>';
                        dialogDeviceEditOptionsContent +=
                            "        <input class='value dialogDeviceEditOption filled-in' data-option='" +
                            entry +
                            "' data-type='checkbox' type='checkbox' name='dialogDeviceEditOption_" +
                            entry +
                            "' id='dialogDeviceEditOption_" +
                            entry +
                            "' " +
                            (value ? "checked='checked'" : '') +
                            ' />';
                        dialogDeviceEditOptionsContent += '        <span>' + _(name) + '</span>';
                        dialogDeviceEditOptionsContent += '    </label></p>';
                        dialogDeviceEditOptionsContent += '</div>';
                        break;

                    case 'color':
                        dialogDeviceEditOptionsContent += "<div class='row'><div class='input-field col s12 m12 l12'>";
                        dialogDeviceEditOptionsContent +=
                            "    <input class='value MaterializeColorPicker validate validateOnlyError dialogDeviceEditOption' data-option='" +
                            entry +
                            "' data-type='color' type='text' name='dialogDeviceEditOption_" +
                            entry +
                            "' id='dialogDeviceEditOption_" +
                            entry +
                            "'  value='" +
                            value +
                            "' placeholder='rgb(0,0,0)' />";
                        dialogDeviceEditOptionsContent +=
                            "    <label for='dialogDeviceEditOption_" +
                            entry +
                            "' class='translate'>" +
                            _(name) +
                            '</label>';
                        dialogDeviceEditOptionsContent += "    <span class='helper-text'></span>";
                        dialogDeviceEditOptionsContent += '</div></div>';
                        break;

                    case 'icon':
                        //Default Icons
                        switch (entry) {
                            case 'batteryIcon_on':
                            case 'unreachIcon_on':
                            case 'errorIcon_on':
                                var indicator;
                                switch (entry) {
                                    case 'batteryIcon_on':
                                        indicator = 'BATTERY';
                                        break;

                                    case 'unreachIcon_on':
                                        indicator = 'UNREACH';
                                        break;

                                    case 'errorIcon_on':
                                        indicator = 'ERROR';
                                        break;
                                }
                                var options = '[' + _('Default Icon') + ':]';
                                options +=
                                    ';/' +
                                    _('(Default)') +
                                    '/' +
                                    (
                                        previewLink +
                                        '/' +
                                        ((optionsLayoutDefaultIcons[indicator] &&
                                            optionsLayoutDefaultIcons[indicator][entry]) ||
                                            (optionsLayoutDefaultIconsStandard[indicator] &&
                                                optionsLayoutDefaultIconsStandard[indicator][entry]) ||
                                            '')
                                    ).replace(/\//g, '\\');
                                options += ';[' + _('Typical Icons') + ':]';
                                for (iconPreset in iconPresets) {
                                    for (icon in iconPresets[iconPreset].iconEquivalents[indicator]) {
                                        options +=
                                            ';' +
                                            iconPresets[iconPreset].iconEquivalents[indicator][icon].replace(
                                                /\//g,
                                                '\\',
                                            ) +
                                            '/' +
                                            iconPresets[iconPreset].iconEquivalents[indicator][icon].replace(
                                                /\//g,
                                                '\\',
                                            );
                                    }
                                }
                                break;

                            default:
                                var options = '[' + _('Default Icon') + ':]';
                                options +=
                                    ';/' +
                                    _('(Default)') +
                                    '/' +
                                    (
                                        previewLink +
                                        '/' +
                                        ((optionsLayoutDefaultIcons[dialogDeviceEditCommonRole] &&
                                            optionsLayoutDefaultIcons[dialogDeviceEditCommonRole][entry]) ||
                                            (optionsLayoutDefaultIconsStandard[dialogDeviceEditCommonRole] &&
                                                optionsLayoutDefaultIconsStandard[dialogDeviceEditCommonRole][entry]) ||
                                            '')
                                    ).replace(/\//g, '\\');
                                var typicalIcons = [];
                                for (iconPreset in iconPresets) {
                                    for (typicalIconEquivalent in iQontrolRoles[dialogDeviceEditCommonRole].options[
                                        entry
                                    ].typicalIconEquivalents) {
                                        for (icon in iconPresets[iconPreset].iconEquivalents[
                                            iQontrolRoles[dialogDeviceEditCommonRole].options[entry]
                                                .typicalIconEquivalents[typicalIconEquivalent]
                                        ]) {
                                            typicalIcons.push(
                                                iconPresets[iconPreset].iconEquivalents[
                                                    iQontrolRoles[dialogDeviceEditCommonRole].options[entry]
                                                        .typicalIconEquivalents[typicalIconEquivalent]
                                                ][icon],
                                            );
                                        }
                                    }
                                }
                                if (typicalIcons.length) {
                                    options += ';[' + _('Typical Icons') + ':]';
                                    typicalIcons.forEach(function (typicalIcon, index) {
                                        if (typicalIcon != '')
                                            options +=
                                                ';' +
                                                typicalIcon.replace(/\//g, '\\') +
                                                '/' +
                                                typicalIcon.replace(/\//g, '\\');
                                    });
                                }
                        }
                        //Blank Icon
                        options += ';[' + _('No Icon') + ':]';
                        options +=
                            ';' +
                            './images/icons/blank.png'.replace(/\//g, '\\') +
                            '/' +
                            _('No Icon') +
                            '/' +
                            (previewLink + '/images/icons/checkboard.png').replace(/\//g, '\\');
                        //Progress-Bars
                        var progressbars = '';
                        progressbars += ';[' + _('Progress-Bars') + ':]';
                        progressbars +=
                            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22red%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/' +
                            _('Rectangle') +
                            ' ' +
                            _('red') +
                            '/' +
                            (previewLink + '/images/icons/progressbar_square_red.png').replace(/\//g, '\\');
                        progressbars +=
                            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22green%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/' +
                            _('Rectangle') +
                            ' ' +
                            _('green') +
                            '/' +
                            (previewLink + '/images/icons/progressbar_square_green.png').replace(/\//g, '\\');
                        progressbars +=
                            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22blue%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/' +
                            _('Rectangle') +
                            ' ' +
                            _('blue') +
                            '/' +
                            (previewLink + '/images/icons/progressbar_square_blue.png').replace(/\//g, '\\');
                        progressbars +=
                            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22yellow%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/' +
                            _('Rectangle') +
                            ' ' +
                            _('yellow') +
                            '/' +
                            (previewLink + '/images/icons/progressbar_square_yellow.png').replace(/\//g, '\\');
                        progressbars +=
                            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22orange%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/' +
                            _('Rectangle') +
                            ' ' +
                            _('orange') +
                            '/' +
                            (previewLink + '/images/icons/progressbar_square_orange.png').replace(/\//g, '\\');
                        progressbars +=
                            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22purple%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/' +
                            _('Rectangle') +
                            ' ' +
                            _('purple') +
                            '/' +
                            (previewLink + '/images/icons/progressbar_square_purple.png').replace(/\//g, '\\');
                        progressbars +=
                            ';[VARIABLE]data%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/' +
                            _('Circle') +
                            ' ' +
                            _('inactive') +
                            '/' +
                            (previewLink + '/images/icons/progressbar_circle_inactive.png').replace(/\//g, '\\');
                        progressbars +=
                            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22red%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/' +
                            _('Circle') +
                            ' ' +
                            _('red') +
                            '/' +
                            (previewLink + '/images/icons/progressbar_circle_red.png').replace(/\//g, '\\');
                        progressbars +=
                            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22green%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/' +
                            _('Circle') +
                            ' ' +
                            _('green') +
                            '/' +
                            (previewLink + '/images/icons/progressbar_circle_green.png').replace(/\//g, '\\');
                        progressbars +=
                            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22blue%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/' +
                            _('Circle') +
                            ' ' +
                            _('blue') +
                            '/' +
                            (previewLink + '/images/icons/progressbar_circle_blue.png').replace(/\//g, '\\');
                        progressbars +=
                            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22yellow%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/' +
                            _('Circle') +
                            ' ' +
                            _('yellow') +
                            '/' +
                            (previewLink + '/images/icons/progressbar_circle_yellow.png').replace(/\//g, '\\');
                        progressbars +=
                            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22orange%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/' +
                            _('Circle') +
                            ' ' +
                            _('orange') +
                            '/' +
                            (previewLink + '/images/icons/progressbar_circle_orange.png').replace(/\//g, '\\');
                        progressbars +=
                            ';[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22purple%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/' +
                            _('Circle') +
                            ' ' +
                            _('purple') +
                            '/' +
                            (previewLink + '/images/icons/progressbar_circle_purple.png').replace(/\//g, '\\');
                        options += progressbars;
                        //Inbuilt Icons
                        options += ';[' + _('Inbuilt Icons') + ':]';
                        inbuiltIcons.forEach(function (inbuiltIcon) {
                            if (inbuiltIcon != '') {
                                options +=
                                    ';' + inbuiltIcon.replace(/\//g, '\\') + '/' + inbuiltIcon.replace(/\//g, '\\');
                            }
                        });
                        //User Icons
                        var imagenames = [];
                        imagesDirs.forEach(function (imagesDir) {
                            if (
                                imagesDir.dirname.indexOf('/usericons') == 0 &&
                                imagesDir.files &&
                                imagesDir.files.length > 0
                            ) {
                                imagenames.push('[' + imagesDir.dirnameBS + ':]');
                                imagesDir.files.forEach(function (file) {
                                    imagenames.push(
                                        '.\\..' + userfilesImagePathBS + file.filenameBS + '/' + file.filenameBS,
                                    );
                                });
                            }
                        });
                        if (imagenames.length > 0) {
                            options += ';[' + _('User Icons') + ':]';
                            imagenames.forEach(function (option) {
                                options += ';' + option;
                            });
                        }
                        //Icons Combobox
                        dialogDeviceEditOptionsComboboxes.push({
                            id: 'dialogDeviceEditOption_' + entry,
                            options: options,
                        });
                        dialogDeviceEditOptionsContent += "<div class='row'><div class='input-field col s12 m12 l12'>";
                        dialogDeviceEditOptionsContent +=
                            "    <input class='value dialogDeviceEditOption icon' data-option='" +
                            entry +
                            "' data-type='icon' type='text' name='dialogDeviceEditOption_" +
                            entry +
                            "' id='dialogDeviceEditOption_" +
                            entry +
                            "'  value='" +
                            value +
                            "' placeholder='" +
                            _('(Default)') +
                            "' />";
                        dialogDeviceEditOptionsContent +=
                            "    <label for='dialogDeviceEditOption_" +
                            entry +
                            "' class='translate'>" +
                            _(name) +
                            '</label>';
                        dialogDeviceEditOptionsContent += '</div></div>';
                        break;

                    case 'datapoint':
                        dialogDeviceEditOptionsContent += "<div class='row'><div class='input-field col s12 m12 l12'>";
                        dialogDeviceEditOptionsContent +=
                            "    <input class='value dialogDeviceEditOption' data-option='" +
                            entry +
                            "' data-type='text' type='text' name='dialogDeviceEditOption_" +
                            entry +
                            "' id='dialogDeviceEditOption_" +
                            entry +
                            "'  value='" +
                            value +
                            "' />";
                        dialogDeviceEditOptionsContent +=
                            "    <label for='dialogDeviceEditOption_" +
                            entry +
                            "' class='translate'>" +
                            _(name) +
                            '</label>';
                        dialogDeviceEditOptionsContent +=
                            "	<a class='dialogDeviceEditOptionButton inputEdit waves-effect waves-light btn-small btn-floating' data-selectidfor='dialogDeviceEditOption_" +
                            entry +
                            "'><i class='material-icons'>edit</i></a>";
                        dialogDeviceEditOptionsContent += '</div></div>';
                        break;

                    case 'text':
                    default:
                        dialogDeviceEditOptionsContent += "<div class='row'><div class='input-field col s12 m12 l12'>";
                        dialogDeviceEditOptionsContent +=
                            "    <input class='value dialogDeviceEditOption' data-option='" +
                            entry +
                            "' data-type='text' type='text' name='dialogDeviceEditOption_" +
                            entry +
                            "' id='dialogDeviceEditOption_" +
                            entry +
                            "'  value='" +
                            value +
                            "' />";
                        dialogDeviceEditOptionsContent +=
                            "    <label for='dialogDeviceEditOption_" +
                            entry +
                            "' class='translate'>" +
                            _(name) +
                            '</label>';
                        dialogDeviceEditOptionsContent += '</div></div>';
                        break;
                }
            }
            if (dialogDeviceEditOptionsContent == '') {
                $('#dialogDeviceEditOptionsContent').html('<br><p>' + _('This role has no options.') + '</p>');
            } else {
                if (dialogDeviceEditOptionsContentCollapsibleOpen) {
                    dialogDeviceEditOptionsContent += '</div>';
                    dialogDeviceEditOptionsContent += '</li>';
                }
                dialogDeviceEditOptionsContent += '</ul>';
                $('#dialogDeviceEditOptionsContent').html(dialogDeviceEditOptionsContent);
                $('#dialogDeviceEditOptionsContentCollapsible').collapsible({ accordion: false });
                $('#dialogDeviceEditOptionsContentCollapsibleOpenAll')
                    .off('click')
                    .on('click', function () {
                        $('#dialogDeviceEditOptionsContentCollapsible').collapsible('open');
                        $('#dialogDeviceEditOptionsContentCollapsible li').addClass('active');
                    });
                $('#dialogDeviceEditOptionsContentCollapsibleCloseAll')
                    .off('click')
                    .on('click', function () {
                        $('#dialogDeviceEditOptionsContentCollapsible li').addClass('active');
                        $('#dialogDeviceEditOptionsContentCollapsible').collapsible('close');
                        $('#dialogDeviceEditOptionsContentCollapsible li').removeClass('active');
                    });
            }
            $('select.dialogDeviceEditOption').select();
            dialogDeviceEditOptionsComboboxes.forEach(function (entry) {
                enhanceTextInputToCombobox(
                    '#' + entry.id,
                    entry.options,
                    typeof entry.iconsFromOption != udef ? entry.iconsFromOption : true,
                    entry.onSelect,
                );
            });
            $('.dialogDeviceEditOptionButton.inputEdit')
                .off('click')
                .on('click', function () {
                    $('#dialogSelectId').data('selectidfor', $(this).data('selectidfor'));
                    initSelectId(function (sid) {
                        sid.selectId(
                            'show',
                            $('#' + $('#dialogSelectId').data('selectidfor')).val(),
                            { type: 'state' },
                            function (newId) {
                                if (newId) {
                                    $('#' + $('#dialogSelectId').data('selectidfor'))
                                        .val(newId)
                                        .trigger('change');
                                }
                            },
                        );
                    });
                });
            initColorpickers(onChange);
            if (M) M.updateTextFields();
            $('.dialogDeviceEditOption').on('change', onChange);
        }
    }

    //Export and import of device options
    $('#dialogDeviceEditOptionsExport').on('click', function () {
        //Select elements with class=value and build settings object
        var options = {};
        if (dialogDeviceEditCommonRole) {
            for (entry in iQontrolRoles[dialogDeviceEditCommonRole].options) {
                //push all corresponding options for the selected role into the export file
                var type = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].type;
                var defaultValue = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].default;
                var value =
                    (
                        dialogDeviceEditOptions.find(function (element) {
                            return element.option == entry;
                        }) || {}
                    ).value ||
                    iQontrolRoles[dialogDeviceEditCommonRole].options[entry].default ||
                    '';
                if (type != 'section') options[entry] = { value: value, isDefaultValue: value == defaultValue };
            }
        }
        saveStringAsLocalFile(JSON.stringify(options), 'charset=utf-8', 'text/json', 'deviceoptions.json', true);
    });
    $('#dialogDeviceEditOptionsImport').on('click', function () {
        if (dialogDeviceEditCommonRole) {
            loadLocalFileAsString('.json', function (result) {
                var resultObj = tryParseJSON(result);
                var resultObjValid = true;
                if (!(resultObj && typeof resultObj == 'object' && typeof resultObj.forEach == udef)) {
                    resultObjValid = false;
                }
                if (resultObjValid) {
                    if (confirm(_('Really overwrite existing Settings?'))) {
                        for (entry in iQontrolRoles[dialogDeviceEditCommonRole].options) {
                            //read all corresponding options for the selected role from the file
                            var type = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].type;
                            var defaultValue = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].default;
                            var value =
                                resultObj[entry] && typeof resultObj[entry].value != udef
                                    ? resultObj[entry].value
                                    : iQontrolRoles[dialogDeviceEditCommonRole].options[entry].default || '';
                            if (type != 'section')
                                (
                                    dialogDeviceEditOptions.find(function (element) {
                                        return element.option == entry;
                                    }) || {}
                                ).value = value;
                        }
                        alert(_('Settings imported.'));
                        dialogDeviceEditOptionsBuildOptionsContent();
                        onChange();
                    }
                } else {
                    alert(_('Error: Invalid data.'));
                }
            });
        } else {
            alert(_('Select Role first'));
        }
    });

    //Enhance DeviceAutocreate with functions
    var dialogDeviceAutocreateResult;
    $('#devicesAutocreateButton').on('click', function () {
        initDialog(
            'dialogDeviceAutocreate',
            function () {
                //save dialog
                views[$('#devicesSelectedView').val()].devices.push(dialogDeviceAutocreateResult);
                values2table('tableDevices', views[devicesSelectedView].devices, onChange, onTableDevicesReady);
            },
            function () {
                //init dialog function
                if ($('#dialogDeviceAutocreateSourceId').val() == '') {
                    $('#dialogDeviceAutocreateCreatePreviewButton').addClass('disabled');
                } else {
                    $('#dialogDeviceAutocreateCreatePreviewButton').removeClass('disabled');
                }
                $('#dialogDeviceAutocreatePreview').html(
                    _("Please select a device ID from ioBroker-Object-Tree and press 'Try to create preview' first."),
                );
                $('#dialogDeviceAutocreatePreviewStates').html('');
                $('#dialogDeviceAutocreate a.btn-set').addClass('disabled');
            },
        );
    });
    $('#dialogDeviceAutocreateSourceId').on('input change', function () {
        dialogDeviceAutocreateResult = {};
        if ($(this).val() == '') {
            $('#dialogDeviceAutocreateCreatePreviewButton').addClass('disabled');
        } else {
            $('#dialogDeviceAutocreateCreatePreviewButton').removeClass('disabled');
        }
        var toDo = function () {
            if (iobrokerObjects[$('#dialogDeviceAutocreateSourceId').val()]) {
                $('#dialogDeviceAutocreateSourceIdCommonName').html(
                    iobrokerObjects[$('#dialogDeviceAutocreateSourceId').val()].common.name,
                );
            } else {
                $('#dialogDeviceAutocreateSourceIdCommonName').html('');
            }
        };
        if (iobrokerObjectsReady) {
            toDo();
        } else {
            iobrokerObjectsReadyFunctions.push(toDo);
        }
        $('#dialogDeviceAutocreatePreview').html(
            _("Please select a device ID from ioBroker-Object-Tree and press 'Try to create preview' first."),
        );
        $('#dialogDeviceAutocreatePreviewStates').html('');
        $('#dialogDeviceAutocreate a.btn-set').addClass('disabled');
    });
    $('#dialogDeviceAutocreateSourceIdSelectIdButton').on('click', function () {
        initSelectId(function (sid) {
            sid.selectId('show', $('#dialogDeviceAutocreateSourceId').val(), { type: 'state' }, function (newId) {
                if (newId) {
                    $('#dialogDeviceAutocreateSourceId').val(newId).trigger('change');
                    if (M) M.updateTextFields();
                }
            });
        });
    });
    $('#dialogDeviceAutocreateCreatePreviewButton').on('click', function () {
        dialogDeviceAutocreateResult = {};
        $('#dialogDeviceAutocreateSourceId').addClass('disabled');
        $('#dialogDeviceAutocreateSourceIdSelectIdButton').addClass('disabled');
        $('#dialogDeviceAutocreateCreatePreviewButton').addClass('disabled');
        $('#dialogDeviceAutocreatePreview').html(_('Please wait...'));
        $('#dialogDeviceAutocreatePreviewStates').html('');
        $('#dialogDeviceAutocreate a.btn-set').addClass('disabled');
        var toDo = function () {
            var sourceId = $('#dialogDeviceAutocreateSourceId').val();
            var result = deviceAutocreate(sourceId, iobrokerObjects);
            $('#dialogDeviceAutocreatePreview').html(result.resultText);
            $('#dialogDeviceAutocreatePreviewStates').html(result.resultStatesText);
            $('#dialogDeviceAutocreateSourceId').removeClass('disabled');
            $('#dialogDeviceAutocreateSourceIdSelectIdButton').removeClass('disabled');
            if (result.resultValid) {
                dialogDeviceAutocreateResult = result.resultObject;
                $('#dialogDeviceAutocreate a.btn-set').removeClass('disabled');
            }
        };
        if (iobrokerObjectsReady) {
            toDo();
        } else {
            iobrokerObjectsReadyFunctions.push(toDo);
        }
    });
    function deviceAutocreate(sourceId, objects) {
        var result = {
            resultObject: {
                states: [],
                options: [],
            },
            resultText: '',
            resultStatesText: '',
            resultValid: false,
        };
        resultStatesObj = {};
        if (!objects[sourceId]) {
            result.resultText = '<blockquote>' + _('This is not a valid ID') + '</blockquote><br><br>';
        } else {
            //Find out Name
            if (typeof objects[sourceId].common.name != udef) {
                result.resultObject.commonName = objects[sourceId].common.name;
                if (typeof result.resultObject.commonName == 'object') {
                    if (typeof result.resultObject.commonName[systemLang] != udef) {
                        result.resultObject.commonName = result.resultObject.commonName[systemLang];
                    } else if (typeof resultObject.commonName['en'] != udef) {
                        result.resultObject.commonName = result.resultObject.commonName['en'];
                    } else {
                        result.resultObject.commonName[Object.keys(result.resultObject.commonName)[0]];
                    }
                }
                result.resultText += '<u>' + _('Name') + ':</u> ' + result.resultObject.commonName + '<br><br>';
                result.resultValid = true;
            } else {
                result.resultObject.commonName = _('New Device');
                result.resultText +=
                    '<blockquote>' +
                    _('The name of the device could not be determined and was set to') +
                    " \'" +
                    _('New Device') +
                    "\'</blockquote><br><br>";
            }
            //Use ChannelDetector to find out role and matching states
            var channelDetectorUsedDeviceTypeForCommonRole;
            var channelDetectorResult = channelDetector.detect({
                objects: objects,
                id: sourceId,
                ignoreIndicators: ['STICKY_UNREACH'],
            });
            if (channelDetectorResult) {
                channelDetectorResult.forEach(function (device) {
                    //Iterate through all all found device-types
                    console.log('Detected channel type ' + device.type + ':');
                    if (channelDetectorMatchTable[device.type] && channelDetectorMatchTable[device.type].matchingRole) {
                        //Fitting role found
                        console.log('   This is matched to ' + channelDetectorMatchTable[device.type].matchingRole);
                        if (!result.resultObject.commonRole) {
                            //Role was not matched before
                            console.log('   Set this as role for the new device.');
                            result.resultObject.commonRole = channelDetectorMatchTable[device.type].matchingRole;
                            channelDetectorUsedDeviceTypeForCommonRole = device.type;
                        }
                        device.states.forEach(function (state) {
                            //Iterate through all found states
                            if (state.id) {
                                //This is a state with an id
                                if (channelDetectorMatchTable[device.type].matchingStates[state.name]) {
                                    if (
                                        !resultStatesObj[
                                            channelDetectorMatchTable[device.type].matchingStates[state.name]
                                        ]
                                    ) {
                                        //Was not matched before
                                        console.log(
                                            '      ' +
                                                state.name +
                                                ' (' +
                                                state.id +
                                                ') ====> ' +
                                                channelDetectorMatchTable[device.type].matchingStates[state.name],
                                        );
                                        resultStatesObj[
                                            channelDetectorMatchTable[device.type].matchingStates[state.name]
                                        ] = state.id;
                                        result.resultValid = true;
                                        if (state.name == 'CONNECTED') {
                                            console.log(
                                                '      Set Option invertUnreach because CONNECTED is used instead of UNREACH',
                                            );
                                            result.resultObject.options.push({
                                                option: 'invertUnreach',
                                                type: 'checkbox',
                                                value: 'true',
                                            });
                                        }
                                    } else {
                                        console.log(
                                            '      ' +
                                                state.name +
                                                ' (' +
                                                state.id +
                                                ') fits to ' +
                                                channelDetectorMatchTable[device.type].matchingStates[state.name] +
                                                ' but this was already matched before.',
                                        );
                                    }
                                } else {
                                    console.log('      ' + state.name + ' (' + state.id + ') no match.');
                                }
                            }
                        });
                    }
                });
            } else {
                console.log('No Device detected.');
            }
            //Get unmatchedChildStates to match states, that were not assigned by ChannelDetector
            var unmatchedChildStates = [];
            for (id in objects) {
                if (
                    id.indexOf(sourceId) == 0 &&
                    objects[id].type == 'state' &&
                    Object.values(resultStatesObj).indexOf(id) == -1
                ) {
                    unmatchedChildStates.push(id);
                }
            }
            unmatchedChildStates.sort().reverse(); //reverse order, so that the top channel of multi-channel-devices wins
            for (i = 0; i < unmatchedChildStates.length; i++) {
                //Try to match unmatchedChildStates
                var id = unmatchedChildStates[i];
                var stateName = id.substring(id.lastIndexOf('.'), id.length);
                switch (stateName) {
                    case '.STATE':
                    case '.state':
                    case '.Switch':
                    case '.switch':
                    case '.on':
                    case '.presence':
                    case '.MOTION':
                    case '.PRESENCE_DETECTION_STATE':
                    case '.SET':
                        if (
                            typeof objects[id] !== udef &&
                            typeof objects[id].common.role != udef &&
                            objects[id].common.role == 'switch.lock'
                        ) {
                            if (!resultStatesObj['LOCK_STATE']) resultStatesObj['LOCK_STATE'] = id;
                        } else {
                            if (!resultStatesObj['STATE']) resultStatesObj['STATE'] = id;
                        }
                        break;

                    case '.LEVEL':
                    case '.level':
                    case '.bri':
                    case '.ACTUAL':
                        if (!resultStatesObj['LEVEL']) resultStatesObj['LEVEL'] = id;
                        break;

                    case '.DIRECTION':
                        if (!resultStatesObj['DIRECTION']) resultStatesObj['DIRECTION'] = id;
                        break;

                    case '.STOP':
                        if (!resultStatesObj['STOP']) resultStatesObj['STOP'] = id;
                        break;

                    case '.HUE':
                    case '.hue':
                        if (!resultStatesObj['HUE']) resultStatesObj['HUE'] = id;
                        break;

                    case '.CT':
                    case '.ct':
                        if (!resultStatesObj['CT']) resultStatesObj['CT'] = id;
                        break;

                    case '.SATURATION':
                    case '.saturation':
                    case '.sat':
                        if (!resultStatesObj['SATURATION']) resultStatesObj['SATURATION'] = id;
                        break;

                    case '.RGB':
                        if (!resultStatesObj['ALTERNATIVE_COLORSPACE_VALUE'])
                            resultStatesObj['ALTERNATIVE_COLORSPACE_VALUE'] = id;
                        break;

                    case '.SET_TEMPERATURE':
                        if (!resultStatesObj['SET_TEMPERATURE']) resultStatesObj['SET_TEMPERATURE'] = id;
                        break;

                    case '.SET_POINT_MODE':
                        if (!resultStatesObj['set_point_mode']) resultStatesObj['set_point_mode'] = id;
                        break;

                    case '.HUMIDITY':
                    case '.ACTUAL_HUMIDITY':
                    case '.humidity':
                        if (!resultStatesObj['HUMIDITY']) resultStatesObj['HUMIDITY'] = id;
                        break;

                    case '.TEMPERATURE':
                    case '.temperature':
                        if (!resultStatesObj['TEMPERATURE']) resultStatesObj['TEMPERATURE'] = id;
                        break;

                    case '.ACTUAL_TEMPERATURE':
                        if (!resultStatesObj['TEMPERATURE']) resultStatesObj['TEMPERATURE'] = id;
                        if (!resultStatesObj['actual_temperature']) resultStatesObj['actual_temperature'] = id;
                        break;

                    case '.BRIGHTNESS':
                    case '.LUX':
                    case 'illuminance':
                        if (!resultStatesObj['BRIGHTNESS']) resultStatesObj['BRIGHTNESS'] = id;
                        break;

                    case '.POWER':
                    case '.Power':
                    case '.power':
                        if (!resultStatesObj['POWER']) resultStatesObj['POWER'] = id;
                        break;

                    case '.CONTROL_MODE':
                        if (!resultStatesObj['CONTROL_MODE']) resultStatesObj['CONTROL_MODE'] = id;
                        break;

                    case '.BOOST_STATE':
                        if (!resultStatesObj['BOOST_STATE']) resultStatesObj['BOOST_STATE'] = id;
                        break;

                    case '.PARTY_TEMPERATURE':
                        if (!resultStatesObj['PARTY_TEMPERATURE']) resultStatesObj['PARTY_TEMPERATURE'] = id;
                        break;

                    case '.WINDOW_OPEN_REPORTING':
                        if (!resultStatesObj['WINDOW_OPEN_REPORTING']) resultStatesObj['WINDOW_OPEN_REPORTING'] = id;
                        break;

                    case '.STATE_UNCERTAIN':
                        if (!resultStatesObj['LOCK_STATE_UNCERTAIN']) resultStatesObj['LOCK_STATE_UNCERTAIN'] = id;
                        break;

                    case '.OPEN':
                        if (!resultStatesObj['LOCK_OPEN']) resultStatesObj['LOCK_OPEN'] = id;
                        break;

                    case '.URL':
                        if (!resultStatesObj['URL']) resultStatesObj['URL'] = id;
                        break;

                    case '.LOWBAT':
                    case '.percent':
                        if (!resultStatesObj['BATTERY']) resultStatesObj['BATTERY'] = id;
                        break;

                    case '.UNREACH':
                        if (!resultStatesObj['UNREACH']) resultStatesObj['UNREACH'] = id;
                        break;

                    case '.online':
                    case ':CONNECTED':
                        if (!resultStatesObj['UNREACH']) {
                            resultStatesObj['UNREACH'] = id;
                            console.log('Set Option invertUnreach because CONNECTED is used instead of UNREACH');
                            result.resultObject.options.push({
                                option: 'invertUnreach',
                                type: 'checkbox',
                                value: 'true',
                            });
                        }
                        break;

                    case '.ERROR':
                    case '.FAULT_REPORTING':
                        if (!resultStatesObj['ERROR']) resultStatesObj['ERROR'] = id;
                        break;
                }
            }
            //If the role was not found by DeviceDetector, try to find out the role now
            if (!result.resultObject.commonRole || channelDetectorUsedDeviceTypeForCommonRole == 'info') {
                //Role was not matched before
                //--iQontrolView
                if (typeof objects[sourceId].common.role !== udef && objects[sourceId].common.role == 'iQontrolView') {
                    result.resultObject.commonRole = 'iQontrolView';
                }
                //--all the others
                //----find out the role of sources main state (priority in ascending order!)
                var sourceRole = null;
                if (
                    resultStatesObj['STATE'] &&
                    objects[resultStatesObj['STATE']] &&
                    typeof objects[resultStatesObj['STATE']].common.role != udef
                ) {
                    sourceRole = objects[resultStatesObj['STATE']].common.role;
                    if (sourceRole == 'state') {
                        //special - check the parent channel's role
                        var resultStateParent = resultStatesObj['STATE'].substring(
                            0,
                            resultStatesObj['STATE'].lastIndexOf('.'),
                        );
                        if (resultStateParent.length > 0) {
                            if (objects[resultStateParent] && typeof objects[resultStateParent].common.role != udef)
                                sourceRole = objects[resultStateParent].common.role;
                        }
                    } else if (
                        stateName == '.presence' ||
                        stateName == '.MOTION' ||
                        stateName == '.PRESENCE_DETECTION_STATE'
                    ) {
                        //special
                        sourceRole = 'sensor.motion';
                    }
                }
                if (
                    resultStatesObj['HUMIDITY'] &&
                    objects[resultStatesObj['HUMIDITY']] &&
                    typeof objects[resultStatesObj['HUMIDITY']].common.role != udef
                )
                    sourceRole = objects[resultStatesObj['HUMIDITY']].common.role;
                if (
                    resultStatesObj['TEMPERATURE'] &&
                    objects[resultStatesObj['TEMPERATURE']] &&
                    typeof objects[resultStatesObj['TEMPERATURE']].common.role != udef
                )
                    sourceRole = objects[resultStatesObj['TEMPERATURE']].common.role;
                if (
                    resultStatesObj['BRIGHTNESS'] &&
                    objects[resultStatesObj['BRIGHTNESS']] &&
                    typeof objects[resultStatesObj['BRIGHTNESS']].common.role != udef
                )
                    sourceRole = objects[resultStatesObj['BRIGHTNESS']].common.role;
                if (
                    resultStatesObj['SET_TEMPERATURE'] &&
                    objects[resultStatesObj['SET_TEMPERATURE']] &&
                    typeof objects[resultStatesObj['SET_TEMPERATURE']].common.role != udef
                )
                    sourceRole = objects[resultStatesObj['SET_TEMPERATURE']].common.role;
                if (
                    resultStatesObj['LOCK_STATE'] &&
                    objects[resultStatesObj['LOCK_STATE']] &&
                    typeof objects[resultStatesObj['LOCK_STATE']].common.role != udef
                )
                    sourceRole = objects[resultStatesObj['LOCK_STATE']].common.role;
                if (
                    resultStatesObj['LEVEL'] &&
                    objects[resultStatesObj['LEVEL']] &&
                    typeof objects[resultStatesObj['LEVEL']].common.role != udef
                )
                    sourceRole = objects[resultStatesObj['LEVEL']].common.role;
                //----try to match this to destination role
                switch (sourceRole) {
                    case 'switch':
                    case 'switch.power':
                    case 'switch.enable':
                        result.resultObject.commonRole = 'iQontrolSwitch';
                        break;

                    case 'switch.light':
                    case 'level.dimmer':
                        result.resultObject.commonRole = 'iQontrolLight';
                        break;

                    case '---missing---':
                        result.resultObject.commonRole = 'iQontrolFan';
                        break;

                    case 'level.temperature':
                        if (resultStatesObj['set_point_mode']) {
                            result.resultObject.commonRole = 'iQontrolHomematicIpThermostat';
                            delete resultStatesObj['set_point_mode'];
                            delete resultStatesObj['LEVEL'];
                            delete resultStatesObj['STATE'];
                            resultStatesObj['TEMPERATURE'] = resultStatesObj['actual_temperature'];
                            delete resultStatesObj['actual_temperature'];
                        } else if (resultStatesObj['PARTY_TEMPERATURE']) {
                            result.resultObject.commonRole = 'iQontrolHomematicThermostat';
                        } else {
                            result.resultObject.commonRole = 'iQontrolThermostat';
                        }
                        break;

                    case 'value.temperature':
                        result.resultObject.commonRole = 'iQontrolTemperature';
                        if (!resultStatesObj['STATE']) {
                            resultStatesObj['STATE'] = resultStatesObj['TEMPERATURE'];
                            delete resultStatesObj['TEMPERATURE'];
                        }
                        break;

                    case 'value.humidity':
                        result.resultObject.commonRole = 'iQontrolHumidity';
                        if (!resultStatesObj['STATE']) {
                            resultStatesObj['STATE'] = resultStatesObj['HUMIDITY'];
                            delete resultStatesObj['HUMIDITY'];
                        }
                        break;

                    case 'value.brightness':
                        result.resultObject.commonRole = 'iQontrolBrightness';
                        if (!resultStatesObj['STATE']) {
                            resultStatesObj['STATE'] = resultStatesObj['BRIGHTNESS'];
                            delete resultStatesObj['BRIGHTNESS'];
                        }
                        break;

                    case 'sensor.motion':
                        result.resultObject.commonRole = 'iQontrolMotion';
                        break;

                    case 'sensor.door':
                        result.resultObject.commonRole = 'iQontrolDoor';
                        break;

                    case 'switch.lock':
                        result.resultObject.commonRole = 'iQontrolDoorWithLock';
                        break;

                    case 'sensor':
                    case 'sensor.window':
                        result.resultObject.commonRole = 'iQontrolWindow';
                        break;

                    case 'level.blind':
                        result.resultObject.commonRole = 'iQontrolBlind';
                        break;

                    case 'state':
                        result.resultObject.commonRole = 'iQontrolValue';
                        break;

                    case 'sensor.alarm.fire':
                        result.resultObject.commonRole = 'iQontrolFire';
                        break;

                    case 'action.execute':
                        result.resultObject.commonRole = 'iQontrolProgram';
                        break;

                    case 'scene.state':
                        result.resultObject.commonRole = 'iQontrolScene';
                        break;
                }
            }
            //Further modification for some special cases
            if (result.resultObject.commonRole == 'iQontrolThermostat' && resultStatesObj['PARTY_TEMPERATURE']) {
                console.log('Modifying role to HomematicThermostat because PARTY_TEMPERATURE is present.');
                result.resultObject.commonRole = 'iQontrolHomematicThermostat';
            }
            //Got role?
            if (result.resultObject.commonRole) {
                if (
                    typeof iQontrolRoles[result.resultObject.commonRole] != udef &&
                    typeof iQontrolRoles[result.resultObject.commonRole].name != udef
                ) {
                    result.resultText +=
                        '<u>' +
                        _('Role') +
                        ':</u> ' +
                        _(iQontrolRoles[result.resultObject.commonRole].name) +
                        '<br><br>';
                } else {
                    result.resultText += _('Role') + ': ' + result.resultObject.commonRole + '<br><br>';
                }
                result.resultValid = true;
            } else {
                result.resultText +=
                    '<blockquote>' +
                    _('The role of the device is unknown. Please set it manually.') +
                    '</blockquote><br><br>';
            }
            //Got states?
            for (state in resultStatesObj) {
                if (!result.resultObject.states[state])
                    result.resultObject.states.push({ state: state, value: resultStatesObj[state] });
            }
            if (result.resultObject.states.length > 0) {
                result.resultStatesText += '<u>' + _('Matched the following states:') + '</u> <br>';
                for (i = 0; i < result.resultObject.states.length; i++) {
                    result.resultStatesText +=
                        result.resultObject.states[i].state + ': ' + result.resultObject.states[i].value + '<br>';
                }
                if (result.resultObject.options.length > 0) {
                    result.resultStatesText += '<br><u>' + _('Options:') + '</u><br>';
                    result.resultObject.options.forEach(function (option) {
                        result.resultStatesText += _(option.option) + ': ' + _(option.value) + '<br>';
                    });
                }
                result.resultValid = true;
            } else {
                result.resultText = '<blockquote>' + _('Could not match any state') + '</blockquote><br><br>';
            }
            //Result valid?
            if (result.resultValid) {
                result.resultText += '<br><b>' + _('You can create this device now if you want.') + '</b>';
            } else {
                result.resultText =
                    '<blockquote>' + _('Could not determine any valid Device from this ID') + '</blockquote>';
            }
        }
        return result;
    }

    //Enhance DeviceCopyFrom with functions
    $('#devicesCopyFromButton').on('click', function (event, sourceView, sourceDevice) {
        initDialog(
            'dialogDeviceCopyFrom',
            function () {
                //save dialog
                var sourceView = $('#dialogDeviceCopyFromSourceView').val();
                var sourceDevice = $('#dialogDeviceCopyFromSourceDevice').val();
                var destinationView = $('#dialogDeviceCopyFromDestinationView').val();
                // var destinationView = devicesSelectedView; oder $('#devicesSelectedView').val()   xxxxx
                var length = views[destinationView].devices.push(
                    JSON.parse(JSON.stringify(views[sourceView].devices[sourceDevice])),
                ); //This creates new object, not just a reference
                if ($('#dialogDeviceCopyFromNewName').val())
                    views[destinationView].devices[length - 1].commonName = $('#dialogDeviceCopyFromNewName').val(); //New Name
                if ($('#dialogDeviceCopyFromCreateSymbolicLink').prop('checked')) {
                    //Symbolic link
                    views[destinationView].devices[length - 1].symbolicLinkFrom = {
                        sourceView: sourceView,
                        sourceDevice: sourceDevice,
                    };
                } else if ($('#dialogDeviceCopyFromReplaceCheckbox').prop('checked')) {
                    //Replace Datapoints
                    (views[destinationView].devices[length - 1].states || []).forEach(function (state) {
                        if (state.commonRole && state.commonRole == 'linkedState' && state.value) {
                            $('#dialogDeviceCopyFromReplaceDatapointsList > li').each(function () {
                                var index = $(this).data('index');
                                var searchValue = $(
                                    '.dialogDeviceCopyFromReplaceDatapoints.searchvalue[data-index=' + index + ']',
                                ).val();
                                var newValue =
                                    $(
                                        '.dialogDeviceCopyFromReplaceDatapoints.newvalue[data-index=' + index + ']',
                                    ).val() || '';
                                if (searchValue) state.value = state.value.replace(searchValue, newValue);
                            });
                        } else if (state.commonRole == 'array' && state.value) {
                            var valueArray = tryParseJSON(state.value);
                            if (Array.isArray(valueArray) == false) valueArray = [];
                            valueArray.forEach(function (entry) {
                                if (entry.commonRole && entry.commonRole == 'linkedState' && entry.value) {
                                    $('#dialogDeviceCopyFromReplaceDatapointsList > li').each(function () {
                                        var index = $(this).data('index');
                                        var searchValue = $(
                                            '.dialogDeviceCopyFromReplaceDatapoints.searchvalue[data-index=' +
                                                index +
                                                ']',
                                        ).val();
                                        var newValue =
                                            $(
                                                '.dialogDeviceCopyFromReplaceDatapoints.newvalue[data-index=' +
                                                    index +
                                                    ']',
                                            ).val() || '';
                                        if (searchValue) entry.value = entry.value.replace(searchValue, newValue);
                                    });
                                }
                            });
                            state.value = JSON.stringify(valueArray);
                        }
                    });
                }
                values2table('tableDevices', views[devicesSelectedView].devices, onChange, onTableDevicesReady);
            },
            function () {
                //init dialog function
                $('#dialogDeviceCopyFrom a.btn-set').addClass('disabled');
                $('#dialogDeviceCopyFromNewName').val('');
                sourceView = typeof sourceView != udef ? sourceView : $('#dialogDeviceCopyFromSourceView').val();
                destinationView = devicesSelectedView;
                $('#dialogDeviceCopyFromSourceView')
                    .empty()
                    .append('<option disabled selected value>' + _('Select view') + '</option>');
                $('#dialogDeviceCopyFromDestinationView')
                    .empty()
                    .append('<option disabled selected value>' + _('Select view') + '</option>');
                views.forEach(function (element, index) {
                    $('#dialogDeviceCopyFromSourceView').append(
                        "<option value='" + index + "'>" + element.commonName + '</option>',
                    );
                    $('#dialogDeviceCopyFromDestinationView').append(
                        "<option value='" + index + "'>" + element.commonName + '</option>',
                    );
                });
                sourceDevice =
                    typeof sourceDevice != udef ? sourceDevice : $('#dialogDeviceCopyFromSourceDevice').val();
                $('#dialogDeviceCopyFromSourceDevice')
                    .empty()
                    .append('<option disabled selected value>' + _('Select device') + '</option>');
                if (typeof sourceView != udef && sourceView != null) {
                    $('#dialogDeviceCopyFromSourceView').val(sourceView).trigger('change');
                    if (typeof sourceDevice != udef && sourceDevice != null) {
                        $('#dialogDeviceCopyFromSourceDevice').val(sourceDevice).trigger('change');
                    }
                }
                $('#dialogDeviceCopyFromDestinationView').val(destinationView).trigger('change');
                $('#dialogDeviceCopyFromCreateSymbolicLink').trigger('change');
                if (!$('#dialogDeviceCopyFromReplaceDatapointsList li').length > 0)
                    $('#dialogDeviceCopyFromReplaceCheckbox').prop('checked', false).trigger('change');
                $('#dialogDeviceCopyFromSourceView').select();
                $('#dialogDeviceCopyFromDestinationView').select();
                $('#dialogDeviceCopyFromSourceDevice').select();
            },
        );
    });
    $('#dialogDeviceCopyFromSourceView').on('change', function () {
        $('#dialogDeviceCopyFromSourceDevice')
            .empty()
            .append('<option disabled selected value>' + _('Select device') + '</option>');
        views[$('#dialogDeviceCopyFromSourceView').val()].devices.forEach(function (element, index) {
            $('#dialogDeviceCopyFromSourceDevice').append(
                "<option value='" + index + "'>" + element.commonName + '</option>',
            );
        });
        $('#dialogDeviceCopyFromSourceDevice').select();
        $('#dialogDeviceCopyFrom a.btn-set').addClass('disabled');
    });
    $('#dialogDeviceCopyFromSourceDevice').on('change', function () {
        if ($('#dialogDeviceCopyFromSourceDevice').val()) {
            $('#dialogDeviceCopyFrom a.btn-set').removeClass('disabled');
            $('#dialogDeviceCopyFromNewName').val(
                views[$('#dialogDeviceCopyFromSourceView').val()].devices[$('#dialogDeviceCopyFromSourceDevice').val()]
                    .commonName,
            );
            dialogDeviceCopyFromReplaceDatapointsSearchValuesSetComboboxEntries();
        } else {
            $('#dialogDeviceCopyFrom a.btn-set').addClass('disabled');
        }
    });
    $('#dialogDeviceCopyFromCreateSymbolicLink').on('change', function () {
        if ($(this).prop('checked')) {
            $('#dialogDeviceCopyFromReplaceCheckbox')
                .addClass('disabled')
                .prop('disabled', 'disabled')
                .trigger('change');
        } else {
            $('#dialogDeviceCopyFromReplaceCheckbox').removeClass('disabled').prop('disabled', '').trigger('change');
        }
    });
    $('#dialogDeviceCopyFromReplaceCheckbox').on('change', function () {
        if ($(this).prop('checked') && !$(this).prop('disabled')) {
            $('#dialogDeviceCopyFromReplaceDatapointsAdd').show();
            $('#dialogDeviceCopyFromReplaceDatapointsList').show();
        } else {
            $('#dialogDeviceCopyFromReplaceDatapointsAdd').hide();
            $('#dialogDeviceCopyFromReplaceDatapointsList').hide();
        }
    });
    $('#dialogDeviceCopyFromReplaceDatapointsAdd').on('click', function () {
        var index = $('#dialogDeviceCopyFromReplaceDatapointsList').data('length') || 0;
        var listContent = '';
        listContent += "<li class='collection-item' data-index='" + index + "'>";
        listContent += "<div class='row'>";
        listContent += "<div class='col s12 m5 l5'>";
        listContent +=
            "<input class='val dialogDeviceCopyFromReplaceDatapoints searchvalue' name='dialogDeviceCopyFromReplaceDatapoints_" +
            index +
            "_SEARCH_VALUE' id='dialogDeviceCopyFromReplaceDatapoints_" +
            index +
            "_SEARCH_VALUE' data-index='" +
            index +
            "' data-setting='searchvalue' value=''></input>";
        listContent +=
            "<label for='dialogDeviceCopyFromReplaceDatapoints_" + index + "_SEARCH_VALUE' class='translate'></label>";
        listContent += "<span class='translate'>" + _('Replace this string...') + '</span>';
        listContent += '</div>';
        listContent += "<div class='col s1 m1 l1'>";
        listContent += "<i class='material-icons' style='margin-top:35px;'>arrow_forward</i>";
        listContent += '</div>';
        listContent += "<div class='col s10 m5 l5'>";
        listContent +=
            "<input class='val dialogDeviceCopyFromReplaceDatapoints newvalue' name='dialogDeviceCopyFromReplaceDatapoints_" +
            index +
            "_NEW_VALUE' id='dialogDeviceCopyFromReplaceDatapoints_" +
            index +
            "_NEW_VALUE' data-index='" +
            index +
            "' data-setting='newvalue' value=''></input>";
        listContent +=
            "<label for='dialogDeviceCopyFromReplaceDatapoints_" + index + "_NEW_VALUE' class='translate'></label>";
        listContent += "<span class='translate'>" + _('...with this string.') + '</span>';
        listContent +=
            "<i class='material-icons dialogDeviceCopyFromReplaceDatapoints selectId' data-index='" +
            index +
            "' data-selectidfor='dialogDeviceCopyFromReplaceDatapoints_" +
            index +
            "_NEW_VALUE' style='position: absolute; right: 5px; top: 10px; cursor: hand;'>edit</i>";
        listContent += '</div>';
        listContent += "<div class='col s1 m1 l1'>";
        listContent +=
            "<i class='material-icons'  style='margin-top:35px; cursor:pointer; color:#e60000;' onclick='$(\"#dialogDeviceCopyFromReplaceDatapointsList li[data-index=" +
            index +
            ']").remove();\'>delete</i>';
        listContent += '</div>';
        listContent += '</div>';
        listContent += '</li>';
        $('#dialogDeviceCopyFromReplaceDatapointsList').append(listContent);
        $('#dialogDeviceCopyFromReplaceDatapointsList').data('length', index + 1);
        if ($('#dialogDeviceCopyFromSourceDevice').val()) {
            dialogDeviceCopyFromReplaceDatapointsSearchValuesSetComboboxEntries();
        }
        $('.dialogDeviceCopyFromReplaceDatapoints.selectId[data-index="' + index + '"]').on('click', function () {
            $('#dialogSelectId').data('selectidfor', $.escapeSelector($(this).data('selectidfor')));
            initSelectId(function (sid) {
                sid.selectId(
                    'show',
                    $('#' + $('#dialogSelectId').data('selectidfor')).val(),
                    { type: 'state' },
                    function (newId) {
                        if (newId) {
                            $('#' + $('#dialogSelectId').data('selectidfor'))
                                .val(newId)
                                .trigger('change');
                        }
                    },
                );
            });
        });
    });
    function dialogDeviceCopyFromReplaceDatapointsSearchValuesSetComboboxEntries() {
        var usedDatapointIds = [];
        (
            views[$('#dialogDeviceCopyFromSourceView').val()].devices[$('#dialogDeviceCopyFromSourceDevice').val()]
                .states || []
        ).forEach(function (element, index) {
            if (element.commonRole == 'linkedState' && element.value) {
                usedDatapointIds.push(element.value);
            } else if (element.commonRole == 'array' && element.value) {
                var valueArray = tryParseJSON(element.value);
                if (Array.isArray(valueArray) == false) valueArray = [];
                valueArray.forEach(function (entry) {
                    if (entry.commonRole && entry.commonRole == 'linkedState' && entry.value) {
                        usedDatapointIds.push(entry.value);
                    }
                });
            }
        });
        usedDatapointIds = removeDuplicates(usedDatapointIds);
        enhanceTextInputToCombobox(
            '.dialogDeviceCopyFromReplaceDatapoints.searchValue',
            usedDatapointIds.join(';'),
            false,
        );
    }

    //Enhance AutocreateWidget with functions
    var dialogDevicesAutocreateWidgetOptions;
    var dialogDevicesAutocreateWidgetUrlParameters = '';
    $('#devicesAutocreateWidgetButton').on('click', function () {
        initDialog(
            'dialogDevicesAutocreateWidget',
            function () {
                //save dialog
                var filenamePlain = $('#dialogDevicesAutocreateWidgetSource').val();
                filenamePlain = filenamePlain.slice(filenamePlain.lastIndexOf('/') + 1, filenamePlain.lastIndexOf('.'));
                filenamePlain = filenamePlain.charAt(0).toUpperCase() + filenamePlain.slice(1);
                views[$('#devicesSelectedView').val()].devices.push({
                    commonName: $('#dialogDevicesAutocreateWidgetName').val() || filenamePlain || 'Widget',
                    commonRole: 'iQontrolWidget',
                    nativeBackgroundImage: '',
                    nativeBackgroundImageActive: '',
                    nativeHeading: '',
                    nativeLinkedView: '',
                    nativeNewLine: false,
                    options: dialogDevicesAutocreateWidgetOptions,
                    states: [
                        {
                            state: 'BACKGROUND_URL',
                            commonRole: 'const',
                            value:
                                $('#dialogDevicesAutocreateWidgetSource').val() +
                                dialogDevicesAutocreateWidgetUrlParameters,
                        },
                    ],
                });
                console.log('Added Widget');
                values2table('tableDevices', views[devicesSelectedView].devices, onChange, onTableDevicesReady);
            },
            function () {
                //init dialog function
                //Add widgets and websites to Selectbox
                $('#dialogDevicesAutocreateWidgetSource').val('');
                var inbuiltWidgetsString = '';
                inbuiltWidgets.forEach(function (widget) {
                    if (widget && typeof widget.filename != udef) {
                        inbuiltWidgetsString +=
                            ';' +
                            ('./images/widgets/' + widget.filename).replace(/\//g, '\\') +
                            '/' +
                            (widget.name || widget.filename).replace(/\//g, '\\') +
                            '/' +
                            (previewLink + ('/images/widgets/' + widget.icon || '/images/icons/file_html.png')).replace(
                                /\//g,
                                '\\',
                            );
                    }
                });
                if (inbuiltWidgets.length > 0) {
                    inbuiltWidgetsString = ';[' + _('Inbuilt Widgets') + ':]' + inbuiltWidgetsString;
                }
                var websitenames = [];
                imagesDirs.forEach(function (imagesDir) {
                    if (
                        imagesDir.dirname.indexOf('/userwidgets') == 0 &&
                        imagesDir.files &&
                        imagesDir.files.length > 0
                    ) {
                        var websitenamesInThisDir = [];
                        imagesDir.files.forEach(function (file) {
                            var filename = file.filename || '';
                            if (
                                filename.endsWith('.shtml') ||
                                filename.endsWith('.ehtml') ||
                                filename.endsWith('.shtm') ||
                                filename.endsWith('.htm') ||
                                filename.endsWith('.html')
                            ) {
                                var iconIndex = images.findIndex(function (element) {
                                    return (
                                        element.filename ==
                                        file.filename.substring(0, file.filename.length - 5) + '.png'
                                    );
                                });
                                if (iconIndex > -1)
                                    var icon = previewLink + '/..' + userfilesImagePath + images[iconIndex].filename;
                                else var icon = previewLink + '/images/icons/file_html.png';
                                websitenamesInThisDir.push(
                                    '.\\..' +
                                        userfilesImagePathBS +
                                        file.filenameBS +
                                        '/' +
                                        file.filenameBS +
                                        '/' +
                                        icon.replace(/\//g, '\\'),
                                );
                            }
                        });
                        if (websitenamesInThisDir.length > 0) {
                            websitenames.push('[' + imagesDir.dirnameBS + ':]');
                            websitenames.push(websitenamesInThisDir.join(';'));
                        }
                    }
                });
                if (websitenames.length > 0) {
                    websitenames.unshift(';[' + _('User Widgets') + ':]');
                }
                enhanceTextInputToCombobox(
                    '#dialogDevicesAutocreateWidgetSource',
                    '/' + _('(None)') + inbuiltWidgetsString + websitenames.join(';'),
                    true,
                    dialogDevicesAutocreateWidgetWidgetSelected,
                );
                //Further settings
                $('#dialogDevicesAutocreateWidgetName').val('');
                $('#dialogDevicesAutocreateWidgetDescription').html('');
                $('#dialogDevicesAutocreateWidgetOptions').html('');
                $('#dialogDevicesAutocreateWidgetUrlParameters').html('');
                $('#dialogDevicesAutocreateWidget a.btn-set').addClass('disabled');
                dialogDevicesAutocreateWidgetOptions = [];
                dialogDevicesAutocreateWidgetUrlParameters = '';
            },
        );
    });
    $('#dialogDevicesAutocreateWidgetSource').on('input change', function () {
        $('#dialogDevicesAutocreateWidgetDescription').html('');
        $('#dialogDevicesAutocreateWidgetOptions').html('');
        $('#dialogDevicesAutocreateWidgetUrlParameters').html('');
        $('#dialogDevicesAutocreateWidgetSourceEdit').data('url', '').addClass('disabled');
        if ($('#dialogDevicesAutocreateWidgetSource').val() != '') {
            $('#dialogDevicesAutocreateWidget a.btn-set').removeClass('disabled');
        } else {
            $('#dialogDevicesAutocreateWidget a.btn-set').addClass('disabled');
        }
        dialogDevicesAutocreateWidgetOptions = [];
        dialogDevicesAutocreateWidgetUrlParameters = '';
    });
    $('#dialogDevicesAutocreateWidgetSourceEdit').on('click', function () {
        dialogDevicesAutocreateWidgetWidgetSelected($(this).data('url'));
    });
    function dialogDevicesAutocreateWidgetWidgetSelected(value) {
        if (value)
            getWidgetSettings(value, false, [], true, function (result) {
                if (result.urlParameters.length) {
                    dialogDevicesAutocreateWidgetUrlParameters = '?' + result.urlParameters.join('&');
                    var urlParameterString = "<ul	class='browser-default'>";
                    result.urlParameters.forEach(function (urlParameter) {
                        urlParameterString += '<li>' + urlParameter + '</li>';
                    });
                    urlParameterString += '</ul>';
                    $('#dialogDevicesAutocreateWidgetUrlParameters').html(
                        '<hr><b>' + _('Parameters:') + '</b><br>' + urlParameterString,
                    );
                } else {
                    dialogDevicesAutocreateWidgetUrlParameters = '';
                    $('#dialogDevicesAutocreateWidgetUrlParameters').html('');
                }
                var dialogDevicesAutocreateWidgetOptionsString = "<ul class='browser-default'>";
                for (option in result.options) {
                    dialogDevicesAutocreateWidgetOptionsString +=
                        '<li><b>' +
                        iQontrolRoles['iQontrolWidget'].options[option].name +
                        '</b>: <u>' +
                        result.options[option] +
                        '</u></li>';
                }
                dialogDevicesAutocreateWidgetOptionsString += '</ul>';
                $('#dialogDevicesAutocreateWidgetOptions').html(
                    '<hr><b>' + _('Options:') + '</b><br>' + dialogDevicesAutocreateWidgetOptionsString,
                );
                dialogDevicesAutocreateWidgetOptions = [];
                for (roleOption in iQontrolRoles['iQontrolWidget'].options) {
                    if (iQontrolRoles['iQontrolWidget'].options[roleOption].type == 'section') continue;
                    var value =
                        result.options[roleOption] || iQontrolRoles['iQontrolWidget'].options[roleOption].default || '';
                    var entry = {
                        option: roleOption,
                        type: iQontrolRoles['iQontrolWidget'].options[roleOption].type,
                        value: value,
                    };
                    dialogDevicesAutocreateWidgetOptions.push(entry);
                }
                $('#dialogDevicesAutocreateWidgetSourceEdit').data('url', result.url).removeClass('disabled');
                $('#dialogDevicesAutocreateWidgetSource').val(result.url.split('?')[0]);
            });
    }

    //Widget-Settings
    function getWidgetSettings(url, checkForOptionsAlreadySet, actualOptions, choseOptionsNotSet, callback) {
        // callback(result), result = {result.urlParameters (array), result.options (object)]´}
        var filename = null;
        var path = null;
        if (url.indexOf('./images/widgets/') == 0) {
            filename = url.substr(8);
            path = imagePath;
        } else if (url.indexOf('./../iqontrol.meta/userimages/userwidgets/') == 0) {
            filename = url.substr(29);
            path = userfilesImagePath;
        }
        if (!filename || !path) return;
        var querystring = filename.split('?')[1] || '';
        filename = filename.split('?')[0];
        downloadFileAsStringAsync(filename, path).then(function (htmlAsString) {
            if ($(htmlAsString).filter('meta[name^="widget-"]').length) {
                initDialog(
                    'dialogWidgetSettings',
                    function (replaceurlSwitchToDestination) {
                        //save dialog
                        var result = {};
                        var dialogWidgetSettingsUrlParameters = [];
                        $('.dialogWidgetSettingsUrlParameters').each(function () {
                            var value;
                            if ($(this).data('type') == 'checkbox') {
                                value = $(this).prop('checked').toString();
                            } else {
                                value = $(this).val();
                            }
                            dialogWidgetSettingsUrlParameters.push(
                                fixedEncodeURIComponent($(this).data('option')) + '=' + fixedEncodeURIComponent(value),
                            );
                        });
                        var replaceurl = $('#dialogWidgetSettings').data('replaceurl') || '';
                        if (replaceurl != '') {
                            dialogWidgetSettingsUrlParameters.push(
                                'widgetReplaceurl=' + fixedEncodeURIComponent(replaceurl),
                            );
                        }
                        if ($('#dialogWidgetSettings').data('replaceurlabsolute')) {
                            dialogWidgetSettingsUrlParameters.push('widgetReplaceurlAbsolute=true');
                        }
                        result.urlParameters = dialogWidgetSettingsUrlParameters;
                        var dialogWidgetSettingsOptions = {};
                        $('.dialogWidgetSettingsOptions').each(function () {
                            if ($(this).prop('checked')) {
                                dialogWidgetSettingsOptions[$(this).data('option')] = $(this).data('value').toString();
                            }
                        });
                        result.options = dialogWidgetSettingsOptions;
                        if (result.urlParameters.length) {
                            url = url.split('?')[0] + '?' + result.urlParameters.join('&');
                        }
                        result.url = url;
                        if (replaceurlSwitchToDestination) {
                            console.log('replaceurlSwitchToDestination');
                            $('#dialogWidgetSettings').modal('close');
                            if ($('#dialogWidgetSettings').data('replaceurlabsolute')) {
                                url = url.replace(url.split('?')[0], replaceurl);
                            } else {
                                url = url.replace(
                                    url.split('?')[0].substring(url.split('?')[0].lastIndexOf('/') + 1),
                                    replaceurl,
                                );
                            }
                            getWidgetSettings(
                                url,
                                checkForOptionsAlreadySet,
                                actualOptions,
                                choseOptionsNotSet,
                                callback,
                            );
                        } else {
                            callback(result);
                        }
                    },
                    function () {
                        //init dialog function
                        var name = url.split('?')[0];
                        if (name.lastIndexOf('/') > 0) name = name.substring(name.lastIndexOf('/') + 1);
                        if (name.lastIndexOf('.') > 0) name = name.substring(0, name.lastIndexOf('.'));
                        $('#dialogWidgetSettingsName').html(name);
                        $('#dialogWidgetSettingsDescription').html('').show();
                        $('#dialogWidgetSettingsOptions').html('').hide();
                        $('#dialogWidgetSettingsParameters').html('').hide();
                        $('#dialogWidgetSettings').data('replaceurl', '');
                        $('#dialogWidgetSettings').data('replaceurlabsolute', '');
                        $('#dialogWidgetSettingsReplaceurlDestination').html('');
                        $('.dialogWidgetSettingsReplaceurl').hide();
                        $(htmlAsString)
                            .filter('meta[name^="widget-"]')
                            .each(function () {
                                var metaName = $(this).prop('name');
                                var metaContent = $(this).prop('content');
                                var data = $(this).data() || {};
                                switch (metaName) {
                                    case 'widget-description':
                                        if (metaContent) $('#dialogWidgetSettingsDescription').html(metaContent).show();
                                        break;

                                    case 'widget-urlparameters':
                                        if (metaContent) {
                                            dialogDevicesAutocreateWidgetUrlParameters = '';
                                            var dialogWidgetSettingsUrlParametersString =
                                                "<ul class='collapsible' id='dialogWidgetSettingsUrlParametersCollapsible'>";
                                            var dialogWidgetSettingsUrlParametersComboboxes = [];
                                            var urlParameters = metaContent.split(';');
                                            var querystringParts = querystring.split('&');
                                            var queries = {};
                                            var dialogWidgetSettingsUrlParametersStringCollapsibleOpen = false;
                                            querystringParts.forEach(function (query) {
                                                queries[query.split('=')[0]] = query.split('=')[1] || '';
                                            });
                                            if (
                                                urlParameters.length > 0 &&
                                                decodeURIComponent((urlParameters[0] || '').trim().split('/')[3]) !=
                                                    'section'
                                            )
                                                urlParameters.unshift('//' + _('General') + '/section');
                                            //Build options string for icons comboboxes
                                            //Blank Icon
                                            var comboboxesIconsOptions = '[' + _('No Icon') + ':]';
                                            comboboxesIconsOptions +=
                                                ';' +
                                                './images/icons/blank.png'.replace(/\//g, '\\') +
                                                '/' +
                                                _('No Icon') +
                                                '/' +
                                                (previewLink + '/images/icons/checkboard.png').replace(/\//g, '\\');
                                            //Inbuilt Icons
                                            comboboxesIconsOptions += ';[' + _('Inbuilt Icons') + ':]';
                                            inbuiltIcons.forEach(function (inbuiltIcon) {
                                                if (inbuiltIcon != '') {
                                                    comboboxesIconsOptions +=
                                                        ';' +
                                                        inbuiltIcon.replace(/\//g, '\\') +
                                                        '/' +
                                                        inbuiltIcon.replace(/\//g, '\\');
                                                }
                                            });
                                            //User Icons
                                            var imagenames = [];
                                            imagesDirs.forEach(function (imagesDir) {
                                                if (
                                                    imagesDir.dirname.indexOf('/usericons') == 0 &&
                                                    imagesDir.files &&
                                                    imagesDir.files.length > 0
                                                ) {
                                                    imagenames.push('[' + imagesDir.dirnameBS + ':]');
                                                    imagesDir.files.forEach(function (file) {
                                                        imagenames.push(
                                                            '.\\..' +
                                                                userfilesImagePathBS +
                                                                file.filenameBS +
                                                                '/' +
                                                                file.filenameBS,
                                                        );
                                                    });
                                                }
                                            });
                                            if (imagenames.length > 0) {
                                                comboboxesIconsOptions += ';[' + _('User Icons') + ':]';
                                                imagenames.forEach(function (option) {
                                                    comboboxesIconsOptions += ';' + option;
                                                });
                                            }
                                            //Build options string for font family comboboxes
                                            //Default Font
                                            var comboboxesFontsOptions = '[' + _('Default Font') + ':]';
                                            comboboxesFontsOptions +=
                                                ';/' +
                                                _('Default Font') +
                                                '/' +
                                                (previewLink + '/images/icons/blank.png').replace(/\//g, '\\');
                                            //Inbuilt Fonts
                                            comboboxesFontsOptions += ';[Sans-Serif:]';
                                            comboboxesFontsOptions +=
                                                ';Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif/Helvetica, Arial/.\\fonts\\font_arial.png';
                                            comboboxesFontsOptions +=
                                                ';Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif/Verdana/.\\fonts\\font_verdana.png';
                                            comboboxesFontsOptions +=
                                                ';"Segoe UI", Candara, "Bitstream Vera Sans", "DejaVu Sans", "Bitstream Vera Sans", "Trebuchet MS", Verdana, "Verdana Ref", sans-serif/Trebuchet/.\\fonts\\font_trebuchet.png';
                                            comboboxesFontsOptions += ';[Serif:]';
                                            comboboxesFontsOptions +=
                                                ';Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif/Times New Roman/.\\fonts\\font_times.png';
                                            comboboxesFontsOptions +=
                                                ';Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif/Georgia/.\\fonts\\font_georgia.png';
                                            comboboxesFontsOptions +=
                                                ';"Palatino Linotype", Palatino, Palladio, "URW Palladio L", "Book Antiqua", Baskerville, "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif/Garamond/.\\fonts\\font_garamond.png';
                                            comboboxesFontsOptions += ';[Fantasy:]';
                                            comboboxesFontsOptions +=
                                                ';Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal, "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", fantasy, sans-serif/Impact/.\\fonts\\font_impact.png';
                                            comboboxesFontsOptions += ';[Cursive:]';
                                            comboboxesFontsOptions +=
                                                ';"Comic Sans", "Comic Sans MS", "Chalkboard", "ChalkboardSE-Regular", cursive, sans-serif/Comic Sans/.\\fonts\\font_comic.png';
                                            comboboxesFontsOptions += ';[Monospace:]';
                                            comboboxesFontsOptions +=
                                                ';Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace/Courier/.\\fonts\\font_courier.png';
                                            //User Fonts
                                            var userfonts = [];
                                            imagesDirs.forEach(function (imagesDir) {
                                                if (
                                                    imagesDir.dirname.indexOf('/userfonts') == 0 &&
                                                    imagesDir.files &&
                                                    imagesDir.files.length > 0
                                                ) {
                                                    imagesDir.files.forEach(function (file) {
                                                        var filename = file.filename || '';
                                                        if (
                                                            filename.endsWith('.otf') ||
                                                            filename.endsWith('.ttf') ||
                                                            filename.endsWith('.woff') ||
                                                            filename.endsWith('.woff2') ||
                                                            filename.endsWith('.eot')
                                                        ) {
                                                            var iconIndex = images.findIndex(function (element) {
                                                                return (
                                                                    element.filename ==
                                                                    file.filename.substring(
                                                                        0,
                                                                        file.filename.length - 5,
                                                                    ) +
                                                                        '.png'
                                                                );
                                                            });
                                                            if (iconIndex > -1)
                                                                var icon =
                                                                    previewLink +
                                                                    '/..' +
                                                                    userfilesImagePath +
                                                                    images[iconIndex].filename;
                                                            else var icon = previewLink + '/images/icons/file_font.png';
                                                            userfonts.push(
                                                                file.filenameBS +
                                                                    '@' +
                                                                    '.\\..' +
                                                                    userfilesImagePathBS +
                                                                    file.filenameBS +
                                                                    '/' +
                                                                    file.filenameBS +
                                                                    '/' +
                                                                    icon.replace(/\//g, '\\'),
                                                            );
                                                        }
                                                    });
                                                }
                                            });
                                            if (userfonts.length > 0) {
                                                comboboxesFontsOptions += ';[' + _('User Fonts') + ':]';
                                                userfonts.forEach(function (userfont) {
                                                    comboboxesFontsOptions += ';' + userfont;
                                                });
                                            }
                                            //Build URL-Parameters dialog
                                            urlParameters.forEach(function (urlParameter) {
                                                urlParameter = urlParameter.trim().split('/');
                                                var entry = decodeURIComponent(urlParameter[0]);
                                                var name = decodeURIComponent(urlParameter[2] || urlParameter[0]);
                                                var value = decodeURIComponent(
                                                    typeof queries[entry] != udef
                                                        ? queries[entry] || ''
                                                        : urlParameter[1] || '',
                                                ).replace(/'/g, '&#39;');
                                                var defaultValue = decodeURIComponent(urlParameter[1] || '');
                                                var type = decodeURIComponent(urlParameter[3] || 'text');
                                                var options = urlParameter.slice(4) || [];
                                                if (!Array.isArray(options)) options = [decodeURIComponent(options)];
                                                switch (type) {
                                                    case 'section':
                                                        if (dialogWidgetSettingsUrlParametersStringCollapsibleOpen) {
                                                            dialogWidgetSettingsUrlParametersString += '</div>';
                                                            dialogWidgetSettingsUrlParametersString += '</li>';
                                                        }
                                                        dialogWidgetSettingsUrlParametersStringCollapsibleOpen = true;
                                                        dialogWidgetSettingsUrlParametersString += '<li>';
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "<div class='collapsible-header'>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "		<i class='material-icons'>expand_more</i><h6 class='translate'>" +
                                                            _(name) +
                                                            ':</h6>';
                                                        dialogWidgetSettingsUrlParametersString += '</div>';
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "<div class='collapsible-body'>";
                                                        break;

                                                    case 'divider':
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "<div class='divider'></div><br>";
                                                        break;

                                                    case 'info':
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "<div class='row'><div class='col s12 m12 l12'><p>" +
                                                            _(name) +
                                                            '</p></div></div>';
                                                        break;

                                                    case 'link':
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "<div class='row'><div class='col s12 m12 l12'><a href='" +
                                                            defaultValue.replace(/\\/g, '/') +
                                                            "' target='_blank'>" +
                                                            _(name) +
                                                            '</a></div></div>';
                                                        break;

                                                    case 'number':
                                                        var min = (options[0] || '').split(',')[0] || 0;
                                                        var max = (options[0] || '').split(',')[1] || 100;
                                                        var step = (options[0] || '').split(',')[2] || 1;
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "<div class='row'><div class='input-field col s12 m12 l12'>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <input class='value dialogWidgetSettingsUrlParameters validate validateOnlyError' data-option='" +
                                                            entry +
                                                            "' data-type='number' type='number' min='" +
                                                            min +
                                                            "' max='" +
                                                            max +
                                                            "' step='" +
                                                            step +
                                                            "' name='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' id='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "'  value='" +
                                                            value +
                                                            "' />";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <label for='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' class='translate'>" +
                                                            _(name) +
                                                            '</label>';
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <span class='helper-text' data-error='" +
                                                            min +
                                                            ' - ' +
                                                            max +
                                                            "' data-success=''></span>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <a class='inputClear waves-effect waves-light btn-small btn-floating' data-default='" +
                                                            defaultValue +
                                                            "'><i class='material-icons'>clear</i></a>";
                                                        dialogWidgetSettingsUrlParametersString += '</div></div>';
                                                        break;

                                                    case 'select':
                                                    case 'multipleSelect':
                                                        var selectOptionsContent = '';
                                                        options.forEach(function (option) {
                                                            var parts = option.split(',');
                                                            if (parts.length < 2) parts.push(parts[0]);
                                                            parts[0] = decodeURIComponent(parts[0]);
                                                            parts[1] = decodeURIComponent(parts[1]);
                                                            selectOptionsContent +=
                                                                "        <option value='" +
                                                                parts[0] +
                                                                "' " +
                                                                (parts[0] == value ? 'selected' : '') +
                                                                " class='translate'>" +
                                                                _(parts[1] || parts[0]) +
                                                                '</option>';
                                                        });
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "<div class='row'><div class='input-field col s12 m12 l12'>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            '    <select' +
                                                            (type == 'multipleSelect' ? ' multiple' : '') +
                                                            " class='value dialogWidgetSettingsUrlParameters' data-option='" +
                                                            entry +
                                                            "' data-type='select' name='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' id='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "'>" +
                                                            selectOptionsContent +
                                                            '</select>';
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <label for='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' class='translate'></label>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <span class='translate'>" + _(name) + '</span>';
                                                        dialogWidgetSettingsUrlParametersString += '</div></div>';
                                                        break;

                                                    case 'combobox':
                                                        dialogWidgetSettingsUrlParametersComboboxes.push({
                                                            id: 'dialogWidgetSettingsUrlParameter_' + entry,
                                                            options: decodeURIComponent(
                                                                options.join(';').replace(/\,/g, '/'),
                                                            ),
                                                            iconsFromOption: false,
                                                        });
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "<div class='row'><div class='input-field col s12 m12 l12'>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <input class='value dialogWidgetSettingsUrlParameters' data-option='" +
                                                            entry +
                                                            "' data-type='combobox' type='text' name='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' id='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "'  value='" +
                                                            value +
                                                            "' placeholder='' />";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <label for='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' class='translate'>" +
                                                            _(name) +
                                                            '</label>';
                                                        dialogWidgetSettingsUrlParametersString += '</div></div>';
                                                        break;

                                                    case 'historyInstance':
                                                        getHistoryInstances();
                                                        var selectOptionsContent = '';
                                                        selectOptionsContent +=
                                                            "        <option value=''>" + _('default') + '</option>';
                                                        historyInstances.forEach(function (historyInstance) {
                                                            selectOptionsContent +=
                                                                "        <option value='" +
                                                                historyInstance +
                                                                "'" +
                                                                (historyInstance == value ? ' selected' : '') +
                                                                '>' +
                                                                historyInstance +
                                                                '</option>';
                                                        });
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "<div class='row'><div class='input-field col s12 m12 l12'>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <select class='value dialogWidgetSettingsUrlParameters' data-option='" +
                                                            entry +
                                                            "' data-type='select' name='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' id='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "'>" +
                                                            selectOptionsContent +
                                                            '</select>';
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <label for='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' class='translate'></label>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <span class='translate'>" + _(name) + '</span>';
                                                        dialogWidgetSettingsUrlParametersString += '</div></div>';
                                                        break;

                                                    case 'checkbox':
                                                        if (value == 'true') value = true;
                                                        if (value == 'false') value = false;
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "<div class='row'><div class='input-field col s12 m12 l23'>";
                                                        dialogWidgetSettingsUrlParametersString += '    <p><label>';
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "        <input class='value dialogWidgetSettingsUrlParameters filled-in' data-option='" +
                                                            entry +
                                                            "' data-type='checkbox' type='checkbox' name='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' id='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' " +
                                                            (value ? "checked='checked'" : '') +
                                                            ' />';
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            '        <span>' + _(name) + '</span>';
                                                        dialogWidgetSettingsUrlParametersString += '    </label></p>';
                                                        dialogWidgetSettingsUrlParametersString += '</div></div>';
                                                        break;

                                                    case 'color':
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "<div class='row'><div class='input-field col s12 m12 l12'>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <input class='value MaterializeColorPicker validate validateOnlyError dialogWidgetSettingsUrlParameters' data-option='" +
                                                            entry +
                                                            "' data-type='color' type='text' name='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' id='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "'  value='" +
                                                            value +
                                                            "' placeholder='' />";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <label for='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' class='translate'>" +
                                                            _(name) +
                                                            '</label>';
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <span class='helper-text'></span>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <a class='inputClear waves-effect waves-light btn-small btn-floating' data-default='" +
                                                            defaultValue +
                                                            "'><i class='material-icons'>clear</i></a>";
                                                        dialogWidgetSettingsUrlParametersString += '</div></div>';
                                                        break;

                                                    case 'icon':
                                                        dialogWidgetSettingsUrlParametersComboboxes.push({
                                                            id: 'dialogWidgetSettingsUrlParameter_' + entry,
                                                            options: comboboxesIconsOptions,
                                                        });
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "<div class='row'><div class='input-field col s12 m12 l12'>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <input class='value dialogWidgetSettingsUrlParameters icon' data-option='" +
                                                            entry +
                                                            "' data-type='icon' type='text' name='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' id='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "'  value='" +
                                                            value +
                                                            "' placeholder='" +
                                                            _('No Icon') +
                                                            "' />";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <label for='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' class='translate'>" +
                                                            _(name) +
                                                            '</label>';
                                                        dialogWidgetSettingsUrlParametersString += '</div></div>';
                                                        break;

                                                    case 'fontFamily':
                                                        dialogWidgetSettingsUrlParametersComboboxes.push({
                                                            id: 'dialogWidgetSettingsUrlParameter_' + entry,
                                                            options: comboboxesFontsOptions,
                                                        });
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "<div class='row'><div class='input-field col s12 m12 l12'>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <input class='value dialogWidgetSettingsUrlParameters icon' data-option='" +
                                                            entry +
                                                            "' data-type='icon' type='text' name='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' id='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "'  value='" +
                                                            value +
                                                            "' placeholder='" +
                                                            _('Default Font') +
                                                            "' />";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <label for='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' class='translate'>" +
                                                            _(name) +
                                                            '</label>';
                                                        dialogWidgetSettingsUrlParametersString += '</div></div>';
                                                        break;

                                                    case 'fontSize':
                                                        var min = 1;
                                                        var max = 100;
                                                        var step = 0.01;
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "<div class='row'><div class='input-field col s12 m12 l12'>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <input class='value dialogWidgetSettingsUrlParameters validate validateOnlyError' data-option='" +
                                                            entry +
                                                            "' data-type='number' type='number' min='" +
                                                            min +
                                                            "' max='" +
                                                            max +
                                                            "' step='" +
                                                            step +
                                                            "' name='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' id='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "'  value='" +
                                                            value +
                                                            "' />";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <label for='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' class='translate'>" +
                                                            _(name) +
                                                            '</label>';
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <span class='helper-text' data-error='" +
                                                            min +
                                                            ' - ' +
                                                            max +
                                                            " [px]' data-success=''></span>";
                                                        dialogWidgetSettingsUrlParametersString += '</div></div>';
                                                        break;

                                                    case 'fontWeight':
                                                        var selectOptionsContent = '';
                                                        selectOptionsContent +=
                                                            "        <option value='' disabled selected class='translate'>Choose:</option>";
                                                        selectOptionsContent +=
                                                            "        <option value='lighter'" +
                                                            (value == 'lighter' ? ' selected' : '') +
                                                            " class='translate'>Lighter</option>";
                                                        selectOptionsContent +=
                                                            "        <option value='normal'" +
                                                            (value == 'normal' ? ' selected' : '') +
                                                            " class='translate'>Normal</option>";
                                                        selectOptionsContent +=
                                                            "        <option value='bold'" +
                                                            (value == 'bold' ? ' selected' : '') +
                                                            " class='translate'>Bold</option>";
                                                        selectOptionsContent +=
                                                            "        <option value='bolder'" +
                                                            (value == 'bolder' ? ' selected' : '') +
                                                            " class='translate'>Bolder</option>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "<div class='row'><div class='input-field col s12 m12 l12'>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <select class='value dialogWidgetSettingsUrlParameters' data-option='" +
                                                            entry +
                                                            "' data-type='select' name='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' id='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "'>" +
                                                            selectOptionsContent +
                                                            '</select>';
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <label for='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' class='translate'></label>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <span class='translate'>" + _(name) + '</span>';
                                                        dialogWidgetSettingsUrlParametersString += '</div></div>';
                                                        break;

                                                    case 'fontStyle':
                                                        var selectOptionsContent = '';
                                                        selectOptionsContent +=
                                                            "        <option value='' disabled selected class='translate'>Choose:</option>";
                                                        selectOptionsContent +=
                                                            "        <option value='normal'" +
                                                            (value == 'normal' ? ' selected' : '') +
                                                            " class='translate'>Normal</option>";
                                                        selectOptionsContent +=
                                                            "        <option value='italic'" +
                                                            (value == 'italic' ? ' selected' : '') +
                                                            " class='translate'>Italic</option>";
                                                        selectOptionsContent +=
                                                            "        <option value='oblique'" +
                                                            (value == 'oblique' ? ' selected' : '') +
                                                            " class='translate'>Oblique</option>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "<div class='row'><div class='input-field col s12 m12 l12'>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <select class='value dialogWidgetSettingsUrlParameters' data-option='" +
                                                            entry +
                                                            "' data-type='select' name='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' id='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "'>" +
                                                            selectOptionsContent +
                                                            '</select>';
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <label for='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' class='translate'></label>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <span class='translate'>" + _(name) + '</span>';
                                                        dialogWidgetSettingsUrlParametersString += '</div></div>';
                                                        break;

                                                    case 'language':
                                                        if (!value) value = systemLang;
                                                        var selectOptionsContent = '';
                                                        selectOptionsContent +=
                                                            "        <option value=' ' selected class='translate'>Choose:</option>";
                                                        selectOptionsContent +=
                                                            "        <option value='en'" +
                                                            (value == 'en' ? ' selected' : '') +
                                                            " class='translate'>English</option>";
                                                        selectOptionsContent +=
                                                            "        <option value='de'" +
                                                            (value == 'de' ? ' selected' : '') +
                                                            " class='translate'>German</option>";
                                                        selectOptionsContent +=
                                                            "        <option value='ru'" +
                                                            (value == 'ru' ? ' selected' : '') +
                                                            " class='translate'>Russian</option>";
                                                        selectOptionsContent +=
                                                            "        <option value='pt'" +
                                                            (value == 'pt' ? ' selected' : '') +
                                                            " class='translate'>Polish</option>";
                                                        selectOptionsContent +=
                                                            "        <option value='nl'" +
                                                            (value == 'nl' ? ' selected' : '') +
                                                            " class='translate'>Dutch</option>";
                                                        selectOptionsContent +=
                                                            "        <option value='fr'" +
                                                            (value == 'fr' ? ' selected' : '') +
                                                            " class='translate'>French</option>";
                                                        selectOptionsContent +=
                                                            "        <option value='it'" +
                                                            (value == 'it' ? ' selected' : '') +
                                                            " class='translate'>Italian</option>";
                                                        selectOptionsContent +=
                                                            "        <option value='es'" +
                                                            (value == 'es' ? ' selected' : '') +
                                                            " class='translate'>Spanish</option>";
                                                        selectOptionsContent +=
                                                            "        <option value='zh-cn'" +
                                                            (value == 'zh-cn' ? ' selected' : '') +
                                                            " class='translate'>Chinese</option>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "<div class='row'><div class='input-field col s12 m12 l12'>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <select class='value dialogWidgetSettingsUrlParameters' data-option='" +
                                                            entry +
                                                            "' data-type='select' name='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' id='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "'>" +
                                                            selectOptionsContent +
                                                            '</select>';
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <label for='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' class='translate'></label>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <span class='translate'>" + _(name) + '</span>';
                                                        dialogWidgetSettingsUrlParametersString += '</div></div>';
                                                        break;

                                                    case 'datapoint':
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "<div class='row'><div class='input-field col s12 m12 l12'>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <input class='value dialogWidgetSettingsUrlParameters' data-option='" +
                                                            entry +
                                                            "' data-type='text' type='text' name='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' id='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "'  value='" +
                                                            value +
                                                            "' />";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <label for='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' class='translate'>" +
                                                            _(name) +
                                                            '</label>';
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "	<a class='dialogWidgetSettingsUrlParametersButton inputEdit waves-effect waves-light btn-small btn-floating' data-selectidfor='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "'><i class='material-icons'>edit</i></a>";
                                                        dialogWidgetSettingsUrlParametersString += '</div></div>';
                                                        break;

                                                    case 'listJsonDatapoint':
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "<div class='row'><div class='input-field col s11 m11 l11'>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <input class='value dialogWidgetSettingsUrlParameters listJsonDatapoint' data-option='" +
                                                            entry +
                                                            "' data-type='text' type='text' name='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' id='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "'  value='" +
                                                            value +
                                                            "' />";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <label for='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' class='translate'>" +
                                                            _(name) +
                                                            '</label>';
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "</div><div class='input-field col s1 m1 l1'>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "	<a class='dialogWidgetSettingsUrlParametersButton inputEdit waves-effect waves-light btn-small btn-floating' data-selectidfor='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "'><i class='material-icons'>edit</i></a>";
                                                        dialogWidgetSettingsUrlParametersString += '</div></div>';
                                                        break;

                                                    case 'hidden':
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "<input style='display:none;' class='value dialogWidgetSettingsUrlParameters' data-option='" +
                                                            entry +
                                                            "' data-type='text' type='text' name='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' id='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "'  value='" +
                                                            value +
                                                            "' />";
                                                        break;

                                                    case 'text':
                                                    default:
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "<div class='row'><div class='input-field col s12 m12 l12'>";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <input class='value dialogWidgetSettingsUrlParameters' data-option='" +
                                                            entry +
                                                            "' data-type='text' type='text' name='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' id='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "'  value='" +
                                                            value +
                                                            "' />";
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <label for='dialogWidgetSettingsUrlParameter_" +
                                                            entry +
                                                            "' class='translate'>" +
                                                            _(name) +
                                                            '</label>';
                                                        dialogWidgetSettingsUrlParametersString +=
                                                            "    <a class='inputClear waves-effect waves-light btn-small btn-floating' data-default='" +
                                                            defaultValue +
                                                            "'><i class='material-icons'>clear</i></a>";
                                                        dialogWidgetSettingsUrlParametersString += '</div></div>';
                                                        break;
                                                }
                                            });
                                            if (dialogWidgetSettingsUrlParametersString) {
                                                if (dialogWidgetSettingsUrlParametersStringCollapsibleOpen) {
                                                    dialogWidgetSettingsUrlParametersString += '</div>';
                                                    dialogWidgetSettingsUrlParametersString += '</li>';
                                                }
                                                dialogWidgetSettingsUrlParametersString += '</ul>';
                                                $('#dialogWidgetSettingsUrlParameters')
                                                    .html(dialogWidgetSettingsUrlParametersString)
                                                    .show();
                                                $('#dialogWidgetSettingsUrlParametersCollapsible').collapsible({
                                                    accordion: false,
                                                });
                                                $('select.dialogWidgetSettingsUrlParameters').select();
                                                dialogWidgetSettingsUrlParametersComboboxes.forEach(function (entry) {
                                                    enhanceTextInputToCombobox(
                                                        '#' + entry.id,
                                                        entry.options,
                                                        typeof entry.iconsFromOption != udef
                                                            ? entry.iconsFromOption
                                                            : true,
                                                    );
                                                });
                                                var toDo = function () {
                                                    listsOptions = [];
                                                    for (objectId in iobrokerObjects) {
                                                        if (
                                                            objectId.indexOf(adapter + '.') == 0 &&
                                                            objectId.indexOf('.Lists.') > -1
                                                        ) {
                                                            if (
                                                                iobrokerObjects[objectId].common &&
                                                                iobrokerObjects[objectId].common.role &&
                                                                iobrokerObjects[objectId].common.role == 'list.json' &&
                                                                iobrokerObjects[objectId].native &&
                                                                iobrokerObjects[objectId].native.iQontrolDatapointList
                                                            ) {
                                                                listsOptions.push(
                                                                    objectId +
                                                                        '/' +
                                                                        ((iobrokerObjects[objectId].common &&
                                                                            iobrokerObjects[objectId].common.name) ||
                                                                            objectId),
                                                                );
                                                            }
                                                        }
                                                    }
                                                    enhanceTextInputToCombobox(
                                                        '.dialogWidgetSettingsUrlParameters.listJsonDatapoint',
                                                        listsOptions.join(';'),
                                                        false,
                                                    );
                                                };
                                                if (iobrokerObjectsReady) {
                                                    toDo();
                                                } else {
                                                    iobrokerObjectsReadyFunctions.push(toDo);
                                                }
                                                $('.dialogWidgetSettingsUrlParametersButton.inputEdit')
                                                    .off('click')
                                                    .on('click', function () {
                                                        $('#dialogSelectId').data(
                                                            'selectidfor',
                                                            $(this).data('selectidfor'),
                                                        );
                                                        initSelectId(function (sid) {
                                                            sid.selectId(
                                                                'show',
                                                                $('#' + $('#dialogSelectId').data('selectidfor')).val(),
                                                                { type: 'state' },
                                                                function (newId) {
                                                                    if (newId) {
                                                                        $(
                                                                            '#' +
                                                                                $('#dialogSelectId').data(
                                                                                    'selectidfor',
                                                                                ),
                                                                        )
                                                                            .val(newId)
                                                                            .trigger('change');
                                                                    }
                                                                },
                                                            );
                                                        });
                                                    });
                                                initColorpickers(onChange);
                                                initInputClear();
                                                if (M) M.updateTextFields();
                                            } else {
                                                $('#dialogWidgetSettingsUrlParameters').html('').hide();
                                            }
                                        }
                                        break;

                                    case 'widget-options':
                                        if (metaContent) {
                                            widgetOptions = tryParseJSON(metaContent.replace(/\'/g, '"'));
                                            if (widgetOptions) {
                                                var dialogWidgetSettingsOptionsString = '';
                                                var dialogWidgetSettingsOptionsUnsupportedString;
                                                for (option in widgetOptions) {
                                                    if (iQontrolRoles['iQontrolWidget'].options[option]) {
                                                        var optionActualySet = (
                                                            actualOptions.find(function (element) {
                                                                return element.option == option;
                                                            }) || {}
                                                        ).value;
                                                        var optionAlreadySet =
                                                            checkForOptionsAlreadySet &&
                                                            widgetOptions[option] == optionActualySet;
                                                        dialogWidgetSettingsOptionsString +=
                                                            "<label><input class='dialogWidgetSettingsOptions' type='checkbox'" +
                                                            (optionAlreadySet ||
                                                            (choseOptionsNotSet && !optionAlreadySet)
                                                                ? " checked='checked'"
                                                                : '') +
                                                            "' data-option='" +
                                                            option +
                                                            "' data-value='" +
                                                            widgetOptions[option] +
                                                            "'><span style='height: auto;'><b>" +
                                                            _(iQontrolRoles['iQontrolWidget'].options[option].name) +
                                                            '</b>: <u>' +
                                                            widgetOptions[option] +
                                                            '</u>' +
                                                            (checkForOptionsAlreadySet
                                                                ? optionAlreadySet
                                                                    ? "&nbsp;<span style='color: green;'>&check;</span>"
                                                                    : "&nbsp;<span style='color: red;'>&cross;&nbsp;(" +
                                                                      _('actual set to') +
                                                                      ':&nbsp;' +
                                                                      optionActualySet +
                                                                      ')</span>'
                                                                : '') +
                                                            '</span></label><br>';
                                                    } else {
                                                        dialogWidgetSettingsOptionsUnsupportedString +=
                                                            options[option].name +
                                                            ': ' +
                                                            widgetOptions[option] +
                                                            '<br>';
                                                    }
                                                }
                                                if (dialogWidgetSettingsOptionsUnsupportedString)
                                                    dialogWidgetSettingsOptionsString +=
                                                        '<br><br>' +
                                                        _('Unsupported settings:') +
                                                        '<br>' +
                                                        dialogWidgetSettingsOptionsUnsupportedString;
                                                if (dialogWidgetSettingsOptionsString.length) {
                                                    var html =
                                                        '<b>' +
                                                        _('Apply the following device options:') +
                                                        '</b><br><br>';
                                                    html +=
                                                        '<a class=\'btn-small chose\' onclick=\'$(".dialogWidgetSettingsOptions").prop("checked", true).trigger("change");\'><i class=\'large material-icons left\'>check_box</i>' +
                                                        _('All') +
                                                        '</a>';
                                                    html +=
                                                        '<a class=\'btn-small chose\' onclick=\'$(".dialogWidgetSettingsOptions").prop("checked", false).trigger("change");\'><i class=\'large material-icons left\'>check_box_outline_blank</i>' +
                                                        _('None') +
                                                        '</a>';
                                                    html += '<br><br>' + dialogWidgetSettingsOptionsString;
                                                    $('#dialogWidgetSettingsOptions').html(html).show();
                                                } else {
                                                    $('#dialogWidgetSettingsOptions').html('').hide();
                                                }
                                            } else {
                                                alert(
                                                    _(
                                                        'Found settings for widget options, but the options are not valid (they need to be in a valid JSON-format).',
                                                    ),
                                                );
                                            }
                                        }
                                        break;

                                    case 'widget-replaceurl':
                                        if (metaContent) {
                                            $('#dialogWidgetSettings').data('replaceurl', metaContent);
                                            $('#dialogWidgetSettings').data(
                                                'replaceurlabsolute',
                                                $(this).data('absolute'),
                                            );
                                            $('#dialogWidgetSettingsReplaceurlDestination').html(metaContent);
                                            $('#dialogWidgetSettingsReplaceurlSwitchToDestination')
                                                .off('click')
                                                .on('click', function () {
                                                    var dialogCallback =
                                                        $('#dialogWidgetSettings').data('save-callback');
                                                    if (typeof dialogCallback === 'function')
                                                        dialogCallback('replaceurlSwitchToDestination');
                                                });
                                            $('.dialogWidgetSettingsReplaceurl').show();
                                        }
                                        break;
                                }
                            });
                    },
                );
            }
        });
    }

    //Export and Import devices
    $('#devicesExport').on('click', function () {
        initDialog(
            'dialogDevicesExport',
            function () {
                //save dialog
                var devicesToExport = [];
                $('.dialogDevicesExportDeviceListDevice').each(function () {
                    if ($(this).prop('checked'))
                        devicesToExport.push(views[devicesSelectedView].devices[$(this).data('index')]);
                });
                saveStringAsLocalFile(
                    JSON.stringify(devicesToExport),
                    'charset=utf-8',
                    'text/json',
                    'devices.json',
                    true,
                );
            },
            function () {
                //init dialog function
                //Add devices to export list
                if (devicesSelectedView > -1) {
                    $('#dialogDevicesExportDeviceList').html('');
                    views[devicesSelectedView].devices.forEach(function (device, index) {
                        $('#dialogDevicesExportDeviceList').append(
                            "<label><input class='dialogDevicesExportDeviceListDevice' type='checkbox'" +
                                "' data-index='" +
                                index +
                                "'><span style='height: auto;'><b>" +
                                device.commonName +
                                '</b> (' +
                                device.commonRole +
                                ')</span></label><br>',
                        );
                    });
                    $('.dialogDevicesExportDeviceListDevice').on('change', function () {
                        var oneChecked = false;
                        $('.dialogDevicesExportDeviceListDevice').each(function () {
                            if ($(this).prop('checked')) oneChecked = true;
                        });
                        if (oneChecked) $('#dialogDevicesExport .btn-set').removeClass('disabled');
                        else $('#dialogDevicesExport .btn-set').addClass('disabled');
                    });
                } else {
                    $('#dialogDevicesExportDeviceList').html(_('There is no device on this view to export'));
                }
            },
        );
    });
    $('#devicesImport').on('click', function () {
        loadLocalFileAsString('.json', function (result) {
            var resultObj = tryParseJSON(result);
            var resultObjValid = true;
            if (!(resultObj && typeof resultObj == 'object' && typeof resultObj.forEach == 'function')) {
                resultObjValid = false;
            }
            if (resultObjValid) {
                views[devicesSelectedView].devices = views[devicesSelectedView].devices.concat(resultObj);
                alert(_('Settings imported.'));
                values2table('tableDevices', views[devicesSelectedView].devices, onChange, onTableDevicesReady);
                onChange();
            } else {
                alert(_('Error: Invalid data.'));
            }
        });
    });

    //+++++++++ TOOLBAR ++++++++++
    //Load Toolbar
    function loadToolbar() {
        $('.collapsible').collapsible();

        //Add Views to Selectbox for toolbar LinkedView
        var viewIds = [];
        views.forEach(function (element) {
            viewIds.push(element.commonName);
        });
        $('*[data-name="nativeLinkedView"]').data('options', viewIds.join(';'));
        //Fill Table
        values2table('tableToolbar', toolbar, onChange, onTableToolbarReady);

        //Add views to Selectbox for panel BACKGROUND_VIEW
        var viewIds = [''];
        views.forEach(function (element) {
            viewIds.push(adapter + '.' + instance + '.Views.' + element.commonName + '/' + element.commonName);
        });
        enhanceTextInputToCombobox('#panelBackgroundViewValue', '/;' + viewIds.join(';'), false, function (value) {
            if (value && value != '' && !$('#panelAllowPostMessage').prop('checked')) {
                if (
                    confirm(
                        'Its recommended to allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML. Enable this option now?',
                    )
                ) {
                    $('#panelAllowPostMessage').prop('checked', 'checked').trigger('change');
                }
            }
        });

        //Add widgets and websites to Selectbox for panel BACKGROUND_URL
        var inbuiltWidgetsString = '';
        inbuiltWidgets.forEach(function (widget) {
            if (widget && typeof widget.filename != udef) {
                inbuiltWidgetsString +=
                    ';' +
                    ('./images/widgets/' + widget.filename).replace(/\//g, '\\') +
                    '/' +
                    (widget.name || widget.filename).replace(/\//g, '\\') +
                    '/' +
                    (previewLink + ('/images/widgets/' + widget.icon || '/images/icons/file_html.png')).replace(
                        /\//g,
                        '\\',
                    );
            }
        });
        if (inbuiltWidgets.length > 0) {
            inbuiltWidgetsString = ';[' + _('Inbuilt Widgets') + ':]' + inbuiltWidgetsString;
        }
        var websitenames = [];
        imagesDirs.forEach(function (imagesDir) {
            if (imagesDir.dirname.indexOf('/userwidgets') == 0 && imagesDir.files && imagesDir.files.length > 0) {
                var websitenamesInThisDir = [];
                imagesDir.files.forEach(function (file) {
                    var filename = file.filename || '';
                    if (
                        filename.endsWith('.shtml') ||
                        filename.endsWith('.ehtml') ||
                        filename.endsWith('.shtm') ||
                        filename.endsWith('.htm') ||
                        filename.endsWith('.html')
                    ) {
                        var iconIndex = images.findIndex(function (element) {
                            return element.filename == file.filename.substring(0, file.filename.length - 5) + '.png';
                        });
                        if (iconIndex > -1)
                            var icon = previewLink + '/..' + userfilesImagePath + images[iconIndex].filename;
                        else var icon = previewLink + '/images/icons/file_html.png';
                        websitenamesInThisDir.push(
                            '.\\..' +
                                userfilesImagePathBS +
                                file.filenameBS +
                                '/' +
                                file.filenameBS +
                                '/' +
                                icon.replace(/\//g, '\\'),
                        );
                    }
                });
                if (websitenamesInThisDir.length > 0) {
                    websitenames.push('[' + imagesDir.dirnameBS + ':]');
                    websitenames.push(websitenamesInThisDir.join(';'));
                }
            }
        });
        if (websitenames.length > 0) {
            websitenames.unshift(';[' + _('User Widgets') + ':]');
        }
        enhanceTextInputToCombobox(
            '#panelBackgroundURLValue',
            '/' + _('(None)') + inbuiltWidgetsString + websitenames.join(';'),
            true,
        );

        //Enhande panel commonRole with functions
        $('select.panelStates.commonRole')
            .off('input change')
            .on('input change', function () {
                var id = $(this).data('id');
                var valueId = id + 'Value';
                var $value = $('#' + valueId);
                //Show or hide selectboxes
                if ($(this).val() == 'const') {
                    $value.next('a').prop('style', '');
                } else {
                    $value.next('a').prop('style', 'display: none !important;');
                }
            })
            .trigger('change');

        //Enhance panel edit-buttons with functions
        $('a.panelStates[data-command="edit"]')
            .off('click')
            .on('click', function () {
                var id = $(this).data('id');
                var commonRoleId = id + 'CommonRole';
                var valueId = id + 'Value';
                var $commonRole = $('#' + commonRoleId);
                var $value = $('#' + valueId);
                if ($commonRole.val() == 'linkedState') {
                    //linkedState
                    $('#dialogSelectId').data('selectidfor', valueId);
                    initSelectId(function (sid) {
                        sid.selectId('show', $value.val(), { type: 'state' }, function (newId) {
                            if (newId) {
                                $('#' + $('#dialogSelectId').data('selectidfor'))
                                    .val(newId)
                                    .trigger('change');
                            }
                        });
                    });
                } else if ($commonRole.val() == 'const') {
                    //const
                    initDialog(
                        'dialogDeviceEditStateConstant',
                        function () {
                            //save dialog
                            $('#' + $('#dialogDeviceEditStateConstantIndex').val())
                                .val($('#dialogDeviceEditStateConstantTextarea').val().replace(/\n/g, '\\n'))
                                .trigger('change');
                        },
                        function () {
                            //init dialog function
                            $('#dialogDeviceEditStateConstantName').html(id || '');
                            $('#dialogDeviceEditStateConstantIndex').val(valueId);
                            $('#dialogDeviceEditStateConstantTextarea').val(($value.val() || '').replace(/\\n/g, '\n'));
                            $('#dialogDeviceEditStateConstantTextarea').trigger('autoresize');
                        },
                    );
                }
            });
    }

    //Enhance tableToolbar with functions
    function onTableToolbarReady() {
        var $div = $('#tableToolbar');
        var $table = $div.find('.table-values');
        var $lines = $table.find('.table-lines');
        //Add Images to Selectbox for BackgroundImage
        var jqueryIconsString = '';
        jqueryIcons.forEach(function (symbol) {
            if (symbol != '') {
                jqueryIconsString +=
                    ';' +
                    symbol +
                    '/' +
                    symbol +
                    '/' +
                    (previewLink + '/jquery/images/icons-svg/' + symbol + '-black.svg').replace(/\//g, '\\');
            }
        });
        if (jqueryIcons.length > 0) {
            jqueryIconsString = ';[' + _('Standard Symbols') + ':]' + jqueryIconsString;
        }
        var inbuiltSymbolsString = '';
        inbuiltSymbols.forEach(function (symbol) {
            if (symbol != '') {
                inbuiltSymbolsString +=
                    ';' + ('./images/symbols/' + symbol).replace(/\//g, '\\') + '/' + symbol.replace(/\//g, '\\');
            }
        });
        if (inbuiltSymbols.length > 0) {
            inbuiltSymbolsString = ';[' + _('Inbuilt Symbols') + ':]' + inbuiltSymbolsString;
        }
        var imagenames = [];
        imagesDirs.forEach(function (imagesDir) {
            if (imagesDir.dirname.indexOf('/usersymbols') == 0 && imagesDir.files && imagesDir.files.length > 0) {
                imagenames.push('[' + imagesDir.dirnameBS + ':]');
                imagesDir.files.forEach(function (file) {
                    imagenames.push('.\\..' + userfilesImagePathBS + file.filenameBS + '/' + file.filenameBS);
                });
            }
        });
        if (imagenames.length > 0) {
            imagenames.unshift(';[' + _('User Symbols') + ':]');
        }
        enhanceTextInputToCombobox(
            '#tableToolbar input[data-name="nativeIcon"]',
            '/' + _('(None)') + jqueryIconsString + inbuiltSymbolsString + imagenames.join(';'),
            true,
        );
        //Button-Functions
        $lines.find('a[data-command]').each(function () {
            var command = $(this).data('command');
            //Edit Toolbar Entry
            if (command === 'edit') {
                var toolbarIndex = $(this).data('index');
                $(this).on('click', function () {
                    var _toolbarIndex = $(this).data('index');
                    initDialog(
                        'dialogToolbarEdit',
                        function () {
                            //save dialog
                            var _toolbarIndex = $('#dialogToolbarEditToolbarIndex').val();
                            $('.colorpicker-element').trigger('blur');
                            toolbar[_toolbarIndex].states = dialogToolbarEditStatesTable;
                            toolbar[_toolbarIndex].options = [
                                {
                                    option: 'badgeWithoutUnit',
                                    type: 'checkbox',
                                    value: $('#dialogToolbarEditOption_BadgeWithoutUnit').prop('checked'),
                                },
                            ];
                            onTableToolbarReady();
                        },
                        function () {
                            //init dialog function
                            $('#dialogToolbarEditCommonName').html(toolbar[_toolbarIndex].commonName || '');
                            $('#dialogToolbarEditToolbarIndex').val(_toolbarIndex);
                            dialogToolbarEditStates = toolbar[_toolbarIndex].states || [];
                            dialogToolbarEditStatesTable = [];
                            //build states table
                            ['BADGE', 'BADGE_COLOR'].forEach(function (entry) {
                                //push all corresponding states for the selected role into the table
                                var commonRole =
                                    (
                                        dialogToolbarEditStates.find(function (element) {
                                            return element.state == entry;
                                        }) || {}
                                    ).commonRole || '';
                                var value =
                                    (
                                        dialogToolbarEditStates.find(function (element) {
                                            return element.state == entry;
                                        }) || {}
                                    ).value || '';
                                if (commonRole == '') {
                                    if (entry == 'BADGE_COLOR') {
                                        commonRole = 'const';
                                    } else {
                                        commonRole = 'linkedState';
                                    }
                                }
                                dialogToolbarEditStatesTable.push({
                                    state: entry,
                                    commonRole: commonRole,
                                    value: value,
                                });
                            });
                            //Fill Table
                            values2table(
                                'tableDialogToolbarEditStates',
                                dialogToolbarEditStatesTable,
                                onChange,
                                ontableDialogToolbarEditStatesReady,
                            );
                            $('#dialogToolbarEdit .btn-preview').data(
                                'preview-render-view',
                                'iqontrol.' + instance + '.Views.' + views[0].commonName,
                            );
                            //Options
                            $('#dialogToolbarEditOption_BadgeWithoutUnit').prop(
                                'checked',
                                (
                                    (toolbar[_toolbarIndex].options || []).find(function (element) {
                                        return element.option == 'badgeWithoutUnit';
                                    }) || {}
                                ).value || false,
                            );
                        },
                    );
                });
            }
            //Drag-Icon
            if (command === 'drag_handle') {
                var imageIndex = $(this).data('index');
                $(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
            }
        });
        //Make table sortable
        $('#tableToolbar tbody').sortable({
            helper: fixHelper,
            stop: function (event, ui) {
                console.log('Drag ended, start resorting...');
                $('#tableToolbar tbody').sortable('disable');
                var sequence = [];
                $('#tableToolbar')
                    .find('.table-values')
                    .find('.table-lines')
                    .find('tr')
                    .each(function () {
                        sequence.push($(this).data('index'));
                    });
                var tableResorted = [];
                for (var i = 0; i < sequence.length; i++) {
                    tableResorted.push(toolbar[sequence[i]]);
                }
                toolbar = tableResorted;
                onChange();
                values2table('tableToolbar', toolbar, onChange, onTableToolbarReady);
                $('#tableToolbar tbody').sortable('enable');
                console.log('resorted.');
            },
            axis: 'y',
            handle: "a[data-command='drag_handle']",
        });
    }

    function ontableDialogToolbarEditStatesReady() {
        var $div = $('#tableDialogToolbarEditStates');
        var $table = $div.find('.table-values');
        var $lines = $table.find('.table-lines');
        //Make State Readonly and add id for selectId-Dialog
        $lines.find('input[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'state') {
                $(this).prop('readonly', true);
            }
            if (name === 'value') {
                var stateIndex = $(this).data('index');
                $(this).prop('id', 'tableDialogToolbarEditStatesValue_' + stateIndex);
            }
        });
        //Role
        $lines.find('select[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'commonRole') {
                var stateIndex = $(this).data('index');
                $(this)
                    .on('input change', function () {
                        (function () {
                            //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
                            //Show or hide selectboxes
                            var _stateIndex = stateIndex;
                            if (dialogToolbarEditStatesTable[stateIndex].commonRole == 'const') {
                                $('#tableDialogToolbarEditStatesValue_' + _stateIndex)
                                    .next('a')
                                    .prop('style', '');
                            } else {
                                $('#tableDialogToolbarEditStatesValue_' + _stateIndex)
                                    .next('a')
                                    .prop('style', 'display: none !important;');
                            }
                            if (dialogToolbarEditStatesTable[stateIndex].state == 'BADGE_COLOR') {
                                //COLOR - init ColorPicker
                                var $targetInput = $('#tableDialogToolbarEditStatesValue_' + _stateIndex);
                                if (dialogToolbarEditStatesTable[stateIndex].commonRole == 'const') {
                                    var oldVal = $targetInput.val();
                                    if (!$targetInput.data('materialize-color-picker-initialized')) {
                                        $targetInput.colorpicker().on('changeColor', function (event) {
                                            if (event.color)
                                                $(this).css(
                                                    'border-right',
                                                    '10px solid rgba(' +
                                                        event.color.toRGB().r +
                                                        ', ' +
                                                        event.color.toRGB().g +
                                                        ', ' +
                                                        event.color.toRGB().b +
                                                        ', ' +
                                                        event.color.toRGB().a +
                                                        ')',
                                                );
                                        });
                                        if (oldVal == '') $targetInput.val('');
                                        $targetInput.on('change', function () {
                                            if ($(this).val() == '') {
                                                $(this).css('border-right', '0px solid black');
                                            } else {
                                                $(this).trigger('changeColor');
                                            }
                                        });
                                        $targetInput.on('blur', function () {
                                            dialogToolbarEditStatesTable[$targetInput.data('index')].value =
                                                $(this).val();
                                            console.log('Saved color-picker value ' + $(this).val());
                                        });
                                        $targetInput.data('materialize-color-picker-initialized', true);
                                    }
                                    if (isValidColorString(oldVal)) {
                                        $targetInput.trigger('change');
                                    }
                                } else {
                                    if ($targetInput.data('materialize-color-picker-initialized')) {
                                        $targetInput.colorpicker('destroy');
                                        $targetInput.data('materialize-color-picker-initialized', false);
                                    }
                                    $targetInput.css('border-right', '0px solid black');
                                }
                            }
                        })(); //<--End Closure
                    })
                    .trigger('change');
            }
            $(this).select();
        });
        //Button-Functions
        $lines.find('a[data-command]').each(function () {
            var command = $(this).data('command');
            //Edit (SelectId or Edit Text)
            if (command === 'edit') {
                $(this).on('click', function () {
                    var stateIndex = $(this).data('index');
                    var stateValue = (dialogToolbarEditStatesTable[stateIndex].value || '').replace(/\\n/g, '\n');
                    if (dialogToolbarEditStatesTable[stateIndex].commonRole == 'const') {
                        //const
                        if (dialogToolbarEditStatesTable[stateIndex].state == 'BADGE_COLOR') {
                            //const - COLOR - open Colorpicker
                            var $targetInput = $('#tableDialogToolbarEditStatesValue_' + stateIndex);
                            if ($targetInput.data('materialize-color-picker-initialized')) {
                                $targetInput.colorpicker('show');
                            }
                        } else {
                            //const TEXT - open editText dialog
                            initDialog(
                                'dialogDeviceEditStateConstant',
                                function () {
                                    //save dialog
                                    var stateIndex = $('#dialogDeviceEditStateConstantIndex').val();
                                    $('#tableDialogToolbarEditStatesValue_' + stateIndex)
                                        .val($('#dialogDeviceEditStateConstantTextarea').val().replace(/\n/g, '\\n'))
                                        .trigger('change');
                                },
                                function () {
                                    //init dialog function
                                    $('#dialogDeviceEditStateConstantName').html(
                                        dialogToolbarEditStatesTable[stateIndex].state || '',
                                    );
                                    $('#dialogDeviceEditStateConstantIndex').val(stateIndex);
                                    $('#dialogDeviceEditStateConstantTextarea').val(
                                        (dialogToolbarEditStatesTable[stateIndex].value || '').replace(/\\n/g, '\n'),
                                    );
                                    $('#dialogDeviceEditStateConstantTextarea').trigger('autoresize');
                                },
                            );
                        }
                    } else {
                        //linkedState - open selectID dialog
                        $('#dialogSelectId').data('selectidfor', 'tableDialogToolbarEditStatesValue_' + stateIndex);
                        initSelectId(function (sid) {
                            sid.selectId(
                                'show',
                                $('#tableDialogToolbarEditStatesValue_' + stateIndex).val(),
                                { type: 'state' },
                                function (newId) {
                                    if (newId) {
                                        $('#' + $('#dialogSelectId').data('selectidfor'))
                                            .val(newId)
                                            .trigger('change');
                                    }
                                },
                            );
                        });
                    }
                });
            }
        });
    }

    //++++++++++ IMAGES ++++++++++
    //Load Images
    function loadImages() {
        //Fill Table
        values2table('tableImages', images, onChange, onTableImagesReady);
        //Add Dirs to Selectbox for SelectedDir
        imagesSelectedDirFillSelectbox();
    }

    //Init Image-Upload
    function initImageUpload() {
        document.getElementById('imagesUploadFile').addEventListener('change', imagesUploadHandleFileSelect, false);
        $('#imagesUploadFileSubmit').on('click', imagesUploadHandleSubmit);
    }
    function imagesUploadHandleFileSelect() {
        $('#imagesUploadFileSubmit').addClass('disabled').removeClass('pulse');
        var files = $('#imagesUploadFile')[0].files || $('#imagesUploadFile')[0].dataTransfer.files; // FileList object
        if (!files.length) return;
        for (i = 0; i < files.length; i++) {
            var file = files[i];
            filename = file.name || '';
            filetype = (file.type == '' ? filename.substr(filename.lastIndexOf('.')) : file.type) || '';
            if (filetype == '') {
                alert(_('%s is directory. Only file upload allowed.', escape(filename)));
                return;
            }
            if (file.size > 10 * 1024 * 1024) {
                alert(_('File %s is too big. Maximum 10MB', escape(filename)));
                return;
            }
            if (
                $('#imagesUploadFile').prop('accept') &&
                $('#imagesUploadFile').prop('accept').split(', ').indexOf(filetype.toLowerCase()) == -1
            ) {
                alert(
                    _('File %s has wrong filetype. Allowed file types: ', escape(filename)) +
                        $('#imagesUploadFile').prop('accept'),
                );
                return;
            }
            $('#imagesUploadFileSubmit').removeClass('disabled').addClass('pulse');
        }
    }
    var imagesUploadFileHandleCount = 0;
    function imagesUploadHandleSubmit() {
        var files = $('#imagesUploadFile')[0].files || $('#imagesUploadFile')[0].dataTransfer.files; // FileList object
        if (!files.length) return;
        $('#imagesUploadFileSubmit').addClass('disabled').removeClass('pulse');
        $('#imagesUploadFileFormProgress').show();
        for (i = 0; i < files.length; i++) {
            var file = files[i];
            imagesUploadFileHandleCount++;
            uploadFile(file, userfilesImagePath + $('#imagesSelectedDir').val(), function (name) {
                $('#imagesUploadFileForm')[0].reset();
                imagesUploadFileHandleCount--;
                if (imagesUploadFileHandleCount == 0) {
                    getImages(function () {
                        values2table('tableImages', images, onChange, onTableImagesReady);
                        var dummy = $('#imagesSelectedDir').val();
                        imagesSelectedDirFillSelectbox();
                        $('#imagesSelectedDir').val(dummy).trigger('change');
                        $('#imagesSelectedDir').select();
                        $('#imagesUploadFileFormProgress').hide();
                    });
                }
            });
        }
    }

    //getImages
    var getImagesRunningTasks = 0;
    function getImages(path, callback) {
        $('.hideOnLoad').hide();
        $('.showOnLoad').show();
        if (typeof path == 'function') callback = path;
        if (typeof path != 'string') {
            path = userfilesImagePath;
            images = [];
            imagesDirs = [
                {
                    dirname: '/',
                    dirnameBS: '\\',
                    dirnameVS: '|',
                },
            ];
        }
        socketCallback = function (err, obj) {
            if (obj)
                obj.forEach(function (element) {
                    if (element.isDir) {
                        imagesDirs.push({
                            dirname: path.substring(userfilesImagePath.length) + '/' + element.file,
                            dirnameBS:
                                path.substring(userfilesImagePath.length).replace(/\//g, '\\') +
                                '\\' +
                                element.file.replace(/\//g, '\\'),
                            dirnameVS:
                                path.substring(userfilesImagePath.length).replace(/\//g, '|') +
                                '|' +
                                element.file.replace(/\//g, '|'),
                        });
                        getImagesRunningTasks += 1;
                        getImages(path + '/' + element.file, callback);
                    } else {
                        images.push({
                            filename: path.substring(userfilesImagePath.length) + '/' + element.file,
                            filenameBS:
                                path.substring(userfilesImagePath.length).replace(/\//g, '\\') +
                                '\\' +
                                element.file.replace(/\//g, '\\'),
                            filenameVS:
                                path.substring(userfilesImagePath.length).replace(/\//g, '|') +
                                '|' +
                                element.file.replace(/\//g, '|'),
                        });
                        console.log('Got Image: ' + path + '/' + element.file);
                    }
                });
            if (getImagesRunningTasks > 0) {
                getImagesRunningTasks -= 1;
            } else {
                //Got all images
                imagesDirs.sort(function (a, b) {
                    return a.dirname.toLowerCase() > b.dirname.toLowerCase()
                        ? 1
                        : b.dirname.toLowerCase() > a.dirname.toLowerCase()
                          ? -1
                          : 0;
                });
                imagesDirs.forEach(function (imagesDir) {
                    var imagesDirFiles = [];
                    images.forEach(function (image) {
                        if (
                            image.filename.indexOf(imagesDir.dirname) == 0 &&
                            (image.filename.lastIndexOf('/') == 0 ||
                                image.filename.lastIndexOf('/') == imagesDir.dirname.length)
                        ) {
                            imagesDirFiles.push(image);
                        }
                    });
                    imagesDirFiles.sort(function (a, b) {
                        return a.filename.toLowerCase() > b.filename.toLowerCase()
                            ? 1
                            : b.filename.toLowerCase() > a.filename.toLowerCase()
                              ? -1
                              : 0;
                    });
                    imagesDir.files = imagesDirFiles;
                });
                console.log('Got all images.');
                $('.hideOnLoad').show();
                $('.showOnLoad').hide();
                if (typeof callback == 'function') callback();
            }
        };
        readDir(path, socketCallback);
    }

    //Add Images to Selectbox for SelectedDir
    function imagesSelectedDirFillSelectbox() {
        var imagesDirsSorted = [];
        imagesDirs.forEach(function (element) {
            imagesDirsSorted.push(element.dirname);
        });
        imagesDirsSorted.sort();
        $('#imagesSelectedDir').empty();
        imagesDirsSorted.forEach(function (element) {
            $('#imagesSelectedDir').append("<option value='" + element + "'>" + element + '</option>');
        });
        $('#imagesSelectedDir').select();
        imagesSelectedDirFilterList();
    }

    //Enhance Selectbox for SelectedDir
    $('#imagesSelectedDir').on('change', imagesSelectedDirFilterList);
    function imagesSelectedDirFilterList() {
        var val = $('#imagesSelectedDir').val();
        if (val == '/') {
            $('#imagesUploadRenameDir').addClass('disabled');
            $('#imagesUploadDeleteDir').addClass('disabled');
        } else {
            $('#imagesUploadRenameDir').removeClass('disabled');
            $('#imagesUploadDeleteDir').removeClass('disabled');
        }
        if (val && val.indexOf('/userwidgets') == 0) {
            $('#imagesUploadFile').prop(
                'accept',
                'image/png, image/jpeg, image/jpg, image/gif, image/svg, image/svg+xml, text/html, text/css, text/javascript',
            );
            $('.imagesUploadCreateFile').removeClass('hide');
        } else if (val && val.indexOf('/userfonts') == 0) {
            $('#imagesUploadFile').prop(
                'accept',
                '.otf, application/x-font-opentype, .ttf, application/x-font-ttf, application/x-font-truetype .woff, application/font-woff, .woff2, application/font-woff2, .eot, application/vnd.ms-fontobject',
            );
            $('.imagesUploadCreateFile').addClass('hide');
        } else {
            $('#imagesUploadFile').prop(
                'accept',
                'image/png, image/jpeg, image/jpg, image/gif, image/svg, image/svg+xml',
            );
            $('.imagesUploadCreateFile').addClass('hide');
        }
        var $div = $('#tableImages');
        var $table = $div.find('.table-values');
        var $lines = $table.find('.table-lines');
        if (!val) {
            $lines.show();
        } else {
            $lines.find('input[data-name]').each(function () {
                var name = $(this).data('name');
                if (name === 'filename') {
                    $line = $(this).closest('tr');
                    if ($(this).val().indexOf(val) == 0 && $(this).val().lastIndexOf('/') <= val.length) {
                        $line.show();
                    } else {
                        $line.hide();
                    }
                }
            });
        }
    }

    //Enhance tableImages with functions
    function onTableImagesReady() {
        var $div = $('#tableImages');
        var $table = $div.find('.table-values');
        var $lines = $table.find('.table-lines');
        //Make Filename Readonly
        $lines.find('input[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'filename') {
                $(this).prop('readonly', true);
            }
        });
        //Button-Functions
        $lines.find('a[data-command]').each(function () {
            var command = $(this).data('command');
            //Replace photo-button with thumbnail
            if (command === 'photo') {
                var imageIndex = $(this).data('index');
                var filename = images[imageIndex].filename;
                if (
                    filename.endsWith('.shtml') ||
                    filename.endsWith('.ehtml') ||
                    filename.endsWith('.shtm') ||
                    filename.endsWith('.htm') ||
                    filename.endsWith('.html')
                ) {
                    $(this).replaceWith(
                        "<img src='" +
                            previewLink +
                            "/images/icons/file_html_edit.png' data-filetype='htmlmixed' data-filename='" +
                            filename +
                            "' data-filepath='./.." +
                            userfilesImagePath +
                            filename +
                            "' style='max-width:50px; max-height:50px; cursor:hand;' class='code'></img>",
                    );
                } else if (filename.endsWith('.css')) {
                    $(this).replaceWith(
                        "<img src='" +
                            previewLink +
                            "/images/icons/file_css_edit.png' data-filetype='css' data-filename='" +
                            filename +
                            "' data-filepath='./.." +
                            userfilesImagePath +
                            filename +
                            "' style='max-width:50px; max-height:50px; cursor:hand;' class='code'></img>",
                    );
                } else if (filename.endsWith('.mjs') || filename.endsWith('.js')) {
                    $(this).replaceWith(
                        "<img src='" +
                            previewLink +
                            "/images/icons/file_js_edit.png' data-filetype='javascript' data-filename='" +
                            filename +
                            "' data-filepath='./.." +
                            userfilesImagePath +
                            filename +
                            "' style='max-width:50px; max-height:50px; cursor:hand;' class='code'></img>",
                    );
                } else if (
                    filename.endsWith('.otf') ||
                    filename.endsWith('.ttf') ||
                    filename.endsWith('.woff') ||
                    filename.endsWith('.woff2') ||
                    filename.endsWith('.eot')
                ) {
                    $(this).replaceWith(
                        "<img src='" +
                            previewLink +
                            "/images/icons/file_font.png' data-filetype='font' data-filename='" +
                            filename +
                            "' data-filepath='./.." +
                            userfilesImagePath +
                            filename +
                            "' style='max-width:50px; max-height:50px; cursor:default;' class='font'></img>",
                    );
                } else {
                    $(this).replaceWith(
                        "<img src='" +
                            previewLink +
                            '/..' +
                            userfilesImagePath +
                            filename +
                            "' data-filetype='image' data-filename='" +
                            filename +
                            "' data-filepath='./.." +
                            userfilesImagePath +
                            filename +
                            "' style='max-width:50px; max-height:50px; cursor:zoom-in;' class='thumbnail'></img>",
                    );
                }
            }
            //Rename file
            if (command === 'edit') {
                $(this).on('click', function () {
                    var index = $(this).data('index');
                    var oldName = images[index].filename;
                    var newName = images[index].filename;
                    var isValid = false;
                    do {
                        newName = (prompt(_('Change filename from %s to:', oldName), newName) || '').replace(
                            /\\/g,
                            '/',
                        );
                        isValid =
                            newName == '' || (newName.substring(0, 1) != ' ' && /^[^<>:;,?"*|\\]+$/.test(newName));
                        if (!isValid) alert(_('Invalid Name'));
                    } while (!isValid);
                    if (newName != '' && newName != oldName) {
                        if (newName.indexOf('/') != 0) newName = '/' + newName;
                        (function () {
                            //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
                            var _oldName = userfilesImagePath + images[index].filename;
                            var _newName = userfilesImagePath + newName;
                            renameFile(_oldName, _newName, function () {
                                changeImageName(_oldName, _newName);
                                getImages(function () {
                                    values2table('tableImages', images, onChange, onTableImagesReady);
                                    var dummy = $('#imagesSelectedDir').val();
                                    imagesSelectedDirFillSelectbox();
                                    $('#imagesSelectedDir').val(dummy).trigger('change');
                                    $('#imagesSelectedDir').select();
                                });
                            });
                        })(); //<--End Closure
                    }
                });
            }
            //Delete file
            if (command === 'delete_forever') {
                $(this).addClass('red');
                $(this).find('i').html('delete_forever');
                $(this).on('click', function (e) {
                    var index = $(this).data('index');
                    if (
                        confirm(_("Delete file %s on server? Warning: This can't be undone!", images[index].filename))
                    ) {
                        deleteFile(userfilesImagePath + images[index].filename, function () {
                            getImages(function () {
                                values2table('tableImages', images, onChange, onTableImagesReady);
                                var dummy = $('#imagesSelectedDir').val();
                                imagesSelectedDirFillSelectbox();
                                $('#imagesSelectedDir').val(dummy).trigger('change');
                                $('#imagesSelectedDir').select();
                            });
                        });
                    }
                });
            }
        });
        //ImagePopup
        $('.thumbnail').on('click', function () {
            var that = this;
            initDialog(
                'dialogImagePopup',
                function () {},
                function () {
                    //init dialog function
                    var imageLink = $(that).attr('src');
                    //Check, if images is used
                    var imageName = $(that).data('filepath');
                    var imageUsedIn = [];
                    views.forEach(function (view) {
                        if (
                            typeof view.nativeBackgroundImage != udef &&
                            view.nativeBackgroundImage.replace(/\\/g, '/') == imageName
                        )
                            imageUsedIn.push(_('View') + ': ' + view.commonName + ' ' + _('as backgroundimage'));
                        view.devices.forEach(function (device) {
                            if (
                                (typeof device.nativeBackgroundImage != udef &&
                                    device.nativeBackgroundImage.replace(/\\/g, '/') == imageName) ||
                                (typeof device.nativeBackgroundImageActive != udef &&
                                    device.nativeBackgroundImageActive.replace(/\\/g, '/') == imageName)
                            )
                                imageUsedIn.push(
                                    _('View') +
                                        ': ' +
                                        view.commonName +
                                        ', ' +
                                        _('Device') +
                                        ': ' +
                                        device.commonName +
                                        ' ' +
                                        _('as backgroundimage'),
                                );
                            if (device.options)
                                device.options.forEach(function (option) {
                                    if (option.type == 'icon' && option.value.replace(/\\/g, '/') == imageName)
                                        imageUsedIn.push(
                                            _('View') +
                                                ': ' +
                                                view.commonName +
                                                ', ' +
                                                _('Device') +
                                                ': ' +
                                                device.commonName +
                                                ' ' +
                                                _('as icon'),
                                        );
                                });
                        });
                    });
                    $('#dialogImagePopupImageName').text(imageLink);
                    $('#dialogImagePopupImage').html(
                        "<img src='" + imageLink + "' style='max-width:80vw; max-height:80vh;'>",
                    );
                    if (imageUsedIn.length > 0) {
                        $('#dialogImagePopupImageDescription').html(
                            '<p>' +
                                _('In this instance this image is used in:') +
                                '</p><ul><li>' +
                                imageUsedIn.join('</li><li>') +
                                '</ul>',
                        );
                    } else {
                        $('#dialogImagePopupImageDescription').html(
                            '<p>' + _('In this instance this image is not used at the moment') + '</p>',
                        );
                    }
                },
            );
        });
        //CodeEditor
        $('.code').on('click', function () {
            var that = this;
            initDialog(
                'dialogCodeEditor',
                function () {},
                function () {
                    //init dialog function
                    var fileName = $(that).data('filename');
                    $('#dialogCodeEditorFileName').text(fileName);
                    $('#dialogCodeEditorFileType').text($(that).data('filetype'));
                    dialogCodeEditorCodeMirror.setOption('mode', $('#dialogCodeEditorFileType').text());
                    dialogCodeEditorCodeMirror.setValue('');
                    dialogCodeEditorCodeMirrorChanged = false;
                    $('#dialogCodeEditor .btn-set').addClass('disabled');
                    dialogCodeEditorCodeMirror.execCommand('goDocStart');
                    dialogCodeEditorCodeMirror.refresh();
                    setTimeout(function () {
                        dialogCodeEditorCodeMirror.refresh();
                    }, 250);
                    //$("#dialogCodeEditor").modal('open');
                    downloadFileAsString(fileName, userfilesImagePath, function (string) {
                        dialogCodeEditorCodeMirror.setOption('mode', $('#dialogCodeEditorFileType').text());
                        dialogCodeEditorCodeMirror.setValue(string);
                        dialogCodeEditorCodeMirrorChanged = false;
                        $('#dialogCodeEditor .btn-set').addClass('disabled');
                        dialogCodeEditorCodeMirror.execCommand('goDocStart');
                        dialogCodeEditorCodeMirror.refresh();
                        setTimeout(function () {
                            dialogCodeEditorCodeMirror.refresh();
                        }, 250);
                    });
                },
            );
        });
        imagesSelectedDirFilterList();
    }

    //Create Dir
    $('#imagesUploadCreateDir').on('click', function () {
        var newName = ($('#imagesSelectedDir').val() == '/' ? '' : $('#imagesSelectedDir').val()) + '/New Folder';
        var isValid = false;
        do {
            newName = (prompt(_('Create Directory'), newName) || '').replace(/\\/g, '/');
            isValid = newName == '' || (newName.substring(0, 1) != ' ' && /^[^<>:;,?"*|\\]+$/.test(newName));
            if (!isValid) alert(_('Invalid Name'));
        } while (!isValid);
        if (newName != '') {
            if (newName.indexOf('/') != 0) newName = '/' + newName;
            createDir(userfilesImagePath + newName, function (err) {
                getImages(function (err) {
                    values2table('tableImages', images, onChange, onTableImagesReady);
                    if (!err) var dummy = newName;
                    else var dummy = $('#imagesSelectedDir').val();
                    imagesSelectedDirFillSelectbox();
                    $('#imagesSelectedDir').val(dummy).trigger('change');
                    $('#imagesSelectedDir').select();
                });
            });
        }
    });

    //Rename Dir
    $('#imagesUploadRenameDir').on('click', function () {
        var oldName = $('#imagesSelectedDir').val();
        var newName = $('#imagesSelectedDir').val();
        var isValid = false;
        do {
            newName = (prompt(_('Change Directory Name from %s to:', oldName), newName) || '').replace(/\\/g, '/');
            isValid = newName == '' || (newName.substring(0, 1) != ' ' && /^[^<>:;,?"*|\\]+$/.test(newName));
            if (!isValid) alert(_('Invalid Name'));
        } while (!isValid);
        if (newName != '' && newName != oldName) {
            if (newName.indexOf('/') != 0) newName = '/' + newName;
            (function () {
                //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
                var _oldName = userfilesImagePath + oldName;
                var _newName = userfilesImagePath + newName;
                renameFile(_oldName, _newName, function () {
                    changeImageName(_oldName, _newName);
                    getImages(function () {
                        values2table('tableImages', images, onChange, onTableImagesReady);
                        var dummy = $('#imagesSelectedDir').val();
                        imagesSelectedDirFillSelectbox();
                        $('#imagesSelectedDir').val(dummy).trigger('change');
                        $('#imagesSelectedDir').select();
                    });
                });
            })(); //<--End Closure
        }
    });

    //Delete Dir
    $('#imagesUploadDeleteDir').on('click', function () {
        if (
            confirm(
                _(
                    "Delete directory %s and all its content on server? Warning: This can't be undone!",
                    $('#imagesSelectedDir').val(),
                ),
            )
        ) {
            deleteFile(userfilesImagePath + $('#imagesSelectedDir').val(), function () {
                getImages(function () {
                    values2table('tableImages', images, onChange, onTableImagesReady);
                    var dummy = $('#imagesSelectedDir').val();
                    dummy = dummy.substring(0, dummy.lastIndexOf('/'));
                    if (dummy == '') dummy = '/';
                    imagesSelectedDirFillSelectbox();
                    $('#imagesSelectedDir').val(dummy).trigger('change');
                    $('#imagesSelectedDir').select();
                });
            });
        }
    });

    //Refresh
    $('#imagesUploadRefresh').on('click', function () {
        getImages(function () {
            values2table('tableImages', images, onChange, onTableImagesReady);
            var dummy = $('#imagesSelectedDir').val();
            imagesSelectedDirFillSelectbox();
            $('#imagesSelectedDir').val(dummy).trigger('change');
            $('#imagesSelectedDir').select();
        });
    });

    //Download Dir As Zip
    $('#imagesUploadDownloadDirAsZip').on('click', function () {
        $('#imagesUploadDownloadDirAsZip').addClass('disabled');
        $('#imagesUploadDownloadDirAsZipIcon').text('hourglass_empty');
        $('#imagesUploadDownloadDirAsZipProgress').show();
        if (confirm(_('Depending on the size it may take a while to create the zip file.'))) {
            readDirAsZip(userfilesImagePath + $('#imagesSelectedDir').val(), function (err, data) {
                if (err) {
                    alert('Error: ' + err);
                } else if (data) {
                    var filename =
                        'userfiles' +
                        ($('#imagesSelectedDir').val() && $('#imagesSelectedDir').val().length > 1
                            ? $('#imagesSelectedDir').val().replace(/\//g, '_').replace(/\\/g, '_').replace(/ /g, '_')
                            : '') +
                        '.zip';
                    saveStringAsLocalFile(data, 'base64', 'application/zip', filename);
                } else {
                    alert('Error: no data received.');
                }
                $('#imagesUploadDownloadDirAsZipIcon').text('cloud_download');
                $('#imagesUploadDownloadDirAsZip').removeClass('disabled');
                $('#imagesUploadDownloadDirAsZipProgress').hide();
            });
        } else {
            $('#imagesUploadDownloadDirAsZipIcon').text('cloud_download');
            $('#imagesUploadDownloadDirAsZip').removeClass('disabled');
            $('#imagesUploadDownloadDirAsZipProgress').hide();
        }
    });

    //Upload Dir As Zip
    $('#imagesUploadUploadDirAsZip').on('click', function () {
        loadLocalFileAsArrayBuffer('.zip', function (result) {
            if (result) {
                if (
                    confirm(
                        _(
                            'Really import files? Exisiting files will be overwritten. Depending on the size it may take a while to unpack the zip file.',
                        ),
                    )
                ) {
                    $('#imagesUploadUploadDirAsZip').addClass('disabled');
                    $('#imagesUploadUploadDirAsZipIcon').text('hourglass_empty');
                    $('#imagesUploadUploadDirAsZipProgress')
                        .show()
                        .find('.indeterminate, .determinate')
                        .removeClass('determinate')
                        .addClass('indeterminate')
                        .css('width', '');
                    JSZip.loadAsync(result).then(
                        function (zip) {
                            var uploadCount = 0;
                            var uploadCountMax = 0;
                            zip.forEach(async function (relativePath, file) {
                                console.log('Processing ZIP-File entry ' + file.name);
                                if (!file.dir) {
                                    uploadCount++;
                                    if (uploadCountMax < uploadCount) uploadCountMax = uploadCount;
                                    console.log(
                                        'Uploading ' +
                                            file.name +
                                            '. ' +
                                            (uploadCountMax - uploadCount) +
                                            '/' +
                                            uploadCountMax,
                                    );
                                    $('#imagesUploadUploadDirAsZipProgress')
                                        .show()
                                        .find('.indeterminate, .determinate')
                                        .removeClass('indeterminate')
                                        .addClass('determinate')
                                        .css(
                                            'width',
                                            Math.floor(((uploadCountMax - uploadCount) / uploadCountMax) * 100) + '%',
                                        );
                                    file.async('blob').then(function (blob) {
                                        blob.name = relativePath.substr(relativePath.lastIndexOf('/') + 1);
                                        var _path =
                                            userfilesImagePath + $('#imagesSelectedDir').val() + '/' + relativePath;
                                        _path = _path.substr(0, _path.lastIndexOf('/'));
                                        uploadFile(blob, _path, function (name) {
                                            uploadCount--;
                                            console.log(
                                                name +
                                                    ' uploaded. ' +
                                                    (uploadCountMax - uploadCount) +
                                                    '/' +
                                                    uploadCountMax,
                                            );
                                            $('#imagesUploadUploadDirAsZipProgress')
                                                .show()
                                                .find('.indeterminate, .determinate')
                                                .removeClass('indeterminate')
                                                .addClass('determinate')
                                                .css(
                                                    'width',
                                                    Math.floor(
                                                        ((uploadCountMax - uploadCount) / uploadCountMax) * 100,
                                                    ) + '%',
                                                );
                                            if (uploadCount == 0) {
                                                alert(_('Files imported.'));
                                                $('#imagesUploadRefresh').trigger('click');
                                                $('#imagesUploadUploadDirAsZipIcon').text('file_upload');
                                                $('#imagesUploadUploadDirAsZip').removeClass('disabled');
                                                $('#imagesUploadUploadDirAsZipProgress').hide();
                                            }
                                        });
                                    });
                                } else {
                                    var _path =
                                        userfilesImagePath +
                                        $('#imagesSelectedDir').val() +
                                        '/' +
                                        relativePath.substr(0, relativePath.lastIndexOf('/'));
                                    var dirExistance = await checkDirExistance(_path);
                                    console.log(dirExistance);
                                    if (!dirExistance) {
                                        console.log('Creating directory ' + _path);
                                        await createDirAsync(_path);
                                    }
                                }
                            });
                        },
                        function (err) {
                            console.log('Error reading zip file: ' + err.message);
                            alert(_('Error: Invalid data.'));
                            $('#optionsBackupRestoreImportUserfilesIcon').text('file_upload');
                            $('#optionsBackupRestoreImportUserfiles').removeClass('disabled');
                            $('#optionsBackupRestoreImportUserfilesProgress').hide();
                        },
                    );
                }
            } else {
                alert(_('Error: Invalid data.'));
            }
        });
    });

    //CreateFile-Buttons
    $('.imagesUploadCreateFile').on('click', function () {
        var filetype = $(this).data('filetype');
        var filename = prompt('Enter filename');
        if (filename) {
            uploadStringAsFile(
                '',
                filename + '.' + filetype,
                userfilesImagePath + $('#imagesSelectedDir').val(),
                function (name) {
                    $('#imagesUploadRefresh').click();
                },
            );
        }
    });

    //Change ImageNames in views and devices and options
    function changeImageName(oldName, newName) {
        oldName = './..' + oldName.replace(/\\/g, '/');
        newName = './..' + newName.replace(/\\/g, '/');
        views.forEach(function (view) {
            if (
                typeof view.nativeBackgroundImage != udef &&
                view.nativeBackgroundImage.replace(/\\/g, '/').indexOf(oldName) == 0 &&
                view.nativeBackgroundImage.length >= oldName.length
            )
                view.nativeBackgroundImage =
                    newName + view.nativeBackgroundImage.replace(/\\/g, '/').substring(oldName.length);
            view.devices.forEach(function (device) {
                if (
                    typeof device.nativeBackgroundImage != udef &&
                    device.nativeBackgroundImage.replace(/\\/g, '/').indexOf(oldName) == 0 &&
                    device.nativeBackgroundImage.length >= oldName.length
                )
                    device.nativeBackgroundImage =
                        newName + device.nativeBackgroundImage.replace(/\\/g, '/').substring(oldName.length);
                if (
                    typeof device.nativeBackgroundImageActive != udef &&
                    device.nativeBackgroundImageActive.replace(/\\/g, '/').indexOf(oldName) == 0 &&
                    device.nativeBackgroundImageActive.length >= oldName.length
                )
                    device.nativeBackgroundImageActive =
                        newName + device.nativeBackgroundImageActive.replace(/\\/g, '/').substring(oldName.length);
                if (device.options)
                    device.options.forEach(function (option) {
                        if (
                            option.type == 'icon' &&
                            option.value.replace(/\\/g, '/').indexOf(oldName) == 0 &&
                            option.value.length >= oldName.length
                        )
                            option.value = newName + option.value.replace(/\\/g, '/').substring(oldName.length);
                    });
            });
        });
    }

    //++++++++++ LISTS ++++++++++
    //Load Lists
    function loadLists() {
        //Fill Table
        values2table('tableLists', lists, onChange, onTableListsReady);
    }

    //Enhance addDefaultLists with functions
    var defaultLists = [
        {
            name: _('Service') + '&shy;' + _('messages'),
            materialIcon: 'chat_bubble_outline',
            description: _(
                'Adds lists and a widget that counts service messages like unreachable devices or devices with empty battery, firmware-updates and so on',
            ),
            lists: [
                {
                    active: true,
                    name: 'UNREACH',
                    selectors: [
                        { modifier: 'add', type: 'commonRole', operator: 'eq', value: 'indicator.unreach' },
                        { modifier: 'remove', type: 'id', operator: 'c', value: 'STICKY_' },
                    ],
                    filterAliases: true,
                    counters: [
                        {
                            name: 'ACTUAL',
                            type: 'value',
                            operator: 'eqt',
                            value: '',
                            conditions: [
                                { modifier: '&&', type: 'value', operator: 'eqt', value: '' },
                                { modifier: '&&', type: 'lcs', operator: 'gt', value: '180' },
                            ],
                            unit: 'Geräte',
                        },
                    ],
                    triggerInterval: '',
                    calculations: [],
                    combinations: [],
                    createNamesList: false,
                    createParentNamesList: true,
                },
                {
                    active: true,
                    name: 'LOWBAT',
                    selectors: [
                        { modifier: 'add', type: 'id', operator: 'ew', value: '.LOWBAT' },
                        { modifier: 'add', type: 'commonRole', operator: 'ew', value: 'lowbat' },
                    ],
                    filterAliases: true,
                    counters: [
                        {
                            name: 'ACTUAL',
                            unit: 'Geräte',
                            conditions: [{ modifier: '&&', type: 'value', operator: 'eqt', value: '' }],
                        },
                    ],
                    triggerInterval: '',
                    calculations: [],
                    combinations: [],
                    createNamesList: false,
                    createParentNamesList: true,
                },
                {
                    active: true,
                    name: 'ERROR',
                    selectors: [
                        { modifier: 'add', type: 'id', operator: 'ew', value: '.ERROR' },
                        { modifier: 'add', type: 'commonRole', operator: 'eq', value: 'indicator.error' },
                    ],
                    filterAliases: true,
                    counters: [
                        {
                            name: 'ACTUAL',
                            unit: '',
                            conditions: [
                                { modifier: '&&', type: 'value', operator: 'eqt', value: '' },
                                { modifier: '&&', type: 'valuelistValue', operator: 'ne', value: 'SABOTAGE' },
                            ],
                        },
                    ],
                    triggerInterval: '',
                    calculations: [],
                    combinations: [],
                    createNamesList: false,
                    createParentNamesList: true,
                },
                {
                    active: true,
                    name: 'MAINTENANCE',
                    selectors: [
                        { modifier: 'add', type: 'id', operator: 'ew', value: '.MAINTAIN' },
                        { modifier: 'add', type: 'commonRole', operator: 'eq', value: 'indicator.maintenance' },
                    ],
                    filterAliases: true,
                    counters: [
                        {
                            name: 'ACTUAL',
                            unit: '',
                            conditions: [{ modifier: '&&', type: 'value', operator: 'eqt', value: '' }],
                        },
                    ],
                    triggerInterval: '',
                    calculations: [],
                    combinations: [],
                    createNamesList: false,
                    createParentNamesList: true,
                },
                {
                    active: true,
                    name: 'SABOTAGE',
                    selectors: [
                        { modifier: 'add', type: 'id', operator: 'ew', value: '.ERROR' },
                        { modifier: 'add', type: 'commonRole', operator: 'eq', value: 'indicator.error' },
                    ],
                    filterAliases: true,
                    counters: [
                        {
                            name: 'ACTUAL',
                            unit: '',
                            conditions: [{ modifier: '&&', type: 'valuelistValue', operator: 'eq', value: 'SABOTAGE' }],
                        },
                    ],
                    triggerInterval: '',
                    calculations: [],
                    combinations: [],
                    createNamesList: false,
                    createParentNamesList: true,
                },
                {
                    active: true,
                    name: 'CONFIG_PENDING',
                    selectors: [{ modifier: 'add', type: 'id', operator: 'ew', value: '.CONFIG_PENDING' }],
                    filterAliases: true,
                    counters: [
                        {
                            name: 'ACTUAL',
                            unit: '',
                            conditions: [{ modifier: '&&', type: 'value', operator: 'eqt', value: '' }],
                        },
                    ],
                    triggerInterval: '',
                    calculations: [],
                    combinations: [],
                    createNamesList: false,
                    createParentNamesList: true,
                },
                {
                    active: true,
                    name: 'FIRMWARE',
                    selectors: [
                        { modifier: 'add', type: 'id', operator: 'ew', value: '.firmware' },
                        { modifier: 'remove', type: 'commonType', operator: 'ne', value: 'boolean' },
                    ],
                    filterAliases: true,
                    counters: [
                        {
                            name: 'ACTUAL',
                            unit: '',
                            conditions: [{ modifier: '&&', type: 'value', operator: 'eqt', value: '' }],
                        },
                    ],
                    triggerInterval: '',
                    calculations: [],
                    combinations: [],
                    createNamesList: false,
                    createParentNamesList: true,
                },
                {
                    active: true,
                    name: 'Servicemessages',
                    selectors: [],
                    filterAliases: false,
                    counters: [],
                    triggerInterval: '',
                    calculations: [
                        {
                            name: 'ACTUAL',
                            unit: '',
                            calculationSteps: [
                                { operator: '+', id: adapter + '.' + instance + '.Lists.UNREACH.ACTUAL' },
                                { operator: '+', id: adapter + '.' + instance + '.Lists.LOWBAT.ACTUAL' },
                                { operator: '+', id: adapter + '.' + instance + '.Lists.ERROR.ACTUAL' },
                                { operator: '+', id: adapter + '.' + instance + '.Lists.MAINTENANCE.ACTUAL' },
                                { operator: '+', id: adapter + '.' + instance + '.Lists.SABOTAGE.ACTUAL' },
                                { operator: '+', id: adapter + '.' + instance + '.Lists.CONFIG_PENDING.ACTUAL' },
                                { operator: '+', id: adapter + '.' + instance + '.Lists.FIRMWARE.ACTUAL' },
                            ],
                        },
                    ],
                    combinations: [
                        {
                            name: 'ACTUAL_TEXT',
                            unit: '',
                            combinationSteps: [
                                {
                                    prefix: '',
                                    id: adapter + '.' + instance + '.Lists.UNREACH.ACTUAL',
                                    postfix: _(' inaccessible device: '),
                                    onlyIfOperator: 'eq',
                                    onlyIfValue: '1',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                    type: 'value',
                                },
                                {
                                    prefix: '',
                                    id: adapter + '.' + instance + '.Lists.UNREACH.ACTUAL',
                                    postfix: _(' inaccessible device: '),
                                    onlyIfOperator: 'gt',
                                    onlyIfValue: '1',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                    type: 'value',
                                },
                                {
                                    prefix: '\\r\\n',
                                    id: adapter + '.' + instance + '.Lists.UNREACH.ACTUAL_PARENTNAMES_LIST',
                                    postfix: '\\r\\n\\r\\n\\r\\n',
                                    onlyIfOperator: 'eqt',
                                    onlyIfValue: '',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                    type: 'value',
                                },
                                {
                                    prefix: '',
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.LOWBAT.ACTUAL',
                                    postfix: _(' device with empty battery: '),
                                    onlyIfOperator: 'eq',
                                    onlyIfValue: '1',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                },
                                {
                                    prefix: '',
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.LOWBAT.ACTUAL',
                                    postfix: _(' devices with empty battery: '),
                                    onlyIfOperator: 'gt',
                                    onlyIfValue: '1',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                },
                                {
                                    prefix: '\\r\\n',
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.LOWBAT.ACTUAL_PARENTNAMES_LIST',
                                    postfix: '\\r\\n\\r\\n\\r\\n',
                                    onlyIfOperator: 'eqt',
                                    onlyIfValue: '',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                },
                                {
                                    prefix: '',
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.ERROR.ACTUAL',
                                    postfix: _(' faulty device: '),
                                    onlyIfOperator: 'eq',
                                    onlyIfValue: '1',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                },
                                {
                                    prefix: '',
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.ERROR.ACTUAL',
                                    postfix: _(' faulty devices: '),
                                    onlyIfOperator: 'gt',
                                    onlyIfValue: '1',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                },
                                {
                                    prefix: '\\r\\n',
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.ERROR.ACTUAL_PARENTNAMES_LIST',
                                    postfix: '\\r\\n\\r\\n\\r\\n',
                                    onlyIfOperator: 'eqt',
                                    onlyIfValue: '',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                },
                                {
                                    prefix: '',
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.MAINTENANCE.ACTUAL',
                                    postfix: _(' time maintenance required: '),
                                    onlyIfOperator: 'eq',
                                    onlyIfValue: '1',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                },
                                {
                                    prefix: '',
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.MAINTENANCE.ACTUAL',
                                    postfix: _(' times maintenance required: '),
                                    onlyIfOperator: 'gt',
                                    onlyIfValue: '1',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                },
                                {
                                    prefix: '\\r\\n',
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.MAINTENANCE.ACTUAL_PARENTNAMES_LIST',
                                    postfix: '\\r\\n\\r\\n\\r\\n',
                                    onlyIfOperator: 'eqt',
                                    onlyIfValue: '',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                },
                                {
                                    prefix: '',
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.SABOTAGE.ACTUAL',
                                    postfix: _(' device with sabotage alarm: '),
                                    onlyIfOperator: 'eq',
                                    onlyIfValue: '1',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                },
                                {
                                    prefix: '',
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.SABOTAGE.ACTUAL',
                                    postfix: _(' devices with sabotage alarm: '),
                                    onlyIfOperator: 'gt',
                                    onlyIfValue: '1',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                },
                                {
                                    prefix: '\\r\\n',
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.SABOTAGE.ACTUAL_PARENTNAMES_LIST',
                                    postfix: '\\r\\n\\r\\n\\r\\n',
                                    onlyIfOperator: 'eqt',
                                    onlyIfValue: '',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                },
                                {
                                    prefix: '',
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.CONFIG_PENDING.ACTUAL',
                                    postfix: _(' time configuration data pending for transmission: '),
                                    onlyIfOperator: 'eq',
                                    onlyIfValue: '1',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                },
                                {
                                    prefix: '',
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.CONFIG_PENDING.ACTUAL',
                                    postfix: _(' times configuration data pending for transmission: '),
                                    onlyIfOperator: 'gt',
                                    onlyIfValue: '1',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                },
                                {
                                    prefix: '\\r\\n',
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.CONFIG_PENDING.ACTUAL_PARENTNAMES_LIST',
                                    postfix: '\\r\\n\\r\\n\\r\\n',
                                    onlyIfOperator: 'eqt',
                                    onlyIfValue: '',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                },
                                {
                                    prefix: '',
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.FIRMWARE.ACTUAL',
                                    postfix: _(' device with firmware-update: '),
                                    onlyIfOperator: 'eq',
                                    onlyIfValue: '1',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                },
                                {
                                    prefix: '',
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.FIRMWARE.ACTUAL',
                                    postfix: _(' devices with firmware-update: '),
                                    onlyIfOperator: 'gt',
                                    onlyIfValue: '1',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                },
                                {
                                    prefix: '\\r\\n',
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.FIRMWARE.ACTUAL_PARENTNAMES_LIST',
                                    postfix: '\\r\\n\\r\\n\\r\\n',
                                    onlyIfOperator: 'eqt',
                                    onlyIfValue: '',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                },
                            ],
                        },
                    ],
                    createNamesList: false,
                    createParentNamesList: false,
                    logs: [
                        {
                            name: 'LOG_JSON',
                            onChangeIDs: [{ id: adapter + '.' + instance + '.Lists.Servicemessages.ACTUAL_TEXT' }],
                            onChangeDebounce: '',
                            logSteps: [
                                { key: _('No.'), type: 'count', id: '' },
                                { key: _('Time'), type: 'octsDMYHMS', id: '' },
                                {
                                    key: _('Quantity'),
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.Servicemessages.ACTUAL',
                                },
                                {
                                    key: _('Messages'),
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.Servicemessages.ACTUAL_TEXT',
                                },
                            ],
                            onChangeAddAllStepIDs: true,
                            addTo: 'top',
                            onChangeAddAllLogStepIDs: true,
                            onChangeIds: [{ id: adapter + '.' + instance + '.Lists.Servicemessages.ACTUAL_TEXT' }],
                            onChangeAddAllLogStepIds: false,
                        },
                    ],
                },
            ],
            devices: [
                {
                    commonName:
                        _('Service') +
                        '&shy;' +
                        _('messages') +
                        '|{' +
                        adapter +
                        '.' +
                        instance +
                        '.Lists.Servicemessages.ACTUAL} ' +
                        _('Service') +
                        '&shy;' +
                        _('messages'),
                    nativeHeading: '',
                    nativeLinkedView: '',
                    nativeBackgroundImage: '',
                    commonRole: 'iQontrolValue',
                    states: [
                        {
                            state: 'STATE',
                            commonRole: 'linkedState',
                            value: adapter + '.' + instance + '.Lists.Servicemessages.ACTUAL_TEXT',
                        },
                        { state: 'LEVEL', commonRole: 'linkedState', value: '' },
                        { state: 'INFO_A', commonRole: 'array', value: '[]' },
                        { state: 'INFO_B', commonRole: 'array', value: '[]' },
                        {
                            state: 'BATTERY',
                            commonRole: 'linkedState',
                            value: adapter + '.' + instance + '.Lists.LOWBAT.ACTUAL',
                        },
                        {
                            state: 'UNREACH',
                            commonRole: 'linkedState',
                            value: adapter + '.' + instance + '.Lists.UNREACH.ACTUAL',
                        },
                        {
                            state: 'ERROR',
                            commonRole: 'linkedState',
                            value: adapter + '.' + instance + '.Lists.ERROR.ACTUAL',
                        },
                        { state: 'BACKGROUND_VIEW', commonRole: 'const', value: '' },
                        { state: 'BACKGROUND_URL', commonRole: 'const', value: '' },
                        { state: 'BACKGROUND_HTML', commonRole: 'const', value: '' },
                        { state: 'ENLARGE_TILE', commonRole: 'linkedState', value: '' },
                        {
                            state: 'BADGE',
                            commonRole: 'linkedState',
                            value: adapter + '.' + instance + '.Lists.Servicemessages.ACTUAL',
                        },
                        { state: 'BADGE_COLOR', commonRole: 'const', value: '' },
                        { state: 'OVERLAY_INACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'OVERLAY_ACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'GLOW_INACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'GLOW_ACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'GLOW_HIDE', commonRole: 'linkedState', value: '' },
                        { state: 'URL', commonRole: 'const', value: '' },
                        { state: 'HTML', commonRole: 'const', value: '' },
                        { state: 'ADDITIONAL_CONTROLS', commonRole: 'array', value: '[]' },
                        { state: 'ADDITIONAL_INFO', commonRole: 'array', value: '[]' },
                    ],
                    options: [
                        { option: 'icon_on', type: 'icon', value: './images/icons/fluent/fluent_info_bubble_on.png' },
                        { option: 'icon_off', type: 'icon', value: './images/icons/fluent/fluent_info_bubble_off.png' },
                        { option: 'readonly', type: 'checkbox', value: 'true' },
                        { option: 'stateCaption', type: 'text', value: '' },
                        { option: 'levelCaption', type: 'text', value: '' },
                        { option: 'renderLinkedViewInParentInstance', type: 'checkbox', value: 'false' },
                        { option: 'renderLinkedViewInParentInstanceClosesPanel', type: 'checkbox', value: 'false' },
                        { option: 'clickOnIconAction', type: 'select', value: 'openDialog' },
                        { option: 'clickOnTileAction', type: 'select', value: 'openDialog' },
                        { option: 'noZoomOnHover', type: 'checkbox', value: 'false' },
                        { option: 'iconNoZoomOnHover', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceName', type: 'checkbox', value: 'false' },
                        { option: 'tileActiveStateId', type: 'text', value: '' },
                        { option: 'tileActiveCondition', type: 'select', value: '' },
                        { option: 'tileActiveConditionValue', type: 'text', value: '' },
                        { option: 'sizeInactive', type: 'select', value: '' },
                        { option: 'stateHeightAdaptsContentInactive', type: 'checkbox', value: 'false' },
                        { option: 'stateFillsDeviceInactive', type: 'checkbox', value: 'false' },
                        { option: 'stateBigFontInactive', type: 'checkbox', value: 'false' },
                        { option: 'bigIconInactive', type: 'checkbox', value: 'false' },
                        { option: 'iconNoPointerEventsInactive', type: 'checkbox', value: 'false' },
                        { option: 'transparentIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'noOverlayInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideBackgroundURLInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceNameIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideStateIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideIndicatorIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoAIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoBIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'sizeActive', type: 'select', value: '' },
                        { option: 'stateHeightAdaptsContentActive', type: 'checkbox', value: 'false' },
                        { option: 'stateFillsDeviceActive', type: 'checkbox', value: 'false' },
                        { option: 'stateBigFontActive', type: 'checkbox', value: 'false' },
                        { option: 'bigIconActive', type: 'checkbox', value: 'false' },
                        { option: 'iconNoPointerEventsActive', type: 'checkbox', value: 'false' },
                        { option: 'transparentIfActive', type: 'checkbox', value: 'false' },
                        { option: 'noOverlayActive', type: 'checkbox', value: 'false' },
                        { option: 'hideBackgroundURLActive', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceNameIfActive', type: 'checkbox', value: 'false' },
                        { option: 'hideStateIfActive', type: 'checkbox', value: 'false' },
                        { option: 'hideIndicatorIfActive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoAIfActive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoBIfActive', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceIfActive', type: 'checkbox', value: 'false' },
                        { option: 'sizeEnlarged', type: 'select', value: 'fullWidthIfEnlarged fullHeightIfEnlarged' },
                        { option: 'stateHeightAdaptsContentEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'stateFillsDeviceEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'stateBigFontEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'bigIconEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'iconNoPointerEventsEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'transparentIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'noOverlayEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'tileEnlargeStartEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'tileEnlargeShowButtonInactive', type: 'checkbox', value: 'true' },
                        { option: 'tileEnlargeShowButtonActive', type: 'checkbox', value: 'true' },
                        { option: 'tileEnlargeShowInPressureMenuInactive', type: 'checkbox', value: 'true' },
                        { option: 'tileEnlargeShowInPressureMenuActive', type: 'checkbox', value: 'true' },
                        { option: 'visibilityBackgroundURLEnlarged', type: 'select', value: '' },
                        { option: 'hideDeviceNameIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'hideStateIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'hideIndicatorIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoAIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoBIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'hideIconEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'addTimestampToState', type: 'select', value: '' },
                        { option: 'showTimestamp', type: 'select', value: '' },
                        { option: 'infoARoundDigits', type: 'number', value: '1' },
                        { option: 'infoBRoundDigits', type: 'number', value: '1' },
                        { option: 'infoAShowName', type: 'checkbox', value: 'false' },
                        { option: 'infoBShowName', type: 'checkbox', value: 'false' },
                        { option: 'batteryIcon_on', type: 'icon', value: '' },
                        { option: 'batteryActiveCondition', type: 'select', value: '' },
                        { option: 'batteryActiveConditionValue', type: 'text', value: '' },
                        { option: 'unreachIcon_on', type: 'icon', value: '' },
                        { option: 'invertUnreach', type: 'checkbox', value: 'false' },
                        { option: 'hideUnreachIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'errorIcon_on', type: 'icon', value: '' },
                        { option: 'invertError', type: 'checkbox', value: 'false' },
                        { option: 'adjustHeightToBackgroundView', type: 'checkbox', value: 'false' },
                        { option: 'backgroundURLDynamicIframeZoom', type: 'number', value: '' },
                        { option: 'backgroundURLPadding', type: 'number', value: '' },
                        { option: 'backgroundURLAllowPostMessage', type: 'checkbox', value: 'false' },
                        { option: 'backgroundURLNoPointerEvents', type: 'checkbox', value: 'false' },
                        { option: 'overlayAboveBackgroundURL', type: 'checkbox', value: 'false' },
                        { option: 'badgeWithoutUnit', type: 'checkbox', value: 'true' },
                        { option: 'invertGlowHide', type: 'checkbox', value: 'false' },
                        { option: 'popupWidth', type: 'number', value: '' },
                        { option: 'popupHeight', type: 'number', value: '' },
                        { option: 'popupFixed', type: 'checkbox', value: 'false' },
                        { option: 'openURLExternal', type: 'checkbox', value: 'false' },
                        { option: 'openURLExternalCaption', type: 'text', value: '' },
                        { option: 'popupAllowPostMessage', type: 'checkbox', value: 'false' },
                        { option: 'additionalControlsSectionType', type: 'select', value: 'collapsible' },
                        { option: 'additionalControlsCaption', type: 'text', value: 'Additional Controls' },
                        { option: 'additionalControlsHeadingType', type: 'select', value: 'none' },
                        { option: 'additionalControlsHideNameForButtons', type: 'checkbox', value: 'false' },
                        { option: 'additionalInfoSectionType', type: 'select', value: 'collapsible' },
                        { option: 'additionalInfoCaption', type: 'text', value: 'Additional Infos' },
                        { option: 'additionalInfoListType', type: 'select', value: '' },
                        { option: 'additionalInfoListColumnCount', type: 'select', value: 'auto' },
                        { option: 'additionalInfoListColumnWidth', type: 'number', value: '' },
                        { option: 'showStateAndLevelSeparatelyInTile', type: 'select', value: '' },
                    ],
                    nativeBackgroundImageActive: '',
                    nativeHeadingOptions: '',
                },
                {
                    commonName: 'Service-Log',
                    nativeHeading: '',
                    nativeLinkedView: '',
                    nativeBackgroundImage: '',
                    nativeBackgroundImageActive: '',
                    commonRole: 'iQontrolButton',
                    states: [
                        {
                            state: 'STATE',
                            commonRole: 'linkedState',
                            value: adapter + '.' + instance + '.Lists.Servicemessages.LOG_JSON_CLEAR',
                        },
                        { state: 'SET_VALUE', commonRole: 'const', value: 'true' },
                        { state: 'OFF_SET_VALUE', commonRole: 'const', value: '' },
                        { state: 'INFO_A', commonRole: 'array', value: '[]' },
                        { state: 'INFO_B', commonRole: 'array', value: '[]' },
                        { state: 'BATTERY', commonRole: 'linkedState', value: '' },
                        { state: 'UNREACH', commonRole: 'linkedState', value: '' },
                        {
                            state: 'ERROR',
                            commonRole: 'linkedState',
                            value: adapter + '.' + instance + '.Lists.Servicemessages.LOG_JSON_COUNT',
                        },
                        { state: 'BACKGROUND_VIEW', commonRole: 'const', value: '' },
                        {
                            state: 'BACKGROUND_URL',
                            commonRole: 'const',
                            value:
                                './images/widgets/json-table/json-table.html?tableMode=columntoggle&colsSort=timestamp%3Bcount%3Bmessages&colsFilter=&translations=&useThisDatapoint=' +
                                encodeURI(adapter) +
                                '.' +
                                encodeURI(instance) +
                                '.Lists.Servicemessages.LOG_JSON&breakpoints=20%3B30%3B40%3B50%3B60%3B70%3B80&colsAlwaysVisible=&colsPreferablyVisible=' +
                                encodeURI(_('Messages')) +
                                '&colsPreferablyVisibleAreVisibleAtStart=true&headHideColumntoggleButton=false&dataTranspose=false&dataTransposeKeycolCaption=Key&dataTransposeValcolsPrefix=Value%20&dataConvertObjectToArrayKeycolCaption=Nr.&columnSortEnabled=true&columnSortEnabledColsFilter=true&columnSortCol=Nr.&columnSortColDesc=true&columnSortColHideIndicator=false&rowsLimit=25&rowsLimitLoadMore=true&rowsLimitLoadMoreCaption=...&headHide=false&scrollbarHide=true&replaceCRwithBR=true&colorBackground=&colorBackgroundOdd=&colorText=&colorTextOdd=&colorTextShadow=&colorTextShadowOdd=&colorBackgroundDark=&colorBackgroundOddDark=&colorTextDark=&colorTextOddDark=&colorTextShadowDark=&colorTextShadowOddDark=&iconCols=&icon1Url=&icon1Caption=&icon1String=&icon2Url=&icon2Caption=&icon2String=&icon3Url=&icon3Caption=&icon3String=&icon4Url=&icon4Caption=&icon4String=&icon5Url=&icon5Caption=&icon5String=&icon6Url=&icon6Caption=&icon6String=&icon7Url=&icon7Caption=&icon7String=&icon8Url=&icon8Caption=&icon8String=&icon9Url=&icon9Caption=&icon9String=&icon10Url=&icon10Caption=&icon10String=&icon11Url=&icon11Caption=&icon11String=&icon12Url=&icon12Caption=&icon12String=&datapointDetectionEnabled=true&datapointIdCol=id&datapointIdColFilter=true&datapointExtendTableCols=parentName%3BplainText&datapointExtendTableColsDefaultTranslationLanguage=en&datapointToggleCols=plainText&=',
                        },
                        { state: 'BACKGROUND_HTML', commonRole: 'const', value: '' },
                        { state: 'ENLARGE_TILE', commonRole: 'linkedState', value: '' },
                        {
                            state: 'BADGE',
                            commonRole: 'linkedState',
                            value: adapter + '.' + instance + '.Lists.Servicemessages.LOG_JSON_COUNT',
                        },
                        { state: 'BADGE_COLOR', commonRole: 'const', value: '' },
                        { state: 'OVERLAY_INACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'OVERLAY_ACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'GLOW_INACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'GLOW_ACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'GLOW_HIDE', commonRole: 'linkedState', value: '' },
                        { state: 'URL', commonRole: 'const', value: '' },
                        { state: 'HTML', commonRole: 'linkedState', value: '' },
                        { state: 'ADDITIONAL_CONTROLS', commonRole: 'array', value: '[]' },
                        { state: 'ADDITIONAL_INFO', commonRole: 'array', value: '[]' },
                    ],
                    options: [
                        { option: 'icon_on', type: 'icon', value: '' },
                        { option: 'icon_off', type: 'icon', value: '' },
                        { option: 'readonly', type: 'checkbox', value: 'false' },
                        { option: 'stateCaption', type: 'text', value: '' },
                        { option: 'renderLinkedViewInParentInstance', type: 'checkbox', value: 'false' },
                        { option: 'renderLinkedViewInParentInstanceClosesPanel', type: 'checkbox', value: 'false' },
                        { option: 'clickOnIconAction', type: 'select', value: 'toggle' },
                        { option: 'clickOnTileAction', type: 'select', value: 'enlarge' },
                        { option: 'noZoomOnHover', type: 'checkbox', value: 'true' },
                        { option: 'iconNoZoomOnHover', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceName', type: 'checkbox', value: 'false' },
                        {
                            option: 'tileActiveStateId',
                            type: 'text',
                            value: adapter + '.' + instance + '.Lists.Servicemessages.LOG_JSON_COUNT',
                        },
                        { option: 'tileActiveCondition', type: 'select', value: 'gt' },
                        { option: 'tileActiveConditionValue', type: 'text', value: '0' },
                        { option: 'sizeInactive', type: 'select', value: '' },
                        { option: 'stateHeightAdaptsContentInactive', type: 'checkbox', value: 'false' },
                        { option: 'stateFillsDeviceInactive', type: 'checkbox', value: 'false' },
                        { option: 'stateBigFontInactive', type: 'checkbox', value: 'false' },
                        { option: 'bigIconInactive', type: 'checkbox', value: 'false' },
                        { option: 'iconNoPointerEventsInactive', type: 'checkbox', value: 'false' },
                        { option: 'transparentIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'noOverlayInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideBackgroundURLInactive', type: 'checkbox', value: 'true' },
                        { option: 'hideDeviceNameIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideStateIfInactive', type: 'checkbox', value: 'true' },
                        { option: 'hideIndicatorIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoAIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoBIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'sizeActive', type: 'select', value: '' },
                        { option: 'stateHeightAdaptsContentActive', type: 'checkbox', value: 'false' },
                        { option: 'stateFillsDeviceActive', type: 'checkbox', value: 'false' },
                        { option: 'stateBigFontActive', type: 'checkbox', value: 'false' },
                        { option: 'bigIconActive', type: 'checkbox', value: 'false' },
                        { option: 'iconNoPointerEventsActive', type: 'checkbox', value: 'false' },
                        { option: 'transparentIfActive', type: 'checkbox', value: 'false' },
                        { option: 'noOverlayActive', type: 'checkbox', value: 'false' },
                        { option: 'hideBackgroundURLActive', type: 'checkbox', value: 'true' },
                        { option: 'hideDeviceNameIfActive', type: 'checkbox', value: 'false' },
                        { option: 'hideStateIfActive', type: 'checkbox', value: 'true' },
                        { option: 'hideIndicatorIfActive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoAIfActive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoBIfActive', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceIfActive', type: 'checkbox', value: 'false' },
                        { option: 'sizeEnlarged', type: 'select', value: 'fullWidthIfEnlarged fullHeightIfEnlarged' },
                        { option: 'stateHeightAdaptsContentEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'stateFillsDeviceEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'stateBigFontEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'bigIconEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'iconNoPointerEventsEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'transparentIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'noOverlayEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'tileEnlargeStartEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'tileEnlargeShowButtonInactive', type: 'checkbox', value: 'true' },
                        { option: 'tileEnlargeShowButtonActive', type: 'checkbox', value: 'true' },
                        { option: 'tileEnlargeShowInPressureMenuInactive', type: 'checkbox', value: 'true' },
                        { option: 'tileEnlargeShowInPressureMenuActive', type: 'checkbox', value: 'true' },
                        { option: 'visibilityBackgroundURLEnlarged', type: 'select', value: 'visibleIfEnlarged' },
                        { option: 'hideDeviceNameIfEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'hideStateIfEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'hideIndicatorIfEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'hideInfoAIfEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'hideInfoBIfEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'hideIconEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'addTimestampToState', type: 'select', value: '' },
                        { option: 'showTimestamp', type: 'select', value: '' },
                        { option: 'infoARoundDigits', type: 'number', value: '1' },
                        { option: 'infoBRoundDigits', type: 'number', value: '1' },
                        { option: 'infoAShowName', type: 'checkbox', value: 'false' },
                        { option: 'infoBShowName', type: 'checkbox', value: 'false' },
                        { option: 'batteryIcon_on', type: 'icon', value: '' },
                        { option: 'batteryActiveCondition', type: 'select', value: '' },
                        { option: 'batteryActiveConditionValue', type: 'text', value: '' },
                        { option: 'unreachIcon_on', type: 'icon', value: '' },
                        { option: 'invertUnreach', type: 'checkbox', value: 'false' },
                        { option: 'hideUnreachIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'errorIcon_on', type: 'icon', value: '' },
                        { option: 'invertError', type: 'checkbox', value: 'false' },
                        { option: 'adjustHeightToBackgroundView', type: 'checkbox', value: 'false' },
                        { option: 'backgroundURLDynamicIframeZoom', type: 'number', value: '' },
                        { option: 'backgroundURLPadding', type: 'number', value: '' },
                        { option: 'backgroundURLAllowPostMessage', type: 'checkbox', value: 'true' },
                        { option: 'backgroundURLNoPointerEvents', type: 'checkbox', value: 'false' },
                        { option: 'overlayAboveBackgroundURL', type: 'checkbox', value: 'false' },
                        { option: 'badgeWithoutUnit', type: 'checkbox', value: 'true' },
                        { option: 'invertGlowHide', type: 'checkbox', value: 'false' },
                        { option: 'popupWidth', type: 'number', value: '' },
                        { option: 'popupHeight', type: 'number', value: '' },
                        { option: 'popupFixed', type: 'checkbox', value: 'false' },
                        { option: 'openURLExternal', type: 'checkbox', value: 'false' },
                        { option: 'openURLExternalCaption', type: 'text', value: '' },
                        { option: 'popupAllowPostMessage', type: 'checkbox', value: 'true' },
                        { option: 'additionalControlsSectionType', type: 'select', value: 'collapsible' },
                        { option: 'additionalControlsCaption', type: 'text', value: 'Additional Controls' },
                        { option: 'additionalControlsHeadingType', type: 'select', value: 'none' },
                        { option: 'additionalControlsHideNameForButtons', type: 'checkbox', value: 'false' },
                        { option: 'additionalInfoSectionType', type: 'select', value: 'collapsible' },
                        { option: 'additionalInfoCaption', type: 'text', value: 'Additional Infos' },
                        { option: 'additionalInfoListType', type: 'select', value: '' },
                        { option: 'additionalInfoListColumnCount', type: 'select', value: 'auto' },
                        { option: 'additionalInfoListColumnWidth', type: 'number', value: '' },
                        { option: 'showState', type: 'checkbox', value: 'false' },
                        { option: 'buttonCaption', type: 'text', value: 'Log leeren' },
                        { option: 'returnToOffSetValueAfter', type: 'number', value: '' },
                        { option: 'closeDialogAfterExecution', type: 'checkbox', value: 'false' },
                    ],
                    nativeHeadingOptions: '',
                },
            ],
        },
        {
            name: 'Adapter-Monitor',
            materialIcon: 'apps',
            description: _('Adds lists and a widget that monitors the ioBroker-Adapters and lists Adapter-Errors'),
            lists: [
                {
                    active: true,
                    name: 'ADAPTER',
                    selectors: [{ modifier: 'add', type: 'type', operator: 'eq', value: 'instance' }],
                    filterAliases: false,
                    sorting: 'parentNames asc',
                    separator: ', ',
                    createNamesList: true,
                    createParentNamesList: false,
                    createValuesList: false,
                    counters: [],
                    triggerInterval: '',
                    calculations: [],
                    combinations: [],
                },
                {
                    active: true,
                    name: 'Adapter-Monitor',
                    selectors: [
                        { modifier: 'add', type: 'type', operator: 'eq', value: 'instance' },
                        { modifier: 'remove', type: 'commonMode', operator: 'ne', value: 'daemon' },
                        { modifier: 'remove', type: 'commonEnabled', operator: 'ne', value: 'true' },
                    ],
                    filterAliases: false,
                    sorting: 'names asc',
                    separator: ', ',
                    createNamesList: true,
                    createParentNamesList: false,
                    createValuesList: false,
                    counters: [
                        {
                            name: 'Green',
                            unit: '',
                            conditions: [
                                { modifier: '&&', type: 'alive', operator: 'eqt', value: '' },
                                { modifier: '&&', type: 'connection', operator: 'eqt', value: '' },
                                { modifier: '||', type: 'alive', operator: 'eqt', value: '' },
                                { modifier: '&&', type: 'connection', operator: 'eq', value: 'null' },
                            ],
                        },
                        {
                            name: 'Yellow',
                            unit: '',
                            conditions: [
                                { modifier: '&&', type: 'alive', operator: 'eqt', value: '' },
                                { modifier: '&&', type: 'connection', operator: 'eqf', value: '' },
                                { modifier: '&&', type: 'connection', operator: 'ne', value: 'null' },
                            ],
                        },
                        {
                            name: 'Red',
                            unit: '',
                            conditions: [{ modifier: '&&', type: 'alive', operator: 'eqf', value: '' }],
                        },
                    ],
                    triggerInterval: '',
                    calculations: [
                        {
                            name: 'Grey',
                            unit: '',
                            calculationSteps: [
                                { operator: '+', id: adapter + '.' + instance + '.Lists.ADAPTER.TOTAL' },
                                { operator: '-', id: adapter + '.' + instance + '.Lists.Adapter-Monitor.TOTAL' },
                            ],
                        },
                        {
                            name: 'Grey_LIST',
                            unit: '',
                            calculationSteps: [
                                { operator: '+', id: adapter + '.' + instance + '.Lists.ADAPTER.TOTAL_LIST' },
                                { operator: '-', id: adapter + '.' + instance + '.Lists.Adapter-Monitor.TOTAL_LIST' },
                            ],
                        },
                        {
                            name: 'Grey_LIST_JSON',
                            unit: '',
                            calculationSteps: [
                                { operator: '+', id: adapter + '.' + instance + '.Lists.ADAPTER.TOTAL_LIST_JSON' },
                                {
                                    operator: '-',
                                    id: adapter + '.' + instance + '.Lists.Adapter-Monitor.TOTAL_LIST_JSON',
                                },
                            ],
                        },
                        {
                            name: 'Grey_NAMES_LIST',
                            unit: '',
                            calculationSteps: [
                                { operator: '+', id: adapter + '.' + instance + '.Lists.ADAPTER.TOTAL_NAMES_LIST' },
                                {
                                    operator: '-',
                                    id: adapter + '.' + instance + '.Lists.Adapter-Monitor.TOTAL_NAMES_LIST',
                                },
                            ],
                        },
                        {
                            name: 'Red+Yellow',
                            unit: '',
                            calculationSteps: [
                                { operator: '+', id: adapter + '.' + instance + '.Lists.Adapter-Monitor.Red' },
                                { operator: '+', id: adapter + '.' + instance + '.Lists.Adapter-Monitor.Yellow' },
                            ],
                        },
                        {
                            name: 'Red+Yellow_LIST',
                            unit: '',
                            calculationSteps: [
                                { operator: '+', id: adapter + '.' + instance + '.Lists.Adapter-Monitor.Red_LIST' },
                                { operator: '+', id: adapter + '.' + instance + '.Lists.Adapter-Monitor.Yellow_LIST' },
                            ],
                            resortList: false,
                        },
                        {
                            name: 'Red+Yellow_LIST_JSON',
                            unit: '',
                            calculationSteps: [
                                {
                                    operator: '+',
                                    id: adapter + '.' + instance + '.Lists.Adapter-Monitor.Red_LIST_JSON',
                                },
                                {
                                    operator: '+',
                                    id: adapter + '.' + instance + '.Lists.Adapter-Monitor.Yellow_LIST_JSON',
                                },
                            ],
                            resortList: false,
                        },
                        {
                            name: 'Red+Yellow_NAMES_LIST',
                            unit: '',
                            calculationSteps: [
                                {
                                    operator: '+',
                                    id: adapter + '.' + instance + '.Lists.Adapter-Monitor.Red_NAMES_LIST',
                                },
                                {
                                    operator: '+',
                                    id: adapter + '.' + instance + '.Lists.Adapter-Monitor.Yellow_NAMES_LIST',
                                },
                            ],
                            resortList: false,
                        },
                        {
                            name: 'Green+Grey',
                            unit: '',
                            calculationSteps: [
                                { operator: '+', id: adapter + '.' + instance + '.Lists.Adapter-Monitor.Green' },
                                { operator: '+', id: adapter + '.' + instance + '.Lists.Adapter-Monitor.Grey' },
                            ],
                            resortList: false,
                        },
                        {
                            name: 'Green+Grey_LIST',
                            unit: '',
                            calculationSteps: [
                                { operator: '+', id: adapter + '.' + instance + '.Lists.Adapter-Monitor.Green_LIST' },
                                { operator: '+', id: adapter + '.' + instance + '.Lists.Adapter-Monitor.Grey_LIST' },
                            ],
                            resortList: false,
                        },
                        {
                            name: 'Green+Grey_LIST_JSON',
                            unit: '',
                            calculationSteps: [
                                {
                                    operator: '+',
                                    id: adapter + '.' + instance + '.Lists.Adapter-Monitor.Green_LIST_JSON',
                                },
                                {
                                    operator: '+',
                                    id: adapter + '.' + instance + '.Lists.Adapter-Monitor.Grey_LIST_JSON',
                                },
                            ],
                            resortList: false,
                        },
                        {
                            name: 'Green+Grey_NAMES_LIST',
                            unit: '',
                            calculationSteps: [
                                {
                                    operator: '+',
                                    id: adapter + '.' + instance + '.Lists.Adapter-Monitor.Green_NAMES_LIST',
                                },
                                {
                                    operator: '+',
                                    id: adapter + '.' + instance + '.Lists.Adapter-Monitor.Grey_NAMES_LIST',
                                },
                            ],
                            resortList: false,
                        },
                    ],
                    combinations: [
                        {
                            name: 'HTML',
                            unit: '',
                            combinationSteps: [
                                {
                                    prefix: '<h3><u>' + _('Faulty') + ' (',
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.Adapter-Monitor.Red',
                                    postfix: ')</u>:</h3>',
                                    onlyIfOperator: 'gt',
                                    onlyIfValue: '0',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                },
                                {
                                    prefix: "<span style='color:red;'>&#9679;</span>&nbsp;",
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.Adapter-Monitor.Red_NAMES_LIST',
                                    postfix: '<br><br><br>',
                                    onlyIfOperator: 'ne',
                                    onlyIfValue: '',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                    separator: "<br><span style='color:red;'>&#9679;</span>&nbsp;",
                                },
                                {
                                    prefix: '<h3><u>' + _('Not Connected') + ' (',
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.Adapter-Monitor.Yellow',
                                    postfix: ')</u>:</h3>',
                                    onlyIfOperator: 'gt',
                                    onlyIfValue: '0',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                },
                                {
                                    prefix: "<span style='color:yellow;'>&#9679;</span>&nbsp;",
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.Adapter-Monitor.Yellow_NAMES_LIST',
                                    postfix: '<br><br><br>',
                                    onlyIfOperator: 'ne',
                                    onlyIfValue: '',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                    separator: "<br><span style='color:yellow;'>&#9679;</span>&nbsp;",
                                },
                                {
                                    prefix: '<h3><u>' + _('Normal') + ' (',
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.Adapter-Monitor.Green+Grey',
                                    postfix: ')</u>:</h3>',
                                    onlyIfOperator: 'gt',
                                    onlyIfValue: '0',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                },
                                {
                                    prefix: "<u>Active</u>:<br><span style='color:green;'>&#9679;</span>&nbsp;",
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.Adapter-Monitor.Green_NAMES_LIST',
                                    postfix: '<br><br>',
                                    onlyIfOperator: 'ne',
                                    onlyIfValue: '',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                    separator: "<br><span style='color:green;'>&#9679;</span>&nbsp;",
                                },
                                {
                                    prefix:
                                        '<u>' +
                                        _('Disabled or passive') +
                                        "</u>:<br><span style='color:grey;'>&#9679;</span>&nbsp;",
                                    type: 'value',
                                    id: adapter + '.' + instance + '.Lists.Adapter-Monitor.Grey_NAMES_LIST',
                                    separator: "<br><span style='color:grey;'>&#9679;</span>&nbsp;",
                                    postfix: '<br><br>',
                                    onlyIfOperator: 'ne',
                                    onlyIfValue: '',
                                    onlyIfJustPrefix: false,
                                    onlyIfElse: '',
                                },
                            ],
                        },
                    ],
                },
            ],
            devices: [
                {
                    commonName:
                        _('Adapter') +
                        '&shy;' +
                        _('errors') +
                        '|{' +
                        adapter +
                        '.' +
                        instance +
                        '.Lists.Adapter-Monitor.Red+Yellow} ' +
                        _('Adapter') +
                        '&shy;' +
                        _('errors'),
                    nativeHeading: '',
                    nativeLinkedView: '',
                    nativeBackgroundImage: '',
                    commonRole: 'iQontrolValue',
                    states: [
                        {
                            state: 'STATE',
                            commonRole: 'linkedState',
                            value: adapter + '.' + instance + '.Lists.Adapter-Monitor.Red+Yellow_NAMES_LIST',
                        },
                        { state: 'LEVEL', commonRole: 'linkedState', value: '' },
                        { state: 'INFO_A', commonRole: 'array', value: '[]' },
                        { state: 'INFO_B', commonRole: 'array', value: '[]' },
                        { state: 'BATTERY', commonRole: 'linkedState', value: '' },
                        {
                            state: 'UNREACH',
                            commonRole: 'linkedState',
                            value: adapter + '.' + instance + '.Lists.Adapter-Monitor.Yellow',
                        },
                        {
                            state: 'ERROR',
                            commonRole: 'linkedState',
                            value: adapter + '.' + instance + '.Lists.Adapter-Monitor.Red',
                        },
                        { state: 'BACKGROUND_VIEW', commonRole: 'const', value: '' },
                        { state: 'BACKGROUND_URL', commonRole: 'const', value: '' },
                        { state: 'BACKGROUND_HTML', commonRole: 'const', value: '' },
                        { state: 'ENLARGE_TILE', commonRole: 'linkedState', value: '' },
                        {
                            state: 'BADGE',
                            commonRole: 'linkedState',
                            value: adapter + '.' + instance + '.Lists.Adapter-Monitor.Red+Yellow',
                        },
                        { state: 'BADGE_COLOR', commonRole: 'const', value: '' },
                        { state: 'OVERLAY_INACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'OVERLAY_ACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'GLOW_INACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'GLOW_ACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'GLOW_HIDE', commonRole: 'linkedState', value: '' },
                        { state: 'URL', commonRole: 'const', value: '' },
                        {
                            state: 'HTML',
                            commonRole: 'linkedState',
                            value: adapter + '.' + instance + '.Lists.Adapter-Monitor.HTML',
                        },
                        { state: 'ADDITIONAL_CONTROLS', commonRole: 'array', value: '[]' },
                        { state: 'ADDITIONAL_INFO', commonRole: 'array', value: '[]' },
                    ],
                    options: [
                        { option: 'icon_on', type: 'icon', value: './images/icons/fluent/fluent_info_bubble_on.png' },
                        { option: 'icon_off', type: 'icon', value: './images/icons/fluent/fluent_info_bubble_off.png' },
                        { option: 'readonly', type: 'checkbox', value: 'true' },
                        { option: 'stateCaption', type: 'text', value: 'List' },
                        { option: 'levelCaption', type: 'text', value: '' },
                        { option: 'renderLinkedViewInParentInstance', type: 'checkbox', value: 'false' },
                        { option: 'renderLinkedViewInParentInstanceClosesPanel', type: 'checkbox', value: 'false' },
                        { option: 'clickOnIconAction', type: 'select', value: 'openDialog' },
                        { option: 'clickOnTileAction', type: 'select', value: 'openDialog' },
                        { option: 'noZoomOnHover', type: 'checkbox', value: 'false' },
                        { option: 'iconNoZoomOnHover', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceName', type: 'checkbox', value: 'false' },
                        { option: 'tileActiveStateId', type: 'text', value: '' },
                        { option: 'tileActiveCondition', type: 'select', value: '' },
                        { option: 'tileActiveConditionValue', type: 'text', value: '' },
                        { option: 'sizeInactive', type: 'select', value: '' },
                        { option: 'stateHeightAdaptsContentInactive', type: 'checkbox', value: 'false' },
                        { option: 'stateFillsDeviceInactive', type: 'checkbox', value: 'false' },
                        { option: 'stateBigFontInactive', type: 'checkbox', value: 'false' },
                        { option: 'bigIconInactive', type: 'checkbox', value: 'false' },
                        { option: 'iconNoPointerEventsInactive', type: 'checkbox', value: 'false' },
                        { option: 'transparentIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'noOverlayInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideBackgroundURLInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceNameIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideStateIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideIndicatorIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoAIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoBIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'sizeActive', type: 'select', value: '' },
                        { option: 'stateHeightAdaptsContentActive', type: 'checkbox', value: 'false' },
                        { option: 'stateFillsDeviceActive', type: 'checkbox', value: 'false' },
                        { option: 'stateBigFontActive', type: 'checkbox', value: 'false' },
                        { option: 'bigIconActive', type: 'checkbox', value: 'false' },
                        { option: 'iconNoPointerEventsActive', type: 'checkbox', value: 'false' },
                        { option: 'transparentIfActive', type: 'checkbox', value: 'false' },
                        { option: 'noOverlayActive', type: 'checkbox', value: 'false' },
                        { option: 'hideBackgroundURLActive', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceNameIfActive', type: 'checkbox', value: 'false' },
                        { option: 'hideStateIfActive', type: 'checkbox', value: 'false' },
                        { option: 'hideIndicatorIfActive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoAIfActive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoBIfActive', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceIfActive', type: 'checkbox', value: 'false' },
                        { option: 'sizeEnlarged', type: 'select', value: 'fullWidthIfEnlarged fullHeightIfEnlarged' },
                        { option: 'stateHeightAdaptsContentEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'stateFillsDeviceEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'stateBigFontEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'bigIconEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'iconNoPointerEventsEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'transparentIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'noOverlayEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'tileEnlargeStartEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'tileEnlargeShowButtonInactive', type: 'checkbox', value: 'true' },
                        { option: 'tileEnlargeShowButtonActive', type: 'checkbox', value: 'true' },
                        { option: 'tileEnlargeShowInPressureMenuInactive', type: 'checkbox', value: 'true' },
                        { option: 'tileEnlargeShowInPressureMenuActive', type: 'checkbox', value: 'true' },
                        { option: 'visibilityBackgroundURLEnlarged', type: 'select', value: '' },
                        { option: 'hideDeviceNameIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'hideStateIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'hideIndicatorIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoAIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoBIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'hideIconEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'addTimestampToState', type: 'select', value: '' },
                        { option: 'showTimestamp', type: 'select', value: '' },
                        { option: 'infoARoundDigits', type: 'number', value: '1' },
                        { option: 'infoBRoundDigits', type: 'number', value: '1' },
                        { option: 'infoAShowName', type: 'checkbox', value: 'false' },
                        { option: 'infoBShowName', type: 'checkbox', value: 'false' },
                        { option: 'batteryIcon_on', type: 'icon', value: '' },
                        { option: 'batteryActiveCondition', type: 'select', value: '' },
                        { option: 'batteryActiveConditionValue', type: 'text', value: '' },
                        { option: 'unreachIcon_on', type: 'icon', value: '' },
                        { option: 'invertUnreach', type: 'checkbox', value: 'false' },
                        { option: 'hideUnreachIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'errorIcon_on', type: 'icon', value: '' },
                        { option: 'invertError', type: 'checkbox', value: 'false' },
                        { option: 'adjustHeightToBackgroundView', type: 'checkbox', value: 'false' },
                        { option: 'backgroundURLDynamicIframeZoom', type: 'number', value: '' },
                        { option: 'backgroundURLPadding', type: 'number', value: '' },
                        { option: 'backgroundURLAllowPostMessage', type: 'checkbox', value: 'false' },
                        { option: 'backgroundURLNoPointerEvents', type: 'checkbox', value: 'false' },
                        { option: 'overlayAboveBackgroundURL', type: 'checkbox', value: 'false' },
                        { option: 'badgeWithoutUnit', type: 'checkbox', value: 'true' },
                        { option: 'invertGlowHide', type: 'checkbox', value: 'false' },
                        { option: 'popupWidth', type: 'number', value: '' },
                        { option: 'popupHeight', type: 'number', value: '400' },
                        { option: 'popupFixed', type: 'checkbox', value: 'false' },
                        { option: 'openURLExternal', type: 'checkbox', value: 'false' },
                        { option: 'openURLExternalCaption', type: 'text', value: '' },
                        { option: 'popupAllowPostMessage', type: 'checkbox', value: 'false' },
                        { option: 'additionalControlsSectionType', type: 'select', value: 'collapsible' },
                        { option: 'additionalControlsCaption', type: 'text', value: 'Additional Controls' },
                        { option: 'additionalControlsHeadingType', type: 'select', value: 'none' },
                        { option: 'additionalControlsHideNameForButtons', type: 'checkbox', value: 'false' },
                        { option: 'additionalInfoSectionType', type: 'select', value: 'collapsible' },
                        { option: 'additionalInfoCaption', type: 'text', value: 'Additional Infos' },
                        { option: 'additionalInfoListType', type: 'select', value: '' },
                        { option: 'additionalInfoListColumnCount', type: 'select', value: 'auto' },
                        { option: 'additionalInfoListColumnWidth', type: 'number', value: '' },
                        { option: 'showStateAndLevelSeparatelyInTile', type: 'select', value: '' },
                    ],
                    nativeBackgroundImageActive: '',
                    nativeHeadingOptions: '',
                },
            ],
        },
        {
            name: _('Windows'),
            materialIcon: 'aspect_ratio',
            description: _(
                'Adds lists with corresponding widgets to display (opened) windows. You may need to adjust the list a little bit, if too much states are found. Best way to do is to create a ioBroker-Enumeration with all your windows and add the enumeration (with childs) to the list instead of all datapoints. Have a look at the wiki on github, there are some examples how to do that.',
            ),
            lists: [
                {
                    active: true,
                    name: _('Windows'),
                    selectors: [
                        { modifier: 'add', type: 'commonRole', operator: 'eq', value: 'sensor.window' },
                        { modifier: 'remove', type: 'id', operator: 'ew', value: 'WINDOW_OPEN_REPORTING' },
                        { modifier: 'remove', type: 'id', operator: 'c', value: 'hm-rpc.,.INT,.2.STATE' },
                    ],
                    filterAliases: true,
                    sorting: 'parentNames asc',
                    separator: ', ',
                    createNamesList: false,
                    createParentNamesList: true,
                    createValuesList: false,
                    counters: [
                        {
                            name: 'OPEN',
                            unit: _('Windows'),
                            conditions: [{ modifier: '&&', type: 'value', operator: 'eqt', value: '' }],
                        },
                        {
                            name: 'LONG_OPEN',
                            unit: _('Windows'),
                            conditions: [
                                { modifier: '&&', type: 'value', operator: 'eqt', value: '' },
                                { modifier: '&&', type: 'lcs', operator: 'gt', value: '1800' },
                            ],
                        },
                    ],
                    triggerInterval: '',
                    calculations: [],
                    combinations: [],
                    logs: [],
                },
            ],
            devices: [
                {
                    commonName: _('Windows'),
                    commonRole: 'iQontrolWidget',
                    nativeBackgroundImage: '',
                    nativeBackgroundImageActive: '',
                    nativeHeading: '',
                    nativeLinkedView: '',
                    nativeNewLine: false,
                    options: [
                        { option: 'icon_on', type: 'icon', value: '' },
                        { option: 'icon_off', type: 'icon', value: '' },
                        { option: 'readonly', type: 'checkbox', value: 'false' },
                        { option: 'stateCaption', type: 'text', value: '' },
                        { option: 'renderLinkedViewInParentInstance', type: 'checkbox', value: 'false' },
                        { option: 'renderLinkedViewInParentInstanceClosesPanel', type: 'checkbox', value: 'false' },
                        { option: 'clickOnIconAction', type: 'select', value: 'toggle' },
                        { option: 'clickOnTileAction', type: 'select', value: 'openDialog' },
                        { option: 'noZoomOnHover', type: 'checkbox', value: 'true' },
                        { option: 'iconNoZoomOnHover', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceName', type: 'checkbox', value: 'true' },
                        { option: 'tileActiveStateId', type: 'text', value: '' },
                        { option: 'tileActiveCondition', type: 'select', value: '' },
                        { option: 'tileActiveConditionValue', type: 'text', value: '' },
                        { option: 'sizeInactive', type: 'select', value: 'xwideIfInactive highIfInactive' },
                        { option: 'stateHeightAdaptsContentInactive', type: 'checkbox', value: 'false' },
                        { option: 'stateFillsDeviceInactive', type: 'checkbox', value: 'false' },
                        { option: 'stateBigFontInactive', type: 'checkbox', value: 'false' },
                        { option: 'bigIconInactive', type: 'checkbox', value: 'false' },
                        { option: 'iconNoPointerEventsInactive', type: 'checkbox', value: 'true' },
                        { option: 'transparentIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'noOverlayInactive', type: 'checkbox', value: 'true' },
                        { option: 'hideBackgroundURLInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceNameIfInactive', type: 'checkbox', value: 'true' },
                        { option: 'hideStateIfInactive', type: 'checkbox', value: 'true' },
                        { option: 'hideIndicatorIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoAIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoBIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'sizeActive', type: 'select', value: 'xwideIfActive highIfActive' },
                        { option: 'stateHeightAdaptsContentActive', type: 'checkbox', value: 'false' },
                        { option: 'stateFillsDeviceActive', type: 'checkbox', value: 'false' },
                        { option: 'stateBigFontActive', type: 'checkbox', value: 'false' },
                        { option: 'bigIconActive', type: 'checkbox', value: 'false' },
                        { option: 'iconNoPointerEventsActive', type: 'checkbox', value: 'true' },
                        { option: 'transparentIfActive', type: 'checkbox', value: 'false' },
                        { option: 'noOverlayActive', type: 'checkbox', value: 'true' },
                        { option: 'hideBackgroundURLActive', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceNameIfActive', type: 'checkbox', value: 'true' },
                        { option: 'hideStateIfActive', type: 'checkbox', value: 'true' },
                        { option: 'hideIndicatorIfActive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoAIfActive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoBIfActive', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceIfActive', type: 'checkbox', value: 'false' },
                        { option: 'sizeEnlarged', type: 'select', value: 'fullWidthIfEnlarged fullHeightIfEnlarged' },
                        { option: 'stateHeightAdaptsContentEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'stateFillsDeviceEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'stateBigFontEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'bigIconEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'iconNoPointerEventsEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'transparentIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'noOverlayEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'tileEnlargeStartEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'tileEnlargeShowButtonInactive', type: 'checkbox', value: 'true' },
                        { option: 'tileEnlargeShowButtonActive', type: 'checkbox', value: 'true' },
                        { option: 'tileEnlargeShowInPressureMenuInactive', type: 'checkbox', value: 'true' },
                        { option: 'tileEnlargeShowInPressureMenuActive', type: 'checkbox', value: 'true' },
                        { option: 'visibilityBackgroundURLEnlarged', type: 'select', value: '' },
                        { option: 'hideDeviceNameIfEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'hideStateIfEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'hideIndicatorIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoAIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoBIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'hideIconEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'addTimestampToState', type: 'select', value: 'N' },
                        { option: 'showTimestamp', type: 'select', value: '' },
                        { option: 'infoARoundDigits', type: 'number', value: '1' },
                        { option: 'infoBRoundDigits', type: 'number', value: '1' },
                        { option: 'infoAShowName', type: 'checkbox', value: 'false' },
                        { option: 'infoBShowName', type: 'checkbox', value: 'false' },
                        { option: 'batteryIcon_on', type: 'icon', value: '' },
                        { option: 'batteryActiveCondition', type: 'select', value: '' },
                        { option: 'batteryActiveConditionValue', type: 'text', value: '' },
                        { option: 'unreachIcon_on', type: 'icon', value: '' },
                        { option: 'invertUnreach', type: 'checkbox', value: 'false' },
                        { option: 'hideUnreachIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'errorIcon_on', type: 'icon', value: '' },
                        { option: 'invertError', type: 'checkbox', value: 'false' },
                        { option: 'adjustHeightToBackgroundView', type: 'checkbox', value: 'false' },
                        { option: 'backgroundURLDynamicIframeZoom', type: 'number', value: '' },
                        { option: 'backgroundURLPadding', type: 'number', value: '' },
                        { option: 'backgroundURLAllowPostMessage', type: 'checkbox', value: 'true' },
                        { option: 'backgroundURLNoPointerEvents', type: 'checkbox', value: 'false' },
                        { option: 'overlayAboveBackgroundURL', type: 'checkbox', value: 'false' },
                        { option: 'badgeWithoutUnit', type: 'checkbox', value: 'true' },
                        { option: 'invertGlowHide', type: 'checkbox', value: 'false' },
                        { option: 'popupWidth', type: 'number', value: '' },
                        { option: 'popupHeight', type: 'number', value: '' },
                        { option: 'popupFixed', type: 'checkbox', value: 'false' },
                        { option: 'openURLExternal', type: 'checkbox', value: 'false' },
                        { option: 'openURLExternalCaption', type: 'text', value: '' },
                        { option: 'popupAllowPostMessage', type: 'checkbox', value: 'true' },
                        { option: 'additionalControlsSectionType', type: 'select', value: 'collapsible' },
                        { option: 'additionalControlsCaption', type: 'text', value: 'Additional Controls' },
                        { option: 'additionalControlsHeadingType', type: 'select', value: 'none' },
                        { option: 'additionalControlsHideNameForButtons', type: 'checkbox', value: 'false' },
                        { option: 'additionalInfoSectionType', type: 'select', value: 'collapsible' },
                        { option: 'additionalInfoCaption', type: 'text', value: 'Additional Infos' },
                        { option: 'additionalInfoListType', type: 'select', value: '' },
                        { option: 'additionalInfoListColumnCount', type: 'select', value: 'auto' },
                        { option: 'additionalInfoListColumnWidth', type: 'number', value: '' },
                        { option: 'noVirtualState', type: 'checkbox', value: 'false' },
                    ],
                    states: [
                        {
                            state: 'STATE',
                            commonRole: 'linkedState',
                            value: adapter + '.' + instance + '.Lists.' + _('Windows') + '.OPEN',
                        },
                        { state: 'INFO_A', commonRole: 'array', value: '[]' },
                        { state: 'INFO_B', commonRole: 'array', value: '[]' },
                        { state: 'BATTERY', commonRole: 'linkedState', value: '' },
                        { state: 'UNREACH', commonRole: 'linkedState', value: '' },
                        { state: 'ERROR', commonRole: 'linkedState', value: '' },
                        { state: 'BACKGROUND_VIEW', commonRole: 'const', value: '' },
                        {
                            state: 'BACKGROUND_URL',
                            commonRole: 'const',
                            value:
                                './images/widgets/json-table/device-counter.html?heading=%3Ccenter%3E' +
                                encodeURI(_('Window')) +
                                '%3C%2Fcenter%3E%7C%3Ccenter%3E' +
                                encodeURI(_('Window')) +
                                '%20%28%7B' +
                                encodeURI(adapter) +
                                '.' +
                                encodeURI(instance) +
                                '.Lists.' +
                                encodeURI(_('Windows')) +
                                '.OPEN%7D%20' +
                                encodeURI(_('opened')) +
                                '%29%3C%2Fcenter%3E&tableMode=none&useThisDatapoint=' +
                                adapter +
                                '.' +
                                instance +
                                '.Lists.' +
                                _('Windows') +
                                '.TOTAL_LIST_JSON&rowsLimit=&rowsLimitLoadMore=true&rowsLimitLoadMoreCaption=...&headHide=true&scrollbarHide=true&fontFamily=&fontSize=&fontWeight=null&fontStyle=null&colorBackground=rgba%280%2C0%2C0%2C0%29&colorBackgroundOdd=rgba%280%2C0%2C0%2C0%29&colorText=black&colorTextOdd=black&colorTextShadow=rgba%280%2C0%2C0%2C0.3%29&colorTextShadowOdd=rgba%280%2C0%2C0%2C0.3%29&colorBackgroundDark=rgba%280%2C0%2C0%2C0%29&colorBackgroundOddDark=rgba%280%2C0%2C0%2C0%29&colorBorders=&colorTextDark=black&colorTextOddDark=black&colorTextShadowDark=rgba%280%2C0%2C0%2C0.3%29&colorTextShadowOddDark=rgba%280%2C0%2C0%2C0.3%29&iconCols=val%3BvalFull%3BplainText&icon1Url=.%2Fimages%2Ficons%2Ffluent%2Ffluent_window_closed.png&icon1Caption=&icon1String=' +
                                encodeURI(_('closed')) +
                                '&icon2Url=.%2Fimages%2Ficons%2Ffluent%2Ffluent_window_opened.png&icon2Caption=&icon2String=' +
                                encodeURI(_('opened')) +
                                '&icon3Url=.%2Fimages%2Ficons%2Ffluent%2Ffluent_window_tilted.png&icon3Caption=&icon3String=' +
                                encodeURI(_('tilted')) +
                                '&icon4Url=&icon4Caption=&icon4String=&icon5Url=&icon5Caption=&icon5String=&icon6Url=&icon6Caption=&icon6String=&icon7Url=&icon7Caption=&icon7String=&icon8Url=&icon8Caption=&icon8String=&icon9Url=&icon9Caption=&icon9String=&icon10Url=&icon10Caption=&icon10String=&icon11Url=&icon11Caption=&icon11String=&icon12Url=&icon12Caption=&icon12String=&datapointDetectionEnabled=true&datapointIdCol=id&datapointIdColFilter=true&datapointExtendTableCols=parentName%3BplainText&datapointExtendTableColsDefaultTranslationLanguage=en&datapointToggleCols=plainText&widgetReplaceurl=.%2Fimages%2Fwidgets%2Fjson-table%2Fjson-table.html&widgetReplaceurlAbsolute=true',
                        },
                        { state: 'BACKGROUND_HTML', commonRole: 'const', value: '' },
                        { state: 'ENLARGE_TILE', commonRole: 'linkedState', value: '' },
                        {
                            state: 'BADGE',
                            commonRole: 'linkedState',
                            value: adapter + '.' + instance + '.Lists.' + _('Windows') + '.OPEN',
                        },
                        { state: 'BADGE_COLOR', commonRole: 'const', value: '' },
                        { state: 'OVERLAY_INACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'OVERLAY_ACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'GLOW_INACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'GLOW_ACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'GLOW_HIDE', commonRole: 'linkedState', value: '' },
                        { state: 'URL', commonRole: 'const', value: '' },
                        { state: 'HTML', commonRole: 'const', value: '' },
                        { state: 'ADDITIONAL_CONTROLS', commonRole: 'array', value: '[]' },
                        { state: 'ADDITIONAL_INFO', commonRole: 'array', value: '[]' },
                    ],
                    nativeHeadingOptions: '',
                },
                {
                    commonName: _('Opened Windows'),
                    commonRole: 'iQontrolWidget',
                    nativeBackgroundImage: '',
                    nativeBackgroundImageActive: '',
                    nativeHeading: '',
                    nativeLinkedView: '',
                    nativeNewLine: false,
                    options: [
                        { option: 'icon_on', type: 'icon', value: '' },
                        { option: 'icon_off', type: 'icon', value: '' },
                        { option: 'readonly', type: 'checkbox', value: 'false' },
                        { option: 'stateCaption', type: 'text', value: '' },
                        { option: 'renderLinkedViewInParentInstance', type: 'checkbox', value: 'false' },
                        { option: 'renderLinkedViewInParentInstanceClosesPanel', type: 'checkbox', value: 'false' },
                        { option: 'clickOnIconAction', type: 'select', value: 'toggle' },
                        { option: 'clickOnTileAction', type: 'select', value: 'openDialog' },
                        { option: 'noZoomOnHover', type: 'checkbox', value: 'true' },
                        { option: 'iconNoZoomOnHover', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceName', type: 'checkbox', value: 'true' },
                        { option: 'tileActiveStateId', type: 'text', value: '' },
                        { option: 'tileActiveCondition', type: 'select', value: '' },
                        { option: 'tileActiveConditionValue', type: 'text', value: '' },
                        { option: 'sizeInactive', type: 'select', value: 'xwideIfInactive highIfInactive' },
                        { option: 'stateHeightAdaptsContentInactive', type: 'checkbox', value: 'false' },
                        { option: 'stateFillsDeviceInactive', type: 'checkbox', value: 'false' },
                        { option: 'stateBigFontInactive', type: 'checkbox', value: 'false' },
                        { option: 'bigIconInactive', type: 'checkbox', value: 'false' },
                        { option: 'iconNoPointerEventsInactive', type: 'checkbox', value: 'true' },
                        { option: 'transparentIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'noOverlayInactive', type: 'checkbox', value: 'true' },
                        { option: 'hideBackgroundURLInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceNameIfInactive', type: 'checkbox', value: 'true' },
                        { option: 'hideStateIfInactive', type: 'checkbox', value: 'true' },
                        { option: 'hideIndicatorIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoAIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoBIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'sizeActive', type: 'select', value: 'xwideIfActive highIfActive' },
                        { option: 'stateHeightAdaptsContentActive', type: 'checkbox', value: 'false' },
                        { option: 'stateFillsDeviceActive', type: 'checkbox', value: 'false' },
                        { option: 'stateBigFontActive', type: 'checkbox', value: 'false' },
                        { option: 'bigIconActive', type: 'checkbox', value: 'false' },
                        { option: 'iconNoPointerEventsActive', type: 'checkbox', value: 'true' },
                        { option: 'transparentIfActive', type: 'checkbox', value: 'false' },
                        { option: 'noOverlayActive', type: 'checkbox', value: 'true' },
                        { option: 'hideBackgroundURLActive', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceNameIfActive', type: 'checkbox', value: 'true' },
                        { option: 'hideStateIfActive', type: 'checkbox', value: 'true' },
                        { option: 'hideIndicatorIfActive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoAIfActive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoBIfActive', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceIfActive', type: 'checkbox', value: 'false' },
                        { option: 'sizeEnlarged', type: 'select', value: 'fullWidthIfEnlarged fullHeightIfEnlarged' },
                        { option: 'stateHeightAdaptsContentEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'stateFillsDeviceEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'stateBigFontEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'bigIconEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'iconNoPointerEventsEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'transparentIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'noOverlayEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'tileEnlargeStartEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'tileEnlargeShowButtonInactive', type: 'checkbox', value: 'true' },
                        { option: 'tileEnlargeShowButtonActive', type: 'checkbox', value: 'true' },
                        { option: 'tileEnlargeShowInPressureMenuInactive', type: 'checkbox', value: 'true' },
                        { option: 'tileEnlargeShowInPressureMenuActive', type: 'checkbox', value: 'true' },
                        { option: 'visibilityBackgroundURLEnlarged', type: 'select', value: '' },
                        { option: 'hideDeviceNameIfEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'hideStateIfEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'hideIndicatorIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoAIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoBIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'hideIconEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'addTimestampToState', type: 'select', value: 'N' },
                        { option: 'showTimestamp', type: 'select', value: '' },
                        { option: 'infoARoundDigits', type: 'number', value: '1' },
                        { option: 'infoBRoundDigits', type: 'number', value: '1' },
                        { option: 'infoAShowName', type: 'checkbox', value: 'false' },
                        { option: 'infoBShowName', type: 'checkbox', value: 'false' },
                        { option: 'batteryIcon_on', type: 'icon', value: '' },
                        { option: 'batteryActiveCondition', type: 'select', value: '' },
                        { option: 'batteryActiveConditionValue', type: 'text', value: '' },
                        { option: 'unreachIcon_on', type: 'icon', value: '' },
                        { option: 'invertUnreach', type: 'checkbox', value: 'false' },
                        { option: 'hideUnreachIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'errorIcon_on', type: 'icon', value: '' },
                        { option: 'invertError', type: 'checkbox', value: 'false' },
                        { option: 'adjustHeightToBackgroundView', type: 'checkbox', value: 'false' },
                        { option: 'backgroundURLDynamicIframeZoom', type: 'number', value: '' },
                        { option: 'backgroundURLPadding', type: 'number', value: '' },
                        { option: 'backgroundURLAllowPostMessage', type: 'checkbox', value: 'true' },
                        { option: 'backgroundURLNoPointerEvents', type: 'checkbox', value: 'false' },
                        { option: 'overlayAboveBackgroundURL', type: 'checkbox', value: 'false' },
                        { option: 'badgeWithoutUnit', type: 'checkbox', value: 'true' },
                        { option: 'invertGlowHide', type: 'checkbox', value: 'false' },
                        { option: 'popupWidth', type: 'number', value: '' },
                        { option: 'popupHeight', type: 'number', value: '' },
                        { option: 'popupFixed', type: 'checkbox', value: 'false' },
                        { option: 'openURLExternal', type: 'checkbox', value: 'false' },
                        { option: 'openURLExternalCaption', type: 'text', value: '' },
                        { option: 'popupAllowPostMessage', type: 'checkbox', value: 'true' },
                        { option: 'additionalControlsSectionType', type: 'select', value: 'collapsible' },
                        { option: 'additionalControlsCaption', type: 'text', value: 'Additional Controls' },
                        { option: 'additionalControlsHeadingType', type: 'select', value: 'none' },
                        { option: 'additionalControlsHideNameForButtons', type: 'checkbox', value: 'false' },
                        { option: 'additionalInfoSectionType', type: 'select', value: 'collapsible' },
                        { option: 'additionalInfoCaption', type: 'text', value: 'Additional Infos' },
                        { option: 'additionalInfoListType', type: 'select', value: '' },
                        { option: 'additionalInfoListColumnCount', type: 'select', value: 'auto' },
                        { option: 'additionalInfoListColumnWidth', type: 'number', value: '' },
                        { option: 'noVirtualState', type: 'checkbox', value: 'false' },
                    ],
                    states: [
                        {
                            state: 'STATE',
                            commonRole: 'linkedState',
                            value: adapter + '.' + instance + '.Lists.' + _('Windows') + '.OPEN',
                        },
                        { state: 'INFO_A', commonRole: 'array', value: '[]' },
                        { state: 'INFO_B', commonRole: 'array', value: '[]' },
                        { state: 'BATTERY', commonRole: 'linkedState', value: '' },
                        { state: 'UNREACH', commonRole: 'linkedState', value: '' },
                        { state: 'ERROR', commonRole: 'linkedState', value: '' },
                        { state: 'BACKGROUND_VIEW', commonRole: 'const', value: '' },
                        {
                            state: 'BACKGROUND_URL',
                            commonRole: 'const',
                            value:
                                './images/widgets/json-table/device-counter.html?heading=%3Ccenter%3E' +
                                encodeURI(_('Opened Windows')) +
                                '%3C%2Fcenter%3E%7C%3Ccenter%3E%7B' +
                                encodeURI(adapter) +
                                '.' +
                                encodeURI(instance) +
                                '.Lists.' +
                                encodeURI(_('Windows')) +
                                '.OPEN%7D%20' +
                                encodeURI(_('opened')) +
                                '%3C%2Fcenter%3E&tableMode=none&useThisDatapoint=' +
                                encodeURI(adapter) +
                                '.' +
                                encodeURI(instance) +
                                '.Lists.' +
                                encodeURI(_('Windows')) +
                                '.OPEN_LIST_JSON&rowsLimit=&rowsLimitLoadMore=true&rowsLimitLoadMoreCaption=...&headHide=true&scrollbarHide=true&fontFamily=&fontSize=&fontWeight=null&fontStyle=null&colorBackground=rgba%280%2C0%2C0%2C0%29&colorBackgroundOdd=rgba%280%2C0%2C0%2C0%29&colorText=black&colorTextOdd=black&colorTextShadow=rgba%280%2C0%2C0%2C0.3%29&colorTextShadowOdd=rgba%280%2C0%2C0%2C0.3%29&colorBackgroundDark=rgba%280%2C0%2C0%2C0%29&colorBackgroundOddDark=rgba%280%2C0%2C0%2C0%29&colorBorders=&colorTextDark=black&colorTextOddDark=black&colorTextShadowDark=rgba%280%2C0%2C0%2C0.3%29&colorTextShadowOddDark=rgba%280%2C0%2C0%2C0.3%29&iconCols=val%3BvalFull%3BplainText&icon1Url=.%2Fimages%2Ficons%2Ffluent%2Ffluent_window_closed.png&icon1Caption=&icon1String=' +
                                encodeURI(_('closed')) +
                                '&icon2Url=.%2Fimages%2Ficons%2Ffluent%2Ffluent_window_opened.png&icon2Caption=&icon2String=' +
                                encodeURI(_('opened')) +
                                '&icon3Url=.%2Fimages%2Ficons%2Ffluent%2Ffluent_window_tilted.png&icon3Caption=&icon3String=' +
                                encodeURI(_('tilted')) +
                                '&icon4Url=&icon4Caption=&icon4String=&icon5Url=&icon5Caption=&icon5String=&icon6Url=&icon6Caption=&icon6String=&icon7Url=&icon7Caption=&icon7String=&icon8Url=&icon8Caption=&icon8String=&icon9Url=&icon9Caption=&icon9String=&icon10Url=&icon10Caption=&icon10String=&icon11Url=&icon11Caption=&icon11String=&icon12Url=&icon12Caption=&icon12String=&datapointDetectionEnabled=true&datapointIdCol=id&datapointIdColFilter=true&datapointExtendTableCols=parentName%3BplainText&datapointExtendTableColsDefaultTranslationLanguage=en&datapointToggleCols=plainText&widgetReplaceurl=.%2Fimages%2Fwidgets%2Fjson-table%2Fjson-table.html&widgetReplaceurlAbsolute=true',
                        },
                        { state: 'BACKGROUND_HTML', commonRole: 'const', value: '' },
                        { state: 'ENLARGE_TILE', commonRole: 'linkedState', value: '' },
                        {
                            state: 'BADGE',
                            commonRole: 'linkedState',
                            value: adapter + '.' + instance + '.Lists.' + _('Windows') + '.OPEN',
                        },
                        { state: 'BADGE_COLOR', commonRole: 'const', value: '' },
                        { state: 'OVERLAY_INACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'OVERLAY_ACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'GLOW_INACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'GLOW_ACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'GLOW_HIDE', commonRole: 'linkedState', value: '' },
                        { state: 'URL', commonRole: 'const', value: '' },
                        { state: 'HTML', commonRole: 'const', value: '' },
                        { state: 'ADDITIONAL_CONTROLS', commonRole: 'array', value: '[]' },
                        { state: 'ADDITIONAL_INFO', commonRole: 'array', value: '[]' },
                    ],
                    nativeHeadingOptions: '',
                },
                {
                    commonName: _('Long Opened Windows'),
                    commonRole: 'iQontrolWidget',
                    nativeBackgroundImage: '',
                    nativeBackgroundImageActive: '',
                    nativeHeading: '',
                    nativeLinkedView: '',
                    nativeNewLine: false,
                    options: [
                        { option: 'icon_on', type: 'icon', value: '' },
                        { option: 'icon_off', type: 'icon', value: '' },
                        { option: 'readonly', type: 'checkbox', value: 'false' },
                        { option: 'stateCaption', type: 'text', value: '' },
                        { option: 'renderLinkedViewInParentInstance', type: 'checkbox', value: 'false' },
                        { option: 'renderLinkedViewInParentInstanceClosesPanel', type: 'checkbox', value: 'false' },
                        { option: 'clickOnIconAction', type: 'select', value: 'toggle' },
                        { option: 'clickOnTileAction', type: 'select', value: 'openDialog' },
                        { option: 'noZoomOnHover', type: 'checkbox', value: 'true' },
                        { option: 'iconNoZoomOnHover', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceName', type: 'checkbox', value: 'true' },
                        { option: 'tileActiveStateId', type: 'text', value: '' },
                        { option: 'tileActiveCondition', type: 'select', value: '' },
                        { option: 'tileActiveConditionValue', type: 'text', value: '' },
                        { option: 'sizeInactive', type: 'select', value: 'xwideIfInactive highIfInactive' },
                        { option: 'stateHeightAdaptsContentInactive', type: 'checkbox', value: 'false' },
                        { option: 'stateFillsDeviceInactive', type: 'checkbox', value: 'false' },
                        { option: 'stateBigFontInactive', type: 'checkbox', value: 'false' },
                        { option: 'bigIconInactive', type: 'checkbox', value: 'false' },
                        { option: 'iconNoPointerEventsInactive', type: 'checkbox', value: 'true' },
                        { option: 'transparentIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'noOverlayInactive', type: 'checkbox', value: 'true' },
                        { option: 'hideBackgroundURLInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceNameIfInactive', type: 'checkbox', value: 'true' },
                        { option: 'hideStateIfInactive', type: 'checkbox', value: 'true' },
                        { option: 'hideIndicatorIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoAIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoBIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'sizeActive', type: 'select', value: 'xwideIfActive highIfActive' },
                        { option: 'stateHeightAdaptsContentActive', type: 'checkbox', value: 'false' },
                        { option: 'stateFillsDeviceActive', type: 'checkbox', value: 'false' },
                        { option: 'stateBigFontActive', type: 'checkbox', value: 'false' },
                        { option: 'bigIconActive', type: 'checkbox', value: 'false' },
                        { option: 'iconNoPointerEventsActive', type: 'checkbox', value: 'true' },
                        { option: 'transparentIfActive', type: 'checkbox', value: 'false' },
                        { option: 'noOverlayActive', type: 'checkbox', value: 'true' },
                        { option: 'hideBackgroundURLActive', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceNameIfActive', type: 'checkbox', value: 'true' },
                        { option: 'hideStateIfActive', type: 'checkbox', value: 'true' },
                        { option: 'hideIndicatorIfActive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoAIfActive', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoBIfActive', type: 'checkbox', value: 'false' },
                        { option: 'hideDeviceIfActive', type: 'checkbox', value: 'false' },
                        { option: 'sizeEnlarged', type: 'select', value: 'fullWidthIfEnlarged fullHeightIfEnlarged' },
                        { option: 'stateHeightAdaptsContentEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'stateFillsDeviceEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'stateBigFontEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'bigIconEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'iconNoPointerEventsEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'transparentIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'noOverlayEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'tileEnlargeStartEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'tileEnlargeShowButtonInactive', type: 'checkbox', value: 'true' },
                        { option: 'tileEnlargeShowButtonActive', type: 'checkbox', value: 'true' },
                        { option: 'tileEnlargeShowInPressureMenuInactive', type: 'checkbox', value: 'true' },
                        { option: 'tileEnlargeShowInPressureMenuActive', type: 'checkbox', value: 'true' },
                        { option: 'visibilityBackgroundURLEnlarged', type: 'select', value: '' },
                        { option: 'hideDeviceNameIfEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'hideStateIfEnlarged', type: 'checkbox', value: 'true' },
                        { option: 'hideIndicatorIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoAIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'hideInfoBIfEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'hideIconEnlarged', type: 'checkbox', value: 'false' },
                        { option: 'addTimestampToState', type: 'select', value: 'N' },
                        { option: 'showTimestamp', type: 'select', value: '' },
                        { option: 'infoARoundDigits', type: 'number', value: '1' },
                        { option: 'infoBRoundDigits', type: 'number', value: '1' },
                        { option: 'infoAShowName', type: 'checkbox', value: 'false' },
                        { option: 'infoBShowName', type: 'checkbox', value: 'false' },
                        { option: 'batteryIcon_on', type: 'icon', value: '' },
                        { option: 'batteryActiveCondition', type: 'select', value: '' },
                        { option: 'batteryActiveConditionValue', type: 'text', value: '' },
                        { option: 'unreachIcon_on', type: 'icon', value: '' },
                        { option: 'invertUnreach', type: 'checkbox', value: 'false' },
                        { option: 'hideUnreachIfInactive', type: 'checkbox', value: 'false' },
                        { option: 'errorIcon_on', type: 'icon', value: '' },
                        { option: 'invertError', type: 'checkbox', value: 'false' },
                        { option: 'adjustHeightToBackgroundView', type: 'checkbox', value: 'false' },
                        { option: 'backgroundURLDynamicIframeZoom', type: 'number', value: '' },
                        { option: 'backgroundURLPadding', type: 'number', value: '' },
                        { option: 'backgroundURLAllowPostMessage', type: 'checkbox', value: 'true' },
                        { option: 'backgroundURLNoPointerEvents', type: 'checkbox', value: 'false' },
                        { option: 'overlayAboveBackgroundURL', type: 'checkbox', value: 'false' },
                        { option: 'badgeWithoutUnit', type: 'checkbox', value: 'true' },
                        { option: 'invertGlowHide', type: 'checkbox', value: 'false' },
                        { option: 'popupWidth', type: 'number', value: '' },
                        { option: 'popupHeight', type: 'number', value: '' },
                        { option: 'popupFixed', type: 'checkbox', value: 'false' },
                        { option: 'openURLExternal', type: 'checkbox', value: 'false' },
                        { option: 'openURLExternalCaption', type: 'text', value: '' },
                        { option: 'popupAllowPostMessage', type: 'checkbox', value: 'true' },
                        { option: 'additionalControlsSectionType', type: 'select', value: 'collapsible' },
                        { option: 'additionalControlsCaption', type: 'text', value: 'Additional Controls' },
                        { option: 'additionalControlsHeadingType', type: 'select', value: 'none' },
                        { option: 'additionalControlsHideNameForButtons', type: 'checkbox', value: 'false' },
                        { option: 'additionalInfoSectionType', type: 'select', value: 'collapsible' },
                        { option: 'additionalInfoCaption', type: 'text', value: 'Additional Infos' },
                        { option: 'additionalInfoListType', type: 'select', value: '' },
                        { option: 'additionalInfoListColumnCount', type: 'select', value: 'auto' },
                        { option: 'additionalInfoListColumnWidth', type: 'number', value: '' },
                        { option: 'noVirtualState', type: 'checkbox', value: 'false' },
                    ],
                    states: [
                        {
                            state: 'STATE',
                            commonRole: 'linkedState',
                            value: adapter + '.' + instance + '.Lists.' + _('Windows') + '.LONG_OPEN',
                        },
                        { state: 'INFO_A', commonRole: 'array', value: '[]' },
                        { state: 'INFO_B', commonRole: 'array', value: '[]' },
                        { state: 'BATTERY', commonRole: 'linkedState', value: '' },
                        { state: 'UNREACH', commonRole: 'linkedState', value: '' },
                        { state: 'ERROR', commonRole: 'linkedState', value: '' },
                        { state: 'BACKGROUND_VIEW', commonRole: 'const', value: '' },
                        {
                            state: 'BACKGROUND_URL',
                            commonRole: 'const',
                            value:
                                './images/widgets/json-table/device-counter.html?heading=%3Ccenter%3E' +
                                encodeURI(_('Long Opened Windows')) +
                                '%3C%2Fcenter%3E%7C%3Ccenter%3E%7B' +
                                encodeURI(adapter) +
                                '.' +
                                encodeURI(instance) +
                                '.Lists.' +
                                encodeURI(_('Windows')) +
                                '.LONG_OPEN%7D%20' +
                                encodeURI(_('long opened')) +
                                '%3C%2Fcenter%3E&tableMode=none&useThisDatapoint=' +
                                encodeURI(adapter) +
                                '.' +
                                encodeURI(instance) +
                                '.Lists.' +
                                encodeURI(_('Windows')) +
                                '.LONG_OPEN_LIST_JSON&rowsLimit=&rowsLimitLoadMore=true&rowsLimitLoadMoreCaption=...&headHide=true&scrollbarHide=true&fontFamily=&fontSize=&fontWeight=null&fontStyle=null&colorBackground=rgba%280%2C0%2C0%2C0%29&colorBackgroundOdd=rgba%280%2C0%2C0%2C0%29&colorText=black&colorTextOdd=black&colorTextShadow=rgba%280%2C0%2C0%2C0.3%29&colorTextShadowOdd=rgba%280%2C0%2C0%2C0.3%29&colorBackgroundDark=rgba%280%2C0%2C0%2C0%29&colorBackgroundOddDark=rgba%280%2C0%2C0%2C0%29&colorBorders=&colorTextDark=black&colorTextOddDark=black&colorTextShadowDark=rgba%280%2C0%2C0%2C0.3%29&colorTextShadowOddDark=rgba%280%2C0%2C0%2C0.3%29&iconCols=val%3BvalFull%3BplainText&icon1Url=.%2Fimages%2Ficons%2Ffluent%2Ffluent_window_closed.png&icon1Caption=&icon1String=' +
                                encodeURI(_('closed')) +
                                '&icon2Url=.%2Fimages%2Ficons%2Ffluent%2Ffluent_window_opened.png&icon2Caption=&icon2String=' +
                                encodeURI(_('opened')) +
                                '&icon3Url=.%2Fimages%2Ficons%2Ffluent%2Ffluent_window_tilted.png&icon3Caption=&icon3String=' +
                                encodeURI(_('tilted')) +
                                '&icon4Url=&icon4Caption=&icon4String=&icon5Url=&icon5Caption=&icon5String=&icon6Url=&icon6Caption=&icon6String=&icon7Url=&icon7Caption=&icon7String=&icon8Url=&icon8Caption=&icon8String=&icon9Url=&icon9Caption=&icon9String=&icon10Url=&icon10Caption=&icon10String=&icon11Url=&icon11Caption=&icon11String=&icon12Url=&icon12Caption=&icon12String=&datapointDetectionEnabled=true&datapointIdCol=id&datapointIdColFilter=true&datapointExtendTableCols=parentName%3BplainText&datapointExtendTableColsDefaultTranslationLanguage=en&datapointToggleCols=plainText&widgetReplaceurl=.%2Fimages%2Fwidgets%2Fjson-table%2Fjson-table.html&widgetReplaceurlAbsolute=true',
                        },
                        { state: 'BACKGROUND_HTML', commonRole: 'const', value: '' },
                        { state: 'ENLARGE_TILE', commonRole: 'linkedState', value: '' },
                        {
                            state: 'BADGE',
                            commonRole: 'linkedState',
                            value: adapter + '.' + instance + '.Lists.' + _('Windows') + '.LONG_OPEN',
                        },
                        { state: 'BADGE_COLOR', commonRole: 'const', value: '' },
                        { state: 'OVERLAY_INACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'OVERLAY_ACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'GLOW_INACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'GLOW_ACTIVE_COLOR', commonRole: 'const', value: '' },
                        { state: 'GLOW_HIDE', commonRole: 'linkedState', value: '' },
                        { state: 'URL', commonRole: 'const', value: '' },
                        { state: 'HTML', commonRole: 'const', value: '' },
                        { state: 'ADDITIONAL_CONTROLS', commonRole: 'array', value: '[]' },
                        { state: 'ADDITIONAL_INFO', commonRole: 'array', value: '[]' },
                    ],
                    nativeHeadingOptions: '',
                },
            ],
        },
    ];
    defaultLists.forEach(function (defaultList, index) {
        $('#listsAddDefaultDropdown').append(
            "<li><a class='istsAddDefaultDropdownItem' data-index='" +
                index +
                "' href='#!'><i class='material-icons'>" +
                defaultList.materialIcon +
                '</i>' +
                defaultList.name +
                '</a></li>',
        );
    });
    $('#listsAddDefaultDropdownTrigger').dropdown();
    $('.istsAddDefaultDropdownItem').on('click', function () {
        var that = this;
        initDialog(
            'dialogListsAddDefault',
            function () {
                //save dialog
                let index = $('#dialogListsAddDefault').data('index');
                lists = lists.concat(defaultLists[index].lists);
                views[$('#dialogListsAddDefaultWidgetsDestinationView').val()].devices = views[
                    $('#dialogListsAddDefaultWidgetsDestinationView').val()
                ].devices.concat(defaultLists[index].devices);
                onChange();
                loadLists();
                alert(_('Settings imported.'));
                if (listsCheckUnallowed())
                    alert(
                        _(
                            'Names of lists must be unique. However, importing has created duplicates. Please check the settings!',
                        ),
                    );
            },
            function () {
                //init dialog function
                let index = $(that).data('index');
                $('#dialogListsAddDefault').data('index', index);
                $('#dialogListsAddDefaultName').html(defaultLists[index].name);
                $('#dialogListsAddDefaultDescription').html(defaultLists[index].description);
                $('#dialogListsAddDefaultLists').html('');
                if (defaultLists[index].lists.length)
                    defaultLists[index].lists.forEach(function (defaultList) {
                        $('#dialogListsAddDefaultLists').append('<li>' + defaultList.name + '</li>');
                    });
                $('#dialogListsAddDefaultWidgets').html('');
                if (defaultLists[index].devices.length)
                    defaultLists[index].devices.forEach(function (defaultDevice) {
                        $('#dialogListsAddDefaultWidgets').append('<li>' + defaultDevice.commonName + '</li>');
                    });
                $('#dialogListsAddDefaultWidgetsDestinationView').html('');
                if (views.length)
                    views.forEach(function (view, index) {
                        $('#dialogListsAddDefaultWidgetsDestinationView').append(
                            "<option value='" + index + "'>" + view.commonName + '</option>',
                        );
                    });
                $('#dialogListsAddDefaultWidgetsDestinationView').select();
            },
        );
    });

    //Enhance tableLists with functions
    var dialogListEditSelectors;
    var dialogListEditCounters;
    var dialogListEditCalculations;
    var dialogListEditCombinations;
    var dialogListEditLogs;
    function onTableListsReady() {
        var $div = $('#tableLists');
        var $table = $div.find('.table-values');
        var $lines = $table.find('.table-lines');
        //Button-Functions
        $lines.find('a[data-command]').each(function () {
            var command = $(this).data('command');
            //Edit List
            if (command === 'edit') {
                $(this).on('click', function (event) {
                    var listIndex = $(this).data('index');
                    initDialog(
                        'dialogListEdit',
                        function () {
                            //save dialog
                            var listIndex = $('#dialogListEditListIndex').val();
                            lists[listIndex].selectors = dialogListEditSelectors;
                            lists[listIndex].filterAliases = $('#dialogListEditListFilterAliases').prop('checked');
                            lists[listIndex].sorting = $('#dialogListEditSorting').val();
                            lists[listIndex].separator = $('#dialogListEditListSeparator').val();
                            lists[listIndex].createNamesList = $('#dialogListEditCreateNamesList').prop('checked');
                            lists[listIndex].createParentNamesList = $('#dialogListEditCreateParentNamesList').prop(
                                'checked',
                            );
                            lists[listIndex].createParentNamesListMode = $(
                                '#dialogListEditCreateParentNamesListMode',
                            ).val();
                            lists[listIndex].createValuesList = $('#dialogListEditCreateValuesList').prop('checked');
                            lists[listIndex].counters = dialogListEditCounters;
                            lists[listIndex].triggerInterval = $('#dialogListEditListTriggerIntervall').val();
                            lists[listIndex].calculations = dialogListEditCalculations;
                            lists[listIndex].combinations = dialogListEditCombinations;
                            lists[listIndex].logs = dialogListEditLogs;
                            onTableListsReady();
                            onChange();
                        },
                        function () {
                            //init dialog function
                            $('#dialogListEditName').html(lists[listIndex].name || '');
                            $('#dialogListEditListIndex').val(listIndex);
                            dialogListEditSelectors = JSON.parse(JSON.stringify(lists[listIndex].selectors || []));
                            values2table(
                                'tableDialogListEditSelectors',
                                dialogListEditSelectors,
                                onChange,
                                onTableDialogListsEditSelectorsReady,
                            );
                            $('#dialogListEditListFilterAliases').prop(
                                'checked',
                                lists[listIndex].filterAliases == true,
                            );
                            $('#dialogListEditSorting')
                                .val(lists[listIndex].sorting || 'parentNames asc')
                                .select();
                            $('#dialogListEditListSeparator').val(lists[listIndex].separator || ', ');
                            $('#dialogListEditCreateNamesList').prop(
                                'checked',
                                lists[listIndex].createNamesList == true,
                            );
                            $('#dialogListEditCreateParentNamesList').prop(
                                'checked',
                                lists[listIndex].createParentNamesList == true,
                            );
                            $('#dialogListEditCreateParentNamesListMode')
                                .val(lists[listIndex].createParentNamesListMode || 'parentName')
                                .select();
                            $('#dialogListEditCreateValuesList').prop(
                                'checked',
                                lists[listIndex].createValuesList == true,
                            );
                            dialogListEditCounters = JSON.parse(JSON.stringify(lists[listIndex].counters || []));
                            values2table(
                                'tableDialogListEditCounters',
                                dialogListEditCounters,
                                onChange,
                                onTableDialogListsEditCountersReady,
                            );
                            $('#dialogListEditListTriggerIntervall').val(lists[listIndex].triggerInterval || '');
                            dialogListEditCalculations = JSON.parse(
                                JSON.stringify(lists[listIndex].calculations || []),
                            );
                            values2table(
                                'tableDialogListEditCalculations',
                                dialogListEditCalculations,
                                onChange,
                                onTableDialogListsEditCalculationsReady,
                            );
                            dialogListEditCombinations = JSON.parse(
                                JSON.stringify(lists[listIndex].combinations || []),
                            );
                            values2table(
                                'tableDialogListEditCombinations',
                                dialogListEditCombinations,
                                onChange,
                                onTableDialogListsEditCombinationsReady,
                            );
                            dialogListEditLogs = JSON.parse(JSON.stringify(lists[listIndex].logs || []));
                            values2table(
                                'tableDialogListEditLogs',
                                dialogListEditLogs,
                                onChange,
                                onTableDialogListsEditLogsReady,
                            );
                        },
                    );
                });
            }
            //Copy List
            if (command === 'content_copy') {
                $(this).find('i').html('content_copy');
                $(this).on('click', function (event) {
                    var listIndex = $(this).data('index');
                    var newName = '';
                    do {
                        if (newName) alert(_('No duplicates allowed! List Names have to be unique.'));
                        var newName = prompt(_('Enter new unique name for list'), newName);
                        if (newName == '' || newName == false || newName == null) return;
                    } while (lists.find(obj => obj.name === newName));
                    var newEntry = JSON.parse(JSON.stringify(lists[listIndex]));
                    newEntry.name = newName;
                    lists.push(newEntry);
                    values2table('tableLists', lists, onChange, onTableListsReady);
                    onChange();
                });
            }
            //Drag-Icon
            if (command === 'drag_handle') {
                var imageIndex = $(this).data('index');
                $(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
            }
        });
        //Name changed
        $lines.find('input[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'name') {
                $(this).on('focusin', function () {
                    $(this).data('oldval', $(this).val());
                });
                $(this).on('change', function () {
                    var index = $(this).data('index');
                    var oldVal = $(this).data('oldval');
                    var newVal = $(this).val();
                    changeListsCommonName(index, oldVal, newVal);
                    listsCheckUnallowed();
                });
            }
        });
        function changeListsCommonName(index, oldVal, newVal) {
            /* Check here, if the name is used somewhere, for example like that (copied from views):
			toolbar.forEach(function(element){
				if (element.nativeLinkedView == oldVal) element.nativeLinkedView = newVal;
			});
			views.forEach(function(view){
				(view.devices || []).forEach(function(device){
					(device.states || []).forEach(function(state){
						if (state.state == "BACKGROUND_VIEW" && state.value == (adapter + "." + instance + ".Views." + oldVal)) state.value = (adapter + "." + instance + ".Views." + newVal);
					});
				});
			});
			*/
        }
        //Check for duplicates
        listsCheckUnallowed();
        //Make table sortable
        $('#tableLists tbody').sortable({
            helper: fixHelper,
            start: function (event, ui) {
                console.log('Drag started...');
            },
            stop: function (event, ui) {
                console.log('Drag ended, start resorting...');
                $('#tableLists tbody').sortable('disable');
                var sequence = [];
                $('#tableLists')
                    .find('.table-values')
                    .find('.table-lines')
                    .find('tr')
                    .each(function () {
                        sequence.push($(this).data('index'));
                    });
                var tableResorted = [];
                for (var i = 0; i < sequence.length; i++) {
                    tableResorted.push(lists[sequence[i]]);
                }
                lists = tableResorted;
                onChange();
                values2table('tableLists', lists, onChange, onTableListsReady);
                $('#tableLists tbody').sortable('enable');
                console.log('resorted.');
            },
            axis: 'y',
            handle: "a[data-command='drag_handle']",
        });
    }

    //Check for unallowed
    function listsCheckUnallowed() {
        var unallowed = false;
        var listNames = [];
        lists.forEach(function (element) {
            if (element.name == '') {
                unallowed = _('Lists must have a name.');
            }
            if (element.name && element.name != '&&' && element.name != '||' && listNames.indexOf(element.name) > -1) {
                unallowed = _('No duplicates allowed! List Names have to be unique.');
            } else {
                listNames.push(element.name);
            }
        });
        if (unallowed) {
            $('#listsCheckUnallowed').html(unallowed).show();
            return true;
        } else {
            $('#listsCheckUnallowed').hide();
        }
        return false;
    }

    //Enhance tableDialogListsEditSelectors with functions
    function onTableDialogListsEditSelectorsReady() {
        var $div = $('#tableDialogListEditSelectors');
        var $table = $div.find('.table-values');
        var $lines = $table.find('.table-lines');
        //Add id for selectId-Dialog
        $lines.find('input[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'value') {
                var index = $(this).data('index');
                $(this).prop('id', 'tableDialogListsEditSelectorsValue_' + index);
            }
        });
        //Selectbox-Functions
        enhanceTextInputToCombobox(
            '#tableDialogListEditSelectors input[data-name=value]',
            'state/State;channel/Channel;device/Device;enum/Enum;instance/Instance (Adapter)',
            false,
            function (value) {},
        );
        $lines.find('select[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'type') {
                var index = $(this).data('index');
                $(this)
                    .on('input change', function () {
                        $parentLine = $(this).parents('tr');
                        $operator = $parentLine.find('select[data-name=operator]');
                        $value = $parentLine.find('input[data-name=value]');
                        $edit = $parentLine.find('a[data-command=edit]');
                        switch ($(this).val()) {
                            case 'all':
                                $operator
                                    .prop('disabled', true)
                                    .select()
                                    .parents('.select-wrapper')
                                    .css('opacity', '0');
                                $value
                                    .css('opacity', '0')
                                    .prop('disabled', true)
                                    .next('a')
                                    .prop('style', 'display: none !important;'); //Hide complete;
                                $edit.css('opacity', '0').addClass('disabled');
                                break;

                            case 'enum':
                            case 'enumWithChilds':
                                $operator
                                    .prop('disabled', true)
                                    .select()
                                    .parents('.select-wrapper')
                                    .css('opacity', '0');
                                $value
                                    .css('opacity', '1')
                                    .prop('disabled', false)
                                    .next('a')
                                    .prop('style', 'display: none !important;'); //Hide only dropdown-handle
                                $edit.css('opacity', '1').removeClass('disabled').data('selectidtype', 'enum'); //Only Enums
                                break;

                            case 'id':
                                $operator.prop('disabled', false).find('option').prop('disabled', false); //Show all operators
                                $operator.select();
                                $operator.parents('.select-wrapper').css('opacity', '1');
                                $value
                                    .css('opacity', '1')
                                    .prop('disabled', false)
                                    .next('a')
                                    .prop('style', 'display: none !important;'); //Hide only dropdown-handle
                                $edit.css('opacity', '1').removeClass('disabled').data('selectidtype', 'state'); //All Ids
                                break;

                            case 'type':
                                $operator
                                    .prop('disabled', false)
                                    .find('option')
                                    .prop('disabled', false)
                                    .filter(':nth-child(1n+3)')
                                    .prop('disabled', true); //Show only eq and ne
                                $operator.parents('.select-wrapper').css('opacity', '1');
                                if ($operator.val() != 'eq' && $operator.val() != 'ne') $operator.val('');
                                $operator.select();
                                $value.css('opacity', '1').prop('disabled', false).next('a').prop('style', ''); //Show dropdown with state;channel;device;enum
                                $edit.css('opacity', '0').addClass('disabled');
                                break;

                            case 'commonType':
                            case 'commonRole':
                            case 'commonMode':
                            case 'commonEnabled':
                                $operator.prop('disabled', false).find('option').prop('disabled', false); //Show all operators
                                $operator.parents('.select-wrapper').css('opacity', '1');
                                if ($operator.val() != 'eq' && $operator.val() != 'ne') $operator.val('');
                                $operator.select();
                                $value
                                    .css('opacity', '1')
                                    .prop('disabled', false)
                                    .next('a')
                                    .prop('style', 'display: none !important;'); //Hide only dropdown-handle
                                $edit.css('opacity', '0').addClass('disabled');
                                break;
                        }
                    })
                    .trigger('change');
            }
        });
        //Button-Functions
        $lines.find('a[data-command]').each(function () {
            var command = $(this).data('command');
            //Edit
            if (command === 'edit') {
                $(this).on('click', function () {
                    var index = $(this).data('index');
                    var selectidtype = $(this).data('selectidtype');
                    $('#dialogSelectId').data('selectidfor', 'tableDialogListsEditSelectorsValue_' + index);
                    initSelectId(function (sid) {
                        sid.selectId(
                            'show',
                            $('#tableDialogListsEditSelectorsValue_' + index).val(),
                            { type: selectidtype || 'state' },
                            function (newId) {
                                if (newId) {
                                    $('#' + $('#dialogSelectId').data('selectidfor'))
                                        .val(newId)
                                        .trigger('change');
                                }
                            },
                        );
                    });
                });
            }
            //Drag-Icon
            if (command === 'drag_handle') {
                var imageIndex = $(this).data('index');
                $(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
            }
        });
        //Make table sortable
        $('#tableDialogListEditSelectors tbody').sortable({
            helper: fixHelper,
            start: function (event, ui) {
                console.log('Drag started...');
            },
            stop: function (event, ui) {
                console.log('Drag ended, start resorting...');
                $('#tableDialogListEditSelectors tbody').sortable('disable');
                var sequence = [];
                $('#tableDialogListEditSelectors')
                    .find('.table-values')
                    .find('.table-lines')
                    .find('tr')
                    .each(function () {
                        sequence.push($(this).data('index'));
                    });
                var tableResorted = [];
                for (var i = 0; i < sequence.length; i++) {
                    tableResorted.push(dialogListEditSelectors[sequence[i]]);
                }
                dialogListEditSelectors = tableResorted;
                onChange();
                values2table(
                    'tableDialogListEditSelectors',
                    dialogListEditSelectors,
                    onChange,
                    onTableDialogListsEditSelectorsReady,
                );
                $('#tableDialogListEditSelectors tbody').sortable('enable');
                console.log('resorted.');
            },
            axis: 'y',
            handle: "a[data-command='drag_handle']",
        });
    }

    //Enhance tableDialogListsEditCounters with functions
    var dialogListEditCounterConditions;
    function onTableDialogListsEditCountersReady() {
        var $div = $('#tableDialogListEditCounters');
        var $table = $div.find('.table-values');
        var $lines = $table.find('.table-lines');
        //Button-Functions
        $lines.find('a[data-command]').each(function () {
            var command = $(this).data('command');
            //Edit Counter
            if (command === 'edit') {
                $(this).on('click', function (event) {
                    var counterIndex = $(this).data('index');
                    initDialog(
                        'dialogListEditCounter',
                        function () {
                            //save dialog
                            var counterIndex = $('#dialogListEditCounterIndex').val();
                            dialogListEditCounters[counterIndex].conditions = dialogListEditCounterConditions;
                            onTableDialogListsEditCountersReady();
                        },
                        function () {
                            //init dialog function
                            $('#dialogListEditCounterName').html(dialogListEditCounters[counterIndex].name || '');
                            $('#dialogListEditCounterIndex').val(counterIndex);
                            dialogListEditCounterConditions = JSON.parse(
                                JSON.stringify(dialogListEditCounters[counterIndex].conditions || []),
                            );
                            values2table(
                                'tableDialogListEditCounterConditions',
                                dialogListEditCounterConditions,
                                onChange,
                                onTableDialogListsEditCounterConditionsReady,
                            );
                        },
                    );
                });
            }
            //Drag-Icon
            if (command === 'drag_handle') {
                var imageIndex = $(this).data('index');
                $(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
            }
        });
        //Name changed
        $lines.find('input[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'name') {
                $(this).on('change', function () {
                    dialogListsEditCheckUnallowed();
                });
            }
        });
        //Check for unallowed
        dialogListsEditCheckUnallowed();
        //Make table sortable
        $('#tableDialogListEditCounters tbody').sortable({
            helper: fixHelper,
            start: function (event, ui) {
                console.log('Drag started...');
            },
            stop: function (event, ui) {
                console.log('Drag ended, start resorting...');
                $('#tableDialogListEditCounters tbody').sortable('disable');
                var sequence = [];
                $('#tableDialogListEditCounters')
                    .find('.table-values')
                    .find('.table-lines')
                    .find('tr')
                    .each(function () {
                        sequence.push($(this).data('index'));
                    });
                var tableResorted = [];
                for (var i = 0; i < sequence.length; i++) {
                    tableResorted.push(dialogListEditCounters[sequence[i]]);
                }
                dialogListEditCounters = tableResorted;
                onChange();
                values2table(
                    'tableDialogListEditCounters',
                    dialogListEditCounters,
                    onChange,
                    onTableDialogListsEditCountersReady,
                );
                $('#tableDialogListEditCounters tbody').sortable('enable');
                console.log('resorted.');
            },
            axis: 'y',
            handle: "a[data-command='drag_handle']",
        });
    }

    //Enhance tableDialogListsEditCounterConditions with functions
    function onTableDialogListsEditCounterConditionsReady() {
        var $div = $('#tableDialogListEditCounterConditions');
        var $table = $div.find('.table-values');
        var $lines = $table.find('.table-lines');
        //Selectbox-Functions
        $lines.find('select[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'modifier') {
                var index = $(this).data('index');
                if (index == 0) {
                    $(this).prop('disabled', true).select().parents('.select-wrapper').css('opacity', '0');
                } else {
                    $(this).prop('disabled', false).select().parents('.select-wrapper').css('opacity', '1');
                }
            }
        });
        //Button-Functions
        $lines.find('a[data-command]').each(function () {
            var command = $(this).data('command');
            //Drag-Icon
            if (command === 'drag_handle') {
                var imageIndex = $(this).data('index');
                $(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
            }
        });
        //Make table sortable
        $('#tableDialogListEditCounterConditions tbody').sortable({
            helper: fixHelper,
            start: function (event, ui) {
                console.log('Drag started...');
            },
            stop: function (event, ui) {
                console.log('Drag ended, start resorting...');
                $('#tableDialogListEditCounterConditions tbody').sortable('disable');
                var sequence = [];
                $('#tableDialogListEditCounterConditions')
                    .find('.table-values')
                    .find('.table-lines')
                    .find('tr')
                    .each(function () {
                        sequence.push($(this).data('index'));
                    });
                var tableResorted = [];
                for (var i = 0; i < sequence.length; i++) {
                    tableResorted.push(dialogListEditCounterConditions[sequence[i]]);
                }
                dialogListEditCounterConditions = tableResorted;
                onChange();
                values2table(
                    'tableDialogListEditCounterConditions',
                    dialogListEditCounterConditions,
                    onChange,
                    onTableDialogListsEditCounterConditionsReady,
                );
                $('#tableDialogListEditCounterConditions tbody').sortable('enable');
                console.log('resorted.');
            },
            axis: 'y',
            handle: "a[data-command='drag_handle']",
        });
    }

    //Enhance tableDialogListsEditCalculations with functions
    var dialogListEditCalculationSteps;
    function onTableDialogListsEditCalculationsReady() {
        var $div = $('#tableDialogListEditCalculations');
        var $table = $div.find('.table-values');
        var $lines = $table.find('.table-lines');
        //Button-Functions
        $lines.find('a[data-command]').each(function () {
            var command = $(this).data('command');
            //Edit Calculation
            if (command === 'edit') {
                $(this).on('click', function (event) {
                    var calculationIndex = $(this).data('index');
                    initDialog(
                        'dialogListEditCalculation',
                        function () {
                            //save dialog
                            var calculationIndex = $('#dialogListEditCalculationIndex').val();
                            dialogListEditCalculations[calculationIndex].calculationSteps =
                                dialogListEditCalculationSteps;
                            onTableDialogListsEditCalculationsReady();
                        },
                        function () {
                            //init dialog function
                            $('#dialogListEditCalculationName').html(
                                dialogListEditCalculations[calculationIndex].name || '',
                            );
                            $('#dialogListEditCalculationIndex').val(calculationIndex);
                            dialogListEditCalculationSteps = JSON.parse(
                                JSON.stringify(dialogListEditCalculations[calculationIndex].calculationSteps || []),
                            );
                            values2table(
                                'tableDialogListEditCalculationSteps',
                                dialogListEditCalculationSteps,
                                onChange,
                                onTableDialogListsEditCalculationStepsReady,
                            );
                        },
                    );
                });
            }
            //Drag-Icon
            if (command === 'drag_handle') {
                var imageIndex = $(this).data('index');
                $(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
            }
        });
        //Name changed
        $lines.find('input[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'name') {
                $(this).on('change', function () {
                    dialogListsEditCheckUnallowed();
                });
            }
        });
        //Check for unallowed
        dialogListsEditCheckUnallowed();
        //Make table sortable
        $('#tableDialogListEditCalculations tbody').sortable({
            helper: fixHelper,
            start: function (event, ui) {
                console.log('Drag started...');
            },
            stop: function (event, ui) {
                console.log('Drag ended, start resorting...');
                $('#tableDialogListEditCalculations tbody').sortable('disable');
                var sequence = [];
                $('#tableDialogListEditCalculations')
                    .find('.table-values')
                    .find('.table-lines')
                    .find('tr')
                    .each(function () {
                        sequence.push($(this).data('index'));
                    });
                var tableResorted = [];
                for (var i = 0; i < sequence.length; i++) {
                    tableResorted.push(dialogListEditCalculations[sequence[i]]);
                }
                dialogListEditCalculations = tableResorted;
                onChange();
                values2table(
                    'tableDialogListEditCalculations',
                    dialogListEditCalculations,
                    onChange,
                    onTableDialogListsEditCalculationsReady,
                );
                $('#tableDialogListEditCalculations tbody').sortable('enable');
                console.log('resorted.');
            },
            axis: 'y',
            handle: "a[data-command='drag_handle']",
        });
    }

    //Enhance tableDialogListsEditCalculationSteps with functions
    function onTableDialogListsEditCalculationStepsReady() {
        var $div = $('#tableDialogListEditCalculationSteps');
        var $table = $div.find('.table-values');
        var $lines = $table.find('.table-lines');
        //Add id for selectId-Dialog
        $lines.find('input[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'id') {
                var index = $(this).data('index');
                $(this).prop('id', 'tableDialogListEditCalculationSteps_' + index);
            }
        });
        //Button-Functions
        $lines.find('a[data-command]').each(function () {
            var command = $(this).data('command');
            //Edit ID
            if (command === 'edit') {
                $(this).on('click', function () {
                    var index = $(this).data('index');
                    $('#dialogSelectId').data('selectidfor', 'tableDialogListEditCalculationSteps_' + index);
                    initSelectId(function (sid) {
                        sid.selectId(
                            'show',
                            $('#tableDialogListEditCalculationSteps_' + index).val() ||
                                adapter + '.' + instance + '.Lists',
                            { type: 'state' },
                            function (newId) {
                                if (newId) {
                                    $('#' + $('#dialogSelectId').data('selectidfor'))
                                        .val(newId)
                                        .trigger('change');
                                }
                            },
                        );
                    });
                });
            }
            //Drag-Icon
            if (command === 'drag_handle') {
                var imageIndex = $(this).data('index');
                $(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
            }
        });
        //Make table sortable
        $('#tableDialogListEditCalculationSteps tbody').sortable({
            helper: fixHelper,
            start: function (event, ui) {
                console.log('Drag started...');
            },
            stop: function (event, ui) {
                console.log('Drag ended, start resorting...');
                $('#tableDialogListEditCalculationSteps tbody').sortable('disable');
                var sequence = [];
                $('#tableDialogListEditCalculationSteps')
                    .find('.table-values')
                    .find('.table-lines')
                    .find('tr')
                    .each(function () {
                        sequence.push($(this).data('index'));
                    });
                var tableResorted = [];
                for (var i = 0; i < sequence.length; i++) {
                    tableResorted.push(dialogListEditCalculationSteps[sequence[i]]);
                }
                dialogListEditCalculationSteps = tableResorted;
                onChange();
                values2table(
                    'tableDialogListEditCalculationSteps',
                    dialogListEditCalculationSteps,
                    onChange,
                    onTableDialogListsEditCalculationStepsReady,
                );
                $('#tableDialogListEditCalculationSteps tbody').sortable('enable');
                console.log('resorted.');
            },
            axis: 'y',
            handle: "a[data-command='drag_handle']",
        });
    }

    //Enhance tableDialogListsEditCombinations with functions
    var dialogListEditCombinationSteps;
    function onTableDialogListsEditCombinationsReady() {
        var $div = $('#tableDialogListEditCombinations');
        var $table = $div.find('.table-values');
        var $lines = $table.find('.table-lines');
        //Button-Functions
        $lines.find('a[data-command]').each(function () {
            var command = $(this).data('command');
            //Edit Combination
            if (command === 'edit') {
                $(this).on('click', function (event) {
                    var combinationIndex = $(this).data('index');
                    initDialog(
                        'dialogListEditCombination',
                        function () {
                            //save dialog
                            var combinationIndex = $('#dialogListEditCombinationIndex').val();
                            dialogListEditCombinations[combinationIndex].combinationSteps =
                                dialogListEditCombinationSteps;
                            onTableDialogListsEditCombinationsReady();
                        },
                        function () {
                            //init dialog function
                            $('#dialogListEditCombinationName').html(
                                dialogListEditCombinations[combinationIndex].name || '',
                            );
                            $('#dialogListEditCombinationIndex').val(combinationIndex);
                            dialogListEditCombinationSteps = JSON.parse(
                                JSON.stringify(dialogListEditCombinations[combinationIndex].combinationSteps || []),
                            );
                            values2table(
                                'tableDialogListEditCombinationSteps',
                                dialogListEditCombinationSteps,
                                onChange,
                                onTableDialogListsEditCombinationStepsReady,
                            );
                        },
                    );
                });
            }
            //Drag-Icon
            if (command === 'drag_handle') {
                var imageIndex = $(this).data('index');
                $(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
            }
        });
        //Name changed
        $lines.find('input[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'name') {
                $(this).on('change', function () {
                    dialogListsEditCheckUnallowed();
                });
            }
        });
        //Check for unallowed
        dialogListsEditCheckUnallowed();
        //Make table sortable
        $('#tableDialogListEditCombinations tbody').sortable({
            helper: fixHelper,
            start: function (event, ui) {
                console.log('Drag started...');
            },
            stop: function (event, ui) {
                console.log('Drag ended, start resorting...');
                $('#tableDialogListEditCombinations tbody').sortable('disable');
                var sequence = [];
                $('#tableDialogListEditCombinations')
                    .find('.table-values')
                    .find('.table-lines')
                    .find('tr')
                    .each(function () {
                        sequence.push($(this).data('index'));
                    });
                var tableResorted = [];
                for (var i = 0; i < sequence.length; i++) {
                    tableResorted.push(dialogListEditCombinations[sequence[i]]);
                }
                dialogListEditCombinations = tableResorted;
                onChange();
                values2table(
                    'tableDialogListEditCombinations',
                    dialogListEditCombinations,
                    onChange,
                    onTableDialogListsEditCombinationsReady,
                );
                $('#tableDialogListEditCombinations tbody').sortable('enable');
                console.log('resorted.');
            },
            axis: 'y',
            handle: "a[data-command='drag_handle']",
        });
    }

    //Enhance tableDialogListsEditCombinationSteps with functions
    function onTableDialogListsEditCombinationStepsReady() {
        var $div = $('#tableDialogListEditCombinationSteps');
        var $table = $div.find('.table-values');
        var $lines = $table.find('.table-lines');
        //Add id for selectId-Dialog
        $lines.find('input[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'id') {
                var index = $(this).data('index');
                $(this).prop('id', 'tableDialogListEditCombinationSteps_' + index);
            }
        });
        //Button-Functions
        $lines.find('a[data-command]').each(function () {
            var command = $(this).data('command');
            //Edit ID
            if (command === 'edit') {
                $(this).on('click', function () {
                    var index = $(this).data('index');
                    $('#dialogSelectId').data('selectidfor', 'tableDialogListEditCombinationSteps_' + index);
                    initSelectId(function (sid) {
                        sid.selectId(
                            'show',
                            $('#tableDialogListEditCombinationSteps_' + index).val() ||
                                adapter + '.' + instance + '.Lists',
                            { type: 'state' },
                            function (newId) {
                                if (newId) {
                                    $('#' + $('#dialogSelectId').data('selectidfor'))
                                        .val(newId)
                                        .trigger('change');
                                }
                            },
                        );
                    });
                });
            }
            //Drag-Icon
            if (command === 'drag_handle') {
                var imageIndex = $(this).data('index');
                $(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
            }
        });
        //Make table sortable
        $('#tableDialogListEditCombinationSteps tbody').sortable({
            helper: fixHelper,
            start: function (event, ui) {
                console.log('Drag started...');
            },
            stop: function (event, ui) {
                console.log('Drag ended, start resorting...');
                $('#tableDialogListEditCombinationSteps tbody').sortable('disable');
                var sequence = [];
                $('#tableDialogListEditCombinationSteps')
                    .find('.table-values')
                    .find('.table-lines')
                    .find('tr')
                    .each(function () {
                        sequence.push($(this).data('index'));
                    });
                var tableResorted = [];
                for (var i = 0; i < sequence.length; i++) {
                    tableResorted.push(dialogListEditCombinationSteps[sequence[i]]);
                }
                dialogListEditCombinationSteps = tableResorted;
                onChange();
                values2table(
                    'tableDialogListEditCombinationSteps',
                    dialogListEditCombinationSteps,
                    onChange,
                    onTableDialogListsEditCombinationStepsReady,
                );
                $('#tableDialogListEditCombinationSteps tbody').sortable('enable');
                console.log('resorted.');
            },
            axis: 'y',
            handle: "a[data-command='drag_handle']",
        });
    }

    //Enhance tableDialogListEditLogs with functions
    var dialogListEditLogOnChangeIds;
    var dialogListEditLogSteps;
    function onTableDialogListsEditLogsReady() {
        var $div = $('#tableDialogListEditLogs');
        var $table = $div.find('.table-values');
        var $lines = $table.find('.table-lines');
        //Button-Functions
        $lines.find('a[data-command]').each(function () {
            var command = $(this).data('command');
            //Edit Log
            if (command === 'edit') {
                $(this).on('click', function (event) {
                    var logIndex = $(this).data('index');
                    initDialog(
                        'dialogListEditLog',
                        function () {
                            //save dialog
                            var logIndex = $('#dialogListEditLogIndex').val();
                            dialogListEditLogs[logIndex].onChangeIds = dialogListEditLogOnChangeIds;
                            dialogListEditLogs[logIndex].onChangeDebounce = $(
                                '#dialogListEditLogOnChangeDebounce',
                            ).val();
                            dialogListEditLogs[logIndex].logSteps = dialogListEditLogSteps;
                            dialogListEditLogs[logIndex].onChangeAddAllLogStepIds = $(
                                '#dialogListEditOnChangeAddAllLogStepIds',
                            ).prop('checked');
                            dialogListEditLogs[logIndex].addTo = $('#dialogListEditLogAddTo').val();
                            onTableDialogListsEditLogsReady();
                        },
                        function () {
                            //init dialog function
                            $('#dialogListEditLogName').html(dialogListEditLogs[logIndex].name || '');
                            $('#dialogListEditLogIndex').val(logIndex);
                            dialogListEditLogOnChangeIds = JSON.parse(
                                JSON.stringify(dialogListEditLogs[logIndex].onChangeIds || []),
                            );
                            values2table(
                                'tableDialogListEditLogOnChangeIDs',
                                dialogListEditLogOnChangeIds,
                                onChange,
                                onTableDialogListsEditLogOnChangeIDsReady,
                            );
                            $('#dialogListEditLogOnChangeDebounce').val(dialogListEditLogs[logIndex].onChangeDebounce);
                            dialogListEditLogSteps = JSON.parse(
                                JSON.stringify(dialogListEditLogs[logIndex].logSteps || []),
                            );
                            values2table(
                                'tableDialogListEditLogSteps',
                                dialogListEditLogSteps,
                                onChange,
                                onTableDialogListsEditLogStepsReady,
                            );
                            $('#dialogListEditOnChangeAddAllLogStepIds').prop(
                                'checked',
                                dialogListEditLogs[logIndex].onChangeAddAllLogStepIds == true,
                            );
                            $('#dialogListEditLogAddTo')
                                .val(dialogListEditLogs[logIndex].addTo || 'top')
                                .select();
                        },
                    );
                });
            }
            //Drag-Icon
            if (command === 'drag_handle') {
                var imageIndex = $(this).data('index');
                $(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
            }
        });
        //Name changed
        $lines.find('input[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'name') {
                $(this).on('change', function () {
                    dialogListsEditCheckUnallowed();
                });
            }
        });
        //Check for unallowed
        dialogListsEditCheckUnallowed();
        //Make table sortable
        $('#tableDialogListEditLogs tbody').sortable({
            helper: fixHelper,
            start: function (event, ui) {
                console.log('Drag started...');
            },
            stop: function (event, ui) {
                console.log('Drag ended, start resorting...');
                $('#tableDialogListEditLogs tbody').sortable('disable');
                var sequence = [];
                $('#tableDialogListEditLogs')
                    .find('.table-values')
                    .find('.table-lines')
                    .find('tr')
                    .each(function () {
                        sequence.push($(this).data('index'));
                    });
                var tableResorted = [];
                for (var i = 0; i < sequence.length; i++) {
                    tableResorted.push(dialogListEditLogs[sequence[i]]);
                }
                dialogListEditLogs = tableResorted;
                onChange();
                values2table('tableDialogListEditLogs', dialogListEditLogs, onChange, onTableDialogListsEditLogsReady);
                $('#tableDialogListEditLogs tbody').sortable('enable');
                console.log('resorted.');
            },
            axis: 'y',
            handle: "a[data-command='drag_handle']",
        });
    }

    //Enhance tableDialogListsEditLogOnChangeIDs with functions
    function onTableDialogListsEditLogOnChangeIDsReady() {
        var $div = $('#tableDialogListEditLogOnChangeIDs');
        var $table = $div.find('.table-values');
        var $lines = $table.find('.table-lines');
        //Add id for selectId-Dialog
        $lines.find('input[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'id') {
                var index = $(this).data('index');
                $(this).prop('id', 'tableDialogListEditLogOnChangeIDs_' + index);
            }
        });
        //Button-Functions
        $lines.find('a[data-command]').each(function () {
            var command = $(this).data('command');
            //Edit ID
            if (command === 'edit') {
                $(this).on('click', function () {
                    var index = $(this).data('index');
                    $('#dialogSelectId').data('selectidfor', 'tableDialogListEditLogOnChangeIDs_' + index);
                    initSelectId(function (sid) {
                        sid.selectId(
                            'show',
                            $('#tableDialogListEditLogOnChangeIDs_' + index).val() ||
                                adapter + '.' + instance + '.Lists',
                            { type: 'state' },
                            function (newId) {
                                if (newId) {
                                    $('#' + $('#dialogSelectId').data('selectidfor'))
                                        .val(newId)
                                        .trigger('change');
                                }
                            },
                        );
                    });
                });
            }
            //Drag-Icon
            if (command === 'drag_handle') {
                var imageIndex = $(this).data('index');
                $(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
            }
        });
        //Make table sortable
        $('#tableDialogListEditLogOnChangeIDs tbody').sortable({
            helper: fixHelper,
            start: function (event, ui) {
                console.log('Drag started...');
            },
            stop: function (event, ui) {
                console.log('Drag ended, start resorting...');
                $('#tableDialogListEditLogOnChangeIDs tbody').sortable('disable');
                var sequence = [];
                $('#tableDialogListEditLogOnChangeIDs')
                    .find('.table-values')
                    .find('.table-lines')
                    .find('tr')
                    .each(function () {
                        sequence.push($(this).data('index'));
                    });
                var tableResorted = [];
                for (var i = 0; i < sequence.length; i++) {
                    tableResorted.push(dialogListEditLogOnChangeIds[sequence[i]]);
                }
                dialogListEditLogOnChangeIds = tableResorted;
                onChange();
                values2table(
                    'tableDialogListEditLogOnChangeIDs',
                    dialogListEditLogOnChangeIds,
                    onChange,
                    onTableDialogListsEditLogOnChangeIDsReady,
                );
                $('#tableDialogListEditLogOnChangeIDs tbody').sortable('enable');
                console.log('resorted.');
            },
            axis: 'y',
            handle: "a[data-command='drag_handle']",
        });
    }

    //Enhance tableDialogListsEditLogSteps with functions
    function onTableDialogListsEditLogStepsReady() {
        var $div = $('#tableDialogListEditLogSteps');
        var $table = $div.find('.table-values');
        var $lines = $table.find('.table-lines');
        //Add id for selectId-Dialog
        $lines.find('input[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'id') {
                var index = $(this).data('index');
                $(this).prop('id', 'tableDialogListEditLogSteps_' + index);
            }
        });
        //Selectbox-Functions
        $lines.find('select[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'type') {
                var index = $(this).data('index');
                $(this)
                    .on('input change', function () {
                        $parentLine = $(this).parents('tr');
                        $id = $parentLine.find('input[data-name=id]');
                        $edit = $parentLine.find('a[data-command=edit]');
                        if ($(this).val().indexOf('octs') == 0 || $(this).val().indexOf('count') == 0) {
                            //Number or OnChangeTimestamp
                            $id.css('opacity', '0').prop('disabled', true); //Hide
                            $edit.css('opacity', '0').addClass('disabled');
                        } else {
                            $id.css('opacity', '1').prop('disabled', false); //Show
                            $edit.css('opacity', '1').removeClass('disabled');
                        }
                    })
                    .trigger('change');
            }
        });
        //Button-Functions
        $lines.find('a[data-command]').each(function () {
            var command = $(this).data('command');
            //Edit ID
            if (command === 'edit') {
                $(this).on('click', function () {
                    var index = $(this).data('index');
                    $('#dialogSelectId').data('selectidfor', 'tableDialogListEditLogSteps_' + index);
                    initSelectId(function (sid) {
                        sid.selectId(
                            'show',
                            $('#tableDialogListEditLogSteps_' + index).val() || adapter + '.' + instance + '.Lists',
                            { type: 'state' },
                            function (newId) {
                                if (newId) {
                                    $('#' + $('#dialogSelectId').data('selectidfor'))
                                        .val(newId)
                                        .trigger('change');
                                }
                            },
                        );
                    });
                });
            }
            //Drag-Icon
            if (command === 'drag_handle') {
                var imageIndex = $(this).data('index');
                $(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
            }
        });
        //Key changed
        $lines.find('input[data-name]').each(function () {
            var name = $(this).data('name');
            if (name === 'key') {
                $(this).on('change', function () {
                    listsEditLogStepsCheckUnallowed();
                });
            }
        });
        //Check for duplicates
        listsEditLogStepsCheckUnallowed();
        //Make table sortable
        $('#tableDialogListEditLogSteps tbody').sortable({
            helper: fixHelper,
            start: function (event, ui) {
                console.log('Drag started...');
            },
            stop: function (event, ui) {
                console.log('Drag ended, start resorting...');
                $('#tableDialogListEditLogSteps tbody').sortable('disable');
                var sequence = [];
                $('#tableDialogListEditLogSteps')
                    .find('.table-values')
                    .find('.table-lines')
                    .find('tr')
                    .each(function () {
                        sequence.push($(this).data('index'));
                    });
                var tableResorted = [];
                for (var i = 0; i < sequence.length; i++) {
                    tableResorted.push(dialogListEditLogSteps[sequence[i]]);
                }
                dialogListEditLogSteps = tableResorted;
                onChange();
                values2table(
                    'tableDialogListEditLogSteps',
                    dialogListEditLogSteps,
                    onChange,
                    onTableDialogListsEditLogStepsReady,
                );
                $('#tableDialogListEditLogSteps tbody').sortable('enable');
                console.log('resorted.');
            },
            axis: 'y',
            handle: "a[data-command='drag_handle']",
        });
    }

    //Check for unallowed
    function listsEditLogStepsCheckUnallowed() {
        var unallowed = false;
        var keys = [];
        if (dialogListEditLogSteps && dialogListEditLogSteps.length)
            dialogListEditLogSteps.forEach(function (element) {
                if (element.key == '') {
                    unallowed = _('All items have to have a name.');
                }
                if (element.key && keys.indexOf(element.key) > -1) {
                    unallowed = _('No duplicates allowed! Names have to be unique.');
                } else {
                    keys.push(element.key);
                }
            });
        if (unallowed) {
            $('#dialogListEditLogCheckUnallowed').html(unallowed).show();
            $('#dialogListEditLog .btn-set').addClass('disabled');
            return true;
        } else {
            $('#dialogListEditLogCheckUnallowed').hide();
            $('#dialogListEditLog .btn-set').removeClass('disabled');
        }
        return false;
    }
    function dialogListsEditCheckUnallowed() {
        var unallowed = false;
        var names = [];
        if (dialogListEditCounters && dialogListEditCounters.length)
            dialogListEditCounters.forEach(function (element) {
                if (element.name == '') {
                    unallowed = _('All items have to have a name.');
                }
                if (element.name.indexOf('TOTAL') == 0) {
                    unallowed = _('Names must not be TOTAL.');
                }
                if (element.name && element.name != '&&' && element.name != '||' && names.indexOf(element.name) > -1) {
                    unallowed = _('No duplicates allowed! Names have to be unique.');
                } else {
                    names.push(element.name);
                }
            });
        if (!unallowed && dialogListEditCalculations && dialogListEditCalculations.length)
            dialogListEditCalculations.forEach(function (element) {
                if (element.name == '') {
                    unallowed = _('All items have to have a name.');
                }
                if (element.name == 'TOTAL') {
                    unallowed = _('Names must not be TOTAL.');
                }
                if (element.name && element.name != '&&' && element.name != '||' && names.indexOf(element.name) > -1) {
                    unallowed = _('No duplicates allowed! Names have to be unique.');
                } else {
                    names.push(element.name);
                }
            });
        if (!unallowed && dialogListEditCombinations && dialogListEditCombinations.length)
            dialogListEditCombinations.forEach(function (element) {
                if (element.name == '') {
                    unallowed = _('All items have to have a name.');
                }
                if (element.name == 'TOTAL') {
                    unallowed = _('Names must not be TOTAL.');
                }
                if (element.name && element.name != '&&' && element.name != '||' && names.indexOf(element.name) > -1) {
                    unallowed = _('No duplicates allowed! Names have to be unique.');
                } else {
                    names.push(element.name);
                }
            });
        if (!unallowed && dialogListEditLogs && dialogListEditLogs.length)
            dialogListEditLogs.forEach(function (element) {
                if (element.name == '') {
                    unallowed = _('All items have to have a name.');
                }
                if (element.name == 'TOTAL') {
                    unallowed = _('Names must not be TOTAL.');
                }
                if (element.name && element.name != '&&' && element.name != '||' && names.indexOf(element.name) > -1) {
                    unallowed = _('No duplicates allowed! Names have to be unique.');
                } else {
                    names.push(element.name);
                }
            });
        if (unallowed) {
            $('#dialogListEditCheckUnallowed').html(unallowed).show();
            $('#dialogListEdit .btn-set').addClass('disabled');
            return true;
        } else {
            $('#dialogListEditCheckUnallowed').hide();
            $('#dialogListEdit .btn-set').removeClass('disabled');
        }
        return false;
    }

    //Export and Import lists
    $('#listsExport').on('click', function () {
        initDialog(
            'dialogListsExport',
            function () {
                //save dialog
                var listsToExport = [];
                $('.dialogListsExportListsListListitem').each(function () {
                    if ($(this).prop('checked')) listsToExport.push(lists[$(this).data('index')]);
                });
                saveStringAsLocalFile(JSON.stringify(listsToExport), 'charset=utf-8', 'text/json', 'lists.json', true);
            },
            function () {
                //init dialog function
                //Add lists to export list
                $('#dialogListsExportListsList').html('');
                lists.forEach(function (list, index) {
                    $('#dialogListsExportListsList').append(
                        "<label><input class='dialogListsExportListsListListitem' type='checkbox'" +
                            "' data-index='" +
                            index +
                            "'><span style='height: auto;'><b>" +
                            list.name +
                            '</b></span></label><br>',
                    );
                });
                $('.dialogListsExportListsListListitem').on('change', function () {
                    var oneChecked = false;
                    $('.dialogListsExportListsListListitem').each(function () {
                        if ($(this).prop('checked')) oneChecked = true;
                    });
                    if (oneChecked) $('#dialogListsExport .btn-set').removeClass('disabled');
                    else $('#dialogListsExport .btn-set').addClass('disabled');
                });
            },
        );
        $('#dialogListsExport').modal('open');
        $('#dialogListsExport').css('z-index', modalZIndexCount++);
        $('#dialogListsExport .modal-content').scrollTop(0);
    });
    $('#listsImport').on('click', function () {
        loadLocalFileAsString('.json', function (result) {
            var resultObj = tryParseJSON(result);
            var resultObjValid = true;
            if (!(resultObj && typeof resultObj == 'object' && typeof resultObj.forEach == 'function')) {
                resultObjValid = false;
            }
            if (resultObjValid) {
                lists = lists.concat(resultObj);
                alert(_('Settings imported.'));
                values2table('tableLists', lists, onChange, onTableListsReady);
                onChange();
            } else {
                alert(_('Error: Invalid data.'));
            }
        });
    });

    //++++++++++ OPTIONS ++++++++++
    //Load Options
    function loadOptions() {
        $('.collapsible').collapsible();

        //Fill Combobox for ChangeDeviceIcons with icons
        //Default Icon
        var optionsString = '[' + _('Default Icon') + ':]';
        optionsString +=
            ';/' + _('Default Icon') + '/' + (previewLink + '/images/icons/various.png').replace(/\//g, '\\');
        //Blank Icon
        optionsString += ';[' + _('No Icon') + ':]';
        optionsString +=
            ';' +
            './images/icons/blank.png'.replace(/\//g, '\\') +
            '/' +
            _('No Icon') +
            '/' +
            (previewLink + '/images/icons/checkboard.png').replace(/\//g, '\\');
        //Inbuilt Icons
        optionsString += ';[' + _('Inbuilt Icons') + ':]';
        inbuiltIcons.forEach(function (inbuiltIcon) {
            if (inbuiltIcon != '') {
                optionsString += ';' + inbuiltIcon.replace(/\//g, '\\') + '/' + inbuiltIcon.replace(/\//g, '\\');
            }
        });
        //User Icons
        var imagenames = [];
        imagesDirs.forEach(function (imagesDir) {
            if (imagesDir.dirname.indexOf('/usericons') == 0 && imagesDir.files && imagesDir.files.length > 0) {
                imagenames.push('[' + imagesDir.dirnameBS + ':]');
                imagesDir.files.forEach(function (file) {
                    if (
                        file.filenameBS.toLowerCase().endsWith('.png') ||
                        file.filenameBS.toLowerCase().endsWith('.jpeg') ||
                        file.filenameBS.toLowerCase().endsWith('.jpg') ||
                        file.filenameBS.toLowerCase().endsWith('.gif') ||
                        file.filenameBS.toLowerCase().endsWith('.svg') ||
                        file.filenameBS.toLowerCase().endsWith('.svg+xml')
                    ) {
                        imagenames.push('.\\..' + userfilesImagePathBS + file.filenameBS + '/' + file.filenameBS);
                    }
                });
            }
        });
        if (imagenames.length > 0) {
            optionsString += ';[' + _('User Icons') + ':]';
            imagenames.forEach(function (option) {
                optionsString += ';' + option;
            });
        }
        enhanceTextInputToCombobox('#optionsChangeDeviceOptionsIconsSource', optionsString, true);
        enhanceTextInputToCombobox('#optionsChangeDeviceOptionsIconsDestination', optionsString, true);

        //Fill Combobox for ChangeDeviceOptionsFilterRoles with roles
        $('.optionsChangeDeviceOptionsRoles').html('');
        for (iQontrolRole in iQontrolRoles) {
            $('.optionsChangeDeviceOptionsRoles').append(
                "<option value='" +
                    iQontrolRole +
                    "' data-icon='" +
                    (iQontrolRoles[iQontrolRole].icon ? previewLink + iQontrolRoles[iQontrolRole].icon : '') +
                    "'>" +
                    _(iQontrolRoles[iQontrolRole].name) +
                    '</select>',
            );
        }
        $('select.optionsChangeDeviceOptionsRoles').select();

        //Fill Combobox for ChangeDeviceOptionsFilterDevices with devices
        $('.optionsChangeDeviceOptionsDevices').html('');
        if (typeof views != udef)
            views.forEach(function (view) {
                var viewName = view.commonName || '';
                $('.optionsChangeDeviceOptionsDevices').append(
                    "<optgroup class='optionsChangeDeviceOptionsDevices_View' data-view='" +
                        escape(viewName) +
                        "' label='" +
                        viewName +
                        "'></optgroup>",
                );
                if (typeof view.devices != udef)
                    view.devices.forEach(function (device) {
                        var deviceName = device.commonName || '';
                        $('.optionsChangeDeviceOptionsDevices_View[data-view="' + escape(viewName) + '"]').append(
                            "<option value='[" + viewName + ']' + deviceName + "'>" + deviceName + '</select>',
                        );
                    });
            });
        $('select.optionsChangeDeviceOptionsDevices').select();
        $('.optionsChangeDeviceOptionsDevices')
            .prevAll('ul')
            .children('.optgroup')
            .data('selectall', false)
            .on('click', function () {
                console.log('SELECTALL');
                $(this).data('selectall', !$(this).data('selectall'));
                $(this)
                    .nextUntil(
                        '.optgroup',
                        '.optgroup-option' + ($(this).data('selectall') ? ':not(.selected)' : '.selected'),
                    )
                    .find('input')
                    .click();
            });

        //Create Comboboxes for Default Icons / Device Icons
        var defaultIconsDeviceOptionsString = '';
        for (iQontrolRole in iQontrolRoles) {
            defaultIconsDeviceOptionsString += "<div class='divider' style='margin-bottom: 10px;'></div>";
            defaultIconsDeviceOptionsString += "<div class='row'>";
            defaultIconsDeviceOptionsString += "<div class='col s12'>";
            defaultIconsDeviceOptionsString +=
                '<h7>' +
                (iQontrolRoles[iQontrolRole].icon
                    ? "<img src='" +
                      previewLink +
                      iQontrolRoles[iQontrolRole].icon +
                      "' style='width:18px; height:18px; border:0; margin:0 0 -4px 0;'>&nbsp;"
                    : '') +
                _(iQontrolRoles[iQontrolRole].name) +
                ':</h7>';
            defaultIconsDeviceOptionsString += '</div>';
            defaultIconsDeviceOptionsString += '</div>';
            defaultIconsDeviceOptionsString += "<div class='row'>";
            for (iQontrolRoleOption in iQontrolRoles[iQontrolRole].options) {
                if (iQontrolRoles[iQontrolRole].options[iQontrolRoleOption].type == 'icon') {
                    if (
                        iQontrolRoleOption == 'errorIcon_on' ||
                        iQontrolRoleOption == 'unreachIcon_on' ||
                        iQontrolRoleOption == 'batteryIcon_on'
                    )
                        continue;
                    var optionName = 'optionsLayoutDefaultIcons_' + iQontrolRole + '_' + iQontrolRoleOption;
                    defaultIconsDeviceOptionsString += "<div class='input-field col s12 m6 l4'>";
                    defaultIconsDeviceOptionsString +=
                        "<input class='" +
                        optionName +
                        " optionsLayoutDefaultIcons' data-role='" +
                        iQontrolRole +
                        "' data-icon='" +
                        iQontrolRoleOption +
                        "' type='text' id='" +
                        optionName +
                        "' />";
                    defaultIconsDeviceOptionsString +=
                        "<label for='" +
                        optionName +
                        "'>" +
                        _(iQontrolRoles[iQontrolRole].name) +
                        ', ' +
                        _(iQontrolRoles[iQontrolRole].options[iQontrolRoleOption].name) +
                        '</label>';
                    defaultIconsDeviceOptionsString += "<span class='helper-text'></span>";
                    defaultIconsDeviceOptionsString += '</div>';
                }
            }
            defaultIconsDeviceOptionsString += '</div>';
        }
        $('#optionsLayoutDefaultIconsDeviceIcons').html(defaultIconsDeviceOptionsString);

        //Fill Comboboxes for DefaultIcons with icons
        //Default Icon
        var optionsString = '[' + _('Default Icon') + ':]';
        optionsString +=
            ';/' + _('Default Icon') + '/' + (previewLink + '/images/icons/various.png').replace(/\//g, '\\');
        //Blank Icon
        optionsString += ';[' + _('No Icon') + ':]';
        optionsString +=
            ';' +
            './images/icons/blank.png'.replace(/\//g, '\\') +
            '/' +
            _('No Icon') +
            '/' +
            (previewLink + '/images/icons/checkboard.png').replace(/\//g, '\\');
        //Inbuilt Icons
        optionsString += ';[' + _('Inbuilt Icons') + ':]';
        inbuiltIcons.forEach(function (inbuiltIcon) {
            if (inbuiltIcon != '') {
                optionsString += ';' + inbuiltIcon.replace(/\//g, '\\') + '/' + inbuiltIcon.replace(/\//g, '\\');
            }
        });
        //User Icons
        var imagenames = [];
        imagesDirs.forEach(function (imagesDir) {
            if (imagesDir.dirname.indexOf('/usericons') == 0 && imagesDir.files && imagesDir.files.length > 0) {
                imagenames.push('[' + imagesDir.dirnameBS + ':]');
                imagesDir.files.forEach(function (file) {
                    if (
                        file.filenameBS.toLowerCase().endsWith('.png') ||
                        file.filenameBS.toLowerCase().endsWith('.jpeg') ||
                        file.filenameBS.toLowerCase().endsWith('.jpg') ||
                        file.filenameBS.toLowerCase().endsWith('.gif') ||
                        file.filenameBS.toLowerCase().endsWith('.svg') ||
                        file.filenameBS.toLowerCase().endsWith('.svg+xml')
                    ) {
                        imagenames.push('.\\..' + userfilesImagePathBS + file.filenameBS + '/' + file.filenameBS);
                    }
                });
            }
        });
        if (imagenames.length > 0) {
            optionsString += ';[' + _('User Icons') + ':]';
            imagenames.forEach(function (option) {
                optionsString += ';' + option;
            });
        }
        enhanceTextInputToCombobox('.optionsLayoutDefaultIcons', optionsString, true);
        optionsLayoutDefaultIconsSetValues();

        //Fill Comboboxes for DefaultSymbols with icons
        //Default Symbol
        var optionsString = '[' + _('Default Symbol') + ':]';
        optionsString +=
            ';/' + _('Default Symbol') + '/' + (previewLink + '/images/icons/various.png').replace(/\//g, '\\');
        //Inbuilt Symbols
        optionsString += ';[' + _('Inbuilt Symbols') + ':]';
        inbuiltSymbols.forEach(function (inbuiltSymbol) {
            if (inbuiltSymbol != '') {
                optionsString +=
                    ';' +
                    ('./images/symbols/' + inbuiltSymbol).replace(/\//g, '\\') +
                    '/' +
                    inbuiltSymbol.replace(/\//g, '\\');
            }
        });
        //User Symbols
        var imagenames = [];
        imagesDirs.forEach(function (imagesDir) {
            if (imagesDir.dirname.indexOf('/usersymbols') == 0 && imagesDir.files && imagesDir.files.length > 0) {
                imagenames.push('[' + imagesDir.dirnameBS + ':]');
                imagesDir.files.forEach(function (file) {
                    if (
                        file.filenameBS.toLowerCase().endsWith('.png') ||
                        file.filenameBS.toLowerCase().endsWith('.jpeg') ||
                        file.filenameBS.toLowerCase().endsWith('.jpg') ||
                        file.filenameBS.toLowerCase().endsWith('.gif') ||
                        file.filenameBS.toLowerCase().endsWith('.svg') ||
                        file.filenameBS.toLowerCase().endsWith('.svg+xml')
                    ) {
                        imagenames.push('.\\..' + userfilesImagePathBS + file.filenameBS + '/' + file.filenameBS);
                    }
                });
            }
        });
        if (imagenames.length > 0) {
            optionsString += ';[' + _('User Symbols') + ':]';
            imagenames.forEach(function (option) {
                optionsString += ';' + option;
            });
        }
        enhanceTextInputToCombobox('.optionsLayoutDefaultSymbols', optionsString, true);
        optionsLayoutDefaultSymbolsSetValues();

        //Fill Combobox for fontFamily with fonts
        //Default Font
        var optionsString = '[' + _('Default Font') + ':]';
        optionsString +=
            ';/' + _('Default Font') + '/' + (previewLink + '/images/icons/blank.png').replace(/\//g, '\\');
        //Inbuilt Fonts
        optionsString += ';[Sans-Serif:]';
        optionsString +=
            ';Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif/Helvetica, Arial/.\\fonts\\font_arial.png';
        optionsString +=
            ';Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif/Verdana/.\\fonts\\font_verdana.png';
        optionsString +=
            ';"Segoe UI", Candara, "Bitstream Vera Sans", "DejaVu Sans", "Bitstream Vera Sans", "Trebuchet MS", Verdana, "Verdana Ref", sans-serif/Trebuchet/.\\fonts\\font_trebuchet.png';
        optionsString += ';[Serif:]';
        optionsString +=
            ';Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif/Times New Roman/.\\fonts\\font_times.png';
        optionsString +=
            ';Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif/Georgia/.\\fonts\\font_georgia.png';
        optionsString +=
            ';"Palatino Linotype", Palatino, Palladio, "URW Palladio L", "Book Antiqua", Baskerville, "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif/Garamond/.\\fonts\\font_garamond.png';
        optionsString += ';[Fantasy:]';
        optionsString +=
            ';Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal, "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", fantasy, sans-serif/Impact/.\\fonts\\font_impact.png';
        optionsString += ';[Cursive:]';
        optionsString +=
            ';"Comic Sans", "Comic Sans MS", "Chalkboard", "ChalkboardSE-Regular", cursive, sans-serif/Comic Sans/.\\fonts\\font_comic.png';
        optionsString += ';[Monospace:]';
        optionsString +=
            ';Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace/Courier/.\\fonts\\font_courier.png';
        //User Fonts
        var userfonts = [];
        imagesDirs.forEach(function (imagesDir) {
            if (imagesDir.dirname.indexOf('/userfonts') == 0 && imagesDir.files && imagesDir.files.length > 0) {
                imagesDir.files.forEach(function (file) {
                    var filename = file.filename || '';
                    if (
                        filename.endsWith('.otf') ||
                        filename.endsWith('.ttf') ||
                        filename.endsWith('.woff') ||
                        filename.endsWith('.woff2') ||
                        filename.endsWith('.eot')
                    ) {
                        var iconIndex = images.findIndex(function (element) {
                            return element.filename == file.filename.substring(0, file.filename.length - 5) + '.png';
                        });
                        if (iconIndex > -1)
                            var icon = previewLink + '/..' + userfilesImagePath + images[iconIndex].filename;
                        else var icon = previewLink + '/images/icons/file_font.png';
                        userfonts.push(
                            file.filenameBS +
                                '@' +
                                '.\\..' +
                                userfilesImagePathBS +
                                file.filenameBS +
                                '/' +
                                file.filenameBS +
                                '/' +
                                icon.replace(/\//g, '\\'),
                        );
                    }
                });
            }
        });
        if (userfonts.length > 0) {
            optionsString += ';[' + _('User Fonts') + ':]';
            userfonts.forEach(function (userfont) {
                optionsString += ';' + userfont;
            });
        }
        enhanceTextInputToCombobox('.optionsFontFamily', optionsString, false, onChange);

        //Fill Selectbox for Export Selected Views
        $('#optionsBackupRestoreExportViewsSelectedSelection')
            .empty()
            .append('<option disabled selected value>' + _('Select view') + '</option>');
        views.forEach(function (element, index) {
            $('#optionsBackupRestoreExportViewsSelectedSelection').append(
                "<option value='" + index + "'>" + element.commonName + '</option>',
            );
        });
        $('#optionsBackupRestoreExportViewsSelectedSelection').select();
    }

    //Fill Combobox for ChangeDeviceOptions with deviceOptions
    var deviceOptions = {};
    var optionsString = '';
    var actualSection = '';
    for (iQontrolRole in iQontrolRoles) {
        for (iQontrolRoleOption in iQontrolRoles[iQontrolRole].options) {
            if (iQontrolRoles[iQontrolRole].options[iQontrolRoleOption].type == 'section') {
                actualSection = iQontrolRoles[iQontrolRole].options[iQontrolRoleOption].name;
                if (typeof deviceOptions[actualSection] == udef) deviceOptions[actualSection] = [];
            } else {
                deviceOptions[actualSection].push(
                    iQontrolRoleOption +
                        '/' +
                        _(iQontrolRoles[iQontrolRole].options[iQontrolRoleOption].name).replace(/\//g, '\\'),
                );
            }
        }
    }
    for (section of Object.keys(deviceOptions).sort()) {
        optionsString += ';[' + _(section) + ']';
        deviceOptions[section] = removeDuplicates(deviceOptions[section], '/');
        optionsString += ';' + deviceOptions[section].join(';');
    }
    enhanceTextInputToCombobox('#optionsChangeDeviceOptionsSourceOption', optionsString, false);

    //Fill Combobox for ChangeDeviceStates with deviceStates
    var deviceStates = [];
    for (iQontrolRole in iQontrolRoles) {
        for (iQontrolRoleState in iQontrolRoles[iQontrolRole].states) {
            deviceStates.push(iQontrolRoles[iQontrolRole].states[iQontrolRoleState]);
        }
    }
    deviceStates = removeDuplicates(deviceStates).sort();
    $('.optionsChangeDeviceOptionsStates').html('');
    for (deviceState in deviceStates) {
        $('.optionsChangeDeviceOptionsStates').append(
            "<option value='" + deviceStates[deviceState] + "'>" + deviceStates[deviceState] + '</select>',
        );
    }
    $('select.optionsChangeDeviceOptionsStates').select();

    //Add function to showChanges-Buttons
    $('.optionsChangeDeviceOptionsShowChanges').on('click', function () {
        var that = this;
        initDialog(
            'dialogGeneric',
            function () {},
            function () {
                //init dialog function
                $('#dialogGenericTitle').html(_('Matches') + ':');
                $('#dialogGenericContent').html($(that).data('changes-list'));
            },
        );
    });

    //ChangeDeviceOptionsIcons
    $('.optionsChangeDeviceOptionsIcons').on('change', function () {
        var result = optionsChangeDeviceOptionsIcons(
            $('#optionsChangeDeviceOptionsIconsSource').val(),
            $('#optionsChangeDeviceOptionsIconsDestination').val(),
            $('#optionsChangeDeviceOptionsIconsFilterRoles').val(),
            $('#optionsChangeDeviceOptionsIconsFilterDevices').val(),
            'countOnly',
        );
        $('#optionsChangeDeviceOptionsIconsExecuteCount').html(
            '&nbsp;(' + result.changeCount + ' ' + _('matches') + ')',
        );
        if (
            result.changeCount > 0 &&
            $('#optionsChangeDeviceOptionsIconsSource').val() != $('#optionsChangeDeviceOptionsIconsDestination').val()
        ) {
            $('#optionsChangeDeviceOptionsIconsExecute').removeClass('disabled');
            $('#optionsChangeDeviceOptionsIconsShowChanges')
                .removeClass('disabled')
                .data('changes-list', '<ul><li>' + result.changeList.join('</li><li>') + '</li></ul>');
        } else {
            $('#optionsChangeDeviceOptionsIconsExecute').addClass('disabled');
            $('#optionsChangeDeviceOptionsIconsShowChanges').addClass('disabled');
        }
    });
    $('#optionsChangeDeviceOptionsIconsExecute').on('click', function () {
        optionsChangeDeviceOptionsIcons(
            $('#optionsChangeDeviceOptionsIconsSource').val(),
            $('#optionsChangeDeviceOptionsIconsDestination').val(),
            $('#optionsChangeDeviceOptionsIconsFilterRoles').val(),
            $('#optionsChangeDeviceOptionsIconsFilterDevices').val(),
            false,
        );
        $('#optionsChangeDeviceOptionsIconsSource').trigger('change');
    });
    function optionsChangeDeviceOptionsIcons(source, destination, filterRoles, filterDevices, countOnly, quiet) {
        var changeCount = 0;
        var changeList = [];
        if ((quiet || countOnly || confirm(_('Really change all Icons?'))) && typeof views != udef)
            views.forEach(function (view) {
                var viewName = view.commonName;
                if (typeof view.devices != udef)
                    view.devices.forEach(function (device) {
                        if (
                            filterDevices == '' ||
                            filterDevices.indexOf('[' + viewName + ']' + device.commonName) > -1
                        ) {
                            var role = device.commonRole || '';
                            if (filterRoles == '' || filterRoles.indexOf(role) > -1) {
                                if (iQontrolRoles[role] && iQontrolRoles[role].options)
                                    for (roleOption in iQontrolRoles[role].options) {
                                        if (iQontrolRoles[role].options[roleOption].type == 'icon') {
                                            var deviceOptionIndex =
                                                device.options &&
                                                device.options.findIndex(function (option) {
                                                    return option.option == roleOption;
                                                });
                                            if (deviceOptionIndex > -1) {
                                                //option exists
                                                var option = device.options[deviceOptionIndex];
                                            } else {
                                                var option = {
                                                    //take default from iQontrolRoles
                                                    option: roleOption,
                                                    type: iQontrolRoles[role].options[roleOption].type,
                                                    value: iQontrolRoles[role].options[roleOption].default,
                                                };
                                            }
                                            //										|| (option.value == "" && ("./images/icons/" + iQontrolRoles[role].options[roleOption].defaultIcons.split(';')[0]) == source)

                                            if (
                                                option &&
                                                (option.value == source ||
                                                    (option.value == '' &&
                                                        ((optionsLayoutDefaultIcons[role] &&
                                                            optionsLayoutDefaultIcons[role][roleOption]) ||
                                                            (optionsLayoutDefaultIconsStandard[role] &&
                                                                optionsLayoutDefaultIconsStandard[role][roleOption]) ||
                                                            udef) == source) ||
                                                    (option.value == '' &&
                                                        iQontrolRoles[role].options[roleOption].default == source) ||
                                                    (source == '' &&
                                                        option.value ==
                                                            iQontrolRoles[role].options[roleOption].default))
                                            ) {
                                                changeCount++;
                                                changeList.push(viewName + ' - ' + device.commonName);
                                                if (!countOnly) {
                                                    console.log('CHANGE SETTING');
                                                    option.value = destination;
                                                    if (typeof device.options == udef) device.options = [];
                                                    if (!(deviceOptionIndex > -1)) device.options.push(option);
                                                }
                                            }
                                        }
                                    }
                            }
                        }
                    });
            });
        if (!countOnly && changeCount > 0) {
            alert(_("%s icons have been exchanged. Don't forget to save your changes!", changeCount));
            onChange();
        }
        return { changeCount: changeCount, changeList: changeList };
    }

    //ChangeDeviceOptions
    $('#optionsChangeDeviceOptionsSourceOption').on('change', function () {
        //Fill Comboboxes with settings
        var settings = [];
        var userSettings = [];
        for (iQontrolRole in iQontrolRoles) {
            for (iQontrolRoleOption in iQontrolRoles[iQontrolRole].options) {
                if (iQontrolRoleOption == $('#optionsChangeDeviceOptionsSourceOption').val()) {
                    switch (iQontrolRoles[iQontrolRole].options[iQontrolRoleOption].type) {
                        case 'icon':
                            settings.push('/' + _('default'));
                            settings.push('*/' + _('all'));
                            settings.push('[' + _('Inbuilt Icons') + ':]');
                            inbuiltIcons.forEach(function (inbuiltIcon) {
                                if (inbuiltIcon != '') {
                                    settings.push(
                                        inbuiltIcon.replace(/\//g, '\\') +
                                            '/' +
                                            inbuiltIcon.replace(/\//g, '\\') +
                                            '/' +
                                            (previewLink + inbuiltIcon).replace(/\//g, '\\'),
                                    );
                                }
                            });
                            var imagenames = [];
                            imagesDirs.forEach(function (imagesDir) {
                                if (
                                    imagesDir.dirname.indexOf('/usericons') == 0 &&
                                    imagesDir.files &&
                                    imagesDir.files.length > 0
                                ) {
                                    imagenames.push('[' + imagesDir.dirnameBS + ':]');
                                    imagesDir.files.forEach(function (file) {
                                        if (
                                            file.filenameBS.toLowerCase().endsWith('.png') ||
                                            file.filenameBS.toLowerCase().endsWith('.jpeg') ||
                                            file.filenameBS.toLowerCase().endsWith('.jpg') ||
                                            file.filenameBS.toLowerCase().endsWith('.gif') ||
                                            file.filenameBS.toLowerCase().endsWith('.svg') ||
                                            file.filenameBS.toLowerCase().endsWith('.svg+xml')
                                        ) {
                                            imagenames.push(
                                                '.\\..' +
                                                    userfilesImagePathBS +
                                                    file.filenameBS +
                                                    '/' +
                                                    file.filenameBS +
                                                    '/' +
                                                    (previewLink.replace(/\//g, '\\') +
                                                        '.\\..' +
                                                        userfilesImagePathBS +
                                                        file.filenameBS),
                                            );
                                        }
                                    });
                                }
                            });
                            if (imagenames.length > 0) {
                                settings.push('[' + _('User Icons') + ':]');
                                settings = settings.concat(imagenames);
                            }
                            break;

                        case 'checkbox':
                            settings.push('/' + _('default'));
                            settings.push('*/' + _('all'));
                            settings.push('true/' + _('true'));
                            settings.push('false/' + _('false'));
                            break;

                        case 'select':
                            settings.push('/' + _('default'));
                            settings.push('*/' + _('all'));
                            iQontrolRoles[iQontrolRole].options[iQontrolRoleOption].selectOptions
                                .split(';')
                                .forEach(function (setting) {
                                    settings.push(
                                        setting.split('/')[0] +
                                            '/' +
                                            _(setting.split('/')[1] || setting.split('/')[1] || '').replace(
                                                /\//g,
                                                '\\',
                                            ),
                                    );
                                });
                            break;

                        default:
                            settings.push('/' + _('default'));
                            settings.push('*/' + _('all'));
                            break;
                    }
                    settings = removeDuplicates(settings, '/');
                    if (typeof views != udef)
                        views.forEach(function (view) {
                            if (typeof view.devices != udef)
                                view.devices.forEach(function (device) {
                                    var role = device.commonRole || '';
                                    if (typeof device.options != udef)
                                        device.options.forEach(function (option) {
                                            if (option.option == iQontrolRoleOption && option.value != '') {
                                                switch (option.type) {
                                                    case 'icon':
                                                        userSettings.push(
                                                            option.value.replace(/\//g, '\\') +
                                                                '/' +
                                                                option.value.replace(/\//g, '\\') +
                                                                '/' +
                                                                (previewLink + '/' + option.value).replace(/\//g, '\\'),
                                                        );
                                                        break;

                                                    case 'checkbox':
                                                    case 'select':
                                                        break;

                                                    default:
                                                        userSettings.push(
                                                            option.value.replace(/\//g, '\\') +
                                                                '/' +
                                                                _(option.value).replace(/\//g, '\\'),
                                                        );
                                                        break;
                                                }
                                            }
                                        });
                                });
                        });
                }
            }
        }
        if (userSettings.length > 0) {
            userSettings = removeDuplicates(userSettings, '/');
            settings.push('[' + _('User Settings') + ':]');
            settings = settings.concat(userSettings);
        }
        $('#optionsChangeDeviceOptionsSourceValue').val('');
        $('#optionsChangeDeviceOptionsDestinationValue').val('');
        enhanceTextInputToCombobox('#optionsChangeDeviceOptionsSourceValue', settings.join(';'), false);
        enhanceTextInputToCombobox('#optionsChangeDeviceOptionsDestinationValue', settings.join(';'), false);
        $('#optionsChangeDeviceOptionsDestinationValue').siblings('ul').find('li[data-value="*"]').remove();
    });
    $('.optionsChangeDeviceOptions').on('change', function () {
        var result = optionsChangeDeviceOptions(
            $('#optionsChangeDeviceOptionsSourceOption').val(),
            $('#optionsChangeDeviceOptionsSourceValue').val(),
            $('#optionsChangeDeviceOptionsDestinationValue').val(),
            $('#optionsChangeDeviceOptionsFilterRoles').val(),
            $('#optionsChangeDeviceOptionsFilterDevices').val(),
            'countOnly',
        );
        $('#optionsChangeDeviceOptionsExecuteCount').html('&nbsp;(' + result.changeCount + ' ' + _('matches') + ')');
        if (
            result.changeCount > 0 &&
            $('#optionsChangeDeviceOptionsSourceOption').val() &&
            $('#optionsChangeDeviceOptionsSourceValue').val() != $('#optionsChangeDeviceOptionsDestinationValue').val()
        ) {
            $('#optionsChangeDeviceOptionsExecute').removeClass('disabled');
            $('#optionsChangeDeviceOptionsShowChanges')
                .removeClass('disabled')
                .data('changes-list', '<ul><li>' + result.changeList.join('</li><li>') + '</li></ul>');
        } else {
            $('#optionsChangeDeviceOptionsExecute').addClass('disabled');
            $('#optionsChangeDeviceOptionsShowChanges').addClass('disabled');
        }
    });
    $('#optionsChangeDeviceOptionsExecute').on('click', function () {
        optionsChangeDeviceOptions(
            $('#optionsChangeDeviceOptionsSourceOption').val(),
            $('#optionsChangeDeviceOptionsSourceValue').val(),
            $('#optionsChangeDeviceOptionsDestinationValue').val(),
            $('#optionsChangeDeviceOptionsFilterRoles').val(),
            $('#optionsChangeDeviceOptionsFilterDevices').val(),
            false,
        );
        $('#optionsChangeDeviceOptionsSourceValue').trigger('change');
    });
    function optionsChangeDeviceOptions(
        sourceOption,
        sourceValue,
        destinationValue,
        filterRoles,
        filterDevices,
        countOnly,
        quiet,
    ) {
        var changeCount = 0;
        var changeList = [];
        if ((quiet || countOnly || confirm(_('Really change all Settings?'))) && typeof views != udef)
            views.forEach(function (view) {
                var viewName = view.commonName;
                if (typeof view.devices != udef)
                    view.devices.forEach(function (device) {
                        if (
                            filterDevices == '' ||
                            filterDevices.indexOf('[' + viewName + ']' + device.commonName) > -1
                        ) {
                            var role = device.commonRole || '';
                            if (filterRoles == '' || filterRoles.indexOf(role) > -1) {
                                var deviceOptionIndex =
                                    device.options &&
                                    device.options.findIndex(function (option) {
                                        return option.option == sourceOption;
                                    });
                                if (deviceOptionIndex > -1) {
                                    //option exists
                                    var option = device.options[deviceOptionIndex];
                                } else if (
                                    iQontrolRoles[role] &&
                                    iQontrolRoles[role].options &&
                                    typeof iQontrolRoles[role].options[sourceOption] != udef
                                ) {
                                    var option = {
                                        //take default from iQontrolRoles
                                        option: sourceOption,
                                        type: iQontrolRoles[role].options[sourceOption].type,
                                        value: iQontrolRoles[role].options[sourceOption].default,
                                    };
                                } else {
                                    //option not found
                                    var option = null;
                                }
                                if (
                                    option &&
                                    (option.value == sourceValue ||
                                        (option.value == '' &&
                                            iQontrolRoles[role].options[sourceOption].default == sourceValue) ||
                                        (sourceValue == '' &&
                                            option.value == iQontrolRoles[role].options[sourceOption].default) ||
                                        sourceValue == '*')
                                ) {
                                    changeCount++;
                                    changeList.push(viewName + ' - ' + device.commonName);
                                    if (!countOnly) {
                                        console.log('CHANGE SETTING');
                                        option.value = destinationValue;
                                        if (typeof device.options == udef) device.options = [];
                                        if (!(deviceOptionIndex > -1)) device.options.push(option);
                                    }
                                }
                            }
                        }
                    });
            });
        if (!countOnly && changeCount > 0) {
            alert(_("%s settings have been exchanged. Don't forget to save your changes!", changeCount));
            onChange();
        }
        return { changeCount: changeCount, changeList: changeList };
    }

    //ChangeDeviceStates
    $('.optionsChangeDeviceStatesEditButton.inputEdit').on('click', function () {
        $('#dialogSelectId').data('selectidfor', $(this).data('selectidfor'));
        initSelectId(function (sid) {
            sid.selectId(
                'show',
                $('#' + $('#dialogSelectId').data('selectidfor')).val(),
                { type: 'state' },
                function (newId) {
                    if (newId) {
                        $('#' + $('#dialogSelectId').data('selectidfor'))
                            .val(newId)
                            .trigger('change');
                    }
                },
            );
        });
    });
    $('.optionsChangeDeviceStates').on('change input', function () {
        var result = optionsChangeDeviceStates(
            $('#optionsChangeDeviceStatesSourceValue').val(),
            $('#optionsChangeDeviceStatesDestinationValue').val(),
            $('#optionsChangeDeviceStatesDestinationCommonRole').val(),
            $('#optionsChangeDeviceStatesFilterStates').val(),
            $('#optionsChangeDeviceStatesFilterRoles').val(),
            $('#optionsChangeDeviceStatesFilterDevices').val(),
            'countOnly',
        );
        $('#optionsChangeDeviceStatesExecuteCount').html('&nbsp;(' + result.changeCount + ' ' + _('matches') + ')');
        if (
            result.changeCount > 0 &&
            ($('#optionsChangeDeviceStatesSourceValue').val() !=
                $('#optionsChangeDeviceStatesDestinationValue').val() ||
                $('#optionsChangeDeviceStatesDestinationCommonRole').val() != '*') &&
            ($('#optionsChangeDeviceStatesDestinationValue').val() != '*' ||
                $('#optionsChangeDeviceStatesDestinationCommonRole').val() != '*')
        ) {
            $('#optionsChangeDeviceStatesExecute').removeClass('disabled');
            $('#optionsChangeDeviceStatesShowChanges')
                .removeClass('disabled')
                .data('changes-list', '<ul><li>' + result.changeList.join('</li><li>') + '</li></ul>');
        } else {
            $('#optionsChangeDeviceStatesExecute').addClass('disabled');
            $('#optionsChangeDeviceStatesShowChanges').addClass('disabled');
        }
    });
    $('#optionsChangeDeviceStatesExecute').on('click', function () {
        optionsChangeDeviceStates(
            $('#optionsChangeDeviceStatesSourceValue').val(),
            $('#optionsChangeDeviceStatesDestinationValue').val(),
            $('#optionsChangeDeviceStatesDestinationCommonRole').val(),
            $('#optionsChangeDeviceStatesFilterStates').val(),
            $('#optionsChangeDeviceStatesFilterRoles').val(),
            $('#optionsChangeDeviceStatesFilterDevices').val(),
            false,
        );
        $('#optionsChangeDeviceStatesSourceValue').trigger('change');
    });
    function optionsChangeDeviceStates(
        sourceValue,
        destinationValue,
        destinationCommonRole,
        filterStates,
        filterRoles,
        filterDevices,
        countOnly,
        quiet,
    ) {
        var changeCount = 0;
        var changeList = [];
        if ((quiet || countOnly || confirm(_('Really change all States?'))) && typeof views != udef)
            views.forEach(function (view) {
                var viewName = view.commonName;
                if (typeof view.devices != udef)
                    view.devices.forEach(function (device) {
                        if (
                            filterDevices == '' ||
                            filterDevices.indexOf('[' + viewName + ']' + device.commonName) > -1
                        ) {
                            var role = device.commonRole || '';
                            if (filterRoles == '' || filterRoles.indexOf(role) > -1) {
                                if (iQontrolRoles[role] && iQontrolRoles[role].states)
                                    iQontrolRoles[role].states.forEach(function (roleState) {
                                        if (filterStates.length == 0 || filterStates.indexOf(roleState) != -1) {
                                            var deviceStateIndex =
                                                device.states &&
                                                device.states.findIndex(function (state) {
                                                    return state.state == roleState;
                                                });
                                            if (deviceStateIndex > -1) {
                                                //state exists
                                                var deviceState = device.states[deviceStateIndex];
                                            } else {
                                                //take default from iQontrolRoles
                                                switch (roleState) {
                                                    case 'VALVE_STATES':
                                                    case 'INFO_A':
                                                    case 'INFO_B':
                                                    case 'ADDITIONAL_CONTROLS':
                                                    case 'ADDITIONAL_INFO':
                                                    case 'REMOTE_CHANNELS':
                                                    case 'REMOTE_ADDITIONAL_BUTTONS':
                                                        var commonRole = 'array';
                                                        var value = [];
                                                        break;

                                                    case 'SET_VALUE':
                                                    case 'OFF_SET_VALUE':
                                                    case 'UP_SET_VALUE':
                                                    case 'DOWN_SET_VALUE':
                                                    case 'FAVORITE_POSITION_SET_VALUE':
                                                    case 'URL':
                                                    case 'HTML':
                                                    case 'BACKGROUND_VIEW':
                                                    case 'BACKGROUND_URL':
                                                    case 'BACKGROUND_HTML':
                                                    case 'BADGE_COLOR':
                                                    case 'OVERLAY_INACTIVE_COLOR':
                                                    case 'OVERLAY_ACTIVE_COLOR':
                                                    case 'GLOW_INACTIVE_COLOR':
                                                    case 'GLOW_ACTIVE_COLOR':
                                                        var commonRole = 'const';
                                                        var value = '';
                                                        break;

                                                    default:
                                                        var commonRole = 'linkedState';
                                                        var value = '';
                                                }
                                                var deviceState = {
                                                    state: roleState,
                                                    commonRole: commonRole,
                                                    value: value,
                                                };
                                            }
                                            if (deviceState) {
                                                if (deviceState.commonRole && deviceState.commonRole == 'array') {
                                                    var stateList = tryParseJSON(deviceState.value);
                                                    if (Array.isArray(stateList) == false) stateList = [];
                                                } else {
                                                    var stateList = [deviceState];
                                                }
                                            }
                                            stateList.forEach(function (state) {
                                                if (
                                                    state &&
                                                    ((sourceValue != '' && state.value.indexOf(sourceValue) != -1) ||
                                                        (sourceValue == '' && state.value == '') ||
                                                        sourceValue == '*')
                                                ) {
                                                    changeCount++;
                                                    changeList.push(
                                                        viewName +
                                                            ' - ' +
                                                            device.commonName +
                                                            ' - ' +
                                                            roleState +
                                                            ' (' +
                                                            state.value +
                                                            ')',
                                                    );
                                                    if (!countOnly) {
                                                        console.log('CHANGE STATE');
                                                        if (destinationValue != '*') {
                                                            if (sourceValue == '*') {
                                                                state.value = destinationValue;
                                                            } else {
                                                                state.value = state.value.replace(
                                                                    sourceValue,
                                                                    destinationValue,
                                                                );
                                                            }
                                                        }
                                                        if (
                                                            deviceState.commonRole != 'array' &&
                                                            destinationCommonRole != '*'
                                                        ) {
                                                            state.commonRole = destinationCommonRole;
                                                        }
                                                        if (typeof device.states == udef) device.states = [];
                                                        if (!(deviceStateIndex > -1)) device.states.push(state);
                                                    }
                                                }
                                            });
                                            if (deviceState.commonRole == 'array') {
                                                deviceState.value = JSON.stringify(stateList);
                                            }
                                        }
                                    });
                            }
                        }
                    });
            });
        if (!countOnly && changeCount > 0) {
            alert(_("%s states have been exchanged. Don't forget to save your changes!", changeCount));
            onChange();
        }
        return { changeCount: changeCount, changeList: changeList };
    }

    //Activate demotiles
    $('input.affectsDemotile')
        .on('change changeColor', function () {
            var id = $(this).prop('id');
            var val = $(this).val();
            var placeholder = $(this).prop('placeholder');
            if (val == '' && placeholder) val = placeholder;
            switch (id) {
                case 'optionsLayoutViewDeviceColor':
                    $('.demotile.inactive.nomouseover.background').css('background-color', val);
                    break;

                case 'optionsLayoutViewDeviceHoverColor':
                    $('.demotile.inactive.mouseover.background').css('background-color', val);
                    break;

                case 'optionsLayoutViewDeviceOpacity':
                    $('.demotile.inactive.nomouseover.background').css('opacity', val);
                    break;

                case 'optionsLayoutViewDeviceHoverOpacity':
                    $('.demotile.inactive.mouseover.background').css('opacity', val);
                    break;

                case 'optionsLayoutViewDeviceInactiveColor':
                    $('.demotile.inactive.nomouseover.overlay').css('background-color', val);
                    break;

                case 'optionsLayoutViewDeviceInactiveHoverColor':
                    $('.demotile.inactive.mouseover.overlay').css('background-color', val);
                    break;

                case 'optionsLayoutViewDeviceInactiveOpacity':
                    $('.demotile.inactive.nomouseover.overlay').css('opacity', val);
                    break;

                case 'optionsLayoutViewDeviceInactiveHoverOpacity':
                    $('.demotile.inactive.mouseover.overlay').css('opacity', val);
                    break;

                case 'optionsLayoutViewActiveDeviceColor':
                    $('.demotile.active.nomouseover.background').css('background-color', val);
                    break;

                case 'optionsLayoutViewActiveDeviceHoverColor':
                    $('.demotile.active.mouseover.background').css('background-color', val);
                    break;

                case 'optionsLayoutViewActiveDeviceOpacity':
                    $('.demotile.active.nomouseover.background').css('opacity', val);
                    break;

                case 'optionsLayoutViewActiveDeviceHoverOpacity':
                    $('.demotile.active.mouseover.background').css('opacity', val);
                    break;

                case 'optionsLayoutViewDeviceActiveColor':
                    $('.demotile.active.nomouseover.overlay').css('background-color', val);
                    break;

                case 'optionsLayoutViewDeviceActiveHoverColor':
                    $('.demotile.active.mouseover.overlay').css('background-color', val);
                    break;

                case 'optionsLayoutViewDeviceActiveOpacity':
                    $('.demotile.active.nomouseover.overlay').css('opacity', val);
                    break;

                case 'optionsLayoutViewDeviceActiveHoverOpacity':
                    $('.demotile.active.mouseover.overlay').css('opacity', val);
                    break;
            }
        })
        .trigger('change');

    //Fill Selectbox for Default Icons Preset
    for (optionsLayoutDefaultIconsPreset in iconPresets) {
        $('#optionsLayoutDefaultIconsPreset').append(
            "<option value='" +
                optionsLayoutDefaultIconsPreset +
                "'>" +
                _(iconPresets[optionsLayoutDefaultIconsPreset].name) +
                '</option>',
        );
    }
    $('select.optionsLayoutDefaultIconsPreset').select();
    $('#optionsLayoutDefaultIconsPreset').on('change', function () {
        var presetNumber = parseInt($(this).val()) || 0;
        initDialog(
            'dialogOptionsLayoutDefaultIconsPresetChange',
            function () {
                //Save changes
                if (confirm(_('This will overwrite all icon settings. Are you shure?'))) {
                    if ($('#dialogOptionsLayoutDefaultIconsPresetChangeDefaultIcons').prop('checked')) {
                        //Change optionsLayoutDefaultIcons
                        for (role in optionsLayoutDefaultIcons) {
                            for (icon in optionsLayoutDefaultIcons[role]) {
                                iconEquivalent = optionsLayoutDefaultIconsPresetsFindIconEquivalent(
                                    optionsLayoutDefaultIcons[role][icon],
                                );
                                if (
                                    iconEquivalent &&
                                    $(
                                        '.dialogOptionsLayoutDefaultIconsPresetChangeListItem[data-iconEquivalent="' +
                                            iconEquivalent +
                                            '"]',
                                    ).prop('checked')
                                )
                                    optionsLayoutDefaultIcons[role][icon] = $(
                                        '.dialogOptionsLayoutDefaultIconsPresetChangeListItem[data-iconEquivalent="' +
                                            iconEquivalent +
                                            '"]',
                                    ).data('iconsrc');
                            }
                        }
                    }
                    if ($('#dialogOptionsLayoutDefaultIconsPresetChangeIconOptions').prop('checked')) {
                        //Change icons in device options
                        if (typeof views != udef)
                            views.forEach(function (view) {
                                if (typeof view.devices != udef)
                                    view.devices.forEach(function (device) {
                                        if (typeof device.options != udef)
                                            device.options.forEach(function (option) {
                                                if (option.type == 'icon' && option.value) {
                                                    iconEquivalent = optionsLayoutDefaultIconsPresetsFindIconEquivalent(
                                                        option.value,
                                                    );
                                                    if (
                                                        iconEquivalent &&
                                                        $(
                                                            '.dialogOptionsLayoutDefaultIconsPresetChangeListItem[data-iconEquivalent="' +
                                                                iconEquivalent +
                                                                '"]',
                                                        ).prop('checked')
                                                    )
                                                        option.value = $(
                                                            '.dialogOptionsLayoutDefaultIconsPresetChangeListItem[data-iconEquivalent="' +
                                                                iconEquivalent +
                                                                '"]',
                                                        ).data('iconsrc');
                                                }
                                            });
                                    });
                            });
                    }
                    optionsLayoutDefaultIconsSetValues();
                    onChange();
                }
                function optionsLayoutDefaultIconsPresetsFindIconEquivalent(src) {
                    for (iconPreset in iconPresets) {
                        for (iconEquivalent in iconPresets[iconPreset].iconEquivalents) {
                            if (iconPresets[iconPreset].iconEquivalents[iconEquivalent][0] == src)
                                return iconEquivalent;
                        }
                    }
                    for (iconPreset in iconPresets) {
                        for (iconEquivalent in iconPresets[iconPreset].iconEquivalents) {
                            for (i in iconPresets[iconPreset].iconEquivalents[iconEquivalent]) {
                                if (iconPresets[iconPreset].iconEquivalents[iconEquivalent][i] == src)
                                    return iconEquivalent;
                            }
                        }
                    }
                    return false;
                }
            },
            function () {
                //init dialog function
                $('#dialogOptionsLayoutDefaultIconsPresetChangePresetName').html(iconPresets[presetNumber].name);
                $('#dialogOptionsLayoutDefaultIconsPresetChangePresetDescription').html(
                    iconPresets[presetNumber].description,
                );
                $('#dialogOptionsLayoutDefaultIconsPresetChangeList').empty();
                for (iconEquivalent in iconPresets[presetNumber].iconEquivalents) {
                    if (iconPresets[presetNumber].iconEquivalents[iconEquivalent].length)
                        $('#dialogOptionsLayoutDefaultIconsPresetChangeList').append(
                            "<p><label><input class='dialogOptionsLayoutDefaultIconsPresetChangeListItem' type='checkbox' checked='checked' data-iconEquivalent='" +
                                iconEquivalent +
                                "' data-iconsrc='" +
                                iconPresets[presetNumber].iconEquivalents[iconEquivalent][0] +
                                "'><span>" +
                                iconEquivalent +
                                ":&nbsp;<img src='" +
                                previewLink +
                                '/' +
                                iconPresets[presetNumber].iconEquivalents[iconEquivalent][0] +
                                "' style='width:24px; height:24px;'></span></label></p>",
                        );
                }
                $('#dialogOptionsLayoutDefaultIconsPresetChangeDefaultIcons').prop('checked', 'checked');
                $('#dialogOptionsLayoutDefaultIconsPresetChangeIconOptions').prop('checked', 'checked');
            },
        );
        $('#optionsLayoutDefaultIconsPreset').val('');
    });

    //Set value of Comboboxes for DefaultIcons
    function optionsLayoutDefaultIconsSetValues() {
        $('.optionsLayoutDefaultIcons').off('change', saveOptionsLayoutDefaultIcons);
        for (role in optionsLayoutDefaultIconsStandard) {
            for (icon in optionsLayoutDefaultIconsStandard[role]) {
                $('#optionsLayoutDefaultIcons_' + role + '_' + icon)
                    .val(
                        (optionsLayoutDefaultIcons[role] && optionsLayoutDefaultIcons[role][icon]) ||
                            (optionsLayoutDefaultIconsStandard[role] &&
                                optionsLayoutDefaultIconsStandard[role][icon]) ||
                            '',
                    )
                    .trigger('change');
            }
        }
        $('.optionsLayoutDefaultIcons').on('change', saveOptionsLayoutDefaultIcons);
        function saveOptionsLayoutDefaultIcons() {
            var role = $(this).data('role');
            var icon = $(this).data('icon');
            var val = $(this).val();
            if (!optionsLayoutDefaultIcons) optionsLayoutDefaultIcons = {};
            if (!optionsLayoutDefaultIcons[role]) optionsLayoutDefaultIcons[role] = {};
            if (val && val != '') {
                optionsLayoutDefaultIcons[role][icon] = $(this).val();
            } else {
                $(this)
                    .val(
                        (optionsLayoutDefaultIconsStandard[role] && optionsLayoutDefaultIconsStandard[role][icon]) ||
                            '',
                    )
                    .trigger('change');
            }
            onChange();
        }
    }

    //Set value of Comboboxes for DefaultSymbols
    function optionsLayoutDefaultSymbolsSetValues() {
        $('.optionsLayoutDefaultSymbols').off('change', saveOptionsLayoutDefaultSymbols);
        for (role in optionsLayoutDefaultSymbolsStandard) {
            for (icon in optionsLayoutDefaultSymbolsStandard[role]) {
                $('#optionsLayoutDefaultSymbols_' + role + '_' + icon)
                    .val(
                        (optionsLayoutDefaultSymbols[role] && optionsLayoutDefaultSymbols[role][icon]) ||
                            (optionsLayoutDefaultSymbolsStandard[role] &&
                                optionsLayoutDefaultSymbolsStandard[role][icon]) ||
                            '',
                    )
                    .trigger('change');
            }
        }
        $('.optionsLayoutDefaultSymbols').on('change', saveOptionsLayoutDefaultSymbols);
        function saveOptionsLayoutDefaultSymbols() {
            var role = $(this).data('role');
            var icon = $(this).data('icon');
            var val = $(this).val();
            if (!optionsLayoutDefaultSymbols) optionsLayoutDefaultSymbols = {};
            if (!optionsLayoutDefaultSymbols[role]) optionsLayoutDefaultSymbols[role] = {};
            if (val && val != '') {
                optionsLayoutDefaultSymbols[role][icon] = $(this).val();
            } else {
                $(this)
                    .val(
                        (optionsLayoutDefaultSymbolsStandard[role] &&
                            optionsLayoutDefaultSymbolsStandard[role][icon]) ||
                            '',
                    )
                    .trigger('change');
            }
            onChange();
        }
    }

    //Passphrase
    socket.emit('getState', 'iqontrol.' + instance + '.passphrase', function (err, obj) {
        if (!err && obj && obj.val) {
            passphrase = obj.val;
            $('#optionsPassphrase').val(passphrase);
        }
        $('#optionsPassphrase').on('change', onChange);
    });

    //Passphrase Autogenerate
    $('#optionsPassphraseAutogenerate').on('click', function () {
        if ($('#optionsPassphrase').val() == '' || confirm(_('Create a new random passphrase?'))) {
            $('#optionsPassphrase').val(
                (Math.random() + 1).toString(36).substr(2, 8) + (Math.random() + 1).toString(36).substr(2, 8),
            );
        }
    });

    //Export All Views
    $('#optionsBackupRestoreExportViewsAll').on('click', function () {
        saveStringAsLocalFile(JSON.stringify(views), 'charset=utf-8', 'text/json', 'views.json', true);
    });

    //Export Selected Views
    $('#optionsBackupRestoreExportViewsSelectedSelection').on('change', function () {
        var selected = $('#optionsBackupRestoreExportViewsSelectedSelection').val() || [];
        if (selected.length) {
            $('#optionsBackupRestoreExportViewsSelected').removeClass('disabled');
        } else {
            $('#optionsBackupRestoreExportViewsSelected').addClass('disabled');
        }
    });
    $('#optionsBackupRestoreExportViewsSelected').on('click', function () {
        var selected = $('#optionsBackupRestoreExportViewsSelectedSelection').val() || [];
        if (selected.length) {
            var selectedViews = [];
            selected.forEach(function (index) {
                selectedViews.push(views[index]);
                selectedViews[selectedViews.length - 1].devices.forEach(function (device) {
                    //Remove symbolic links
                    if (device.symbolicLinkFrom) delete device.symbolicLinkFrom;
                });
            });
            saveStringAsLocalFile(
                JSON.stringify(selectedViews),
                'charset=utf-8',
                'text/json',
                'selected_views.json',
                true,
            );
        }
    });

    //Export Toolbar
    $('#optionsBackupRestoreExportToolbar').on('click', function () {
        saveStringAsLocalFile(JSON.stringify(toolbar), 'charset=utf-8', 'text/json', 'toolbar.json', true);
    });

    //Export Panel
    $('#optionsBackupRestoreExportPanel').on('click', function () {
        //Select elements with class=value and build settings object
        var options = {};
        $('.value').each(function () {
            var $this = $(this);
            if ($this.attr('id').indexOf('panel') == 0) {
                //Include only panel settings
                if ($this.attr('type') === 'checkbox') {
                    options[$this.attr('id')] = $this.prop('checked');
                } else {
                    options[$this.attr('id')] = $this.val();
                }
            }
        });
        saveStringAsLocalFile(JSON.stringify(options), 'charset=utf-8', 'text/json', 'panel.json', true);
    });

    //Export Lists
    $('#optionsBackupRestoreExportLists').on('click', function () {
        saveStringAsLocalFile(JSON.stringify(lists), 'charset=utf-8', 'text/json', 'lists.json', true);
    });

    //Export Options
    $('#optionsBackupRestoreExportOptions').on('click', function () {
        //Select elements with class=value and build settings object
        var options = {};
        $('.value').each(function () {
            var $this = $(this);
            if ($this.attr('id').indexOf('panel') != 0) {
                //Exclude panel settings
                if ($this.attr('type') === 'checkbox') {
                    options[$this.attr('id')] = $this.prop('checked');
                } else {
                    options[$this.attr('id')] = $this.val();
                }
            }
        });
        options.optionsLayoutDefaultIcons = optionsLayoutDefaultIcons || {};
        options.optionsLayoutDefaultSymbols = optionsLayoutDefaultSymbols || {};
        saveStringAsLocalFile(JSON.stringify(options), 'charset=utf-8', 'text/json', 'options.json', true);
    });

    //Export Custom
    $('#optionsBackupRestoreExportCustoms').on('click', function () {
        var toDo = function () {
            var customs = [];
            for (objectId in iobrokerObjects) {
                if (
                    typeof iobrokerObjects[objectId].common != udef &&
                    typeof iobrokerObjects[objectId].common.custom != udef &&
                    typeof iobrokerObjects[objectId].common.custom[adapter + '.' + instance] != udef &&
                    iobrokerObjects[objectId].common.custom[adapter + '.' + instance] != ''
                )
                    customs.push({
                        id: objectId,
                        custom: iobrokerObjects[objectId].common.custom[adapter + '.' + instance],
                    });
            }
            saveStringAsLocalFile(JSON.stringify(customs), 'charset=utf-8', 'text/json', 'custom.json', true);
        };
        if (iobrokerObjectsReady) {
            toDo();
        } else {
            iobrokerObjectsReadyFunctions.push(toDo);
        }
    });

    //Export Everything (but userfiles)
    $('#optionsBackupRestoreExportEverything').on('click', function () {
        var toDo = function () {
            var obj = {};
            obj.views = views;
            obj.toolbar = toolbar;
            obj.lists = lists;
            //Select elements with class=value and build settings object
            var options = {};
            $('.value').each(function () {
                var $this = $(this);
                if ($this.attr('type') === 'checkbox') {
                    options[$this.attr('id')] = $this.prop('checked');
                } else {
                    options[$this.attr('id')] = $this.val();
                }
            });
            options.optionsLayoutDefaultIcons = optionsLayoutDefaultIcons || {};
            options.optionsLayoutDefaultSymbols = optionsLayoutDefaultSymbols || {};
            obj.options = options;
            var customs = [];
            for (objectId in iobrokerObjects) {
                if (
                    typeof iobrokerObjects[objectId].common != udef &&
                    typeof iobrokerObjects[objectId].common.custom != udef &&
                    typeof iobrokerObjects[objectId].common.custom[adapter + '.' + instance] != udef &&
                    iobrokerObjects[objectId].common.custom[adapter + '.' + instance] != ''
                )
                    customs.push({
                        id: objectId,
                        custom: iobrokerObjects[objectId].common.custom[adapter + '.' + instance],
                    });
            }
            obj.customs = customs;
            saveStringAsLocalFile(JSON.stringify(obj), 'charset=utf-8', 'text/json', 'everything.json', true);
        };
        if (iobrokerObjectsReady) {
            toDo();
        } else {
            iobrokerObjectsReadyFunctions.push(toDo);
        }
    });

    //Export Userfiles
    $('#optionsBackupRestoreExportUserfiles').on('click', function () {
        $('#optionsBackupRestoreExportUserfiles').addClass('disabled');
        $('#optionsBackupRestoreExportUserfilesIcon').text('hourglass_empty');
        $('#optionsBackupRestoreExportUserfilesProgress').show();
        if (confirm(_('Depending on the size it may take a while to create the zip file.'))) {
            readDirAsZip(userfilesImagePath + '/', function (err, data) {
                if (err) {
                    alert('Error: ' + err);
                } else if (data) {
                    saveStringAsLocalFile(data, 'base64', 'application/zip', 'userfiles.zip', true);
                } else {
                    alert('Error: no data received.');
                }
                $('#optionsBackupRestoreExportUserfilesIcon').text('file_download');
                $('#optionsBackupRestoreExportUserfiles').removeClass('disabled');
                $('#optionsBackupRestoreExportUserfilesProgress').hide();
            });
        } else {
            $('#optionsBackupRestoreExportUserfilesIcon').text('file_download');
            $('#optionsBackupRestoreExportUserfiles').removeClass('disabled');
            $('#optionsBackupRestoreExportUserfilesProgress').hide();
        }
    });

    //Import Views
    $('#optionsBackupRestoreImportViewsOverwrite, #optionsBackupRestoreImportViewsAppend').on('click', function () {
        var overwrite = $(this).data('overwrite') == true;
        loadLocalFileAsString('.json', function (result) {
            var resultObj = tryParseJSON(result);
            var resultObjValid = true;
            if (resultObj && typeof resultObj.forEach == 'function') {
                resultObj.forEach(function (entry, index) {
                    if (typeof entry.commonName == 'undefined') entry.commonName = 'View';
                    if (!overwrite) {
                        var viewNames = [];
                        views.forEach(function (view) {
                            if (view.commonName) viewNames.push(view.commonName);
                        });
                        var existingNameIndex = 0;
                        while (
                            viewNames.indexOf(entry.commonName + (existingNameIndex ? ' ' + existingNameIndex : '')) !=
                            -1
                        ) {
                            existingNameIndex++;
                        }
                        if (existingNameIndex) entry.commonName = entry.commonName + ' ' + existingNameIndex;
                    }
                    if (!overwrite && entry.devices)
                        entry.devices.forEach(function (device) {
                            //Remove symbolic links, if views are appended
                            if (device.symbolicLinkFrom) delete device.symbolicLinkFrom;
                        });
                });
            } else {
                resultObjValid = false;
            }
            if (resultObjValid) {
                if (overwrite) {
                    if (confirm(_('Really overwrite existing Settings?'))) {
                        views = resultObj;
                        alert(_('Settings imported.'));
                        onChange();
                    }
                } else {
                    views = views.concat(resultObj);
                    alert(_('Settings imported.'));
                    onChange();
                }
            } else {
                alert(_('Error: Invalid data.'));
            }
        });
    });

    //Import Toolbar
    $('#optionsBackupRestoreImportToolbarOverwrite, #optionsBackupRestoreImportToolbarAppend').on('click', function () {
        var overwrite = $(this).data('overwrite') == true;
        loadLocalFileAsString('.json', function (result) {
            var resultObj = tryParseJSON(result);
            var resultObjValid = true;
            if (resultObj && typeof resultObj.forEach == 'function') {
                resultObj.forEach(function (entry, index) {
                    if (typeof entry.nativeLinkedView == 'undefined') {
                        resultObjValid = false;
                    } else {
                        if (typeof entry.commonName == 'undefined') entry.commonName = result.nativeLinkedView;
                        if (typeof entry.nativeIcon == 'undefined') entry.nativeIcon = 'grid';
                    }
                });
            } else {
                resultObjValid = false;
            }
            if (resultObjValid) {
                if (overwrite) {
                    if (confirm(_('Really overwrite existing Settings?'))) {
                        toolbar = resultObj;
                        alert(_('Settings imported.'));
                        onChange();
                    }
                } else {
                    toolbar = toolbar.concat(resultObj);
                    alert(_('Settings imported.'));
                    onChange();
                }
            } else {
                alert(_('Error: Invalid data.'));
            }
        });
    });

    //Import Panel
    $('#optionsBackupRestoreImportPanel').on('click', function () {
        loadLocalFileAsString('.json', function (result) {
            var resultObj = tryParseJSON(result);
            var resultObjValid = true;
            if (!(resultObj && typeof resultObj == 'object' && typeof resultObj.forEach == udef)) {
                resultObjValid = false;
            }
            if (resultObjValid) {
                if (confirm(_('Really overwrite existing Settings?'))) {
                    //Select elements with id=key and class=value and insert value
                    $('.value').each(function () {
                        var $key = $(this);
                        var id = $key.attr('id');
                        if (id.indexOf('panel') == 0) {
                            //Include just panel settings
                            if ($key.attr('type') === 'checkbox') {
                                $key.prop('checked', resultObj[id]);
                            } else {
                                $key.val(resultObj[id]);
                            }
                        }
                    });
                    $('.MaterializeColorPicker').trigger('change');
                    alert(_('Settings imported.'));
                    onChange();
                }
            } else {
                alert(_('Error: Invalid data.'));
            }
        });
    });

    //Import Lists
    $('#optionsBackupRestoreImportListsOverwrite, #optionsBackupRestoreImportListsAppend').on('click', function () {
        var overwrite = $(this).data('overwrite') == true;
        loadLocalFileAsString('.json', function (result) {
            var resultObj = tryParseJSON(result);
            var resultObjValid = true;
            if (!(resultObj && typeof resultObj == 'object' && typeof resultObj.forEach == 'function')) {
                resultObjValid = false;
            }
            if (resultObjValid) {
                if (overwrite) {
                    if (confirm(_('Really overwrite existing Settings?'))) {
                        lists = resultObj;
                        alert(_('Settings imported.'));
                    }
                } else {
                    lists = lists.concat(resultObj);
                    alert(_('Settings imported.'));
                }
                if (listsCheckUnallowed())
                    alert(
                        _(
                            'Names of lists must be unique. However, importing has created duplicates. Please check the settings!',
                        ),
                    );
                onChange();
            } else {
                alert(_('Error: Invalid data.'));
            }
        });
    });

    //Import Options
    $('#optionsBackupRestoreImportOptions').on('click', function () {
        loadLocalFileAsString('.json', function (result) {
            var resultObj = tryParseJSON(result);
            var resultObjValid = true;
            if (!(resultObj && typeof resultObj == 'object' && typeof resultObj.forEach == udef)) {
                resultObjValid = false;
            }
            if (resultObjValid) {
                if (confirm(_('Really overwrite existing Settings?'))) {
                    //Select elements with id=key and class=value and insert value
                    $('.value').each(function () {
                        var $key = $(this);
                        var id = $key.attr('id');
                        if (id.indexOf('panel') != 0) {
                            //Exclude panel settings
                            if ($key.attr('type') === 'checkbox') {
                                $key.prop('checked', resultObj[id]);
                            } else {
                                $key.val(resultObj[id]);
                            }
                        }
                    });
                    $('.MaterializeColorPicker').trigger('change');
                    optionsLayoutDefaultIcons = resultObj['optionsLayoutDefaultIcons'] || {};
                    optionsLayoutDefaultIconsSetValues();
                    optionsLayoutDefaultSymbols = resultObj['optionsLayoutDefaultSymbols'] || {};
                    optionsLayoutDefaultSymbolsSetValues();
                    alert(_('Settings imported.'));
                    onChange();
                }
            } else {
                alert(_('Error: Invalid data.'));
            }
        });
    });

    //Import Customs
    $('#optionsBackupRestoreImportCustoms').on('click', function () {
        loadLocalFileAsString('.json', function (result) {
            var resultObj = tryParseJSON(result);
            var resultObjValid = true;
            if (resultObj && typeof resultObj.forEach == 'function') {
                resultObj.forEach(function (entry, index) {
                    if (typeof entry.id == 'undefined' || typeof entry.custom != 'object') {
                        resultObjValid = false;
                    }
                });
            } else {
                resultObjValid = false;
            }
            if (resultObjValid) {
                initDialog(
                    'dialogOptionsBackupRestoreImportCustoms',
                    function () {
                        //Import
                        if (confirm(_("Really overwrite custom datapoint settings? This can't be undone."))) {
                            var customs = $('#dialogOptionsBackupRestoreImportCustoms').data('customs');
                            var dialogOptionsBackupRestoreImportCustomsCounter = 0;
                            var dialogOptionsBackupRestoreImportCustomsError = false;
                            customs.forEach(function (custom, index) {
                                if (
                                    $(
                                        '.dialogOptionsBackupRestoreImportCustomsListItem[data-index=' + index + ']',
                                    ).prop('checked')
                                ) {
                                    dialogOptionsBackupRestoreImportCustomsCounter++;
                                    console.log('Updating ID: ' + custom.id + ' with custom: ' + custom.custom);
                                    (function () {
                                        //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
                                        var _custom = custom;
                                        socket.emit('getObject', _custom.id, function (err, _obj) {
                                            if (_obj) {
                                                if (typeof _obj.common == udef) _obj.common = {};
                                                if (typeof _obj.common.custom == udef) _obj.common.custom = {};
                                                _obj.common.custom[adapter + '.' + instance] = _custom.custom;
                                                socket.emit('setObject', _custom.id, _obj, function (err) {
                                                    dialogOptionsBackupRestoreImportCustomsCounter--;
                                                    if (err) dialogOptionsBackupRestoreImportCustomsError = true;
                                                    if (dialogOptionsBackupRestoreImportCustomsCounter == 0) {
                                                        if (dialogOptionsBackupRestoreImportCustomsError) {
                                                            alert(_('Error: Invalid data.'));
                                                        } else {
                                                            alert(_('Settings imported.'));
                                                            onChange();
                                                        }
                                                    }
                                                });
                                            }
                                        });
                                    })(); //<--End Closure
                                }
                            });
                        }
                    },
                    function () {
                        //init dialog function
                        $('#dialogOptionsBackupRestoreImportCustoms').data('customs', resultObj);
                        $('#dialogOptionsBackupRestoreImportCustomsList').empty();
                        resultObj.forEach(function (custom, index) {
                            $('#dialogOptionsBackupRestoreImportCustomsList').append(
                                "<p><label><input class='dialogOptionsBackupRestoreImportCustomsListItem' type='checkbox' checked='checked' data-index='" +
                                    index +
                                    "'><span>" +
                                    custom.id +
                                    '</span></label></p>',
                            );
                        });
                    },
                );
            } else {
                alert(_('Error: Invalid data.'));
            }
        });
    });

    //Import Everything (but userfiles)
    $('#optionsBackupRestoreImportEverything').on('click', function () {
        loadLocalFileAsString('.json', function (result) {
            var resultObj = tryParseJSON(result);
            var resultObjValid = true;
            if (resultObj && typeof resultObj == 'object' && typeof resultObj.forEach == udef) {
                //Views
                if (resultObj.views && typeof resultObj.views.forEach == 'function') {
                    resultObj.views.forEach(function (entry, index) {
                        if (typeof entry.commonName == 'undefined') entry.commonName = 'View';
                    });
                } else {
                    resultObjValid = false;
                }
                //Toolbar
                if (resultObj.toolbar && typeof resultObj.toolbar.forEach == 'function') {
                    resultObj.toolbar.forEach(function (entry, index) {
                        if (typeof entry.nativeLinkedView == 'undefined') {
                            resultObjValid = false;
                        } else {
                            if (typeof entry.commonName == 'undefined') entry.commonName = result.nativeLinkedView;
                            if (typeof entry.nativeIcon == 'undefined') entry.nativeIcon = 'grid';
                        }
                    });
                } else {
                    resultObjValid = false;
                }
                //Lists
                if (!(
                    resultObj.lists &&
                    typeof resultObj.lists == 'object' &&
                    typeof resultObj.lists.forEach == 'function'
                )) {
                    resultObjValid = false;
                }
                //Options and panel
                if (!(
                    resultObj.options &&
                    typeof resultObj.options == 'object' &&
                    typeof resultObj.options.forEach == udef
                )) {
                    resultObjValid = false;
                }
                //Customs
                if (resultObj.customs && typeof resultObj.customs.forEach == 'function') {
                    resultObj.customs.forEach(function (entry, index) {
                        if (typeof entry.id == 'undefined' || typeof entry.custom != 'object') {
                            resultObjValid = false;
                        }
                    });
                } else {
                    resultObjValid = false;
                }
            } else {
                resultObjValid = false;
            }
            if (resultObjValid) {
                if (confirm(_('Really overwrite existing Settings?'))) {
                    //Views
                    if (confirm(_('Import Views (overwrite existing views)') + '?')) views = resultObj.views;
                    //Toolbar
                    if (confirm(_('Import Toolbar (overwrite exisiting toolbar)') + '?')) toolbar = resultObj.toolbar;
                    //Panel
                    //Select elements with id=key and class=value and insert value
                    if (confirm(_('Import Panel') + '?'))
                        $('.value').each(function () {
                            var $key = $(this);
                            var id = $key.attr('id');
                            if (id.indexOf('panel') == 0) {
                                //Include just panel settings
                                if ($key.attr('type') === 'checkbox') {
                                    $key.prop('checked', resultObj.options[id]);
                                } else {
                                    $key.val(resultObj.options[id]);
                                }
                            }
                        });
                    //Lists
                    if (confirm(_('Import Lists/Counters (overwrite exisiting lists)') + '?')) lists = resultObj.lists;
                    //Options
                    //Select elements with id=key and class=value and insert value
                    if (confirm(_('Import Options') + '?'))
                        $('.value').each(function () {
                            var $key = $(this);
                            var id = $key.attr('id');
                            if (id.indexOf('panel') != 0) {
                                //Exclude panel settings
                                if ($key.attr('type') === 'checkbox') {
                                    $key.prop('checked', resultObj.options[id]);
                                } else {
                                    $key.val(resultObj.options[id]);
                                }
                            }
                        });
                    $('.MaterializeColorPicker').trigger('change');
                    optionsLayoutDefaultIcons = resultObj['optionsLayoutDefaultIcons'] || {};
                    optionsLayoutDefaultIconsSetValues();
                    optionsLayoutDefaultSymbols = resultObj['optionsLayoutDefaultSymbols'] || {};
                    optionsLayoutDefaultSymbolsSetValues();
                    alert(
                        _(
                            'Adapter-Settings imported. In the next step you can chose which custom datapoint settings schould be imported.',
                        ),
                    );
                    onChange();
                    //Customs
                    initDialog(
                        'dialogOptionsBackupRestoreImportCustoms',
                        function () {
                            //Import
                            if (confirm(_("Really overwrite custom datapoint settings? This can't be undone."))) {
                                var customs = $('#dialogOptionsBackupRestoreImportCustoms').data('customs');
                                var dialogOptionsBackupRestoreImportCustomsCounter = 0;
                                var dialogOptionsBackupRestoreImportCustomsError = false;
                                customs.forEach(function (custom, index) {
                                    if (
                                        $(
                                            '.dialogOptionsBackupRestoreImportCustomsListItem[data-index=' +
                                                index +
                                                ']',
                                        ).prop('checked')
                                    ) {
                                        dialogOptionsBackupRestoreImportCustomsCounter++;
                                        console.log('Updating ID: ' + custom.id + ' with custom: ' + custom.custom);
                                        (function () {
                                            //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
                                            var _custom = custom;
                                            socket.emit('getObject', _custom.id, function (err, _obj) {
                                                if (_obj) {
                                                    if (typeof _obj.common == udef) _obj.common = {};
                                                    if (typeof _obj.common.custom == udef) _obj.common.custom = {};
                                                    _obj.common.custom[adapter + '.' + instance] = _custom.custom;
                                                    socket.emit('setObject', _custom.id, _obj, function (err) {
                                                        dialogOptionsBackupRestoreImportCustomsCounter--;
                                                        if (err) dialogOptionsBackupRestoreImportCustomsError = true;
                                                        if (dialogOptionsBackupRestoreImportCustomsCounter == 0) {
                                                            if (dialogOptionsBackupRestoreImportCustomsError) {
                                                                alert(_('Error: Invalid data.'));
                                                            } else {
                                                                alert(_('Settings imported.'));
                                                                onChange();
                                                            }
                                                        }
                                                    });
                                                }
                                            });
                                        })(); //<--End Closure
                                    }
                                });
                            }
                        },
                        function () {
                            //init dialog function
                            $('#dialogOptionsBackupRestoreImportCustoms').data('customs', resultObj.customs);
                            $('#dialogOptionsBackupRestoreImportCustomsList').empty();
                            resultObj.customs.forEach(function (custom, index) {
                                $('#dialogOptionsBackupRestoreImportCustomsList').append(
                                    "<p><label><input class='dialogOptionsBackupRestoreImportCustomsListItem' type='checkbox' checked='checked' data-index='" +
                                        index +
                                        "'><span>" +
                                        custom.id +
                                        '</span></label></p>',
                                );
                            });
                        },
                    );
                }
            } else {
                alert(_('Error: Invalid data.'));
            }
        });
    });

    //Import Userfiles
    $('#optionsBackupRestoreImportUserfiles').on('click', function () {
        loadLocalFileAsArrayBuffer('.zip', function (result) {
            if (result) {
                if (
                    confirm(
                        _(
                            'Really import files? Exisiting files will be overwritten. Depending on the size it may take a while to unpack the zip file.',
                        ),
                    )
                ) {
                    $('#optionsBackupRestoreImportUserfiles').addClass('disabled');
                    $('#optionsBackupRestoreImportUserfilesIcon').text('hourglass_empty');
                    $('#optionsBackupRestoreImportUserfilesProgress')
                        .show()
                        .find('.indeterminate, .determinate')
                        .removeClass('determinate')
                        .addClass('indeterminate')
                        .css('width', '');
                    JSZip.loadAsync(result).then(
                        function (zip) {
                            var uploadCount = 0;
                            var uploadCountMax = 0;
                            zip.forEach(async function (relativePath, file) {
                                console.log('Processing ZIP-File entry ' + file.name);
                                if (!file.dir) {
                                    uploadCount++;
                                    if (uploadCountMax < uploadCount) uploadCountMax = uploadCount;
                                    console.log(
                                        'Uploading ' +
                                            file.name +
                                            '. ' +
                                            (uploadCountMax - uploadCount) +
                                            '/' +
                                            uploadCountMax,
                                    );
                                    $('#optionsBackupRestoreImportUserfilesProgress')
                                        .show()
                                        .find('.indeterminate, .determinate')
                                        .removeClass('indeterminate')
                                        .addClass('determinate')
                                        .css(
                                            'width',
                                            Math.floor(((uploadCountMax - uploadCount) / uploadCountMax) * 100) + '%',
                                        );
                                    file.async('blob').then(function (blob) {
                                        blob.name = relativePath.substr(relativePath.lastIndexOf('/') + 1);
                                        var _path = userfilesImagePath + '/' + relativePath;
                                        _path = _path.substr(0, _path.lastIndexOf('/'));
                                        uploadFile(blob, _path, function (name) {
                                            uploadCount--;
                                            console.log(
                                                name +
                                                    ' uploaded. ' +
                                                    (uploadCountMax - uploadCount) +
                                                    '/' +
                                                    uploadCountMax,
                                            );
                                            $('#optionsBackupRestoreImportUserfilesProgress')
                                                .show()
                                                .find('.indeterminate, .determinate')
                                                .removeClass('indeterminate')
                                                .addClass('determinate')
                                                .css(
                                                    'width',
                                                    Math.floor(
                                                        ((uploadCountMax - uploadCount) / uploadCountMax) * 100,
                                                    ) + '%',
                                                );
                                            if (uploadCount == 0) {
                                                alert(_('Files imported.'));
                                                $('#imagesUploadRefresh').trigger('click');
                                                $('#optionsBackupRestoreImportUserfilesIcon').text('file_upload');
                                                $('#optionsBackupRestoreImportUserfiles').removeClass('disabled');
                                                $('#optionsBackupRestoreImportUserfilesProgress').hide();
                                            }
                                        });
                                    });
                                } else {
                                    var _path =
                                        userfilesImagePath +
                                        $('#imagesSelectedDir').val() +
                                        '/' +
                                        relativePath.substr(0, relativePath.lastIndexOf('/'));
                                    var dirExistance = await checkDirExistance(_path);
                                    console.log(dirExistance);
                                    if (!dirExistance) {
                                        console.log('Creating directory ' + _path);
                                        await createDirAsync(_path);
                                    }
                                }
                            });
                        },
                        function (err) {
                            console.log('Error reading zip file: ' + err.message);
                            alert(_('Error: Invalid data.'));
                            $('#optionsBackupRestoreImportUserfilesIcon').text('file_upload');
                            $('#optionsBackupRestoreImportUserfiles').removeClass('disabled');
                            $('#optionsBackupRestoreImportUserfilesProgress').hide();
                        },
                    );
                    /* 					writeDirAsZip(userfilesImagePath + '/', result, function(err){ //xxxx still not working xxxx, therefore the above implementation with local zip-processing via jszip is used
						if (err){
							alert(_("Error: Invalid data."));
						} else {
							getImages(function(){
								values2table('tableImages', images, onChange, onTableImagesReady);
								var dummy = $('#imagesSelectedDir').val();
								$('#imagesSelectedDir').val(dummy).trigger('change');
								$('#imagesSelectedDir').select();
							});
							alert(_("Files imported."));
						}
						$('#optionsBackupRestoreImportUserfilesIcon').text("file_upload");
						$('#optionsBackupRestoreImportUserfiles').removeClass('disabled');
						$('#optionsBackupRestoreImportUserfilesProgress').hide();
					}); */
                }
            } else {
                alert(_('Error: Invalid data.'));
            }
        });
    });
}

/************** SAVE *****************************************************************
 *** This will be called by the admin adapter when the user presses the save button ***
 *************************************************************************************/
async function save(callback) {
    //Update symbolic links
    updateSymbolicLinks();

    //Check for linkedViews that don't exist anymore and delete them
    var existingViews = [];
    if (typeof views != udef)
        views.forEach(function (view) {
            existingViews.push(view.commonName);
        });
    if (typeof views != udef && existingViews.length > 0)
        views.forEach(function (view) {
            if (typeof view.devices != udef)
                view.devices.forEach(function (device) {
                    if (typeof device.nativeLinkedView != udef && device.nativeLinkedView != '') {
                        if (existingViews.indexOf(device.nativeLinkedView.split('#')[0]) == -1) {
                            console.log('Removed dead link to ' + device.nativeLinkedView);
                            device.nativeLinkedView = '';
                        }
                    }
                });
        });

    //Select elements with class=value and build settings object
    var obj = {};
    $('.value').each(function () {
        var $this = $(this);
        if ($this.attr('type') === 'checkbox') {
            obj[$this.attr('id')] = $this.prop('checked');
        } else {
            obj[$this.attr('id')] = $this.val();
        }
    });

    //Get edited subsettings
    obj.toolbar = toolbar;
    obj.views = views;
    obj.lists = lists;
    obj.optionsLayoutDefaultIcons = optionsLayoutDefaultIcons || {};
    obj.optionsLayoutDefaultSymbols = optionsLayoutDefaultSymbols || {};

    //Set version
    version = ++version || 0;
    obj.version = version;

    //Set passphrase
    passphrase = $('#optionsPassphrase').val();
    socket.emit('setState', 'iqontrol.' + instance + '.passphrase', { val: passphrase, ack: true });
    if (passphrase) obj.passphraseEncrypted = md5(passphrase);
    else obj.passphraseEncrypted = '';

    //Get widgetDatapoints
    var widgetsToDownload = [];
    if (typeof views != udef)
        views.forEach(function (view) {
            if (typeof view.devices != udef)
                view.devices.forEach(function (device) {
                    if (typeof device.states != udef)
                        device.states.forEach(function (state) {
                            if (
                                (state.state == 'URL' || state.state == 'BACKGROUND_URL') &&
                                state.commonRole == 'const' &&
                                state.value != ''
                            ) {
                                var filename = null;
                                var path = null;
                                var query = null;
                                if (state.value.indexOf('./images/widgets/') == 0) {
                                    filename = state.value.slice(
                                        8,
                                        state.value.lastIndexOf('?') == -1
                                            ? state.value.length
                                            : state.value.lastIndexOf('?'),
                                    );
                                    path = imagePath;
                                    query =
                                        state.value.lastIndexOf('?') == -1
                                            ? ''
                                            : state.value.slice(state.value.lastIndexOf('?'));
                                }
                                if (state.value.indexOf('./../iqontrol.meta/userimages/userwidgets/') == 0) {
                                    filename = state.value.slice(
                                        29,
                                        state.value.lastIndexOf('?') == -1
                                            ? state.value.length
                                            : state.value.lastIndexOf('?'),
                                    );
                                    path = userfilesImagePath;
                                    query =
                                        state.value.lastIndexOf('?') == -1
                                            ? ''
                                            : state.value.slice(state.value.lastIndexOf('?'));
                                }
                                if (filename && path) {
                                    widgetsToDownload.push({ filename: filename, path: path, query: query });
                                }
                            }
                        });
                });
        });
    if ($('#panelBackgroundURLCommonRole').val() == 'const' && $('#panelBackgroundURLValue').val() != '') {
        var value = $('#panelBackgroundURLValue').val();
        var filename = null;
        var path = null;
        if (value.indexOf('./images/widgets/') == 0) {
            filename = value.slice(8, value.lastIndexOf('?') == -1 ? value.length : value.lastIndexOf('?'));
            path = imagePath;
            query = value.lastIndexOf('?') == -1 ? '' : value.slice(value.lastIndexOf('?'));
        }
        if (value.indexOf('./../iqontrol.meta/userimages/userwidgets/') == 0) {
            filename = value.slice(29, value.lastIndexOf('?') == -1 ? value.length : value.lastIndexOf('?'));
            path = userfilesImagePath;
            query = value.lastIndexOf('?') == -1 ? '' : value.slice(value.lastIndexOf('?'));
        }
        if (filename && path) {
            widgetsToDownload.push({ filename: filename, path: path, query: query });
        }
    }
    widgetsToDownload = removeDuplicates(widgetsToDownload);
    if (widgetsToDownload.length > 0) {
        var widgetsDatapoints = [];
        var widgetsToDownloadCount = widgetsToDownload.length;
        widgetsToDownload.forEach(function (widget) {
            downloadFileAsStringAsync(widget.filename, widget.path).then(function (htmlAsString, query = widget.query) {
                widgetsToDownloadCount--;
                $(htmlAsString)
                    .filter('meta[name="widget-datapoint"]')
                    .each(function () {
                        var id = $(this).prop('content');
                        var variableId = id.split('|');
                        if (variableId.length > 1) {
                            id = variableId[0];
                            var a = variableId[1].indexOf('{'),
                                b = variableId[1].lastIndexOf('}');
                            if (a > -1 && a < b) {
                                var variable = variableId[1].substring(a + 1, b);
                                if (variable && variable != '') {
                                    var regex = new RegExp(
                                        '[\\?&]' + variable.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]') + '=([^&#]*)',
                                    );
                                    var queryValues = regex.exec(query);
                                    var queryValue =
                                        queryValues === null
                                            ? null
                                            : decodeURIComponent(queryValues[1].replace(/\+/g, ' '));
                                    if (queryValue) id = variableId[1].replace('{' + variable + '}', queryValue);
                                }
                            }
                        }
                        var data = $(this).data() || {};
                        var type = data.type || 'string';
                        var role = data.role || '';
                        var name = data.name || id;
                        var min = data.min || null;
                        var max = data.max || null;
                        var def = data.def || null;
                        var unit = data.unit || null;
                        var widgetDatapoint = {
                            id: id,
                            type: type,
                            role: role,
                            name: name,
                            min: min,
                            max: max,
                            def: def,
                            unit: unit,
                        };
                        widgetsDatapoints.push(widgetDatapoint);
                        console.log('Found widgetDatapoint: ', widgetDatapoint);
                    });
                if (widgetsToDownloadCount == 0) {
                    widgetsDatapoints = removeDuplicates(widgetsDatapoints);
                    obj.widgetsDatapoints = widgetsDatapoints;
                    //Save settings
                    console.log('Save settings');
                    callback(obj);
                }
            });
        });
    } else {
        obj.widgetsDatapoints = [];
        //Save settings
        console.log('Save settings');
        callback(obj);
    }
}
