import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/_Models/employee';
import { EmployeesService } from 'src/app/_Services/_Employee/employees.service';
import { JobService } from 'src/app/_Services/_Job/job.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private EmployeesService:EmployeesService,private JobServices:JobService) { }


  form = new FormGroup({
    emp_email:new FormControl('',Validators.required),
    emp_password:new FormControl('',Validators.required),
  });

 
  get Emp_email(){
    return this.form.get('emp_email');
  }
  get Emp_password(){
    return this.form.get('emp_password');

  }

  // get passward(){
  //   return this.form.get('UserPassward');
  // }
  email;
  password;
  job:string;
  ngOnInit(): void {
  }

  addemp(){
    // this.addemp
    if( this.job === 'patient' )
    console.log("login patient");
    else if( this.job === 'doctor')
    console.log("login patient");
    else if(this.job === 'dispatcher')
    console.log("dispatcher");
    else
    console.log("error job");
  }
}
