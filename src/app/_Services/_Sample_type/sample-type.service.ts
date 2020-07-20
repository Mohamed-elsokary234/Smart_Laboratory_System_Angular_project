import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class sample_typeService {
  url="http://localhost:4645/api/";

  constructor(private http:HttpClient) { }
  // get all
  getsample_types(): Observable<any[]>{
    return this.http.get<any[]>(this.url+"sample_types");
  }
  //
  // get one sample_types
  getsample_type(id){
    return this.http.get(this.url+"sample_types/"+id);
  }
  result
  //
  // post sample_types
  addsample_type(sample_type){
     let head=new HttpHeaders();
     head.set('Content-Type', 'application/json; charset=utf-8')
  this.result= this.http.post(this.url+"sample_types", sample_type,{headers: head}).subscribe(data => {
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
  // put sample_types
  editsample_type(id,sample_type){
    let head=new HttpHeaders();
    head.set('Content-Type', 'application/json; charset=utf-8')
this.http.put(this.url+"sample_types/"+id,sample_type,{headers: head}).subscribe(data => {
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

// delete sample_types (header)
deletesample_type(id){
  console.log("start delete");
  return this.http.delete(this.url+"sample_types/"+id).subscribe(data=>{
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
