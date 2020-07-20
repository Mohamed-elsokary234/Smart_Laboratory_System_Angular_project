import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { BooksService } from '../books.service'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BooksService]
})
export class BookComponent implements OnInit {
  title = 'AutoComplete Example in Angular 6';

  searchTerm : FormControl = new FormControl();
  myBooks = <any>[];

  constructor (private service: BooksService) { }

  ngOnInit () {
    this.searchTerm.valueChanges.subscribe(
      term => {
        if (term != '') {
          this.service.search(term).subscribe(
            data => {
              this.myBooks = data as any[];
              //console.log(data[0].BookName);
            })
        }
      })
  }
}
