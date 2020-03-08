import { AppMaterialModule } from './app-material/app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BooksSearchComponent } from './books-search/books-search.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { BookDetailsDialogComponent } from './books-search/book-details-dialog/book-details-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchBoxComponent } from './books-search/search-box/search-box.component';
import { BooksTableComponent } from './books-search/books-table/books-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    BooksSearchComponent,
    WishListComponent,
    BookDetailsDialogComponent,
    SearchBoxComponent,
    BooksTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [
    BookDetailsDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
