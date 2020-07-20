import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  url="http://localhost:4645/api/";
  constructor(private http:HttpClient) { }
//GetAll
  getAllEmployees(): Observable<any[]>{
    // console.log(" s url");
    return this.http.get<any[]>(this.url+"employees");

  }
  // Get one

   getEmployee(id){
    return this.http.get(this.url+"employees?id="+id);
  }
  result
  //
   // post Employee
   addEmployee(employee){
    let head=new HttpHeaders();
    head.set('Content-Type', 'application/json; charset=utf-8')
 this.result= this.http.post(this.url+"employees",employee,{headers: head}).subscribe(data => {
  //  alert('ok');
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
  // put Employee
  editEmployee(id,employee){
    let head=new HttpHeaders();
    head.set('Content-Type', 'application/json; charset=utf-8')
this.http.put(this.url+"employees?id="+id,employee,{headers: head}).subscribe(data => {
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
 // delete employee (header)
deleteEmployee(id){
  console.log("start delete");
  return this.http.delete(this.url+"employees?id="+id).subscribe(data=>{
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

