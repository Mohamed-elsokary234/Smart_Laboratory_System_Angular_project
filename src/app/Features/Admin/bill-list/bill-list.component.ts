import { Component, OnInit } from '@angular/core';
import { BillService } from 'src/app/_Services/_Bill/bill.service';
import { patientService } from 'src/app/_Services/_Patient/patient.service';
import { TestService } from 'src/app/_Services/_Test/test.service';
import { Bill } from 'src/app/_Models/bill';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {

  constructor(private billService:BillService,
              private patientservice:patientService,
              private testService:TestService) { }

  ngOnInit(): void {
    this.getBills();
    
  }
  Bills=[]
  patients=[];
  tests=[];
getBills(){
  this.billService.getAllBills().subscribe((d:any[])=>{

    this.Bills=d;
    // console.log(this.Bills);
  });
  // 
  this.patientservice.getpatients().subscribe((d:any[])=>{

    this.patients=d;
    console.log(this.patients);

  });
  // 
  this.testService.getTests().subscribe((d:any[])=>{

    this.tests=d;
    console.log(this.tests);

  });
  // 

}
}
