sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("booksapp.controller.App", {
    onInit() {
      this.getOwnerComponent().getRouter().navTo("TargetBooksList");
    },
    onItemSelect: function (oEvent) {
      var sKey = oEvent.getParameter("item").getKey();
      var oRouter = this.getOwnerComponent().getRouter();
      debugger
      if (sKey === "booksList") {
        oRouter.navTo("RouteBooksList");
      } else if (sKey === "authorList") {
        oRouter.navTo("RouteAuthorsList");
      }
    }
  });
});