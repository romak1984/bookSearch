import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksTableComponent implements OnInit {

  @Input() books: any[] = [];
  @Output() selected: EventEmitter<any> = new EventEmitter<any>();

  displayedColumns: string[] = ['title', 'subtitle', 'authors'];

  constructor() { }

  ngOnInit() {
  }

  bookSelected(book: any){
    this.selected.emit(book);
  }
}
