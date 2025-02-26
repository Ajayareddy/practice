sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("booksnspace.booksapp.controller.App", {
      onInit: function () {
          // this.getView().byId("appNavContainer").to(this.getView().byId("booksListView"));
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
