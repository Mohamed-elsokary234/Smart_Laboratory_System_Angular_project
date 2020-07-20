import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/_Models/employee';
import { EmployeesService } from 'src/app/_Services/_Employee/employees.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { JobService } from 'src/app/_Services/_Job/job.service';
import { element } from 'protractor';
//import { EmployeesService } from 'src/app/_Services/_Employee/employees.service';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  constructor(private employeesservice:EmployeesService,private jobservice:JobService) { }
  searchedKeyword: string;
  collection:any = { count:5, data: [] };


  ngOnInit(): void {
   // this.listEmployee();
   this.promiseA;
  }
  // array
  listEmployees;

listEmployee(){
this.employeesservice.getAllEmployees().subscribe(d=>{
  this.collection.data=d;
   console.log(this.collection.data);
  
});
}
//pagination
config = {
  itemsPerPage:4,
  currentPage: 1,
  totalItems: this.collection.data.length
};
pageChanged(event){
  this.config.currentPage = event;

}
// get job object
jobs;
getJob(){
  this.jobservice.getJobs().subscribe(d=>this.jobs=d);
  console.log(this.jobs);

}
allJob;
getAll(){
  for (let item of this.listEmployees) {
    for(let inner of this.jobs){
      if(item.job_Id_fk ==inner.job_Id ){
        this.allJob.push(inner.job_name);
        console.log(inner.job_name);
      }
      console.log(inner);

    }
        console.log(item);

  }
}
// --------------promise
 promiseA = new Promise( () => {
  this.listEmployee();
}).then(this.getJob).then(this.getAll).then(()=>{
  console.log("success")}).catch(()=>console.log("error"));
// At this point, "promiseA" is already settled.
// this.promiseA.then( (val) => console.log("asynchronous logging has val:",val) );
// console.log("immediate logging");
// -------------------
  
}