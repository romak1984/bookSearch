import { WishlistService } from './../core/api/wishlist.service';
import { BookDetailsDialogComponent } from './book-details-dialog/book-details-dialog.component';
import { BooksService } from './../core/api/books.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.scss']
})
export class BooksSearchComponent{

  constructor(private booksService: BooksService, public dialog: MatDialog, private wishListService: WishlistService) { }

  books: any = [];
  private subscribtion: Subscription;

  onSearch(searchString: string){
    if ( this.subscribtion ) { this.subscribtion.unsubscribe(); }
    if ( searchString === '') {
      this.books = [];
    } else {
      this.subscribtion = this.booksService.getBooks(searchString).subscribe((data: any) => {this.books = data.items;})
     }
  }

  bookSelected(book: any){
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      width: '500px',
      data: book
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.wishListService.addToWishList(result);
      }
    });
  }
}
