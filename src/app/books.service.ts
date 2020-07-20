import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor (private httpService: HttpClient) { }

  search(term) {
    var listOfBooks = this.httpService.get('http://localhost:4645/api/patients?name=' + term)
      .pipe(
        debounceTime(500),  // WAIT FOR 500 MILISECONDS ATER EACH KEY STROKE.
        map(
          (data: any) => {
            return (
              data.length != 0 ? data as any[] : [{"pat_f_name": "No Record Found"} as any]
            );
          }
        ));

    return listOfBooks;
  }
}
