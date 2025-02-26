sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("booksnspace.booksapp.controller.BooksList", {
        onInit() {
        },
        onNavigateToAuthor: function () {
            debugger
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteAuthorsList");
        }
    });
});