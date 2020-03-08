import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private wishlist: any[] = [];
  private subject = new BehaviorSubject<any[]>(this.wishlist);

  constructor() { }

  getBooks(): Observable<any[]>{
    return this.subject.asObservable();
  }

  addToWishList(book: any){
    if(this.wishlist.findIndex(element => element.id === book.id) === -1){
      this.wishlist.push(book);
      this.subject.next(this.wishlist);
    }
  }

  removeFromWishList(book: any){ 
    this.wishlist = this.wishlist.filter(element => element.id !== book.id);
    this.subject.next(this.wishlist);
  }
}
