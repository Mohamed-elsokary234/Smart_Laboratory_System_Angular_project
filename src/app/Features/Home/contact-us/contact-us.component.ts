import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/_Services/_Job/job.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor( private jobservice: JobService) { }

  ngOnInit(): void {
    this.jobservice.getJobs().subscribe(d=>this.jobs=d);
  }
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  form=new FormGroup({
    empl_name:new FormControl('',Validators.required),
    empl_mail:new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),
    job:new FormControl('',Validators.required),

  });
  // get Empl_Id(){
  //   return this.form.get( 'empl_Id');
  // }   
   get Empl_name(){
    return this.form.get( 'empl_name');
  }  get Empl_mail(){
    return this.form.get( 'empl_mail');
  } get Empl_job(){
    return this.form.get( 'empl_job');
  } 
  // 
  jobs;
  EmpName;
  EmpMail;
  job_Id;
  // 
  getJobId(e){
    this.job_Id=e.target.value;
  }
}
