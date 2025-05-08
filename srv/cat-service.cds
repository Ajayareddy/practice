using my.bookshop as my from '../db/schema';

service CatalogService {
    @odata.draft.enabled entity Books as projection on my.Books;
    @cds.redirection.target
    entity Bookslist as projection on my.Books;
    @odata.draft.enabled
    entity Authors as projection on my.Authors;
    entity BookImages as projection on my.BookImages;
}

service CatalogService1@(path:'/test') {
    @odata.draft.enabled entity Books as projection on my.Books;
    @cds.redirection.target
    entity Bookslist as projection on my.Books;
    @odata.draft.enabled
    entity Authors as projection on my.Authors;
    entity BookImages as projection on my.BookImages;
}
