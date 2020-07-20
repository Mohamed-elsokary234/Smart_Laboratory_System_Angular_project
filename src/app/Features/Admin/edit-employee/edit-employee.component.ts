import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/_Models/employee';
import { EmployeesService } from 'src/app/_Services/_Employee/employees.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { promise } from 'protractor';
import { JobService } from 'src/app/_Services/_Job/job.service';
//import { EmployeesService } from 'src/app/_Services/_Employee/employees.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  constructor(private employeesservice:EmployeesService,private jobService:JobService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.editEmployee();

      //let promise_obj=new Promise(()=>{
      this.emplId=this.ActivatedRoute.snapshot.paramMap.get("id");

     // }).then(()=>{
        let res=this.employeesservice.getEmployee(this.emplId).subscribe(d=>this.oldEmp=d);
        this.jobService.getJobs().subscribe(d=>this.jobs=d);
        // console.log(this.oldEmp.job_Id_fk);
        // console.log(this.jobs);
        // console.log(res);
      //}).then(()=> console.log(this.oldEmp));
  }
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  form=new FormGroup({
    // empl_Id:new FormControl('',Validators.required),
    empl_name:new FormControl('',Validators.required),
    empl_phone:new FormControl('',Validators.required),
    empl_address:new FormControl('',Validators.required),
    empl_salary:new FormControl('',Validators.required),
    empl_qulification:new FormControl('',Validators.required),
    empl_work_period:new FormControl('',Validators.required),
    empl_email:new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),
     job:new FormControl('',Validators.required),

  });
  // get Empl_Id(){
  //   return this.form.get( 'empl_Id');
  // }
   get Empl_name(){
    return this.form.get( 'empl_name');
  }
  get Empl_phone(){
    return this.form.get( 'empl_phone');
  }
  get Empl_address(){
    return this.form.get( 'empl_address');
  }
  get Empl_salary(){
    return this.form.get( 'empl_salary');
  }
  get Empl_qulification(){
    return this.form.get( 'empl_qulification');
  }
  get Empl_work_period(){
    return this.form.get( 'empl_work_period');
  }
  get Empl_email(){
    return this.form.get( 'empl_email');
  }
  get Job(){
    return this.form.get( 'job');
  }

  oldEmp;
  id;
  //------------
  emplId;
  emplname:string;
  emplphone:string;
  empladdress:string;
  emplsalary:number;
  emplqulification:string;
  emplwork_period:string;
  emplemail:string;
  jobId_fk:number;////////////?
  User_ID_fk : string;
  emp_date: Date
  getJobId(e){
      this.jobId_fk=e.target.value;
  }
  jobs;
  job_Id;
  Emp:employee;
  Result

  editEmployee(){
  this.Emp=new employee(this.emplId,this.emplname,this.emplphone,this.empladdress,
 this.emplsalary,
  this.emplqulification,
  this.emplwork_period,
  this.emplemail,
 this.jobId_fk,
    this.User_ID_fk, this.emp_date
  );
  this.Result= this.employeesservice.editEmployee(this.emplId,this.Emp);
  console.log(this.Result);
}


}
