import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  url="http://localhost:4645/api/";

  constructor(private http:HttpClient) { }
  // get all
  getJobs(): Observable<any[]>{
    return this.http.get<any[]>(this.url+"jobs");
  }
  //
  // get one department
  getJob(id){
    return this.http.get(this.url+"jobs/"+id);
  }
  result
  //
  // post department
  addJob(job){
     let head=new HttpHeaders();
     head.set('Content-Type', 'application/json; charset=utf-8')
  this.result= this.http.post(this.url+"jobs", job,{headers: head}).subscribe(data => {
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
  // put department
  editJob(id,job){
    let head=new HttpHeaders();
    head.set('Content-Type', 'application/json; charset=utf-8')
this.http.put(this.url+"jobs/"+id,job,{headers: head}).subscribe(data => {
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

// delete department (header)
deleteJob(id){
  console.log("start delete");
  return this.http.delete(this.url+"jobs/"+id).subscribe(data=>{
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
