//@ui5-bundle booksapp/Component-preload.js
sap.ui.require.preload({
	"booksapp/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","booksapp/model/models"],(e,t)=>{"use strict";return e.extend("booksapp.Component",{metadata:{manifest:"json",interfaces:["sap.ui.core.IAsyncContentCreation"]},init(){e.prototype.init.apply(this,arguments);this.setModel(t.createDeviceModel(),"device");this.getRouter().initialize()}})});
},
	"booksapp/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],e=>{"use strict";return e.extend("booksapp.controller.App",{onInit(){this.getOwnerComponent().getRouter().navTo("TargetBooksList")},onItemSelect:function(e){var t=e.getParameter("item").getKey();var o=this.getOwnerComponent().getRouter();debugger;if(t==="booksList"){o.navTo("RouteBooksList")}else if(t==="authorList"){o.navTo("RouteAuthorsList")}}})});
},
	"booksapp/controller/AuthorsList.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(o){"use strict";return o.extend("booksapp.controller.AuthorList",{onNavigateBack:function(){debugger;var o=sap.ui.core.UIComponent.getRouterFor(this);o.navTo("RouteBooksList")}})});
},
	"booksapp/controller/BooksList.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],o=>{"use strict";return o.extend("booksapp.controller.BooksList",{onInit(){}})});
},
	"booksapp/i18n/i18n.properties":'# This is the resource bundle for booksapp\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Books List Free Style\n\n#YDES: Application description\nappDescription=Books List Free Style\n#XTIT: Main view title\ntitle=Books List Free Style\n\n#XFLD,45\nbooksobj-display.flpTitle=Books Freestyle\n',
	"booksapp/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"booksapp","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.16.5","toolsId":"b5829506-1770-4855-81f6-db10fbea1378"},"dataSources":{"mainService":{"uri":"odata/v4/catalog/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"booksobj-display":{"semanticObject":"booksobj","action":"display","title":"{{booksobj-display.flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.133.0","libs":{"sap.m":{},"sap.ui.core":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"booksapp.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"books":{"dataSource":"mainService","settings":{}},"authors":{"dataSource":"mainService","settings":{}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","controlAggregation":"pages","controlId":"appNavContainer","transition":"slide","type":"View","viewType":"XML","path":"booksapp.view"},"routes":[{"name":"RouteBooksList","pattern":":?query:","target":["TargetBooksList"]},{"name":"RouteAuthorsList","pattern":"authors","target":["TargetAuthorsList"]}],"targets":{"TargetBooksList":{"id":"BooksList","name":"BooksList"},"TargetAuthorsList":{"id":"AuthorList","name":"AuthorList"}}},"rootView":{"viewName":"booksapp.view.App","type":"XML","id":"App"}},"sap.cloud":{"public":true,"service":"BooksAppRouter"}}',
	"booksapp/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"booksapp/view/App.view.xml":'<mvc:View controllerName="booksapp.controller.App" displayBlock="true"\n    xmlns:tnt="sap.tnt"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns="sap.m"><tnt:ToolPage id="toolPage"><tnt:header><tnt:ToolHeader id="_IDGenToolHeader"><Button id="sideNavigationToggleButton" icon="sap-icon://menu2" type="Transparent" press=".onSideNavButtonPress"><layoutData><OverflowToolbarLayoutData id="_IDGenOverflowToolbarLayoutData1" priority="NeverOverflow"/></layoutData></Button><ToolbarSpacer id="_IDGenToolbarSpacer" width="20px"/><Button id="_IDGenButton6" text="File" type="Transparent"><layoutData><OverflowToolbarLayoutData id="_IDGenOverflowToolbarLayoutData2" priority="Low"/></layoutData></Button><Button id="_IDGenButton7" text="Edit" type="Transparent"><layoutData><OverflowToolbarLayoutData id="_IDGenOverflowToolbarLayoutData3" priority="Low"/></layoutData></Button><Button id="_IDGenButton8" text="View" type="Transparent"><layoutData><OverflowToolbarLayoutData id="_IDGenOverflowToolbarLayoutData4" priority="Low"/></layoutData></Button><Button id="_IDGenButton9" text="Navigate" type="Transparent"><layoutData><OverflowToolbarLayoutData id="_IDGenOverflowToolbarLayoutData5" priority="Low"/></layoutData></Button><Button id="_IDGenButton10" text="Code" type="Transparent"><layoutData><OverflowToolbarLayoutData id="_IDGenOverflowToolbarLayoutData6" priority="Low"/></layoutData></Button><Button id="_IDGenButton11" text="Refactor" type="Transparent"><layoutData><OverflowToolbarLayoutData id="_IDGenOverflowToolbarLayoutData7" priority="Low"/></layoutData></Button><Button id="_IDGenButton12" text="Run" type="Transparent"><layoutData><OverflowToolbarLayoutData id="_IDGenOverflowToolbarLayoutData8" priority="Low"/></layoutData></Button><Button id="_IDGenButton13" text="Tools" type="Transparent"><layoutData><OverflowToolbarLayoutData id="_IDGenOverflowToolbarLayoutData9" priority="Low"/></layoutData></Button><tnt:ToolHeaderUtilitySeparator id="_IDGenToolHeaderUtilitySeparator"/><ToolbarSpacer id="_IDGenToolbarSpacer1"><layoutData><OverflowToolbarLayoutData id="_IDGenOverflowToolbarLayoutData10" priority="NeverOverflow" minWidth="20px"/></layoutData></ToolbarSpacer><Button id="_IDGenButton14" text="Alan Smith" type="Transparent" press=".handleUserNamePress" ariaHasPopup="Menu"><layoutData><OverflowToolbarLayoutData id="_IDGenOverflowToolbarLayoutData11" priority="NeverOverflow"/></layoutData></Button></tnt:ToolHeader></tnt:header><tnt:sideContent><tnt:SideNavigation id="_IDGenSideNavigation" expanded="true" itemSelect=".onItemSelect"><tnt:NavigationList id="_IDGenNavigationList"><tnt:NavigationListItem id="_IDGenNavigationListItem" text="Home" icon="sap-icon://home" key="home"/><tnt:NavigationListItem id="_IDGenNavigationListItem1" text="Author List" icon="sap-icon://employee" key="authorList"/><tnt:NavigationListItem id="_IDGenNavigationListItem2" text="Books List" icon="sap-icon://book" key="booksList"/></tnt:NavigationList></tnt:SideNavigation></tnt:sideContent><tnt:mainContents><NavContainer id="appNavContainer"/></tnt:mainContents></tnt:ToolPage></mvc:View>',
	"booksapp/view/AuthorList.view.xml":'<mvc:View xmlns:table="sap.ui.table" controllerName="booksapp.controller.AuthorsList"\n    xmlns:mvc="sap.ui.core.mvc"\n\n    xmlns="sap.m"><Page id="page2" title="Authors List" ><content><Table id="authorsTable" items="{authors>/Authors}"><columns><Column id="_IDGenColumn"><Text id="_IDGenText6" text="Author ID" /></Column><Column id="_IDGenColumn6"><Text id="_IDGenText7" text="Author Name" /></Column></columns><items><ColumnListItem id="_IDGenColumnListItem2"><cells><Text id="_IDGenText8" text="{authors>ID}" /><Text id="_IDGenText9" text="{authors>name}" /></cells></ColumnListItem></items></Table><Button id="_IDGenButton15" text="Back to Books" press="onNavigateBack" /></content></Page></mvc:View>',
	"booksapp/view/BooksList.view.xml":'<mvc:View controllerName="booksapp.controller.BooksList"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns="sap.m"><Page id="page" title="Books List"><content><VBox id="_IDGenVBox"><HBox id="_IDGenHBox"><Button id="_IDGenButton" text="Add Book" press="onCreateBook" icon="sap-icon://add-document"/><Button id="_IDGenButton1" text="Delete Selected" press="onDeleteBook" icon="sap-icon://delete"/><Button id="_IDGenButton2" text="Save Changes" press="onSaveChanges" icon="sap-icon://save"/></HBox><Table id="booksTable" items="{books>/Bookslist}" mode="SingleSelectMaster"><columns><Column id="_IDGenColumn1"><Text id="_IDGenText" text="Book ID"/></Column><Column id="_IDGenColumn2"><Text id="_IDGenText1" text="Title"/></Column><Column id="_IDGenColumn3"><Text id="_IDGenText2" text="Author"/></Column><Column id="_IDGenColumn4"><Text id="_IDGenText3" text="Price"/></Column><Column id="_IDGenColumn5"><Text id="_IDGenText4" text="Stock"/></Column></columns><items><ColumnListItem id="_IDGenColumnListItem" type="Active" press="onEditBook"><cells><Input id="_IDGenInput" value="{books>ID}" editable="false"/><Input id="_IDGenInput1" value="{books>title}"/><Input id="_IDGenInput2" value="{books>author_ID}"/><Input id="_IDGenInput3" value="{books>price}" type="Number"/><Input id="_IDGenInput4" value="{books>stock}" type="Number"/></cells></ColumnListItem></items></Table></VBox><VBox id="testtable"><Text id="_IDGenText5" text="test"/></VBox><Button id="_IDGenButton3" text="Go to Authors" press="onNavigateToAuthor"/></content></Page><Dialog id="addBookDialog" title="Add New Book"><content><VBox id="_IDGenVBox1"><Label id="_IDGenLabel" text="Title"/><Input id="newTitle"/><Label id="_IDGenLabel1" text="Author ID"/><Input id="newAuthorID"/><Label id="_IDGenLabel2" text="Price"/><Input id="newPrice" type="Number"/><Label id="_IDGenLabel3" text="Stock"/><Input id="newStock" type="Number"/></VBox></content><buttons><Button id="_IDGenButton4" text="Add" press="onConfirmAddBook"/><Button id="_IDGenButton5" text="Cancel" press="onCancelAddBook"/></buttons></Dialog></mvc:View>'
});
//# sourceMappingURL=Component-preload.js.map
