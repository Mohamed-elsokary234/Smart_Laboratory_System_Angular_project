import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/_Services/_Employee/employees.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(private employeesservice:EmployeesService,private  ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
this.emplId=+this.ActivatedRoute.snapshot.paramMap.get("id");
this.employeesservice.getEmployee(this.emplId).subscribe(d=>this.emp=d);
 // this.DeleteEmployee();
  }
  emp;

  Result
  emplId:any;
  DeleteEmployee(){
    this.Result=this.employeesservice.deleteEmployee(this.emplId);
    console.log(this.Result);
  }

}