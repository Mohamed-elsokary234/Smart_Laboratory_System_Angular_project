import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DispatcherService {

  url = "http://localhost:4645/api/";

  constructor(private http: HttpClient) {
  }

  //GetAll
  getAllDispatchers(): Observable<any[]> {
    console.log(" s url");
    return this.http.get<any[]>(this.url + "dispatchers");

  }

  //
  // Get one

  getDispatcher(id) {
    return this.http.get(this.url + "dispatchers?id=" + id);
  }

  result

  // post Dispatcher
  addDispatcher(dispatcher) {
    let head = new HttpHeaders();
    head.set('Content-Type', 'application/json; charset=utf-8')
    this.result = this.http.post(this.url + "dispatchers", dispatcher, {headers: head}).subscribe(data => {
        alert('ok');
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      });
    return this.result;
  }

  // put dispatcher
  editDispatcher(id, dispatcher) {
    let head = new HttpHeaders();
    head.set('Content-Type', 'application/json; charset=utf-8')
    this.http.put(this.url + "dispatchers?id=" + id, dispatcher, {headers: head}).subscribe(data => {
        alert('ok');
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      });
    return this.result;
  }

  // delete dispatcher(header)
  deleteDispatcher(id) {
    console.log("start delete");
    return this.http.delete(this.url + "dispatchers?id=" + id).subscribe(data => {
        alert('ok');
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
        ;
      });
  }

  // end

}
