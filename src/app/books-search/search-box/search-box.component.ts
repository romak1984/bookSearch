import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  searchString = new FormControl('');

  @Output() search: EventEmitter<string> =  new EventEmitter<string>(); 

  constructor() { }

  ngOnInit() {
    this.searchString.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      map(val => val.trim())
    )
    .subscribe((value) => {this.search.emit(value)})
  }

}
