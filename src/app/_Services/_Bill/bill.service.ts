import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {


  url: string = "http://localhost:4645/api/";

  // url:string="http://localhost:49986/api/bills";

  constructor(private http: HttpClient) {
  }

  //get all bills
  getAllBills(): Observable<any[]> {
    return this.http.get<any[]>(this.url + "bills");
    console.log("services");
  }

  //get by id
  getBill(id) {
    return this.http.get(this.url + "bills?id=" + id);

  }

  result;

  //add bill
  addbill(bill) {
    let head = new HttpHeaders();
    head.set('Content-Type', 'application/json; charset=utf-8')
    this.result = this.http.post(this.url + "bills", bill, {headers: head}).subscribe(data => {
        alert('Saved Successfully');
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      });
  }

  //add bill
// add(NewBill:Bill)
// {
//   return this.http.post(this.url,NewBill);
// }
//update bill
  // put department
  editBill(id, bill) {
    let head = new HttpHeaders();
    head.set('Content-Type', 'application/json; charset=utf-8')
    this.http.put(this.url + "bills?id=" + id, bill, {headers: head}).subscribe(data => {
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

// update(NewBill:Bill)
// {
//   return this.http.put(this.url+"/"+NewBill.bill_id,NewBill);
// }
//delete bill
// delet(Id:number)
// {
//   return this.http.delete(this.url+"/"+Id);
// }


  deleteBill(id) {
    console.log("start delete");
    return this.http.delete(this.url + "bills?id=" + id).subscribe(data => {
        // alert('ok');
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
