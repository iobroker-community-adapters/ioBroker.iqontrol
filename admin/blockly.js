'use strict';

if (typeof goog !== 'undefined') {
    goog.provide('Blockly.JavaScript.Sendto');

    goog.require('Blockly.JavaScript');
}

// remove it somewhere, because it defined in javascript=>blocks_words.js from javascript>=4.6.0
Blockly.Translate =
    Blockly.Translate ||
    function (word, lang) {
        lang = lang || systemLang;
        if (Blockly.Words && Blockly.Words[word]) {
            return Blockly.Words[word][lang] || Blockly.Words[word].en;
        } else {
            return word;
        }
    };

/// --- SendTo --------------------------------------------------
Blockly.Words['iqontrol'] = { en: 'iQontrol', de: 'iQontrol', ru: 'iQontrol' };
Blockly.Words['iqontrol_popup_message'] = {
    en: 'popup message',
    de: 'Popup Naricht',
    ru: 'Неожиданно возникнуть сообщение',
};
Blockly.Words['iqontrol_popup_duration'] = {
    en: 'popup duration',
    de: 'Popup Dauer',
    ru: 'Неожиданно возникнуть продолжительность',
};
Blockly.Words['iqontrol_popup_persistent_message'] = {
    en: 'popup persistent message',
    de: 'Popup obligatorische Naricht',
    ru: 'всплывающая обязательный сообщение',
};
Blockly.Words['iqontrol_popup_persistent_expires'] = {
    en: 'popup persistent expires',
    de: 'Popup obligatorisch Ablaufzeitpunkt',
    ru: 'всплывающая обязательный истекает',
};
Blockly.Words['iqontrol_popup_persistent_undismissible'] = {
    en: 'popup persistent undismissible',
    de: 'Popup obligatorisch Nicht wegklickbar',
    ru: 'всплывающая обязательный недопустимо',
};
Blockly.Words['iqontrol_popup_persistent_id'] = {
    en: 'popup persistent id',
    de: 'Popup obligatorisch ID',
    ru: 'всплывающая обязательный ID',
};
Blockly.Words['iqontrol_popup_click_keeps_open'] = {
    en: 'popup click keeps open',
    de: 'Popup Klick lässt offen',
    ru: 'всплывающее окно остается открытым',
};
Blockly.Words['iqontrol_popup_clicked_value'] = {
    en: 'popup clicked value',
    de: 'Popup Klick Wert',
    ru: 'всплывающее окно со значением клика',
};
Blockly.Words['iqontrol_popup_clicked_destination_state'] = {
    en: 'popup clicked destination state',
    de: 'Popup Klick Zieldatenpunkt',
    ru: 'всплывающее окно щелкнуло состояние назначения',
};
Blockly.Words['iqontrol_popup_button_names'] = {
    en: 'popup button names',
    de: 'Popup Knopf Bezeichnungen',
    ru: 'имена всплывающих кнопок',
};
Blockly.Words['iqontrol_popup_button_values'] = {
    en: 'popup button values',
    de: 'Popup Knopf Werte',
    ru: 'значения всплывающих кнопо',
};
Blockly.Words['iqontrol_popup_button_destination_states'] = {
    en: 'popup button destination states',
    de: 'Popup Knopf Zieldatenpunkte',
    ru: 'состояния назначения всплывающих кнопок',
};
Blockly.Words['iqontrol_popup_button_closes'] = {
    en: 'popup button closes',
    de: 'Popup Knopf schließt',
    ru: 'всплывающая кнопка закрывается',
};
Blockly.Words['iqontrol_popup_button_clears'] = {
    en: 'popup button clears',
    de: 'Popup Knopf löscht Einstellungen',
    ru: 'всплывающая кнопка Очищения',
};

Blockly.Words['iqontrol_log'] = { en: 'log level', de: 'Loglevel', ru: 'Протокол' };
Blockly.Words['iqontrol_log_none'] = { en: 'none', de: 'keins', ru: 'нет' };
Blockly.Words['iqontrol_log_info'] = { en: 'info', de: 'info', ru: 'инфо' };
Blockly.Words['iqontrol_log_debug'] = { en: 'debug', de: 'debug', ru: 'debug' };
Blockly.Words['iqontrol_log_warn'] = { en: 'warning', de: 'warning', ru: 'warning' };
Blockly.Words['iqontrol_log_error'] = { en: 'error', de: 'error', ru: 'ошибка' };

Blockly.Words['iqontrol_anyInstance'] = { en: 'all instances', de: 'Alle Instanzen', ru: 'На все драйвера' };
Blockly.Words['iqontrol_tooltip'] = {
    en: 'Send message to iQontrol',
    de: 'Sende eine Meldung an iQontrol',
    ru: 'Послать сообщение через iQontrol',
};
Blockly.Words['iqontrol_help'] = {
    en: 'https://github.com/sbormann/ioBroker.iqontrol/blob/master/README.md',
    de: 'https://github.com/sbormann/ioBroker.iqontrol/blob/master/README.md',
    ru: 'https://github.com/sbormann/ioBroker.iqontrol/blob/master/README.md',
};

Blockly.Sendto.blocks['iqontrol'] =
    '<block type="iqontrol">' +
    '     <value name="INSTANCE">' +
    '     </value>' +
    '     <value name="POPUP_MESSAGE">' +
    '         <shadow type="text">' +
    '             <field name="TEXT"></field>' +
    '         </shadow>' +
    '     </value>' +
    '     <value name="POPUP_PERSISTENT_MESSAGE">' +
    '         <shadow type="text">' +
    '             <field name="TEXT"></field>' +
    '         </shadow>' +
    '     </value>' +
    '     <value name="POPUP_PERSISTENT_EXPIRES">' +
    '     </value>' +
    '     <value name="POPUP_PERSISTENT_UNDISMISSIBLE">' +
    '         <shadow type="logic_boolean">' +
    '             <field name="BOOL">FALSE</field>' +
    '         </shadow>' +
    '     </value>' +
    '     <value name="POPUP_PERSISTENT_ID">' +
    '     </value>' +
    '     <value name="POPUP_DURATION">' +
    '         <shadow type="math_number">' +
    '             <field name="NUM">5000</field>' +
    '         </shadow>' +
    '     </value>' +
    '     <value name="POPUP_CLICK_KEEPS_OPEN">' +
    '         <shadow type="logic_boolean">' +
    '             <field name="BOOL">FALSE</field>' +
    '         </shadow>' +
    '     </value>' +
    '     <value name="POPUP_CLICKED_VALUE">' +
    '     </value>' +
    '     <value name="POPUP_CLICKED_DESTINATION_STATE">' +
    '     </value>' +
    '     <value name="POPUP_BUTTON_NAMES">' +
    '     </value>' +
    '     <value name="POPUP_BUTTON_VALUES">' +
    '     </value>' +
    '     <value name="POPUP_BUTTON_DESTINATION_STATES">' +
    '     </value>' +
    '     <value name="POPUP_BUTTON_CLOSES">' +
    '     </value>' +
    '     <value name="POPUP_BUTTON_CLEARS">' +
    '     </value>' +
    '     <value name="LOG">' +
    '     </value>' +
    '</block>';

Blockly.Blocks['iqontrol'] = {
    init: function () {
        var options = [[Blockly.Translate('iqontrol_anyInstance'), '']];
        if (typeof main !== 'undefined' && main.instances) {
            for (var i = 0; i < main.instances.length; i++) {
                var m = main.instances[i].match(/^system.adapter.iqontrol.(\d+)$/);
                if (m) {
                    var n = parseInt(m[1], 10);
                    options.push(['iqontrol.' + n, '.' + n]);
                }
            }
        }
        if (!options.length) {
            for (var u = 0; u <= 4; u++) {
                options.push(['iqontrol.' + u, '.' + u]);
            }
        }
        this.appendDummyInput('INSTANCE')
            .appendField(Blockly.Translate('iqontrol'))
            .appendField(new Blockly.FieldDropdown(options), 'INSTANCE');

        var input = this.appendValueInput('POPUP_MESSAGE').appendField(Blockly.Translate('iqontrol_popup_message'));
        if (input.connection) {
            input.connection._optional = true;
        }

        var input = this.appendValueInput('POPUP_PERSISTENT_MESSAGE').appendField(
            Blockly.Translate('iqontrol_popup_persistent_message'),
        );
        if (input.connection) {
            input.connection._optional = true;
        }

        var input = this.appendValueInput('POPUP_PERSISTENT_EXPIRES').appendField(
            Blockly.Translate('iqontrol_popup_persistent_expires'),
        );
        if (input.connection) {
            input.connection._optional = true;
        }

        var input = this.appendValueInput('POPUP_PERSISTENT_UNDISMISSIBLE').appendField(
            Blockly.Translate('iqontrol_popup_persistent_undismissible'),
        );
        if (input.connection) {
            input.connection._optional = true;
        }

        var input = this.appendValueInput('POPUP_PERSISTENT_ID').appendField(
            Blockly.Translate('iqontrol_popup_persistent_id'),
        );
        if (input.connection) {
            input.connection._optional = true;
        }

        var input = this.appendValueInput('POPUP_DURATION').appendField(Blockly.Translate('iqontrol_popup_duration'));
        if (input.connection) {
            input.connection._optional = true;
        }

        var input = this.appendValueInput('POPUP_CLICK_KEEPS_OPEN').appendField(
            Blockly.Translate('iqontrol_popup_click_keeps_open'),
        );
        if (input.connection) {
            input.connection._optional = true;
        }

        var input = this.appendValueInput('POPUP_CLICKED_VALUE').appendField(
            Blockly.Translate('iqontrol_popup_clicked_value'),
        );
        if (input.connection) {
            input.connection._optional = true;
        }

        var input = this.appendValueInput('POPUP_CLICKED_DESTINATION_STATE').appendField(
            Blockly.Translate('iqontrol_popup_clicked_destination_state'),
        );
        if (input.connection) {
            input.connection._optional = true;
        }

        var input = this.appendValueInput('POPUP_BUTTON_NAMES').appendField(
            Blockly.Translate('iqontrol_popup_button_names'),
        );
        if (input.connection) {
            input.connection._optional = true;
        }

        var input = this.appendValueInput('POPUP_BUTTON_VALUES').appendField(
            Blockly.Translate('iqontrol_popup_button_values'),
        );
        if (input.connection) {
            input.connection._optional = true;
        }

        var input = this.appendValueInput('POPUP_BUTTON_DESTINATION_STATES').appendField(
            Blockly.Translate('iqontrol_popup_button_destination_states'),
        );
        if (input.connection) {
            input.connection._optional = true;
        }

        var input = this.appendValueInput('POPUP_BUTTON_CLOSES').appendField(
            Blockly.Translate('iqontrol_popup_button_closes'),
        );
        if (input.connection) {
            input.connection._optional = true;
        }

        var input = this.appendValueInput('POPUP_BUTTON_CLEARS').appendField(
            Blockly.Translate('iqontrol_popup_button_clears'),
        );
        if (input.connection) {
            input.connection._optional = true;
        }

        this.appendDummyInput('LOG')
            .appendField(Blockly.Translate('iqontrol_log'))
            .appendField(
                new Blockly.FieldDropdown([
                    [Blockly.Translate('iqontrol_log_none'), ''],
                    [Blockly.Translate('iqontrol_log_info'), 'log'],
                    [Blockly.Translate('iqontrol_log_debug'), 'debug'],
                    [Blockly.Translate('iqontrol_log_warn'), 'warn'],
                    [Blockly.Translate('iqontrol_log_error'), 'error'],
                ]),
                'LOG',
            );

        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);

        this.setColour(Blockly.Sendto.HUE);
        this.setTooltip(Blockly.Translate('iqontrol_tooltip'));
        this.setHelpUrl(Blockly.Translate('iqontrol_help'));
    },
};

Blockly.JavaScript['iqontrol'] = function (block) {
    var dropdown_instance = block.getFieldValue('INSTANCE');
    var logLevel = block.getFieldValue('LOG');
    var popupMessage = Blockly.JavaScript.valueToCode(block, 'POPUP_MESSAGE', Blockly.JavaScript.ORDER_ATOMIC);
    var popupPersistentMessage = Blockly.JavaScript.valueToCode(
        block,
        'POPUP_PERSISTENT_MESSAGE',
        Blockly.JavaScript.ORDER_ATOMIC,
    );
    var popupPersistentExpires = Blockly.JavaScript.valueToCode(
        block,
        'POPUP_PERSISTENT_EXPIRES',
        Blockly.JavaScript.ORDER_ATOMIC,
    );
    var popupPersistentUndismissible = Blockly.JavaScript.valueToCode(
        block,
        'POPUP_PERSISTENT_UNDISMISSIBLE',
        Blockly.JavaScript.ORDER_ATOMIC,
    );
    var popupPersistentId = Blockly.JavaScript.valueToCode(
        block,
        'POPUP_PERSISTENT_ID',
        Blockly.JavaScript.ORDER_ATOMIC,
    );
    var popupDuration = Blockly.JavaScript.valueToCode(block, 'POPUP_DURATION', Blockly.JavaScript.ORDER_ATOMIC);
    var popupClickKeepsOpen = Blockly.JavaScript.valueToCode(
        block,
        'POPUP_CLICK_KEEPS_OPEN',
        Blockly.JavaScript.ORDER_ATOMIC,
    );
    var popupClickedValue = Blockly.JavaScript.valueToCode(
        block,
        'POPUP_CLICKED_VALUE',
        Blockly.JavaScript.ORDER_ATOMIC,
    );
    var popupClickedDestinationState = Blockly.JavaScript.valueToCode(
        block,
        'POPUP_CLICKED_DESTINATION_STATE',
        Blockly.JavaScript.ORDER_ATOMIC,
    );
    var popupButtonNames = Blockly.JavaScript.valueToCode(block, 'POPUP_BUTTON_NAMES', Blockly.JavaScript.ORDER_ATOMIC);
    var popupButtonValues = Blockly.JavaScript.valueToCode(
        block,
        'POPUP_BUTTON_VALUES',
        Blockly.JavaScript.ORDER_ATOMIC,
    );
    var popupButtonDestinationStates = Blockly.JavaScript.valueToCode(
        block,
        'POPUP_BUTTON_DESTINATION_STATES',
        Blockly.JavaScript.ORDER_ATOMIC,
    );
    var popupButtonCloses = Blockly.JavaScript.valueToCode(
        block,
        'POPUP_BUTTON_CLOSES',
        Blockly.JavaScript.ORDER_ATOMIC,
    );
    var popupButtonClears = Blockly.JavaScript.valueToCode(
        block,
        'POPUP_BUTTON_CLEARS',
        Blockly.JavaScript.ORDER_ATOMIC,
    );
    var text = '{\n';
    if (popupMessage) text += '   PopupMessage: ' + popupMessage + ',\n';
    if (popupPersistentMessage) text += '   PopupPersistentMessage: ' + popupPersistentMessage + ',\n';
    if (popupPersistentExpires) text += '   PopupPersistentExpires: ' + popupPersistentExpires + ',\n';
    if (popupPersistentUndismissible)
        text += '   PopupPersistentUndismissible: ' + popupPersistentUndismissible + ',\n';
    if (popupPersistentId) text += '   PopupPersistentId: ' + popupPersistentId + ',\n';
    if (popupDuration) text += '   PopupDuration: ' + popupDuration + ',\n';
    if (popupClickKeepsOpen) text += '   PopupClickKeepsOpen: ' + popupClickKeepsOpen + ',\n';
    if (popupClickedValue) text += '   PopupClickedValue: ' + popupClickedValue + ',\n';
    if (popupClickedDestinationState)
        text += '   PopupClickedDestinationState: ' + popupClickedDestinationState + ',\n';
    if (popupButtonNames) text += '   PopupButtonNames: ' + popupButtonNames + ',\n';
    if (popupButtonValues) text += '   PopupButtonValues: ' + popupButtonValues + ',\n';
    if (popupButtonDestinationStates)
        text += '   PopupButtonDestinationStates: ' + popupButtonDestinationStates + ',\n';
    if (popupButtonCloses) text += '   PopupButtonCloses: ' + popupButtonCloses + ',\n';
    if (popupButtonClears) text += '   PopupButtonClears: ' + popupButtonClears + ',\n';
    text = text.substring(0, text.length - 2);
    text += '\n';
    text += '}';
    var logText;
    if (logLevel) {
        logText = 'console.' + logLevel + '("iqontrol: " + ' + text + ');\n';
    } else {
        logText = '';
    }
    return 'sendTo("iqontrol' + dropdown_instance + '", "send", ' + text + ');\n' + logText;
};
