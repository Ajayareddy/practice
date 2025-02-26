sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("booksnspace.booksapp.controller.AuthorList", {
        onNavigateBack: function () {
            debugger
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteBooksList");
        }
    });
});
