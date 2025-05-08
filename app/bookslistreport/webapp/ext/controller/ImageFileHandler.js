sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        uploadImageMethod: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
