import { WishlistService } from './../core/api/wishlist.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit, OnDestroy {

  books: any = [];
  subscription: Subscription;
  constructor(private wishListService: WishlistService) { }

  ngOnInit() {
    this.subscription = this.wishListService.getBooks().subscribe(value => this.books = value);
  }

  bookSelected(book: any){
    this.wishListService.removeFromWishList(book);
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
