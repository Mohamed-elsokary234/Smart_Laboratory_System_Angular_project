import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  url="http://localhost:4645/api/";
  //http://localhost:4645/api/patients?name=
  constructor(private http:HttpClient) { }
  // get all
  getTests(): Observable<any[]>{
    return this.http.get<any[]>(this.url+"Tests");

  }
  // get all
  // getTestsByDept(id){
  //   return this.http.get(this.url+"Tests/"id);

  // }
  //
  // get one Tests
  getTest(id){
    return this.http.get(this.url+"Tests?id="+id);
  }
  result
  //
  // post Tests
  addTest(Test){
     let head=new HttpHeaders();
     head.set('Content-Type', 'application/json; charset=utf-8')
  this.result= this.http.post(this.url+"Tests", Test,{headers: head}).subscribe(data => {
   // alert('ok');
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
  // put Tests
  editTest(id,Test){
    let head=new HttpHeaders();
    head.set('Content-Type', 'application/json; charset=utf-8')
this.http.put(this.url+"Tests?id="+id,Test,{headers: head}).subscribe(data => {
 // alert('ok');
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

// delete Tests (header)
deleteTest(id){
  console.log("start delete");
  return this.http.delete(this.url+"Tests?id="+id).subscribe(data=>{
   // alert('ok');
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
