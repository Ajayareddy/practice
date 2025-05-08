sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("booksapp.controller.App", {
    onInit() {
      this.getOwnerComponent().getRouter().navTo("RouteHome");
      const oViewModel = new sap.ui.model.json.JSONModel({
        selectedNavKey: "home" // default selected item
    });
    this.getView().setModel(oViewModel);
    },
    onSideNavButtonPress: function () {
      const oToolPage = this.byId("toolPage");
      const bExpanded = oToolPage.getSideExpanded();
      oToolPage.setSideExpanded(!bExpanded);
  }
,  
    onItemSelect: function (oEvent) {
      var sKey = oEvent.getParameter("item").getKey();
      var oRouter = this.getOwnerComponent().getRouter();
      debugger
      if (sKey === "booksList") {
        oRouter.navTo("RouteBooksList");
      } else if (sKey === "authorList") {
        oRouter.navTo("RouteAuthorsList");
      } else if (sKey === "home") {
        oRouter.navTo("RouteHome");
      }


      const oNavContainer = this.byId("appNavContainer");

    // Update the model so selectedKey updates in the view
    this.getView().getModel().setProperty("/selectedNavKey", sKey);

    switch (sKey) {
        case "home":
            oNavContainer.to(this.createId("homeView"));
            break;
        case "authorList":
            oNavContainer.to(this.createId("authorListView"));
            break;
        case "booksList":
            oNavContainer.to(this.createId("booksListView"));
            break;
    }
    }
  });
});