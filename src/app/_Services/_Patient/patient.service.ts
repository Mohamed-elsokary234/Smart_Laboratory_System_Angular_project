import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class patientService {
  url="http://localhost:4645/api/";

  constructor(private http:HttpClient) { }
  // get all
  getpatients(): Observable<any[]>{
    return this.http.get<any[]>(this.url+"patients");
  }
  //
  // get one patients
  getpatient(id){
    return this.http.get(this.url+"patients?id="+id);
  }
  result
  //
  // post patients
  addpatient(patient){
     let head=new HttpHeaders();
     head.set('Content-Type', 'application/json; charset=utf-8')
  this.result= this.http.post(this.url+"patients", patient,{headers: head}).subscribe(data => {
    //alert('ok');
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
  // put patients
  editpatient(id,patient){
    let head=new HttpHeaders();
    head.set('Content-Type', 'application/json; charset=utf-8')
this.http.put(this.url+"patients?id="+id,patient,{headers: head}).subscribe(data => {
  //alert('ok');
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

// delete patients (header)
deletepatient(id){
  console.log("start delete");
  return this.http.delete(this.url+"patients?id="+id).subscribe(data=>{
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
