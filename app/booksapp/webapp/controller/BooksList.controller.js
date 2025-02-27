sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/m/MessageToast",
    "sap/m/MessageBox"
], (Controller,MessageToast,MessageBox) => {
    "use strict";

    return Controller.extend("booksnspace.booksapp.controller.BooksList", {
        onInit() {
            this.oModel = this.getOwnerComponent().getModel("books");
            this.getView().setModel(this.oModel, "books");
            
        },
        onAfterBinding:function() {
        debugger    
        },
        onAfterRendering: function () {
            var oVBox = this.getView().byId("testtable"); // Get the VBox
            
            // Remove previous content (if any) before adding new table
            oVBox.removeAllItems();
        
            // Add a title text
            var oTitle = new sap.m.Text({ text: "Books List" });
            oVBox.addItem(oTitle);
        
            // Create a new table
            var oTable = new sap.m.Table({
                columns: [
                    new sap.m.Column({ header: new sap.m.Text({ text: "Book ID" }) }),
                    new sap.m.Column({ header: new sap.m.Text({ text: "Title" }) }),
                    new sap.m.Column({ header: new sap.m.Text({ text: "Author" }) }),
                    new sap.m.Column({ header: new sap.m.Text({ text: "Price" }) }),
                    new sap.m.Column({ header: new sap.m.Text({ text: "Stock" }) })
                ]
            });
        

            // Perform AJAX call to fetch book data
            // @ts-ignore
            $.ajax({
                url: "/odata/v4/catalog/Books", // Adjust this URL based on your CAPM service
                method: "GET",
                dataType: "json",
                success: function (oData) {
                    oData.value.forEach(function (oBook) {
                        var oItem = new sap.m.ColumnListItem({
                            cells: [
                                new sap.m.Text({ text: oBook.ID }),
                                new sap.m.Text({ text: oBook.title }),
                                new sap.m.Text({ text: oBook.author_ID }),
                                new sap.m.Text({ text: oBook.price }),
                                new sap.m.Text({ text: oBook.stock })
                            ]
                        });
                        oTable.addItem(oItem);
                    });
                },
                error: function (err) {
                    console.error("Error fetching books:", err);
                }
            });
        
            // Add the table to the VBox
            oVBox.addItem(oTable);
        }
        ,
        onAddBook: function () {
            this.getView().byId("addBookDialog").open();
        },

        onConfirmAddBook: function () {
            let oModel = this.getView().getModel("books");
            let oData = oModel.getProperty("/Books");

            let newBook = {
                ID: (oData.length + 1).toString(), // Simulating ID increment
                title: this.getView().byId("newTitle").getValue(),
                author_ID: this.getView().byId("newAuthorID").getValue(),
                price: parseFloat(this.getView().byId("newPrice").getValue()),
                stock: parseInt(this.getView().byId("newStock").getValue(), 10)
            };

            if (!newBook.title || !newBook.author_ID) {
                MessageToast.show("Please enter valid book details.");
                return;
            }

            oData.push(newBook);
            oModel.setProperty("/Books", oData);
            this.getView().byId("addBookDialog").close();
            MessageToast.show("Book added successfully.");
        },

        onCancelAddBook: function () {
            this.getView().byId("addBookDialog").close();
        },

        // 📌 Edit a Book (handled through inline inputs)
        onEditBook: function (oEvent) {
            MessageToast.show("You can edit book details directly in the table.");
        },

        // 📌 Delete Selected Book
        onDeleteBook: function () {
            let oTable = this.getView().byId("booksTable");
            let oModel = this.getView().getModel("books");
            let oData = oModel.getProperty("/Books");

            let oSelectedItem = oTable.getSelectedItem();
            if (!oSelectedItem) {
                MessageToast.show("Please select a book to delete.");
                return;
            }

            let iIndex = oTable.indexOfItem(oSelectedItem);
            oData.splice(iIndex, 1);

            oModel.setProperty("/Books", oData);
            MessageToast.show("Book deleted successfully.");
        },

        // 📌 Save Changes (Updates All Books)
        onSaveChanges: function () {
            let oModel = this.getView().getModel("books");
            oModel.refresh(true);
            MessageToast.show("All changes saved successfully.");
        },
        onNavigateToAuthor: function () {
            // debugger
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteAuthorsList");
        }
    });
});