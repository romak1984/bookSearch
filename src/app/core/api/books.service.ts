import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  baseUrl = 'https://www.googleapis.com';
  booksUrl = '/books/v1/volumes';

  constructor(private http: HttpClient) {}

  getBooks(searchString: string){
    return this.http.get(this.baseUrl + this.booksUrl + this.constructSearchString(searchString));
  }

  private constructSearchString(searchString: string): string{
    return '?q=' + searchString.trim() + searchString.trim() + '&maxResults=20';
  }
}
