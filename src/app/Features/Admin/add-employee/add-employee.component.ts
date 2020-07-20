import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/_Models/employee';
import { EmployeesService } from 'src/app/_Services/_Employee/employees.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { JobService } from 'src/app/_Services/_Job/job.service';
//import { EmployeesService } from 'src/app/_Services/_Employee/employees.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class addEmployeeComponent implements OnInit {

  constructor(private employeesservice:EmployeesService,private jobService:JobService) { }

  ngOnInit(): void {
    // this.addEmployee();
    // get jobs();
    this.getJobs();

  }
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  form=new FormGroup({
    // empl_Id:new FormControl('',Validators.required),
    empl_name:new FormControl('',Validators.required),
    empl_phone:new FormControl('',Validators.required),
    empl_address:new FormControl('',Validators.required),
    empl_salary:new FormControl('',Validators.required),
    empl_quantification:new FormControl('',Validators.required),
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
  get  Empl_quantification(){
    return this.form.get( 'empl_quantification');
  }
  get  Empl_work_period(){
    return this.form.get( 'empl_work_period');
  }
  get   Empl_email(){
    return this.form.get( 'empl_email');
  }
  get  Job(){
    return this.form.get( 'job');
  }
  jobs;
  getJobs(){
    this.jobService.getJobs().subscribe(d=>this.jobs=d);
  }
  getJobId(e){
    console.log(e.target.value);
this.job_Id=e.target.value;
    // console.log(this.dept.value);
    console.log("-----------------------");
  }
  // selectedJob
  //selected_Job=this.se
  //------------
  emplId:number;
  emplname:string;
  emplphone:string;
  empladdress:string;
  emplsalary:number;
  emplquantification:string;
  emplwork_period:string;
  emplemail:string;
  Emp:employee;
  job_Id:number;
  User_ID_fk : string;
  emp_date: Date

addEmployee(){

  this.Emp=new employee(this.emplId,this.emplname,this.emplphone,this.empladdress,
                    this.emplsalary,
                    this.emplquantification,
                    this.emplwork_period,
                    this.emplemail,
                    this.job_Id,
    this.User_ID_fk, this.emp_date
  );
  this.employeesservice.addEmployee(this.Emp);
}


}
