namespace my.bookshop;

using { Currency, managed } from '@sap/cds/common';

entity Books  {
  key ID          : UUID;
  title           : String(255);
  author          : Association to Authors;
  genre           : String(50);
  stock           : Integer;
  price           : Decimal(10,2);
  currency        : Currency;
  publishedDate   : Date;
  description     : String;
}

entity Authors  {
  key ID   : UUID;
  name     : String(100);
  country  : String(100);
  books    : Composition of many Books on books.author = $self;
}

entity Orders  {
  key ID          : UUID;
  book           : Association to Books;
  quantity       : Integer;
  totalPrice     : Decimal(10,2);
  orderDate      : DateTime;
}
