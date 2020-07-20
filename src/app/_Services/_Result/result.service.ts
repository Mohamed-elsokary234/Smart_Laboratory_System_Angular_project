import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  url="http://localhost:4645/api/";

  constructor(private http:HttpClient) { }
  // get all
  getResults(): Observable<any[]>{
    return this.http.get<any[]>(this.url+"results");
  }
  //
  // get one Results
  getResult(id){
    return this.http.get(this.url+"results?id="+id);
  }
  result
  //
  // post Results
  addResult(Result){
     let head=new HttpHeaders();
     head.set('Content-Type', 'application/json; charset=utf-8')
  this.result= this.http.post(this.url+"results", Result,{headers: head}).subscribe(data => {
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
  //
  // put Results
  editResult(id,Result){
    let head=new HttpHeaders();
    head.set('Content-Type', 'application/json; charset=utf-8')
this.http.put(this.url+"results?id="+id,Result,{headers: head}).subscribe(data => {
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

// delete Results (header)
deleteResult(id){
  console.log("start delete");
  return this.http.delete(this.url+"results?id="+id).subscribe(data=>{
    alert('ok');
  console.log(data);
  },
  (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
          console.log('Client-side error occured.');
      } else {
          console.log('Server-side error occured.');
      };
});
}
// end

}
